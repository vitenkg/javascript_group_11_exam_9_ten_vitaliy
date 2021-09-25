import './App.css';
import Home from "./Container/Home/Home";
import AddContacts from "./Container/AddContacts/AddContacts";
import {NavLink, Route, Switch} from "react-router-dom";
import EditContacts from "./Container/EditContacts/EditContacts";

function App() {
    return (

        <div className="Container">
            <ul className="UlNav">
                <li className="LiNav"><NavLink exact to="/" className="Link">Main</NavLink></li>
                <li className="LiNav"><NavLink className="Link" to="/add">Add</NavLink></li>
            </ul>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/add" component={AddContacts}/>
                <Route path="/edit:id" component={EditContacts}/>
                <Route render={() => <h1>Page Not found</h1>}/>
            </Switch>
        </div>
    );
}

export default App;
