import * as jwt from 'jsonwebtoken';

/**
 * Parses and verifies a JWT token from header string
 * @param header The header to verify
 */
export const verifyAuthHeader = (header?: string): JWT | undefined => {
  if (!header) return;
  const token = header.replace('Bearer ', '');

  try {
    return jwt.verify(token, process.env.APP_SECRET) as JWT;
  } catch (e) {
    return;
  }
};

interface JWT {
  userId: string;
}
