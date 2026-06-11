// RSS equivalent of https://news.google.com/search?q=SpaceX&hl=en-US&gl=US&ceid=US:en
const FEED_URL =
  "https://news.google.com/rss/search?q=SpaceX&hl=en-US&gl=US&ceid=US:en";

const MAX_ITEMS = 8;

type NewsItem = {
  title: string;
  link: string;
  source: string;
  date: string;
};

function decodeEntities(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) =>
      String.fromCodePoint(parseInt(code, 16)),
    )
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function extractTag(item: string, tag: string): string {
  const match = item.match(
    new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`),
  );
  return match ? decodeEntities(match[1].trim()) : "";
}

// The feed is external input: only ever link to https URLs, so a malformed or
// tampered feed can't inject javascript:/data: URLs into the page.
function isSafeLink(url: string): boolean {
  try {
    return new URL(url).protocol === "https:";
  } catch {
    return false;
  }
}

function formatDate(pubDate: string): string {
  const date = new Date(pubDate);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

async function getNews(): Promise<NewsItem[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 1800 } });
    if (!res.ok) return [];
    const xml = await res.text();
    return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]
      .slice(0, MAX_ITEMS)
      .map(([, item]) => {
        const source = extractTag(item, "source");
        let title = extractTag(item, "title");
        // Google News appends " - Source Name" to every headline
        if (source && title.endsWith(` - ${source}`)) {
          title = title.slice(0, -` - ${source}`.length);
        }
        return {
          title,
          link: extractTag(item, "link"),
          source,
          date: formatDate(extractTag(item, "pubDate")),
        };
      })
      .filter((item) => item.title && isSafeLink(item.link));
  } catch {
    return [];
  }
}

export default async function NewsSection() {
  const news = await getNews();

  return (
    <div className="news-panel">
      <div className="news-panel-header">
        <span className="section-number">📡 Live Feed</span>
        <span className="section-title">Latest SpaceX News</span>
        <div className="section-line" />
        <span className="news-attribution">Source: Google News</span>
      </div>
      {news.length > 0 ? (
        <div className="news-grid">
          {news.map((item) => (
            <a
              className="news-item"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.link}
            >
              <div className="news-item-title">{item.title}</div>
              <div className="news-item-meta">
                {item.source && (
                  <span className="news-item-source">{item.source}</span>
                )}
                {item.date && <span>{item.date}</span>}
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="news-empty">
          Live news feed is temporarily unavailable. Headlines will reappear on
          the next refresh.
        </div>
      )}
    </div>
  );
}
