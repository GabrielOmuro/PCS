# Pharmacy Central System (PCS)

## Overview

The Pharmacy Central System (PCS) is a robust online solution developed by LABPharmacy Inc, a leading company in the pharmaceutical technology sector. The PCS aims to revolutionize the management of warehouses and medications, offering an efficient and user-friendly platform for healthcare facilities.

## Key Features

- **Inventory Management**: The PCS provides a comprehensive inventory management system that allows healthcare facilities to track medication stock levels, receive automated notifications for low stock, and generate detailed reports for better decision-making.

- **Order Processing**: With the PCS, healthcare professionals can easily place medication orders, track order status, and receive timely updates on delivery schedules. This streamlines the procurement process and ensures a steady supply of medications.

- **Barcode Scanning**: The system supports barcode scanning functionality, enabling quick and accurate medication identification, reducing errors, and improving efficiency in medication dispensing.

- **Real-time Analytics**: PCS offers powerful analytics capabilities, presenting real-time data on medication usage, stock trends, and expiration dates. This data-driven approach helps healthcare facilities optimize inventory levels and reduce waste.

## Technologies Used

The Pharmacy Central System was developed using the following technologies:

- **Back-End**: Node.js with Express.js framework
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Front-End**: HTML, CSS, and JavaScript
- **Version Control**: Git
- **Deployment**: Heroku

## Getting Started

To run the PCS on your local machine, follow these steps:

1. Ensure you have Node.js and PostgreSQL installed.
2. Clone the PCS repository from GitHub: [https://github.com/GabrielOmuro/PCS.git].
3. Navigate to the project directory in your terminal.
4. Install the project dependencies by running the command: `npm install cors dotenv express jsonwbtoken pg pg-connection-string sequelize` e `npm install sequelize-cli nodemon --save-dev` to run nodemon and sequelize-cli on devDependencies.
5. Set up the PostgreSQL database and update the database configuration in the `.env` file.
6. Run the database migrations using the command: `npx sequelize-cli db:migrate`.
7. Start the server by running: `npm run dev`
8. Access the PCS application in your request app: `http://localhost:5000`.

## Feedback and Contributions

We welcome feedback and contributions from users and developers alike. If you have any suggestions, bug reports, or feature requests, please feel free to open an issue or submit a pull request on the PCS GitHub repository.

We believe that the Pharmacy Central System (PCS) will revolutionize medication management, enhancing efficiency, accuracy, and patient safety in healthcare facilities.
