class App extends React.Component {
    constructor() {
        super();

        var planStorage = JSON.parse(localStorage.getItem("plan")) || [];

        this.state = {
            // Test for demonstration purposes
            /*semesters: [
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
                },
                {
                    name: "Fall 2021",
                    courses: [
                        {
                            code: "MATH246",
                            name: "Differential Equations for Scientists and Engineers",
                            credits: "3"
                        },
                        {
                            code: "CMSC132",
                            name: "Object-Oriented Programming II",
                            credits: "4"
                        },
                        {
                            code: "CMSC250",
                            name: "Discrete Structures",
                            credits: "4"
                        }
                    ]
                },
            ]*/
            semesters: planStorage
        }

        this.addCourse = this.addCourse.bind(this);
        this.removeCourse = this.removeCourse.bind(this);
        this.createPlan = this.createPlan.bind(this);
        this.importPlan = this.importPlan.bind(this);
        this.exportPlan = this.exportPlan.bind(this);
        this.clearData = this.clearData.bind(this);
    }

    savePlan() {
        localStorage.setItem("plan", JSON.stringify(this.state.semesters));
    }

    createPlan() {
        var year = parseInt(prompt("What is your first year in college?"));
        var fallStart = prompt("Do you start in the fall? (Y/N)");
        var fallStartBool = fallStart.toLowerCase() == "y";
        var season = fallStartBool ? "Fall" : "Spring";
        var otherSeason = fallStartBool ? "Spring" : "Fall";
        var semesters = [];
        for (var i = 0; i < 4; i++) {
            semesters.push({
                name: season + " " + (year + i),
                courses: []
            });
            semesters.push({
                name: otherSeason + " " + (year + i + fallStartBool),
                courses: []
            });
            console.log(semesters);
        }
        this.setState({semesters: semesters});
        this.savePlan();
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
                    this.savePlan();
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

    removeCourse(semIndex, courseIndex) {
        var stateCopy = {...this.state};
        var sem = stateCopy.semesters[semIndex];
        sem.courses.splice(courseIndex, 1);
        this.setState(stateCopy);
        this.savePlan();
    }

    importPlan() {
        var imp = document.getElementById("import");
        if (imp.value && confirm("Are you sure you want to overwrite your data?")) {
            var fr = new FileReader();
            fr.onload = () => {
                var data = JSON.parse(fr.result);
                this.setState({semesters: data});
                this.savePlan();
            }
            fr.readAsText(imp.files[0]);
        }
    }

    // Drawn largely from
    // https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
    exportPlan() {
        var element = document.createElement('a');
        var text = JSON.stringify(this.state.semesters);
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', "Exported Plan");
        element.click();
    }

    clearData() {
        if (confirm("Are you sure you want to clear all local data?")) {
            localStorage.clear("theme");
            localStorage.clear("plan");
            location.reload();
        }
    }

    render() {
        return (
            <>
                <Plan semesters={this.state.semesters}
                    createPlan={this.createPlan}
                    addCourse={this.addCourse}
                    removeCourse={this.removeCourse}
                />
                <Menu
                    importPlan={this.importPlan}
                    exportPlan={this.exportPlan}
                    clearData={this.clearData}
                    />
            </>
        );
    }
}
