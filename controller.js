function addNewBicycle() {
  let newBicycle = {
    id: 2,
    typeOfbicycle: "road",
    isRented: true,
  };

  model.data.push(newBicycle);
  updateView();
}

function rentMe(index) {
  model.data[index].isRented = true;
  updateView();
}
