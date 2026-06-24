import { createFileRoute } from "@tanstack/react-router";
import heroFood from "@/assets/hero-food.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ballz Mall — Restaurant in Discovery, Johannesburg" },
      { name: "description", content: "Ballz Mall: 4.6-star restaurant in Discovery, JHB. Dine-in & takeaway. R200–500 per person. Open until 9pm. Call 082 971 0751." },
      { property: "og:title", content: "Ballz Mall — Bold flavours in Discovery, JHB" },
      { property: "og:description", content: "Dine-in & takeaway restaurant rated 4.6 stars. 68 Clarendon Dr, Discovery." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: "Ballz Mall",
        address: { "@type": "PostalAddress", streetAddress: "68 Clarendon Dr", addressLocality: "Discovery", addressRegion: "Johannesburg", postalCode: "1709", addressCountry: "ZA" },
        telephone: "+27829710751",
        priceRange: "R200–R500",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.6", reviewCount: "70" },
        servesCuisine: "Restaurant",
      }),
    }],
  }),
  component: Index,
});

const menu = [
  { name: "Signature Smashed Burger", desc: "Double beef patty, melted cheddar, secret sauce, brioche bun.", price: "R 165" },
  { name: "Loaded Boerie Rolls", desc: "House boerewors, caramelised onion, tomato relish, crisp roll.", price: "R 110" },
  { name: "Chicken Wings (10pc)", desc: "Tossed in peri-peri, BBQ, or lemon-pepper. Served with ranch.", price: "R 145" },
  { name: "Rump Steak 300g", desc: "Grain-fed rump, chimichurri, hand-cut chips, house salad.", price: "R 285" },
  { name: "Loaded Chips", desc: "Hand-cut chips, smoked cheese, bacon, jalapeños, garlic aioli.", price: "R 95" },
  { name: "Grilled Hake & Chips", desc: "Pan-seared hake, lemon butter, tartare, crispy chips.", price: "R 175" },
];

const hours = [
  ["Monday", "11:00 – 21:00"],
  ["Tuesday", "11:00 – 21:00"],
  ["Wednesday", "11:00 – 21:00"],
  ["Thursday", "11:00 – 21:00"],
  ["Friday", "11:00 – 22:00"],
  ["Saturday", "11:00 – 22:00"],
  ["Sunday", "11:00 – 20:00"],
];

const reviews = [
  { name: "Thando M.", text: "Best smashed burger on the West Rand. Generous portions and friendly staff.", stars: 5 },
  { name: "Lerato K.", text: "Wings were on point — peri-peri had real kick. Will be back.", stars: 5 },
  { name: "Pieter v.d. M.", text: "Solid steak for the price. Cozy spot, quick service for takeaway.", stars: 4 },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-2xl tracking-wider text-primary">BALLZ MALL</a>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-muted-foreground">
            <a href="#menu" className="hover:text-primary transition">Menu</a>
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#reviews" className="hover:text-primary transition">Reviews</a>
            <a href="#visit" className="hover:text-primary transition">Visit</a>
          </nav>
          <a href="tel:0829710751" className="hidden sm:inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition">
            082 971 0751
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <img src={heroFood} alt="Signature burger and fries at Ballz Mall" width={1920} height={1280} className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary mb-6">
              <span className="h-px w-8 bg-primary" /> Discovery, Johannesburg
            </div>
            <h1 className="text-6xl md:text-8xl font-display leading-[0.9]">
              Bold flavours.<br />
              <span style={{ background: "var(--gradient-ember)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Generous plates.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Ballz Mall is a neighbourhood favourite serving smashed burgers, flame-grilled steaks,
              and loaded chips in the heart of Discovery. Dine-in or takeaway — every plate done right.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#menu" className="px-6 py-3 rounded-md font-semibold bg-primary text-primary-foreground hover:opacity-90 transition">View the Menu</a>
              <a href="tel:0829710751" className="px-6 py-3 rounded-md font-semibold border border-border hover:border-primary transition">Call to Order</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm">
              <div>
                <div className="text-primary text-2xl font-display">4.6★</div>
                <div className="text-muted-foreground">70 reviews</div>
              </div>
              <div>
                <div className="text-primary text-2xl font-display">R200–500</div>
                <div className="text-muted-foreground">per person</div>
              </div>
              <div>
                <div className="text-primary text-2xl font-display">Open</div>
                <div className="text-muted-foreground">Closes 9pm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">The Menu</div>
            <h2 className="text-5xl md:text-6xl font-display">Crowd Favourites</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {menu.map((item) => (
              <div key={item.name} className="flex justify-between gap-6 pb-6 border-b border-dashed border-border group">
                <div className="flex-1">
                  <h3 className="text-2xl font-display tracking-wide group-hover:text-primary transition">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
                <div className="font-display text-2xl text-primary whitespace-nowrap">{item.price}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-12 uppercase tracking-widest">
            Sample menu — selection may vary. Call for daily specials.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">About</div>
            <h2 className="text-5xl font-display mb-6">A West Rand local, through and through.</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tucked into Clarendon Drive in Discovery, Ballz Mall has been feeding the neighbourhood with
              honest, satisfying food for years. We keep things simple: quality ingredients, hot grills,
              and big-hearted hospitality. Whether you're stopping in for a quick takeaway or settling
              into a booth with friends, you'll leave full and looking forward to next time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Years Serving" value="10+" />
            <Stat label="Star Rating" value="4.6" />
            <Stat label="Dine-in" value="Yes" />
            <Stat label="Takeaway" value="Yes" />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">What Guests Say</div>
            <h2 className="text-5xl font-display">4.6 ★ from 70 reviews</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition">
                <div className="text-primary mb-3 tracking-widest">{"★".repeat(r.stars)}<span className="text-muted-foreground">{"★".repeat(5 - r.stars)}</span></div>
                <p className="text-sm leading-relaxed">"{r.text}"</p>
                <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">— {r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="py-24 px-6 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Visit Us</div>
            <h2 className="text-5xl font-display mb-8">Come hungry.</h2>
            <div className="space-y-6 text-sm">
              <InfoRow label="Address">
                68 Clarendon Dr, Discovery<br />Johannesburg, 1709
              </InfoRow>
              <InfoRow label="Phone">
                <a href="tel:0829710751" className="text-primary hover:underline">082 971 0751</a>
              </InfoRow>
              <InfoRow label="Service">Dine-in · Takeaway</InfoRow>
              <InfoRow label="Price">R 200 – 500 per person</InfoRow>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=Ballz+Mall+68+Clarendon+Dr+Discovery+Johannesburg" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 px-6 py-3 rounded-md font-semibold bg-primary text-primary-foreground hover:opacity-90 transition">
              Get Directions
            </a>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Hours</div>
            <div className="bg-background border border-border rounded-lg p-6">
              {hours.map(([day, time]) => (
                <div key={day} className="flex justify-between py-2 border-b border-border last:border-0 text-sm">
                  <span className="uppercase tracking-wider">{day}</span>
                  <span className="text-muted-foreground">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border text-center text-sm text-muted-foreground">
        <div className="font-display text-xl text-primary tracking-widest mb-2">BALLZ MALL</div>
        <p>© {new Date().getFullYear()} Ballz Mall · 68 Clarendon Dr, Discovery, JHB · 082 971 0751</p>
      </footer>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background border border-border rounded-lg p-6 text-center">
      <div className="text-4xl font-display text-primary">{value}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1">{label}</div>
      <div>{children}</div>
    </div>
  );
}
