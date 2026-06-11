// lib/connectDB.js

// MongoDB
import { MongoClient, ServerApiVersion } from "mongodb";

// Check if MONGODB_URI is defined
const uri = process.env.MONGODB_URI;

// Throw error if MONGODB_URI is not defined
if (!uri) {
  throw new Error("Please add MONGODB_URI to .env.local");
}

// Connect to MongoDB - client & clientPromise
let client;
let clientPromise;

// Check if NODE_ENV is development
if (process.env.NODE_ENV === "development") {

  // Check if _mongoClientPromise is not defined
  if (!global._mongoClientPromise) {

    // Create new MongoClient
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    // Connect to MongoDB
    global._mongoClientPromise = client.connect();
  }

  // Assign _mongoClientPromise to clientPromise
  clientPromise = global._mongoClientPromise;
} else {

  // Create new MongoClient
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  // Connect to MongoDB
  clientPromise = client.connect();
}

// Export connectDB
export async function connectDB() {
  const client = await clientPromise;
  return client.db();
}
