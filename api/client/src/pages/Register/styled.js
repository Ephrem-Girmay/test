import styled from 'styled-components';

export const Main = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-width: 400px;
    height: 70vh;
    background-image: url(${require(`../../public/images/pant3.jpg`)});
    background-size: cover;
`;
export const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    height: 93%;
    transform: translateX(-50%) translateY(-50%);
    width: 35%;
    padding: 2rem;
    background: rgba(236, 240, 241, 0.4);
    box-shadow: 0 0 12px rgb(72, 70, 70, 0.8);
    border-radius: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 3rem;
    width: 70%;
`;
export const Input = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1.6rem 1.5rem;
    background: rgba(255, 255, 255, 0.8);
    font-size: 2rem;
    border-radius: 5px;
    border: none;
    color: rgba(10, 10, 07, 0.8);
`;

export const Aggreement = styled.span`
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.7);
`;
export const Title = styled.main`
    font-size: 3.3rem;
    color: #fff;
`;
export const StyledLink = styled.div`
    color: white;
`;
export const Link = styled.div`
    color: white;
`;
export const Button = styled.button`
    display: flex;
    align-items: center;
    font-family: inherit;
    font-weight: 500;
    font-size: 18px;
    padding: 1.5rem 4.5rem;
    color: white;

    background: linear-gradient(
        0deg,
        rgba(20, 167, 62, 1) 0%,
        rgba(102, 247, 113, 1) 100%
    );
    border: none;
    box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
    letter-spacing: 0.05em;
    border-radius: 20em;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:hover {
        box-shadow: 0 9px 34px -4px rgba(0, 0, 0, 0.5);
    }
    &:active {
        box-shadow: 0 0.3em 1em -0.5em #54a70e18;
    }
`;
