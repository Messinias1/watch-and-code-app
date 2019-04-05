// store dog Names
var dogs = ['Caleb', 'Heidi', 'Napoleon', 'Snowbie'];


// function to display dog names
function displayDogs() {
    console.log('My Dogs:', dogs);
}
// function to add new dog names
function addDogName(dog) {
    dogs.push(dog);
    displayDogs();
}
// function to change a dog name
function changeDogName(position, newValue) {
    dogs[position] = newValue;
    displayDogs();
}
// function to delete a dog name
function deleteDogName(position) {
    dogs.splice(position, 1);
    displayDogs();
}