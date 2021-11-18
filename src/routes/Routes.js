import React from "react";
import Home from "../pages/home/Home";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
} from "react-router-dom";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" element={<Home/>} />
            </Switch>
        </Router>

    )
}

export default Routes