class Student:
    def __init__(self, name, age, grades):
        self.name = name
        self.age = age
        self.grades = grades
    
    def calculate_student_average_grade(self):
        total_grades = sum(self.grades)
        student_average_grade = total_grades / len(self.grades)
        return student_average_grade
    
    def display_student_information(self):
        print(f"Name: {self.name}")
        print(f"Age: {self.age}")
        print(f"Grades: {self.grades}")
    
    def has_passed(self):
        student_average_grade = self.calculate_student_average_grade()
        if student_average_grade >= 60:
            return True
        else:
            return False



    def find_highest_grade(self):
      highest_grade = max(self.grades)
      return highest_grade


student1 = Student("Bridget OPindi", 20, [89, 80, 79, 87, 90])
student2 =Student("Loice Owino",24,[64,50,50,60,60])

student1.display_student_information()
student2.display_student_information()

average_grade = student1.calculate_student_average_grade()
print(f"Average Grade: {average_grade}")
average_grade = student2.calculate_student_average_grade()
print(f"Average Grade : {average_grade}")

if student1.has_passed():
    print("Student has passed")
else:
    print("Student has not passed")

if student2.has_passed():
    print("Student has passed")
else:
    print("Student has not passed")
    
    
highest_grade = student1.find_highest_grade()
print(f"Highest Grade: {highest_grade} ")