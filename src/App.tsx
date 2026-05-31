import React from 'react';
import './App.css';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  stripeLink: string;
  popular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$297',
    period: 'month',
    features: [
      'AI-powered SEO content written specifically for your business, your city, and your services — delivered every month',
      'Includes 4 blog posts, 8 Google Business Profile posts, and 1 service page update',
      'Targets the exact keywords your customers search for',
      'No writing, no agency, no contracts',
      'Results may vary based on market competition and website factors',
      'Cancel anytime',
    ],
    stripeLink:'https://buy.stripe.com/aFaeVd28w7Tv2mgcWUfbq03',
  },
  {
    name: 'Growth Plan',
    price: '$497',
    period: 'month',
    features: [
      'Everything in Starter plus more content, more cities, and more visibility',
      'Includes 8 blog posts, 16 Google Business Profile posts, 4 service page updates, 5 social media captions, and a weekly industry news update — all written by AI and tailored to your niche and market',
      'Covers up to 3 cities',
      'Weekly performance reports included',
      'Results may vary based on market competition and website factors',
      'Cancel anytime',
    ],
    stripeLink:'https://buy.stripe.com/3cI00j14s4Hjgd6bSQfbq04',
    popular: true,
  },
  {
    name: 'Dominate Plan',
    price: '$797',
    period: 'month',
    features: [
      'The complete AI content solution for businesses serious about owning their market',
      'Includes 12 blog posts, 30 Google Business Profile posts, full website copy refresh, 30 social media captions, daily industry news updates, competitor intelligence briefs, weekly performance reports, and a monthly newsletter — all written by AI, tailored to your industry, and updated as trends change',
      'Unlimited cities',
      'Commercial use license included',
      'Results may vary based on market competition and website factors',
      'Cancel anytime',
    ],
    stripeLink:'https://buy.stripe.com/00w9AT14s3DfbWQ2igfbq05',
  },
];

function App() {
  const handleSubscribe = (stripeLink: string) => {
    window.open(stripeLink, '_blank');
  };

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1>Choose Your Plan</h1>
        <p>Select the perfect subscription plan for your needs</p>
      </div>

      <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <span className="popular-badge">Most Popular</span>}
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}<span>/month</span></p>
              <p className="description">{plan.description}</p>
              
              <a 
                href={plan.stripeLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full rounded-md bg-slate-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-700 transition"
              >
                Start {plan.name.split(' ')[0]} →
              </a>

              <ul className="features-list">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default App;