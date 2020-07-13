import React, {Component} from "react";
import ReactDOM from "react-dom";
import {TextField} from "@material-ui/core/TextField";

function App() {
    return <TextField
        variant="filled"
        label="Hello"
    />
}

ReactDOM.render(<App/>, document.getElementById("root"));
