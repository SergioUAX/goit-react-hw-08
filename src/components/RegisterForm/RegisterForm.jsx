import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';
import { TextField, Button, Box, Typography, Card, CardContent, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/material/styles';

const RegisterForm = () => { 

  const dispatch = useDispatch();
  
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => { 
    console.log(values);
    dispatch(registerThunk(values));
  }

  const CustomTextField = ({ field, form, ...props }) => (
    <TextField
      {...field}
      {...props}
      fullWidth
      margin="normal"
      variant="outlined"
    />
  );

  const CenteredBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
  }));
  
  return (
    <CenteredBox>
      <Card sx={{ width: 400, padding: 2 }}>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom align="center">
            Register
          </Typography>

          <Formik initialValues={initialValues} onSubmit={handleSubmit}>            
              <Form>
                <Field
                  name="name"
                  type="text"
                  label="Name"
                  component={CustomTextField}
                />

                <Field
                  name="email"
                  type="email"
                  label="Email"
                  component={CustomTextField}
                />

                <Field
                  name="password"
                  type="password"
                  label="Password"
                  component={CustomTextField}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2, mb: 1 }}
                >
                  Register
                </Button>

                <Typography variant="body2" align="center">
                  <MuiLink
                    component={Link}
                    to="/login"
                    underline="hover"
                    color="text.secondary"
                  >
                    Already have an account? Login...
                  </MuiLink>
                </Typography>
              </Form>
          </Formik>
        </CardContent>
      </Card>
    </CenteredBox>  
  )
};

export default RegisterForm;
