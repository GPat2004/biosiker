import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, ClipboardCheck, Smartphone } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 group">
    <div className="h-12 w-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400">{description}</p>
  </div>
);

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full py-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute top-0 -z-10 w-full h-full opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-300 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-300 rounded-full blur-[100px]" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Sikeres <span className="text-primary-600">Biológia</span> Vizsga <br />
          Mesterséges Intelligenciával
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10">
          Készülj fel az érettségire vagy a gyógyszerészeti egyetemre a legmodernebb eszközökkel. 
          Személyre szabott kvízek, interaktív tanulókártyák és valósághű vizsgaszimulációk.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/register"
            className="px-8 py-4 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 flex items-center justify-center"
          >
            Kezdés ingyen <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/flashcards"
            className="px-8 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
          >
            Demó megtekintése
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full max-w-7xl py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Minden, ami a sikerhez kell</h2>
          <p className="text-slate-600 dark:text-slate-400">Okos funkciók a hatékonyabb tanulásért</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={Brain}
            title="AI Kvíz Generátor"
            description="Töltsd fel a tananyagot, és az AI azonnal releváns kérdéseket készít belőle."
          />
          <FeatureCard 
            icon={Zap}
            title="Interaktív Kártyák"
            description="Tanulj gyorsabban a spaced repetition (időközi ismétlés) módszerrel."
          />
          <FeatureCard 
            icon={ClipboardCheck}
            title="Vizsga Szimuláció"
            description="Gyakorolj valódi érettségi feladatsorokon, időre, pontozással."
          />
          <FeatureCard 
            icon={Smartphone}
            title="Mobilra Optimalizált"
            description="Tanulj bárhol, bármikor. A telefonodon is tökéletesen működik."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-primary-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Készen állsz a sikeres vizsgára?</h2>
          <p className="text-primary-100 text-lg mb-10">Csatlakozz több ezer magyar diákhoz, akik már a BioSiker-rel tanulnak.</p>
          <Link
            to="/register"
            className="px-8 py-4 rounded-xl bg-white text-primary-600 font-bold hover:bg-primary-50 transition-all inline-block"
          >
            Regisztrálj most!
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
