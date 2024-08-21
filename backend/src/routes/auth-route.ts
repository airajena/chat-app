import express from 'express';

const router = express.Router();

router.get('/login', (req, res) => {
    res.send('Logged in successfully');
});

router.get('/logout', (req, res) => {
    res.send('Logged out successfully');
});

export default router;