import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as yup from 'yup';

interface IContactForm {
  onSubmit: (values: { name: string; number: string }, helpers: { resetForm: () => void }) => void;
}

let schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces without spaces at the beginning and end of the name'
    )
    .required('This field is required'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('This field is required'),
});

const FormError = ({ name }: { name: string }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => {
        return <div className='absolute top-0 right-0 text-sm w-[200px] p-1 text-blue bg-lavender rounded-lg border-2 border-chestnut'>{message}</div>;
      }}
    />
  );
};

const ContactForm = ({ onSubmit }: IContactForm) => {
  const handleSubmit = (values: { name: string; number: string }, { resetForm }: FormikHelpers<{ name: string; number: string }>) => {
    onSubmit(values, { resetForm }); 
    resetForm(); 
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className='flex flex-col items-start justify-center w-[450px] mb-8 rounded-lg border-4 border-chestnut bg-lavender'>
        <label className='w-full flex flex-col p-2 gap-2'>
          Name
          <div className='w-full relative'>
            <Field className='w-full py-2 px-4 rounded-lg border-2 border-blue text-inherit outline-none hover:outline-[3] hover:outline-blue hover:outline-offset-0 focus:outline-[3] focus:outline-blue focus:outline-offset-0' type="text" name="name" autoComplete="off" />
            <FormError name="name" />
          </div>
        </label>
        <label className='w-full flex flex-col p-2 gap-2'>
          Number
          <div className='w-full relative'>
            <Field className='w-full py-2 px-4 rounded-lg border-2 border-blue text-inherit outline-none hover:outline-[3] hover:outline-blue hover:outline-offset-0 focus:outline-[3] focus:outline-blue focus:outline-offset-0' type="tel" name="number" autoComplete="off" />
            <FormError name="number" />
          </div>
        </label>
        <button className='my-4 mx-auto p-2 text-white bg-chestnut border-0 rounded-lg transition-all duration-300 hover:scale-[1.05] hover:shadow-md focus:scale-[1.05] focus:shadow-md' type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
