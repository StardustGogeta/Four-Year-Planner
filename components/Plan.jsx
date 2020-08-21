// Represents a collection of semesters (typically eight)
class Plan extends React.Component {
    constructor() {
        super();

        this.state = {
            // Test for demonstration purposes
            semesters: [
                {
                    name: "Fall 2020",
                    courses: [
                        {
                            code: "MATH141",
                            name: "Calculus II",
                            credits: "4"
                        }
                    ]
                },
                {
                    name: "Spring 2021",
                    courses: [
                        {
                            code: "MATH241",
                            name: "Calculus III",
                            credits: "4"
                        },
                        {
                            code: "MATH206",
                            name: "Introduction to Matlab",
                            credits: "1"
                        }
                    ]
                }
            ]
        }

        this.addCourse = this.addCourse.bind(this);
    }

    addCourse(semIndex) {
        // TODO: Change the way the code is asked for
        // TODO: Allow custom (courses that no longer exist, etc.)
        var code = prompt("Course code?");
        var reg = /^[A-Z]{4}[0-9]{3}[A-Z]?$/i;
        if (reg.test(code)) {
            fetch("https://api.umd.io/v1/courses/" + code)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    var course = data[0];
                    var code = course.course_id;
                    var name = course.name;
                    var credits = course.credits;
                    var toAdd = {code: code, name: name, credits: credits};

                    var stateCopy = {...this.state};
                    var sem = stateCopy.semesters[semIndex];
                    sem.courses = sem.courses.concat(toAdd);
                    this.setState(stateCopy);
                })
                .catch(err => {
                    // UMD API could be having issues, or course code could be invalid
                    console.log("error " + err);
                    alert("The course search for \"" + code + "\" failed unexpectedly.");
                });
        } else {
            alert("Bad input for course name \"" + code + "\". Please try again.");
        }
    }

    render() {
        return (
            <>
                {this.state.semesters.map((e, i) =>
                    <Semester data={e} key={i} index={i} addCourse={this.addCourse}/>)}
            </>
        );
    }
}
