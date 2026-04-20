import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import Razorpay from 'razorpay';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_mock_id',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'mock_secret',
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'JobPilot AI API' });
  });

  // Payment: Create Order
  app.post('/api/payment/create-order', async (req, res) => {
    try {
      const { amount, plan } = req.body;
      const options = {
        amount: amount * 100, // amount in paise
        currency: 'INR',
        receipt: `receipt_${plan}_${Date.now()}`,
      };
      
      const order = await razorpay.orders.create(options);
      res.json(order);
    } catch (error) {
      console.error('Payment order error:', error);
      res.status(500).json({ error: 'Failed to create payment order' });
    }
  });

  // Payment: Webhook
  app.post('/api/payment/webhook', (req, res) => {
    const signature = req.headers['x-razorpay-signature'] as string;
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET || 'mock_secret';
    
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(JSON.stringify(req.body));
    const digest = hmac.digest('hex');

    if (digest === signature) {
      // Logic: Update user subscription status in Firestore
      console.log('Payment verified, updating status:', req.body.payload.payment.entity.id);
      res.status(200).json({ status: 'ok' });
    } else {
      res.status(400).json({ error: 'Unauthorized' });
    }
  });

  // Mock Job Data for Hunter Agent
  app.get('/api/jobs', (req, res) => {
    res.json([
      {
        id: '1',
        title: 'Senior Frontend Engineer',
        company: 'Google',
        location: 'Mountain View, CA',
        salary: '$180k - $240k',
        type: 'Full-time',
        matchScore: 92,
        postedAt: new Date(Date.now() - 3600000).toISOString(),
        tier: 'FAANG'
      },
      {
        id: '2',
        title: 'Staff Fullstack Developer',
        company: 'Stripe',
        location: 'Remote',
        salary: '$200k - $280k',
        type: 'Full-time',
        matchScore: 88,
        postedAt: new Date(Date.now() - 86400000).toISOString(),
        tier: 'Fintech Unicorn'
      },
      {
        id: '3',
        title: 'Backend Systems Architect',
        company: 'NVIDIA',
        location: 'Santa Clara, CA',
        salary: '$220k - $300k',
        type: 'Full-time',
        matchScore: 85,
        postedAt: new Date(Date.now() - 172800000).toISOString(),
        tier: 'Grade-A MNC'
      }
    ]);
  });

  // Mock Applications
  app.get('/api/applications', (req, res) => {
    res.json([
      {
        id: 'app_1',
        jobId: '1',
        status: 'INTERVIEWING',
        appliedAt: new Date(Date.now() - 604800000).toISOString(),
        atsScore: 89,
        tailoredResumeUrl: '#'
      }
    ]);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`JobPilot AI backend running on http://localhost:${PORT}`);
  });
}

startServer();
