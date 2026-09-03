console.log("Lahari's Crumb & Co. website loaded successfully!");


// =========================
// MENU CATEGORY FILTER
// =========================

const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active to clicked button
        button.classList.add("active");

        // Get selected category
        const category = button.dataset.category;

        // Show / hide menu items
        menuCards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});


// =========================
// CUSTOM ORDER FORM
// =========================

const customOrderForm =
    document.getElementById("customOrderForm");

if (customOrderForm) {

    customOrderForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "✅ Your custom order information has been saved successfully!"
        );

        customOrderForm.reset();

    });

}


// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "✅ Your information has been saved successfully! We will contact you soon."
        );

        contactForm.reset();

    });

}


// =========================
// REVIEW FORM
// =========================

const reviewForm =
    document.getElementById("reviewForm");

if (reviewForm) {

    reviewForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "⭐ Thank you for your review! Your feedback has been saved successfully."
        );

        reviewForm.reset();

    });

}