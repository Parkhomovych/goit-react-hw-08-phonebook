import { Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Input, MyForm, BoxInForm, Label, Button } from './ContactForm.styled';
export const ContactForm = () => {
  const dispatch = useDispatch();
  const listContacts = useSelector(selectContacts);

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(value, actions) => {
        if (listContacts.some(item => item.name.trim() === value.name.trim())) {
          alert(`${value.name} is already in contacts`);
        } else {
          dispatch(addContact(value));
        }
        actions.resetForm();
      }}
    >
      {() => (
        <MyForm>
          <Field name="name">
            {({ field, form }) => (
              <BoxInForm>
                <Label>Name</Label>
                <Input {...field} />
                <div>{form.errors.name}</div>
              </BoxInForm>
            )}
          </Field>
          <Field name="number">
            {({ field, form }) => (
              <BoxInForm>
                <Label>Number</Label>
                <Input {...field} type="tel" name="number" />
                <div>{form.errors.number}</div>
              </BoxInForm>
            )}
          </Field>
          <Button type="submit">Add contact</Button>
        </MyForm>
      )}
    </Formik>
  );
};

export default ContactForm;
