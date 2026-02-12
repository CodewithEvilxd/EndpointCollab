import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

const handlers = toNextJsHandler(auth);

const allowedOrigins = new Set([
  "http://localhost:3000",
  "https://endpointcollab-xd.vercel.app",
  "https://endpointcollab.rajdev.me",
]);

const addCorsHeaders = (response: Response, requestOrigin: string | null) => {
  if (requestOrigin && allowedOrigins.has(requestOrigin)) {
    response.headers.set("Access-Control-Allow-Origin", requestOrigin);
  }
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  response.headers.set("Access-Control-Allow-Credentials", "true");
  return response;
};

export const POST = async (req: Request) => {
  const response = await handlers.POST(req);
  return addCorsHeaders(response, req.headers.get("origin"));
};

export const GET = async (req: Request) => {
  const response = await handlers.GET(req);
  return addCorsHeaders(response, req.headers.get("origin"));
};

export const OPTIONS = async (req: Request) => {
  const requestOrigin = req.headers.get("origin");
  const headers = new Headers({
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Credentials": "true",
  });

  if (requestOrigin && allowedOrigins.has(requestOrigin)) {
    headers.set("Access-Control-Allow-Origin", requestOrigin);
  }

  return new Response(null, {
    status: 200,
    headers,
  });
};
