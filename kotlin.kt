/QUESTION 6
class Student(val name: String, val age: Int, val grades: List<Int>) {
    fun averageGrade() = grades.average()
    fun displayInformation() {
        println("Name: $name")
        println("Age: $age")
        println("Grades: $grades")
    }
    fun hasPassed() = averageGrade() >= 60
}

val student1 = Student("BRidget, 40, listOf(80, 85, 100))
val student2 = Student("BRidget,", 52, listOf(80, 85, 100))


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
        return flights.filter { it.destination === destination && it.date === date }
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



fun main(args: Array<String>) {

    val artist1 = Artist("Kenzo", "Uganda", "Afrobeats", listOf("guitar", "drums"))
     val artist2 = Artist("Rema", "Uganda", "Regga", listOf("guitar", "drums"))
  


     val performance1 = Performance(artist1, "20:00 pm", "1:00 pm", Stage("small stage", 2000))
    val performance2 = Performance(artist2, "1:30 pm", "12:00pm", Stage("Semi stage", 300))


    println("Lineu:")
    for (performance in listOf(performance1, performance2, )) {
        println("* ${performance.artist.name} at ${performance.startTime} on ${performance.stage.name}")
        }
    }
fun main() {


    class Species(val name: String, val diet: String, val lifespan: Int, val migrationPatterns: String)

    class Predator(name: String, diet: String, lifespan: Int, migrationPatterns: String) : Species(name, diet, lifespan, migrationPatterns)

    class Prey(name: String, diet: String, lifespan: Int, migrationPatterns: String) : Species(name, diet, lifespan, migrationPatterns)



//Question1


        open class Story(val title: String,val text: String, val length: Int,  val moralLesson: String, val ageGroup: String){

        }
            
            

        class Storyteller(val name: String,val stories: List<Story>){
            fun tellStory(story: Story) {
                 println("${this.name} is telling the story ${story.title}")
                println(story.text)
                }
             }

         class Translator( val language: String){
            
 
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




