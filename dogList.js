var dogNames = {
    dogs: [],
    // displayDogs should tell if .dogs is empty
    displayDogs: function() {
        if (this.dogs.length === 0) {
            console.log('Your dog list is empty!');
        }
        else {
            console.log('My Dogs:');
            for (var i = 0; i < this.dogs.length; i++) {
                // check if .completed is true
                if (this.dogs[i].completed === true) {
                    console.log('(x)', this.dogs[i].dogText);
                }
                else {
                    console.log('( )', this.dogs[i].dogText);
                }
            }
        }
    },
    addDogName: function(dogText) {
        this.dogs.push({
            dogText: dogText,
            completed: false
        });
        this.displayDogs();
    },
    changeDogName: function(position, dogText) {
        this.dogs[position].dogText = dogText;
        this.displayDogs();
    },
    deleteDogName: function(position) {
        this.dogs.splice(position, 1);
        this.displayDogs();
    },
    toggleCompleted: function(position) {
        var dog = this.dogs[position];
        dog.completed = !dog.completed;
        this.displayDogs();
    },
    // create toggleAll method
    toggleAll: function() {
        var totalDogs = this.dogs.length;
        var completedDogs = 0;
        for (var i = 0; i < totalDogs; i++) {
            if (this.dogs[i].completed === true) {
                completedDogs++;
            }
        }
        if (completedDogs === totalDogs) {
            for (var i = 0; i < totalDogs; i++) {
                this.dogs[i].completed = false;
            }
        }
        else {
            for (var i = 0; i < totalDogs; i++) {
                this.dogs[i].completed = true;
            }
        }
        this.displayDogs();
    }
};
