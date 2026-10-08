const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/api/health", (req, res) => {
  res.json({
    message: "ILARA TRAVERS backend is running",
  });
});

// Enquiry route
app.post("/api/enquiry", (req, res) => {
  const { name, phone, inquiry } = req.body;

  // Validate required fields
  if (!name || !phone || !inquiry) {
    return res.status(400).json({
      message: "Name, phone number and inquiry are required",
    });
  }

  // Clean the input
  const cleanName = name.trim();
  const cleanPhone = phone.trim();
  const cleanInquiry = inquiry.trim();

  // Validate after trimming
  if (!cleanName || !cleanPhone || !cleanInquiry) {
    return res.status(400).json({
      message: "Name, phone number and inquiry cannot be empty",
    });
  }

  console.log("New enquiry received:");
  console.log("Name:", cleanName);
  console.log("Phone:", cleanPhone);
  console.log("Inquiry:", cleanInquiry);

  res.json({
    message: "Enquiry received successfully",
    data: {
      name: cleanName,
      phone: cleanPhone,
      inquiry: cleanInquiry,
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});