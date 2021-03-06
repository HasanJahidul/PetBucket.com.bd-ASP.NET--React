import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import "./assets/css/register.css";
import "./App.css";
import "./assets/css/Sidebar.css";
import "./assets/css/ServiceForm.css";
import "./assets/css/Site.css";
import "./assets/css/Table.css";
import "mdbreact/dist/css/mdb.css";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import PetService from "./components/customer/PetService";
import Profile from "./components/customer/Profile";

//-------------ADMIN--------------------

import AdminDashboard from "./components/admin/AdminDashboard";
import AddUser from "./components/admin/AddUser";
import AdminDetails from "./components/admin/AdminDetails";
import UserList from "./components/admin/UserList";
import UserDetails from "./components/admin/UserDetails";
import UserEdit from "./components/admin/UserEdit";
import AdminProfileEdit from "./components/admin/AdminProfileEdit";
import UserDelete from "./components/admin/UserDelete";

//-------------END--------------------

function App() {
  return (
    <>
      <Router>
        <Switch>
        
          {/* Public Routes */}
          <PrivateRoute exact path="/Dashboard">
            <Dashboard />
          </PrivateRoute>


          <PublicRoute exact path="/">
            <LandingPage />
          </PublicRoute>
          <PublicRoute
            exact
            path="/register"
            children={<Register />}
          ></PublicRoute>

          <PublicRoute exact path="/login">
            <Login />
          </PublicRoute>

          {/* Customer Routes */}
          {/* <PrivateRoute exact path="/CustomerDashboard">
            <CustomerDashboard />
          </PrivateRoute> */}

          <PrivateRoute
            exact
            path="/customer/edit-profile"
            children={<Profile title="Edit Profile" buttonName="save" />}
          ></PrivateRoute>

          {/* Pet services for customer */}
          <PrivateRoute
            exact
            path="/PetService/DogWalking"
            children={
              <PetService serviceName="Pet Walking" buttonName="Book Service" />
            }
          ></PrivateRoute>
          <PrivateRoute
            exact
            path="/PetService/PetDayCare"
            children={
              <PetService
                serviceName="Pet Day Care"
                buttonName="Book Service"
              />
            }
          ></PrivateRoute>
          <PrivateRoute
            exact
            path="/PetService/PetTaxi"
            children={
              <PetService serviceName="Pet Taxi" buttonName="Book Service" />
            }
          ></PrivateRoute>
          <PrivateRoute
            exact
            path="/PetService/PetSitting"
            children={
              <PetService serviceName="Pet Sitting" buttonName="Book Service" />
            }
          ></PrivateRoute>
          <PrivateRoute
            exact
            path="/PetService/PetGromming"
            children={
              <PetService
                serviceName="Pet Gromming"
                buttonName="Book Service"
              />
            }
          ></PrivateRoute>
          <PrivateRoute
            exact
            path="/PetService/PetTraining"
            children={
              <PetService
                serviceName="Pet Training"
                buttonName="Book Service"
              />
            }
          ></PrivateRoute>

          {/* =========== admin=================*/}

          {/* ----------------------------------ADMIN---------------------------------- */}
          {/* <Route exact path="/AdminDashboard">
            <AdminDashboard />
          </Route> */}

          {/* ADMIN------ADD USER */}
          <Route
            exact
            path="/AddCustomer"
            children={<AddUser title="Add Customer" buttonName="Add" />}
          ></Route>
          <Route
            exact
            path="/AddPetSitter"
            children={<AddUser title="Add Pet Sitter" buttonName="Add" />}
          ></Route>
          <Route
            exact
            path="/AddAgency"
            children={<AddUser title="Add Agency" buttonName="Add" />}
          ></Route>

          {/* ADMIN------USER LIST */}

          <Route
            exact
            path="/CustomerList"
            children={
              <UserList
                header="Customer List"
                title="All Customer Details"
                DetailsLink="/CustomerDetails"
                EditLink="/CustomerEdit"
                DeleteLink="/CustomerDelete"
              />
            }
          ></Route>
          <Route
            exact
            path="/PetSitterList"
            children={
              <UserList
                header="Pet Sitter List"
                title="All Pet Sitter Details"
                DetailsLink="/PetSitterDetails"
                EditLink="/PetSitterEdit"
                DeleteLink="/PetSitterDelete"
              />
            }
          ></Route>
          <Route
            exact
            path="/AgencyList"
            children={
              <UserList
                header="Agency List"
                title="All Agency Details"
                DetailsLink="/AgencyDetails"
                EditLink="/AgencyEdit"
                DeleteLink="/AgencyDelete"
              />
            }
          ></Route>

          {/* ADMIN------USER DETAILS */}

          <Route
            exact
            path="/CustomerDetails"
            children={
              <UserDetails
                header="Customer Details"
                link="/CustomerList"
                title="Customer Details"
              />
            }
          ></Route>
          <Route
            exact
            path="/PetSitterDetails"
            children={
              <UserDetails
                header="Pet Sitter Details"
                link="/PetSitterList"
                title="Pet Sitter Details"
              />
            }
          ></Route>
          <Route
            exact
            path="/AgencyDetails"
            children={
              <UserDetails
                header="Agency Details"
                link="/AgencyList"
                title="Agency Details"
              />
            }
          ></Route>

          {/* ADMIN------USER EDIT */}

          <Route
            exact
            path="/CustomerEdit"
            children={
              <UserEdit
                link="/CustomerList"
                title="Customer Edit"
                buttonName="Update"
              />
            }
          ></Route>
          <Route
            exact
            path="/PetSitterEdit"
            children={
              <UserEdit
                link="/PetSitterList"
                title="Pet Sitter Edit"
                buttonName="Update"
              />
            }
          ></Route>
          <Route
            exact
            path="/AgencyEdit"
            children={
              <UserEdit
                link="/AgencyList"
                title="Agency Edit"
                buttonName="Update"
              />
            }
          ></Route>

          {/* ADMIN------USER DELETE */}

          <Route
            exact
            path="/CustomerDelete"
            children={
              <UserDelete
                link="/CustomerList"
                title="Customer Delete"
                buttonName="Delete"
              />
            }
          ></Route>
          <Route
            exact
            path="/PetSitterDelete"
            children={
              <UserDelete
                link="/PetSitterList"
                title="Pet Sitter Delete"
                buttonName="Delete"
              />
            }
          ></Route>
          <Route
            exact
            path="/AgencyDelete"
            children={
              <UserDelete
                link="/AgencyList"
                title="Agency Delete"
                buttonName="Delete"
              />
            }
          ></Route>

          {/* ADMIN------ADMIN DETAILS */}

          <Route exact path="/AdminDetails">
            <AdminDetails />
          </Route>

          {/* ADMIN------ADMIN Profile Edit */}
          <Route
            exact
            path="/AdminProfileEdit"
            children={
              <AdminProfileEdit
                // link="/AdminDetails"
                title="Admin Profile Edit"
                buttonName="Update"
              />
            }
          ></Route>

          {/* ----------------------ADMIN-END---------------- */}

          <Route>
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>

      {/* ----------------------END---------------- */}
    </>
  );
}

export default App;
