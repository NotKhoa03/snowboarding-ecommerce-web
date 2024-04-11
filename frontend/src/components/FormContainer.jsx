import { Container, Row, Col } from 'react-bootstrap'


//Center login form
const FormContainer = ({ children }) => {
  return (
    <Container>
        <Row className='justify-content-md-center'>
            <Col xs={12} md={6}>
                {children}
            </Col>
        </Row>
    </Container>
  )
}

export default FormContainer