import styled from 'styled-components';

export const Main = styled.main`
    position: relative;
    width: 100vw;
    height: 70vh;
    // background-image: url(${require(`../../public/images/background.png`)});

    background-size: cover;
`;
export const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 40%;
    background: #f9f9f9;
    // background: linear-gradient(45deg, #11998e, #38ef7d);
    transform: translateX(-50%) translateY(-50%);
    width: 60%;
    display: flex;
    // box-shadow: 0 0 12px rgb(72, 70, 70, 0.8);
    // border-radius: 20px;
    flex-direction: row;
    margin: 0 auto;
`;
export const Container1 = styled.div`
    flex: 2;
    display: flex;
    flex-direction: row;
    bordr-right: 1px solid black;
    gap: 2px;
    background: rgba(0, 0, 0, 0.01);
`;
export const ImageWrap = styled.div`
    flex: 3;
    display: flex;
    gap: 2px;
`;
export const ImagesWrap = styled.div`
    flex: 1;
`;

export const Container = styled.div`
    padding: 2.4rem;
    flex: 1;
    display: flex;
    background: rgba(102, 247, 113, 0.2);
    flex-direction: column;
    gap: 2rem;
    border: solid rgb(72, 70, 70, 0.5) 1px;
`;
export const Image = styled.img`
    width: 100%;
    border: solid rgb(72, 70, 70, 0.5) 1px;
    padding: 10px;
`;
export const ProductInfoContainer = styled.div``;
export const Title = styled.h1`
    font-size: 3.3rem;
    color: green;
    margin-top: 2rem;
`;
export const Price = styled.div`
font-size: 3.3rem;
    color: green;
    margin: 2rem 0 0 2rem;
    font-weight:300:
    `;

export const AddContainer = styled.div`
    display: flex;
    margin-left: 2rem;
    flex-direction: row;
    gap: 6rem;
`;
export const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background: #579500;
    padding: 1rem 2rem;
`;
export const Amount = styled.span`
    font-size: 1.8rem;
    color: #fff;
`;
export const Remove = styled.span`
    font-size: 1.8rem;
    color: #fff;
`;
export const Add = styled.span`
    font-size: 1.8rem;
    color: #fff;
`;
export const Button = styled.button`
    border: none;
    background: #579500;
    padding: 0 2rem;
    color: #fff;
    cursor: pointer;
`;

export const Description = styled.h3`
    margin-top: 2rem;
    padding-left: 2rem;
    font-weight: 300;
    font-size: 2.4rem;
    line-height: 1.2;
`;

// <Wrapper>
// <Container>
// 	<Image src={product.img} />
// </Container>
// <Container>
// 	<ProductInfoContainer>
// 		<Title></Title>
// 		<Description></Description>
// 		<Price></Price>
// 	</ProductInfoContainer>
// 	<AddContainer>
// 		<AmountContainer>
// 			<Remove onClick={() => handleQuantity('dec')} />
// 			<Amount>{quantity}</Amount>
// 			<Add onClick={() => handleQuantity('inc')} />
// 		</AmountContainer>
// 		<Button onClick={handleClick}>ADD TO CART</Button>
// 	</AddContainer>
// </Container>
// </Wrapper>;
