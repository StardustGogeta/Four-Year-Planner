// Represents a single course row in the UI
// Expects prop `data` object to have code, name, and credits
class Course extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <tr>
                <td>{this.props.data.code}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.credits}</td>
            </tr>
        );
    }
}
