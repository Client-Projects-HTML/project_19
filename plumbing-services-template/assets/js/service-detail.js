/**
 * FlowFix Plumbing Services - Dynamic Service Detail Loader
 * Hydrates service-detail.html dynamically based on ?service= URL parameter.
 */

const SERVICES_DATA = {
  'pipe-repair': {
    id: 'pipe-repair',
    title: 'Pipe Repair & Replacement',
    subtitle: 'Comprehensive pipe diagnostics, copper joint soldering, PEX upgrades, trenchless relining, and main line leak repairs backed by a 1-year labor warranty.',
    image: '../assets/images/pipe-repair-user.png',
    imageAlt: 'Professional Plumber Soldering Copper Pipe System',
    overviewHeading: 'Professional Pipe Repair & Replacement Services',
    overviewP1: 'Leaking, corroded, or burst pipes can cause catastrophic water damage to your flooring, drywall, and electrical systems in a matter of hours. At FlowFix Plumbing, our certified master plumbers utilize non-invasive acoustic sensors and thermal imaging to isolate hidden pipe fractures quickly without tearing up unnecessary walls.',
    overviewP2: 'Whether you require a single pinhole leak repair in a copper joint, trenchless sewer pipe relining, or a full home repiping project using durable flexible PEX tubing, we deliver clean, compliant workmanship designed to last for decades.',
    highlightsHeading: 'Warning Signs You Need Pipe Repair Immediately',
    highlightsIcon: 'alert-circle',
    highlights: [
      'Sudden unexplained drop in water pressure across fixtures',
      'Damp spots, mildew, or warm areas on hardwood or tile floors',
      'Rusty, brownish, or metallic tasting tap water',
      'Unexplained spike in monthly municipal water utility bills',
      'Continuous sound of running water inside walls when taps are off',
      'Visible corrosion, green patina, or flaking on exposed pipes'
    ],
    processHeading: 'Our 4-Step Pipe Repair Process',
    processSteps: [
      {
        step: 1,
        title: 'Acoustic & Thermal Inspection',
        desc: 'We pinpoint the exact leak location without damaging drywalls using acoustic frequency locators.'
      },
      {
        step: 2,
        title: 'Water Line Isolation & Upfront Quote',
        desc: 'We isolate the damaged section, stop water flow, and present a guaranteed flat-rate price quote.'
      },
      {
        step: 3,
        title: 'Precision Soldering or PEX Fitting',
        desc: 'We replace damaged pipe sections with commercial-grade copper or flexible PEX piping according to building codes.'
      },
      {
        step: 4,
        title: 'Pressure Testing & Clean-up',
        desc: 'System is pressurized to verify 100% seal integrity. Work area is thoroughly sanitized and cleaned.'
      }
    ],
    faqs: [
      {
        q: 'How long does a pipe repair typically take?',
        a: 'Most minor copper or PEX joint repairs are completed within 1 to 2 hours. Full home repiping projects generally take between 1 to 3 days depending on property size.'
      },
      {
        q: 'Is PEX piping better than copper for home repiping?',
        a: 'PEX is flexible, resistant to freeze-bursting, requires fewer elbows, and is generally more cost-effective. Copper remains ideal for high temperature and external exposed lines. We guide you on the best choice for your home.'
      },
      {
        q: 'Do you offer warranties on pipe repairs?',
        a: 'Yes! All FlowFix pipe repairs come with a standard 1-Year Labor & Parts Warranty. Full house repiping jobs include a 10-Year Manufacturer Warranty.'
      }
    ],
    sidebarTitle: 'Book Pipe Repair',
    sidebarDesc: 'Schedule a licensed plumber to inspect your pipes with upfront flat-rate pricing.'
  },

  'bathroom-fitting': {
    id: 'bathroom-fitting',
    title: 'Bathroom & Kitchen Fitting',
    subtitle: 'Complete installation of luxury showers, thermostatic valves, bathtubs, toilets, vanities, and modern chrome fixtures tailored to your layout.',
    image: '../assets/images/pipe-repair-user.png',
    imageAlt: 'Modern Luxury Bathroom Plumbing Fitting',
    overviewHeading: 'Expert Bathroom & Kitchen Fitting Services',
    overviewP1: 'Elevate your sanctuary with custom bathroom plumbing installations. From thermostatic digital rainfall showers to double vanities and freestanding soaking tubs, FlowFix handles every detail of your plumbing layout with extreme precision.',
    overviewP2: 'We specialize in both residential bathroom renovations and high-end executive spa installations. Our team ensures proper drainage slopes, immaculate chrome sealing, precise hot/cold pressure balancing, and zero-leak guarantees on all concealed piping.',
    highlightsHeading: 'Our Fitting & Installation Capabilities',
    highlightsIcon: 'bath',
    highlights: [
      'Walk-in shower, thermostatic valve, & multi-head body jet loops',
      'Custom vanity, vessel sink, & touchless electronic faucet plumbing',
      'Freestanding soaking bathtub installation & waste overflow assembly',
      'High-efficiency dual-flush toilets & smart bidet seat connections',
      'Concealed in-wall piping & chrome trim precision alignment',
      'Complete waterproof membrane seal & system pressure calibration'
    ],
    processHeading: 'Our 4-Step Fitting Process',
    processSteps: [
      {
        step: 1,
        title: 'Design Layout & Plumbing Audit',
        desc: 'We assess your existing water feed lines, drain locations, and ventilation to create an optimal plumbing layout.'
      },
      {
        step: 2,
        title: 'Rough-in Piping & Drainage Slopes',
        desc: 'We lay down high-capacity PEX/copper supply lines and ensure precise 1/4-inch per foot drainage slopes.'
      },
      {
        step: 3,
        title: 'Fixture Mounting & Seal Integrity',
        desc: 'We mount vanities, toilets, shower valves, and tubs with waterproof commercial sealants and solid anchor supports.'
      },
      {
        step: 4,
        title: 'Flow Calibration & Final Polish',
        desc: 'System is pressure tested, hot water temperature calibrated, and flow rates optimized for maximum luxury & comfort.'
      }
    ],
    faqs: [
      {
        q: 'How long does a full bathroom fitting take?',
        a: 'A single fixture update (faucet, toilet, or vanity) takes 4 to 8 hours. Complete full-bathroom plumbing overhauls typically take 2 to 4 days.'
      },
      {
        q: 'Do you handle custom thermostatic shower valves & body jets?',
        a: 'Optionally yes! We specialize in thermostatic multi-way valve systems, digital controls, rainfall showerheads, and body spray jet loops.'
      },
      {
        q: 'Can you relocate existing plumbing lines in a bathroom?',
        a: 'Yes, we can reroute drain pipes and hot/cold supply lines to match your new architectural floor plan seamlessly.'
      }
    ],
    sidebarTitle: 'Book Bathroom Fitting',
    sidebarDesc: 'Schedule expert plumbers for custom bathroom fixture fitting and layout installation.'
  },

  'water-heater': {
    id: 'water-heater',
    title: 'Water Heater Installation & Repair',
    subtitle: 'Tankless endless hot water systems, traditional electric/gas tank replacements, and energy-efficient maintenance for residential & commercial properties.',
    image: '../assets/images/water-heater-user.png',
    imageAlt: 'Modern Tankless Water Heater Installation',
    overviewHeading: 'Reliable Water Heater Services & Engineering',
    overviewP1: 'Never run out of hot water again! Whether your current water heater is leaking, producing rusty water, making rumbles, or simply failing to meet your family’s needs, FlowFix provides rapid repair and replacement solutions.',
    overviewP2: 'We install top-rated tankless water heaters and energy-efficient storage tank systems from leading manufacturers like Rinnai, Navien, and Rheem. Enjoy up to 40% savings on energy bills with instant, endless hot water installed by master plumbers.',
    highlightsHeading: 'Signs Your Water Heater Needs Repair or Replacement',
    highlightsIcon: 'flame',
    highlights: [
      'Inconsistent or tepid water temperatures during showers',
      'Strange rumbling, popping, or banging noises from inside the tank',
      'Rust-colored or metallic-smelling hot water from tap faucets',
      'Water pooling or moisture around the base of your heater unit',
      'System age exceeding 10–12 years with declining heating efficiency',
      'High monthly electric or gas utility bills due to heavy sediment buildup'
    ],
    processHeading: 'Our 4-Step Water Heater Installation Process',
    processSteps: [
      {
        step: 1,
        title: 'Demand Assessment & Sizing',
        desc: 'We calculate your household peak hot water demand (GPM) to recommend the ideal tank or tankless capacity.'
      },
      {
        step: 2,
        title: 'Safe Draining & Old Unit Removal',
        desc: 'We safely shut off gas/electric supply lines, drain old sediment-filled tanks, and remove old units safely.'
      },
      {
        step: 3,
        title: 'Precision Hookup & Gas/Electric Venting',
        desc: 'We install the new unit with flexible stainless steel connectors, expansion tanks, and code-compliant exhaust venting.'
      },
      {
        step: 4,
        title: 'Temperature Calibration & Leak Check',
        desc: 'We purge air, ignite gas burner/electric elements, set safe output temperatures (120°F), and verify zero leaks.'
      }
    ],
    faqs: [
      {
        q: 'Is a tankless water heater worth the investment?',
        a: 'Yes! Tankless units last 20+ years (vs 10 for tanks), provide endless hot water, take up 80% less space, and lower energy bills by up to 30-40%.'
      },
      {
        q: 'How quickly can you replace a broken water heater?',
        a: 'We offer same-day emergency water heater replacement. Most standard installations take between 3 to 5 hours.'
      },
      {
        q: 'What maintenance does a water heater require?',
        a: 'Traditional tanks should be flushed annually to remove sediment. Tankless systems need annual descaling to prevent mineral buildup on heat exchangers.'
      }
    ],
    sidebarTitle: 'Book Water Heater Service',
    sidebarDesc: 'Schedule licensed master plumbers for tank or tankless water heater installation & repair.'
  },

  'leak-detection': {
    id: 'leak-detection',
    title: 'Leak Detection & Repair',
    subtitle: 'Non-invasive acoustic locator technology and thermal infrared imaging to pinpoint hidden slab, wall, and ceiling leaks accurately without property damage.',
    image: '../assets/images/leak-detection-user.jpg',
    imageAlt: 'Thermal Infrared Leak Detection Inspection',
    overviewHeading: 'Advanced Non-Invasive Leak Detection',
    overviewP1: 'Hidden leaks inside walls, under concrete slabs, or beneath lawns can silently cause thousands of dollars in structural rot, mold infestation, and high utility bills before becoming visibly apparent.',
    overviewP2: 'FlowFix Plumbing uses state-of-the-art acoustic frequency amplifiers, digital moisture meters, and FLIR thermal imaging cameras to pinpoint exact leak locations to within inches—eliminating destructive guesswork and keeping your walls and floors intact.',
    highlightsHeading: 'Warning Signs of Hidden Underground or Wall Leaks',
    highlightsIcon: 'search',
    highlights: [
      'Unexplained, sudden increase in monthly water utility bills',
      'Sound of trickling or rushing water inside walls when no taps are on',
      'Soft, warm, or discolored spots on carpets, hardwood, or tile floors',
      'Unexpected mold growth, damp odor, or bubbling drywall paint',
      'Water meter flow indicator spinning even when all fixtures are turned off',
      'Low water pressure in specific bathrooms or kitchen supply lines'
    ],
    processHeading: 'Our 4-Step Leak Detection Process',
    processSteps: [
      {
        step: 1,
        title: 'System Pressure Drop Testing',
        desc: 'We perform static pressure drop tests on your main water supply to confirm active leakage.'
      },
      {
        step: 2,
        title: 'Acoustic & Thermal Infrared Scan',
        desc: 'Using ultrasonic listening devices and thermal cameras, we trace pipe paths and detect hidden moisture.'
      },
      {
        step: 3,
        title: 'Precision Target Isolation',
        desc: 'We pinpoint the exact location of the leak down to the exact inch without unnecessary wall cuts.'
      },
      {
        step: 4,
        title: 'Micro-Invasive Repair & Verification',
        desc: 'We perform targeted, minimal access repairs and re-test system pressure to confirm 100% seal success.'
      }
    ],
    faqs: [
      {
        q: 'Will leak detection require breaking down my walls or floors?',
        a: 'No! Our non-invasive acoustic and thermal equipment locates leaks through concrete and drywall without any demolition.'
      },
      {
        q: 'How fast can a slab leak damage my property?',
        a: 'Slab leaks can erode soil foundation and cause structural cracking within days. Immediate acoustic detection is critical to preventing major loss.'
      },
      {
        q: 'Does home insurance cover leak detection?',
        a: 'Most homeowner insurance policies cover professional leak detection and structural restoration if the leak was sudden and accidental.'
      }
    ],
    sidebarTitle: 'Book Leak Detection',
    sidebarDesc: 'Schedule non-invasive acoustic & thermal leak detection with upfront flat-rate pricing.'
  },

  'drain-cleaning': {
    id: 'drain-cleaning',
    title: 'Drain & Sewer Cleaning',
    subtitle: 'High-pressure 4,000 PSI hydro-jetting, motorized auger snaking, and video camera sewer line inspections to clear stubborn blockages and root intrusion.',
    image: '../assets/images/drain-cleaning-user.jpg',
    imageAlt: 'Professional Drain Hydro Jetting & Sewer Cleaning',
    overviewHeading: 'Heavy-Duty Drain & Sewer Line Cleaning',
    overviewP1: 'Slow drains, foul sewer odors, gurgling toilets, and stubborn water backups are clear indicators of heavy buildup inside your drainage system. Left untreated, grease, hair, soap scum, and tree roots can completely choke main sewer lines.',
    overviewP2: 'At FlowFix, we utilize 4,000 PSI hydro-jetting technology and HD fiber-optic camera inspection to thoroughly scour pipes clean back to original factory inner diameter, eliminating recurring clogs and restoring maximum flow capacity.',
    highlightsHeading: 'Warning Signs Your Drain Lines Need Cleaning',
    highlightsIcon: 'droplet',
    highlights: [
      'Water draining very slowly in kitchen sinks, bathtubs, or showers',
      'Gurgling or bubbling noises coming from toilets or sink drain pipes',
      'Sewer backup in lower level floor drains or basement shower basins',
      'Unpleasant foul sewer gas smells escaping near drain openings',
      'Frequent, recurring clogs despite using store-bought chemical drain openers',
      'Soggy, overly green patches of lawn above underground main sewer lines'
    ],
    processHeading: 'Our 4-Step Drain Cleaning Process',
    processSteps: [
      {
        step: 1,
        title: 'HD Video Camera Inspection',
        desc: 'We feed a flexible fiber-optic HD camera into your drain line to inspect condition and locate blockage exact depth.'
      },
      {
        step: 2,
        title: 'Motorized Augering / Snake Clearing',
        desc: 'For localized obstructions, we utilize heavy-duty motorized snakes to break up immediate clogs.'
      },
      {
        step: 3,
        title: '4,000 PSI Hydro-Jetting Scour',
        desc: 'High-pressure water nozzles blast away years of grease, mineral scale, sludge, and tree root fibers.'
      },
      {
        step: 4,
        title: 'Post-Clean Camera Verification',
        desc: 'We re-inspect lines with our HD camera to verify pristine pipe walls and provide you with video proof.'
      }
    ],
    faqs: [
      {
        q: 'Is hydro-jetting safe for older plumbing pipes?',
        a: 'Yes! Our technicians adjust pressure levels based on pipe material (PVC, cast iron, copper). Camera inspections ensure pipe integrity before jetting.'
      },
      {
        q: 'How often should main drain lines be cleaned?',
        a: 'Residential main drains should be professionally cleaned every 18–24 months. Commercial kitchens require quarterly or semi-annual maintenance.'
      },
      {
        q: 'Why are chemical drain cleaners bad for my pipes?',
        a: 'Chemical cleaners generate intense heat that can warp PVC, corrode metal joints, and fail to remove tough tree roots while emitting hazardous fumes.'
      }
    ],
    sidebarTitle: 'Book Drain Cleaning',
    sidebarDesc: 'Schedule high-pressure hydro-jetting & camera sewer inspection with master plumbers.'
  },

  'emergency-plumbing': {
    id: 'emergency-plumbing',
    title: '24/7 Emergency Plumbing Services',
    subtitle: 'Rapid 30-minute dispatch for burst pipes, sewage backups, gas line leaks, major water shutoffs, and flooding emergencies day or night.',
    image: '../assets/images/hero-plumber-user.png',
    imageAlt: 'Emergency Plumbing Master Technician On Duty',
    overviewHeading: '24/7 Emergency Plumbing Dispatch',
    overviewP1: 'Plumbing disasters don’t wait for business hours. A burst main pipe at 2 AM or a raw sewage backup during a holiday weekend requires immediate, expert intervention to minimize property destruction and health hazards.',
    overviewP2: 'FlowFix Plumbing maintains fully equipped mobile emergency units on standby 24 hours a day, 365 days a year across the metro area. Our master plumbers arrive within 30 minutes with specialized water extraction, pipe repair, and shutoff equipment.',
    highlightsHeading: 'Emergency Plumbing Situations We Handle Immediately',
    highlightsIcon: 'alert-triangle',
    highlights: [
      'Major burst main water supply pipes & severe indoor flooding',
      'Main line sewer backups spilling into home basements or bathrooms',
      'Gas line leaks, appliance gas connection failures, or sulfur odors',
      'Completely frozen or burst winter water supply pipes',
      'Water heater tank ruptures pouring hot water on flooring',
      'Total loss of water pressure or zero water flow in the building'
    ],
    processHeading: 'Our 4-Step Emergency Response Process',
    processSteps: [
      {
        step: 1,
        title: '24/7 Call Center Dispatch',
        desc: 'Call (800) 555-0147. Our live dispatcher alerts the nearest mobile unit immediately with GPS tracking.'
      },
      {
        step: 2,
        title: 'Remote Shutoff Guidance',
        desc: 'Over the phone, we guide you on how to turn off your main water valve to halt immediate flooding.'
      },
      {
        step: 3,
        title: 'Rapid On-Site Arrival (<30 Mins)',
        desc: 'Technician arrives with fully stocked truck containing heavy-duty pumps, replacement pipes, and soldering gear.'
      },
      {
        step: 4,
        title: 'Containment, Repair, & Sanitization',
        desc: 'Emergency shutoff, fast structural pipe repair or bypass, water extraction, and full area sanitization.'
      }
    ],
    faqs: [
      {
        q: 'Do you charge extra fees for weekend or late-night emergency calls?',
        a: 'We provide transparent upfront flat-rate pricing with no hidden surprise fees. You get the exact quote before any work begins.'
      },
      {
        q: 'What should I do while waiting for the emergency plumber?',
        a: 'First, shut off your main water valve (usually near the water meter). Second, turn off power to affected rooms if water is near electrical outlets.'
      },
      {
        q: 'How fast can a technician arrive at my property?',
        a: 'Our average dispatch response time is under 30 minutes anywhere within our metro service radius.'
      }
    ],
    sidebarTitle: 'Book Emergency Service',
    sidebarDesc: 'Dispatch priority emergency plumbers immediately. Techs en route within 30 minutes.'
  }
};

