import { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'cookies';

import { getHandler } from '../../server/middleware';

const handler = getHandler();

handler.post((req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { password } = req.body;
    const cookies = new Cookies(req, res);

    if (password && password === process.env.PASSWORD) {
      cookies.set('password', password);

      return res.status(200).json({ message: 'Logged in successfully.' });
    }

    return res.status(401).json({ message: 'Invalid password.' });
  } catch (error) {
    return res.status(500).send(error.toString());
  }
});

export default handler;
