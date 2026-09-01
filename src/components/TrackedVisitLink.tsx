"use client";

// Outbound link to an operator. External links are marked data-outbound so
// TrackingLinks decorates them with UTM params. When `funnel` is set (Card
// Outpost only), a click fires the Meta custom event RipTierFunnelClick.
export function TrackedVisitLink({
  href,
  external,
  funnel,
  className,
  children,
}: {
  href: string;
  external?: boolean;
  funnel?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const rel = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  const outbound = external ? { "data-outbound": "1" } : {};
  return (
    <a
      className={className}
      href={href}
      {...outbound}
      {...rel}
      onClick={() => {
        if (!funnel) return;
        const w = window as unknown as { fbq?: (...args: unknown[]) => void };
        if (typeof w.fbq === "function") w.fbq("trackCustom", "RipTierFunnelClick");
      }}
    >
      {children}
    </a>
  );
}
