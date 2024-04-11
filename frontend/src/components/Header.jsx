import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar, Nav, Container, Badge, NavDropdown } from 'react-bootstrap'
import { FaShoppingCart, FaUser} from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../assets/logo.png'
import { useLogoutMutation } from '../slices/usersApiSlice'
import { logout } from '../slices/authSlice'





const Header = () => {
  const { cartItems } = useSelector(state => state.cart)
  const { userInfo } = useSelector(state => state.auth)

  const [logoutApiCall] = useLogoutMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = async() => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())   
      navigate('/login')
    } catch (error) {
      console.error('Failed to logout:', error)
    }
  }


  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>
                    <img src={logo} alt="Shred Central" width="50" height="50" />
                  Shred Central
                </Navbar.Brand>
              </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to="/cart">
                          <Nav.Link>
                            <FaShoppingCart /> Cart
                            {cartItems.length > 0 && (
                              <Badge pill bg="success" style={{marginLeft: '5px'}}>
                                {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                              </Badge>
                            )}
                          </Nav.Link>
                        </LinkContainer>
              
                        { userInfo ? (
                          <NavDropdown title={userInfo.name} id='username'>
                    
                            <LinkContainer to='/profile'>
                              <NavDropdown.Item>Profile</NavDropdown.Item>
                            </LinkContainer>
                          <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                          </NavDropdown>
                        ) : (
                           <LinkContainer to="/login">
                           <Nav.Link>
                             <FaUser /> Sign In
                           </Nav.Link>
                         </LinkContainer>
                        )}
                       
                    </Nav>
                </Navbar.Collapse>
                
            </Container>

        </Navbar>


    </header>
  )
}

export default Header