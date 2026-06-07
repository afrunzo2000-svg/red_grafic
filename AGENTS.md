<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:mobile-first-rules -->
## MOBILE FIRST & RESPONSIVE DESIGN

### Grundprinzip
Jede Komponente wird ZUERST für Mobile (320px–767px) entwickelt.
Desktop ist die Erweiterung — nicht umgekehrt.
Tailwind-Klassen immer in dieser Reihenfolge: base (mobile) → `md:` → `lg:`

---

### Breakpoint-System (Tailwind Standard)
```
mobile:   < 768px   → base classes (kein Prefix)
tablet:   ≥ 768px   → md:
desktop:  ≥ 1024px  → lg:
wide:     ≥ 1280px  → xl:
```

---

### 2-Grid-Layout — die Regel

Alle Split-Layouts (Hero, About, Service-Blöcke) folgen diesem Schema:

```tsx
// Mobile: 1 Spalte (alles gestapelt)
// Desktop: 2 Spalten (Split)

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
  <div className="...">Text / Links</div>
  <div className="...">Visual / Rechts</div>
</div>
```

**Reihenfolge auf Mobile:** Text-Block kommt immer VOR dem Visual-Block.
Auf Desktop nebeneinander — auf Mobile Text oben, Bild unten.

---

### Typografie — Mobile Scaling

```tsx
// H1 Hero
className="font-bebas text-[56px] leading-none md:text-[72px] lg:text-[96px]"

// H2 Sektion
className="font-bebas text-[40px] leading-none md:text-[48px] lg:text-[56px]"

// H3 Card-Titel
className="font-bebas text-[28px] md:text-[32px]"

// Body
className="font-dm text-[14px] leading-relaxed md:text-[15px]"

// Label / Tag
className="font-dm text-[10px] uppercase tracking-[2px] md:text-[11px]"

// Stats-Zahlen
className="font-bebas text-[36px] md:text-[44px]"
```

---

### Spacing — Mobile Scaling

```tsx
// Section Padding
className="px-4 py-12 md:px-8 md:py-16 lg:px-8 lg:py-20"

// Section horizontal (max-width Container)
className="max-w-7xl mx-auto px-4 md:px-8"

// Card Padding
className="p-5 md:p-7 lg:p-8"

// Gap in Grids
className="gap-4 md:gap-6 lg:gap-8"
```

---

### Grid-Regeln pro Sektion

**Stats-Leiste**
```tsx
// Mobile: 2×2 · Desktop: 4×1
className="grid grid-cols-2 lg:grid-cols-4"
// Border-Handling:
// Mobile: border-right auf col 1, border-bottom auf row 1
// Desktop: border-right auf allen außer letztem
```

**Services-Grid**
```tsx
// Mobile: 1 Spalte · Tablet: 2 Spalten · Desktop: 3 Spalten
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1f1f1f]"
```

**Gallery-Mosaik**
```tsx
// Mobile: 1 Spalte (alle Bilder gestapelt, gleiche Höhe)
// Desktop: asymmetrisches Mosaik (2fr 1fr 1fr, 2 Rows)
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]"

// Großes Bild: span 2 rows nur ab lg
<div className="lg:row-span-2 h-[240px] lg:h-auto">
```

**About / Info Split**
```tsx
className="grid grid-cols-1 lg:grid-cols-2"
// Visual auf Mobile: max-height 280px, object-fit cover
// Visual auf Desktop: volle Höhe der Section
```

---

### Navbar — Mobile

```tsx
// Mobile: Logo links + Hamburger rechts (kein Link-Row)
// Desktop: Logo + Links + CTA in einer Zeile

// Hamburger → shadcn Sheet (slide-in von rechts)
// Sheet-Inhalt: Links vertikal gestapelt, große Bebas-Schrift
// Sheet Background: #0A0A0A, Links 32px Bebas Neue

<Sheet>
  <SheetTrigger className="lg:hidden">
    {/* Hamburger Icon (lucide-react: Menu) */}
  </SheetTrigger>
  <SheetContent side="right" className="bg-brand-black border-l border-[#1f1f1f] w-[280px]">
    {/* Nav Links vertikal */}
  </SheetContent>
</Sheet>

// Desktop Links: nur ab lg sichtbar
<nav className="hidden lg:flex items-center gap-7">
```

