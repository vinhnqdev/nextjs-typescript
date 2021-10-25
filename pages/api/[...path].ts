// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
// type Data = {
//   name: string;
// };

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // Don't send Cookie to API Server
  req.headers.cookie = '';

  // api/students

  proxy.web(req, res, {
    target: process.env.API_URL,
    changeOrigin: true,
    selfHandleResponse: false,
  });

  //   res.status(200).json({ name: 'PATH MATCH ON HERERR!!!!' });
}
