"use client";

import * as React from "react";
import {
  ArrowRight,
  Camera,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;

const locations = [
  {
    city: "Cagliari",
    address: "Via San Lucifero 30, 09125 Cagliari",
    phone: "340 193 7476",
    tel: "+393401937476",
    map: "https://www.google.com/maps/search/?api=1&query=Via%20San%20Lucifero%2030%2C%2009125%20Cagliari",
  },
  {
    city: "Villacidro",
    address: "Via Regione Sarda 26, 09039 Villacidro",
    phone: "379 228 5092",
    tel: "+393792285092",
    map: "https://www.google.com/maps/search/?api=1&query=Via%20Regione%20Sarda%2026%2C%2009039%20Villacidro",
  },
];

const serviceGroups = [
  {
    number: "01",
    title: "Beauty",
    intro: "Dettagli curati, gesti precisi, risultati armoniosi.",
    items:
      "Manicure, semipermanente, semigel, pedicure estetica e profonda, Metodo Podocuria, epilazione tradizionale, tinta e henné sopracciglia, laminazione ciglia e sopracciglia.",
  },
  {
    number: "02",
    title: "Viso",
    intro: "Ogni pelle richiede un ascolto diverso.",
    items:
      "Pulizia viso personalizzata, percorsi per idratazione, luminosità, segni del tempo e discromie, peeling e trattamenti cosmetici professionali.",
  },
  {
    number: "03",
    title: "Corpo e tecnologie",
    intro: "Manualità e tecnologia lavorano nello stesso percorso.",
    items:
      "Trattamenti corpo personalizzati, Icoone Laser, Transderm-V, radiofrequenza, pressoterapia ed epilazione laser.",
  },
  {
    number: "04",
    title: "Relax",
    intro: "Tempo lento, attenzione autentica.",
    items:
      "Rituali viso e corpo, massaggi, trattamento plantare, rituali dedicati alla gravidanza, Ayurveda, Reiki, cristalloterapia e Pinda Sweda.",
  },
];

const reviews = [
  {
    quote: "Posto molto bello e personale specializzato.",
    name: "Maria Grazia",
  },
  {
    quote: "Assolutamente consigliato!",
    name: "Laura Curridori",
  },
  {
    quote: "Ottimi risultati, molto soddisfatta.",
    name: "Enrica Farci",
  },
];

const gallery = [
  {
    src: assetPath("/images/trattamento-viso.webp"),
    alt: "Trattamento viso eseguito nel centro Àmati",
    className: "gallery-tall",
  },
  {
    src: assetPath("/images/icoone.webp"),
    alt: "Trattamento corpo con tecnologia Icoone nel centro Àmati",
    className: "gallery-wide",
  },
  {
    src: assetPath("/images/ambiente-villacidro.webp"),
    alt: "Cabina trattamenti della sede Àmati di Villacidro",
    className: "gallery-standard",
  },
  {
    src: assetPath("/images/ambiente-relax.webp"),
    alt: "Ambiente dedicato ai trattamenti e al relax",
    className: "gallery-standard",
  },
  {
    src: assetPath("/images/beauty-manicure.webp"),
    alt: "Trattamento beauty professionale nel centro Àmati",
    className: "gallery-wide",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": locations.map((location) => ({
    "@type": "BeautySalon",
    "@id": `https://amati-centro-estetico.sneakers-tot.chatgpt.site/#${location.city.toLowerCase()}`,
    name: `Àmati Centro Estetico ${location.city}`,
    url: "https://amati-centro-estetico.sneakers-tot.chatgpt.site/#sedi",
    telephone: location.tel,
    email: "amati.valecentroestetico@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address.split(",")[0],
      postalCode: location.address.split(",")[1]?.trim().split(" ")[0],
      addressLocality: location.city,
      addressCountry: "IT",
    },
    sameAs: ["https://www.instagram.com/amaticentroestetico._/"],
  })),
};

function BookingPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className={className}>{children}</button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="booking-sheet border-0 bg-[#f7f0e8] p-0 sm:max-w-[520px]"
      >
        <SheetHeader className="booking-sheet-header">
          <p className="eyebrow dark">Scegli la sede</p>
          <SheetTitle className="display-title text-[clamp(2.6rem,7vw,4.9rem)] font-normal leading-[.92] text-[#2a171b]">
            Da dove vuoi iniziare?
          </SheetTitle>
          <SheetDescription className="max-w-sm text-base leading-7 text-[#67575a]">
            Contatta direttamente il centro più comodo. Potrai conoscere le disponibilità e fissare la tua consulenza.
          </SheetDescription>
        </SheetHeader>
        <div className="booking-options">
          {locations.map((location) => (
            <article className="booking-option" key={location.city}>
              <span>Àmati</span>
              <h3>{location.city}</h3>
              <p>{location.address}</p>
              <div className="booking-actions">
                <a href={`tel:${location.tel}`} aria-label={`Chiama la sede Àmati di ${location.city}`}>
                  <Phone aria-hidden="true" /> Chiama
                </a>
                <a
                  href={`mailto:amati.valecentroestetico@gmail.com?subject=Richiesta%20appuntamento%20Àmati%20${location.city}`}
                  aria-label={`Richiedi un appuntamento nella sede Àmati di ${location.city}`}
                >
                  <Mail aria-hidden="true" /> Scrivi
                </a>
                <a
                  href={location.map}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Apri le indicazioni per la sede Àmati di ${location.city}`}
                >
                  <MapPin aria-hidden="true" /> Indicazioni
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="booking-note">
          Preferisci scrivere? <a href="mailto:amati.valecentroestetico@gmail.com">Invia un’email</a>
        </p>
      </SheetContent>
    </Sheet>
  );
}

function PolicyPanel({ type }: { type: "privacy" | "cookie" }) {
  const isPrivacy = type === "privacy";
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="footer-link">
          {isPrivacy ? "Privacy Policy" : "Cookie Policy"}
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="policy-sheet sm:max-w-[600px]">
        <SheetHeader className="p-0">
          <p className="eyebrow dark">Documento in bozza</p>
          <SheetTitle className="display-title text-5xl font-normal text-[#2a171b]">
            {isPrivacy ? "Privacy Policy" : "Cookie Policy"}
          </SheetTitle>
        </SheetHeader>
        {isPrivacy ? (
          <div className="policy-copy">
            <p>
              Questa anteprima non raccoglie dati tramite moduli e non installa sistemi di profilazione o analytics. I collegamenti a telefono, email, mappe e Instagram aprono servizi esterni scelti dall’utente.
            </p>
            <p>
              Prima della pubblicazione, l’informativa dovrà essere completata con i dati aggiornati del titolare, le finalità, le basi giuridiche, i tempi di conservazione e i fornitori effettivamente utilizzati.
            </p>
            <p>
              Contatto indicato per la bozza: amati.valecentroestetico@gmail.com — P. IVA 03779470925.
            </p>
          </div>
        ) : (
          <div className="policy-copy">
            <p>
              Il sito applicativo, in questa versione, non usa cookie analitici o pubblicitari. Non è quindi mostrato un banner di consenso.
            </p>
            <p>
              La piattaforma che ospita l’anteprima privata può usare funzionalità tecniche indispensabili per sicurezza e accesso. La policy andrà aggiornata se, nella versione pubblica, verranno aggiunti analytics, mappe incorporate, pixel o altri servizi di terze parti.
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="mobile-menu-button" aria-label="Apri il menu">
          <Menu aria-hidden="true" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="mobile-menu-sheet">
        <SheetHeader className="sr-only">
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Navigazione del sito Àmati</SheetDescription>
        </SheetHeader>
        <img
          src={assetPath("/images/amati-logo.webp")}
          alt="Àmati Centro Estetico"
          width="832"
          height="600"
          className="mobile-menu-logo"
        />
        <nav aria-label="Navigazione mobile">
          <SheetClose asChild><a href="#trattamenti">Trattamenti</a></SheetClose>
          <SheetClose asChild><a href="#metodo">Il metodo</a></SheetClose>
          <SheetClose asChild><a href="#chi-siamo">Chi siamo</a></SheetClose>
          <SheetClose asChild><a href="#sedi">Le sedi</a></SheetClose>
        </nav>
        <BookingPanel className="button button-primary w-full">
          Prenota <ArrowRight aria-hidden="true" />
        </BookingPanel>
      </SheetContent>
    </Sheet>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.classList.add("motion-ready");
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skip-link" href="#contenuto">Vai al contenuto</a>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <a href="#inizio" className="brand" aria-label="Àmati Centro Estetico, torna all’inizio">
          <img src={assetPath("/images/amati-logo.webp")} alt="Logo Àmati Centro Estetico" width="832" height="600" />
          <span className="brand-wordmark" aria-hidden="true">
            <strong>Àmati</strong>
            <small>Centro estetico</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navigazione principale">
          <a href="#trattamenti">Trattamenti</a>
          <a href="#metodo">Il metodo</a>
          <a href="#chi-siamo">Chi siamo</a>
          <a href="#sedi">Le sedi</a>
        </nav>
        <BookingPanel className="header-book">Prenota</BookingPanel>
        <BookingPanel className="mobile-header-book">Prenota</BookingPanel>
        <MobileMenu />
      </header>

      <main id="contenuto" tabIndex={-1}>
      <section className="hero" id="inizio" aria-labelledby="hero-title">
        <picture className="hero-picture">
          <img
            src={assetPath("/images/centro-estetico-amati-trattamento-manuale.webp")}
            alt="Operatrice Àmati durante un trattamento corpo manuale a una cliente, davanti alla scritta Benessere"
            width="1024"
            height="683"
            fetchPriority="high"
            loading="eager"
            className="hero-image"
          />
        </picture>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-location hero-line">Cagliari <span /> Villacidro</div>
          <p className="hero-kicker hero-line">Estetica avanzata · cura personale</p>
          <h1 id="hero-title">
            <span>Il tuo centro</span>
            <span>estetico</span>
            <span className="accent-line">parte da te.</span>
          </h1>
          <p className="hero-subtitle hero-line">
            Nei centri estetici Àmati trovi percorsi personalizzati per bellezza, benessere e relax.
          </p>
          <div className="hero-actions hero-line">
            <BookingPanel className="button button-light">
              Prenota la tua consulenza <ArrowRight aria-hidden="true" />
            </BookingPanel>
            <a className="text-link light" href="#trattamenti">
              Scopri i trattamenti <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="hero-microcopy hero-line">
            Scegli la sede e contatta direttamente il centro. Nessun modulo da compilare.
          </p>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <span /> Scorri
        </div>
      </section>

      <section className="trust-strip" aria-label="Àmati in breve">
        <ul>
          <li><strong>2 sedi</strong><span>Cagliari e Villacidro</span></li>
          <li><strong>4 aree</strong><span>Beauty, viso, corpo e relax</span></li>
          <li><strong>Un metodo</strong><span>Consulenza, cura e controlli</span></li>
        </ul>
      </section>

      <section className="intro section-shell" aria-labelledby="intro-title">
        <div className="section-index reveal">01 — Àmati</div>
        <div className="intro-heading reveal">
          <p className="eyebrow">Due centri, un modo di prendersi cura</p>
          <h2 id="intro-title" className="display-title">
            Non un trattamento<br />uguale per tutte.
          </h2>
        </div>
        <div className="intro-copy reveal">
          <p>
            Il percorso parte da te: pelle, esigenze e risultato desiderato.
          </p>
          <p>
            Professionalità e ascolto guidano ogni trattamento. Ricevi anche indicazioni semplici per la cura a casa.
          </p>
          <a href="#metodo" className="text-link dark">
            Conosci il metodo <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="feature feature-laser" id="trattamenti" aria-labelledby="laser-title">
        <div className="feature-image-wrap reveal">
          <img
            src={assetPath("/images/laser.webp")}
            alt="Seduta di epilazione laser eseguita nel centro Àmati"
            width="800"
            height="533"
            loading="lazy"
            decoding="async"
          />
          <span className="image-caption">Epilazione laser · Àmati</span>
        </div>
        <div className="feature-copy reveal">
          <p className="eyebrow dark">Trattamento in evidenza</p>
          <span className="feature-number">01</span>
          <h2 id="laser-title" className="display-title">Più libertà,<br />un percorso<br /><em>alla volta.</em></h2>
          <p>
            La consulenza chiarisce caratteristiche personali, area da trattare e obiettivi. Il percorso viene seguito nel tempo, accompagnando la riduzione progressiva della ricrescita.
          </p>
          <BookingPanel className="button button-primary">
            Richiedi una consulenza laser <ArrowRight aria-hidden="true" />
          </BookingPanel>
        </div>
      </section>

      <section className="feature feature-manual" aria-labelledby="manual-title">
        <div className="feature-copy reveal">
          <p className="eyebrow light">Trattamento in evidenza</p>
          <span className="feature-number">02</span>
          <h2 id="manual-title" className="display-title">Il valore<br />del tocco,<br /><em>su misura.</em></h2>
          <p>
            Ogni trattamento corpo nasce dall’ascolto e dall’esperienza dell’operatrice. Ritmo, pressione e gesti si adattano alle tue esigenze. L’obiettivo è favorire benessere, cura e leggerezza.
          </p>
          <BookingPanel className="button button-outline-light">
            Richiedi una consulenza corpo <ArrowRight aria-hidden="true" />
          </BookingPanel>
        </div>
        <div className="feature-image-wrap reveal">
          <img
            src={assetPath("/images/trattamento-manuale.webp")}
            alt="Trattamento corpo manuale personalizzato nella sede Àmati di Villacidro"
            width="800"
            height="533"
            loading="lazy"
            decoding="async"
          />
          <span className="image-caption light">Manualità · ascolto · esperienza</span>
        </div>
      </section>

      <section className="method section-shell" id="metodo" aria-labelledby="method-title">
        <div className="method-lead reveal">
          <p className="eyebrow">Il metodo Àmati</p>
          <h2 id="method-title" className="display-title">Un percorso<br />che evolve<br /><em>con te.</em></h2>
          <p>
            Non una seduta standard. Condividiamo le scelte e adattiamo il percorso attraverso controlli periodici.
          </p>
        </div>
        <ol className="method-steps">
          {[
            ["01", "Consulenza e ascolto", "Conosciamo esigenze, abitudini e obiettivi."],
            ["02", "Percorso personalizzato", "Definiamo trattamenti e priorità con chiarezza."],
            ["03", "Cura professionale", "Sedute in istituto e indicazioni domiciliari coerenti."],
            ["04", "Controlli periodici", "Osserviamo il percorso e lo adattiamo nel tempo."],
          ].map(([number, title, copy], index) => (
            <li className="reveal" style={{ transitionDelay: `${index * 90}ms` }} key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="services section-shell" aria-labelledby="services-title">
        <div className="services-head reveal">
          <div>
            <p className="eyebrow">Gli altri servizi</p>
            <h2 id="services-title" className="display-title">La cura,<br />in ogni dettaglio.</h2>
          </div>
          <p>
            Esplora le aree di trattamento. Durante la consulenza definiamo insieme la proposta più adatta.
          </p>
        </div>
        <div className="service-list reveal">
          {serviceGroups.map((service) => (
            <Collapsible key={service.title}>
              <CollapsibleTrigger className="service-trigger">
                <span>{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.intro}</p>
                </div>
                <ChevronDown aria-hidden="true" />
              </CollapsibleTrigger>
              <CollapsibleContent className="service-content">
                <p>{service.items}</p>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </section>

      <section className="about" id="chi-siamo" aria-labelledby="about-title">
        <div className="about-image reveal">
          <img
            src={assetPath("/images/team-cagliari.webp")}
            alt="Le professioniste Àmati davanti alla sede di Cagliari"
            width="1024"
            height="683"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="about-copy reveal">
          <p className="eyebrow dark">Chi siamo</p>
          <h2 id="about-title" className="display-title">Competenza<br />che sa farti<br /><em>sentire a casa.</em></h2>
          <p>
            Valentina e il team uniscono esperienza, formazione continua e attenzione concreta. Nei centri di Cagliari e Villacidro trovi professionalità, discrezione e un approccio personale.
          </p>
          <BookingPanel className="text-link dark button-reset">
            Conosciamoci con una consulenza <ArrowRight aria-hidden="true" />
          </BookingPanel>
        </div>
      </section>

      <section className="reviews section-shell" aria-labelledby="reviews-title">
        <div className="reviews-label reveal">
          <p className="eyebrow light">Dicono di noi</p>
          <span>Parole vere,<br />esperienze Àmati.</span>
        </div>
        <Carousel className="review-carousel reveal" opts={{ loop: true }} aria-label="Recensioni delle clienti Àmati">
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.name}>
                <figure>
                  <Sparkles aria-hidden="true" />
                  <blockquote>“{review.quote}”</blockquote>
                  <figcaption>{review.name}</figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="carousel-controls">
            <CarouselPrevious className="carousel-button carousel-prev" />
            <CarouselNext className="carousel-button carousel-next" />
          </div>
        </Carousel>
      </section>

      <section className="gallery section-shell" aria-labelledby="gallery-title">
        <div className="gallery-head reveal">
          <p className="eyebrow">Dentro Àmati</p>
          <h2 id="gallery-title" className="display-title">Spazi, gesti,<br /><em>attenzioni.</em></h2>
          <p className="gallery-hint">Scorri per vedere la galleria <span aria-hidden="true">→</span></p>
        </div>
        <div className="gallery-grid" aria-label="Galleria fotografica Àmati">
          {gallery.map((image, index) => (
            <figure
              className={`${image.className} reveal`}
              style={{ transitionDelay: `${(index % 3) * 80}ms` }}
              key={image.src}
            >
              <img
                src={image.src}
                alt={image.alt}
                width="1024"
                height="683"
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="locations section-shell" id="sedi" aria-labelledby="locations-title">
        <div className="locations-head reveal">
          <p className="eyebrow light">Le due sedi</p>
          <h2 id="locations-title" className="display-title">Il tuo centro<br />più vicino.</h2>
          <p>Contatta direttamente la sede per disponibilità e appuntamenti.</p>
        </div>
        <div className="location-grid">
          {locations.map((location, index) => (
            <article className="location-card reveal" style={{ transitionDelay: `${index * 100}ms` }} key={location.city}>
              <span className="location-number">0{index + 1}</span>
              <p>Àmati</p>
              <h3>{location.city}</h3>
              <address>{location.address}</address>
              <a href={`tel:${location.tel}`} className="location-phone">{location.phone}</a>
              <div className="location-actions">
                <a href={`tel:${location.tel}`} aria-label={`Chiama la sede Àmati di ${location.city}`}><Phone aria-hidden="true" /> Chiama</a>
                <a href={location.map} target="_blank" rel="noreferrer" aria-label={`Apri le indicazioni per la sede Àmati di ${location.city}`}><MapPin aria-hidden="true" /> Indicazioni</a>
                <a href={`mailto:amati.valecentroestetico@gmail.com?subject=Richiesta%20appuntamento%20Àmati%20${location.city}`} aria-label={`Richiedi un appuntamento nella sede Àmati di ${location.city}`}>
                  <Mail aria-hidden="true" /> Richiedi appuntamento
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="final-cta"
        aria-labelledby="cta-title"
        style={
          {
            "--final-cta-image": `url("${assetPath("/images/centro-estetico-amati-trattamento-manuale.webp")}")`,
          } as React.CSSProperties
        }
      >
        <div className="final-cta-inner reveal">
          <p className="eyebrow light">Quando vuoi, siamo qui</p>
          <h2 id="cta-title" className="display-title">
            Il tuo percorso può iniziare<br />da una semplice <em>consulenza.</em>
          </h2>
          <BookingPanel className="button button-light">
            Scegli la sede <ArrowRight aria-hidden="true" />
          </BookingPanel>
        </div>
      </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <a href="#inizio" className="footer-brand" aria-label="Torna all’inizio">
            <img src={assetPath("/images/amati-logo.webp")} alt="Àmati Centro Estetico" width="832" height="600" />
          </a>
          <div className="footer-locations">
            {locations.map((location) => (
              <div key={location.city}>
                <strong>{location.city}</strong>
                <span>{location.address}</span>
                <a href={`tel:${location.tel}`}>{location.phone}</a>
              </div>
            ))}
          </div>
          <div className="footer-contact">
            <nav className="footer-nav" aria-label="Navigazione nel piè di pagina">
              <a href="#trattamenti">Trattamenti</a>
              <a href="#metodo">Il metodo</a>
              <a href="#chi-siamo">Chi siamo</a>
              <a href="#sedi">Le sedi</a>
            </nav>
            <a href="mailto:amati.valecentroestetico@gmail.com">amati.valecentroestetico@gmail.com</a>
            <a href="https://www.instagram.com/amaticentroestetico._/" target="_blank" rel="noreferrer">
              <Camera aria-hidden="true" /> Instagram
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Àmati Centro Estetico</span>
          <span>P. IVA 03779470925</span>
          <PolicyPanel type="privacy" />
          <PolicyPanel type="cookie" />
          <span className="draft-badge">Anteprima privata</span>
        </div>
      </footer>
    </>
  );
}
