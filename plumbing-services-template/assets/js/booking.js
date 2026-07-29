/**
 * FlowFix Plumbing Services - Booking Form Validation & Interactive Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  const bookingForm = document.getElementById('booking-form');
  if (!bookingForm) return;

  // Auto-select service based on URL parameter (e.g. ?service=pipe-repair)
  autoSelectServiceFromURL();

  // Set min date to today for Preferred Date input
  const dateInput = document.getElementById('preferred-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  // Handle Form Submission
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateBookingForm()) {
      handleSuccessfulSubmission(bookingForm);
    }
  });

  // Real-time input validation on blur/input
  const inputs = bookingForm.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => clearFieldError(input));
  });
});

/**
 * Auto Select Service from URL query string
 */
function autoSelectServiceFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const serviceParam = urlParams.get('service');
  const serviceSelect = document.getElementById('service-type');

  if (serviceParam && serviceSelect) {
    for (let i = 0; i < serviceSelect.options.length; i++) {
      if (serviceSelect.options[i].value.toLowerCase() === serviceParam.toLowerCase()) {
        serviceSelect.selectedIndex = i;
        break;
      }
    }
  }
}

/**
 * Validates entire Booking Form
 */
function validateBookingForm() {
  let isValid = true;
  const fields = [
    'full-name',
    'phone-number',
    'email-address',
    'service-type',
    'property-type',
    'preferred-date',
    'preferred-time',
    'street-address',
    'city-name',
    'problem-description'
  ];

  fields.forEach(fieldId => {
    const el = document.getElementById(fieldId);
    if (el && !validateField(el)) {
      isValid = false;
    }
  });

  return isValid;
}

/**
 * Validates individual form field
 */
function validateField(field) {
  const fieldId = field.id;
  const val = field.value.trim();
  let errorMessage = '';

  switch (fieldId) {
    case 'full-name':
      if (!val) errorMessage = 'Full name is required.';
      else if (val.length < 2) errorMessage = 'Please enter at least 2 characters.';
      break;

    case 'phone-number':
      const phoneRegex = /^[\d\+\-\(\)\s]{7,20}$/;
      if (!val) errorMessage = 'Phone number is required for booking confirmation.';
      else if (!phoneRegex.test(val)) errorMessage = 'Please enter a valid phone number (e.g. (800) 555-0147).';
      break;

    case 'email-address':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!val) errorMessage = 'Email address is required.';
      else if (!emailRegex.test(val)) errorMessage = 'Please enter a valid email address.';
      break;

    case 'service-type':
      if (!val || val === '') errorMessage = 'Please select a plumbing service.';
      break;

    case 'property-type':
      if (!val || val === '') errorMessage = 'Please select your property type.';
      break;

    case 'preferred-date':
      if (!val) errorMessage = 'Please select your preferred date.';
      break;

    case 'preferred-time':
      if (!val || val === '') errorMessage = 'Please select a preferred arrival window.';
      break;

    case 'street-address':
      if (!val) errorMessage = 'Street address is required.';
      break;

    case 'city-name':
      if (!val) errorMessage = 'City name is required.';
      break;

    case 'problem-description':
      if (!val) errorMessage = 'Please briefly describe the plumbing issue.';
      else if (val.length < 10) errorMessage = 'Please provide a bit more detail (at least 10 characters).';
      break;
  }

  if (errorMessage) {
    showFieldError(field, errorMessage);
    return false;
  } else {
    clearFieldError(field);
    return true;
  }
}

function showFieldError(field, message) {
  field.classList.add('border-red-500', 'dark:border-red-500', 'bg-red-50', 'dark:bg-red-950/20');
  field.classList.remove('border-slate-300', 'dark:border-slate-700', 'border-emerald-500');

  let errorEl = field.parentElement.querySelector('.error-msg');
  if (!errorEl) {
    errorEl = document.createElement('p');
    errorEl.className = 'error-msg text-xs text-red-600 dark:text-red-400 mt-1 font-medium';
    field.parentElement.appendChild(errorEl);
  }
  errorEl.textContent = message;
}

function clearFieldError(field) {
  field.classList.remove('border-red-500', 'dark:border-red-500', 'bg-red-50', 'dark:bg-red-950/20');
  field.classList.add('border-slate-300', 'dark:border-slate-700');

  const errorEl = field.parentElement.querySelector('.error-msg');
  if (errorEl) {
    errorEl.remove();
  }
}

/**
 * Handles Form Submission Animation & Success Message
 */
function handleSuccessfulSubmission(form) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.innerHTML;

  // Show Loading Spinner
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    Processing Booking...
  `;

  setTimeout(() => {
    // Generate Random Confirmation Code
    const refCode = 'FX-' + Math.floor(10000 + Math.random() * 90000);
    
    // Hide form & show success banner
    const successContainer = document.getElementById('booking-success-message');
    if (successContainer) {
      document.getElementById('booking-ref-code').textContent = refCode;
      form.classList.add('hidden');
      successContainer.classList.remove('hidden');
      successContainer.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert(`Service request submitted successfully! Your Reference Code: ${refCode}`);
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  }, 1200);
}
