import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 5rem;

    padding: 10rem;
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 70rem;
    border-radius: 25px;
`;

export const Image = styled.img`
    flex: 1;
    transition: all 0.3s;
    width: 100%;
    height: 70%;
    &:hover {
        transition: 1s all ease-in-out;

        transform: scale(1.1);
    }
`;
export const Details = styled.div`
    display: flex;
    flex: 2;
    margin-top: 7rem;
    gap: 2rem;

    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const Icon2 = styled.div`
    right: 1rem;
    font-size: 3.4rem;
    color: #80461b;
    cursor: pointer;

    &:hover {
        transition: 0.3s all ease-in-out;

        font-size: 3.9rem;
    }
`;
export const Price = styled.div`
    font-size: 2.8rem;
    font-weight: 500;
    color: green;
`;
export const Title = styled.div`
    font-size: 2.4rem;
    font-weight: 500;

    color: green;
`;
