import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Vehicle from "./pages/user/Vehicle";
import Ride from "./pages/ride/Ride";
import OwnerDashboard from "./pages/dashboard/OwnerDashboard";
import MyHome from "./pages/home/MyHome";
import NewVehicle from "./pages/newUser/NewVehicle";
// import Calender from "./components/sidebar/Calender"
import Calender from "./components/passenger/Calender"
import PassengerDashboard from "./pages/dashboard/PassengerDashboard";
import View from "./components/ownerlist/View";
import Pagination from "./components/Pagination";
// import UserList from "./components/userlist/UserList";

function App() {
  return (
    // <Router>
    //     <Switch>
    //       <Route exact path="/">
    //         <MyHome />
    //       </Route>
    //       <Route exact path="/ownerdashboard">
    //         <OwnerDashboard />
    //       </Route>
    //       <Route path="/user/:userId">
    //         <User />
    //       </Route>
    //       <Route path="/newuser">
    //         <NewUser />
    //       </Route>
    //       <Route path="/vehicle">
    //         <Vehicle />
    //       </Route>
    //       <Route path="/profile">
    //         <User />
    //       </Route>
    //       <Route path="/ride">
    //         <Ride />
    //       </Route>
    //       <Route path="/newvehicle">
    //         <NewVehicle />
    //       </Route>

    //       <Route exact path="/passengerdashboard">
    //         <PassengerDashboard />
    //       </Route>
          
    //     </Switch>
     
    // </Router>



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
  {/* <Route exact path="/userlist">
    <UserList />
  </Route>
   */}
 <Route exact path="/view">
    <View />
  </Route>
  <Route exact path="/pagination">
    <Pagination />
  </Route>
   
  
</Switch>

</Router>
  );
}

export default App;
