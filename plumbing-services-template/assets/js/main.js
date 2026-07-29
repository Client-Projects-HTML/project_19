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
