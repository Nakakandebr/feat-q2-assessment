/G QUESTION 6
class Student(val name: String, val age: Int, val grades: List<Int>) {
    fun averageGrade() = grades.average()
    fun displayInformation() {
        println("Name: $name")
        println("Age: $age")
        println("Grades: $grades")
    }
    fun hasPassed() = averageGrade() >= 60
}

val student1 = Student("John Doe", 18, listOf(90, 95, 100))
val student2 = Student("Jane Doe", 17, listOf(80, 85, 90))


//Question5
class Product(val name: String, val price: Int, val quantity: Int) {
    fun totalValue() = price * quantity
}

val product1 = Product("Apple", 10, 2)
val product2 = Product("Banana", 5, 3)


//question7

class FlightBooking

    val flights = mutableListOf<Flight>()
    val passengers = mutableListOf<Passenger>()

    fun searchFlights(destination: String, date: String): Sequence<Flight> {
        return flights.filter { it.destination == destination && it.date == date }
    }

    fun reserveSeat(flight: Flight, passenger: Passenger) {
        if (flight.availableSeats > 0) {
            flight.availableSeats -= 1
            passengers.add(passenger)
        }
    }

    fun managePassengerInformation(passenger: Passenger) {

    }

    fun generateBookingConfirmation(flight: Flight, passenger: Passenger): BookingConfirmation {
        return BookingConfirmation(
            flight = flight,
            passenger = passenger
        )
    }
}





//question8

class LibraryCatalog {

    val books = mutableMapOf<String, Book>()

    fun addBook(book: Book) {
        books[book.title] = book
    }

    fun searchBook(title: String): Book? {
        return books[title]
    }

    fun getAvailableCopies(book: Book): Int {
        return books[book.title]?.availableCopies ?: 0
    }

    fun displayBookDetails(book: Book) {
        println("Title: ${book.title}")
        println("Author: ${book.author}")
        println("Genre: ${book.genre}")
        println("Available copies: ${book.availableCopies}")
    }

}

//question4



class Artist(val name: String, val country: String, val musicalStyle: String, val instruments: List<String>)

class Performance(val artist: Artist, val startTime: String, val endTime: String, val stage: Stage)

class Stage(val name: String, val capacity: Int)

fun main(args: Array<String>) {

    val artist1 = Artist("Tiwa Savage", "Nigeria", "Afrobeats", listOf("guitar", "drums"))
     val artist2 = Artist("Fally Ipupa", "DRC", "Rumba", listOf("bass", "piano"))
    val artist3 = Artist("Angelique Kidjo", "Benin", "World Music", listOf("vocals", "percussion"))


     val performance1 = Performance(artist1, "10:00 AM", "11:00 AM", Stage("Main Stage", 1000))
    val performance2 = Performance(artist2, "11:30 AM", "12:30 PM", Stage("Second Stage", 500))


    println("Lineup for the African Music Festival:")
    for (performance in listOf(performance1, performance2, performance3)) {
        println("* ${performance.artist.name} at ${performance.startTime} on ${performance.stage.name}")
        }
    }
fun main() {

    const artist1 = new Artist("Tiwa Savage", "Nigeria",



    class Species(val name: String, val diet: String, val lifespan: Int, val migrationPatterns: String)

    class Predator(name: String, diet: String, lifespan: Int, migrationPatterns: String) : Species(name, diet, lifespan, migrationPatterns)

    class Prey(name: String, diet: String, lifespan: Int, migrationPatterns: String) : Species(name, diet, lifespan, migrationPatterns)



//Question1
    class Story(val title: String, val author: String, val length: Int, val moralLesson: String, val ageGroup: Int) {

        }

    class Storyteller(val name: String, val nationality: String, val genre: String) {

        }

    class Translator(val name: String, val nativeLanguage: String, val targetLanguage: String) {

         }



        open class Story(
            val title: String,
            val text: String,
            val length: Int,
             val moralLesson: String,
             val ageGroup: String,
            )

        class Storyteller(
             val name: String,
             val stories: List<Story>,
            ) {
            fun tellStory(story: Story) {
                 println("${this.name} is telling the story ${story.title}")
                println(story.text)
                }
             }

         class Translator(
             val language: String,
            ) {
             fun translateStory(story: Story): Story {
                 return Story(
                     title=story.title,
                text=story.text.translate(this.language),
                length=story.length,
                 moralLesson=story.moralLesson,
                 ageGroup=story.ageGroup,
                )
             }
            }
}


