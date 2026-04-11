const PROJECTS = {
  onesoil: {
    eyebrow: "Agtech · Senior Frontend / Mobile",
    title: "OneSoil",
    role: "Senior Frontend Engineer",
    heroVisual: `<svg viewBox="0 0 1200 515" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3d6b2a"></stop>
      <stop offset="1" stop-color="#1f3814"></stop>
      </linearGradient>
      </defs>
      <rect width="1200" height="515" fill="url(#sky)"></rect>
      <g opacity="0.85">
      <polygon points="40,80 280,55 310,180 60,200" fill="#7cbb3f"></polygon>
      <polygon points="310,180 60,200 90,320 340,300" fill="#5a9c2e"></polygon>
      <polygon points="280,55 510,65 540,175 310,180" fill="#a8d866"></polygon>
      <polygon points="510,65 760,50 790,165 540,175" fill="#6fb032"></polygon>
      <polygon points="760,50 1020,70 1040,180 790,165" fill="#c6e086"></polygon>
      <polygon points="1020,70 1200,82 1200,185 1040,180" fill="#4d8b25"></polygon>
      <polygon points="540,175 790,165 810,290 560,295" fill="#8ec94a"></polygon>
      <polygon points="790,165 1040,180 1060,295 810,290" fill="#5a9c2e"></polygon>
      <polygon points="1040,180 1200,185 1200,300 1060,295" fill="#7cbb3f"></polygon>
      <polygon points="90,320 340,300 360,420 110,440" fill="#a8d866"></polygon>
      <polygon points="340,300 560,295 580,420 360,420" fill="#4d8b25"></polygon>
      <polygon points="560,295 810,290 830,420 580,420" fill="#7cbb3f"></polygon>
      <polygon points="810,290 1060,295 1080,420 830,420" fill="#5a9c2e"></polygon>
      <polygon points="1060,295 1200,300 1200,420 1080,420" fill="#8ec94a"></polygon>
      <polygon points="110,440 360,420 380,515 130,515" fill="#6fb032"></polygon>
      <polygon points="360,420 580,420 600,515 380,515" fill="#c6e086"></polygon>
      <polygon points="580,420 830,420 850,515 600,515" fill="#5a9c2e"></polygon>
      <polygon points="830,420 1080,420 1100,515 850,515" fill="#8ec94a"></polygon>
      <polygon points="1080,420 1200,420 1200,515 1100,515" fill="#7cbb3f"></polygon>
      </g>
      <g stroke="#f4e4a1" stroke-width="0.8" fill="none" opacity="0.55">
      <path d="M0 120 Q 300 90 600 110 T 1200 100"></path>
      <path d="M0 200 Q 300 180 600 195 T 1200 190"></path>
      <path d="M0 280 Q 300 260 600 275 T 1200 270"></path>
      <path d="M0 360 Q 300 345 600 355 T 1200 350"></path>
      <path d="M0 440 Q 300 420 600 435 T 1200 430"></path>
      </g>
      <g fill="#f4e4a1">
      <circle cx="200" cy="140" r="3"></circle>
      <circle cx="420" cy="115" r="3"></circle>
      <circle cx="650" cy="110" r="3"></circle>
      <circle cx="880" cy="120" r="3"></circle>
      <circle cx="180" cy="260" r="3"></circle>
      <circle cx="450" cy="235" r="3"></circle>
      <circle cx="700" cy="230" r="3"></circle>
      <circle cx="960" cy="245" r="3"></circle>
      <circle cx="250" cy="380" r="3"></circle>
      <circle cx="500" cy="375" r="3"></circle>
      <circle cx="750" cy="365" r="3"></circle>
      <circle cx="1000" cy="380" r="3"></circle>
      </g>
      <circle cx="700" cy="230" r="14" fill="none" stroke="#ffe066" stroke-width="2"></circle>
      <circle cx="700" cy="230" r="26" fill="none" stroke="#ffe066" stroke-width="1" opacity="0.5"></circle>
      </svg>`,
    galleryImages: [`assets/onesoil-crop-map.webp`, `assets/onesoil-vra-ndvi.webp`],
    intro: "OneSoil is a precision agriculture platform that turns free Sentinel-2 satellite imagery into actionable decisions for farmers. I led frontend across the web app and mobile app during the company's core growth years.",
    body: "<p><strong>Product.</strong> An agtech platform with <strong>100,000+ users</strong> — NDVI vegetation maps, satellite-detected field boundaries, crop classification, and precision farming tools. Free, ad-free, used across 180 countries.</p><p><strong>What I owned.</strong> Senior frontend across both the React web app and the React Native mobile app, shipping features end-to-end from requirements to production. Built <strong>Actual Vegetation</strong> and <strong>Multiple VRA Maps</strong> from scratch, integrated <strong>Variable Rate Application</strong> overlays, and shipped the cross-platform <strong>Weather feature</strong> (forecasts, history, per-field overlays) for both web and mobile.</p><p><strong>Performance work.</strong> Reduced API calls by 50%+ in key flows through request batching and caching, and shrank bundle size for faster loads on slower mobile networks.</p>",
    highlights: [
      "Built Actual Vegetation and Multiple VRA Maps from scratch — feature work with product and design from initial requirements to production rollout.",
      "Shipped the cross-platform Weather feature for both the web app and the React Native mobile app — forecasts, historical data, and per-field overlays.",
      "Reduced API calls by more than 50% in several flows through request batching and improved caching, helping performance on slower mobile networks.",
      "Reduced the web app bundle size, improving load time and initial render performance.",
      "Built geospatial features for agricultural field mapping using GeoJSON and Mapbox GL — field detection, crop classification overlays, NDVI heatmaps.",
      "Ran A/B tests to evaluate feature ideas before scaling them across 100K+ users."
    ],
    links: [
      { label: "Visit onesoil.ai", url: "https://onesoil.ai/en", type: "external" },
      { label: "OneSoil Web App", url: "https://app.onesoil.ai/", type: "external" },
      { label: "Blog", url: "https://blog.onesoil.ai/en", type: "external" }
    ],
    tech: ["React", "React Native", "TypeScript", "Redux", "Effector", "Mapbox GL", "WatermelonDB", "Playwright"],
    sidebar: [
      { k: "Company", v: "OneSoil (onesoil.ai)" },
      { k: "Industry", v: "Agtech / Precision farming" },
      { k: "Stat", stat: "100K+", v: "Farmers across 180 countries" },
      { k: "Role", v: "Senior Frontend Engineer" },
      { k: "Tenure", v: "May 2021 — Sep 2024" }
    ]
  },

  rightway: {
    eyebrow: "2018 — 2021 · US Healthcare",
    title: "Rightway Healthcare",
    role: "Frontend / Product Engineer",
    heroImage: `assets/rightway-1.webp`,
    galleryImages: [`assets/rightway-1.webp`, `assets/rightway-2.webp`],
    intro: "Rightway is a healthcare navigation and pharmacy benefits platform that sits between employers and the US healthcare system — connecting members to Health Guides (real humans) who help them navigate care, medications, and billing.",
    body: "<p><strong>Product.</strong> A healthcare navigation and pharmacy benefits platform serving Fortune 500 companies — Tyson Foods, Instacart, and others — with member-facing apps on iOS, Android, and web.</p><p><strong>Trajectory.</strong> Rightway reached a <strong>$1B+ valuation in under 3 years</strong>. I joined as a frontend engineer and later took on lead responsibilities — onboarding new devs, screening candidates, and establishing engineering practices like unit testing.</p><p><strong>What I built.</strong> Designed and built the Client Portal — a real-time claims management dashboard using GraphQL Subscriptions. Worked across React, React Native, Next.js, and Apollo GraphQL. Improved accessibility to WCAG standards within HIPAA compliance.</p>",
    highlights: [
      "Shipped medication management flows: pricing lookup, refill reminders, pharmacy switching, prescription transfer to mail order.",
      "Worked closely with product and design to iterate on the Health Guide chat experience — the highest-engagement surface in the app.",
      "Contributed to the design system and a11y guidelines so new features shipped accessible by default.",
      "Partnered with backend to define clean, typed API contracts — shrinking the feedback loop on data-heavy screens."
    ],
    links: [
      { label: "rightwayhealthcare.com", url: "https://www.rightwayhealthcare.com/", type: "external" },
      { label: "iOS App", url: "https://apps.apple.com/us/app/rightway-healthcare/id1294810240", type: "external" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.rightway.roadmap.consumer&hl=en", type: "external" }
    ],
    tech: ["React", "Next.js", "TypeScript", "React Native", "Design Systems", "a11y"],
    sidebar: [
      { k: "Company", v: "Rightway Healthcare" },
      { k: "Industry", v: "US Healthcare / PBM" },
      { k: "Stat", stat: "$1B+", v: "Company valuation" },
      { k: "NPS", v: "70 (8.5× industry avg)" },
      { k: "Clients", v: "Tyson Foods, Instacart, + Fortune 500" },
      { k: "Role", v: "Frontend / Product Engineer" },
      { k: "Tenure", v: "Jan 2018 — May 2021" }
    ]
  },

  enjoy: {
    eyebrow: "Live Gaming · Real-time",
    title: "Enjoy Gaming",
    role: "Senior Frontend Engineer",
    heroVisual: `<svg viewBox="0 0 1200 515" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"><defs><radialGradient id="ehbg" cx="50%" cy="50%" r="80%"><stop offset="0" stop-color="#5a0e26"/><stop offset="0.5" stop-color="#1a0510"/><stop offset="1" stop-color="#000000"/></radialGradient></defs><rect width="1200" height="515" fill="url(#ehbg)"/><g transform="translate(600,260)"><circle r="195" fill="none" stroke="#ffd700" stroke-width="3"/><circle r="186" fill="#1a0510"/><path d="M0,0 L0.0,-186.0 A186,186 0 0,1 21.6,-184.7 Z" fill="#ff3366" opacity="0.88"/><path d="M0,0 L21.6,-184.7 A186,186 0 0,1 42.9,-181.0 Z" fill="#ffd700" opacity="0.88"/><path d="M0,0 L42.9,-181.0 A186,186 0 0,1 63.6,-174.8 Z" fill="#1a3a8a" opacity="0.88"/><path d="M0,0 L63.6,-174.8 A186,186 0 0,1 83.5,-166.2 Z" fill="#ff3366" opacity="0.88"/><path d="M0,0 L83.5,-166.2 A186,186 0 0,1 102.2,-155.4 Z" fill="#ffd700" opacity="0.88"/><path d="M0,0 L102.2,-155.4 A186,186 0 0,1 119.6,-142.5 Z" fill="#1a3a8a" opacity="0.88"/><path d="M0,0 L119.6,-142.5 A186,186 0 0,1 135.3,-127.6 Z" fill="#ff3366" opacity="0.88"/><path d="M0,0 L135.3,-127.6 A186,186 0 0,1 149.2,-111.1 Z" fill="#ffd700" opacity="0.88"/><path d="M0,0 L149.2,-111.1 A186,186 0 0,1 161.1,-93.0 Z" fill="#1a3a8a" opacity="0.88"/><path d="M0,0 L161.1,-93.0 A186,186 0 0,1 170.8,-73.7 Z" fill="#ff3366" opacity="0.88"/><path d="M0,0 L170.8,-73.7 A186,186 0 0,1 178.2,-53.3 Z" fill="#ffd700" opacity="0.88"/><path d="M0,0 L178.2,-53.3 A186,186 0 0,1 183.2,-32.3 Z" fill="#1a3a8a" opacity="0.88"/><path d="M0,0 L183.2,-32.3 A186,186 0 0,1 185.7,-10.8 Z" fill="#ff3366" opacity="0.88"/><path d="M0,0 L185.7,-10.8 A186,186 0 0,1 185.7,10.8 Z" fill="#ffd700" opacity="0.88"/><path d="M0,0 L185.7,10.8 A186,186 0 0,1 183.2,32.3 Z" fill="#1a3a8a" opacity="0.88"/><path d="M0,0 L183.2,32.3 A186,186 0 0,1 178.2,53.3 Z" fill="#ff3366" opacity="0.88"/><path d="M0,0 L178.2,53.3 A186,186 0 0,1 170.8,73.7 Z" fill="#ffd700" opacity="0.88"/><path d="M0,0 L170.8,73.7 A186,186 0 0,1 161.1,93.0 Z" fill="#1a3a8a" opacity="0.88"/><path d="M0,0 L161.1,93.0 A186,186 0 0,1 149.2,111.1 Z" fill="#ff3366" opacity="0.88"/><path d="M0,0 L149.2,111.1 A186,186 0 0,1 135.3,127.6 Z" fill="#ffd700" opacity="0.88"/><path d="M0,0 L135.3,127.6 A186,186 0 0,1 119.6,142.5 Z" fill="#1a3a8a" opacity="0.88"/><path d="M0,0 L119.6,142.5 A186,186 0 0,1 102.2,155.4 Z" fill="#ff3366" opacity="0.88"/><path d="M0,0 L102.2,155.4 A186,186 0 0,1 83.5,166.2 Z" fill="#ffd700" opacity="0.88"/><path d="M0,0 L83.5,166.2 A186,186 0 0,1 63.6,174.8 Z" fill="#1a3a8a" opacity="0.88"/><path d="M0,0 L63.6,174.8 A186,186 0 0,1 42.9,181.0 Z" fill="#ff3366" opacity="0.88"/><path d="M0,0 L42.9,181.0 A186,186 0 0,1 21.6,184.7 Z" fill="#ffd700" opacity="0.88"/><path d="M0,0 L21.6,184.7 A186,186 0 0,1 0.0,186.0 Z" fill="#1a3a8a" opacity="0.88"/><path d="M0,0 L0.0,186.0 A186,186 0 0,1 -21.6,184.7 Z" fill="#ff3366" opacity="0.88"/><path d="M0,0 L-21.6,184.7 A186,186 0 0,1 -42.9,181.0 Z" fill="#ffd700" opacity="0.88"/><path d="M0,0 L-42.9,181.0 A186,186 0 0,1 -63.6,174.8 Z" fill="#1a3a8a" opacity="0.88"/><path d="M0,0 L-63.6,174.8 A186,186 0 0,1 -83.5,166.2 Z" fill="#ff3366" opacity="0.88"/><path d="M0,0 L-83.5,166.2 A186,186 0 0,1 -102.2,155.4 Z" fill="#ffd700" opacity="0.88"/><path d="M0,0 L-102.2,155.4 A186,186 0 0,1 -119.6,142.5 Z" fill="#1a3a8a" opacity="0.88"/><path d="M0,0 L-119.6,142.5 A186,186 0 0,1 -135.3,127.6 Z" fill="#ff3366" opacity="0.88"/><path d="M0,0 L-135.3,127.6 A186,186 0 0,1 -149.2,111.1 Z" fill="#ffd700" opacity="0.88"/><path d="M0,0 L-149.2,111.1 A186,186 0 0,1 -161.1,93.0 Z" fill="#1a3a8a" opacity="0.88"/><path d="M0,0 L-161.1,93.0 A186,186 0 0,1 -170.8,73.7 Z" fill="#ff3366" opacity="0.88"/><path d="M0,0 L-170.8,73.7 A186,186 0 0,1 -178.2,53.3 Z" fill="#ffd700" opacity="0.88"/><path d="M0,0 L-178.2,53.3 A186,186 0 0,1 -183.2,32.3 Z" fill="#1a3a8a" opacity="0.88"/><path d="M0,0 L-183.2,32.3 A186,186 0 0,1 -185.7,10.8 Z" fill="#ff3366" opacity="0.88"/><path d="M0,0 L-185.7,10.8 A186,186 0 0,1 -185.7,-10.8 Z" fill="#ffd700" opacity="0.88"/><path d="M0,0 L-185.7,-10.8 A186,186 0 0,1 -183.2,-32.3 Z" fill="#1a3a8a" opacity="0.88"/><path d="M0,0 L-183.2,-32.3 A186,186 0 0,1 -178.2,-53.3 Z" fill="#ff3366" opacity="0.88"/><path d="M0,0 L-178.2,-53.3 A186,186 0 0,1 -170.8,-73.7 Z" fill="#ffd700" opacity="0.88"/><path d="M0,0 L-170.8,-73.7 A186,186 0 0,1 -161.1,-93.0 Z" fill="#1a3a8a" opacity="0.88"/><path d="M0,0 L-161.1,-93.0 A186,186 0 0,1 -149.2,-111.1 Z" fill="#ff3366" opacity="0.88"/><path d="M0,0 L-149.2,-111.1 A186,186 0 0,1 -135.3,-127.6 Z" fill="#ffd700" opacity="0.88"/><path d="M0,0 L-135.3,-127.6 A186,186 0 0,1 -119.6,-142.5 Z" fill="#1a3a8a" opacity="0.88"/><path d="M0,0 L-119.6,-142.5 A186,186 0 0,1 -102.2,-155.4 Z" fill="#ff3366" opacity="0.88"/><path d="M0,0 L-102.2,-155.4 A186,186 0 0,1 -83.5,-166.2 Z" fill="#ffd700" opacity="0.88"/><path d="M0,0 L-83.5,-166.2 A186,186 0 0,1 -63.6,-174.8 Z" fill="#1a3a8a" opacity="0.88"/><path d="M0,0 L-63.6,-174.8 A186,186 0 0,1 -42.9,-181.0 Z" fill="#ff3366" opacity="0.88"/><path d="M0,0 L-42.9,-181.0 A186,186 0 0,1 -21.6,-184.7 Z" fill="#ffd700" opacity="0.88"/><path d="M0,0 L-21.6,-184.7 A186,186 0 0,1 -0.0,-186.0 Z" fill="#1a3a8a" opacity="0.88"/><line x1="0.0" y1="-186.0" x2="0.0" y2="-198.0" stroke="#ffd700" stroke-width="0.8"/><line x1="21.6" y1="-184.7" x2="23.0" y2="-196.7" stroke="#ffd700" stroke-width="0.8"/><line x1="42.9" y1="-181.0" x2="45.7" y2="-192.7" stroke="#ffd700" stroke-width="0.8"/><line x1="63.6" y1="-174.8" x2="67.7" y2="-186.1" stroke="#ffd700" stroke-width="0.8"/><line x1="83.5" y1="-166.2" x2="88.9" y2="-176.9" stroke="#ffd700" stroke-width="0.8"/><line x1="102.2" y1="-155.4" x2="108.8" y2="-165.4" stroke="#ffd700" stroke-width="0.8"/><line x1="119.6" y1="-142.5" x2="127.3" y2="-151.7" stroke="#ffd700" stroke-width="0.8"/><line x1="135.3" y1="-127.6" x2="144.0" y2="-135.9" stroke="#ffd700" stroke-width="0.8"/><line x1="149.2" y1="-111.1" x2="158.8" y2="-118.2" stroke="#ffd700" stroke-width="0.8"/><line x1="161.1" y1="-93.0" x2="171.5" y2="-99.0" stroke="#ffd700" stroke-width="0.8"/><line x1="170.8" y1="-73.7" x2="181.8" y2="-78.4" stroke="#ffd700" stroke-width="0.8"/><line x1="178.2" y1="-53.3" x2="189.7" y2="-56.8" stroke="#ffd700" stroke-width="0.8"/><line x1="183.2" y1="-32.3" x2="195.0" y2="-34.4" stroke="#ffd700" stroke-width="0.8"/><line x1="185.7" y1="-10.8" x2="197.7" y2="-11.5" stroke="#ffd700" stroke-width="0.8"/><line x1="185.7" y1="10.8" x2="197.7" y2="11.5" stroke="#ffd700" stroke-width="0.8"/><line x1="183.2" y1="32.3" x2="195.0" y2="34.4" stroke="#ffd700" stroke-width="0.8"/><line x1="178.2" y1="53.3" x2="189.7" y2="56.8" stroke="#ffd700" stroke-width="0.8"/><line x1="170.8" y1="73.7" x2="181.8" y2="78.4" stroke="#ffd700" stroke-width="0.8"/><line x1="161.1" y1="93.0" x2="171.5" y2="99.0" stroke="#ffd700" stroke-width="0.8"/><line x1="149.2" y1="111.1" x2="158.8" y2="118.2" stroke="#ffd700" stroke-width="0.8"/><line x1="135.3" y1="127.6" x2="144.0" y2="135.9" stroke="#ffd700" stroke-width="0.8"/><line x1="119.6" y1="142.5" x2="127.3" y2="151.7" stroke="#ffd700" stroke-width="0.8"/><line x1="102.2" y1="155.4" x2="108.8" y2="165.4" stroke="#ffd700" stroke-width="0.8"/><line x1="83.5" y1="166.2" x2="88.9" y2="176.9" stroke="#ffd700" stroke-width="0.8"/><line x1="63.6" y1="174.8" x2="67.7" y2="186.1" stroke="#ffd700" stroke-width="0.8"/><line x1="42.9" y1="181.0" x2="45.7" y2="192.7" stroke="#ffd700" stroke-width="0.8"/><line x1="21.6" y1="184.7" x2="23.0" y2="196.7" stroke="#ffd700" stroke-width="0.8"/><line x1="0.0" y1="186.0" x2="0.0" y2="198.0" stroke="#ffd700" stroke-width="0.8"/><line x1="-21.6" y1="184.7" x2="-23.0" y2="196.7" stroke="#ffd700" stroke-width="0.8"/><line x1="-42.9" y1="181.0" x2="-45.7" y2="192.7" stroke="#ffd700" stroke-width="0.8"/><line x1="-63.6" y1="174.8" x2="-67.7" y2="186.1" stroke="#ffd700" stroke-width="0.8"/><line x1="-83.5" y1="166.2" x2="-88.9" y2="176.9" stroke="#ffd700" stroke-width="0.8"/><line x1="-102.2" y1="155.4" x2="-108.8" y2="165.4" stroke="#ffd700" stroke-width="0.8"/><line x1="-119.6" y1="142.5" x2="-127.3" y2="151.7" stroke="#ffd700" stroke-width="0.8"/><line x1="-135.3" y1="127.6" x2="-144.0" y2="135.9" stroke="#ffd700" stroke-width="0.8"/><line x1="-149.2" y1="111.1" x2="-158.8" y2="118.2" stroke="#ffd700" stroke-width="0.8"/><line x1="-161.1" y1="93.0" x2="-171.5" y2="99.0" stroke="#ffd700" stroke-width="0.8"/><line x1="-170.8" y1="73.7" x2="-181.8" y2="78.4" stroke="#ffd700" stroke-width="0.8"/><line x1="-178.2" y1="53.3" x2="-189.7" y2="56.8" stroke="#ffd700" stroke-width="0.8"/><line x1="-183.2" y1="32.3" x2="-195.0" y2="34.4" stroke="#ffd700" stroke-width="0.8"/><line x1="-185.7" y1="10.8" x2="-197.7" y2="11.5" stroke="#ffd700" stroke-width="0.8"/><line x1="-185.7" y1="-10.8" x2="-197.7" y2="-11.5" stroke="#ffd700" stroke-width="0.8"/><line x1="-183.2" y1="-32.3" x2="-195.0" y2="-34.4" stroke="#ffd700" stroke-width="0.8"/><line x1="-178.2" y1="-53.3" x2="-189.7" y2="-56.8" stroke="#ffd700" stroke-width="0.8"/><line x1="-170.8" y1="-73.7" x2="-181.8" y2="-78.4" stroke="#ffd700" stroke-width="0.8"/><line x1="-161.1" y1="-93.0" x2="-171.5" y2="-99.0" stroke="#ffd700" stroke-width="0.8"/><line x1="-149.2" y1="-111.1" x2="-158.8" y2="-118.2" stroke="#ffd700" stroke-width="0.8"/><line x1="-135.3" y1="-127.6" x2="-144.0" y2="-135.9" stroke="#ffd700" stroke-width="0.8"/><line x1="-119.6" y1="-142.5" x2="-127.3" y2="-151.7" stroke="#ffd700" stroke-width="0.8"/><line x1="-102.2" y1="-155.4" x2="-108.8" y2="-165.4" stroke="#ffd700" stroke-width="0.8"/><line x1="-83.5" y1="-166.2" x2="-88.9" y2="-176.9" stroke="#ffd700" stroke-width="0.8"/><line x1="-63.6" y1="-174.8" x2="-67.7" y2="-186.1" stroke="#ffd700" stroke-width="0.8"/><line x1="-42.9" y1="-181.0" x2="-45.7" y2="-192.7" stroke="#ffd700" stroke-width="0.8"/><line x1="-21.6" y1="-184.7" x2="-23.0" y2="-196.7" stroke="#ffd700" stroke-width="0.8"/><circle r="58" fill="#0a0006" stroke="#ffd700" stroke-width="3"/><circle r="48" fill="none" stroke="#ffd700" stroke-width="0.6" stroke-dasharray="2 4"/><text y="-8" text-anchor="middle" font-family="ui-monospace,monospace" font-size="9" fill="#ffd700" letter-spacing="2">MYSTERY</text><text y="20" text-anchor="middle" font-family="Inter Tight,sans-serif" font-weight="800" font-size="36" fill="#ffd700">x100</text></g><polygon points="600,55 585,80 615,80" fill="#ffd700"/><g font-family="ui-monospace,monospace" font-size="11" fill="#ff3366" letter-spacing="2"><text x="40" y="38">● LIVE · 32,847 PLAYERS</text><text x="40" y="56" fill="#8c8b86" font-size="9">WHEEL OF FORTUNE · 54 SECTORS · 24/7</text></g><g font-family="ui-monospace,monospace" font-size="9" fill="#8c8b86" letter-spacing="1"><text x="1160" y="38" text-anchor="end">RTT 42MS · STREAM HD</text><text x="1160" y="55" text-anchor="end">UPTIME 99.98%</text></g></svg>`,
    intro: "Senior Frontend Engineer at Enjoy Gaming, working on a live-dealer iGaming platform that broadcasts real-time games 24/7.",
    body: "<p><strong>Product.</strong> A real-time live-games platform — including titles like <a href=\"https://enjoygaming.com/game/wonder-wheel\" target=\"_blank\" rel=\"noopener\" style=\"color:var(--accent);border-bottom:1px solid currentColor\">Wonder Wheel</a> — where players connect to live game sessions. The frontend has to stay in perfect sync with server state, recover gracefully from network hiccups, and never ever lose an in-flight action.</p><p><strong>Technical challenges.</strong> Low-latency state synchronization over WebSockets, optimistic UI mutations with rollback, and resilient reconnection flows that survived mobile network churn without losing game state.</p><p><strong>What I owned.</strong> Core real-time UI layer, state management architecture, reconnection logic, and the performance work needed to keep sub-100ms feedback on mid-range devices.</p>",
    highlights: [
      "Architected the WebSocket state sync layer with optimistic mutations and automatic rollback on server rejection.",
      "Built reconnection flows that survived mobile network drops without losing in-flight user actions.",
      "Kept P95 interaction latency under 100ms on mid-range Android devices.",
      "Introduced performance budgets and bundle-size monitoring to catch regressions in CI."
    ],
    links: [
      { label: "enjoygaming.com", url: "https://enjoygaming.com/live-games", type: "external" },
      { label: "Wonder Wheel game", url: "https://enjoygaming.com/game/wonder-wheel", type: "external" }
    ],
    tech: ["React", "TypeScript", "WebSockets", "Zustand", "RxJS"],
    sidebar: [
      { k: "Company", v: "Enjoy Gaming" },
      { k: "Industry", v: "Live games / real-time" },
      { k: "Stat", stat: "< 100ms", v: "P95 interaction latency" },
      { k: "Role", v: "Senior Frontend Engineer" },
    ]
  },

  namecoach: {
    eyebrow: "Contract via JetRuby · 2017 — 2018",
    title: "Namecoach",
    role: "Frontend Engineer (contract)",
    heroVisual: `<svg viewBox="0 0 200 250" style="width:100%;height:100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="ncbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1a3a8a"/><stop offset="1" stop-color="#3858d6"/></linearGradient></defs><rect width="200" height="250" fill="url(#ncbg)"/><g transform="translate(100,125)"><path d="M-30,-18 L-10,-18 L10,-32 L10,32 L-10,18 L-30,18 Z" fill="#fff"/><path d="M18,-18 Q32,0 18,18" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M28,-28 Q48,0 28,28" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.7"/><path d="M38,-38 Q64,0 38,38" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.4"/></g><text x="100" y="220" text-anchor="middle" font-family="Inter Tight,sans-serif" font-weight="700" font-size="11" fill="#fff" letter-spacing="2">NAMECOACH</text></svg>`,
    intro: "Namecoach is the leading AI-powered name pronunciation platform, used by 300+ organizations — Fortune 500s and major universities — with integrations into Salesforce, Canvas, Slack, Outlook, and a Chrome extension.",
    body: "<p><strong>Product.</strong> Namecoach lets people record and share the correct pronunciation of their name, then surfaces it across the tools their colleagues, teachers, or salespeople already use — Salesforce, Canvas, Outlook, Slack, Teams, and a Chrome extension.</p><p><strong>What I worked on.</strong> Frontend feature work and integrations during my time as a contractor through JetRuby. The codebase is React on top of a Rails backend, with embeddable widgets that have to behave well inside very different host pages — from Salesforce Lightning to Canvas LMS.</p><p><strong>Constraints.</strong> Embeddable widgets that run inside other people\'s apps need to be defensive about CSS, polite about events, and bulletproof on accessibility — Namecoach is SOC 2 Type II and Section 508 compliant.</p>",
    highlights: [
      "Built and maintained embeddable pronunciation player widgets used across 300+ partner deployments.",
      "Worked on Salesforce Lightning and Canvas LMS integrations shipped as managed packages.",
      "Followed Section 508 / WCAG 2.0 AA accessibility standards from day one.",
      "Coordinated with a distributed JetRuby team across timezones on a Rails-backed stack."
    ],
    links: [
      { label: "name-coach.com", url: "https://cloud.name-coach.com/", type: "external" },
      { label: "Chrome extension", url: "https://chrome.google.com/webstore/detail/namecoach-ai-name-pronunc/ipiekpebmfcdieggajmfcdcccmiegame", type: "external" }
    ],
    tech: ["React", "TypeScript", "Embeddable widgets", "Salesforce LWC", "a11y"],
    sidebar: [
      { k: "Client", v: "Namecoach" },
      { k: "Agency", v: "JetRuby (contract)" },
      { k: "Stat", stat: "300+", v: "Partner organizations" },
      { k: "Compliance", v: "SOC 2 Type II · Section 508" },
      { k: "Tenure", v: "2017 (via JetRuby)" }
    ]
  },

  pyromusic: {
    eyebrow: "Contract via JetRuby · 2018",
    title: "Pyro Music DJ",
    role: "Frontend Engineer (contract)",
    heroVisual: `<svg viewBox="0 -25 200 250" style="width:100%;height:100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"><defs><radialGradient id="pybg" cx="30%" cy="40%"><stop offset="0" stop-color="#ff3366"/><stop offset="1" stop-color="#1a0510"/></radialGradient></defs><rect width="200" height="250" fill="url(#pybg)"/><g transform="translate(60,100)"><circle r="38" fill="#0a0006" stroke="#ffd700" stroke-width="1.5"/><circle r="32" fill="none" stroke="#ff3366" stroke-width="0.5"/><circle r="22" fill="none" stroke="#ff3366" stroke-width="0.5"/><circle r="12" fill="none" stroke="#ff3366" stroke-width="0.5"/><circle r="3" fill="#ffd700"/></g><g transform="translate(140,100)"><circle r="38" fill="#0a0006" stroke="#ffd700" stroke-width="1.5"/><circle r="32" fill="none" stroke="#ff3366" stroke-width="0.5"/><circle r="22" fill="none" stroke="#ff3366" stroke-width="0.5"/><circle r="12" fill="none" stroke="#ff3366" stroke-width="0.5"/><circle r="3" fill="#ffd700"/></g><g transform="translate(20,170)" fill="#ffd700"><rect x="0.0" y="17.0" width="3" height="6" rx="1"/><rect x="5.5" y="14.0" width="3" height="12" rx="1"/><rect x="11.0" y="16.0" width="3" height="8" rx="1"/><rect x="16.5" y="12.0" width="3" height="16" rx="1"/><rect x="22.0" y="15.0" width="3" height="10" rx="1"/><rect x="27.5" y="11.0" width="3" height="18" rx="1"/><rect x="33.0" y="13.0" width="3" height="14" rx="1"/><rect x="38.5" y="10.0" width="3" height="20" rx="1"/><rect x="44.0" y="14.0" width="3" height="12" rx="1"/><rect x="49.5" y="12.0" width="3" height="16" rx="1"/><rect x="55.0" y="16.0" width="3" height="8" rx="1"/><rect x="60.5" y="13.0" width="3" height="14" rx="1"/><rect x="66.0" y="15.0" width="3" height="10" rx="1"/><rect x="71.5" y="11.0" width="3" height="18" rx="1"/><rect x="77.0" y="14.0" width="3" height="12" rx="1"/><rect x="82.5" y="16.0" width="3" height="8" rx="1"/><rect x="88.0" y="12.0" width="3" height="16" rx="1"/><rect x="93.5" y="15.0" width="3" height="10" rx="1"/><rect x="99.0" y="13.0" width="3" height="14" rx="1"/><rect x="104.5" y="17.0" width="3" height="6" rx="1"/><rect x="110.0" y="14.0" width="3" height="12" rx="1"/><rect x="115.5" y="16.0" width="3" height="8" rx="1"/><rect x="121.0" y="12.0" width="3" height="16" rx="1"/><rect x="126.5" y="15.0" width="3" height="10" rx="1"/><rect x="132.0" y="11.0" width="3" height="18" rx="1"/><rect x="137.5" y="13.0" width="3" height="14" rx="1"/><rect x="143.0" y="10.0" width="3" height="20" rx="1"/><rect x="148.5" y="14.0" width="3" height="12" rx="1"/><rect x="154.0" y="16.0" width="3" height="8" rx="1"/><rect x="159.5" y="13.0" width="3" height="14" rx="1"/></g></svg>`,
    intro: "A browser-based DJ platform built for the Chinese music market — letting users mix tracks, manage playlists, and perform live sessions entirely in the browser.",
    body: "<p><strong>Product.</strong> A web-based DJ tool: dual decks, BPM-synced crossfading, waveform scrubbing, hot cues, and a track library backed by a Chinese music catalog. The whole thing runs in the browser using the Web Audio API.</p><p><strong>What I worked on.</strong> Frontend for the deck UI, waveform visualization, and the playlist/library views. The interesting parts were the audio plumbing — keeping two decks tightly in sync, handling timeline scrubbing without audible glitches, and rendering waveforms efficiently for tracks that can run 5+ minutes long.</p><p><strong>Delivery.</strong> Shipped as part of a small team through JetRuby for a Chinese client, working remote across a wide timezone gap.</p>",
    highlights: [
      "Built dual-deck DJ UI with synced crossfade and waveform scrubbing using Web Audio API.",
      "Optimized waveform rendering for long audio files with Canvas / OffscreenCanvas.",
      "Handled tight audio sync between two decks without perceptible drift.",
      "Delivered as a contractor through JetRuby for a Chinese music client."
    ],
    links: [
      { label: "dj.pyromusic.cn", url: "https://dj.pyromusic.cn/", type: "external" }
    ],
    tech: ["React", "TypeScript", "Web Audio API", "Canvas"],
    sidebar: [
      { k: "Client", v: "Pyro Music (CN)" },
      { k: "Agency", v: "JetRuby (contract)" },
      { k: "Type", v: "Browser-based DJ tool" },
      { k: "Tenure", v: "2018" }
    ]
  }
};

// ============ MODAL LOGIC ============
const modal = document.getElementById('modal');
const backdrop = document.getElementById('backdrop');
const modalBody = document.getElementById('modal-body');
const closeBtn = modal.querySelector('.close');

function buildModalHTML(p) {
  const visual = p.heroImage
    ? `<img src="${p.heroImage}" alt="${p.title}"/>`
    : p.heroVisual;

  const sidebarHTML = p.sidebar.map(s => `
    <div class="block">
      <div class="k">${s.k}</div>
      ${s.stat ? `<div class="stat">${s.stat}</div>` : ''}
      <div class="v">${s.v}</div>
    </div>
  `).join('');

  const highlightsHTML = p.highlights.map(h => `<li>${h}</li>`).join('');
  const techHTML = p.tech.map(t => `<span>${t}</span>`).join('');
  const linksHTML = (p.links && p.links.length) ? `
    <div class="project-links">
      ${p.links.map(l => `
        <a href="${l.url}" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.4">
            <path d="M4 2 H2 V10 H10 V8"/>
            <path d="M7 2 H10 V5"/>
            <path d="M6 6 L10 2"/>
          </svg>
          ${l.label}
        </a>
      `).join('')}
    </div>
  ` : '';

  const galleryHTML = p.galleryImages ? `
    <div class="gallery">
      ${p.galleryImages.map(src => `<div class="g-item"><img src="${src}" alt=""/></div>`).join('')}
    </div>
  ` : '';

  return `
    <div class="modal-hero">
      <div class="visual">${visual}</div>
      <div class="head-content">
        <div class="eyebrow">${p.eyebrow}</div>
        <h3 class="tight">${p.title}</h3>
        <div class="role">${p.role}</div>
      </div>
    </div>
    <div class="modal-content">
      <div class="main">
        <h4>Overview</h4>
        <p>${p.intro}</p>
        ${p.body}
        <h4>Highlights</h4>
        <ul class="highlights">${highlightsHTML}</ul>
        ${linksHTML}
      </div>
      <aside class="sidebar">
        ${sidebarHTML}
        <div class="block">
          <div class="k">Stack</div>
          <div class="stack-list" style="margin-top:8px">${techHTML}</div>
        </div>
      </aside>
      ${galleryHTML}
    </div>
  `;
}

function openModal(key) {
  const p = PROJECTS[key];
  if (!p) return;
  modalBody.innerHTML = buildModalHTML(p);
  modalBody.scrollTop = 0;
  backdrop.classList.add('open');
  modal.classList.add('open');
  document.body.classList.add('no-scroll');
}

function closeModal() {
  backdrop.classList.remove('open');
  modal.classList.remove('open');
  document.body.classList.remove('no-scroll');
}

document.querySelectorAll('.project-card').forEach(row => {
  row.addEventListener('click', () => openModal(row.dataset.project));
});
backdrop.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ============ CUSTOM CURSOR ============
(function initCursor() {
  if (window.matchMedia('(hover: none)').matches) return;
  const cursor = document.createElement('div');
  cursor.className = 'cursor';
  document.body.appendChild(cursor);

  let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my;
  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  (function loop() {
    cx += (mx - cx) * 0.22;
    cy += (my - cy) * 0.22;
    cursor.style.left = cx + 'px';
    cursor.style.top = cy + 'px';
    requestAnimationFrame(loop);
  })();

  // Hover state
  document.querySelectorAll('a, button, .project-card, [data-project]').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
  // Re-attach on modal content (dynamic)
  const observer = new MutationObserver(() => {
    document.querySelectorAll('.modal a, .modal button').forEach(el => {
      if (el.dataset.cursorBound) return;
      el.dataset.cursorBound = '1';
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  });
  observer.observe(document.getElementById('modal-body'), { childList: true, subtree: true });

  // Dark sections
  const darkSel = '.lab-cta, .modal-hero';
  (function checkDark() {
    let inDark = false;
    document.querySelectorAll(darkSel).forEach(s => {
      const r = s.getBoundingClientRect();
      if (cy >= r.top && cy <= r.bottom && cx >= r.left && cx <= r.right) inDark = true;
    });
    cursor.classList.toggle('dark', inDark);
    requestAnimationFrame(checkDark);
  })();
})();

// ============ GSAP ANIMATIONS ============
gsap.registerPlugin(ScrollTrigger);

// Hero reveals — no scroll trigger, direct timeline
gsap.set('.hero [data-reveal]', { opacity: 0, y: 24 });
const heroTl = gsap.timeline({ delay: 0.15 });
heroTl.to('.hero .eyebrow',  { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' })
      .to('.hero h1',        { opacity: 1, y: 0, duration: 1.1, ease: 'expo.out' }, '-=0.55')
      .to('.hero .lede',     { opacity: 1, y: 0, duration: 0.9, ease: 'expo.out' }, '-=0.7')
      .to('.hero .actions',  { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.6');

// Scroll reveals for the rest
document.querySelectorAll('[data-reveal]').forEach(el => {
  if (el.closest('.hero')) return;
  gsap.set(el, { opacity: 0, y: 32 });
  gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'expo.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 88%',
      toggleActions: 'play none none none'
    }
  });
});

// Staggered project rows
gsap.set('.project-card', { opacity: 0, y: 30 });
document.querySelectorAll('.projects').forEach(list => {
  gsap.to(list.querySelectorAll('.project-card'), {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.1,
    ease: 'expo.out',
    scrollTrigger: {
      trigger: list,
      start: 'top 82%',
      toggleActions: 'play none none none'
    }
  });
});

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});

// Refresh on font load
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => ScrollTrigger.refresh());
}