---

### Buttons — Mobile Touch Targets

```tsx
// Min. Touch-Target: 44×44px (Apple HIG / WCAG)
// Buttons nie kleiner als h-11 (44px)

className="h-11 px-6 text-[11px] uppercase tracking-[2px] font-dm
           md:h-12 md:px-7"
```

---

### WhatsApp FAB — Mobile Anpassung

```tsx
// Mobile: etwas größer, weiter vom Rand (Daumen-freundlich)
className="fixed bottom-5 right-4 w-14 h-14 
           md:bottom-6 md:right-6 md:w-12 md:h-12
           bg-[#25D366] rounded-full flex items-center justify-center z-50"
```

---

### Cookie Banner — Mobile

```tsx
// Mobile: vertikal gestapelt (Text oben, Buttons unten)
// Desktop: horizontal (Text links, Buttons rechts)

className="flex flex-col gap-4 p-4
           md:flex-row md:items-center md:justify-between md:p-5 md:gap-6"
```

---

### Booking Wizard (Prenotazione) — Mobile

```tsx
// Step-Indicator: immer full-width, kompakt auf Mobile
// Step 1 Cards: 1 Spalte auf Mobile, 2 auf Tablet, 3 auf Desktop
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"

// Inputs: immer full-width
className="w-full h-11 bg-brand-dark-gray border border-[#2A2A2A] px-4
           font-dm text-[14px] text-brand-white
           focus:outline-none focus:border-brand-red"
```

---

### Galerie-Filter — Mobile

```tsx
// Mobile: horizontal scroll (kein Wrap, kein Zeilenumbruch)
// Desktop: flex wrap oder statische Zeile

<div className="flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible
                scrollbar-none">
  {/* Filter-Buttons */}
</div>
```

---

### Bilder & Placeholders — Mobile

```tsx
// Alle Bilder: next/image mit fill oder responsive sizes
// Placeholder-Divs: explizite Höhen auf Mobile, auto auf Desktop

// Hero Visual-Placeholder
className="h-[280px] md:h-[360px] lg:h-full"

// Gallery-Card
className="h-[200px] md:h-[240px]"

// About Visual
className="h-[260px] md:h-[340px] lg:h-full"
```

---

### Roter CTA-Band — Mobile

```tsx
// Mobile: vertikal gestapelt, Text zentriert
// Desktop: horizontal, Text links / Button rechts

className="flex flex-col items-center text-center gap-6 px-4 py-12
           md:flex-row md:text-left md:justify-between md:px-8 md:py-14"
```

---

### Footer — Mobile

```tsx
// Mobile: Logo + Tagline oben, dann Links in 2×2 Grid (oder gestapelt)
// Desktop: Logo links + 3 Spalten rechts

<div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:flex lg:gap-16">

// Bottom Bar: gestapelt auf Mobile, inline auf Desktop
<div className="flex flex-col gap-2 items-center text-center
               md:flex-row md:justify-between md:text-left">
```

---

### Checkliste Mobile (vor jedem Commit prüfen)

- [ ] Jede Seite bei 375px (iPhone SE) getestet — kein horizontaler Overflow
- [ ] Alle Touch-Targets ≥ 44px
- [ ] Navbar: Hamburger-Menü funktionsfähig
- [ ] Hero: Text lesbar ohne zu scrollen (above the fold)
- [ ] Stats: 2×2 Grid auf Mobile korrekt
- [ ] Services: 1-Spalte auf Mobile
- [ ] Gallery: kein Mosaik auf Mobile (1-Spalte)
- [ ] Formulare: alle Inputs full-width, Keyboard öffnet ohne Layout-Shift
- [ ] Cookie Banner: gestapelt auf Mobile
- [ ] WhatsApp FAB: nicht über wichtige Inhalte
- [ ] `npm run build` nach Änderungen: 0 Errors
<!-- END:mobile-first-rules -->
