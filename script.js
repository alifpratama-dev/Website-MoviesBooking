document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const selectedSeatInput = document.getElementById("selectedSeat");
  const totalSeatEl = document.getElementById("totalSeat");
  const availableSeatEl = document.getElementById("availableSeat");
  const reservedSeatEl = document.getElementById("reservedSeat");
  const occupiedSeatEl = document.getElementById("occupiedSeat");
  const reserveBtn = document.getElementById("reserveBtn");
  const todayInput = document.getElementById("today");
  const allSeats = container.querySelectorAll(".row .seat");

  // Auto set today date
  todayInput.valueAsDate = new Date();

  function updateSummary() {
    const occupied = container.querySelectorAll(".seat.occupied").length;
    const reserved = container.querySelectorAll(".seat.selected").length;

    totalSeatEl.innerText = allSeats.length;
    occupiedSeatEl.innerText = occupied;
    reservedSeatEl.innerText = reserved;
    availableSeatEl.innerText = allSeats.length - occupied - reserved;
  }

  container.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("seat") &&
      !e.target.classList.contains("occupied")
    ) {
      e.target.classList.toggle("selected");

      const seatIndex = [...allSeats].indexOf(e.target);
      selectedSeatInput.value = "Seat #" + (seatIndex + 1);

      updateSummary();
    }
  });

  reserveBtn.addEventListener("click", () => {
    const selectedSeats = container.querySelectorAll(".seat.selected");

    if (selectedSeats.length === 0) {
      alert("Please select a seat first!");
      return;
    }

    selectedSeats.forEach((seat) => {
      seat.classList.remove("selected");
      seat.classList.add("occupied");
    });

    selectedSeatInput.value = "";
    updateSummary();

    alert("Reservation successful!");
  });

  updateSummary();
});