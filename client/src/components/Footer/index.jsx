import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../public/images/white_logo.png';

import {
    Main,
    Left,
    Center,
    Right,
    Img,
    Box,
    Links,
    StyledLink,
    SocialMediaContainer,
    SocialMediaIcon,
    Connect,
} from './styled';

const Footer = () => {
    return (
        <Main>
            <Left>
                <Link to="/">
                    <Img src={logo} alt="logo" />
                </Link>
            </Left>

            <Center>
                <Links>
                    <StyledLink>
                        <Link to="/">Shop</Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/">Cart</Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/">About</Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/">Contact</Link>
                    </StyledLink>
                </Links>
            </Center>
            <Right>
                <Connect>Connect</Connect>
                <SocialMediaContainer>
                    <SocialMediaIcon color="3b599">
                        <FaFacebookF />
                    </SocialMediaIcon>
                    <SocialMediaIcon color="3b599">
                        <FaInstagram />
                    </SocialMediaIcon>
                    <SocialMediaIcon color="3b599">
                        <FaTwitter />
                    </SocialMediaIcon>
                </SocialMediaContainer>
            </Right>
            <Box>© 2021 majhome group. All rights reserved</Box>
        </Main>
    );
};

export default Footer;
