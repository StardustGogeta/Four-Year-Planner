class Semester extends React.Component {
    constructor() {
        super();
        this.state = {
            courses: [
                { // Test for demonstration purposes
                    code: "MATH141",
                    name: "Calculus II",
                    credits: "4"
                }
            ]
        }
        this.addCourse = this.addCourse.bind(this);
    }

    addCourse() {
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

                    var newCourses = this.state.courses.concat(toAdd);
                    this.setState({courses: newCourses});
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
            <table>
                <thead>
                    <tr>
                        <th colSpan={3}>{this.props.name}</th>
                    </tr>
                    <tr>
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th>Credits</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.courses.map((e, i) => <Course data={e} key={i} />)
                    }
                    <AddCourse onClick={this.addCourse} />
                </tbody>
            </table>
        );
    }
}
