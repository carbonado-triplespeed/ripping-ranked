export function SiteNav() {
  return (
    <nav className="nav">
      <div className="nav-in">
        <a className="brand" href="/">
          <span className="mark">R</span> RipTier
        </a>
        <div className="nav-links">
          <a href="/">Rankings</a>
          <a href="/reviews">Reviews</a>
          <a href="/methodology">Methodology</a>
          <a href="/guides">Guides</a>
        </div>
        <span className="nav-tag">UPDATED WEEKLY</span>
      </div>
    </nav>
  );
}
