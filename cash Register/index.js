 //the info for the currency
 const currencyUnit = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
 }


function checkCashRegister(price, cash, cid) {
 
 //the change to return 
 //it is multiplied by 100 so that i get only integers no decimal  numbers
let changeSum = cash * 100 - price * 100;

//saving a copy so that if can freely modify it
let changeSumCheck = changeSum;

//change and status are empty array and string
let change = [];
let status = ""

//sum of all money in the register
let cidSum = 0;


// this will return an array of cid without any 0 values of notes and reversing it so that i can subtract from the highest denomination
let filteredCid = cid.filter((elem) => elem[1]  !== 0 ).reverse();

filteredCid.forEach(elem => {
  let curr = elem[0];
  let currSum = elem[1] * 100;
  cidSum += currSum;

  let amount = 0;
  while(changeSum >= currencyUnit[curr] && currSum > 0){
    amount += currencyUnit[curr];
    changeSum -= currencyUnit[curr];
    currSum -= currencyUnit[curr]
  }

  if(amount !== 0){
    change.push([curr, amount / 100])
  }
})

if(changeSum > 0){
  status = 'INSUFFICIENT_FUNDS';
  change = []
}else if(changeSum === 0 && changeSumCheck == cidSum){
  status = 'CLOSED';
  change = cid;
}else {
  status = 'OPEN'
}

return {'status': status, 'change': change}


}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);