import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import logo from '../../public/images/dark_logo.png';
import {
    Nav,
    Img,
    Links,
    StyledLink,
    Left,
    Middle,
    Right,
    Icon,
} from './styled';
import { FaCartPlus } from 'react-icons/fa';

const Navbar = () => {
    return (
        <Nav>
            <Left>
                <Link to="/">
                    <Img src={logo} alt="logo" />
                </Link>

                <Links>
                    <StyledLink>
                        <Link to="/">Subscribe</Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/products">Shop</Link>
                    </StyledLink>
                </Links>
            </Left>
            <Middle>
                <SearchBar />
            </Middle>
            <Right>
                <Links>
                    <StyledLink>
                        <Link to="/About">About</Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/login">Login</Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/register">Register</Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/">
                            {' '}
                            <Icon>
                                <FaCartPlus />
                            </Icon>
                        </Link>
                    </StyledLink>
                </Links>
            </Right>
        </Nav>
    );
};

export default Navbar;
