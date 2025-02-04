import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Button color="inherit" onClick={() => navigate("/")}>
            Welcome to the product recommendation system
          </Button>
        </Typography>
        <Button color="inherit" onClick={() => navigate("/visualization")}>
        Visualization
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
