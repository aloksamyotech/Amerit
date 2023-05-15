import React from 'react'
import Table from 'react-bootstrap/Table';
import { Formik,Form,Field, ErrorMessage } from "formik";


import Navbar from '../Nav/navbar'
const Home = () => {
  return (
    <>
  <div className="App">
     <center>
       <h1>Register a new account</h1>
       <Formik
         initialValues={{ fullname: "", email: "", password: "" }}
         validate={(values) => {
           const errors = {};
           if (!values.fullname) {
             errors.fullname = "Required";
           }

           if (!values.email) {
             errors.email = "Required";
           } else if (
             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
           ) {
             errors.email = "Invalid email address";
           }
           if (!values.password) {
             errors.password = "Required";
           }
           return errors;
         }}

         onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
       >
         {({ isSubmitting }) => (
           <Form  className="col-md-4">
             <Field
               className="form-control"
               type="text"
               name="fullname"
               placeholder="Enter your fullname"
             />
             <ErrorMessage name="fullname" component="div" />
             <br />

             <Field   className="form-control"
               type="email"
               name="email"
               placeholder="Enter email address"
             />
             <ErrorMessage name="email" component="div" />
             <br />
             <Field   className="form-control" type="password" name="password" />
             <ErrorMessage name="password" component="div" />

             <button type="submit" disabled={isSubmitting}>
               Submit
             </button>
           </Form>
         )}
       </Formik>
     </center>
   </div>
    </>

  )
}

export default Home