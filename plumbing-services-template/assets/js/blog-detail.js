/**
 * FlowFix Plumbing Services - Dynamic Blog Detail Loader
 * Hydrates blog-detail.html based on ?id= URL parameter.
 */

const BLOG_POSTS = {
  'hidden-leak-detection': {
    id: 'hidden-leak-detection',
    title: 'How to Detect a Hidden Water Leak Before It Destroys Your Home',
    category: 'Leak Detection',
    author: 'Marcus Vance (Senior Diagnostic Specialist)',
    date: 'Dec 18, 2025',
    readTime: '6 min read',
    image: '../assets/images/leak-detection-user.jpg',
    imageAlt: 'Plumber using acoustic leak detector and thermal imaging scanner',
    content: `
      <p class="text-lg font-medium text-slate-800 dark:text-slate-200">
        Water leaks inside walls or beneath concrete slab foundations are among the most insidious problems a property owner can face. Left undetected, even a minor pinhole leak dripping just half a gallon a minute can erode subfloor soil, rot wooden joists, and foster hazardous black mold colonies.
      </p>

      <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-6 mb-3 leading-snug">1. The Municipal Water Meter Test</h2>
      <p>
        The quickest way to verify whether water is leaking anywhere in your plumbing system is by performing a simple municipal water meter test:
      </p>
      <ol class="list-decimal pl-6 space-y-2 text-sm">
        <li>Turn off all water fixtures, faucets, washing machines, and ice makers inside and outside the house.</li>
        <li>Locate your main water meter box (usually near the front curb or basement main line).</li>
        <li>Check the low-flow indicator dial (often a small red or blue triangle/star wheel).</li>
        <li>If the dial is spinning even when all taps are closed, water is actively escaping somewhere in your system.</li>
      </ol>

      <div class="my-4 p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 space-y-3">
        <h3 class="text-base font-bold text-teal-800 dark:text-teal-300 flex items-center gap-2">
          <i data-lucide="info" class="w-5 h-5 text-teal-600"></i> Expert Tip: Hot vs. Cold Line Leaks
        </h3>
        <p class="text-xs text-teal-900 dark:text-teal-200">
          If your floor feels noticeably warm in a specific spot under hardwood or tile, you likely have a hot water slab leak. Shut off your water heater's top inlet valve to temporarily stop hot line pressure while waiting for dispatch.
        </p>
      </div>

      <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-6 mb-3 leading-snug">2. How Acoustic & Thermal Locators Work</h2>
      <p>
        In the past, plumbers had to chop up concrete slabs or break down drywalls just to guess where a leak was originating. Today, master plumbers at FlowFix use ground microphones and thermal infrared cameras to pinpoint water vibration frequencies without breaking a single tile.
      </p>

      <div class="my-6 p-5 sm:p-6 rounded-2xl bg-slate-900 text-white text-center space-y-4 shadow-2xl">
        <h3 class="text-2xl font-bold">Suspect a Hidden Water Leak?</h3>
        <p class="text-xs text-slate-300 max-w-md mx-auto">
          Get a non-invasive acoustic leak diagnostic scan from our certified plumbers. Flat-rate pricing with immediate dispatch.
        </p>
        <div class="flex justify-center flex-wrap gap-3 pt-2">
          <a href="booking.html?service=leak-detection" class="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs">Book Leak Scan</a>
          <a href="tel:8005550147" class="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs">Call (800) 555-0147</a>
        </div>
      </div>
    `
  },

  'prevent-frozen-pipes': {
    id: 'prevent-frozen-pipes',
    title: 'How to Prevent Frozen Pipes During Cold Snaps',
    category: 'Winterization',
    author: 'David Reynolds (Master Plumber)',
    date: 'Oct 12, 2025',
    readTime: '5 min read',
    image: '../assets/images/pipe-repair-user.png',
    imageAlt: 'Master plumber inspecting winter pipe insulation',
    content: `
      <p class="text-lg font-medium text-slate-800 dark:text-slate-200">
        When sub-zero arctic blasts sweep through, uninsulated copper and PEX pipes can freeze in just a few hours. Water expands as it freezes, exerting upwards of 2,000 PSI of internal hydraulic pressure against pipe walls until joints snap open.
      </p>

      <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-6 mb-3 leading-snug">1. Outdoor Hose Bibs & Outdoor Spigots</h2>
      <p>
        Water trapped inside garden hoses connected to outdoor spigots is the number one cause of winter pipe bursts. Follow these 3 steps before the first freeze:
      </p>
      <ol class="list-decimal pl-6 space-y-2 text-sm">
        <li>Disconnect all garden hoses, drain them thoroughly, and store them indoors.</li>
        <li>Shut off the interior shutoff valve supplying the outdoor hose bibs.</li>
        <li>Open the outside spigot to drain remaining standing water, then install insulated foam faucet covers.</li>
      </ol>

      <div class="my-4 p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 space-y-3">
        <h3 class="text-base font-bold text-blue-800 dark:text-blue-300 flex items-center gap-2">
          <i data-lucide="snowflake" class="w-5 h-5 text-blue-600"></i> Pro Winter Tip: The Faucet Trickle
        </h3>
        <p class="text-xs text-blue-900 dark:text-blue-200">
          On extremely cold nights (below 20°F), leave a slow trickle of cold water running from faucets served by exposed exterior wall pipes. Moving water resists freezing even in harsh conditions.
        </p>
      </div>

      <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-6 mb-3 leading-snug">2. Insulating Attic & Crawlspace Pipes</h2>
      <p>
        Pipes running through unheated spaces such as basements, attics, garages, or crawlspaces should be fitted with tubular foam insulation sleeves or self-regulating electric heat trace cables.
      </p>

      <div class="my-6 p-5 sm:p-6 rounded-2xl bg-slate-900 text-white text-center space-y-4 shadow-2xl">
        <h3 class="text-2xl font-bold">Facing a Frozen Pipe Emergency?</h3>
        <p class="text-xs text-slate-300 max-w-md mx-auto">
          Our 24/7 mobile units carry specialized pipe thawing machines and burst pipe replacement kits.
        </p>
        <div class="flex justify-center flex-wrap gap-3 pt-2">
          <a href="booking.html?service=pipe-repair" class="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs">Schedule Winterization</a>
          <a href="tel:8005550147" class="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs">Call Emergency Plumber</a>
        </div>
      </div>
    `
  },

  'water-heater-repair-signs': {
    id: 'water-heater-repair-signs',
    title: 'Signs Your Water Heater Needs Repair or Replacement',
    category: 'Water Heaters',
    author: 'Sarah Jenkins (Equipment Specialist)',
    date: 'Nov 04, 2025',
    readTime: '7 min read',
    image: '../assets/images/water-heater-user.png',
    imageAlt: 'Modern water heater installation and maintenance',
    content: `
      <p class="text-lg font-medium text-slate-800 dark:text-slate-200">
        Your water heater works quietly behind the scenes every single day. However, standard tank water heaters have a typical lifespan of 8 to 12 years. Knowing the warning signs of impending tank failure can save you thousands in water damage.
      </p>

      <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-6 mb-3 leading-snug">1. Rumbling & Popping Noises</h2>
      <p>
        As water heaters age, dissolved hard water minerals solidify into a thick crust of sediment at the bottom of the tank. As the heating element warms the water trapped under this crust, steam bubbles pop violently, causing loud rumbling noises.
      </p>

      <div class="my-4 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-3">
        <h3 class="text-base font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2">
          <i data-lucide="flame" class="w-5 h-5 text-amber-600"></i> Warning: Rusty Hot Water
        </h3>
        <p class="text-xs text-amber-900 dark:text-amber-200">
          If red or brownish water comes ONLY from your hot tap (while cold water runs crystal clear), your water heater’s inner steel liner or sacrificial anode rod is actively corroding.
        </p>
      </div>

      <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-6 mb-3 leading-snug">2. Tankless vs. Tank Replacement</h2>
      <p>
        If your unit is older than 10 years and experiencing leaks, upgrading to a continuous tankless water heater offers up to 40% energy savings, takes up 80% less wall space, and provides endless hot water on demand.
      </p>

      <div class="my-6 p-5 sm:p-6 rounded-2xl bg-slate-900 text-white text-center space-y-4 shadow-2xl">
        <h3 class="text-2xl font-bold">Upgrade to Endless Hot Water Today</h3>
        <p class="text-xs text-slate-300 max-w-md mx-auto">
          Same-day water heater replacement with upfront pricing and lifetime workmanship warranty.
        </p>
        <div class="flex justify-center flex-wrap gap-3 pt-2">
          <a href="booking.html?service=water-heater" class="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs">Book Water Heater Quote</a>
          <a href="tel:8005550147" class="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs">Call (800) 555-0147</a>
        </div>
      </div>
    `
  },

  'emergency-plumber-guide': {
    id: 'emergency-plumber-guide',
    title: 'When to Call an Emergency Plumber Immediately',
    category: 'Emergency Plumbing',
    author: 'Marcus Vance (Senior Diagnostic Specialist)',
    date: 'Jan 08, 2026',
    readTime: '4 min read',
    image: '../assets/images/hero-plumber-user.png',
    imageAlt: 'Emergency Plumbing Response Technician',
    content: `
      <p class="text-lg font-medium text-slate-800 dark:text-slate-200">
        Not all plumbing issues require middle-of-the-night emergency rates. A slow-draining sink can wait until morning, but a burst main supply line pouring water into your electrical panel demands 30-minute rapid dispatch.
      </p>

      <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-6 mb-3 leading-snug">The 4 True Plumbing Emergencies</h2>
      <ul class="list-disc pl-6 space-y-3 text-sm">
        <li><strong>Main Line Pipe Burst:</strong> High-pressure water escaping into walls, basements, or subflooring causing structural collapse risk.</li>
        <li><strong>Sewer Line Backup:</strong> Raw sewage backing up through basement floor drains or shower basins, creating biohazard health risks.</li>
        <li><strong>Gas Line Leaks:</strong> Natural gas or propane connection failures emitting rotten-egg sulfur odors near water heaters or stoves.</li>
        <li><strong>Ruptured Water Heater Tank:</strong> Water heater tank bottom failing completely and discharging 50+ gallons onto living area flooring.</li>
      </ul>

      <div class="my-4 p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 space-y-3">
        <h3 class="text-base font-bold text-red-800 dark:text-red-300 flex items-center gap-2">
          <i data-lucide="alert-triangle" class="w-5 h-5 text-red-600"></i> What to Do While Waiting for Plumber
        </h3>
        <p class="text-xs text-red-900 dark:text-red-200">
          Immediately locate your main water shutoff valve (usually in the basement near the front foundation wall or at the outdoor water meter box) and turn the lever clockwise 90 degrees to cut off water flow.
        </p>
      </div>

      <div class="my-6 p-5 sm:p-6 rounded-2xl bg-red-900 text-white text-center space-y-4 shadow-2xl">
        <h3 class="text-2xl font-bold">24/7 Immediate Emergency Dispatch</h3>
        <p class="text-xs text-red-100 max-w-md mx-auto">
          Licensed master plumbers dispatching within 30 minutes across the metro area. Zero hidden fees.
        </p>
        <div class="flex justify-center flex-wrap gap-3 pt-2">
          <a href="tel:8005550147" class="px-8 py-3 rounded-xl bg-white text-red-950 font-black text-xs hover:bg-slate-100">Call Dispatch Now (800) 555-0147</a>
        </div>
      </div>
    `
  },

  'drain-maintenance-tips': {
    id: 'drain-maintenance-tips',
    title: 'Simple Drain Maintenance Tips Every Homeowner Should Know',
    category: 'Drain Maintenance',
    author: 'David Reynolds (Master Plumber)',
    date: 'Jan 20, 2026',
    readTime: '5 min read',
    image: '../assets/images/drain-cleaning-user.jpg',
    imageAlt: 'Drain cleaning and hydro jetting equipment',
    content: `
      <p class="text-lg font-medium text-slate-800 dark:text-slate-200">
        Preventative drain maintenance is the single most effective way to prevent costly main sewer backups, foul odors, and bathtub standing water.
      </p>

      <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-6 mb-3 leading-snug">1. Stop Chemical Drain Cleaners</h2>
      <p>
        Store-bought chemical drain openers rely on harsh sodium hydroxide or sulfuric acid. These chemicals generate intense heat inside your pipes that warps PVC joints, corrodes copper, and turns grease into a rock-hard soap plug.
      </p>

      <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-6 mb-3 leading-snug">2. The Monthly Baking Soda & Vinegar Flush</h2>
      <p>
        Keep your kitchen and bathroom drains fresh naturally:
      </p>
      <ol class="list-decimal pl-6 space-y-2 text-sm">
        <li>Pour 1/2 cup of baking soda directly down the drain opening.</li>
        <li>Follow with 1 cup of warm white vinegar and plug the drain for 15 minutes.</li>
        <li>Flush with 1 gallon of boiling water to wash away dissolved organic film.</li>
      </ol>

      <div class="my-6 p-5 sm:p-6 rounded-2xl bg-slate-900 text-white text-center space-y-4 shadow-2xl">
        <h3 class="text-2xl font-bold">Stubborn Clog or Slow Drain?</h3>
        <p class="text-xs text-slate-300 max-w-md mx-auto">
          Our 4,000 PSI hydro-jetting strips grease and root intrusion clean back to factory inner diameter.
        </p>
        <div class="flex justify-center flex-wrap gap-3 pt-2">
          <a href="booking.html?service=drain-cleaning" class="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs">Book Hydro-Jetting</a>
          <a href="tel:8005550147" class="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs">Call (800) 555-0147</a>
        </div>
      </div>
    `
  }
};

