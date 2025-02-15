import jwt from 'jsonwebtoken';
import { Request } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET || 'mysecret';
const expiration = '2h';

export function authMiddleware(req: Request) {
    let token = req.headers.authorization || '';
    
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length).trimLeft();
    }

    if (!token) return null;

    try {
        return jwt.verify(token, secret);
    } catch (error) {
        console.error('Invalid token', error);
        return null;
    }
}

export function signToken(user: any) {
    return jwt.sign({ data: user }, secret, { expiresIn: expiration });
}

