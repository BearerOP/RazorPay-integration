import React, { useState } from 'react';
import { Box, Stack, Input } from "@chakra-ui/react";
import Card from './Card';
import axios from "axios";

const Home = () => {
    const [user, setUser] = useState({
        name: 'USER 1',
        email: 'user1@gmail.com',
        contact: '9998887770'
    });

    // To update user details when input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const checkoutHandler = async (amount) => {
        try {
            const { data: { key } } = await axios.get("http://localhost:4000/api/getkey");

            const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
                amount
            });

            const options = {
                key,
                amount: order.amount,
                currency: "INR",
                name: "Razorpay testing",
                description: "Tutorial of RazorPay",
                image: "https://avatars.githubusercontent.com/u/96431371?s=400&u=93470f23b6661d5faf98a665c4bd0e315020eb9d&v=4",
                order_id: order.id,
                callback_url: "http://localhost:4000/api/paymentverification",
                prefill: {
                    name: user.name,  // Dynamic name from input
                    email: user.email,  // Dynamic email from input
                    contact: user.contact  // Dynamic contact from input
                },
                notes: {
                    address: "Razorpay Corporate Office"
                },
                theme: {
                    color: "#121212"
                }
            };
            const razor = new window.Razorpay(options);
            razor.open();
        } catch (error) {
            console.error("Error during checkout", error);
        }
    };

    return (
        <Box>
            {/* Input Fields for User Info */}
            <Stack mb={5} spacing={3} alignItems="center">
                <Input
                    placeholder="Enter your name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    width="300px"
                />
                <Input
                    placeholder="Enter your email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    width="300px"
                />
                <Input
                    placeholder="Enter your contact number"
                    name="contact"
                    value={user.contact}
                    onChange={handleChange}
                    width="300px"
                />
            </Stack>

            <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>
                <Card amount={1} img={"https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png"} checkoutHandler={checkoutHandler} />
                <Card amount={2} img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"} checkoutHandler={checkoutHandler} />
            </Stack>
        </Box>
    );
};

export default Home;
