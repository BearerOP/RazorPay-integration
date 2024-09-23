# RazorPay Integration Tutorial

This repository contains a tutorial for integrating Razorpay into a MERN application. The application allows users to make payments using Razorpay's payment gateway.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Overview

Razorpay is a popular payment gateway that provides businesses with a seamless way to accept online payments. This tutorial demonstrates how to integrate Razorpay into a React application, allowing users to make payments with ease.

## Features

- Supports multiple payment methods (UPI, debit/credit cards, net banking)
- Dynamic user information for pre-filling payment forms
- Simple and intuitive UI using Chakra UI

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- A Razorpay account to get your API keys
- Basic knowledge of React and Express

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/BearerOP/RazorPay-integration.git
   ```

2. Navigate to the project directory:
   ```bash
   cd RazorPay-integration
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Create a `config.env` file in the `./server/config/` directory of your project.
2. Add your Razorpay API keys:
   ```
   RAZORPAY_API_KEY=your_api_key
   RAZORPAY_API_SECRET=your_api_secret
   PORT=4000
   ```

## Usage

1. Start the backend server:
   ```bash
   npm run server
   ```
   This will start the server on `http://localhost:4000`.

2. Start the React application:
   ```bash
   npm start
   ```
   This will start the React application on `http://localhost:3000`.

3. Navigate to `http://localhost:3000` in your browser to view the application.

4. Fill in the user details and click on the payment button to initiate the payment process using Razorpay.

## API Endpoints

### 1. Get API Key
- **Endpoint:** `GET /api/getkey`
- **Description:** Fetches the Razorpay API key.
- **Response:** JSON object containing the key.

### 2. Checkout
- **Endpoint:** `POST /api/checkout`
- **Description:** Creates an order in Razorpay.
- **Body:**
  ```json
  {
      "amount": 5000
  }
  ```
- **Response:** JSON object containing the order details.

### 3. Payment Verification
- **Endpoint:** `POST /api/paymentverification`
- **Description:** Verifies the payment after completion.
- **Response:** JSON object indicating success or failure of the payment verification.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

For more information, visit [Razorpay Documentation](https://razorpay.com/docs/) for in-depth understanding of the API and additional functionalities.