import React from 'react'

import {
  Row,
  Col,
  CardBody,
  Card,
  Container,
  Form,
  Input,
  FormFeedback,
  Label
} from 'reactstrap'

//redux

import { Link } from 'react-router-dom'

// Formik validation
import * as Yup from 'yup'
import { useFormik } from 'formik'

// import images

import profile from '../../assets/images/profile-img.png'
import logo from '../../assets/images/logo.svg'
import { BiLockOpenAlt } from 'react-icons/bi'

const Login = props => {
  //meta title
  document.title = 'Login | Demo Template - React Admin & Dashboard Template'

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      email: '' || '',
      password: '' || ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Please Enter Your Email'),
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
                    <Col xs={7}>
                      <div className='text-primary p-4'>
                        <h5 className='welcome-text'>Welcome Back !</h5>
                        <p className='sign-in-text'>
                          Sign in to continue to Demo Template.
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
                    <Link to='/' className='auth-logo-light'>
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
                        <Label className='form-label'>Password</Label>
                        <Input
                          name='password'
                          value={validation.values.password || ''}
                          type='password'
                          placeholder='Enter Password'
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
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

                      <div className='form-check'>
                        <input
                          type='checkbox'
                          className='form-check-input'
                          id='customControlInline'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='customControlInline'
                        >
                          Remember me
                        </label>
                      </div>

                      <div className='mt-3 d-grid'>
                        <button
                          className='btn login-btn btn-block'
                          type='submit'
                        >
                          Log In
                        </button>
                      </div>

                      <div className='mt-4 text-center'>
                        <Link to='/forget-password' className='forgot-text'>
                          {/* <BiLockOpenAlt className="mr-2"/> */}
                          Forgot your password?
                        </Link>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className='mt-5 text-center forgot-text'>
                <p>
                  Don&#39;t have an account ?{' '}
                  <Link
                    to='/register'
                    className='fw-medium text-primary forgot-text color-primary f-5'
                  >
                    {' '}
                    Signup now{' '}
                  </Link>{' '}
                </p>
                <p>
                  © {new Date().getFullYear()} Demo Template. Crafted with{' '}
                  <i className='mdi mdi-heart text-danger forgot-text' /> by
                  Demo
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Login
