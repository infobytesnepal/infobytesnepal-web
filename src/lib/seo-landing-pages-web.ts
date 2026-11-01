import type { SeoLandingPage } from "./seo-landing-pages";

/**
 * Website design and development, by place.
 *
 * One nationwide service page and six city pages. The city pages exist because
 * people search "website design in Pokhara" and "web developer in Butwal", and
 * a page about Nepal in general is a weak answer to either. They are also the
 * pages most at risk of reading as doorway spam, which is what Google calls a
 * set of near identical pages with the city name swapped. So each one is
 * written around what a website in that city has to do: the businesses there,
 * who their customers are, and the specific things those sites get wrong.
 * Nothing here should survive a find-and-replace of the city name.
 *
 * What every page says about how we work has to stay true:
 * - The office is in Kaushaltar, Bhaktapur, so meeting in person is normal
 *   inside the valley (Kathmandu, Lalitpur, Bhaktapur).
 * - Outside the valley, projects run over calls, screen shares, and a review
 *   link, and someone travels for a kickoff or training on larger projects.
 *   No page claims a local office or past clients in a city.
 * - Prices and timelines are the ones `services.ts` and `faqs.ts` already
 *   publish: business websites from around NPR 50,000 in 2 to 4 weeks, custom
 *   CMS builds around NPR 100,000 to 250,000 in 4 to 8 weeks.
 *
 * Kathmandu has its own page in `seo-landing-pages.ts` from before this file
 * existed; its key is what the CMS stores, so it stays where it is.
 */

export const webServicesHubPath = "/website-design-and-development-services-in-nepal";

/**
 * Every city with its own web design page, in the order they are listed in the
 * "Website design across Nepal" block. Kathmandu is included although its page
 * lives in the main file.
 */
export const webDesignLocations = [
  { href: "/web-design-company-in-kathmandu", city: "Kathmandu", note: "Meetings in person across the valley" },
  { href: "/web-design-company-in-lalitpur", city: "Lalitpur", note: "Patan, Pulchowk, Jawalakhel, Sanepa" },
  { href: "/web-design-company-in-bhaktapur", city: "Bhaktapur", note: "Our home base in Kaushaltar" },
  { href: "/web-design-company-in-pokhara", city: "Pokhara", note: "Hotels, trekking, and Lakeside businesses" },
  { href: "/web-design-company-in-chitwan", city: "Chitwan", note: "Bharatpur, Narayangadh, and Sauraha" },
  { href: "/web-design-company-in-butwal", city: "Butwal", note: "Butwal, Bhairahawa, and Lumbini" },
  { href: "/web-design-company-in-biratnagar", city: "Biratnagar", note: "Biratnagar, Itahari, and Dharan" },
] as const;

