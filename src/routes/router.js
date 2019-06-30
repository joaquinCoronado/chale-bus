import React from "react";
import { Scene, Router, Stack, ActionConst } from "react-native-router-flux";
import Login from "../screens/login";
import Start from "../screens/start";
import Register from "../screens/register"
import Home from "../screens/home/"
import Profile from "../screens/profile"

const MyRouter = () => (
  <Router>
    <Stack key="App">
      <Scene key="start" initial component={Start} type={ActionConst.RESET}/>
      <Scene key="login" component={Login} title="Login" />
      <Scene key="register" component={Register} title="Register" />
      <Scene key="home" component={Home} title="Home" type={ActionConst.RESET} />
      <Scene key="profile" component={Profile} title="Profile" />
    </Stack>
  </Router>
);

export default MyRouter;
