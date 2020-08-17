class Button extends React.Component {
    render() {
        return (
            <button onClick={() => alert('Hi')}>Click me!</button>
        );
    }
}

class Semester extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th>Credits</th>
                    </tr>
                </thead>
                <tbody>
                    <Course />
                    <AddCourse />
                </tbody>
            </table>
        );
    }
}

class Course extends React.Component {
    constructor() {
        super();
        this.state = {
            code: "MATH141",
            name: "Calculus II",
            credits: 3
        };
    }

    render() {
        return (
            <tr>
                <td>{this.state.code}</td>
                <td>{this.state.name}</td>
                <td>{this.state.credits}</td>
            </tr>
        );
    }
}

class AddCourse extends React.Component {
    render() {
        return (
            <tr>
                <td colspan={3}><button>Click to add a course!</button></td>
            </tr>
        )
    }
}

ReactDOM.render(<Semester />, document.getElementById("container"));
