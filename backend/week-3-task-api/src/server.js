if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const itemRoutes = require("./routes/itemRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

let connectionPromise;

async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is missing.");
  }

  if (mongoose.connection.readyState === 1) {
    return;
  }

  if (!connectionPromise) {
   connectionPromise = mongoose.connect(uri).catch((error) => {
  connectionPromise = null;

  console.error("MongoDB connection diagnostic:");

  if (error.reason?.servers) {
    for (const [address, server] of error.reason.servers) {
      console.error({
        address,
        serverType: server.type,
        serverError: server.error?.message || "No additional details"
      });
    }
  }

  throw error;
});
  }

  await connectionPromise;
}

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    next(error);
  }
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "AUREX Week 3 Task API is running",
    endpoints: [
      "POST /api/items",
      "GET /api/items",
      "GET /api/items/:id",
      "PUT /api/items/:id",
      "DELETE /api/items/:id"
    ]
  });
});

app.use("/api/items", itemRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || "Internal server error"
  });
});

module.exports = app;

if (require.main === module) {
  connectDB()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
      });
    })
    .catch((error) => {
      console.error("Unable to start server:", error.message);
      process.exit(1);
    });
}