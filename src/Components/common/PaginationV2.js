import { Button, Col, Input, Row } from 'reactstrap'

const PaginationV2 = ({
  previousDisabled,
  previousPageCall,
  currentPage,
  totalPageCount,
  nextDisabled,
  nextPageCalls,
  onPageInputChange
}) => {
  return (
    <Row className='justify-content-md-end justify-content-center align-items-center p-2'>
      <Col className='col-md-auto'>
        <div className='d-flex gap-1'>
          <Button
            color='primary'
            onClick={previousPageCall}
            disabled={previousDisabled}
          >
            {'<'}
          </Button>
        </div>
      </Col>
      <Col className='col-md-auto d-md-block'>
        <b>Page </b>
        <b>
          {currentPage || 0} of {totalPageCount || 0}
        </b>
      </Col>
      {/* <Col className='col-md-auto'>
        <Input
          type='number'
          style={{ width: 40 }}
          defaultValue={currentPage}
          onChange={onPageInputChange}
        />
      </Col> */}

      <Col className='col-md-auto'>
        <div className='d-flex gap-1'>
          <Button
            color='primary'
            onClick={nextPageCalls}
            disabled={nextDisabled}
          >
            {'>'}
          </Button>
        </div>
      </Col>
    </Row>
  )
}

export default PaginationV2
