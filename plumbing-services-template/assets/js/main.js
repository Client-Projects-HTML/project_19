/**
 * FlowFix Plumbing Services - Core Application JavaScript
 * Handles Theme Toggling, RTL Switching, Mobile Navigation, Accessibility, FAQ Accordion & Lucide Icons.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Theme (Light / Dark)
  initTheme();

  // 2. Initialize Direction (LTR / RTL)
  initDirection();

  // 3. Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 4. Initialize Mobile Menu
  initMobileMenu();

  // 5. Initialize Sticky Header Effects
  initStickyHeader();

  // 6. Initialize FAQ Accordions
  initAccordions();

  // 7. Initialize Desktop & Mobile Dropdown Navs
  initDropdownNav();

  // 8. Initialize Home 2 Interactive Components
  initHome2Widgets();
});

/* ==========================================================================
   Theme Switcher (Dark / Light)
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('flowfix_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('flowfix_theme', isDark ? 'dark' : 'light');
      updateThemeIcons();
    });
  });

  updateThemeIcons();
}

function updateThemeIcons() {
  const isDark = document.documentElement.classList.contains('dark');
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  
  themeToggleBtns.forEach(btn => {
    btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    btn.setAttribute('title', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  });
}

/* ==========================================================================
   Direction Switcher (LTR / RTL)
   ========================================================================== */
function initDirection() {
  const savedDir = localStorage.getItem('flowfix_dir') || 'ltr';
  document.documentElement.dir = savedDir;
  updateRtlToggleLabels(savedDir);

  const rtlToggleBtns = document.querySelectorAll('.rtl-toggle-btn');
  rtlToggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const currentDir = document.documentElement.dir || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      document.documentElement.dir = newDir;
      localStorage.setItem('flowfix_dir', newDir);
      updateRtlToggleLabels(newDir);
    });
  });
}

function updateRtlToggleLabels(dir) {
  const rtlToggleBtns = document.querySelectorAll('.rtl-toggle-btn');
  rtlToggleBtns.forEach(btn => {
    const label = dir === 'rtl' ? 'Switch layout to LTR (Left-to-Right)' : 'Switch layout to RTL (Right-to-Left)';
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
    if (dir === 'rtl') {
      btn.classList.add('bg-teal-50', 'dark:bg-teal-950/50', 'border-teal-400', 'text-teal-600', 'dark:text-teal-400');
    } else {
      btn.classList.remove('bg-teal-50', 'dark:bg-teal-950/50', 'border-teal-400', 'text-teal-600', 'dark:text-teal-400');
    }
  });
}

/* ==========================================================================
   Mobile Drawer Navigation
   ========================================================================== */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close-btn');

  if (!mobileMenuBtn || !mobileMenuDrawer) return;

  function openMenu() {
    mobileMenuDrawer.classList.remove('translate-x-full', '-translate-x-full', 'hidden');
    mobileMenuDrawer.classList.add('translate-x-0');
    if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('overflow-hidden');
  }

  function closeMenu() {
    const isRtl = document.documentElement.dir === 'rtl';
    mobileMenuDrawer.classList.remove('translate-x-0');
    if (isRtl) {
      mobileMenuDrawer.classList.add('-translate-x-full');
    } else {
      mobileMenuDrawer.classList.add('translate-x-full');
    }
    if (mobileMenuOverlay) mobileMenuOverlay.classList.add('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('overflow-hidden');
  }

  mobileMenuBtn.addEventListener('click', () => {
    const expanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    if (expanded) closeMenu();
    else openMenu();
  });

  if (mobileMenuCloseBtn) mobileMenuCloseBtn.addEventListener('click', closeMenu);
  if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenuBtn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });
}

/* ==========================================================================
   Sticky Header Effects
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-md', 'backdrop-blur-md');
    } else {
      header.classList.remove('shadow-md', 'backdrop-blur-md');
    }
  });
}

/* ==========================================================================
   FAQ Accordion Handler
   ========================================================================== */
