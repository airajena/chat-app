import { Request, Response } from 'express';
export const signup= async (req: Request, res: Response) => {
    res.send('Signup successful');
};

export const login = async (req: Request, res: Response) => {
    res.send('Login successful');
};

export const logout = async (req: Request, res: Response) => {
    res.send('Logout successful');
};

