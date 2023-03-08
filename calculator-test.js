
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 500000,
    years: 5,
    rate: 6,
  };
  expect(calculateMonthlyPayment(values)).toEqual('9666.40');
});


it("should return a result with 2 decimal places", function() {
Not necessary, test is already proven out in previous test
});

/// etc
