# 1. **Ancestral Stories:** In many African cultures, the art of storytelling is passed
# down from generation to generation. Imagine you're creating an application that
# records these oral stories and translates them into different languages. The
# stories vary by length, moral lessons, and the age group they are intended for.
# Think about how you would model `Story`, `StoryTeller`, and `Translator`
# objects, and how inheritance might come into play if there are different types of
# stories or storytellers.  do it in python , kotlin and javascript use classes and inheritance
#  Use inheritance   make sure you run it
# attributes length , moral lessons,age group 
# create classes and add the attributes

class Story:
    def __init__(self, title, text, length, moral_lesson, age_group):
        self.title = title
        self.text = text
        self.length = length
        self.moral_lesson = moral_lesson
        self.age_group = age_group

class Storyteller:
    def __init__(self, name, stories):
        self.name = name
        self.stories = stories

    def tell_story(self, story):
        print(f"{self.name} is telling the story {story.title}")
        print(story.text)

class Translator:
    def __init__(self, language):
        self.language = language

    def translate_story(self, story):
        return Story(
            title=story.title,
            text=story.text.translate(self.language),
            length=story.length,
            moral_lesson=story.moral_lesson,
            age_group=story.age_group,
        )



# 2. **African Cuisine:** You're creating a recipe app specifically for African cuisine.
# The app needs to handle recipes from different African countries, each with its
# unique ingredients, preparation time, cooking method, and nutritional
# information. Consider creating a `Recipe` class, and think about how you might
# create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
# `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
# Psuedo code
# It has inputs like the name, ingredients, cooking method , nutritional-informtaion and thees 


class Recipe:
    def __init__(self, name, ingredients, prep_time, cooking_method, nutritional_information):
        self.name = name
        self.ingredients = ingredients
        self.prep_time = prep_time
        self.cooking_method = cooking_method
        self.nutritional_information = nutritional_information,

    def __represent__(self):
        return f"{self.name}: {self.ingredients} {self.prep_time} {self.cooking_method} {self.nutritional_information}"


class MoroccanRecipe:
    def __init__(self, name, ingredients, prep_time, cooking_method, nutritional_information):
        super().__init__(name, ingredients, preparation_time, cooking_method, nutritional_information)
        self.carbohdrates = True


class EthiopianRecipe:
    def __init__(self, name, ingredients, prep_time, cooking_method, nutritional_information):
        super().__init__(name, ingredients, preparation_time, cooking_method, nutritional_information)
        self.onions = False


class NigerianRecipe:
    def __init__(self, name, ingredients, prep_time, cooking_method, nutritional_information):
        super().__init__(name, ingredients, preparation_time, cooking_method, nutritional_information)
        self.pork_rice = True


moroccan_recipe = MoroccanRecipe("Moroccan ban ", ["cad", "millet", "tomatoes"],2, "cary", {"cabages": 20, "prot": 20})
ethiopian_recipe = EthiopianRecipe("Ethiopian sous ", [ "onions", "garlic"], 30, "cary", {"carbohdrates": 600, "protein": 40})
nigerian_recipe = NigerianRecipe("Nigerian Rice", ["rice", "chicken", "tomatoes"], 30, "cary", {"carbohydrates": 700, "fat": 90})




 
# 3. **Wildlife Preservation:** You're a wildlife conservationist working on a
# program to track different species in a national park. Each species has its own
# characteristics and behaviors, such as its diet, typical lifespan, migration
# patterns, etc. Some species might be predators, others prey. You'll need to
# 
# create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
# these classes might relate to each other through inheritance.
# 
# create classes and add the attributes

class Species:
    def __init__(self, name, diet, lifespan, migration_patterns):
        self.name = name
        self.diet = diet
        self.lifespan = lifespan
        self.migration_patterns = migration_patterns


class Predator():
    def __init__(self, name, diet, lifespan, migration_patterns):
        super().__init__(name, diet, lifespan, migration_patterns)


class Prey:
    def __init__(self, name, diet, lifespan, migration_patterns):
        super().__init__(name, diet, lifespan, migration_patterns)

species = Species("zebra" , "plants", 40, "Tsavo")

# 4. **African Music Festival:** You're in charge of organizing a Pan-African music
# festival. Many artists from different countries, each with their own musical style
# and instruments, are scheduled to perform. You need to write a program to
# manage the festival lineup, schedule, and stage arrangements. Think about how
# you might model the `Artist`, `Performance`, and `Stage` classes, and consider
# how you might use inheritance if there are different types of performances or
# stages. 
# create classes and add the attributes

