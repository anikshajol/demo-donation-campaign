// donate for noakhali

getElementByID("noakhali-donate-btn").addEventListener("click", function () {
  const amountOfDonation = getInputValueById("noakhali-donate-input");

  console.log(amountOfDonation);

  //   donate amount

  const donationOfNoakhali = getInnerTextById("donate-amount-noakhali");

  // user balance

  const userBalance = getInnerTextById("my-balance");

  if (amountOfDonation > userBalance || isNaN(amountOfDonation)) {
    const modal = document.getElementById("my_modal_2");
    modal.showModal();
    return;
  } else {
    const totalDonationForNoakhali = amountOfDonation + donationOfNoakhali;

    document.getElementById("donate-amount-noakhali").innerText =
      totalDonationForNoakhali;

    // my balance

    const totalBalanceOfUser = userBalance - amountOfDonation;

    //   validation
    getElementByID("my-balance").innerText = totalBalanceOfUser;
  }

  historyElement(amountOfDonation, "Noakhali");
});

// donate for feni

getElementByID("feni-donate-btn").addEventListener("click", function () {
  // input amount
  const inputAmountOfFeni = getInputValueById("feni-input");
  // console.log(inputAmountOfFeni);

  // total amount of donate for feni
  const donateAmountForFeni = getInnerTextById("donate-amount-feni");
  // console.log(donateAmountForFeni);
  // userBalance
  const userBalance = getInnerTextById("my-balance");
  // console.log(userBalance);

  // validation

  if (isNaN(inputAmountOfFeni) || inputAmountOfFeni > userBalance) {
    const modal = document.getElementById("my_modal_2");
    modal.showModal();
    return;
  } else {
    const totalDonationOfFeni = inputAmountOfFeni + donateAmountForFeni;

    const mainBalance = userBalance - inputAmountOfFeni;
    getElementByID("donate-amount-feni").innerText = totalDonationOfFeni;
    getElementByID("my-balance").innerText = mainBalance;
  }

  historyElement(inputAmountOfFeni, "Feni");
});

// quota movement input

getElementByID("quota-donate-btn").addEventListener("click", function () {
  // userBalance

  const totalBalanceOfUser = getInnerTextById("my-balance");

  // get input value

  const quotaDonateInput = getInputValueById("quota-donate-input");

  // get totalDonatedAmount

  const donatedAmount = getInnerTextById("donate-amount-quota");

  if (isNaN(quotaDonateInput) || quotaDonateInput > totalBalanceOfUser) {
    const modal = getElementByID("my_modal_2");
    modal.showModal();

    return;
  } else {
    const totalDonatedAmount = quotaDonateInput + donatedAmount;

    if (totalDonatedAmount) {
      getElementByID("my_modal_3").showModal();
    }

    getElementByID("donate-amount-quota").innerText = totalDonatedAmount;
    // total balance

    const userBalance = totalBalanceOfUser - quotaDonateInput;

    getElementByID("my-balance").innerText = userBalance;

    // history

    historyElement(quotaDonateInput, "quota movement");
  }
});

// blog

getElementByID("blog").addEventListener("click", function () {
  window.location.href = "../blog.html";
});
