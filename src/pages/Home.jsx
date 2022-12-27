import React from 'react';

import { Box, Container, CssBaseline } from '@mui/material';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Copyright from '../components/atoms/Copyright';
import SignUpCard from '../components/molecules/SignUpCard';
import { loginAdmin } from '../redux/actions/authAction';

function Home(props) {
  const { loginAdmin, auth: { isAuthenticated } } = props;
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <SignUpCard getLoginData={loginAdmin} />
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

Home.propType = {
  loginAdmin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps, { loginAdmin })(Home);
