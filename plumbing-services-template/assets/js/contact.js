/**
 * FlowFix Plumbing Services - Contact Form Validation
 */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateContactForm()) {
      handleContactSubmission(contactForm);
    }
  });

  const inputs = contactForm.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateContactField(input));
    input.addEventListener('input', () => clearContactFieldError(input));
  });
});

function validateContactForm() {
  let isValid = true;
  const fields = ['contact-name', 'contact-email', 'contact-phone', 'contact-subject', 'contact-message'];

  fields.forEach(fieldId => {
    const el = document.getElementById(fieldId);
    if (el && !validateContactField(el)) {
      isValid = false;
    }
  });

  return isValid;
}

function validateContactField(field) {
  const fieldId = field.id;
  const val = field.value.trim();
  let errorMessage = '';

  switch (fieldId) {
    case 'contact-name':
      if (!val) errorMessage = 'Your name is required.';
      break;

    case 'contact-email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!val) errorMessage = 'Email address is required.';
      else if (!emailRegex.test(val)) errorMessage = 'Please enter a valid email address.';
      break;

    case 'contact-phone':
      const phoneRegex = /^[\d\+\-\(\)\s]{7,20}$/;
      if (val && !phoneRegex.test(val)) errorMessage = 'Please enter a valid phone number.';
      break;

    case 'contact-subject':
      if (!val) errorMessage = 'Please select or enter a subject.';
      break;

    case 'contact-message':
      if (!val) errorMessage = 'Message content is required.';
      else if (val.length < 10) errorMessage = 'Please write at least 10 characters.';
      break;
  }

  if (errorMessage) {
    showContactFieldError(field, errorMessage);
    return false;
  } else {
    clearContactFieldError(field);
    return true;
  }
}

function showContactFieldError(field, message) {
  field.classList.add('border-red-500', 'dark:border-red-500', 'bg-red-50', 'dark:bg-red-950/20');
  let errorEl = field.parentElement.querySelector('.error-msg');
  if (!errorEl) {
    errorEl = document.createElement('p');
    errorEl.className = 'error-msg text-xs text-red-600 dark:text-red-400 mt-1 font-medium';
    field.parentElement.appendChild(errorEl);
  }
  errorEl.textContent = message;
}

function clearContactFieldError(field) {
  field.classList.remove('border-red-500', 'dark:border-red-500', 'bg-red-50', 'dark:bg-red-950/20');
  const errorEl = field.parentElement.querySelector('.error-msg');
  if (errorEl) errorEl.remove();
}

function handleContactSubmission(form) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.innerHTML;

  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    Sending Message...
  `;

  setTimeout(() => {
    const successBox = document.getElementById('contact-success-message');
    if (successBox) {
      form.classList.add('hidden');
      successBox.classList.remove('hidden');
    } else {
      alert('Thank you for contacting FlowFix Plumbing. We will respond within 30 minutes!');
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  }, 1000);
}
