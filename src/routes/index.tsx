import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowDownRight, ArrowRight, Check, Compass, Headphones,
  Hotel, Mail, MapPin, Menu, MessageCircle, Phone, Plane, ShieldCheck, Ticket,
  UserRound, X, CarFront, FileCheck2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, whatsappUrl } from "@/lib/contact";
import heroImage from "@/assets/kerala-backwaters-hero.jpg";
import aboutImage from "@/assets/kerala-coast-about.jpg";

const title = "ILARA TRAVERS | Travel Services in Kasaragod, Kerala";
const description = "ILARA TRAVERS provides flight booking, train ticket booking, hotel booking, visa services and chauffeur services in Kasaragod, Kerala.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: Plane, number: "01", title: "Flight Booking", description: "Assistance with domestic and international flight bookings." },
  { icon: Ticket, number: "02", title: "Train Ticket Booking", description: "Convenient assistance with train ticket arrangements." },
  { icon: Hotel, number: "03", title: "Hotel Booking", description: "Find suitable accommodation for your travel needs." },
  { icon: FileCheck2, number: "04", title: "Visa Services", description: "Assistance with visa-related travel requirements and documentation." },
  { icon: CarFront, number: "05", title: "Chauffeur Services", description: "Comfortable and convenient chauffeur transportation services." },
];

