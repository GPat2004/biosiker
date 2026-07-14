import { Check, X, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUserData } from '../context/UserDataContext';

const PricingCard = ({ planId, title, price, features, recommended, isCurrent, onSelect }) => (
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
    <button
      onClick={() => onSelect(planId)}
      disabled={isCurrent}
      className={`w-full py-3 px-4 rounded-xl font-bold text-center transition-all ${
        isCurrent
          ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 cursor-default'
          : recommended
          ? 'bg-primary-600 text-white hover:bg-primary-700'
          : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
      }`}
    >
      {isCurrent ? 'Ez a jelenlegi csomagod' : planId === 'free' ? 'Kezdés most' : `${title} tagság igénylése`}
    </button>
  </div>
);

const Pricing = () => {
  const { subscription, subscribe, unsubscribe } = useUserData();

  const handleSelect = (planId) => {
    if (planId === 'free') {
      unsubscribe();
    } else {
      subscribe(planId);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Válaszd a sikert</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Férj hozzá minden funkcióhoz, és hozd ki magadból a maximumot a biológia vizsgán.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mb-12 px-4 py-3 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 text-center text-sm text-amber-700 dark:text-amber-400">
        Demó mód: nincs bekötve valódi fizetés, a csomagválasztás helyben, azonnal aktiválódik tesztelés céljából.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        <PricingCard
          planId="free"
          title="Alap"
          price="Ingyenes"
          isCurrent={subscription.plan === 'free'}
          onSelect={handleSelect}
          features={[
            { text: 'Minden modul első fejezete', included: true },
            { text: 'Napi 3 AI kvíz', included: true },
            { text: 'Alapvető tanulókártyák', included: true },
            { text: 'Teljes tananyag hozzáférés', included: false },
            { text: 'Vizsga szimulációk', included: false },
            { text: 'Személyre szabott statisztika', included: false },
          ]}
        />
        <PricingCard
          planId="pro"
          title="Pro"
          price="2.490 Ft"
          recommended={true}
          isCurrent={subscription.plan === 'pro'}
          onSelect={handleSelect}
          features={[
            { text: 'Teljes tananyag - minden modul, minden fejezet', included: true },
            { text: 'Korlátlan AI kvíz', included: true },
            { text: 'Összes tanulókártya pakli', included: true },
            { text: 'Vizsga szimulációk', included: true },
            { text: 'Havi 5 PDF feldolgozás', included: true },
            { text: 'Személyre szabott statisztika', included: true },
          ]}
        />
        <PricingCard
          planId="mentor"
          title="Mentor"
          price="4.990 Ft"
          isCurrent={subscription.plan === 'mentor'}
          onSelect={handleSelect}
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

      <p className="text-center text-sm text-slate-500 mt-10">
        Nincs még fiókod? <Link to="/register" className="font-bold text-primary-600 hover:text-primary-500">Regisztrálj ingyen</Link>
      </p>
    </div>
  );
};

export default Pricing;