// Aliases mapping for flexible query matching
const SERVICE_ALIASES = {
  'pipe': 'pipe-repair',
  'pipe-repair': 'pipe-repair',
  'piping': 'pipe-repair',
  'repiping': 'pipe-repair',
  'trenchless': 'pipe-repair',
  'trenchless-sewer': 'pipe-repair',

  'bathroom': 'bathroom-fitting',
  'bathroom-fitting': 'bathroom-fitting',
  'spa': 'bathroom-fitting',
  'spa-plumbing': 'bathroom-fitting',

  'water-heater': 'water-heater',
  'water': 'water-heater',
  'heater': 'water-heater',
  'tankless': 'water-heater',

  'leak': 'leak-detection',
  'leak-detection': 'leak-detection',
  'acoustic': 'leak-detection',

  'drain': 'drain-cleaning',
  'drain-cleaning': 'drain-cleaning',
  'hydro-jetting': 'drain-cleaning',

  'emergency': 'emergency-plumbing',
  'emergency-plumbing': 'emergency-plumbing'
};

document.addEventListener('DOMContentLoaded', () => {
  loadServiceDetails();
});

function loadServiceDetails() {
  const params = new URLSearchParams(window.location.search);
  const rawParam = (params.get('service') || '').toLowerCase().trim();
  
  const serviceKey = SERVICE_ALIASES[rawParam] || 'pipe-repair';
  const data = SERVICES_DATA[serviceKey] || SERVICES_DATA['pipe-repair'];

  // 1. Page & Tab Title
  document.title = `${data.title} - FlowFix Plumbing Services`;

  // 2. Breadcrumb Title
  const breadcrumbEl = document.getElementById('breadcrumb-service-title');
  if (breadcrumbEl) breadcrumbEl.textContent = data.title;

  // 3. Hero Title & Subtitle
  const mainTitleEl = document.getElementById('service-title');
  if (mainTitleEl) mainTitleEl.textContent = data.title;

  const mainSubtitleEl = document.getElementById('service-subtitle');
  if (mainSubtitleEl) mainSubtitleEl.textContent = data.subtitle;

  // 4. Hero Image
  const heroImgEl = document.getElementById('service-hero-image');
  if (heroImgEl) {
    heroImgEl.src = data.image;
    heroImgEl.alt = data.imageAlt || data.title;
  }

  // 5. Detailed Overview
  const overviewHeadingEl = document.getElementById('service-overview-heading');
  if (overviewHeadingEl) overviewHeadingEl.textContent = data.overviewHeading;

  const overviewP1El = document.getElementById('service-overview-p1');
  if (overviewP1El) overviewP1El.textContent = data.overviewP1;

  const overviewP2El = document.getElementById('service-overview-p2');
  if (overviewP2El) overviewP2El.textContent = data.overviewP2;

  // 6. Highlights / Warning Signs Section
  const highlightsHeadingEl = document.getElementById('service-highlights-heading');
  if (highlightsHeadingEl) {
    highlightsHeadingEl.innerHTML = `<i data-lucide="${data.highlightsIcon || 'alert-circle'}" class="w-5 h-5 text-amber-500"></i> ${data.highlightsHeading}`;
  }

  const highlightsListEl = document.getElementById('service-highlights-list');
  if (highlightsListEl && data.highlights) {
    highlightsListEl.innerHTML = data.highlights.map(item => `
      <div class="flex items-start gap-2">
        <i data-lucide="check-circle-2" class="w-4 h-4 text-teal-600 shrink-0 mt-0.5"></i>
        <span>${item}</span>
      </div>
    `).join('');
  }

  // 7. 4-Step Process
  const processHeadingEl = document.getElementById('service-process-heading');
  if (processHeadingEl) processHeadingEl.textContent = data.processHeading;

  const processListEl = document.getElementById('service-process-list');
  if (processListEl && data.processSteps) {
    processListEl.innerHTML = data.processSteps.map(st => `
      <div class="flex items-start gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800">
        <div class="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center shrink-0">${st.step}</div>
        <div>
          <h4 class="text-base font-bold text-slate-900 dark:text-white">${st.title}</h4>
          <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">${st.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // 8. FAQ Accordion
  const faqListEl = document.getElementById('service-faq-list');
  if (faqListEl && data.faqs) {
    faqListEl.innerHTML = data.faqs.map(faq => `
      <div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 overflow-hidden">
        <button type="button" class="accordion-btn w-full p-5 text-left font-bold text-slate-900 dark:text-white flex items-center justify-between focus:outline-none" aria-expanded="false">
          <span>${faq.q}</span>
          <i data-lucide="chevron-down" class="accordion-icon w-5 h-5 transition-transform"></i>
        </button>
        <div class="hidden p-5 pt-0 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/50">
          ${faq.a}
        </div>
      </div>
    `).join('');
  }

  // 9. Sidebar Sticky Booking Box & Header CTAs
  const sidebarTitleEl = document.getElementById('sidebar-service-title');
  if (sidebarTitleEl) sidebarTitleEl.textContent = data.sidebarTitle;

  const sidebarDescEl = document.getElementById('sidebar-service-desc');
  if (sidebarDescEl) sidebarDescEl.textContent = data.sidebarDesc;

  const sidebarBookBtn = document.getElementById('sidebar-book-btn');
  if (sidebarBookBtn) {
    sidebarBookBtn.href = `booking.html?service=${data.id}`;
    sidebarBookBtn.querySelector('span') ? sidebarBookBtn.querySelector('span').textContent = `Schedule ${data.title}` : null;
  }

  const headerBookBtn = document.getElementById('header-book-btn');
  if (headerBookBtn) {
    headerBookBtn.href = `booking.html?service=${data.id}`;
  }

  const mobileBookBtn = document.getElementById('mobile-book-btn');
  if (mobileBookBtn) {
    mobileBookBtn.href = `booking.html?service=${data.id}`;
  }

  // Re-initialize Lucide icons & accordion listeners
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  if (typeof initAccordions === 'function') {
    initAccordions();
  }
}
