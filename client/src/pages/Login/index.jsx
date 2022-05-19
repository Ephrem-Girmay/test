import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Main, Wrapper, Title } from './styled';

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Clicked sign in');

        const { username, password } = document.forms[0];
        console.log('username: ', username.value);
        console.log('password: ', password.value);

        try {
            const loginUser = await fetch('http://localhost:8080/users/login', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    username: username.value,
                    password: password.value,
                }),
            });

            // On a succesful login attempt, update state and redirect to homepage
            if (loginUser.status === 200) {
                const json = await loginUser.json();
                console.log('user logged in');
                setUser(json);
                navigate('../');
                console.log(user);
            } else {
                console.log('not logged in');
            }
        } catch (err) {
            console.error(err);
        }
    };

    // 		POST http://localhost:8080/users/login
    // Content-Type: application/json

    // {
    //    "username":"mahi5",
    //    "password": "test123"
    // }

    return (
        <Main>
            <Wrapper>
                <Title>LOGIN</Title>

                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                    />
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                    />
                    <Button>Sign in</Button>
                </Form>
            </Wrapper>
        </Main>
    );
};

export default Login;
