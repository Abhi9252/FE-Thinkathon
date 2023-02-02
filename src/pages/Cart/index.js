import React from 'react'
import { Card, Col, Container, Row } from 'reactstrap'
import PaginationV2 from '../../Components/common/PaginationV2'

const Cart = () => {
  return (
    <React.Fragment>
      <div className='page-content'>
        <Container fluid>
          {/* <Breadcrumb title='Starter'/> */}
          <Row>
            <Col xl={12}>
              <Card>
                <PaginationV2 />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Cart
