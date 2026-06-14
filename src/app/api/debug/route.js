// api/debug/route.js (create this temporarily)
import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const db = await connectDB();

    // Get database info
    const dbName = db.databaseName;

    // List all collections
    const collections = await db.listCollections().toArray();

    // If 'main' is a collection, get its data
    let mainCollectionData = null;
    if (collections.some((c) => c.name === "main")) {
      const mainCollection = db.collection("main");
      mainCollectionData = await mainCollection.find().limit(10).toArray();
    }

    // If 'components' is a collection, get its data
    let componentsData = null;
    if (collections.some((c) => c.name === "components")) {
      const componentsCollection = db.collection("components");
      componentsData = await componentsCollection.find().limit(10).toArray();
    }

    return NextResponse.json({
      databaseName: dbName,
      collections: collections.map((c) => c.name),
      mainCollectionData,
      componentsData,
      allCollections: collections,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
