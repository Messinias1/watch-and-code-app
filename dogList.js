// // store dog Names
// var dogs = ['Caleb', 'Heidi', 'Napoleon', 'Snowbie'];


// // function to display dog names
// function displayDogs() {
//     console.log('My Dogs:', dogs);
// }
// // function to add new dog names
// function addDogName(dog) {
//     dogs.push(dog);
//     displayDogs();
// }
// // function to change a dog name
// function changeDogName(position, newValue) {
//     dogs[position] = newValue;
//     displayDogs();
// }
// // function to delete a dog name
// function deleteDogName(position) {
//     dogs.splice(position, 1);
//     displayDogs();
// }

// store dogNames on an object
var dogNames = {
    dogs: ['Caleb', 'Heidi', 'Napoleon', 'Snowbie'],
    // displayDogs method
    displayDogs: function() {
        console.log('My Dogs:', this.dogs);
    },
    // include an addDogName method
    addDogName: function(dog) {
        this.dogs.push(dog);
        this.displayDogs();
    },
    // include a changeDogName method
    changeDogName: function(position, newValue) {
        this.dogs[position] = newValue;
        this.displayDogs();
    },
    deleteDogName: function(position) {
        this.dogs.splice(position, 1);
        this.displayDogs();
    }
};
