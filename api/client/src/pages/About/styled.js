import styled from 'styled-components';

export const Main = styled.main`
    height: 70vh;
    display: flex;
    flex-direction: row;
    background-image: url(${require(`../../public/images/plant4.png`)});
    background-size: cover;
`;
export const Wrapper = styled.main`
    position: relative;

    background-size: cover;
    width: 20%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const Header = styled.h2`
    position: absolute;

    font-size: 6.4rem;
    font-weight: bold;
    color: green;
    left: 50%;
    top: 20%;
`;

export const Info = styled.main`
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 15%;
    top: 40%;
    width: 40%;
    gap: 3rem;
`;
export const H4 = styled.h4`
    display: flex;
    color: green;
    height: 30%;
    font-size: 3.4rem;
    align-items: flex-end;
    line-height: 1.1;
    padding-left: 3rem;

    
    }
`;
export const P = styled.p`
    padding-left: 3rem;

    font-size: 2.4rem;
    line-height: 1.5;
`;
