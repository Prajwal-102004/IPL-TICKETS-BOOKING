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


document.addEventListener("DOMContentLoaded", function() {

    let menuBtn = document.getElementById("menuBtn");
    let navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function() {

            navLinks.classList.toggle("active");

            showToast("Navigation menu toggled!");

        });

    }

    let teamFilter = document.getElementById("teamFilter");
    let matchCards = document.querySelectorAll(".match-card");

    if (teamFilter) {

        teamFilter.addEventListener("change", function() {

            let selectedTeam = teamFilter.value;

            matchCards.forEach(function(card) {

                let teams = card.getAttribute("data-teams");

                if (selectedTeam === "all" ||
                    teams.split(" ").includes(selectedTeam)) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

            showToast("Match filter updated!");

        });

    }

    let matchContainer = document.getElementById("matchContainer");

    let gridBtn = document.getElementById("gridBtn");
    let listBtn = document.getElementById("listBtn");

    if (matchContainer && gridBtn && listBtn) {

        gridBtn.addEventListener("click", function() {

            matchContainer.classList.remove("match-list");
            matchContainer.classList.add("match-grid");

            showToast("Grid view selected!");

        });

        listBtn.addEventListener("click", function() {

            matchContainer.classList.remove("match-grid");
            matchContainer.classList.add("match-list");

            showToast("List view selected!");

        });

    }

    let viewButton = document.getElementById("viewMatchBtn");

    if (viewButton) {

        viewButton.addEventListener("click", function() {

            let match = document.getElementById("match").value;

            if (match === "") {
                showToast("Please select a match!");
            } else {
                document.getElementById("result").innerHTML =
                    "You selected: " + match;

                showToast("Match selected successfully!");
            }

        });

    }

    if (window.location.hash === "#bookingHeading") {

        let heading = document.getElementById("bookingHeading");

        if (heading) {

            heading.scrollIntoView({
                behavior: "smooth"
            });

            showToast("Welcome to IPL Ticket Booking!");

        }

    }

    let bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function(event) {

            event.preventDefault();

            let name = document.getElementById("username").value;
            let emailElement = document.getElementById("email");
            let email = emailElement ? emailElement.value : "";
            let mobile = document.getElementById("mobile").value;
            let match = document.getElementById("bookingMatch").value;
            let count = Number(document.getElementById("count").value);
            let price = Number(document.getElementById("type").value);

            let total = count * price;

            document.getElementById("confirmation").innerHTML =
                "<h3>Booking Successful!</h3>" +
                "Name: " + name + "<br>" +
                (email ? "Email: " + email + "<br>" : "") +
                "Mobile: " + mobile + "<br>" +
                "Match: " + match + "<br>" +
                "Tickets: " + count + "<br>" +
                "Total Amount: ₹" + total +
                "<br><b>Demo only - No actual tickets reserved.</b>";

            showToast("Booking submitted successfully!");

        });



        bookingForm.addEventListener("reset", function() {

            let confirmation = document.getElementById("confirmation");

            if (confirmation) {
                confirmation.innerHTML = "";
            }

            showToast("Form has been reset!");

        });

        let matchSelect = document.getElementById("bookingMatch");
        let standSelect = document.getElementById("type");
        let quantityInput = document.getElementById("count");

        function updateBookingSummary() {

            let match = matchSelect.value;
            let stand = standSelect.value;
            let quantity = Number(quantityInput.value);

            let price = Number(stand);
            let total = price * quantity;

            let standName =
                standSelect.options[standSelect.selectedIndex].text;

            let summaryMatch = document.getElementById("summaryMatch");
            let summaryStand = document.getElementById("summaryStand");
            let summaryQuantity = document.getElementById("summaryQuantity");
            let summaryTotal = document.getElementById("summaryTotal");

            if (summaryMatch) {
                summaryMatch.innerText = match || "Not selected";
            }

            if (summaryStand) {
                summaryStand.innerText = stand ? standName : "Not selected";
            }

            if (summaryQuantity) {
                summaryQuantity.innerText = quantity || 0;
            }

            if (summaryTotal) {
                summaryTotal.innerText = total || 0;
            }

            showToast("Booking summary updated!");

        }


        if (matchSelect && standSelect && quantityInput) {

            matchSelect.addEventListener("change", updateBookingSummary);
            standSelect.addEventListener("change", updateBookingSummary);
            quantityInput.addEventListener("change", updateBookingSummary);

        }

    }

});
