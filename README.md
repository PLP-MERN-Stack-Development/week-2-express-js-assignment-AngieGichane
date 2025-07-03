# 🛠 Express.js REST API Project

This project is a fully functional RESTful API built with Express.js. It allows you to manage a collection of products with features like filtering, search, pagination, authentication, and error handling.

---

## 📂 Project Structure

```
.
├── server.js                 # Main server file
├── routes/                   # API routes
│   └── products.js
├── middleware/               # Custom middleware
│   ├── logger.js
│   ├── auth.js
│   ├── validateProduct.js
│   └── errorHandler.js
├── utils/                    # Custom error classes
│   └── customErrors.js
├── data/                     # Sample data
│   └── products.json
├── .env.example             # Environment variables example
├── README.md                # Project documentation
└── package.json
```

---

## 🚀 Features

✅ RESTful API for managing products  
✅ Middleware for logging, authentication, and validation  
✅ Global error handling with custom error classes  
✅ Filtering, pagination, and search support  
✅ Protected routes using API keys  
✅ Example .env for environment configuration  

---

## 🛠 Setup Instructions

### 1. **Clone the repository**
```bash
git clone <your-github-repo-url>
cd express-api-project
```

### 2. **Install dependencies**
```bash
npm install
```

### 3. **Configure environment variables**
- Create a `.env` file based on `.env.example`
- Example:
```ini
PORT=3000
API_KEY=12345
```

### 4. **Start the server**
```bash
node server.js
```

The server runs on `http://localhost:3000`

---

## 📖 API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/products` | List all products | No |
| GET | `/api/products/:id` | Get a product by ID | No |
| POST | `/api/products` | Create a new product | ✅ Yes |
| PUT | `/api/products/:id` | Update an existing product | ✅ Yes |
| DELETE | `/api/products/:id` | Delete a product | ✅ Yes |
| GET | `/api/products/search` | Search products by name | No |
| GET | `/api/products/stats` | Get product statistics by category | No |

---

## 🔐 Authentication

For protected routes (`POST`, `PUT`, `DELETE`):
Add the following header to your requests:

```
x-api-key: 12345
```

---

## 🧪 Example Requests

### Create a Product
**POST /api/products**

```json
{
  "name": "Wireless Mouse",
  "description": "Bluetooth mouse",
  "price": 25.99,
  "category": "Electronics",
  "inStock": true
}
```

**Response:**
```json
{
  "id": "generated-uuid",
  "name": "Wireless Mouse",
  "description": "Bluetooth mouse",
  "price": 25.99,
  "category": "Electronics",
  "inStock": true
}
```

### Get All Products with Filtering
**GET /api/products?category=Electronics&page=1&limit=10**

**Response:**
```json
{
  "products": [
    {
      "id": "1",
      "name": "Smartphone",
      "description": "Latest model smartphone",
      "price": 799.99,
      "category": "Electronics",
      "inStock": true
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "totalPages": 1
  }
}
```

### Search Products
**GET /api/products/search?q=wireless**

**Response:**
```json
{
  "results": [
    {
      "id": "2",
      "name": "Wireless Mouse",
      "description": "Bluetooth mouse",
      "price": 25.99,
      "category": "Electronics",
      "inStock": true
    }
  ],
  "count": 1
}
```

### Get Product Statistics
**GET /api/products/stats**

**Response:**
```json
{
  "totalProducts": 10,
  "categoryCounts": {
    "Electronics": 5,
    "Books": 3,
    "Clothing": 2
  },
  "averagePrice": 156.75,
  "inStockCount": 8
}
```

---

## 🔧 Query Parameters

### For `/api/products`:
- `category` - Filter by category
- `inStock` - Filter by stock status (true/false)
- `minPrice` - Minimum price filter
- `maxPrice` - Maximum price filter
- `page` - Page number for pagination (default: 1)
- `limit` - Items per page (default: 10, max: 100)

### For `/api/products/search`:
- `q` - Search query (searches in name and description)

---

## 🛡️ Error Handling

The API uses custom error classes and returns consistent error responses:

```json
{
  "error": "Product not found",
  "status": 404,
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

Common HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

---

## 📋 Dependencies

```json
{
  "express": "^4.18.2",
  "dotenv": "^16.3.1",
  "uuid": "^9.0.1"
}
```

---

## 🧪 Testing

You can test the API using tools like:
- **Postman** - Import the collection for easy testing
- **curl** - Command line testing
- **Thunder Client** - VS Code extension

### Example curl commands:

```bash
# Get all products
curl http://localhost:3000/api/products

# Create a product (with auth)
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -H "x-api-key: 12345" \
  -d '{"name":"Test Product","price":99.99,"category":"Test","inStock":true}'

# Search products
curl "http://localhost:3000/api/products/search?q=wireless"
```

---

## 🚀 Deployment

To deploy this API:

1. **Environment Variables**: Set up your production environment variables
2. **Process Manager**: Use PM2 or similar for production
3. **Database**: Replace JSON file with a real database (MongoDB, PostgreSQL, etc.)
4. **Security**: Add rate limiting, CORS, and input sanitization

---

## 📜 License

This project is for educational purposes and is open source.

---