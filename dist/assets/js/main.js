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

  //containers:
  const nameUpdateContainer = document.querySelector('.name-update-container');
  const emailUpdateContainer = document.querySelector(
    '.email-update-container'
  );
  const addressUpdateContainer = document.querySelector(
    '.address-update-container'
  );

  //buttons:
  const nameEditBtn = document.querySelector('.name-edit-btn');
  const nameEditCancelBtn = document.querySelector(
    '.update-information-accordion-cancel-btn'
  );

  const emailEditBtn = document.querySelector('.email-edit-btn');
  const emailCancelBtn = document.querySelector('.email-cancel-btn');

  const addressEditBtn = document.querySelector('.address-edit-btn');
  const addressCancelBtn = document.querySelector('.address-cancel-btn');

  //accordions:
  const nameUpdateAccordion = document.querySelector(
    '.update-information-accordion-name'
  );
  const emailUpdateAccordion = document.querySelector(
    '.update-information-accordion-email'
  );
  const addressUpdateAccordion = document.querySelector(
    '.update-information-accordion-address'
  );

  //name:
  nameEditBtn?.addEventListener('click', () => {
    nameUpdateContainer?.classList.add('hidden');
    nameUpdateAccordion?.classList.remove('hidden');

    emailUpdateContainer?.classList.add('opacity-60');
    addressUpdateContainer?.classList.add('opacity-60');
    emailEditBtn?.setAttribute('disabled', true);
    emailEditBtn?.classList.add('cursor-not-allowed');
    addressEditBtn?.setAttribute('disabled', true);
    addressEditBtn?.classList.add('cursor-not-allowed');
  });

  nameEditCancelBtn?.addEventListener('click', () => {
    nameUpdateContainer?.classList.remove('hidden');
    nameUpdateAccordion?.classList.add('hidden');
    emailUpdateContainer?.classList.remove('opacity-60');
    addressUpdateContainer?.classList.remove('opacity-60');

    emailEditBtn?.removeAttribute('disabled', true);
    emailEditBtn?.classList.remove('cursor-not-allowed');
    addressEditBtn?.removeAttribute('disabled', true);
    addressEditBtn?.classList.remove('cursor-not-allowed');
  });

  //email:
  emailEditBtn?.addEventListener('click', () => {
    emailUpdateContainer?.classList.add('hidden');
    emailUpdateAccordion.classList.remove('hidden');

    nameUpdateContainer?.classList.add('opacity-60');
    addressUpdateContainer?.classList.add('opacity-60');

    nameEditBtn?.setAttribute('disabled', true);
    nameEditBtn?.classList.add('cursor-not-allowed');
    addressEditBtn?.setAttribute('disabled', true);
    addressEditBtn?.classList.add('cursor-not-allowed');
  });

  emailCancelBtn?.addEventListener('click', () => {
    emailUpdateContainer?.classList.remove('hidden');
    emailUpdateAccordion?.classList.add('hidden');

    nameUpdateContainer?.classList.remove('opacity-60');
    addressUpdateContainer?.classList.remove('opacity-60');

    nameEditBtn?.removeAttribute('disabled', true);
    nameEditBtn?.classList.remove('cursor-not-allowed');
    addressEditBtn?.removeAttribute('disabled', true);
    addressEditBtn?.classList.remove('cursor-not-allowed');
  });

  //address:
  addressEditBtn?.addEventListener('click', () => {
    addressUpdateContainer?.classList.add('hidden');
    addressUpdateAccordion?.classList.remove('hidden');

    nameUpdateContainer?.classList.add('opacity-60');
    emailUpdateContainer?.classList.add('opacity-60');

    nameEditBtn?.setAttribute('disabled', true);
    nameEditBtn?.classList.add('cursor-not-allowed');
    emailEditBtn?.setAttribute('disabled', true);
    emailEditBtn?.classList.add('cursor-not-allowed');
  });

  addressCancelBtn?.addEventListener('click', ()=>{
    addressUpdateContainer?.classList.remove('hidden');
    addressUpdateAccordion?.classList.add('hidden');

    nameUpdateContainer?.classList.remove('opacity-60');
    emailUpdateContainer?.classList.remove('opacity-60');

    nameEditBtn?.removeAttribute('disabled', true);
    nameEditBtn?.classList.remove('cursor-not-allowed');
    emailEditBtn?.removeAttribute('disabled', true);
    emailEditBtn?.classList.remove('cursor-not-allowed');
  })
});
