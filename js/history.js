// donate butotn
getElementByID("donation-btn").addEventListener("click", function () {
  const cardSection = getElementByID("card-section");

  const historySection = getElementByID("history");

  cardSection.classList.remove("hidden");

  historySection.classList.add("hidden");
  getElementByID("donation-btn").classList.add("bg-[#B4F461]");
  getElementByID("history-btn").classList.remove("bg-[#B4F461]");
});

// history button
getElementByID("history-btn").addEventListener("click", function () {
  historyElement();

  getElementByID("donation-btn").classList.remove("bg-[#B4F461]");
  getElementByID("history-btn").classList.add("bg-[#B4F461]");

  const cardSection = getElementByID("card-section");

  const historySection = getElementByID("history");

  cardSection.classList.add("hidden");
  historySection.classList.remove("hidden");
});

function historyElement(amount = 0, location = "") {
  const card = document.createElement("div");

  const historySection = getElementByID("history");

  const now = new Date();
  const formattedDate = now.toLocaleString();
  //   console.log(formattedDate);

  if (amount == 0 && location == "") {
    return;
  }

  card.innerHTML = `
    
    <div class="card card-border bg-base-100 w-96">
  <div class="card-body">
    <h2 class="card-title">${amount} taka is Donated for ${location} </h2>
    <p>${formattedDate} </p>

  </div>
</div>
    `;

  historySection.appendChild(card);
}
