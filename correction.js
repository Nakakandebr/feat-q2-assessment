// // class Story {
// //   constructor(title, length, moral_lesson, age_group) {
// //     this.title = title;
// //     this.length = length;
// //     this.moral_lesson = moral_lesson;
// //     this.age_group = age_group;
// //   }
// // }

// // class StoryTeller {
// //   constructor(name, language) {
// //     this.name = name;
// //     this.language = language;
// //     this.stories = [];
// //   }

// //   add_story(story) {
// //     this.stories.push(story);
// //   }
// // }

// // class Translator {
// //   constructor(source_language, target_language) {
// //     this.source_language = source_language;
// //     this.target_language = target_language;
// //     this.translated_stories = [];
// //   }

// //   translate_story(story) {
// //     if (story.age_group === 'children') {
// //       let translated_story = translate_for_children(story, this.source_language, this.target_language);
// //       this.translated_stories.push(translated_story);
// //     } else {
// //       let translated_story = translate_for_adults(story, this.source_language, this.target_language);
// //       this.translated_stories.push(translated_story);
// //     }
// //   }
// // }

// // class FolkStory extends Story {
// //   constructor(title, length, moral_lesson, age_group, origin, characters) {
// //     super(title, length, moral_lesson, age_group);
// //     this.origin = origin;
// //     this.characters = characters;
// //   }
// // }
// // function translate_for_children(story, source_language, target_language) {
// //   // implementation goes here
// // }

// // class Translator {


// //   translate_story(story) {
// //     if (story.age_group === 'children') {
// //       let translated_story = translate_for_children(story, this.source_language, this.target_language);
// //       this.translated_stories.push(translated_story);
// //     } else {
// //       let translated_story = translate_for_adults(story, this.source_language, this.target_language);
// //       this.translated_stories.push(translated_story);
// //     }
// //   }
// // }
// // let story1 = new Story('The Tortoise and the Hare', 10, 'Slow and steady wins the race', 'children');
// // let story2 = new FolkStory('The Three Little Pigs', 15, 'Build your house with bricks', 'children', 'England', ['Pig 1', 'Pig 2', 'Pig 3']);
// // let story3 = new Story('The Raven', 20, 'Nevermore', 'adults');

// // let storyteller = new StoryTeller('John', 'English');
// // storyteller.add_story(story1);
// // storyteller.add_story(story2);
// // storyteller.add_story(story3);

// // let translator = new Translator('English', 'Spanish');
// // translator.translate_story(story1);
// // translator.translate_story(story2);
// // translator.translate_story(story3);

// // class Artist {  constructor(name, country, style, instruments) {      this.name = name;      this.country = country;      this.style = style;      this.instruments = instruments;  }}class Performance {  constructor(start_time, end_time, artist) {      this.start_time = start_time;      this.end_time = end_time;      this.artist = artist;  }}class Stage {  constructor(name) {      this.name = name;      this.performances = [];  }  add_performance(performance) {      this.performances.push(performance);  }  is_available(performance) {      if (this.performances.length === 0) {          return true;      }      let last_performance = this.performances[this.performances.length - 1];      if (last_performance.artist.country !== performance.artist.country) {          return true;      }      return false;  }}let artists = [  new Artist("Artist 1", "Country 1", "Style 1", ["Instrument 1", "Instrument 2"]),  new Artist("Artist 2", "Country 2", "Style 2", ["Instrument 3", "Instrument 4"])];let lineup = [];for (let artist of artists) {  let performance = new Performance(start_time, end_time, artist);  lineup.push(performance);}let stages = [  new Stage("Stage 1"),  new Stage("Stage 2")];for (let performance of lineup) {  for (let stage of stages) {      if (stage.is_available(performance)) {          stage.add_performance(performance);          break;      }  }}let stage = new Stage("Main Stage");let artist1 = new Artist("Artist 1", "USA");let performance1 = new Performance(artist1);stage.add_performance(performance1);let artist2 = new Artist("Artist 2", "UK");let performance2 = new Performance(artist2);stage.add_performance(performance2);let artist3 = new Artist("Artist 3", "USA");let performance3 = new Performance(artist3);let is_available = stage.is_available(performance3);console.log(is_available);
// class Artist {
//   constructor(name, country, style, instruments) {
//     this.name = name;
//     this.country = country;
//     this.style = style;
//     this.instruments = instruments;
//   }
// }
// class Performance {
//   constructor(start_time, end_time, artist) {
//     this.start_time = start_time;
//     this.end_time = end_time;
//     this.artist = artist;
//   }
// }
// class Stage {
//   constructor(name) {
//     this.name = name;
//     this.performances = [];
//   }

//   add_performance(performance) {
//     this.performances.push(performance);
//   }

//   is_available(performance) {
//     if (this.performances.length === 0) {
//       return true;
//     }

//     const last_performance = this.performances[this.performances.length - 1];
//     if (last_performance.artist.country !== performance.artist.country) {
//       return true;
//     }

