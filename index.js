
// Question1

class Story {
     constructor(title, text, length, moralLesson, ageGroup) {
         this.title = title;
         this.text = text;
        this.length = length;
        this.moralLesson = moralLesson;
         this.ageGroup = ageGroup;
     }
 }


 class Translator {
     constructor(language) {
        this.language = language;
     }

     translateStory(story) {
        return new Story(
             title=story.title,
             text=story.text.translate(this.language),
            length=story.length,
             moralLesson=story.moralLesson,
             ageGroup=story.ageGroup,
         );
     }
 }
 class Storyteller {
    constructor(name, stories) {
        this.name = name;
        this.stories = stories;
     }
 
     tellStory(story) {
        console.log(`${this.name} is telling the story ${story.title}`);
        console.log(story.text);
     }
 }


//  quetsion two


//  Question three
class Species {
    constructor(name, diet, lifespan, migrationPatterns) {
        this.name = name;
        this.diet = diet;
        this.lifespan = lifespan;
        this.migrationPatterns = migrationPatterns;
    }
}
class Predator extends Species {
    constructor(name, diet, lifespan, migrationPatterns) {
        super(name, diet, lifespan, migrationPatterns);
    }
}
class Prey extends Species {
    constructor(name, diet, lifespan, migrationPatterns) {
        super(name, diet, lifespan, migrationPatterns);
    }
}

let species =  new Species ("Kangaroo", "plants", "70" )

// Question 4
class Artist {
    constructor(name, country, musicalStyle, instruments) {
        this.name = name;
        this.country = country;
         this.musicalStyle = musicalStyle;
         this.instruments = instruments;
}
  }
  
  class Performance {
    constructor(artist, startTime, endTime, stage) {
         this.artist = artist;
        this.startTime = startTime;
        this.endTime = endTime;
        this.stage = stage;
    }
  }
  
  class Stage {
     constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
     }
  }


// QUESTION5
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    get totalValue() {
        return this.price * this.quantity;
    }
}

const product1 = new Product("Mangoes", 30, 4);
const product2 = new Product("avacodo", 40, 23);

console.log(product1.totalValue()); 
console.log(product2.totalValue()); 


// QUESTION 6
class Student{
    constructor(name, age, grades){
        this.name = name
        this.age = age
        this.grades = grades
    }
        
    average_grade(){
        return sum(this.grades) / len(this.grades)
    }
       

    display_information(){
        console.log("Name:", self.name)
        console.log("Age:", self.age)
        console.log("Grades:", self.grades)

    }
       
       

    has_passed(){
        return this.average_grade() >= 60

    }
    
}


// Question7
    class FlightBooking{

        constructor(flight, passengers) {
            this.flights = [];
            this.passengers = [];
        }
    
        searchFlights(destination, date) {
            return this.flights.filter(flight => flight.destination === destination && flight.date === date)
        }
    
        reserveSeat(flight, passenger) {
            if (flight.availableSeats > 0) {
                flight.availableSeats -= 1;
                this.passengers.push(passenger);
            }
        }
    
        managePassengerInformation(passenger) {
           
        }
    
        generateBookingConfirmation(flight, passenger) {
            return {
                flight: flight,
                passenger: passenger
            };
        }
    }


    // Question8
    class LibraryCatalog {

        constructor() {
            this.books = {};
        }
    
        addBook(book) {
            this.books[book.title] = book;
        }
    
        searchBook(title) {
            return this.books[title];
        }
    
        getAvailableCopies(book) {
            return this.books[book.title]?.availableCopies || 0;
        }
    
        displayBookDetails(book) {
            console.log("Title:", book.title);
            console.log("Author:", book.author);
            console.log("Genre:", book.genre);
            console.log("Available copies:", book.availableCopies);
        
    
    

















































































































