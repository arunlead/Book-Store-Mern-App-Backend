const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173', 'https://eccomerce-book-store-mern-app.vercel.app'],
  credentials: true,
}));

// Default root route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Routes
const bookRoutes = require('./src/books/book.route');
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// MongoDB connection
async function main() {
  await mongoose.connect(process.env.DB_URL);
  console.log("MongoDB connected successfully");
}
main().catch(err => console.log(err));

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
