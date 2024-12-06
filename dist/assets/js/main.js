$(document).ready(function () {
  //nice select:
  $('.hero-banner-select').niceSelect();
  $('.accordion-body-address').niceSelect();

  // hideButton:
  const hidePasswordButton = document.querySelector('.hidePass');
  const showPasswordButton = document.querySelector('.showPass');
  const passwordInput = document.querySelector('.passwordInput');
  if (hidePasswordButton && showPasswordButton) {
    hidePasswordButton?.addEventListener('click', () => {
      showPasswordButton?.classList.remove('hidden');
      hidePasswordButton?.classList.add('hidden');
      passwordInput?.setAttribute('type', 'text');
    });
    showPasswordButton?.addEventListener('click', () => {
      hidePasswordButton?.classList.remove('hidden');
      showPasswordButton?.classList.add('hidden');
      passwordInput?.setAttribute('type', 'password');
    });
  }

  //image upload:
  const prevImg = document.querySelector('.upload-img-prev');
  const uploadImgInput = document.getElementById('upload-image');

  uploadImgInput?.addEventListener('change', () => {
    if (uploadImgInput.files.length) {
      const image = uploadImgInput.files[0];
      prevImg.src = URL.createObjectURL(image);
      console.log('change');
    }
  });

  //navbarDropDown:

  const navbarDropDownBtn = document.querySelector('.navbar-dropdown-btn');
  const navbarDropDown = document.querySelector('.navbar-dropdown');

  // Toggle the dropdown visibility when the button is clicked
  navbarDropDownBtn?.addEventListener('click', (e) => {
    // Prevent click event from propagating to the document event listener
    e.stopPropagation();

    // Toggle the dropdown visibility with animations
    if (navbarDropDown.classList.contains('opacity-0')) {
      navbarDropDown?.classList.remove('opacity-0', '-z-10', 'translate-y-7');
      navbarDropDown?.classList.add('opacity-100', 'z-10', 'translate-y-5');
    } else {
      navbarDropDown?.classList.remove('opacity-100', 'z-10', 'translate-y-5');
      navbarDropDown?.classList.add('opacity-0', '-z-10', 'translate-y-7');
    }
  });

  // Close the dropdown if clicked outside of it
  document.addEventListener('click', (e) => {
    if (
      !navbarDropDown.contains(e.target) &&
      !navbarDropDownBtn.contains(e.target)
    ) {
      navbarDropDown?.classList.remove('opacity-100', 'z-10', 'translate-y-5');
      navbarDropDown?.classList.add('opacity-0', '-z-10', 'translate-y-7');
    }
  });

  //update profile page:
  // Containers:
  const nameUpdateContainer = document.querySelector('.name-update-container');
  const emailUpdateContainer = document.querySelector(
    '.email-update-container'
  );
  const addressUpdateContainer = document.querySelector(
    '.address-update-container'
  );

  // Buttons:
  const nameEditBtn = document.querySelector('.name-edit-btn');
  const nameEditCancelBtn = document.querySelector(
    '.update-information-accordion-cancel-btn'
  );

  const emailEditBtn = document.querySelector('.email-edit-btn');
  const emailCancelBtn = document.querySelector('.email-cancel-btn');

  const addressEditBtn = document.querySelector('.address-edit-btn');
  const addressCancelBtn = document.querySelector('.address-cancel-btn');

  // Accordions:
  const nameUpdateAccordion = document.querySelector(
    '.update-information-accordion-name'
  );
  const emailUpdateAccordion = document.querySelector(
    '.update-information-accordion-email'
  );
  const addressUpdateAccordion = document.querySelector(
    '.update-information-accordion-address'
  );

  // Name Edit Action:
  nameEditBtn?.addEventListener('click', () => {
    nameUpdateContainer?.classList.add('hidden');
    nameUpdateAccordion?.classList.remove('hidden');

    // Disable email and address options
    emailUpdateContainer?.classList.add('opacity-60');
    addressUpdateContainer?.classList.add('opacity-60');
    emailEditBtn?.setAttribute('disabled', true);
    emailEditBtn?.classList.add('cursor-not-allowed');
    addressEditBtn?.setAttribute('disabled', true);
    addressEditBtn?.classList.add('cursor-not-allowed');
  });

  // Name Edit Cancel Action:
  nameEditCancelBtn?.addEventListener('click', () => {
    nameUpdateContainer?.classList.remove('hidden');
    nameUpdateAccordion?.classList.add('hidden');

    // Re-enable email and address options
    emailUpdateContainer?.classList.remove('opacity-60');
    addressUpdateContainer?.classList.remove('opacity-60');
    emailEditBtn?.removeAttribute('disabled');
    emailEditBtn?.classList.remove('cursor-not-allowed');
    addressEditBtn?.removeAttribute('disabled');
    addressEditBtn?.classList.remove('cursor-not-allowed');
  });

  // Email Edit Action:
  emailEditBtn?.addEventListener('click', () => {
    emailUpdateContainer?.classList.add('hidden');
    emailUpdateAccordion?.classList.remove('hidden');

    // Disable name and address options
    nameUpdateContainer?.classList.add('opacity-60');
    addressUpdateContainer?.classList.add('opacity-60');
    nameEditBtn?.setAttribute('disabled', true);
    nameEditBtn?.classList.add('cursor-not-allowed');
    addressEditBtn?.setAttribute('disabled', true);
    addressEditBtn?.classList.add('cursor-not-allowed');
  });

  // Email Edit Cancel Action:
  emailCancelBtn?.addEventListener('click', () => {
    emailUpdateContainer?.classList.remove('hidden');
    emailUpdateAccordion?.classList.add('hidden');

    // Re-enable name and address options
    nameUpdateContainer?.classList.remove('opacity-60');
    addressUpdateContainer?.classList.remove('opacity-60');
    nameEditBtn?.removeAttribute('disabled');
    nameEditBtn?.classList.remove('cursor-not-allowed');
    addressEditBtn?.removeAttribute('disabled');
    addressEditBtn?.classList.remove('cursor-not-allowed');
  });

  // Address Edit Action:
  addressEditBtn?.addEventListener('click', () => {
    addressUpdateContainer?.classList.add('hidden');
    addressUpdateAccordion?.classList.remove('hidden');

    // Disable name and email options
    nameUpdateContainer?.classList.add('opacity-60');
    emailUpdateContainer?.classList.add('opacity-60');
    nameEditBtn?.setAttribute('disabled', true);
    nameEditBtn?.classList.add('cursor-not-allowed');
    emailEditBtn?.setAttribute('disabled', true);
    emailEditBtn?.classList.add('cursor-not-allowed');
  });

  // Address Edit Cancel Action:
  addressCancelBtn?.addEventListener('click', () => {
    addressUpdateContainer?.classList.remove('hidden');
    addressUpdateAccordion?.classList.add('hidden');

    // Re-enable name and email options
    nameUpdateContainer?.classList.remove('opacity-60');
    emailUpdateContainer?.classList.remove('opacity-60');
    nameEditBtn?.removeAttribute('disabled');
    nameEditBtn?.classList.remove('cursor-not-allowed');
    emailEditBtn?.removeAttribute('disabled');
    emailEditBtn?.classList.remove('cursor-not-allowed');
  });

  //modal on personal information update:
  const addIntroBtn = document.querySelector(
    '.update-information-add-intro-btn'
  );
  const aboutYouModal = document.getElementById('about-you-modal');
  const aboutYouModalContainer = document.getElementById(
    'about-you-modal-container'
  );
  const aboutYouModalOverlay = document.getElementById(
    'about-you-modal-overlay'
  );

  addIntroBtn?.addEventListener('click', () => {
    if (aboutYouModal && aboutYouModalOverlay) {
      showUpdateIntroModal();
    } else {
      hideUpdateIntroModal();
    }
  });

  // Close modal when clicking outside
  document.addEventListener('click', (e) => {
    if (
      aboutYouModalContainer.contains(e.target) &&
      !aboutYouModal.contains(e.target)
    ) {
      hideUpdateIntroModal();
    }
  });

  function hideUpdateIntroModal() {
    // Add fade-out and scale-down transitions
    aboutYouModal.classList.add('opacity-0', 'scale-95');
    aboutYouModalContainer.classList.add('opacity-0');
    aboutYouModalOverlay.classList.add('opacity-0');

    // Use setTimeout to allow transition to complete before adding hidden class

    aboutYouModalOverlay.classList.add('hidden');
    aboutYouModalContainer.classList.remove('flex');
    aboutYouModalContainer.classList.add('hidden');
    aboutYouModal.classList.add('hidden');
  }

  function showUpdateIntroModal() {
    // Remove hidden classes first
    aboutYouModalOverlay.classList.remove('hidden');
    aboutYouModalContainer.classList.remove('hidden');
    aboutYouModal.classList.remove('hidden');

    // Trigger reflow to ensure transition works
    void aboutYouModalContainer.offsetWidth;

    // Add flex and transitions
    aboutYouModalContainer.classList.add('flex');

    // Add fade-in and scale-up transitions
    aboutYouModalOverlay.classList.remove('opacity-0');
    aboutYouModalContainer.classList.remove('opacity-0');
    aboutYouModal.classList.remove('opacity-0', 'scale-95');
  }
});
