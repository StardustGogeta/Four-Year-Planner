// Represents a collection of semesters (typically eight)
class Plan extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="plan">
                {this.props.semesters.length > 0 ?
                this.props.semesters.map((e, i) =>
                    i % 2 == 0 && // Make sure only every other semester triggers a new year block
                    <Year data1={e} data2={this.props.semesters[i+1]} key={i} index={i}
                        addCourse={this.props.addCourse} removeCourse={this.props.removeCourse}/>) :
                <CreatePlan onClick={this.props.createPlan}/>}
            </div>
        );
    }
}