function initAccordions() {
  const accordionButtons = document.querySelectorAll('.accordion-btn');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector('.accordion-icon');
      const expanded = button.getAttribute('aria-expanded') === 'true';

      // Close other accordion items in same container
      const parent = button.closest('.accordion-group');
      if (parent) {
        parent.querySelectorAll('.accordion-btn').forEach(otherBtn => {
          if (otherBtn !== button) {
            otherBtn.setAttribute('aria-expanded', 'false');
            if (otherBtn.nextElementSibling) {
              otherBtn.nextElementSibling.classList.add('hidden');
            }
            const otherIcon = otherBtn.querySelector('.accordion-icon');
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
          }
        });
      }

      // Toggle current accordion item
      if (expanded) {
        button.setAttribute('aria-expanded', 'false');
        content.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        button.setAttribute('aria-expanded', 'true');
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

/* ==========================================================================
   Header Dropdown Nav & Mobile Accordion Submenu
   ========================================================================== */
function initDropdownNav() {
  // Desktop Dropdown Toggle on Click / Touch
  const dropdownContainers = document.querySelectorAll('.nav-dropdown');

  dropdownContainers.forEach(container => {
    const btn = container.querySelector('.nav-dropdown-btn');
    const menu = container.querySelector('.nav-dropdown-menu');

    if (!btn || !menu) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.contains('is-open');

      // Close all other dropdowns
      document.querySelectorAll('.nav-dropdown-menu').forEach(m => m.classList.remove('is-open'));
      document.querySelectorAll('.nav-dropdown').forEach(c => c.classList.remove('is-open'));
      document.querySelectorAll('.nav-dropdown-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));

      if (!isOpen) {
        menu.classList.add('is-open');
        container.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Close desktop dropdowns on outside click or Escape
  document.addEventListener('click', () => {
    document.querySelectorAll('.nav-dropdown-menu').forEach(m => m.classList.remove('is-open'));
    document.querySelectorAll('.nav-dropdown').forEach(c => c.classList.remove('is-open'));
    document.querySelectorAll('.nav-dropdown-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-dropdown-menu').forEach(m => m.classList.remove('is-open'));
      document.querySelectorAll('.nav-dropdown').forEach(c => c.classList.remove('is-open'));
      document.querySelectorAll('.nav-dropdown-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
    }
  });

  // Mobile Submenu Accordion Handler
  const mobileHomeToggles = document.querySelectorAll('.mobile-home-toggle');
  mobileHomeToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const sub = toggle.nextElementSibling;
      const chevron = toggle.querySelector('.mobile-home-chevron');
      if (!sub) return;

      const isHidden = sub.classList.contains('hidden');
      if (isHidden) {
        sub.classList.remove('hidden');
        if (chevron) chevron.style.transform = 'rotate(180deg)';
        toggle.setAttribute('aria-expanded', 'true');
      } else {
        sub.classList.add('hidden');
        if (chevron) chevron.style.transform = 'rotate(0deg)';
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

/* ==========================================================================
   Home 2 (Premium Edition) Interactive Widgets
   ========================================================================== */
function initHome2Widgets() {
  // 1. Instant VIP Cost & Dispatch Estimator
  const estimatorService = document.getElementById('vip-estimator-service');
  const estimatorProperty = document.getElementById('vip-estimator-property');
  const estimatorUrgency = document.getElementById('vip-estimator-urgency');
  const priceDisplay = document.getElementById('vip-estimated-price');
  const etaDisplay = document.getElementById('vip-estimated-eta');
  const perksDisplay = document.getElementById('vip-perks-list');

  function calculateEstimate() {
    if (!estimatorService || !estimatorProperty || !estimatorUrgency || !priceDisplay) return;

    const basePrices = {
      'leak-detection': 180,
      'luxury-bath': 350,
      'tankless': 450,
      'trenchless': 600,
      'hydro-jetting': 280
    };

    const propMultipliers = {
      'residential': 1.0,
      'estate': 1.35,
      'commercial': 1.6
    };

    const serviceKey = estimatorService.value || 'leak-detection';
    const propKey = estimatorProperty.value || 'residential';
    const urgencyKey = estimatorUrgency.value || 'standard';

    const base = basePrices[serviceKey] || 200;
    const mult = propMultipliers[propKey] || 1.0;
    const urgencyBonus = urgencyKey === 'emergency' ? 75 : 0;

    const minPrice = Math.round((base * mult) + urgencyBonus);
    const maxPrice = Math.round(minPrice * 1.3);

    priceDisplay.textContent = `$${minPrice} - $${maxPrice}`;

    if (etaDisplay) {
      if (urgencyKey === 'emergency') {
        etaDisplay.textContent = '15 - 25 Mins (Priority Dispatch)';
        etaDisplay.className = 'text-xs font-black text-red-600 dark:text-red-400 flex items-center gap-1';
      } else {
        etaDisplay.textContent = 'Same-Day Flexible Slot';
        etaDisplay.className = 'text-xs font-black text-teal-600 dark:text-teal-300 flex items-center gap-1';
      }
    }

    if (perksDisplay) {
      if (propKey === 'commercial' || propKey === 'estate') {
        perksDisplay.innerHTML = `
          <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-500/40 text-xs font-bold">✓ Free Thermal Audit</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/40 text-xs font-bold">★ VIP Priority Tech</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/40 text-xs font-bold">✓ Zero Dispatch Fee</span>
        `;
      } else {
        perksDisplay.innerHTML = `
          <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-500/40 text-xs font-bold">✓ Upfront Fixed Quote</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/40 text-xs font-bold">✓ Lifetime Warranty</span>
        `;
      }
    }
  }

  if (estimatorService) estimatorService.addEventListener('change', calculateEstimate);
  if (estimatorProperty) estimatorProperty.addEventListener('change', calculateEstimate);
  if (estimatorUrgency) estimatorUrgency.addEventListener('change', calculateEstimate);

  // Initial calculation trigger
  calculateEstimate();

  // 2. VIP Membership Pricing Switcher (Monthly vs Annual)
  const billingToggle = document.getElementById('vip-billing-toggle');
  const priceSilver = document.getElementById('price-silver');
  const priceGold = document.getElementById('price-gold');
  const pricePlatinum = document.getElementById('price-platinum');
  const billingCycleLabels = document.querySelectorAll('.billing-cycle-label');

  if (billingToggle) {
    billingToggle.addEventListener('change', () => {
      const isAnnual = billingToggle.checked;
      if (priceSilver) priceSilver.textContent = isAnnual ? '$24' : '$29';
      if (priceGold) priceGold.textContent = isAnnual ? '$49' : '$59';
      if (pricePlatinum) pricePlatinum.textContent = isAnnual ? '$79' : '$99';

      billingCycleLabels.forEach(label => {
        label.textContent = isAnnual ? '/mo (billed annually)' : '/month';
      });
    });
  }

  // 3. Before & After Showcase Tab Switcher
  const showcaseTabs = document.querySelectorAll('.showcase-tab-btn');
  const showcasePanels = document.querySelectorAll('.showcase-panel');

  showcaseTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      showcaseTabs.forEach(t => {
        t.classList.remove('bg-teal-600', 'text-white', 'shadow-lg');
        t.classList.add('bg-slate-200', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
      });
      tab.classList.remove('bg-slate-200', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
      tab.classList.add('bg-teal-600', 'text-white', 'shadow-lg');

      showcasePanels.forEach(panel => {
        if (panel.id === targetId) {
          panel.classList.remove('hidden');
        } else {
          panel.classList.add('hidden');
        }
      });
    });
  });
}