const BLOG_ALIASES = {
  'hidden-leak-detection': 'hidden-leak-detection',
  'leak-detection': 'hidden-leak-detection',
  'leak': 'hidden-leak-detection',

  'prevent-frozen-pipes': 'prevent-frozen-pipes',
  'frozen-pipes': 'prevent-frozen-pipes',
  'winter': 'prevent-frozen-pipes',

  'water-heater-repair-signs': 'water-heater-repair-signs',
  'water-heater': 'water-heater-repair-signs',

  'emergency-plumber-guide': 'emergency-plumber-guide',
  'emergency': 'emergency-plumber-guide',

  'drain-maintenance-tips': 'drain-maintenance-tips',
  'drain': 'drain-maintenance-tips'
};

document.addEventListener('DOMContentLoaded', () => {
  loadBlogDetails();
});

function loadBlogDetails() {
  const params = new URLSearchParams(window.location.search);
  const rawId = (params.get('id') || params.get('post') || '').toLowerCase().trim();

  const blogKey = BLOG_ALIASES[rawId] || 'hidden-leak-detection';
  const post = BLOG_POSTS[blogKey] || BLOG_POSTS['hidden-leak-detection'];

  // 1. Tab title
  document.title = `${post.title} - FlowFix Plumbing Blog`;

  // 2. Breadcrumb
  const breadcrumbEl = document.getElementById('blog-breadcrumb-title');
  if (breadcrumbEl) breadcrumbEl.textContent = post.title;

  // 3. Category Tag
  const categoryEl = document.getElementById('blog-category-tag');
  if (categoryEl) categoryEl.textContent = post.category;

  // 4. Main H1 Title
  const titleEl = document.getElementById('blog-main-title');
  if (titleEl) titleEl.textContent = post.title;

  // 5. Author, Date, Read Time Meta
  const metaEl = document.getElementById('blog-meta-info');
  if (metaEl) {
    metaEl.innerHTML = `
      <span>By <strong>${post.author}</strong></span>
      <span>•</span>
      <span>${post.date}</span>
      <span>•</span>
      <span>${post.readTime}</span>
    `;
  }

  // 6. Main Content Area (Image & Paragraphs)
  const contentEl = document.getElementById('blog-content-body');
  if (contentEl) {
    contentEl.innerHTML = `
      <img src="${post.image}" alt="${post.imageAlt || post.title}" class="w-full h-[320px] sm:h-[420px] md:h-[500px] object-cover object-top rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg mb-6">
      ${post.content}
    `;
  }

  // Re-run Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}