class Artist:
    def __init__(self, name, country, musical_style, instruments):
        self.name = name
        self.country = country
        self.musical_style = musical_style
        self.instruments = instruments

class Performance:
    def __init__(self, artist, start_time, end_time, stage):
        self.artist = artist
        self.start_time = start_time
        self.end_time = end_time
        self.stage = stage

class Stage:
    def __init__(self, name, capacity):
        self.name = name
        self.capacity = capacity

def main():
   
    artist1 = Artist("Kenzo", "Uganda", "baxlagaer", ["guitar", "drums"])
    artist2 = Artist("Rema", "Uganda", "afro", ["piano", "guitors"])
    

   
    performance1 = Performance(artist1, "4:00 AM", "2:00 ", "small stage")
     performance2 = Performance(artist2, "5:00 AM", "3:00 ", "small stage")
    

  
    print("Lineup :")
    for performance in [performance1, performance2]:
        



# 5. Create a class called Product with attributes for name, price, and quantity.
# Implement a method to calculate the total value of the product (price * quantity).
# Create multiple objects of the Product class and calculate their total values. Do this in python ,kotlin and javascript and make sute it runs
# create classes and add the attributes
class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def total_value(self):
        return self.price * self.quantity


product1 = Product("Apple", 10, 2)
product2 = Product("Banana", 5, 3)

print(product1.total_value())

print(product2.total_value())
#  QUESTION SIX
# 6. Implement a class called Student with attributes for name, age, and grades (a
# list of integers). Include methods to calculate the average grade, display the
# student information, and determine if the student has passed (average grade >=
# 60). Create objects for the Student class and demonstrate the usage of these
# create classes and add the attributes
 

class Student:
    def __init__(self, name, age, grades):
        self.name = name
        self.age = age
        self.grades = grades

    def average_grade(self):
        return sum(self.grades) / len(self.grades)

    def display_information(self):
        print("Name:", self.name)
        print("Age:", self.age)
        print("Grades:", self.grades)

    def has_passed(self):
        return self.average_grade() >= 60


student1 = Student("Bridget", 18, [80, 85, 100])


print(student1.average_grade())


student1.display_information()
print(student1.has_passed())



# 7. Create a FlightBooking class that represents a flight booking system. Implement
# methods to search for available flights based on destination and date, reserve
# seats for customers, manage passenger information, and generate booking
# confirmations. 
# create classes and add the attributes

class FlightBooking:

    def __init__(self):
        self.flights = []
        self.passengers = []

    def getflights(self, destination, date):
        for flight in self.flights:
            if flight.destination == destination and flight.date == date:
                yield flight

    def reserved(self, flight, passenger):
        if flight.available_seats > 0:
            flight.available_seats -= 1
            self.passengers.append(passenger)

    def passenger_infor(self, passenger):
        pass

    def confirmation_booking(self, flight, passenger):
        confirmation = {
            "flight": flight,
            "passenger": passenger,
        }
        return confirmation


flight_booking = FlightBooking()

flight_booking.flights.append(Flight(destination="Uanda", date="2023/7/9"))


for flight in flight_booking.search_flights("Uganda", "2023/8/20"):
    print(flight)

passenger = Passenger("Bridget")
flight_booking.reserve_seat(flight, passenger)



# 8. Create a LibraryCatalog class that handles the cataloging and management of
# books in a library. Implement methods to add new books, search for books by
# title or author, keep track of available copies, and display book details. 
class LibraryCatalog:

    def __init__(self):
        self.books = {}

    def add_new_books(self, book):
        self.books[book.title] = book

    def search_for_books(self, title):
        if title in self.books:
            return self.books[title]
        else:
            return f"not there"

    def get_available_copies(self, book):
        if book in self.books:
            return self.books[book].available_copies
        else:
            return f"zero books"

    def display_book_details(self, book):
        if book in self.books:
            print(f"Genre: {book.genre}")
            print(f"Available copies: {book.available_copies}")
            print(f"Title: {book.title}")
            print(f"Author: {book.author}")
        else:
            print("Book not there")


library_catalog = LibraryCatalog()


book = Book("Trvor Noah", "Trevor", "Love", 1990)
library_catalog.add_book(book)

found_book = library_catalog.search_book("Trvor Noah")

available_copies = library_catalog.get_available_copies(found_book)

library_catalog.display_book_details(found_book)











































