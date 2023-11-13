// types/custom.d.ts

import { NextApiRequest } from 'next';

interface AuthenticatedNextApiRequest extends NextApiRequest {
  headers: any; // Define the 'headers' property type as needed
  user?: any; // Define the 'user' property type as needed
  body: any; // Define the 'body' property type as needed
}

declare module 'next' {
  export interface NextApiRequest extends AuthenticatedNextApiRequest {
    query: any;
    method: string;
}
}
