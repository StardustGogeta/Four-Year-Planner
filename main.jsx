class Button extends React.Component {
    render() {
        return (
            <button onClick={() => alert('Hi')}>Click me!</button>
        );
    }
}

ReactDOM.render(<Button />, document.getElementById("container"));
