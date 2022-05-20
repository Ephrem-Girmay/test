import styled from 'styled-components';

export const Main = styled.div`
    position: relative;
    display: flex;
    height: 20rem;
    align-items: center;
    justify-content: center;

    margin: 0 auto;
    background: var(--primary-text);
    color: var(--secondary-text);

    a {
        color: var(--secondary-text);
    }
`;

export const Left = styled.div`
    flex: 1.1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
`;

export const Center = styled.div`
    display: flex;
    flex: 1;
    padding: 20px;
    justify_content: center;
    align-items: center;
`;

export const Img = styled.img`
    width: 50%;
    margin-bottom: 5rem;
`;

export const Links = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 6.1rem;
    list-style-type: none;
    font-size: 16px;
`;

export const StyledLink = styled.li`
    display: flex;
    justify-content: end;
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    justify-content: center;
    flex-direction: column;
`;
export const Connect = styled.div`
    font-size: 2rem;
    display: flex;
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    gap: 3rem;

    align-items: center;
    justify-content: center;
`;

export const SocialMediaIcon = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
    border-radius: 50%;
    color: #ffff;
    font-size: 2.5rem;
`;
export const Box = styled.div`
    position: absolute;
    height: 4rem;
    width: 100%;
    background: #3d4a2e;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;
