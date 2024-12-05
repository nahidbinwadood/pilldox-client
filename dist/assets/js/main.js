$(document).ready(function () {

    // hideButton:
    const hidePasswordButton = document.querySelector('.hidePass')
    const showPasswordButton = document.querySelector('.showPass')
    const passwordInput = document.querySelector('.passwordInput')
    if (hidePasswordButton && showPasswordButton) {
        hidePasswordButton?.addEventListener('click', () => {
            showPasswordButton?.classList.remove('hidden')
            hidePasswordButton?.classList.add('hidden')
            passwordInput?.setAttribute('type', 'text')
        })
        showPasswordButton?.addEventListener('click', () => {
            hidePasswordButton?.classList.remove('hidden')
            showPasswordButton?.classList.add('hidden')
            passwordInput?.setAttribute('type', 'password')
        })
    }


    //image upload:
    const prevImg = document.querySelector('.upload-img-prev')
    const uploadImgInput = document.getElementById('upload-image')

    uploadImgInput?.addEventListener('change', () => {
        if (uploadImgInput.files.length) {
            const image = uploadImgInput.files[0];
            prevImg.src = URL.createObjectURL(image);
            console.log('change');
        }
    })


    //navbarDropDown:

    const navbarDropDownBtn = document.querySelector('.navbar-dropdown-btn');
    const navbarDropDown = document.querySelector('.navbar-dropdown');
    
    // Toggle the dropdown visibility when the button is clicked
    navbarDropDownBtn?.addEventListener('click', (e) => {
        // Prevent click event from propagating to the document event listener
        e.stopPropagation();
        
        // Toggle the dropdown visibility with animations
        if (navbarDropDown.classList.contains("opacity-0")) {
            navbarDropDown?.classList.remove("opacity-0", "-z-10", "translate-y-7");
            navbarDropDown?.classList.add("opacity-100", "z-10", "translate-y-5");
        } else {
            navbarDropDown?.classList.remove("opacity-100", "z-10", "translate-y-5");
            navbarDropDown?.classList.add("opacity-0", "-z-10", "translate-y-7");
        }
    });
    
    // Close the dropdown if clicked outside of it
    document.addEventListener('click', (e) => {
        if (!navbarDropDown.contains(e.target) && !navbarDropDownBtn.contains(e.target)) {
            navbarDropDown?.classList.remove("opacity-100", "z-10", "translate-y-5");
            navbarDropDown?.classList.add("opacity-0", "-z-10", "translate-y-7");
        }
    });
    


    //nice select:
    $(".hero-banner-select").niceSelect();
    $(".accordion-body-address").niceSelect();

});