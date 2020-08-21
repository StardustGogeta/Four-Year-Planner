class Semester extends React.Component {
    render() {
        return (
            <table>
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
                        this.props.data.courses.map((e, i) => <Course data={e} key={i} />)
                    }
                    <AddCourse onClick={e => this.props.addCourse(this.props.index)} />
                </tbody>
            </table>
        );
    }
}
