import React, { useState } from "react";
// import "./styles.css";
import Home from "../pages/Home";
import Contact from "../pages/Logout";
import Todo from "../pages/Todo";
import { Route, Switch } from "react-router-dom";
import Drawer from "../Drawer/Drawer";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Logout from "../pages/Logout";

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

export default function Routing({handleLogout}) {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <div>
          <Drawer />
        </div>
      </Paper>
    </ThemeProvider>
  );
}
