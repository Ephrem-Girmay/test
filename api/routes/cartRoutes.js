import express from 'express';
import Cart from '../models/cartModel.js';
import Product from '../models/productModel.js';
import { ObjectId } from 'mongodb';

const addItemtoCart = async (req, res) => {
    let { userId, productId } = req.body;

    const quantity = req.body.quantity * 1;
    console.log(quantity, '🧨🧨🧨');
    try {
        // changes the quanity to number

        // get users Cart--

        let cart = await Cart.findOne({ userId: userId });

        const prodcutDetails = await Product.findOne({ productId: productId });
        // check if the product exists
        if (!prodcutDetails) {
            return res.status(500).json({ message: 'Product not found' });
        }

        // check if the cart exists
        if (cart) {
            console.log('hello');
            let indexFound = cart.items.findIndex(
                (item) => item.prodctId === productId
            );
            // checks if the product exists

            if (indexFound != -1) {
                console.log('hello');
                //  find the item and increase the quanity
                cart.items[indexFound].quanity =
                    cart.items[index].quanity + quantity;
                // find the time with that index and update the total price
                cart.items[indexFound].price = prodcutDetails.price;
                cart.items[indexFound].total =
                    cart.items[indexFound].quanity * price;
                // set the price of the product

                // loop through  the prodcut item and get the item toal of eac item , and then reduce to ge the total
                cart.subTotal = cart.items
                    .map((item) => item.total)
                    .reduce((acc, curr) => acc + curr);

                // if quanity exists, add the item in the arrary
            } else if (quantity > 0) {
                cart.items.push({
                    productId: productId,
                    quantity: quantity,
                    price: prodcutDetails.price,
                    total: parseInt(prodcutDetails.price * quantity),
                });

                cart.subTotal = cart.items
                    .map((item) => item.total)
                    .reduce((acc, curr) => acc + curr);
            } else {
                return res.status(400).json({
                    code: 400,
                    message: 'invalid request ',
                });
            }
            var data = await cart.save();
        } else {
            const cartData = {
                userId: userId,
                items: [
                    {
                        productId: productId,
                        quantity: quantity,
                        total: parseInt(prodcutDetails.price * quantity),
                        price: prodcutDetails.price,
                    },
                ],
                subTotal: parseInt(prodcutDetails.price * quantity),
            };
            cart = new Cart(cartData);
            data = await cart.save();
        }
        res.status(200).json({
            status: 'success',
            data: data,
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            type: 'invalid',
            message: err.message,
            err: err,
        });
    }
};
const getCart = async (req, res) => {
    try {
        const cart = await Cart.find();
        res.status(200).json({
            status: 'success',
            data: cart,
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'failed',
            message: err.message,
            err: err,
        });
    }
};
const removeItem = async (req, res) => {
    const { productId, userId } = req.body;

    try {
        let cart = await Cart.findOne({ userId: userId });

        const isItem = cart.items.findIndex((item) => {
            return item.productId.toString() === productId;
        });
        console.log(isItem, '🧨');
        if (isItem != -1) {
            console.log(cart.items.length);
            cart.items.splice(isItem, 1);
        }
        await cart.save();
        return res.status(200).json({ status: 'success' });
        // if the cart exists delete
    } catch (err) {
        console.log(err);

        res.status(400).json({ status: 'error', error: err.message });
    }
};

const cartRoutes = express.Router();
cartRoutes.get('/getCart', getCart);
cartRoutes.post('/addtocart', addItemtoCart);
cartRoutes.delete('/removeItem', removeItem);

export default cartRoutes;
