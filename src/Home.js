import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from "react-router-dom"
import { Form, Row, Col, Button } from 'react-bootstrap'
import logo from './images/wwssc.png'
import {Image} from 'react-bootstrap'

function Home() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar bg="dark" variant="dark">
                <Container>
                <Image src={logo} width='75' height='75' thumbnail />
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="about" className="nav-link">About</Link>
                        <Link to="/products" className="nav-link">View All</Link>
                        <Link to="/products/new" className="nav-link">New Product</Link>
                    </Nav>
                </Container>
            </Navbar>

            
            <Stack gap={3} className="col-md-10 mx-auto mt-3">
                <Outlet />
            </Stack>

            
            <footer className="footer mt-auto py-3 bg-light">
                <div className="container text-center">
                    <span className="text-muted">Warthogs Wizarding School Supply Co. | Designer: Garret Crouse</span>
                </div>
            </footer>
        </div>
    )
}

export default Home