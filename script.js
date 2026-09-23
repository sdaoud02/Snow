/* =====================================================
   SNOWVALE REMOVAL CO.
   WEBSITE JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");


if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        const isOpen =
            navMenu.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    /* Close menu after clicking a link */

    const navLinks =
        navMenu.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}



/* ================= QUOTE FORM ================= */

const quoteForm =
    document.getElementById("quoteForm");

const formSuccess =
    document.getElementById("formSuccess");


if (quoteForm) {

    quoteForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value;

            const phone =
                document.getElementById("phone").value;

            const email =
                document.getElementById("email").value;

            const service =
                document.getElementById("service").value;

            const details =
                document.getElementById("details").value;


            const subject =
                encodeURIComponent(
                    "Snowvale Removal Co. - Quote Request"
                );


            const body =
                encodeURIComponent(

                    "Hello Snowvale Removal Co.,\n\n" +

                    "I would like to request a snow removal quote.\n\n" +

                    "Name: " + name + "\n" +

                    "Phone: " + phone + "\n" +

                    "Email: " + email + "\n\n" +

                    "Service needed: " + service + "\n\n" +

                    "Property details:\n" +
                    details +

                    "\n\nThank you."

                );


            window.location.href =
                "mailto:sarahdaoud66@gmail.com" +
                "?subject=" +
                subject +
                "&body=" +
                body;


            if (formSuccess) {

                formSuccess.style.display =
                    "block";

            }

        }

    );

}



/* ================= CURRENT YEAR ================= */

const currentYear =
    new Date().getFullYear();

const footerYear =
    document.querySelector(".footer-bottom span");


if (footerYear) {

    footerYear.innerHTML =
        "© " +
        currentYear +
        " Snowvale Removal Co. All Rights Reserved.";

}