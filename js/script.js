const eventDate = new Date("March 30, 2026 10:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

}, 1000);

// Search Event Function
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const filter = searchInput.value.toLowerCase();
        const events = document.querySelectorAll(".event-card");

        events.forEach(function (event) {
            const text = event.textContent.toLowerCase();
            event.style.display = text.includes(filter) ? "block" : "none";
        });
    });
}