class Year extends React.Component {
    render() {
        return (
            <div className="year">
                <Semester data={this.props.data1} index={this.props.index} addCourse={this.props.addCourse} removeCourse={this.props.removeCourse}/>
                <Semester data={this.props.data2} index={this.props.index + 1} addCourse={this.props.addCourse} removeCourse={this.props.removeCourse}/>
            </div>
        );
    }
}
