import React, { useState } from 'react';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function SignUpCard({ getLoginData }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    getLoginData(formData);
  };

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Admin Login
      </Typography>
      <Box component="form" onSubmit={onSubmitHandler} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={(e) => onChangeHandler(e)}
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={formData.password}
          onChange={(e) => onChangeHandler(e)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </>
  );
}

SignUpCard.propTypes = { getLoginData: PropTypes.func.isRequired };

export default SignUpCard;
