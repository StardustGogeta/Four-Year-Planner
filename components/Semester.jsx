class Semester extends React.Component {
    render() {
        var totalCredits = 0;
        this.props.data.courses.forEach(e => {totalCredits += parseInt(e.credits)});

        return (
            <table className="semester">
                <thead>
                    <tr>
                        <th colSpan={3}>{this.props.data.name}</th>
                    </tr>
                    <tr>
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th>Credits</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.courses.map((e, i) => <Course data={e} key={i} onRemove={e => this.props.removeCourse(this.props.index, i)}/>)
                    }
                    <AddCourse onClick={e => this.props.addCourse(this.props.index)} />
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={2}>TOTAL CREDITS:</td>
                        <td>{totalCredits}</td>
                    </tr>
                </tfoot>
            </table>
        );
    }
}
