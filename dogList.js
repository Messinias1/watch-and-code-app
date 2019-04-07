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
    dogs: [],
    // displayDogs method
    displayDogs: function() {
        console.log('My Dogs:', this.dogs);
    },
    // include an addDogName method
    addDogName: function(dogText) {
        this.dogs.push({
            dogText: dogText,
            completed: false
        });
        this.displayDogs();
    },
    // include a changeDogName method
    changeDogName: function(position, dogText) {
        //this.dogs[position] = newValue;
        this.dogs[position].dogText = dogText;
        this.displayDogs();
    },
    // include a delete dogName method
    deleteDogName: function(position) {
        this.dogs.splice(position, 1);
        this.displayDogs();
    },
    // include a toggleCompleted method
    toggleCompleted: function(position) {
        var dog = this.dogNames[position];
        dog.completed = !dog.completed;
        this.displayDogs();
    }
};
