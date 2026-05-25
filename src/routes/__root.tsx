import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

const siteUrl = "https://pureo.in";
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: "Pureo",
  alternateName: "Pureo Flow Solutions",
  description:
    "Professional residential, commercial and industrial cleaning, housekeeping, maid, plumbing, electrical, pest control and A/C maintenance services in Thiruvananthapuram, Kerala.",
  url: siteUrl,
  telephone: ["+91 8330066663", "+91 4712336662"],
  email: "info@pureomail.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1st Floor, PTC Tower Building, SS Kovil Road, Thampanoor",
    addressLocality: "Thiruvananthapuram",
    addressRegion: "Kerala",
    postalCode: "695001",
    addressCountry: "IN",
  },
  areaServed: [
    "Thiruvananthapuram",
    "Trivandrum",
    "Kerala",
    "Kollam",
    "Kochi",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  serviceType: [
    "House cleaning",
    "Sofa cleaning",
    "Carpet cleaning",
    "Bathroom cleaning",
    "Commercial cleaning",
    "Industrial cleaning",
    "Housekeeping services",
    "Maid services",
    "Pest control",
    "Plumbing works",
    "Electrical works",
    "A/C maintenance",
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pureo Flow Solutions | Best Cleaning Service Near Me in Kerala" },
      { name: "description", content: "Top-rated cleaning services in Trivandrum, Kochi, Kozhikode, and Kollam. Pureo offers professional housemaid services, sofa cleaning, plumbing, carpentry, and facility management." },
      { name: "keywords", content: "cleaning service near me, best cleaning service in Trivandrum, cleaning service in Kerala, maid services Trivandrum, house cleaning Kochi, sofa cleaning Kozhikode, plumbing works Kollam, carpentry services Kerala, electrical maintenance, Zenpurio housekeeping, wonder maids" },
      { name: "author", content: "Pureo Flow Solutions" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "theme-color", content: "#14b8a6" },
      { property: "og:title", content: "Pureo Flow Solutions | Best Cleaning & Maid Services in Kerala" },
      { property: "og:description", content: "Top-rated professional cleaning, plumbing, and housemaid services serving Trivandrum, Kochi, Kozhikode, and Kollam." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl },
      { property: "og:site_name", content: "Pureo Flow Solutions" },
      { property: "og:image", content: `${siteUrl}/pureo-logo.jpeg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Pureo Flow Solutions | Cleaning Services in Kerala" },
      { name: "twitter:description", content: "Professional home, commercial and industrial cleaning services in Kerala." },
      { name: "twitter:image", content: `${siteUrl}/pureo-logo.jpeg` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: siteUrl },
      { rel: "icon", href: "/pureo-logo.jpeg" },
      { rel: "apple-touch-icon", href: "/pureo-logo.jpeg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