//     return false;
//   }
// }
// const artists = [
//   new Artist("Artist 1", "Country 1", "Style 1", ["Instrument 1", "Instrument 2"]),
//   new Artist("Artist 2", "Country 2", "Style 2", ["Instrument 3", "Instrument 4"]),
// ];

// const lineup = [];

// for (const artist of artists) {
//   const performance = new Performance(start_time, end_time, artist);
//   lineup.push(performance);
// }

// const stages = [
//   new Stage("Stage 1"),
//   new Stage("Stage 2"),
// ];

// for (const performance of lineup) {
//   for (const stage of stages) {
//     if (stage.is_available(performance)) {
//       stage.add_performance(performance);
//       break;
//     }
//   }
// }

// const stage = new Stage("Main Stage");

// const artist1 = new Artist("Artist 1", "USA");
// const performance1 = new Performance(artist1);
// stage.add_performance(performance1);

// const artist2 = new Artist("Artist 2", "UK");
// const performance2 = new Performance(artist2);
// stage.add_performance(performance2);

// const artist3 = new Artist("Artist 3", "USA");
// const performance3 = new Performance(artist3);
// const is_available = stage.is_available(performance3);
// console.log(is_available);
// class Stage {
  // constructor(name) {
    // this.name = name;
    // this.performances = [];
  // }
// 
  // addPerformance(performance) {
    // this.performances.push(performance);
  // }
// 
  // isAvailable(performance) {
    // if (this.performances.length === 0) {
      // return true;
    // }
// 
    // const lastPerformance = this.performances[this.performances.length - 1];
    // if (lastPerformance.artist.country !== performance.artist.country) {
      // return true;
    // }
// 
    // return false;
  // }
// }
// 
// class Artist {
  // constructor(name, country, style, instruments) {
    // this.name = name;
    // this.country = country;
    // this.style = style;
    // this.instruments = instruments;
  // }
// }
// 
// class Performance {
  // constructor(startTime, endTime, artist) {
    // this.startTime = startTime;
    // this.endTime = endTime;
    // this.artist = artist;
  // }
// }
// 
// const artists = [
  // new Artist("Artist 1", "Country 1", "Style 1", ["Instrument 1", "Instrument 2"]),
  // new Artist("Artist 2", "Country 2", "Style 2", ["Instrument 3", "Instrument 4"]),
// ];
// 
// const lineup = [];
// 
// for (const artist of artists) {
  // const performance = new Performance("start_time", "end_time", artist);
  // lineup.push(performance);
// }
// 
// const stages = [
  // new Stage("Stage 1"),
  // new Stage("Stage 2"),
// ];
// 
// for (const performance of lineup) {
  // for (const stage of stages) {
    // if (stage.isAvailable(performance)) {
      // stage.addPerformance(performance);
      // break;
    // }
  // }
// }
// 
// const stage = new Stage("Main Stage");
// 
// const artist1 = new Artist("Artist 1", "Uganda", "Style 1", ["Instrument 1", "Instrument 2"]);
// const performance1 = new Performance("start_time1", "end_time1", artist1);
// stage.addPerformance(performance1);
// 
// const artist2 = new Artist("Artist 2", "Rwanda", "Style 2", ["Instrument 3", "Instrument 4"]);
// const performance2 = new Performance("start_time2", "end_time2", artist2);
// stage.addPerformance(performance2);
// 
// const artist3 = new Artist("Artist 3", "Burundi", "Style 3", ["Instrument 5", "Instrument 6"]);
// const performance3 = new Performance("start_time3", "end_time3", artist3);
// const isAvailable = stage.isAvailable(performance3);
// console.log(isAvailable);


// Question4

class Artist {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
  toString() {
    return `${this.name} from ${this.country}`;
  }
}

class Performance {
  constructor(artist, start_time, end_time) {
    this.artist = artist;
    this.start_time = start_time;
    this.end_time = end_time;
  }
  get_duration() {
    const duration = this.end_time - this.start_time;
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;
    return `${hours}:${minutes}:${seconds}`;
  }
}

class Stage {
  constructor(capacity) {
    this.nameofStage = "";
    this.capacity = capacity;
    this.schedule = {};
    this.audience_description = {};
    this.artists_songs = {};
  }
  add_performance(performance, song) {
    this.songs = [];
    this.songs.push(song);
    this.schedule[performance] = performance.get_duration();
    this.artists_songs[performance.artist.name] = this.songs;
  }
  determine_performance_stage(artist, audience_type, instrument) {
    if (audience_type === "young and bubbly" && instrument === "Guitar") {
      this.nameofStage = "stage Youngins";
    } else if (audience_type === "18 to 35" && instrument === "Piano") {
      this.nameofStage = "stage Millennials";
    } else if (audience_type === "36 to 50" && instrument === "Drums") {
      this.nameofStage = "stage Old and Cool";
    } else {
      this.nameofStage = "artist not performing in this stage";
    }
    return this.nameofStage;
  }
  display_lineup() {
    const sorted_lineup = Object.entries(this.artists_songs).sort(
      (a, b) => a[0].localeCompare(b[0])
    );
    for (const [artist, songs] of sorted_lineup) {
      console.log(`${artist}: ${songs.join(", ")}`);
    }
  }
  toString() {
    return `${this.nameofStage} (Capacity: ${this.capacity})`;
  }
}

