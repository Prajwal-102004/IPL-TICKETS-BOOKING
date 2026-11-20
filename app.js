
// Reusable Toast Notification Function

let toastTimer;

function showToast(message) {

    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        toast.className = "toast";
        document.body.appendChild(toast);
    }

    toast.innerText = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(function() {
        toast.classList.remove("show");
    }, 3000);
}


// Run after the HTML page loads

document.addEventListener("DOMContentLoaded", function() {

    // View Match Button

    let viewButton = document.getElementById("viewMatchBtn");

    if (viewButton) {

        viewButton.addEventListener("click", function() {

            let match = document.getElementById("match").value;

            if (match == "") {
                showToast("Please select a match!");
            } else {
                document.getElementById("result").innerHTML =
                    "You selected: " + match;

                showToast("Match selected successfully!");
            }

        });
    }


    // Book Tickets - Smooth Scrolling

    if (window.location.hash == "#bookingHeading") {

        let heading = document.getElementById("bookingHeading");

        if (heading) {
            heading.scrollIntoView({
                behavior: "smooth"
            });

            showToast("Welcome to IPL Ticket Booking!");
        }
    }


    // Booking Form Submission

    let bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function(event) {

            event.preventDefault();

            let name = document.getElementById("username").value;
            let email = document.getElementById("email").value;
            let mobile = document.getElementById("mobile").value;
            let match = document.getElementById("bookingMatch").value;
            let count = Number(document.getElementById("count").value);
            let price = Number(document.getElementById("type").value);

            let total = count * price;

            document.getElementById("confirmation").innerHTML =
                "<h3>Booking Successful!</h3>" +
                "Name: " + name + "<br>" +
                "Email: " + email + "<br>" +
                "Mobile: " + mobile + "<br>" +
                "Match: " + match + "<br>" +
                "Tickets: " + count + "<br>" +
                "Total Amount: ₹" + total +
                "<br><b>Demo only - No actual tickets reserved.</b>";

            showToast("Booking submitted successfully!");

        });

        // Reset Button

        bookingForm.addEventListener("reset", function() {
            document.getElementById("confirmation").innerHTML = "";
            showToast("Form has been reset!");
        });

    }

});
    