import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import HomePage from "./../components/HomePage"
import StartGameComponent from './../components/StartGameComponent'
import History from '../components/history/History'

const WebRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/gameZone" exact component={StartGameComponent} />
                <Route path="/history" component={History} />
            </Switch>
        </Router>
    )
}

export default WebRouter