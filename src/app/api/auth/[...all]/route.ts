import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

const handlers = toNextJsHandler(auth);

const addCorsHeaders = (response: Response) => {
  response.headers.set('Access-Control-Allow-Origin', 'https://endpointcollab-xd.vercel.app');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  return response;
};

export const POST = async (req: Request) => {
  const response = await handlers.POST(req);
  return addCorsHeaders(response);
};

export const GET = async (req: Request) => {
  const response = await handlers.GET(req);
  return addCorsHeaders(response);
};

export const OPTIONS = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://endpointcollab-xd.vercel.app',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
};
