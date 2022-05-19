import { useState } from 'react';
// import { Link } from 'react-router-dom';

import {
    Main,
    Wrapper,
    Form,
    Input,
    Button,
    Aggreement,
    Title,
    // StyledLink,
} from './styled';

const Register = () => {
    // const navigate = useNavigate();
    const [user, setUser] = useState({});
    console.log(user);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Clicked create');

        const {
            firstname,
            lastname,
            email,
            username,
            password,
            confirmPassword,
        } = document.forms[0];
        console.log('firstname: ', firstname.value);
        console.log('lastname: ', lastname.value);
        console.log('username: ', username.value);
        console.log('email: ', email.value);
        console.log('password: ', password.value);
        console.log('confirmPassword: ', confirmPassword.value);

        try {
            const registerUser = await fetch('http://localhost:8080/users', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    firstname: firstname.value,
                    lastname: lastname.value,
                    username: username.value,
                    email: email.value,
                    password: password.value,
                    confirmPassword: confirmPassword.value,
                }),
            });

            if (registerUser.status === 200) {
                const res = await registerUser.json();
                console.log('user is created');
                setUser(res.data);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Main>
            <Wrapper>
                <Title>REGISTER</Title>

                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="first name"
                    />
                    <Input
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="last name"
                    />
                    <Input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="username"
                    />
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                    />
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                    />
                    <Input
                        type="confirmPassword"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="confirm Password"
                    />
                    <Aggreement>
                        By creating an account, I consent to the processing of
                        my personal data in accordance with the{' '}
                        <b>PRIVACY POLICY</b>
                    </Aggreement>
                    <Button>
                        Create
                        {/* <StyledLink>
                            <Link to="/login">Creat</Link>
                        </StyledLink> */}
                    </Button>
                </Form>
            </Wrapper>
        </Main>
    );
};

export default Register;
