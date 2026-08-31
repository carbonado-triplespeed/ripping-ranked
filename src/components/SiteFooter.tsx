export function SiteFooter() {
  return (
    <footer className="site">
      <div className="wrap foot-in">
        <div>
          <div className="brand">
            <span className="mark">R</span> RipTier
          </div>
          <p className="disc">
            RipTier independently ranks digital trading-card pack-opening sites
            using publicly available information. Scores are for information only
            and are not financial or purchasing advice. Digital pack purchases are
            not investments. Intended for adults 18 and over.
          </p>
        </div>
        <nav className="foot-links" aria-label="Footer">
          <a href="/methodology">Methodology</a>
          <a href="/reviews">Reviews</a>
          <a href="/guides">Guides</a>
          <a href="/about">About</a>
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
