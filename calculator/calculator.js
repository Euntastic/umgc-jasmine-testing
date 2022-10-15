window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    loanAmount: +(document.getElementById("loan-amount").value),
    loanYears: +(document.getElementById("loan-years").value),
    loanRate: +(document.getElementById("loan-rate").value), // Always a percentage
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const defaultValues  = { loanAmount: 50000, loanYears: 10, loanRate: 8 };

  const amountElement = document.getElementById("loan-amount");
  amountElement.value = defaultValues.loanAmount;

  const yearsElement = document.getElementById("loan-years");
  yearsElement.value = defaultValues.loanYears;

  const rateElement = document.getElementById("loan-rate");
  rateElement.value = defaultValues.loanRate;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const loanValues = getCurrentUIValues();
  const monthlyPayment = calculateMonthlyPayment(loanValues);

  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
// Formula :
//           monthly payment = (P x i) / (1 - (1 + i)⁻ⁿ)
// P = Amount of Principle
// i = Periodic Interest Rate (in our case, yearly rate / 12)
// n = Total number of payments (years x 12)
function calculateMonthlyPayment(values) {
  const principleAmount = values.loanAmount;
  const monthlyInterestRate = (values.loanRate * 0.01) / 12;
  const totalPayments = values.loanYears * 12;

  const numerator = principleAmount * monthlyInterestRate;
  const denominator = 1 - Math.pow((1 + monthlyInterestRate), -(totalPayments))

  return (numerator / denominator).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentSpan = document.getElementById('monthly-payment');
  monthlyPaymentSpan.innerText = `\$${monthly}`;
}
