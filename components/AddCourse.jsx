class AddCourse extends React.Component {
    render() {
        return (
            <tr>
                <td colSpan={3}>
                    <button onClick={this.props.onClick}>
                        Click to add a course!
                    </button>
                </td>
            </tr>
        )
    }
}
