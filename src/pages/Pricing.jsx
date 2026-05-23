import React from 'react';
import { Check, X, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingCard = ({ title, price, features, recommended, cta, ctaLink }) => (
  <div className={`relative p-8 rounded-3xl border ${
    recommended 
      ? 'border-primary-500 bg-white dark:bg-slate-900 shadow-2xl scale-105 z-10' 
      : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50'
  } flex flex-col`}>
    {recommended && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-500 text-white text-sm font-bold rounded-full flex items-center">
        <Star className="h-4 w-4 mr-1 fill-white" /> Legnépszerűbb
      </div>
    )}
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <div className="mb-6">
      <span className="text-4xl font-extrabold">{price}</span>
      {price !== 'Ingyenes' && <span className="text-slate-500 ml-1">/hó</span>}
    </div>
    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start text-sm">
          {feature.included ? (
            <Check className="h-5 w-5 text-primary-500 mr-3 shrink-0" />
          ) : (
            <X className="h-5 w-5 text-slate-300 mr-3 shrink-0" />
          )}
          <span className={feature.included ? 'text-slate-700 dark:text-slate-300' : 'text-slate-400'}>
            {feature.text}
          </span>
        </li>
      ))}
    </ul>
    <Link
      to={ctaLink}
      className={`w-full py-3 px-4 rounded-xl font-bold text-center transition-all ${
        recommended 
          ? 'bg-primary-600 text-white hover:bg-primary-700' 
          : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
      }`}
    >
      {cta}
    </Link>
  </div>
);

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Válaszd a sikert</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Férj hozzá minden funkcióhoz, és hozd ki magadból a maximumot a biológia vizsgán.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        <PricingCard
          title="Alap"
          price="Ingyenes"
          cta="Kezdés most"
          ctaLink="/register"
          features={[
            { text: 'Napi 3 AI kvíz', included: true },
            { text: 'Alapvető tanulókártyák', included: true },
            { text: 'Közösségi fórum', included: true },
            { text: 'Vizsga szimulációk', included: false },
            { text: 'PDF feldolgozás', included: false },
            { text: 'Személyre szabott statisztika', included: false },
          ]}
        />
        <PricingCard
          title="Pro"
          price="2.490 Ft"
          recommended={true}
          cta="Pro tagság igénylése"
          ctaLink="/register"
          features={[
            { text: 'Korlátlan AI kvíz', included: true },
            { text: 'Összes tanulókártya pakli', included: true },
            { text: 'Vizsga szimulációk', included: true },
            { text: 'Havi 5 PDF feldolgozás', included: true },
            { text: 'Személyre szabott statisztika', included: true },
            { text: 'Reklámmentes élmény', included: true },
          ]}
        />
        <PricingCard
          title="Mentor"
          price="4.990 Ft"
          cta="Mentor tagság igénylése"
          ctaLink="/register"
          features={[
            { text: 'Minden Pro funkció', included: true },
            { text: 'Korlátlan PDF feldolgozás', included: true },
            { text: 'Kiemelt támogatás', included: true },
            { text: 'Egyéni tanulási terv', included: true },
            { text: 'Heti online konzultáció (csoportos)', included: true },
            { text: 'Letölthető összefoglalók', included: true },
          ]}
        />
      </div>
    </div>
  );
};

export default Pricing;
