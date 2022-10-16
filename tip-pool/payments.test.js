describe("Payments.js test.", () => {
    
    const testSummaryTable = document.querySelector('#summaryTable tbody tr');

    beforeEach(() => {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });

    describe("The updateSummary() function.", () => {
        it('Should create a table row element with the appropriate calculations', () => {
            submitPaymentInfo();

            expect(summaryTds[0].innerHTML).toBe('$100');
            expect(summaryTds[1].innerHTML).toBe('$20');
            expect(summaryTds[2].innerHTML).toBe('20%');
        });

    });

    describe("The appendPaymentTable() function.", () => {
        it('Should update the table #tablePayment tbody with appropriate information.', () => {
            submitPaymentInfo();
            const testPaymentTable = document.querySelectorAll('#paymentTable tbody tr td');

            expect(testPaymentTable[0].innerText).toBe("$100");
            expect(testPaymentTable[1].innerText).toBe("$20");
            expect(testPaymentTable[2].innerText).toBe("20%");
        });


    });

    describe("The createCurPayment() function.", () => {
        it('Should create an object containing values with the appropriate input.', () => {
            expect(createCurPayment()).toEqual({ billAmt: '100', tipAmt: '20', tipPercent: 20 });
        });

        it('Should return undefined if the input is missing.', () => {
            billAmtInput.value = '';
            tipAmtInput.value = '';
            expect(createCurPayment()).toEqual(undefined);
        });
    })

    describe("The submitPaymentInfo() function.", () => {
        it('Should not add anything to the #tablePayment if input is empty.', () => {
            billAmtInput.value = '';
            tipAmtInput.value = '';
            submitPaymentInfo();
            expect(paymentTbody.innerText).toBe('');
        });
    })

    afterEach(() => {
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = "";
        testSummaryTable.innerHTML = '';
    });
});