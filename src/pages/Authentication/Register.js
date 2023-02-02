import React, { useEffect } from 'react'
import {
  Row,
  Col,
  CardBody,
  Card,
  Alert,
  Container,
  Input,
  Label,
  Form,
  FormFeedback
} from 'reactstrap'

// Formik Validation
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { Link } from 'react-router-dom'

// import images
import profile from '../../assets/images/profile-img.png'
import logo from '../../assets/images/logo.svg'

const Register = props => {
  //meta title
  document.title = 'Register | Demo Template - React Admin & Dashboard Template'

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      email: '',
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Please Enter Your Email'),
      username: Yup.string().required('Please Enter Your Username'),
      password: Yup.string().required('Please Enter Your Password')
    }),
    onSubmit: values => {}
  })

  return (
    <React.Fragment>
      <div className='home-btn d-none d-sm-block'>
        <Link to='/' className='text-dark'>
          <i className='fas fa-home h2' />
        </Link>
      </div>
      <div className='account-pages my-5 pt-sm-5'>
        <Container>
          <Row className='justify-content-center'>
            <Col md={8} lg={6} xl={5}>
              <Card className='overflow-hidden content-box'>
                <div className='header-bg bg-soft'>
                  <Row>
                    <Col className='col-7'>
                      <div className='text-primary p-4'>
                        <h5 className='welcome-text'>Free Register</h5>
                        <p className='sign-in-text'>
                          Get your free Demo Template account now.
                        </p>
                      </div>
                    </Col>
                    <Col className='col-5 align-self-end'>
                      <img src={profile} alt='' className='img-fluid' />
                    </Col>
                  </Row>
                </div>
                <CardBody className='pt-0'>
                  <div>
                    <Link to='/'>
                      <div className='avatar-md profile-user-wid mb-4'>
                        <span className='avatar-title rounded-circle bg-light'>
                          <img
                            src={logo}
                            alt=''
                            className='rounded-circle'
                            height='34'
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className='p-2'>
                    <Form
                      className='form-horizontal'
                      onSubmit={e => {
                        e.preventDefault()
                        validation.handleSubmit()
                        return false
                      }}
                    >
                      <div className='mb-3'>
                        <Label className='form-label'>Email</Label>
                        <Input
                          id='email'
                          name='email'
                          className='form-control'
                          placeholder='Enter email'
                          type='email'
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ''}
                          invalid={
                            validation.touched.email && validation.errors.email
                              ? true
                              : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type='invalid'>
                            {validation.errors.email}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className='mb-3'>
                        <Label className='form-label'>Username</Label>
                        <Input
                          name='username'
                          type='text'
                          placeholder='Enter username'
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.username || ''}
                          invalid={
                            validation.touched.username &&
                            validation.errors.username
                              ? true
                              : false
                          }
                        />
                        {validation.touched.username &&
                        validation.errors.username ? (
                          <FormFeedback type='invalid'>
                            {validation.errors.username}
                          </FormFeedback>
                        ) : null}
                      </div>
                      <div className='mb-3'>
                        <Label className='form-label'>Password</Label>
                        <Input
                          name='password'
                          type='password'
                          placeholder='Enter Password'
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.password || ''}
                          invalid={
                            validation.touched.password &&
                            validation.errors.password
                              ? true
                              : false
                          }
                        />
                        {validation.touched.password &&
                        validation.errors.password ? (
                          <FormFeedback type='invalid'>
                            {validation.errors.password}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className='mt-5 d-grid'>
                        <button
                          className='btn login-btn btn-block '
                          type='submit'
                        >
                          Register
                        </button>
                      </div>

                      <div className='mt-4 text-center'>
                        <p className='mb-0 forgot-text'>
                          By registering you agree to the Demo Template{' '}
                          <Link to='#' className='text-primary forgot-text'>
                            Terms of Use
                          </Link>
                        </p>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className='mt-5 text-center forgot-text'>
                <p>
                  Already have an account ?{' '}
                  <Link
                    to='/login'
                    className='font-weight-medium text-primary forgot-text'
                  >
                    {' '}
                    Login
                  </Link>{' '}
                </p>
                <p className='forgot-text'>
                  © {new Date().getFullYear()} Demo Template. Crafted with{' '}
                  <i className='mdi mdi-heart text-danger' /> by Demo
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Register