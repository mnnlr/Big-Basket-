import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaHeadset, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <Container fluid className='bg-black text-white m-20 ml-10'>
            <Row id='spacee'></Row>
            <Container className='m-10 ml-10'>
                <Row >
                    <Col >
                        <h5></h5>

                        <ul typeof='null'>
                            <li>Bigbasket   </li>
                            <li>About Us</li>
                            <li>Become A bigbasket Rider</li>
                            <li>In News</li>
                            <li>Green bigbasket</li>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                            <li>Careers At bigbasket</li>
                            <li>bb Daily</li>
                            <li>bb Blog</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul type='null'>

                            <li> Help</li>
                            <li>FAQs</li><li>Contact Us</li>
                            <li>bb Wallet FAQs</li>
                            <li>bb Wallet T&</li>
                            <li>Vendor Connect</li>
                        </ul>
                    </Col>

                    <Col className='ml-8'>
                        <h1><b>BigBesket</b></h1>
                        <h5 id='mar'>1800 207 2777</h5>
                        <div id='iconssq' className='flex  space-x-6 text-4xl'>
                            <FaFacebookSquare />
                            <FaInstagramSquare />
                            <FaTwitterSquare />
                            <FaYoutubeSquare />
                        </div>

                    </Col>
                </Row>
                <hr></hr>
            </Container>
            <Row id='spacee'></Row>

        </Container>
    )
}