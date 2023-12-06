<img src="tacoTok.jpg" />

# E-Commerce API

[Management Rules](management_rules.md) 

## Introduction
This e-commerce API is designed to enable users to order items online with ease and security.

## Features
- User authentication to secure transactions.
- Product management with options to add, update, and view details of items.
- Order placement with real-time tracking of processing and shipping stages.

## Data Model
### Users
- `UUID`: VARCHAR(36) - A unique identifier for the user.
- `Pseudo`: VARCHAR(20) - Username for login purposes.
- `Username`: VARCHAR(30) - The full name of the user.
- `Password`: VARCHAR(72) - Hash of the user's password.
- `Creation Date`: DATE - The date the user account was created.

### Products
- `UUID`: VARCHAR(36) - A unique identifier for the product.
- `Name`: VARCHAR(20) - The commercial name of the product.
- `Description`: LONGTEXT(500) - Detailed description of the product.
- `Unit Price`: FLOAT - The cost for a single item.
- `Quantity`: INT - Available stock for the product.
- `Addition Date`: DATE - When the product was added to inventory.
- `Update Date`: DATE - The last update to product information.

### Orders
- `Order Number`: INT - A unique identifier for the order, auto-incremented.
- `Client UUID`: VARCHAR(36) - A unique identifier for the user placing the order.
- `Product UUID`: VARCHAR(36) - A unique identifier for the ordered product.
- `Product Quantity`: INT - The number of product items ordered.
- `Total Price (excl. tax)`: FLOAT - Total price of the order before taxes.
- `Creation Date`: DATE - The date the order was placed.
- `Shipping Date`: DATE - The planned date for order shipment.

## Authentication
Users must be authenticated via a token system to execute orders.

## Setup
Please follow the steps here to configure and run the API.

## Contribution
Contributions are welcome. Please submit pull requests or create issues for any feature or bug fix.
