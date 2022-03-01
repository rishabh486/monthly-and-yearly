const axios = require("axios");

axios(
  "https://gist.githubusercontent.com/rishabh486/fe086eabe5e7735f30d2557ccfb35013/raw/72986deba09330810dd469e4f53df6f6901d8f88/data.json"
)
  .then((data) => calculateSum(data.data.cost))
  .catch((err) => console.log(err));

function calculateSum(cost) {
  const cost_ = Object.keys(cost);
  var sum = 0;
  for (let i = 1; i <= cost_.length; i++) {
    for (let j = 1; j <= 12; j++) {
      sum =
        sum +
        cost[`year${i}`][`month${j}`]["0"] +
        cost[`year${i}`][`month${j}`]["1"] +
        cost[`year${i}`][`month${j}`]["2"] +
        cost[`year${i}`][`month${j}`]["3"];
    }
  }
  console.log(sum);
}
