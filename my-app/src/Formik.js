
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function FormikTest() {
  const initialValues = {
    email: '',
    password: ''
  }
  const validate = (values) => {
    let errors = {}
    if (!values.email) {
      errors.email = 'Requires';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address'
    }
    return errors
  }

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.info('vaules', values)
      setSubmitting(false)
    }, 1000);
  }
  return (
    <div>
      <h1>Anywhere in your aoo!</h1>
      <Formik
        initialValues= {initialValues}
        validate = {validate}
        onSubmit = {onSubmit}
      >
      {
        ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form  onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          </form>
        )
      }

      </Formik>
    </div>
  )
}

function FromikComponent() {
  const initialValues = {
    email: '',
    password: ''
  }
  const validate = (values) => {
    let errors = {}
    if (!values.email) {
      errors.email = 'Requires';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address'
    }
    if (values.password > 12 || values.password < 6) {
      errors.password = '密码长度为6~12位'
    }
    return errors
  }

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.info('vaules', values)
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false)
    }, 1000);
  }
  return (
    <Formik
      initialValues = {initialValues}
      validate = {validate}
      onSubmit = {onSubmit}
    >
    {
      ({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" render = { (msg) => (
            <div>
              <h5>密码格式：{ msg }</h5>
            </div>
          )} />
          <button type="submit" disabled={ isSubmitting }>
            submit2
          </button>
        </Form>
      )
    }
    </Formik>
  )
}

export default FromikComponent;