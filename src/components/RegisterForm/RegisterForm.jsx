import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

const RegisterForm = () => { 
  
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => { 
    console.log(values);
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <Field name = 'name' type="name" className="input" placeholder="Name" />
                  <label className="label">Email</label>
                  <Field name = 'email' type="email" className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <Field name = 'password' type="password" className="input" placeholder="Password" />
                  <Link to='/login' className="link link-hover">Already have account? Login... </Link>
                  <button type='submit' className="btn btn-neutral mt-4">Register</button>
                </fieldset>
              </Form>
            </Formik>             
          </div>
        </div>
      </div>
    </div>    
)};
export default RegisterForm;