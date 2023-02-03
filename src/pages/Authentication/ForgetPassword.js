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

const ForgetPasswordPage = () => {
  //meta title
  document.title =
    'Forget Password | Demo Template - React Admin & Dashboard Template'

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Please Enter Your Email')
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
                        <h5 className='welcome-text'>Forget Password !</h5>
                        <p className='sign-in-text'>Re-Password with demo.</p>
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
                    <div
                      className='alert alert-success text-center mb-4'
                      role='alert'
                    >
                      {' '}
                      Enter your Email and instructions will be sent to you!{' '}
                    </div>
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
                      <Row>
                        <Col className='mt-4 d-grid'>
                          <button
                            className='btn login-btn btn-block'
                            type='submit'
                            onClick={() => alert('Link has been successfully send on your email!')}
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

export default ForgetPasswordPage