const benefits = [
  { icon: UserRound, title: "Personalized Travel Assistance", description: "Support shaped around the details of your journey." },
  { icon: Headphones, title: "Convenient Booking Support", description: "Help coordinating the arrangements you need." },
  { icon: ShieldCheck, title: "Reliable Service", description: "A thoughtful approach to every travel request." },
  { icon: Compass, title: "Customer-Focused Approach", description: "Your plans and preferences stay at the centre." },
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#home" aria-label="ILARA TRAVERS, back to top" className="inline-flex shrink-0 flex-col leading-none">
      <span className={`font-display text-[18px] font-extrabold tracking-normal sm:text-[20px] ${inverse ? "text-deep-foreground" : "text-primary"}`}>ILARA <span className="font-medium">TRAVERS</span></span>
      <span className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.21em] ${inverse ? "text-deep-foreground/60" : "text-muted-foreground"}`}>Kasaragod · Kerala</span>
    </a>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="mx-auto grid h-[72px] max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:flex lg:justify-between lg:px-12">
        <Brand />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => <a key={item.label} href={item.href} className="text-sm font-semibold text-foreground/75 transition-colors hover:text-primary">{item.label}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild size="site" className="hidden sm:inline-flex"><a href="#enquiry">Enquire Now <ArrowRight aria-hidden="true" /></a></Button>
          <Button variant="outline" size="icon" className="h-10 w-10 shrink-0 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu">
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>
      {open && <nav id="mobile-menu" aria-label="Mobile navigation" className="border-t border-border bg-background px-5 pb-5 pt-2 lg:hidden">
        {navItems.map((item) => <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block border-b border-border py-3.5 text-sm font-semibold">{item.label}</a>)}
        <Button asChild size="site" className="mt-4 w-full"><a href="#enquiry" onClick={() => setOpen(false)}>Enquire Now <ArrowRight aria-hidden="true" /></a></Button>
      </nav>}
    </header>
  );
}

function SectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return <div className="max-w-2xl">
    <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary"><span className="h-px w-7 bg-accent" />{kicker}</p>
    <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[42px]">{title}</h2>
    {copy && <p className="mt-4 text-base leading-7 text-muted-foreground">{copy}</p>}
  </div>;
}

function Hero() {
  return <section id="home" className="relative isolate min-h-[620px] overflow-hidden sm:min-h-[650px] lg:min-h-[700px]">
    <img src={heroImage} alt="Modern international city skyline with skyscrapers and a distant airplane at golden hour" width={1600} height={1104} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
    <div className="hero-shade absolute inset-0 -z-10" />
    <div className="mx-auto flex min-h-[620px] max-w-7xl flex-col justify-end px-5 pb-17 pt-20 sm:min-h-[650px] sm:px-8 sm:pb-22 lg:min-h-[700px] lg:justify-center lg:px-12 lg:pt-25">
      <div className="max-w-[720px] text-primary-foreground">
        <p className="entrance mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/90"><span className="h-px w-9 bg-accent" />Your travel partner in Kasaragod, Kerala</p>
        <h1 className="entrance font-display text-[42px] font-bold leading-[1.13] sm:text-6xl lg:text-[70px]">Your Journey,<br />Our Responsibility</h1>
        <p className="entrance mt-6 max-w-[570px] text-base leading-7 text-primary-foreground/90 sm:text-lg sm:leading-8">From flights and trains to hotels, visas and chauffeur services, ILARA TRAVERS helps you arrange the details of your journey.</p>
        <div className="entrance mt-9 flex flex-wrap gap-3">
          <Button asChild variant="hero" size="site"><a href="#enquiry">Enquire Now <ArrowRight aria-hidden="true" /></a></Button>
          <Button asChild variant="heroOutline" size="site"><a href="#services">Explore Services <ArrowDownRight aria-hidden="true" /></a></Button>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 hidden border-t border-primary-foreground/25 text-primary-foreground/85 lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-12 py-4 text-xs font-semibold uppercase tracking-[0.14em]"><span>Thoughtful travel arrangements</span><span>Kasaragod · Kerala · India</span></div>
    </div>
  </section>;
}

function Services() {
  return <section id="services" className="bg-background py-20 sm:py-25 lg:py-30">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><SectionHeading kicker="What we do" title="Travel Services Made Simple" copy="The essentials of your trip, with helpful support at every step." /><span className="hidden text-sm font-semibold text-muted-foreground md:block">01 / OUR SERVICES</span></div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => <article key={service.title} className="group flex min-h-[228px] flex-col rounded-lg border border-border bg-card p-6 shadow-[0_8px_24px_-18px_color-mix(in_oklab,var(--foreground)_35%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_36px_-20px_color-mix(in_oklab,var(--foreground)_45%,transparent)] sm:p-7">
          <div className="flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-primary"><service.icon size={24} strokeWidth={1.7} aria-hidden="true" /></span><span className="font-display text-xs font-bold text-muted-foreground/55">{service.number}</span></div>
          <h3 className="mt-7 font-display text-lg font-bold text-card-foreground">{service.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.description}</p>
        </article>)}
        <div className="flex min-h-[228px] flex-col justify-between rounded-lg bg-primary p-7 text-primary-foreground">
          <span className="flex h-12 w-12 items-center justify-center rounded-md border border-primary-foreground/30"><ArrowRight size={23} aria-hidden="true" /></span>
          <div><p className="font-display text-lg font-bold">Have a trip in mind?</p><Button asChild variant="link" className="mt-3 h-auto p-0 font-semibold text-primary-foreground underline decoration-primary-foreground/60 underline-offset-4 hover:text-primary-foreground"><a href="#enquiry">Tell us what you need <ArrowRight aria-hidden="true" /></a></Button></div>
        </div>
      </div>
    </div>
  </section>;
}

function WhyChooseUs() {
  return <section className="border-y border-border bg-secondary/55 py-20 sm:py-25">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-18">
        <div><SectionHeading kicker="The ILARA approach" title="Why Choose ILARA TRAVERS?" copy="Travel planning should feel clear, considered and centred around you." /></div>
        <div className="grid gap-x-9 gap-y-8 sm:grid-cols-2">
          {benefits.map((item) => <div key={item.title} className="border-t border-border pt-5"><item.icon className="mb-5 text-primary" size={27} strokeWidth={1.65} aria-hidden="true" /><h3 className="font-display text-base font-bold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p></div>)}
        </div>
      </div>
    </div>
  </section>;
}

function About() {
  return <section id="about" className="bg-background py-20 sm:py-25 lg:py-30">
    <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
      <div className="relative"><img src={aboutImage} alt="Travel planning desk with a world map, passport, boarding pass, notebooks, smartphone and a leather travel bag in warm natural light" width={1104} height={1312} loading="lazy" className="aspect-[1.1] w-full rounded-lg object-cover sm:aspect-[1.24] lg:aspect-[0.94]" /><div className="absolute bottom-0 left-0 bg-deep px-5 py-4 text-deep-foreground"><span className="text-xs font-bold uppercase tracking-[0.16em]">Rooted in Kasaragod</span><p className="mt-1 text-sm text-deep-foreground/75">Here for the journey ahead.</p></div></div>
      <div><SectionHeading kicker="About us" title="Travel support, with a personal touch." /><p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground">ILARA TRAVERS is a travel service company based in Kasaragod, Kerala. We help customers arrange flights, train tickets, hotels, visas, and chauffeur services.</p><p className="mt-4 max-w-lg text-base leading-8 text-muted-foreground">Whether you are planning a short trip or a longer journey, we are here to help you bring the details together.</p><Button asChild size="site" className="mt-8"><a href="#enquiry">Talk to Us <ArrowRight aria-hidden="true" /></a></Button></div>
    </div>
  </section>;
}

function Enquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const phone = String(data.get("phone") || "");
    const digits = phone.replace(/\D/g, "");
    if (!/^\+?[\d\s()-]+$/.test(phone) || digits.length < 10 || digits.length > 15) {
      setPhoneError("Enter a valid phone number with 10 to 15 digits.");
      form.querySelector<HTMLInputElement>("#phone")?.focus();
      return;
    }
    setPhoneError("");
    setSubmitted(true);
    form.reset();
  }

  return <section id="enquiry" className="bg-deep py-20 text-deep-foreground sm:py-25 lg:py-30">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12">
      <div><p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-accent"><span className="h-px w-7 bg-accent" />Start a conversation</p><h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[48px]">Plan Your Next Journey</h2><p className="mt-5 max-w-md text-base leading-8 text-deep-foreground/75">Tell us what you need and our team will get back to you.</p><div className="mt-12 hidden border-t border-deep-foreground/20 pt-5 lg:block"><p className="text-sm text-deep-foreground/65">Flights · Trains · Hotels · Visas · Chauffeur</p></div></div>
      <div className="rounded-lg bg-card p-6 text-card-foreground sm:p-9 lg:p-10">
        {submitted ? <div role="status" className="flex min-h-[370px] flex-col items-start justify-center"><span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary"><Check size={27} aria-hidden="true" /></span><h3 className="font-display text-2xl font-bold">Enquiry preview complete</h3><p className="mt-3 max-w-md leading-7 text-muted-foreground">Your details passed validation, but this form is not connected yet. Nothing was sent to ILARA TRAVERS.</p><Button variant="outline" size="site" className="mt-7" onClick={() => setSubmitted(false)}>Start another enquiry</Button></div> : <form onSubmit={handleSubmit} noValidate={false}>
          <div className="mb-7 flex items-center gap-3 text-sm font-bold text-primary"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary"><MessageCircle size={17} aria-hidden="true" /></span>Tell us about your plans</div>
          <div className="space-y-5"><div><label htmlFor="full-name" className="mb-2 block text-sm font-semibold">Full Name <span aria-hidden="true">*</span></label><input id="full-name" name="name" type="text" autoComplete="name" required minLength={2} placeholder="Your full name" className="h-12 w-full rounded-md border border-input bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/65 focus:border-primary focus:ring-2 focus:ring-primary/15" /></div>
          <div><label htmlFor="phone" className="mb-2 block text-sm font-semibold">Phone Number <span aria-hidden="true">*</span></label><input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required placeholder="Your phone number" aria-invalid={!!phoneError} aria-describedby={phoneError ? "phone-error" : undefined} onChange={() => phoneError && setPhoneError("")} className="h-12 w-full rounded-md border border-input bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/65 focus:border-primary focus:ring-2 focus:ring-primary/15" />{phoneError && <p id="phone-error" className="mt-2 text-sm text-destructive">{phoneError}</p>}</div>
          <div><label htmlFor="inquiry" className="mb-2 block text-sm font-semibold">Inquiry <span aria-hidden="true">*</span></label><textarea id="inquiry" name="inquiry" required minLength={5} rows={5} placeholder="Tell us about the services you need..." className="w-full resize-y rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/65 focus:border-primary focus:ring-2 focus:ring-primary/15" /></div></div>
          <Button type="submit" size="site" className="mt-6 w-full sm:w-auto">Submit Enquiry <ArrowRight aria-hidden="true" /></Button>
          <p className="mt-4 text-xs leading-5 text-muted-foreground">Preview only — submissions are not delivered yet.</p>
        </form>}
      </div>
    </div>
  </section>;
}

function WhatsAppLink({ floating = false }: { floating?: boolean }) {
  if (!whatsappUrl) {
    if (floating) return <div className="fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7"><Button variant="whatsapp" size="floating" disabled title="WhatsApp number coming soon" aria-label="WhatsApp contact coming soon" className="shadow-lg"><MessageCircle size={25} aria-hidden="true" /></Button></div>;
    return <Button variant="whatsapp" size="site" disabled title="WhatsApp number coming soon"><MessageCircle aria-hidden="true" /> WhatsApp coming soon</Button>;
  }
  if (floating) return <div className="fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7"><Button asChild variant="whatsapp" size="floating" className="shadow-lg" title="Chat with ILARA TRAVERS on WhatsApp"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with ILARA TRAVERS on WhatsApp"><MessageCircle size={25} aria-hidden="true" /></a></Button></div>;
  return <Button asChild variant="whatsapp" size="site"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Chat on WhatsApp</a></Button>;
}

function Contact() {
  return <section id="contact" className="bg-background py-20 sm:py-25 lg:py-30"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
    <SectionHeading kicker="Get in touch" title="Let's connect." copy="Have a question about your travel plans? Reach out to ILARA TRAVERS in Kasaragod." />
    <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="grid content-start gap-0">
        <div className="border-t border-border py-5"><div className="flex gap-4"><Phone size={20} className="mt-1 shrink-0 text-primary" aria-hidden="true" /><div><h3 className="text-sm font-bold">Phone</h3>{contact.phone ? <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className="mt-1 inline-block text-sm text-muted-foreground hover:text-primary">{contact.phone}</a> : <p className="mt-1 text-sm text-muted-foreground">Number to be added</p>}</div></div></div>
        <div className="border-t border-border py-5"><div className="flex gap-4"><MapPin size={20} className="mt-1 shrink-0 text-primary" aria-hidden="true" /><div><h3 className="text-sm font-bold">Address</h3><p className="mt-1 text-sm text-muted-foreground">{contact.location}</p></div></div></div>
        <div className="border-t border-border py-5"><div className="flex gap-4"><Mail size={20} className="mt-1 shrink-0 text-primary" aria-hidden="true" /><div><h3 className="text-sm font-bold">Email</h3>{contact.email ? <a href={`mailto:${contact.email}`} className="mt-1 inline-block text-sm text-muted-foreground hover:text-primary">{contact.email}</a> : <p className="mt-1 text-sm text-muted-foreground">Email to be added</p>}</div></div></div>
        <div className="border-t border-border py-6"><p className="mb-4 text-sm font-semibold">Prefer a quick conversation?</p><WhatsAppLink /></div>
      </div>
      <div className="map-pattern relative flex min-h-[315px] items-center justify-center overflow-hidden rounded-lg border border-border sm:min-h-[390px]" role="img" aria-label="Map placeholder for Kasaragod, Kerala, India">
        <div className="absolute left-[12%] top-[20%] h-20 w-36 rotate-[-17deg] rounded-full border-[12px] border-background/75 sm:h-26 sm:w-48" /><div className="absolute bottom-[14%] right-[3%] h-40 w-56 rotate-[31deg] rounded-full border-[14px] border-background/70" />
        <div className="relative z-10 flex flex-col items-center rounded-lg border border-border bg-card px-8 py-7 text-center shadow-xl"><span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground"><MapPin size={23} aria-hidden="true" /></span><strong className="font-display text-lg">Kasaragod, Kerala</strong><span className="mt-1 text-sm text-muted-foreground">India</span><span className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">Exact map location coming soon</span></div>
      </div>
    </div>
  </div></section>;
}

function Footer() {
  return <footer className="bg-deep text-deep-foreground"><div className="mx-auto max-w-7xl px-5 pb-7 pt-14 sm:px-8 lg:px-12">
    <div className="grid gap-10 border-b border-deep-foreground/15 pb-12 md:grid-cols-[1.5fr_0.8fr_1fr_1fr] md:gap-8">
      <div><Brand inverse /><p className="mt-5 max-w-xs text-sm leading-7 text-deep-foreground/65">Travel-related services based in Kasaragod, Kerala. Helping you arrange the details of your journey.</p></div>
      <div><h3 className="mb-5 text-sm font-bold">Quick Links</h3><div className="flex flex-col gap-3 text-sm text-deep-foreground/65">{navItems.map((item) => <a key={item.label} href={item.href} className="hover:text-deep-foreground">{item.label}</a>)}</div></div>
      <div><h3 className="mb-5 text-sm font-bold">Services</h3><div className="flex flex-col gap-3 text-sm text-deep-foreground/65">{services.map((item) => <a key={item.title} href="#services" className="hover:text-deep-foreground">{item.title}</a>)}</div></div>
      <div><h3 className="mb-5 text-sm font-bold">Contact</h3><div className="flex flex-col gap-3 text-sm text-deep-foreground/65"><span>{contact.location}</span>{contact.phone ? <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className="hover:text-deep-foreground">{contact.phone}</a> : <span>Phone: to be added</span>}{whatsappUrl ? <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-deep-foreground">WhatsApp</a> : <span>WhatsApp: to be added</span>}</div></div>
    </div><p className="pt-6 text-xs text-deep-foreground/50">© 2026 ILARA TRAVERS. All rights reserved.</p>
  </div></footer>;
}

function HomePage() {
  return <div className="overflow-x-clip"><SiteHeader /><main><Hero /><Services /><WhyChooseUs /><About /><Enquiry /><Contact /></main><Footer /><WhatsAppLink floating /></div>;
}