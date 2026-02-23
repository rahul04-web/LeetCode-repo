//A person saves his monthly saving acccording to given schema . He saves same
//amount of money which is equal to the money saved in immediate previous
//two month . Assume , initialy he saves 1000 ruppess and in first month he
//save another 1000 , your task is to tell how much he had totally saved at
//the end of the n th month

function solve(n) {
  let saving = 1000;
  let m1 = 1000;
  let amount = 0;
  for (let i = 1; i <= n; i++) {
    amount += m1 * i;
  }
  saving += amount;
  console.log(saving);
}
solve(3);
