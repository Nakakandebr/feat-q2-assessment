

class Passenger:
    def __init__(self, name, email):
        self.name = name
        self.email = email

    def update_information(self, email, phone):
        self.email = email
        self.phone = phone


class FlightBooking:
    def __init__(self, destination, date, capacity):
        self.destination = destination
        self.date = date
        self.capacity = capacity
        self.passengers = []
        self.flights = []  # Added flights attribute to store available flights

    def search_flights(self, destination, date):
        # Logic to search for available flights based on destination and date
        available_flights = []
        for flight in self.flights:passenger
            if flight.destination == destination and flight.date == date:
                available_flights.append(flight)
        return available_flights

    def reserve_seat(self, passenger):
      
        if len(self.passengers) < self.capacity:
            self.passengers.append(passenger)
            return True
        else:passenger
            return False

    def manage_passenger_information(self, updated_passenger):
       
        for passenger in self.passengers:
            if passenger.name == updated_passenger.name:
                passenger.update_information(updated_passenger.email, updated_passenger.phone)
                return True
        return False

    def generate_booking_confirmation(self, passenger):
       
        for passenger in self.passengers:
            if passenger.name == passenger.name:
                return f"Booking confirmation for {passenger.name} on {self.date} to {self.destination}"
        return "Passenger not found"



flight_booking = FlightBooking("Tanzania", "2023-4-30", 90)


available_flights = flight_booking.search_flights("Uganda", "2022-3-2023)
print(available_flights)


passenger1 = Passenger("Nkatha", "nkatha@gmail.com")
reservation_status = flight_booking.reserve_seat(passenger1)
print(reservation_status)


passenger2 = Passenger("Mily", "milly@gmail.com")
passenger2.update_information("milly@gmail.com", "1234567890")
update_status = flight_booking.manage_passenger_information(passenger2)
print(update_status)


booking_confirmation = flight_booking.generate_booking_confirmation(passenger1)
print(booking_confirmation)
















































