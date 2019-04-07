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
