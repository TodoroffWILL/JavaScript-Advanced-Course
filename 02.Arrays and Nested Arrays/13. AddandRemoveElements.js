function addRemove(arr) {
  const newArr = [];
  let counter = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "add") {
      newArr.push(counter++);
    } else if (arr[i] === "remove") {
      newArr.pop(counter++);
    }
  }
  if (!newArr.length) {
    console.log("Empty");
  } else {
    console.log(newArr.join("\n"));
  }
}
addRemove(["add", "add", "add", "add"]);
