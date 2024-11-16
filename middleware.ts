import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PASSWORD = process.env.ACCESS_PASSWORD;

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (authHeader) {
    const [type, credentials] = authHeader.split(" ");

    if (type === "Basic") {
      const decoded = atob(credentials); 
      const [_, password] = decoded.split(":"); 

      if (password === PASSWORD) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}
