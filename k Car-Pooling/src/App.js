import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Vehicle from "./pages/user/Vehicle";
import Ride from "./pages/ride/Ride";
import MyHome from "./pages/home/MyHome";
import NewVehicle from "./pages/newUser/NewVehicle";
import Calender from "./components/sidebar/Calender"
import PassengerDashboard from "./pages/dashboard/PassengerDashboard";
import View from "./components/ownerlist/View";
import Request from "./components/ownerlist/Request";

// import UserList from "./components/userlist/UserList";

function App() {
  return (
<Router>
<Switch>
  <Route exact path="/">
    <MyHome />
  </Route>
  <Route exact path="/passengerdashboard">
    <PassengerDashboard />
  </Route>
  <Route path="/user/:userId">
    <User />
  </Route>
  <Route path="/newuser">
    <NewUser />
  </Route>
  <Route path="/profile">
    <User />
  </Route>
  <Route path="/calender">
    <Calender />
  </Route>
  <Route exact path="/passengerdashboard">
    <PassengerDashboard />
  </Route>
  <Route exact path="/view">
    <View />
  </Route>

 <Route exact path="/view">
    <View />
  </Route>

  <Route exact path="/request">
    <Request />
  </Route>
  
</Switch>

</Router>
  );
}

export default App;
