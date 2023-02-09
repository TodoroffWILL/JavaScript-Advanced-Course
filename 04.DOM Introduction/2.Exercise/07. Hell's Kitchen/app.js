function solve() {
  document.querySelector('#btnSend').addEventListener('click', onClick);

  function onClick() {
    const inputElement = JSON.parse(
      document.querySelector('#inputs textarea').value
    );
    let avgSalary = 0;
    let totalSalary = 0;
    let currAvgSalary = 0;
    let bestName = '';

    let output = {};

    for (const line of inputElement) {
      let restaurantInfo = line.split(' - ');
      let restaurant = restaurantInfo.shift();
      let workersData = restaurantInfo[0].split(', ');
      for (let worker of workersData) {
        let [name, salary] = worker.split(' ');
        if (!output.hasOwnProperty(restaurant)) {
          output[restaurant] = {};
        }
        if (output.hasOwnProperty(restaurant)) {
          output[restaurant][name] = Number(salary);
        }
      }
    }
    let entries = Object.entries(output);
    for (const entry of entries) {
      // Array [ "PizzaHut", {…} ]
      let key = entry[0];
      let values = Object.values(entry[1]);

      for (let salary of values) {
        console.log(salary);
        totalSalary += salary;
      }
      avgSalary = totalSalary / values.length.toFixed(2);
      if (avgSalary > currAvgSalary) {
        currAvgSalary = avgSalary;
        bestName = key;
        totalSalary = 0;
      }
    }
    let result = Object.entries(output[bestName]).sort((a, b) => b[1] - a[1]);
    console.log(result);
  }
}
