import { Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    <p>&copy; {currentYear} Shred Central</p>
                </Col>
                <Col className='text-center py-3'>
                    <p>Designed and Developed by <a href=">https://www.linkedin.com/in/khoa-tonthat-1978021a9/">Khoa Tonthat</a></p>
                </Col>
            </Row>
        </Container>

    </footer>
  )
}

export default Footer