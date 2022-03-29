var currency = [
  { name: 'ONE HUNDRED', value: 100 },
  { name: 'TWENTY', value: 20 },
  { name: 'TEN', value: 10 },
  { name: 'FIVE', value: 5 },
  { name: 'ONE', value: 1 },
  { name: 'QUARTER', value: 0.25 },
  { name: 'DIME', value: 0.1 },
  { name: 'NICKEL', value: 0.05 },
  { name: 'PENNY', value: 0.01 },
];

function checkCashRegister(price, cash, cid) {
  let output = { status: null, change: [] };
  let change = cash - price;

  let register = cid.reduce(
    function (acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

  if (register.total === change) {
    output.status = 'CLOSED';
    output.change = cid;
    return output;
  }

  if (register.total < change) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }
  var change_arr = currency.reduce(function (acc, curr) {
    var value = 0;
    while (register[curr.name] > 0 && change >= curr.value) {
      change -= curr.value;
      register[curr.name] -= curr.value;
      value += curr.value;
      change = Math.round(change * 100) / 100;
    }
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc;
  }, []);

  if (change_arr.length < 1 || change > 0) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }

  output.status = 'OPEN';
  output.change = change_arr;

  return output;
}
