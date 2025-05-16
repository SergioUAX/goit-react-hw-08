// import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { TextField, Button, Box, Typography } from '@mui/material';

const initialValues = {
  name: '',
  number: '',
};

const addContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    number: Yup.string()
        .matches(/^\+?(\d+(-\d+)*|\d+)$/, 'Only digits, "-" and optional leading "+" allowed')
        .test(
            'valid-digits-count',
            'Number must contain at least 3 digits',
            value => {
                if (!value) return false;
                const digitsCount = (value.match(/\d/g) || []).length;
                return digitsCount >= 3;
            }
        )
        .max(50, 'Number must be at most 50 characters long')
        .required('Required'),
});

const ContactForm = () => {
    const dispatch = useDispatch();
    const nameId = nanoid();
    const numberId = nanoid();

    const handleSubmit = (values, actions) => {        
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
        };
        dispatch(addContact(newContact));
        actions.resetForm();
    };

    return (
        // <Formik
        //     initialValues={initialValues}
        //     onSubmit={handleSubmit}
        //     validationSchema={addContactSchema}>
        //     <Form className={styles.formikForm}>
        //         <div>
        //             <label htmlFor={nameId}>Name</label>
        //             <Field type="text" name="name" id={nameId} />
        //             <ErrorMessage name="name" component="span" />
        //         </div>
        //         <div>
        //             <label htmlFor={numberId}>Number</label>
        //             <Field type="text" name="number" id={numberId} />
        //             <ErrorMessage name="number" component="span" />
        //         </div>
        //         <button type="submit">Add contact</button>
        //     </Form>
        // </Formik>
        <Box sx={{ mb: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Add New Contact</Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={addContactSchema}
      >
        {({ errors, touched, handleChange, values }) => (
          <Form>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
              <TextField
                fullWidth
                id={nameId}
                name="name"
                label="Name"
                value={values.name}
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />

              <TextField
                fullWidth
                id={numberId}
                name="number"
                label="Phone Number"
                value={values.number}
                onChange={handleChange}
                error={touched.number && Boolean(errors.number)}
                helperText={touched.number && errors.number}
              />
            </Box>

            <Button variant="contained" color="primary" type="submit">
              Add contact
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
    );
};

export default ContactForm;
