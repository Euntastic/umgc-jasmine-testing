describe("Helpers.js Testing", () => {

    beforeEach(() => {
        allPayments = {
            'payment1': {
                billAmt: 100,
                tipAmt: 20,
                tipPercent: 20,
            },
            'payment2': {
                billAmt: 500,
                tipAmt: 75,
                tipPercent: 15,
            },
            'payment3': {
                billAmt: 275,
                tipAmt: 80,
                tipPercent: 29,
            },
        }
    });

    describe("The sumPaymentTotal() function.", () => {

        // billAmt, tipAmt, tipPercent.
        it("Should correctly calculate the billAmt total.", () => {
            expect(sumPaymentTotal('billAmt')).toBe(875);
        });
        it("Should correctly calculate the tipAmt total.", () => {
            expect(sumPaymentTotal('tipAmt')).toBe(175);
        });
        // The output of the next test is technically incorrect,
        // since it isn't the tip average, but we'll leave this here.
        it("Should correctly calculate the tipPercent total.", () => {
            expect(sumPaymentTotal('tipPercent')).toBe(64);
        });
    });

    describe("The calculateTipPercent() function.", () => {
        it("Should correctly calculate the tip percentage.", () => {
            expect(calculateTipPercent(
                allPayments['payment1'].billAmt,
                allPayments['payment1'].tipAmt)).toBe(20);
        });
        it("Should correctly calculate the tip percentage.", () => {
            expect(calculateTipPercent(
                allPayments['payment2'].billAmt,
                allPayments['payment2'].tipAmt)).toBe(15);
        });
        it("Should correctly calculate the tip percentage.", () => {
            expect(calculateTipPercent(
                allPayments['payment3'].billAmt,
                allPayments['payment3'].tipAmt)).toBe(29);
        });
    });

    describe("The appendTd() function.", () => {
        it("Should create and append the appropriate value to the table row element", () => {
            const testTableRow = document.createElement('tr');
            const testValue = 'Hello';

            appendTd(testTableRow, testValue);
    
            expect(testTableRow.children.length).toBe(1);
            expect(testTableRow.children[0].tagName).toBe('TD');
            expect(testTableRow.children[0].innerText).toBe('Hello');
        });
    });

    afterEach(() => {
        allPayments = {};
    });
});