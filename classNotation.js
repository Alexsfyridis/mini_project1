/**
 * Define the Course and Assignment concepts using the class notations
 */

// create the objects using the classes

//Class Defintions
class Assignment {
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
    }

    // Print info about an assignment
    printAssignment() {
        console.log('    Title: ' + this.title + ' | Due Date: ' + this.dueDate);
    }
}

// Represents a course that contains multiple assignments
class Course {
    constructor(courseName, instructor, creditHours, assignmenets) {
        this.courseName = courseName;
        this.instructor = instructor;
        this.creditHours = creditHours;
        this.assignments = assignmenets;
    }

    // Pring infor about this course and all its assignments
    courseInfo() {
        console.log('Course: ' + this.courseName + 
            ' | Instructor: ' + this.instructor + 
            ' | Credit Hours: ' + this.creditHours);
        console.log('Assignments >>>');
        for (let a of this.assignments) {
            a.printAssignment();
        }
    }
}

//Create the objects using the classes

// Assignment objects
let a1 = new Assignment('Project Proposal', 'Jan 15');
let a2 = new Assignment('Midterm Report', 'Feb 20');
let a3 = new Assignment('Final Report', 'Mar 30');
let a4 = new Assignment('Presentation', 'Apr 10');

// Course objects
let c1 = new Course(
    'Software Engineering',
    'Dr. Pepper',
    3,
    [a1, a2]
);

let c2 = new Course(
    'Data Science',
    'Dr. Evil',
    6,
    [a3, a4]
);

//Display info
c1.courseInfo();
c2.courseInfo();