import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar, Nav, Container, Badge, NavDropdown } from 'react-bootstrap'
import { FaShoppingCart, FaUser} from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../assets/Shredcentral.png'
import { useLogoutMutation } from '../slices/usersApiSlice'
import SearchBox from './SearchBox'
import CategoryNavigation from './CategoryNavigation'
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
        <Navbar bg="primary" variant="dark" expand="xxl" collapseOnSelect fixed="top">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand className='logo'>
                    <img src={logo} alt="Shred Central" width="20" height="20" />
                 
                </Navbar.Brand>
              </LinkContainer>
              <CategoryNavigation/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"> 
                    <Nav className="ms-auto">
                      <SearchBox />
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

                        {userInfo && userInfo.isAdmin && (
                          <NavDropdown title='Admin' id='adminmenu'>
                            <LinkContainer to='/admin/userlist'>
                              <NavDropdown.Item>Users</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/admin/productlist'>
                              <NavDropdown.Item>Products</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/admin/orderlist'>
                              <NavDropdown.Item>Orders</NavDropdown.Item>
                            </LinkContainer>
                          </NavDropdown>
                        
                        )}
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>


    </header>
  )
}

export default Header