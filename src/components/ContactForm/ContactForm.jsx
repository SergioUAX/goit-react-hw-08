import { nanoid } from 'nanoid';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

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
      <Paper elevation={3} sx={{ p: 3, mt: 4, mb: 4, maxWidth: 400 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Add New Contact
        </Typography>
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={addContactSchema}
        >
        {({ errors, touched, handleChange, values }) => (
          <Form>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                id={nameId}
                name="name"
                label="Name"
                value={values.name}
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                sx={{ width: '350px', maxWidth: '100%' }}
              />

              <TextField
                id={numberId}
                name="number"
                label="Phone Number"
                value={values.number}
                onChange={handleChange}
                error={touched.number && Boolean(errors.number)}
                helperText={touched.number && errors.number}
                sx={{ width: '350px', maxWidth: '100%' }}
              />

              <Button variant="contained" color="primary" type="submit">
                Add contact
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Paper>
    );
};

export default ContactForm;
