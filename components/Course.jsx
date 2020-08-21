// Represents a single course row in the UI
// Expects prop `data` object to have code, name, and credits
class Course extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.code}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.credits}</td>
                <td className="removeCourse" onClick={this.props.onRemove}>❌</td>
            </tr>
        );
    }
}
