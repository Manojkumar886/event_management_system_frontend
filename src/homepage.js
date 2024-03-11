import { Container, Nav, NavItem, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "react-bootstrap"

export const Homepage = () => {
    return (
        <>
            <Navbar expand="lg" bg="info" >
                <Container>
                    <Navbar.Brand href="/">EventManagement</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/Register">RegisternewEvent</Nav.Link>
                            <Nav.Link href="/listall">ListallEventdetails</Nav.Link>
                        </Nav>
                        <div>
                            <button className="btn btn-outline-dark text-light fst-italic">LOGOUT</button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}