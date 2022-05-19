import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaCartPlus } from 'react-icons/fa';

import {
    Wrapper,
    Price,
    Container,
    Image,
    Icon2,
    Title,
    Details,
} from './styled';

const Product = () => {
    let navigate = useNavigate();
    const [products, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch(`http://localhost:8080/products/`);
                console.log('Fetched product');
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                console.log(err);
                console.log("Product couldn't be found.");
            }
        };

        getProduct();
    }, []);

    console.log('products: ', products);
    // check if the products exists
    if (products) {
        return (
            // map through the products , and disply each of the times
            <Container>
                {products.map((item, index) => (
                    // was having an error that states that children needs a key , so we added the index key to wrapper
                    <Wrapper key={index}>
                        <Image
                            onClick={() => {
                                console.log('Go to product: ', item._id);
                                navigate(`./${item._id}`);
                            }}
                            src={item.img}
                        />

                        <Details>
                            <Title>{item.title ? item.title : 'product'}</Title>
                            <Price>${item.price ? item.price : '$10.00'}</Price>
                            <Icon2
                                onClick={() => {
                                    console.log('Add clicked item to cart');
                                }}
                            >
                                <FaCartPlus />
                            </Icon2>
                        </Details>
                    </Wrapper>
                ))}
            </Container>
        );
    }
};

export default Product;
