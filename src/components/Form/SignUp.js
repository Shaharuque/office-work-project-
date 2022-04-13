import { useFormik } from 'formik';
import React, { useState } from 'react';

const SignUp = () => {
    const [user, setUser] = useState({});

    const validate = (values) => {
        const errors = {};
    
        if (!values.firstName) {
          errors.firstName = "Required";
        } else if (values.firstName.length > 15) {
          errors.firstName = "Must be 15 characters or less";
        }
        else if(!isNaN(values.firstName)){
            errors.firstName = "Must be String";
        }
    
        if (!values.lastName) {
          errors.lastName = "Required";
        } else if (values.lastName.length > 20) {
          errors.lastName = "Must be 20 characters or less";
        }
        else if(isNaN(values.lastName)){
            errors.lastName = "Must be Number";
        }
        
           
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
    
        return errors;
      };

      const formik = useFormik({
        initialValues: {
          firstName: "",
          lastName: "",
          email: "",
        },
        validate,
        // each input field validation check using Yup from '  yup'
        // validationSchema: Yup.object({
        //     firstName: Yup.string()
        //     .max(15, 'Must be 15 charecter or less')
        //     .required('Input Required Please!!!!!'),
    
        //     lastName: Yup.string()
        //     .required('Input Required Please!!!!!'),
    
        //     email:Yup.string()
        //     .required()
        // }),
        onSubmit: (values) => {
          //console.log(values);
          setUser(values);
        },
      });
      //console.log(formik);
      //console.log(formik.errors)
      console.log(formik.touched);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
        <div className="input-container">
          <label>First-Name: </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            /*two way binding data onChange event plus inputed value set */
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            required
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <p style={{ color: "red", margin: "0" }}>
              {formik.errors.firstName}
            </p>
          ) : null}
        </div>

        <div className="input-container">
          <label>Last-Name: </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            required
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <p style={{ color: "red", margin: "0" }}>
              {formik.errors.lastName}
            </p>
          ) : null}
        </div>

        <div className="input-container">
          <label>Email: </label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            required
          />
           {formik.touched.email && formik.errors.email ? (
            <p style={{ color: "red", margin: "0" }}>
              {formik.errors.email}
            </p>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
        </div>
    );
};

export default SignUp;