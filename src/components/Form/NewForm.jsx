import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const NewForm = () => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      password: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string()
                   .required('No password provided.') 
                   .min(8, 'Password is too short - should be 8 chars minimum.')
                   .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    })
  });

  
   
  return (
    <div className="mt-5 p-5">
        <form action="" onSubmit={formik.handleSubmit}>
            <div className="form-group mb-3">
              <input type="text" name="firstName" value={formik.firstName} onChange={formik.handleChange} placeholder='Name'/>
              <br />  
              {
                formik.touched.firstName && formik.errors.firstName && (
                  <strong style={{color: 'red'}}>{formik.errors.firstName}</strong>
                )
              }
            </div>

            <div className="form-group mb-3">
              <input type="text" name="email" value={formik.email} onChange={formik.handleChange}  placeholder='Email'/>
              <br />  
              {
                formik.touched.email && formik.errors.email && (
                  <strong style={{color: 'red'}}>{formik.errors.email}</strong>
                )
              }
            </div>

            <div className="form-group mb-3">
              <input type="password" name="password" value={formik.password} onChange={formik.handleChange}  placeholder='Password'/>
              <br />  
              {
                formik.touched.password && formik.errors.password && (
                  <strong style={{color: 'red'}}>{formik.errors.password}</strong>
                )
              }
            </div>

          
            <div className="form-group">
                <button className="btn btn-dark" type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default NewForm;