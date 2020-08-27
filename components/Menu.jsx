class Menu extends React.Component {
    render() {
        return (
            <div id="menu">
                <b>Help Page</b>
                <hr></hr>
                <b>Major</b>
                <hr></hr>
                <b>Previous Coursework</b>
                <hr></hr>
                <b>Import</b>
                <br></br>
                <input id="import" type="file" accept=".json,.txt"></input>
                <br></br>
                <button onClick={this.props.importPlan}>Import</button>
                <hr></hr>
                <b>Export</b>
                <br></br>
                <button onClick={this.props.exportPlan}>Export</button>
                <hr></hr>
                <b>Warnings</b>
                <hr></hr>
                <b>Errors</b>
                <hr></hr>
                <b>Clear Local Data</b>
                <br></br>
                <button onClick={this.props.clearData}>Clear</button>
            </div>
        );
    }
}