// Creating instances
const artist1 = new Artist("Bensoul", "Kenya");
const artist2 = new Artist("Kidum", "Kenya");
const artist3 = new Artist("Arya", "Nigeria");
const artist4 = new Artist("Davido", "Nigeria");

const performance1 = new Performance(artist1, 70000, 78990);
const performance2 = new Performance(artist2, 6000, 8000);
const performance3 = new Performance(artist3, 6000, 8000);

console.log(performance1.get_duration());

const stage1 = new Stage(4000);
stage1.add_performance(performance1, "sura yako");
stage1.add_performance(performance2, "too easy");
stage1.add_performance(performance3, "Sability");

console.log(stage1.artists_songs);
console.log(stage1.determine_performance_stage("kidum", "young and bubbly", "Guitar"));

const stage2 = new Stage(5000);
console.log(stage2.add_performance(performance2, "Nitafanya"));
console.log(stage2.determine_performance_stage("Arya", "young and bubbly", "Piano"));

stage1.display_lineup();
stage2.display_lineup();
class Student {
  constructor(name, age, grades) {
    this.name = name;
    this.age = age;
    this.grades = grades;
  }

  calculateStudentAverageGrade() {
    const totalGrades = this.grades.reduce((sum, grade) => sum + grade, 0);
    const studentAverageGrade = totalGrades / this.grades.length;
    return studentAverageGrade;
  }

  displayStudentInformation() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Grades: ${this.grades}`);
  }

  hasPassed() {
    const studentAverageGrade = this.calculateStudentAverageGrade();
    if (studentAverageGrade >= 60) {
      return true;
    } else {
      return false;
    }
  }

  findHighestGrade() {
    const highestGrade = Math.max(...this.grades);
    return highestGrade;
  }
}

const student1 = new Student("Bridget OPindi", 20, [89, 80, 79, 87, 90]);
const student2 = new Student("Loice Owino", 24, [64, 50, 50, 60, 60]);

student1.displayStudentInformation();
student2.displayStudentInformation();

const averageGrade1 = student1.calculateStudentAverageGrade();
console.log(`Average Grade: ${averageGrade1}`);
const averageGrade2 = student2.calculateStudentAverageGrade();
console.log(`Average Grade: ${averageGrade2}`);

if (student1.hasPassed()) {
  console.log("Student has passed");
} else {
  console.log("Student has not passed");
}

if (student2.hasPassed()) {
  console.log("Student has passed");
} else {
  console.log("Student has not passed");
}

const highestGrade1 = student1.findHighestGrade();
console.log(`Highest Grade: ${highestGrade1}`);
class Passenger {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  updateInformation(email, phone) {
    this.email = email;
    this.phone = phone;
  }
}

class FlightBooking {
  constructor(destination, date, capacity) {
    this.destination = destination;
    this.date = date;
    this.capacity = capacity;
    this.passengers = [];
    this.flights = []; // Added flights attribute to store available flights
  }

  searchFlights(destination, date) {
    // Logic to search for available flights based on destination and date
    const availableFlights = [];
    for (const flight of this.flights) {
      if (flight.destination === destination && flight.date === date) {
        availableFlights.push(flight);
      }
    }
    return availableFlights;
  }

  reserveSeat(passenger) {
    if (this.passengers.length < this.capacity) {
      this.passengers.push(passenger);
      return true;
    } else {
      return false;
    }
  }

  managePassengerInformation(updatedPassenger) {
    for (const passenger of this.passengers) {
      if (passenger.name === updatedPassenger.name) {
        passenger.updateInformation(updatedPassenger.email, updatedPassenger.phone);
        return true;
      }
    }
    return false;
  }

  generateBookingConfirmation(passenger) {
    for (const passenger of this.passengers) {
      if (passenger.name === passenger.name) {
        return `Booking confirmation for ${passenger.name} on ${this.date} to ${this.destination}`;
      }
    }
    return "Passenger not found";
  }
}

const flightBooking = new FlightBooking("Tanzania", "2023-4-30", 90);

const availableFlights = flightBooking.searchFlights("Uganda", "2022-3-2023");
console.log(availableFlights);

const passenger1 = new Passenger("Nkatha", "nkatha@gmail.com");
const reservationStatus = flightBooking.reserveSeat(passenger1);
console.log(reservationStatus);

const passenger2 = new Passenger("Mily", "milly@gmail.com");
passenger2.updateInformation("milly@gmail.com", "1234567890");
const updateStatus = flightBooking.managePassengerInformation(passenger2);
console.log(updateStatus);

const bookingConfirmation = flightBooking.generateBookingConfirmation(passenger1);
console.log(bookingConfirmation);
