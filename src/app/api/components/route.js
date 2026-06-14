// api/components/route.js
import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const db = await connectDB();
    const searchParams = req.nextUrl.searchParams;

    // Get filter parameters from URL
    const pageNamesParam = searchParams.get("pageName");
    const componentNamesParam = searchParams.get("componentName");

    // Build MongoDB query
    const query = {};

    // Add pageName filter (supports multiple values)
    if (pageNamesParam) {
      const pageNames = pageNamesParam
        .split(",")
        .map((name) => name.trim())
        .filter(Boolean);

      if (pageNames.length === 1) {
        query.pageName = pageNames[0];
      } else if (pageNames.length > 1) {
        query.pageName = { $in: pageNames };
      }
    }

    // Add componentName filter (supports multiple values)
    if (componentNamesParam) {
      const componentNames = componentNamesParam
        .split(",")
        .map((name) => name.trim())
        .filter(Boolean);

      if (componentNames.length === 1) {
        query.componentName = componentNames[0];
      } else if (componentNames.length > 1) {
        query.componentName = { $in: componentNames };
      }
    }

    // Try both possible collection names
    const possibleCollections = ["components", "Components"];
    let components = [];

    for (const colName of possibleCollections) {
      try {
        const collection = db.collection(colName);
        const result =
          Object.keys(query).length > 0
            ? await collection.find(query).toArray()
            : await collection.find().toArray();

        if (result.length > 0) {
          components = result;
          break;
        }
      } catch (err) {
        // Collection doesn't exist, try next one
      }
    }

    // Return 404 if no results found with filters
    if (Object.keys(query).length > 0 && components.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "No components found matching the criteria",
          data: [],
        },
        { status: 404 },
      );
    }

    // Return successful response
    return NextResponse.json(
      {
        success: true,
        data: components,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("[Components API] Error fetching components:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch components",
      },
      { status: 500 },
    );
  }
};
