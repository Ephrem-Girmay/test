// import { useNavigate } from 'react-router-dom';
import { Main, Wrapper, Info, Header, H4, P } from './styled';

const About = () => {
    // const navigate = useNavigate();
    // navigate('../');

    return (
        <Main>
            <Wrapper>
                <Header>
                    <h2>ABOUT</h2>
                </Header>
            </Wrapper>
            <Info>
                <H4>
                    Maj home plants Lorem Ipsum abxbans, and agvds ertrbe beba
                    wedere
                </H4>
                <P>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. Itd not
                    only five centuries, but also the lremaining essentially
                    unchanged. It was popularised in the cently with de
                </P>
            </Info>
        </Main>
    );
};

export default About;
