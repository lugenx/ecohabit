import React, { useState, useEffect } from "react";
import { useLoginContext } from "../contexts/LoginContext";
import { useUserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Avatar,
  Button,
  Typography,
  FormControl,
  TextField,
  Box,
} from "@mui/material";

const ProfilePage = () => {
  const { loginPending, loggedIn } = useLoginContext();
  const { user, setUser, error } = useUserContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    postalCode: "",
    roles: [],
  });

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!loginPending && !loggedIn) {
      navigate("/login");
    }
  });
  // Clears all form fields and opens/closes form modal
  const toggleForm = () => {
    setFormData({
      name: "",
      email: "",
      postalCode: "",
      roles: [],
    });

    setShowForm(!showForm);
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    updateUser();

    toggleForm();
  };

  // Applies form input changes (if any) to user
  const updateUser = () => {
    setUser({
      name: formData.name.length ? formData.name : user.name,
      email: formData.email.length ? formData.email : user.email,
      postalCode: formData.postalCode.length
        ? formData.postalCode
        : user.postalCode,
      roles: formData.roles.length ? formData.roles : user.roles,
    });
  };

  return (
    <Box sx={{ margin: 3 }}>
      {/* Main Grid */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={4}>
          {/* User Info */}
          <Card
            sx={{
              padding: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                  sx={{
                    width: 100,
                    height: 100,
                    mb: 1.5,
                    fontSize: "36px",
                  }}
                />
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  {user.name}
                </Typography>
              </Box>
              <hr></hr>
              <Typography variant="body2" color="text.secondary">
                <strong>Joined:</strong>{" "}
                {new Date(user.createdAt).toLocaleDateString()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Email:</strong> {user.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Postal Code:</strong> {user.postalCode}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large" variant="outlined" onClick={toggleForm}>
                Edit Profile
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8}>
          {/* Inner Grid */}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                    “Man who catch fly with chopstick, accomplish anything.”
                  </Typography>
                  <br></br>
                  <Typography variant="body2" sx={{ fontWeight: "bold " }}>
                    - Mr. Miyagi
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magni quo voluptatem nam ut atque vel illum doloribus
                  delectus, consequatur eum!
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Card>
                <CardContent>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magni quo voluptatem nam ut atque vel illum doloribus
                  delectus, consequatur eum! Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Aliquam adipisci quod
                  exercitationem minus rem quaerat.
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Edit info form */}
      {showForm && (
        <Box
          className="container"
          sx={{
            width: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // Keeps form centered on page
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            //
            zIndex: "1",
          }}
        >
          <Card
            sx={{
              zIndex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px 10px 0 10px",
            }}
          >
            <CardContent>
              <Box component="form" onSubmit={onSubmit}>
                <FormControl sx={{ width: "100%" }}>
                  <TextField
                    id="filled-basic"
                    label="Name"
                    variant="filled"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                    autoComplete="off"
                  />
                  <TextField
                    id="filled-basic"
                    label="Email"
                    variant="filled"
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                    autoComplete="off"
                  />
                  <TextField
                    id="filled-basic"
                    label="Postal Code"
                    variant="filled"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={onChange}
                    autoComplete="off"
                  />
                  <TextField
                    id="filled-basic"
                    label="Roles"
                    variant="filled"
                    name="roles"
                    value={formData.roles}
                    onChange={onChange}
                    autoComplete="off"
                  />
                </FormControl>
                <CardActions sx={{ marginTop: "10px" }}>
                  <Button size="small" type="submit">
                    Save Changes
                  </Button>
                  <Button size="small" onClick={toggleForm}>
                    Cancel
                  </Button>
                </CardActions>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  );
};

export default ProfilePage;
