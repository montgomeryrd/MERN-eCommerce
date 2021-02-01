import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; Pigeon
                    </Col>
                </Row>
            </Container>
            the foot
        </footer>
    )
}

export default Footer;