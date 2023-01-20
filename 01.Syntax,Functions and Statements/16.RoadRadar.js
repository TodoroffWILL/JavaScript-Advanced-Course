function roadRadar(speed, area) {
  let limit = 0;
  switch (area) {
    case "motorway":
      limit = 130;
      break;
    case "interstate":
      limit = 90;
      break;
    case "city":
      limit = 50;
      break;
    case "residential":
      limit = 20;
      break;
  }
  const speeding = speed - limit;
  if (speeding <= 0) {
    return `Driving ${speed} km/h in a ${limit} zone`;
  }

  let status = "";
  if (speeding <= 20) {
    status = "speeding";
  } else if (speeding > 20 && speeding <= 40) {
    status = "excessive speeding";
  } else {
    status = "reckless driving";
  }

  return `The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`;
}
roadRadar(40, "city");
// Driving 40 km/h in a 50 zone
roadRadar(21, "residential");
// The speed is 1 km/h faster than the allowed speed of 20 - speeding

// 2ND BETTER SOLUTION
// function radar (speed, typeOfZone) {
//     let zones={'residential':20,'city':50,'interstate':90,'motorway':130};
//     let differences;
//     let status;
//    if (speed<=zones[typeOfZone]) {
//     console.log(`Driving ${speed} km/h in a ${zones[typeOfZone]} zone`);
//    } else {
//     differences = speed - zones[typeOfZone];
//     status='reckless driving';
//     if (differences<=20) {
//         status='speeding';
//     } else {
//         if (differences<=40) {
//             status='excessive speeding';
//         }
//     }
//     console.log(`The speed is ${differences} km/h faster than the allowed speed of ${zones[typeOfZone]} - ${status}`)
//     }
// }