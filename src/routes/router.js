import React from "react";
import { Scene, Router, Stack } from "react-native-router-flux";
import Login from "../screens/login";
import Home from "../screens/home";
import Register from "../screens/register"


const MyRouter = () => (
  <Router>
    <Stack key="App">
      <Scene key="home" component={Home} />
      <Scene key="login" component={Login} title="Login" />
      <Scene key="register" component={Register} title="Register" />
    </Stack>
  </Router>
);

export default MyRouter;
