import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';
import { TextField, Button, Box, Typography, Card, CardContent, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/material/styles';


const LoginForm = () => { 
  const dispatch = useDispatch();

  const initialValues = {    
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => {     
    dispatch(loginThunk(values));
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


const CenteredBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80vh',
}));

  return (    
      // <div className="loginForm">                  
      //       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      //         <Form>
      //           <fieldset>               
      //             <label>Email</label>
      //             <Field name = 'email' type="email" placeholder="Email" />
      //             <label>Password</label>
      //             <Field name = 'password' type="password" placeholder="Password" />
      //             <Link to = '/register' >Don't have account? Register... </Link>                  
      //             <button type='submit'>Log In</button>
      //           </fieldset>
      //         </Form>
      //       </Formik>                       
      // </div>       
      <CenteredBox>
      <Card sx={{ width: 400, padding: 2 }}>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom align="center">
            Login
          </Typography>

          <Formik initialValues={initialValues} onSubmit={handleSubmit}>            
              <Form>
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
                  Log In
                </Button>

                <Typography variant="body2" align="center">
                  <MuiLink component={Link} to="/register" underline="hover" color="text.secondary">
                    Don&apos;t have an account? Register...
                  </MuiLink>
                </Typography>
              </Form>            
          </Formik>
        </CardContent>
      </Card>
    </CenteredBox>
  )
};

export default LoginForm;
