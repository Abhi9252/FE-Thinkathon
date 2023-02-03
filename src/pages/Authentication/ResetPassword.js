import React from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  Container,
  FormFeedback,
  Input,
  Label,
  Form
} from 'reactstrap'

import { Link } from 'react-router-dom'

// Formik Validation
import * as Yup from 'yup'
import { useFormik } from 'formik'

// import images
import profile from '../../assets/images/profile-img.png'
import logo from '../../assets/images/logo.svg'

const ResetPassword = () => {
  //meta title
  document.title =
    'Forget Password | Demo Template - React Admin & Dashboard Template'

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      password: '',
      confirm_password: ''
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(RegExp('(.*[a-z].*)'), 'At least lowercase letter')
        .matches(RegExp('(.*[A-Z].*)'), 'At least uppercase letter')
        .matches(RegExp('(.*[0-9].*)'), 'At least one number')
        .required('New password is required'),
      confirm_password: Yup.string()
        .when('password', {
          is: val => (val && val.length > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref('password')],
            'Both password need to be the same'
          )
        })
        .required('Confirm Password Required')
    }),
    onSubmit: () => {}
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
                <div className='header-bg bg-soft bg-soft-primary'>
                  <Row>
                    <Col xs={7}>
                      <div className='text-primary p-4'>
                        <h5 className='welcome-text'>Create New Password !</h5>
                        <p className='sign-in-text'>Write your new password.</p>
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
                      <div className='mb-1'>
                        <Label className='form-label'>New Password</Label>
                        <Input
                          name='password'
                          className='form-control'
                          placeholder='Enter new password'
                          type='password'
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
                      <div id='passwordInput' className='form-text m-0'>
                        Must be at least 8 characters.
                      </div>
                      <div className='mb-1 mt-3'>
                        <Label className='form-label'>Confirm Password</Label>
                        <Input
                          name='confirm_password'
                          className='form-control'
                          placeholder='Confirm password'
                          type='password'
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.confirm_password || ''}
                          invalid={
                            validation.touched.confirm_password && validation.errors.confirm_password
                              ? true
                              : false
                          }
                        />
                        {validation.touched.confirm_password && validation.errors.confirm_password ? (
                          <FormFeedback type='invalid'>
                            {validation.errors.confirm_password}
                          </FormFeedback>
                        ) : null}
                      </div>
                      <Row>
                        <Col className='mt-4 d-grid'>
                          <button
                            className='btn login-btn btn-block'
                            type='submit'
                          >
                            Reset
                          </button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className='mt-5 text-center '>
                <p className='forgot-text'>
                  Go back to{' '}
                  <Link
                    to='login'
                    className='font-weight-medium text-primary forgot-text'
                  >
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

export default ResetPassword
