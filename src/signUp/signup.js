import React from "react";
import { Formik,Form,Field } from "formik";
import * as Yup from "yup";

const Signup = () => {
  let tableSchema = {
    name: "",
    face: "",
  };

  let tableValidation = Yup.object({
    name: Yup.string().required("name required"),
    face: Yup.string().required("face is required"),
  });


  // let { handleSubmit, handleChange } = Formik({
  //   initialValues: tableSchema,
  //   validationSchema: tableValidation,
  //   onSubmit : ()=>{
  //       console.log("123456")
  //   }
  // });

  return (
    <div className="col-md-8 offset-md-2 mt-5">
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <span className="text-center">SignUP</span>
            <br />
            <br />
            <Formik
        initialValues={{ name: "", face: "" }}
        onSubmit={async (values) => {
        //   await new Promise((resolve) => setTimeout(resolve, 500));
        console.log("12345")
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
        <div className="form-group">
            <label>Name</label><br />
            <Field  className="form-group" name="name" type="text" />
        </div>
          <br />
          <div className="form-group">
            <label>Face</label><br />
          <input  className="form-group" name="face" type="text" />
          </div><br />
          <div className="form-group">
            
            <button className="form-control btn btn-success" type="submit">Submit</button>
            </div>
         
        </Form>
      </Formik>
            {/* <form onSubmit={()=>handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Face</label>
                <input
                  type="text"
                  name="face"
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <button className="form-control btn btn-success" type="submit">
                Submit
              </button>
            </form> */}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
