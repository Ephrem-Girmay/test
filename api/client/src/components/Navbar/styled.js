import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    height: 18rem;
    border-bottom: 1px solid #000;
    margin: 0 auto;

    color: var(--secondary-text);
    a {
        color: #475f45;

        &:hover {
            color: #e8590c;

            text-decoration: underline;
            text-underline-offset: 10px;
        }
    }
`;

export const Img = styled.img`
    margin-bottom: 4rem;
`;
export const Icon = styled.div`
    font-size: 2.4rem;
`;

export const Links = styled.ul`
    display: flex;
    gap: 2.4rem;
    list-style-type: none;
`;

export const StyledLink = styled.li`
    font-size: 3rem;
    text-transform: uppercase;
    font-size: 2.2rem;
    font-weight: 300;
    cursor: pointer;

    transition: 0.2s;

    letter-spacing: 2px;
`;

export const Left = styled.div`
    display: flex;
    flex: 1.6;
    gap: 10rem;
    align-items: center;
    justify-content: center;
`;

export const Middle = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`;
export const Right = styled.div`
    display: flex;
    flex: 1.5;
    gap: 2.4rem;
    align-items: center;
    justify-content: center;
`;
