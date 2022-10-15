describe('Tests for the calculateMonthlyPayment() function.', function () {
  const testValues = { loanAmount: 50000, loanYears: 10, loanRate: 8 };

  it('The function should calculate the monthly payments correctly.', function () {
    expect(calculateMonthlyPayment(testValues)).toBe('606.64');
  });

  it("The function should return a result with 2 decimal places", function () {
    let testString = calculateMonthlyPayment(testValues);
    testString = testString.substring(testString.indexOf('.') + 1);
    expect(testString.length).toBe(2);
  });
});