export const webSeoLandingPages = {
  webServicesNepal: {
    slug: "website-design-and-development-services-in-nepal",
    path: webServicesHubPath,
    metaTitle: "Website Design & Development Services in Nepal | Infobytes Nepal",
    metaDescription:
      "Website design and development services for businesses anywhere in Nepal: business websites, online stores, and web apps from NPR 50,000, with a written quote.",
    ogTitle: "Website Design and Development Services in Nepal",
    ogDescription:
      "Design, development, SEO setup, hosting, and handover for business websites across Nepal, from Biratnagar to Dhangadhi.",
    keyword: "Website Design and Development Services in Nepal",
    heroTitle: "Website Design and Development Services in Nepal",
    heroIntro:
      "Infobytes Nepal designs and builds websites for businesses in every part of Nepal. One team handles the design, the build, the content structure, the Google setup, and the support after launch, and the project runs the same way whether you are in Kathmandu or Dhangadhi.",
    overview: {
      title: "One website project, the same way in every part of Nepal",
      paragraphs: [
        "Most businesses in Nepal now get their first enquiry through a phone search. Someone types what they need and the name of their town, opens two or three results, and calls the one that looks most trustworthy and answers their question fastest. A website decides whether you are one of those calls. That is true for a hotel in Pokhara, a distributor in Butwal, a clinic in Bharatpur, and a school in Biratnagar alike.",
        "Our service covers the whole job. We plan the pages around what your customers search for, design them to your brand, build them to load quickly on mobile data, and set up the parts that are easy to forget: the Google Business Profile, Search Console, analytics, contact forms that reach the right person, and a .com.np domain if you want one, which Nepal's registry issues free of charge once your documents are verified.",
        "We are based in Kaushaltar, Bhaktapur. Clients inside the Kathmandu valley can meet us in person. For the rest of Nepal, discovery happens over calls and screen shares, you review the design and the working site on your own phone through a private link, and on larger projects someone from the team travels to you for the kickoff or for staff training. Updates come on a fixed schedule, so you do not have to chase them.",
        "A simple business website usually takes 2 to 4 weeks and starts around NPR 50,000. A custom designed site with a content management system usually takes 4 to 8 weeks and costs around NPR 100,000 to NPR 250,000. Online stores and web applications are quoted on scope. The first conversation and the written quotation are free, and when the final payment is made, the code, domain, hosting, and every account move to your name in writing.",
      ],
    },
    problems: [
      "The business has no website, or one built years ago that breaks on a phone and cannot be updated without the original developer.",
      "Customers in your own town find a competitor first, because that competitor's site and Google profile are set up for local search and yours are not.",
      "Businesses outside the valley are told by agencies that good web work needs a Kathmandu office visit, or are sold a template with their name swapped in.",
      "The site looks fine on a desktop but loads slowly on mobile data, which is how most visitors in Nepal arrive.",
      "Enquiries arrive through the website, Facebook, Viber, and phone, and nobody can say which channel actually brings customers.",
      "The domain or hosting was registered in a developer's name, so the business does not fully control its own website.",
    ],
    solutions: [
      "We plan the site map and page wording around the searches your customers make, including the town or district they search from.",
      "We design mobile first and test every page on ordinary Android phones and slow connections before launch.",
      "We run projects outside the valley over calls and review links on a fixed update schedule, and travel for kickoff or training on larger projects.",
      "We set up Google Business Profile, Search Console, and analytics at launch, so you can see where enquiries come from.",
      "We build on a content management system where you need one and train your staff to update text, photos, and prices themselves.",
      "We register the domain and hosting in your name, and hand over the code and every account in writing on final payment.",
    ],
    features: [
      "Business and company websites",
      "Ecommerce stores with eSewa, Khalti, and connectIPS",
      "Hotel, school, clinic, and NGO websites",
      "Web applications and customer portals",
      "Nepali, English, or bilingual content",
      "Website redesign and migration",
      "On page SEO and local search setup",
      "Google Business Profile and Search Console",
      "Domain, hosting, and .com.np registration",
      "Content management and staff training",
      "Speed tuning for mobile data",
      "Maintenance and support plans",
    ],
    process: [
      {
        title: "First call",
        text: "A free conversation about what the business does, who the customers are, and what the website has to achieve. You get a written scope, price, and timeline afterwards.",
      },
      {
        title: "Plan the pages",
        text: "We agree the site map, the wording each page needs, and what visitors should do next on every page, before any design work starts.",
      },
      {
        title: "Design and review",
        text: "You see the design on your own phone through a private link and give feedback on a call, in person if you are in the valley.",
      },
      {
        title: "Build and set up",
        text: "We build the site, connect forms, payments, and analytics, set up Google Business Profile and Search Console, and test it on real phones.",
      },
      {
        title: "Launch and hand over",
        text: "We launch, train whoever will update the site, and transfer the domain, hosting, code, and accounts to your name.",
      },
      {
        title: "Support",
        text: "Optional monthly support covers backups, updates, monitoring, and small changes, billed against an agreed scope.",
      },
    ],
    reasons: [
      "One team for design, development, SEO setup, and support, so nothing falls between two vendors.",
      "Projects outside the Kathmandu valley run on a fixed update schedule, with travel for larger projects.",
      "Published price ranges and a free written quotation before you commit.",
      "You own the code, domain, hosting, and accounts at the end, confirmed in writing.",
      "Sites built and tested for the phones and connections your customers actually use.",
    ],
    related: [
      {
        href: "/web-development-company-in-nepal",
        label: "web development company in Nepal",
        text: "How we build websites and web platforms, in more technical detail.",
      },
      {
        href: "/web-design-company-in-nepal",
        label: "web design company in Nepal",
        text: "The design side: layout, typography, and pages that turn visits into enquiries.",
      },
      {
        href: "/website-cost-in-nepal",
        label: "website cost in Nepal",
        text: "Typical price ranges and the five things that move them.",
      },
      {
        href: "/ecommerce-website-development-nepal",
        label: "ecommerce website development in Nepal",
        text: "Online stores with local payment gateways, delivery, and stock control.",
      },
      {
        href: "/website-maintenance-services-in-nepal",
        label: "website maintenance services in Nepal",
        text: "Keeping the site secure, backed up, and current after launch.",
      },
      {
        href: "/contact",
        label: "request a free quotation",
        text: "Tell us about the website you need and where your business is.",
      },
    ],
    faqs: [
      {
        question: "Do you build websites for businesses outside Kathmandu?",
        answer:
          "Yes. We build websites for businesses anywhere in Nepal. Projects outside the Kathmandu valley run over phone and video calls with a private review link, and on larger projects someone from the team travels to you for the kickoff or for staff training.",
      },
      {
        question: "How much do website design and development cost in Nepal?",
        answer:
          "A simple business website usually starts around NPR 50,000. A custom designed site with a content management system usually costs around NPR 100,000 to NPR 250,000. Online stores and web applications are quoted on scope. The quotation is free and in writing.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "A simple business website usually takes 2 to 4 weeks, and a custom designed site with a content management system 4 to 8 weeks. The most common cause of delay is waiting for content such as photos, product details, and approvals.",
      },
      {
        question: "Can the website be in Nepali?",
        answer:
          "Yes. We build websites in Nepali, in English, or in both with a language switch. Nepali text is set in Unicode so it displays correctly on phones and can be found in search.",
      },
      {
        question: "Who owns the website after it is finished?",
        answer:
          "You do. The domain and hosting are registered in your name, and on final payment the code, design files, and every account created for your business are handed over in writing.",
      },
      {
        question: "Do you also help the website show up on Google?",
        answer:
          "Yes. Every site launches with clean page structure, titles and descriptions, a sitemap, Search Console, and a Google Business Profile set up for your location. Ongoing SEO work is available as a separate monthly service.",
      },
    ],
  },

  webDesignLalitpur: {
    slug: "web-design-company-in-lalitpur",
    path: "/web-design-company-in-lalitpur",
    metaTitle: "Web Design Company in Lalitpur | Infobytes Nepal",
    metaDescription:
      "Website design and development in Lalitpur for NGOs, exporters, restaurants, schools, and companies in Patan, Pulchowk, Jawalakhel, and Sanepa. Meet us in person.",
    ogTitle: "Web Design Company in Lalitpur | Infobytes Nepal",
    ogDescription:
      "Websites for Lalitpur organisations and businesses, designed and built by a valley based team you can meet in person.",
    keyword: "Web Design Company in Lalitpur",
    heroTitle: "Web Design Company in Lalitpur",
    heroIntro:
      "Infobytes Nepal designs and builds websites for organisations and businesses across Lalitpur, from development organisations around Pulchowk to handicraft exporters in Patan and restaurants in Jhamsikhel. We are a short drive away in Bhaktapur, so we can sit down with you in person.",
    overview: {
      title: "Lalitpur websites often have two audiences at once",
      paragraphs: [
        "Lalitpur has an unusual mix of organisations. Development partners, NGOs, and INGOs cluster around Pulchowk, Jawalakhel, and Sanepa. Patan's metalwork, woodcarving, and handicraft makers sell to buyers abroad. Kupondole and Jhamsikhel are full of cafés, restaurants, and studios, and there are schools and offices across the city. Many of these have to speak to two very different readers on the same website.",
        "An NGO's site has to reassure a donor in Europe and still make sense to a community partner reading on a phone in Nepali. An exporter needs a catalogue that a foreign buyer can trust enough to send an order enquiry, and a page that a local customer can use to find the showroom. A restaurant needs its menu, opening hours, and map to work for both tourists and people living nearby.",
        "We design for that. For organisations, that usually means clear programme pages, a reports and publications section that is easy to keep current, and Nepali and English versions where they are needed. For exporters, product pages with real measurements and materials, and an enquiry form that asks the questions a buyer would otherwise ask by email. For hospitality, the details people check before they come: menu, hours, location, and booking.",
        "Because we are in the valley, the briefing, design reviews, and training can all happen in person at your office in Lalitpur, or online if that is easier for your team.",
      ],
    },
    problems: [
      "Organisation websites are hard to update, so annual reports, vacancies, and programme news stay months out of date.",
      "Nepali and English versions drift apart, or the Nepali text is pasted as an image and cannot be read on a phone or found in search.",
      "Handicraft and export catalogues show photos without sizes, materials, or minimum orders, so foreign buyers move on.",
      "Restaurant and café sites hide the menu in a PDF and the map at the bottom of a long page.",
      "Sites built on donated templates look like every other organisation's and say little about the actual work.",
    ],
    solutions: [
      "We set up a content management system that lets programme staff publish reports, news, and vacancies without a developer.",
      "We build bilingual sites with Unicode Nepali text and a language switch that keeps the two versions in step.",
      "We design export catalogues with specifications, materials, and a structured enquiry form for overseas buyers.",
      "We put menus, hours, maps, and booking at the top of hospitality pages, readable on a phone without downloads.",
      "We design around your own work, photos, and results so the site does not look like a template.",
      "We meet in person in Lalitpur for briefing, reviews, and staff training.",
    ],
    features: [
      "NGO and INGO websites",
      "Reports and publications library",
      "Bilingual Nepali and English sites",
      "Export and handicraft catalogues",
      "Restaurant and café websites",
      "School and institution websites",
      "Content management and staff training",
      "Google Business Profile for Lalitpur locations",
    ],
    process: [
      {
        title: "Meet in Lalitpur",
        text: "We visit your office, understand who reads the website, and agree what each audience needs from it.",
      },
      {
        title: "Structure the content",
        text: "We plan pages, languages, and the sections your staff will update, so the site stays current after launch.",
      },
      {
        title: "Design",
        text: "We design around your own photos, work, and brand, and review it with you on screen and on your phone.",
      },
      {
        title: "Build and train",
        text: "We build the site, connect forms and analytics, and train your staff in person to publish updates.",
      },
      {
        title: "Launch and support",
        text: "We launch, hand over ownership in writing, and offer monthly support if you want it.",
      },
    ],
    reasons: [
      "A valley based team that can meet you in Lalitpur for every stage of the project.",
      "Experience structuring sites for two audiences, including bilingual Nepali and English.",
      "A content management setup built for the staff who will actually update it.",
      "Published price ranges and a free written quotation.",
      "You own the domain, hosting, code, and accounts at the end.",
    ],
    related: [
      {
        href: webServicesHubPath,
        label: "website design and development services in Nepal",
        text: "What every website project includes, wherever the business is.",
      },
      {
        href: "/it-company-in-lalitpur",
        label: "IT company in Lalitpur",
        text: "Software, automation, and marketing for Lalitpur businesses.",
      },
      {
        href: "/web-design-company-in-nepal",
        label: "web design company in Nepal",
        text: "Our general approach to layout, typography, and conversion.",
      },
      {
        href: "/ecommerce-website-development-nepal",
        label: "ecommerce website development in Nepal",
        text: "For exporters and shops ready to take orders online.",
      },
      {
        href: "/contact",
        label: "contact Infobytes Nepal",
        text: "Arrange a meeting at your office in Lalitpur.",
      },
    ],
    faqs: [
      {
        question: "Can you meet us at our office in Lalitpur?",
        answer:
          "Yes. We are based in Kaushaltar, Bhaktapur, so meetings in Lalitpur for briefing, design reviews, and staff training are a normal part of the project.",
      },
      {
        question: "Can our staff update the website themselves?",
        answer:
          "Yes. We set up a content management system for the sections that change, such as news, reports, vacancies, and menus, and train your staff to use it.",
      },
      {
        question: "Can you build a website in both Nepali and English?",
        answer:
          "Yes. We build bilingual sites with Unicode Nepali text and a language switch, so both versions can be read on any phone and found in search.",
      },
      {
        question: "How much does a website cost for an organisation in Lalitpur?",
        answer:
          "A simple organisation or business website usually starts around NPR 50,000. A larger site with a content management system, a publications library, and two languages usually costs around NPR 100,000 to NPR 250,000. The quotation is free.",
      },
      {
        question: "Can you redesign our existing website?",
        answer:
          "Yes. We review the current site, keep the content and links that still work so you do not lose search visibility, and rebuild the rest.",
      },
    ],
  },

  webDesignBhaktapur: {
    slug: "web-design-company-in-bhaktapur",
    path: "/web-design-company-in-bhaktapur",
    metaTitle: "Web Design Company in Bhaktapur | Infobytes Nepal",
    metaDescription:
      "Website design and development from our office in Kaushaltar, Bhaktapur, for guesthouses, shops, schools, and manufacturers across Bhaktapur and Thimi.",
    ogTitle: "Web Design Company in Bhaktapur | Infobytes Nepal",
    ogDescription:
      "A Bhaktapur based web design team in Kaushaltar, building websites for local businesses, heritage tourism, schools, and industry.",
    keyword: "Web Design Company in Bhaktapur",
    heroTitle: "Web Design Company in Bhaktapur",
    heroIntro:
      "Infobytes Nepal is based in Kaushaltar, Bhaktapur. We design and build websites for businesses across the district, from guesthouses near Durbar Square and pottery workshops in Thimi to schools, clinics, and manufacturers along the Araniko Highway. You can visit our office or we can come to you.",
    overview: {
      title: "A web design team in your own district",
      paragraphs: [
        "Bhaktapur is our home base, which makes a practical difference. Meetings happen at our office in Kaushaltar or at your premises, usually on short notice. We can come and see the guesthouse rooms, the workshop, or the shop counter before we design anything, and take photos while we are there.",
        "Businesses here face a split that most of the valley does not. The old city draws visitors from abroad who search in English, often before they have booked anything, and who need to know where you are, what you offer, and how to reach you. At the same time, most of Bhaktapur's businesses serve local customers in Suryabinayak, Thimi, Kaushaltar, Lokanthali, and the growing residential areas, who search in Nepali and English on their phones and mostly want a phone number and directions.",
        "We design for whichever of those you serve. Guesthouses, homestays, and heritage tours need clear photos, room or tour details, a map from the Durbar Square gates, and a direct enquiry path that does not depend on booking platforms. Shops, schools, clinics, and service businesses need fast pages, a Google Business Profile that matches the website, and their phone number one tap away.",
        "Manufacturers and traders around the industrial areas usually need something different again: a catalogue for dealers and buyers, product specifications, and an enquiry form that reaches the sales team.",
      ],
    },
    problems: [
      "Guesthouses and homestays depend on booking platforms and their commission, with no website of their own to send repeat guests to.",
      "Visitors cannot work out where a business is inside the old city, because the map pin is wrong or missing.",
      "Local shops and services have a Facebook page but no website, so they rarely appear in Google results.",
      "Pottery, crafts, and local products are photographed poorly and listed without prices or ordering details.",
      "Manufacturers send buyers PDF brochures by email because the website has no proper product catalogue.",
    ],
    solutions: [
      "We build guesthouse and tour websites with clear rooms or packages and a direct enquiry or booking path.",
      "We set up accurate maps and a Google Business Profile so visitors can walk straight to your door.",
      "We give local businesses a fast, simple website with their phone number, location, and services front and centre.",
      "We photograph products on site where needed and build catalogues with prices and ordering details.",
      "We build product catalogues and dealer enquiry forms for manufacturers and traders.",
      "We meet at our Kaushaltar office or at your premises for every stage of the project.",
    ],
    features: [
      "Guesthouse and homestay websites",
      "Heritage tour and travel pages",
      "Local business websites",
      "Craft and product catalogues",
      "Manufacturer and dealer catalogues",
      "School and clinic websites",
      "Google Business Profile and maps setup",
      "On site visits and photography coordination",
    ],
    process: [
      {
        title: "Visit",
        text: "We meet at our office in Kaushaltar or come to your premises to see the business and what customers see.",
      },
      {
        title: "Plan",
        text: "We decide who the site is for (visitors from abroad, local customers, or trade buyers) and plan the pages around them.",
      },
      {
        title: "Design",
        text: "We design with your own photos and brand and review the design with you in person.",
      },
      {
        title: "Build and set up",
        text: "We build the site, set up maps and Google Business Profile, and test it on ordinary phones.",
      },
      {
        title: "Launch and support",
        text: "We launch, hand over ownership in writing, and stay nearby for support.",
      },
    ],
    reasons: [
      "Our office is in Kaushaltar, Bhaktapur, so meeting in person is easy and quick.",
      "We can visit your premises before designing and take what we need on the spot.",
      "Experience with both visitor facing and local customer websites.",
      "Published price ranges and a free written quotation.",
      "Support from a team in the same district after launch.",
    ],
    related: [
      {
        href: webServicesHubPath,
        label: "website design and development services in Nepal",
        text: "What every website project includes, wherever the business is.",
      },
      {
        href: "/it-company-in-bhaktapur",
        label: "IT company in Bhaktapur",
        text: "Software, automation, and marketing from our Bhaktapur office.",
      },
      {
        href: "/website-cost-in-nepal",
        label: "website cost in Nepal",
        text: "Typical price ranges for the kind of site you need.",
      },
      {
        href: "/seo-company-in-nepal",
        label: "SEO company in Nepal",
        text: "Ongoing work to rank for the searches your customers make.",
      },
      {
        href: "/contact",
        label: "visit our Kaushaltar office",
        text: "Arrange a meeting in Bhaktapur.",
      },
    ],
    faqs: [
      {
        question: "Where is your office in Bhaktapur?",
        answer:
          "Our office is in Kaushaltar, Bhaktapur. You can visit us, or we can come to your shop, guesthouse, school, or factory for meetings.",
      },
      {
        question: "Can you help our guesthouse get direct bookings?",
        answer:
          "Yes. We build guesthouse and homestay websites with clear room details, photos, a map, and a direct enquiry or booking path, and set up your Google Business Profile so visitors can find you.",
      },
      {
        question: "We only have a Facebook page. Do we need a website?",
        answer:
          "If customers search for your kind of business on Google, a website helps you appear there and gives you a page you control. A simple business website usually starts around NPR 50,000 and takes 2 to 4 weeks.",
      },
      {
        question: "Can you build a product catalogue for our factory?",
        answer:
          "Yes. We build catalogues with product specifications and a dealer or buyer enquiry form that goes straight to your sales team.",
      },
      {
        question: "Do you provide support after the website is launched?",
        answer:
          "Yes. Optional monthly support covers backups, updates, monitoring, and small changes, from a team in the same district.",
      },
    ],
  },

  webDesignPokhara: {
    slug: "web-design-company-in-pokhara",
    path: "/web-design-company-in-pokhara",
    metaTitle: "Web Design Company in Pokhara | Infobytes Nepal",
    metaDescription:
      "Website design for Pokhara hotels, trekking and adventure operators, cafés, and local businesses: fast sites with clear packages and direct enquiries.",
    ogTitle: "Web Design Company in Pokhara | Infobytes Nepal",
    ogDescription:
      "Fast, photo led websites for Pokhara's hotels, trekking agencies, adventure operators, and local businesses, with direct enquiry paths.",
    keyword: "Web Design Company in Pokhara",
    heroTitle: "Web Design Company in Pokhara",
    heroIntro:
      "Infobytes Nepal designs and builds websites for businesses in Pokhara: Lakeside hotels and guesthouses, trekking and paragliding operators, cafés and restaurants, and the schools, clinics, and shops that serve the city itself. We work with Pokhara clients over calls and review links, and travel to Pokhara for larger projects.",
    overview: {
      title: "Websites that have to win over a traveller on the other side of the world",
      paragraphs: [
        "A large share of Pokhara's businesses sell to people who are not in Nepal yet. A traveller in Europe or Australia compares three trekking agencies or four Lakeside hotels on their phone, often on a slow hotel connection along the way, and makes a decision based on photos, clear prices or package details, and how easy it is to ask a question. A website that is slow, vague, or hard to contact loses that booking to a platform that takes a commission.",
        "Web design for these businesses comes down to a few specific things. Photos have to look sharp and still load quickly, which means compressing and sizing every image properly. Packages, rooms, and itineraries need their own pages with the details travellers ask about: duration, difficulty, what is included, what to bring, and dates. And the enquiry form should ask for dates, group size, and nationality up front, so your reply can be a quote instead of a list of questions.",
        "Pokhara's own residents are a different audience with different needs. Schools, colleges, hospitals and clinics, shops, and service businesses in the city mostly need a fast site in Nepali or English, a phone number one tap away, accurate Google Maps details, and pages that answer what local customers search for.",
        "We run Pokhara projects remotely with scheduled calls and a private review link you open on your own phone, and someone from the team travels to Pokhara for the kickoff or staff training on larger projects. Seasonal work is planned around your calendar, so a new site or a redesign is ready before the autumn and spring trekking seasons start.",
      ],
    },
    problems: [
      "Hotels and agencies pay high commissions on bookings that could have come directly through their own website.",
      "Photo heavy pages load slowly for travellers on mobile and hotel connections, so they leave before the gallery appears.",
      "Trek and tour pages list a name and a price with none of the details travellers need to decide.",
      "Enquiry forms ask only for a name and email, so every reply starts with more questions and the traveller books elsewhere.",
      "Local businesses in Pokhara have no site at all, or a site in English only that local customers do not use.",
    ],
    solutions: [
      "We build direct enquiry and booking paths so repeat and referred guests can book without a platform.",
      "We compress and size every image so galleries stay sharp and load quickly on slow connections.",
      "We give each trek, tour, or room its own page with duration, inclusions, difficulty, dates, and price guidance.",
      "We design enquiry forms that ask for dates, group size, and requirements so you can reply with a quote.",
      "We build Nepali, English, or bilingual sites for businesses serving Pokhara residents.",
      "We plan launches around the trekking seasons and travel to Pokhara for larger projects.",
    ],
    features: [
      "Hotel, resort, and guesthouse websites",
      "Trekking, tour, and adventure package pages",
      "Itinerary and trip detail templates",
      "Direct enquiry and booking forms",
      "Fast, optimised photo galleries",
      "Restaurant and café websites",
      "Local business, school, and clinic websites",
      "Google Business Profile and Maps setup",
    ],
    process: [
      {
        title: "Kickoff call",
        text: "We learn your rooms, packages, or services, your seasons, and where bookings and enquiries come from today.",
      },
      {
        title: "Plan the pages",
        text: "We plan a page for each trip, room type, or service, and the questions each page has to answer.",
      },
      {
        title: "Design and review",
        text: "You review the design on your phone through a private link, with feedback on scheduled calls.",
      },
      {
        title: "Build and test",
        text: "We build the site, optimise every photo, connect enquiry forms, and test on slow connections.",
      },
      {
        title: "Launch before the season",
        text: "We launch ahead of your busy season, set up Google Business Profile, and train your staff to update packages and prices.",
      },
    ],
    reasons: [
      "Website design built around how travellers compare and book.",
      "Photo optimisation so galleries look good without slowing the site.",
      "Remote collaboration on a fixed schedule, with travel to Pokhara for larger projects.",
      "Published price ranges and a free written quotation.",
      "You own the domain, hosting, and accounts, so direct bookings stay yours.",
    ],
    related: [
      {
        href: webServicesHubPath,
        label: "website design and development services in Nepal",
        text: "What every website project includes, wherever the business is.",
      },
      {
        href: "/it-company-in-pokhara",
        label: "IT company in Pokhara",
        text: "Booking systems, SEO, and automation for Pokhara businesses.",
      },
      {
        href: "/ecommerce-website-development-nepal",
        label: "online payments and ecommerce",
        text: "Take deposits or sell packages online through local payment gateways.",
      },
      {
        href: "/seo-company-in-nepal",
        label: "SEO company in Nepal",
        text: "Rank for the searches travellers make before choosing Pokhara.",
      },
      {
        href: "/contact",
        label: "contact Infobytes Nepal",
        text: "Plan a website for your Pokhara business before the next season.",
      },
    ],
    faqs: [
      {
        question: "Do you build websites for businesses in Pokhara?",
        answer:
          "Yes. We work with Pokhara businesses remotely, with scheduled calls and a private review link, and someone from the team travels to Pokhara for the kickoff or training on larger projects.",
      },
      {
        question: "Can a website reduce our dependence on booking platforms?",
        answer:
          "It can for repeat guests, referrals, and travellers who search for you by name. A fast site with clear details and a direct enquiry or booking path gives them a reason to book directly instead of through a platform.",
      },
      {
        question: "Can you add online payment for deposits?",
        answer:
          "Yes. We can connect local gateways such as eSewa, Khalti, and connectIPS for deposits or full payments.",
      },
      {
        question: "How long does a hotel or trekking website take?",
        answer:
          "A focused site usually takes 2 to 4 weeks, and a larger site with many packages and a content management system 4 to 8 weeks. We recommend starting at least two months before your busy season.",
      },
      {
        question: "Can we update prices and packages ourselves?",
        answer:
          "Yes. We set up a content management system for packages, rooms, prices, and photos, and train your staff to use it.",
      },
    ],
  },

  webDesignChitwan: {
    slug: "web-design-company-in-chitwan",
    path: "/web-design-company-in-chitwan",
    metaTitle: "Web Design Company in Chitwan | Infobytes Nepal",
    metaDescription:
      "Website design and development for hospitals, colleges, Sauraha hotels, and agribusinesses in Bharatpur, Narayangadh, and across Chitwan.",
    ogTitle: "Web Design Company in Chitwan | Infobytes Nepal",
    ogDescription:
      "Websites for Chitwan's hospitals, colleges, safari hotels, and agribusinesses, built by a team that works remotely and travels for larger projects.",
    keyword: "Web Design Company in Chitwan",
    heroTitle: "Web Design Company in Chitwan",
    heroIntro:
      "Infobytes Nepal designs and builds websites for organisations and businesses in Chitwan: hospitals and clinics in Bharatpur, colleges, safari hotels and lodges in Sauraha, and the agribusinesses and traders around Narayangadh. We work remotely with scheduled calls and travel to Chitwan for larger projects.",
    overview: {
      title: "Three very different kinds of website in one district",
      paragraphs: [
        "Chitwan has three big audiences, and they need different websites. Bharatpur is a regional medical centre, so patients and families from across the district and beyond search for hospitals, clinics, departments, and doctors. Sauraha and the national park bring domestic and international visitors who compare jungle lodges and safari packages. And the district's farming economy supports a large network of agribusinesses, feed and seed suppliers, poultry and dairy businesses, and traders around Narayangadh.",
        "A hospital or clinic website is judged on how quickly a worried family can find the right department, today's doctor schedule, the phone number, and directions. That means simple navigation, schedules staff can update without a developer, and pages that work on a basic phone. A college website has to answer admission questions for students and parents: programmes, fees guidance, intake dates, and how to apply.",
        "A lodge or safari operator needs what any tourism site needs: strong photos that still load quickly, package pages that explain exactly what is included, and a direct enquiry path. An agribusiness usually needs a product catalogue, a dealer or distributor list by area, and an enquiry form for bulk orders.",
        "We plan the site around whichever of these you are, and run the project over calls and a private review link. On larger projects someone from the team travels to Chitwan for the kickoff and for training the staff who will keep the site up to date.",
      ],
    },
    problems: [
      "Hospital and clinic sites show outdated doctor schedules because only the original developer can change them.",
      "Families cannot find the right department or phone number quickly on a phone.",
      "College sites bury admission dates and requirements in notices and PDFs.",
      "Safari and lodge sites rely on booking platforms and have thin package details.",
      "Agribusinesses have no online catalogue, so dealers and farmers phone for basic product information.",
    ],
    solutions: [
      "We build doctor schedule and department pages that hospital staff can update themselves.",
      "We design simple navigation that puts departments, phone numbers, and directions first.",
      "We give colleges clear programme and admission pages with intake dates and how to apply.",
      "We build lodge and safari sites with detailed package pages and direct enquiry forms.",
      "We create product catalogues and dealer lists for agribusinesses and traders.",
      "We work remotely on a fixed schedule and travel to Chitwan for larger projects.",
    ],
    features: [
      "Hospital and clinic websites",
      "Doctor schedule and department pages",
      "College and school websites",
      "Lodge, hotel, and safari package websites",
      "Agribusiness and product catalogues",
      "Dealer and distributor directories",
      "Nepali and English content",
      "Google Business Profile and Maps setup",
    ],
    process: [
      {
        title: "Kickoff call",
        text: "We learn who your visitors are (patients, students, travellers, or dealers) and what they need to find first.",
      },
      {
        title: "Plan the pages",
        text: "We plan the navigation and the sections your staff will update, such as schedules, notices, or packages.",
      },
      {
        title: "Design and review",
        text: "You review the design on your own phone through a private link, with feedback on scheduled calls.",
      },
      {
        title: "Build and train",
        text: "We build the site, set up the content management system, and train your staff, on site for larger projects.",
      },
      {
        title: "Launch and support",
        text: "We launch, set up Google Business Profile, hand over ownership in writing, and offer monthly support.",
      },
    ],
    reasons: [
      "Website structures planned for hospitals, colleges, tourism, and agribusiness.",
      "Content management your own staff can use for schedules, notices, and packages.",
      "Remote collaboration on a fixed schedule, with travel to Chitwan for larger projects.",
      "Published price ranges and a free written quotation.",
      "You own the domain, hosting, code, and accounts at the end.",
    ],
    related: [
      {
        href: webServicesHubPath,
        label: "website design and development services in Nepal",
        text: "What every website project includes, wherever the business is.",
      },
      {
        href: "/it-company-in-chitwan",
        label: "IT company in Chitwan",
        text: "Software and automation for Chitwan's hospitals, hotels, and colleges.",
      },
      {
        href: "/clinic-management-software-in-nepal",
        label: "clinic management software",
        text: "For clinics that also need patient, billing, and pharmacy software.",
      },
      {
        href: "/school-management-software-in-nepal",
        label: "school management software in Nepal",
        text: "For colleges and schools that need admissions, fees, and results online.",
      },
      {
        href: "/contact",
        label: "contact Infobytes Nepal",
        text: "Discuss a website for your Chitwan organisation.",
      },
    ],
    faqs: [
      {
        question: "Do you work with organisations in Chitwan?",
        answer:
          "Yes. We run Chitwan projects over scheduled calls and a private review link, and someone from the team travels to Chitwan for the kickoff or staff training on larger projects.",
      },
      {
        question: "Can hospital staff update doctor schedules themselves?",
        answer:
          "Yes. We build schedule and department pages on a content management system and train your staff to update them, so the website matches the OPD on the day.",
      },
      {
        question: "Can you build a website for a lodge in Sauraha?",
        answer:
          "Yes. We build lodge and safari websites with room and package pages, optimised photo galleries, and a direct enquiry or booking form.",
      },
      {
        question: "Can the website be in Nepali?",
        answer:
          "Yes. We build in Nepali, English, or both. Hospital and college sites often need both, and we keep the two versions in step.",
      },
      {
        question: "How much does a website cost in Chitwan?",
        answer:
          "Prices are the same wherever you are. A simple website usually starts around NPR 50,000, and a larger site with a content management system around NPR 100,000 to NPR 250,000. The quotation is free.",
      },
    ],
  },

  webDesignButwal: {
    slug: "web-design-company-in-butwal",
    path: "/web-design-company-in-butwal",
    metaTitle: "Web Design Company in Butwal | Infobytes Nepal",
    metaDescription:
      "Website design and development for traders, distributors, manufacturers, colleges, and Lumbini area hotels in Butwal, Bhairahawa, and Rupandehi.",
    ogTitle: "Web Design Company in Butwal | Infobytes Nepal",
    ogDescription:
      "Websites and product catalogues for Butwal's traders and manufacturers, and visitor facing sites for hotels around Lumbini and Bhairahawa.",
    keyword: "Web Design Company in Butwal",
    heroTitle: "Web Design Company in Butwal",
    heroIntro:
      "Infobytes Nepal designs and builds websites for businesses in Butwal, Bhairahawa, and across Rupandehi: wholesalers and distributors, manufacturers, colleges and hospitals, and hotels serving visitors to Lumbini. We work remotely with scheduled calls and travel to Butwal for larger projects.",
    overview: {
      title: "From wholesale catalogues to hotels for Lumbini visitors",
      paragraphs: [
        "Butwal is one of the busiest trading centres outside the valley, and many businesses here sell to other businesses: wholesalers, distributors, dealers, and manufacturers supplying shops across Lumbini Province and beyond. Their customers want to know what you stock, which brands you carry, where your dealers are, and how to place a bulk order. Most of that information currently lives in phone calls and printed price lists.",
        "A good website for a trading or manufacturing business is mostly a well organised catalogue: products grouped the way buyers think about them, specifications and pack sizes, the brands you represent, a dealer list by district, and an enquiry form that asks for quantity and location. Online payments can come later. What matters first is answering the questions your sales team answers twenty times a day.",
        "Bhairahawa and Lumbini are a different market. Visitors to the Buddha's birthplace, many arriving through Gautam Buddha International Airport, look for hotels, guides, and transport in English and other languages. Those businesses need photo led pages, clear room and tour details, and direct enquiry or booking paths.",
        "Colleges, schools, hospitals, and clinics in the area need sites that local families can use on a phone in Nepali. We run Butwal projects over scheduled calls and a private review link, and someone from the team travels to Butwal for the kickoff and staff training on larger projects.",
      ],
    },
    problems: [
      "Buyers phone for basic product, brand, and stock information because none of it is online.",
      "Price lists and catalogues are printed or sent as images, and go out of date quickly.",
      "Dealers and retailers cannot find the nearest distributor for a product.",
      "Lumbini area hotels have thin websites and depend on booking platforms for visitors from abroad.",
      "Competitors from Kathmandu appear in search results for buyers in Rupandehi.",
    ],
    solutions: [
      "We build product catalogues grouped the way your buyers search, with specifications and pack sizes.",
      "We set up a content management system so staff can update products and prices without a developer.",
      "We add dealer and distributor directories by district, with phone numbers and map links.",
      "We build hotel and tour websites for Lumbini visitors with direct enquiry and booking paths.",
      "We structure pages and Google Business Profile for local searches in Butwal and Rupandehi.",
      "We work remotely on a fixed schedule and travel to Butwal for larger projects.",
    ],
    features: [
      "Wholesale and distributor websites",
      "Manufacturer product catalogues",
      "Dealer and distributor directories",
      "Bulk order enquiry forms",
      "Hotel and tour websites for Lumbini visitors",
      "College, school, and hospital websites",
      "Nepali and English content",
      "Local SEO and Google Business Profile",
    ],
    process: [
      {
        title: "Kickoff call",
        text: "We learn what you sell, who buys it, and which questions your sales team answers every day.",
      },
      {
        title: "Plan the catalogue",
        text: "We group products, brands, and pages the way your buyers think, and plan what staff will update.",
      },
      {
        title: "Design and review",
        text: "You review the design on your phone through a private link, with feedback on scheduled calls.",
      },
      {
        title: "Build and load products",
        text: "We build the site, load the first set of products with your team, and connect enquiry forms.",
      },
      {
        title: "Launch and train",
        text: "We launch, set up Google Business Profile, train your staff, and hand over ownership in writing.",
      },
    ],
    reasons: [
      "Catalogue first websites for trading and manufacturing businesses.",
      "Visitor facing sites for hotels and tours around Lumbini and Bhairahawa.",
      "Remote collaboration on a fixed schedule, with travel to Butwal for larger projects.",
      "Published price ranges and a free written quotation.",
      "You own the domain, hosting, code, and accounts at the end.",
    ],
    related: [
      {
        href: webServicesHubPath,
        label: "website design and development services in Nepal",
        text: "What every website project includes, wherever the business is.",
      },
      {
        href: "/it-company-in-butwal",
        label: "IT company in Butwal",
        text: "Billing, inventory, and distribution software for Butwal businesses.",
      },
      {
        href: "/ecommerce-website-development-nepal",
        label: "ecommerce website development in Nepal",
        text: "When the catalogue is ready to take orders and payments online.",
      },
      {
        href: "/inventory-management-software-in-nepal",
        label: "inventory management software in Nepal",
        text: "Keep the stock behind the catalogue accurate.",
      },
      {
        href: "/contact",
        label: "contact Infobytes Nepal",
        text: "Discuss a website or catalogue for your Butwal business.",
      },
    ],
    faqs: [
      {
        question: "Do you build websites for businesses in Butwal?",
        answer:
          "Yes. We run Butwal projects over scheduled calls and a private review link, and someone from the team travels to Butwal for the kickoff or staff training on larger projects.",
      },
      {
        question: "Do we need online payments for a wholesale website?",
        answer:
          "Not necessarily. Many trading businesses get most of the value from a clear catalogue, a dealer list, and a bulk enquiry form. Online ordering and payments can be added later as an ecommerce phase.",
      },
      {
        question: "Can our staff update products and prices?",
        answer:
          "Yes. We set up a content management system for products, prices, and brands, and train your staff to keep it current.",
      },
      {
        question: "Can you build a website for a hotel near Lumbini?",
        answer:
          "Yes. We build hotel and tour websites with room details, photo galleries that load quickly, and direct enquiry or booking forms for visitors.",
      },
      {
        question: "How much does a business website cost in Butwal?",
        answer:
          "A simple business website usually starts around NPR 50,000. A catalogue site with a content management system usually costs around NPR 100,000 to NPR 250,000 depending on the number of products. The quotation is free.",
      },
    ],
  },

  webDesignBiratnagar: {
    slug: "web-design-company-in-biratnagar",
    path: "/web-design-company-in-biratnagar",
    metaTitle: "Web Design Company in Biratnagar | Infobytes Nepal",
    metaDescription:
      "Website design and development for manufacturers, exporters, traders, hospitals, and colleges in Biratnagar, Itahari, Dharan, and across Koshi Province.",
    ogTitle: "Web Design Company in Biratnagar | Infobytes Nepal",
    ogDescription:
      "B2B websites and product catalogues for Biratnagar's industry, and websites for hospitals, colleges, and businesses across Koshi Province.",
    keyword: "Web Design Company in Biratnagar",
    heroTitle: "Web Design Company in Biratnagar",
    heroIntro:
      "Infobytes Nepal designs and builds websites for businesses in Biratnagar and the eastern corridor through Itahari and Dharan: manufacturers and exporters, traders, hospitals and clinics, colleges, and local businesses. We work remotely with scheduled calls and travel to Biratnagar for larger projects.",
    overview: {
      title: "Websites for an industrial city and the province around it",
      paragraphs: [
        "Biratnagar is the capital of Koshi Province and one of Nepal's oldest industrial cities. Its factories, mills, and trading houses sell to buyers across Nepal and over the border, and many of those buyers now check a supplier's website before they make contact. A manufacturer whose website is a single page with a phone number looks smaller than it is.",
        "For industry, the website is a sales document. Buyers want to see the product range, technical specifications, certifications, production capacity, and packaging options, and they want an easy way to ask for a quotation. A catalogue structured around product lines, with downloadable specification sheets and a quotation form that asks for quantity and delivery location, does much of the early sales work.",
        "The city is also a medical and education centre for the east, and the corridor through Itahari to Dharan is full of growing retail and service businesses. Hospitals and clinics need departments, doctor schedules, and contact details that work on any phone. Colleges need programme and admission pages. Shops and service businesses need a fast local site and a Google Business Profile that matches it.",
        "We run Biratnagar projects over scheduled calls and a private review link, and someone from the team travels to Biratnagar for the kickoff and staff training on larger projects.",
      ],
    },
    problems: [
      "Manufacturers have a one page website that says nothing about products, capacity, or quality.",
      "Buyers ask for specifications and certificates by email because none of it is published.",
      "Quotation requests arrive without quantities or delivery details, so each one takes several rounds of messages.",
      "Hospitals and colleges post schedules and notices as images that are hard to read on a phone.",
      "Businesses in Itahari and Dharan are hard to find in local search because they have no website.",
    ],
    solutions: [
      "We build B2B websites structured around product lines, with specifications, capacity, and certifications.",
      "We add downloadable specification sheets and a quotation form that asks for quantity and delivery location.",
      "We present factory, process, and quality information that helps buyers trust a supplier.",
      "We build hospital and college sites with schedules and notices staff can update as text.",
      "We build fast local business websites and set up Google Business Profile for the eastern corridor.",
      "We work remotely on a fixed schedule and travel to Biratnagar for larger projects.",
    ],
    features: [
      "Manufacturer and industrial websites",
      "B2B product catalogues",
      "Specification sheet downloads",
      "Quotation request forms",
      "Export and buyer facing pages",
      "Hospital and college websites",
      "Local business websites for Itahari and Dharan",
      "Local SEO and Google Business Profile",
    ],
    process: [
      {
        title: "Kickoff call",
        text: "We learn your products, buyers, and the questions a buyer asks before requesting a quotation.",
      },
      {
        title: "Plan the structure",
        text: "We plan product lines, specification pages, and the information buyers need to trust a supplier.",
      },
      {
        title: "Design and review",
        text: "You review the design on your phone through a private link, with feedback on scheduled calls.",
      },
      {
        title: "Build and load content",
        text: "We build the site, load products and specification sheets with your team, and connect the quotation form.",
      },
      {
        title: "Launch and train",
        text: "We launch, set up Google Business Profile, train your staff, and hand over ownership in writing.",
      },
    ],
    reasons: [
      "Websites planned as sales documents for manufacturers and exporters.",
      "Experience structuring hospital, college, and local business sites.",
      "Remote collaboration on a fixed schedule, with travel to Biratnagar for larger projects.",
      "Published price ranges and a free written quotation.",
      "You own the domain, hosting, code, and accounts at the end.",
    ],
    related: [
      {
        href: webServicesHubPath,
        label: "website design and development services in Nepal",
        text: "What every website project includes, wherever the business is.",
      },
      {
        href: "/it-company-in-biratnagar",
        label: "IT company in Biratnagar",
        text: "Software and automation for Biratnagar manufacturers and traders.",
      },
      {
        href: "/erp-software-in-nepal",
        label: "ERP software in Nepal",
        text: "Connect production, stock, and sales behind the website.",
      },
      {
        href: "/seo-company-in-nepal",
        label: "SEO company in Nepal",
        text: "Rank for the product and supplier searches your buyers make.",
      },
      {
        href: "/contact",
        label: "contact Infobytes Nepal",
        text: "Discuss a website for your Biratnagar business.",
      },
    ],
    faqs: [
      {
        question: "Do you build websites for businesses in Biratnagar?",
        answer:
          "Yes. We run Biratnagar projects over scheduled calls and a private review link, and someone from the team travels to Biratnagar for the kickoff or staff training on larger projects.",
      },
      {
        question: "What should a manufacturer's website include?",
        answer:
          "At minimum: the product range with specifications, production capacity, quality certifications, packaging options, and a quotation form that asks for quantity and delivery location. Photos of the factory and process help buyers trust the supplier.",
      },
      {
        question: "Can buyers download our specification sheets?",
        answer:
          "Yes. We add downloadable specification sheets to each product and set up the content management system so your staff can replace them when they change.",
      },
      {
        question: "Do you also work with businesses in Itahari and Dharan?",
        answer:
          "Yes. We build websites for businesses across the eastern corridor, with Google Business Profile set up for each location.",
      },
      {
        question: "How much does a website cost in Biratnagar?",
        answer:
          "Prices are the same wherever you are. A simple website usually starts around NPR 50,000, and a catalogue site with a content management system around NPR 100,000 to NPR 250,000. The quotation is free.",
      },
    ],
  },
} satisfies Record<string, SeoLandingPage>;
