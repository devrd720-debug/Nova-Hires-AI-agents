import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Zap, Star } from 'lucide-react';

export default function Pricing() {
  const navigate = useNavigate();

  const plans = [
    { name: 'Basic', price: 0, icon: Star, features: ['3 res / mo', 'Basic Templates'] },
    { name: 'Pro', price: 499, icon: Zap, features: ['Unlimited Resumes', 'ATS Pre-scan', 'AI Suggestions'] },
    { name: 'Pro+', price: 1499, icon: Sparkles, features: ['Everything in Pro', 'Outreach Agent', 'Interview Coaching'] },
  ];

  const handleUpgrade = async (plan: string, amount: number) => {
    if (amount === 0) return navigate('/resume-builder');

    try {
      // 1. Create order on backend
      const response = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, plan }),
      });
      const order = await response.json();

      // 2. Open Razorpay Checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_mock_id',
        amount: order.amount,
        currency: order.currency,
        name: 'NovaHire AI',
        description: `${plan} Subscription`,
        order_id: order.id,
        handler: function (response: any) {
          alert('Payment Successful!');
          navigate('/resume-builder');
        },
      };
      
      // @ts-ignore
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment initialization failed.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold text-slate-900">Choose Your Plan</h1>
      </header>

      <div className="grid grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className="border border-slate-200 rounded-3xl p-8 space-y-6 flex flex-col">
            <plan.icon className="text-indigo-600" size={32} />
            <h2 className="text-2xl font-bold">{plan.name} Plan</h2>
            <p className="text-4xl font-extrabold">₹{plan.price}<span className="text-lg text-slate-500">/mo</span></p>
            <ul className="space-y-2 flex-grow">
              {plan.features.map(f => <li key={f} className="text-slate-600">• {f}</li>)}
            </ul>
            <button onClick={() => handleUpgrade(plan.name, plan.price)} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold">Select Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
}
