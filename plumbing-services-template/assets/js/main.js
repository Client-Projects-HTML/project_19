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

  // 9. Initialize Global Toast System
  initToastSystem();

  // 10. Initialize Newsletter Forms
  initNewsletterForms();

  // 11. Initialize Floating CTAs & Back-To-Top Button
  initFloatingControls();

  // 12. Initialize Blog Category Filters
  initBlogCategoryFilters();

  // 13. Initialize Social Share & Clipboard Buttons
  initSocialShareButtons();

  // 14. Initialize Global Blog Card Clickability
  initBlogCardClickability();
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

/* ==========================================================================
   Global Toast Notification Utility
   ========================================================================== */
function initToastSystem() {
  if (document.getElementById('flowfix-toast-container')) return;
  const container = document.createElement('div');
  container.id = 'flowfix-toast-container';
  container.className = 'fixed bottom-6 right-6 z-[100] flex flex-col space-y-3 pointer-events-none max-w-sm w-full px-4';
  document.body.appendChild(container);
}

window.showToast = function(message, type = 'success') {
  let container = document.getElementById('flowfix-toast-container');
  if (!container) {
    initToastSystem();
    container = document.getElementById('flowfix-toast-container');
  }

  const toast = document.createElement('div');
  const bgClasses = type === 'success' 
    ? 'bg-slate-900 dark:bg-slate-800 text-white border-teal-500' 
    : 'bg-red-900 text-white border-red-500';
  
  const iconMarkup = type === 'success' 
    ? `<div class="w-7 h-7 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0">✓</div>` 
    : `<div class="w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-xs shrink-0">!</div>`;

  toast.className = `pointer-events-auto flex items-center gap-3 p-4 rounded-xl border-l-4 shadow-2xl transition-all duration-300 transform translate-y-8 opacity-0 ${bgClasses}`;
  toast.innerHTML = `
    ${iconMarkup}
    <p class="text-xs font-semibold leading-relaxed flex-1">${message}</p>
    <button type="button" class="text-slate-400 hover:text-white p-1 text-xs" onclick="this.parentElement.remove()">✕</button>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-8', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  // Auto disappear
  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 4500);
};

/* ==========================================================================
   Newsletter Signup Button & Form Handlers
   ========================================================================== */
function initNewsletterForms() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    // Check if form contains an email input or newsletter button
    const emailInput = form.querySelector('input[type="email"]');
    const isNewsletter = form.classList.contains('newsletter-form') || (emailInput && !form.id.includes('contact') && !form.id.includes('booking'));

    if (isNewsletter) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]') || form.querySelector('button');
        const emailVal = emailInput ? emailInput.value.trim() : '';

        if (emailInput && !emailVal.includes('@')) {
          window.showToast('Please enter a valid email address.', 'error');
          return;
        }

        const originalText = submitBtn ? submitBtn.innerHTML : 'Subscribe';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = `<span>Subscribing...</span>`;
        }

        setTimeout(() => {
          if (emailInput) emailInput.value = '';
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
          }
          window.showToast('Thank you for subscribing! Check your inbox for plumbing tips & exclusive discounts.');
        }, 800);
      });
    }
  });
}

/* ==========================================================================
   Floating Quick Call & Smooth Back-To-Top Button
   ========================================================================== */
function initFloatingControls() {
  if (document.getElementById('back-to-top-btn')) return;

  const btn = document.createElement('button');
  btn.id = 'back-to-top-btn';
  btn.setAttribute('aria-label', 'Scroll to top');
  btn.className = 'fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 p-2.5 sm:p-3 rounded-full bg-slate-900/90 dark:bg-slate-800/90 text-white border border-slate-700 shadow-xl opacity-0 pointer-events-none transition-all duration-300 hover:bg-teal-600 dark:hover:bg-teal-600 focus:outline-none';
  btn.innerHTML = `<svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>`;
  
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.remove('opacity-0', 'pointer-events-none');
      btn.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      btn.classList.remove('opacity-100', 'pointer-events-auto');
      btn.classList.add('opacity-0', 'pointer-events-none');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   Blog Category Filter Buttons
   ========================================================================== */
function initBlogCategoryFilters() {
  const filterBtns = document.querySelectorAll('.blog-filter-btn');
  const blogCards = document.querySelectorAll('article.card-hover');

  if (!filterBtns.length || !blogCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');

      // Update button styling
      filterBtns.forEach(b => {
        b.classList.remove('bg-teal-600', 'text-white', 'shadow-md');
        b.classList.add('bg-slate-200', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
      });
      btn.classList.remove('bg-slate-200', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
      btn.classList.add('bg-teal-600', 'text-white', 'shadow-md');

      // Filter articles
      blogCards.forEach(card => {
        const cardCategoryAttr = card.getAttribute('data-category') || '';
        const cardCategoryText = card.querySelector('span')?.textContent || '';
        const combinedCategory = `${cardCategoryAttr} ${cardCategoryText}`.toLowerCase();
        
        if (category === 'all' || combinedCategory.includes(category.toLowerCase())) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   Social Share & Copy Link Buttons
   ========================================================================== */
function initSocialShareButtons() {
  const shareBtns = document.querySelectorAll('.share-btn');
  shareBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const platform = btn.getAttribute('data-platform');
      const currentUrl = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(document.title);

      if (platform === 'copy' || btn.classList.contains('copy-btn')) {
        navigator.clipboard.writeText(window.location.href).then(() => {
          window.showToast('Article link copied to clipboard!');
        }).catch(() => {
          window.showToast('Article link copied!');
        });
      } else if (platform === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`, '_blank', 'width=600,height=400');
      } else if (platform === 'twitter') {
        window.open(`https://twitter.com/intent/tweet?url=${currentUrl}&text=${title}`, '_blank', 'width=600,height=400');
      } else if (platform === 'linkedin') {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`, '_blank', 'width=600,height=400');
      }
    });
  });
}

/* ==========================================================================
   Global Blog Card Clickability Handler
   ========================================================================== */
function initBlogCardClickability() {
  document.addEventListener('click', (e) => {
    const card = e.target.closest('article.card-hover');
    if (!card) return;

    // If the click was directly on an interactive button or direct anchor tag, let browser handle it
    if (e.target.closest('button, input, select, textarea')) return;
    if (e.target.tagName.toLowerCase() === 'a' && e.target.href) return;

    // Find any blog detail link within the card
    const blogLink = card.querySelector('a[href*="blog-detail.html"]');
  });
}

/* ==========================================================================
   Interactive Service Area ZIP Code Checker
   ========================================================================== */
window.checkServiceZipCode = function() {
  const input = document.getElementById('map-zip-input');
  const resultEl = document.getElementById('map-zip-result');
  if (!input) return;

  const zip = input.value.trim();
  if (!zip) {
    if (resultEl) {
      resultEl.innerHTML = `<span class="text-amber-500 font-bold">Please enter a 5-digit ZIP code.</span>`;
    }
    return;
  }

  // Simulate active dispatch check
  const randomVans = Math.floor(Math.random() * 4) + 3;
  const responseMinutes = Math.floor(Math.random() * 15) + 20;

  if (resultEl) {
    resultEl.innerHTML = `<span class="text-emerald-500 font-bold">✓ ZIP ${zip} Covered! ${randomVans} plumbing units active (${responseMinutes}-min dispatch).</span>`;
  }

  if (window.showToast) {
    window.showToast(`ZIP Code ${zip} verified! ${randomVans} technicians active in your area.`, 'success');
  }
};

