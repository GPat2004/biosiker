import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronLeft, CheckCircle2, Clock, ChevronRight, GraduationCap, Info, AlertTriangle, Lightbulb, ListChecks } from 'lucide-react';
import { getModuleById, getChapterById, getLevelContent } from '../data/curriculum';
import { useUserData } from '../context/UserDataContext';
import PaywallGate from '../components/PaywallGate';
import DefinedTerm from '../components/DefinedTerm';
import { renderWithGlossary } from '../lib/glossaryRender';
import { GLOSSARY } from '../data/glossary';
import MaltozKepzodes from '../components/diagrams/MaltozKepzodes';
import ElemekMegoszlasa from '../components/diagrams/ElemekMegoszlasa';
import VizDipolus from '../components/diagrams/VizDipolus';
import AldozKetoz from '../components/diagrams/AldozKetoz';
import PeptidkotesKialakulasa from '../components/diagrams/PeptidkotesKialakulasa';
import NukleotidFelepitese from '../components/diagrams/NukleotidFelepitese';
import DNSBazisparositas from '../components/diagrams/DNSBazisparositas';
import FotoszintezisFolyamatabra from '../components/diagrams/FotoszintezisFolyamatabra';
import SejtlegzesFolyamatabra from '../components/diagrams/SejtlegzesFolyamatabra';
import PasszivAktivSzallitas from '../components/diagrams/PasszivAktivSzallitas';
import MitozisMeiozis from '../components/diagrams/MitozisMeiozis';

const DIAGRAMS = {
  'maltoz-kepzodes': MaltozKepzodes,
  'elemek-megoszlasa': ElemekMegoszlasa,
  'viz-dipolus': VizDipolus,
  'aldoz-ketoz': AldozKetoz,
  'peptidkotes-kialakulasa': PeptidkotesKialakulasa,
  'nukleotid-felepitese': NukleotidFelepitese,
  'dns-bazisparositas': DNSBazisparositas,
  'fotoszintezis-folyamatabra': FotoszintezisFolyamatabra,
  'sejtlegzes-folyamatabra': SejtlegzesFolyamatabra,
  'passziv-aktiv-szallitas': PasszivAktivSzallitas,
  'mitozis-meiozis': MitozisMeiozis,
};

// Dedikalt komponens a dinamikus diagram-feloldashoz, ugyanazon okbol,
// mint a ModuleIcon: render kozben nem hozunk letre helyi valtozoban
// komponens-referenciat.
const ChapterDiagram = ({ diagramId }) => {
  const Diagram = DIAGRAMS[diagramId];
  if (!Diagram) return null;
  return <Diagram />;
};

const LEVEL_LABEL = { kozep: 'Középszint', emelt: 'Emelt szint' };

const ChapterView = () => {
  const { moduleId, chapterId } = useParams();
  const module = getModuleById(moduleId);
  const chapter = getChapterById(moduleId, chapterId);
  const { canAccessChapter, isChapterComplete, markChapterComplete, examLevel } = useUserData();

  if (!module || !chapter) return <Navigate to="/tananyag" replace />;

  const accessible = canAccessChapter(moduleId, chapterId);
  const done = isChapterComplete(moduleId, chapterId);
  const levelContent = getLevelContent(chapter, examLevel);

  const currentIndex = module.chapters.findIndex((c) => c.id === chapterId);
  const nextChapter = module.chapters[currentIndex + 1];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link
        to={`/tananyag/${moduleId}`}
        className="inline-flex items-center text-sm text-slate-500 hover:text-primary-600 mb-6 transition-colors"
      >
        <ChevronLeft className="h-4 w-4 mr-1" /> Vissza: {module.title}
      </Link>

      <div className="mb-8">
        <p className="text-sm font-bold text-primary-600 mb-2">{module.title}</p>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">{chapter.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {chapter.estimatedMinutes} perc olvasás
          </span>
          <Link
            to="/tananyag"
            className="inline-flex items-center px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            title="A szintet a Tananyag oldalon válthatod"
          >
            <GraduationCap className="h-3.5 w-3.5 mr-1" />
            {LEVEL_LABEL[examLevel]}
          </Link>
        </div>
      </div>

      {!accessible ? (
        <PaywallGate chapterTitle={chapter.title} />
      ) : levelContent?.comingSoon ? (
        <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            Ennek a fejezetnek a tartalma jelenleg fejlesztés alatt áll. Hamarosan elérhető lesz!
          </p>
        </div>
      ) : (
        <div className="prose dark:prose-invert max-w-none">
          {levelContent.emeltPending && (
            <div className="flex items-start gap-2 p-4 mb-6 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 text-amber-700 dark:text-amber-400 text-sm">
              <Info className="h-4 w-4 shrink-0 mt-0.5" />
              <span>
                Az emelt szintű kiegészítés ehhez a fejezethez még fejlesztés alatt áll - addig is
                a középszintű tartalmat mutatjuk.
              </span>
            </div>
          )}
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
            {renderWithGlossary(levelContent.intro)}
          </p>

          {chapter.diagramId && (
            <div className="mb-8 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <ChapterDiagram diagramId={chapter.diagramId} />
            </div>
          )}

          {levelContent.sections.map((section, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-xl font-bold mb-3">{section.heading}</h2>
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                  {renderWithGlossary(p)}
                </p>
              ))}
              {section.table && (
                <div className="my-4 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                  {section.table.caption && (
                    <p className="px-4 pt-3 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {section.table.caption}
                    </p>
                  )}
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-slate-800">
                        {section.table.headers.map((h, k) => (
                          <th key={k} className="text-left px-4 py-3 font-bold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, r) => (
                        <tr key={r} className="border-t border-slate-200 dark:border-slate-800">
                          {row.map((cell, c) => (
                            <td key={c} className={`px-4 py-3 ${c === 0 ? 'font-bold' : 'text-slate-600 dark:text-slate-400'}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}

          {levelContent.extraDiagramId && (
            <div className="mb-8 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <ChapterDiagram diagramId={levelContent.extraDiagramId} />
            </div>
          )}

          {chapter.comparisonTable && (
            <div className="mb-8 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    {chapter.comparisonTable.headers.map((h) => (
                      <th key={h} className="text-left px-4 py-3 font-bold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {chapter.comparisonTable.rows.map((row, i) => (
                    <tr key={i} className="border-t border-slate-200 dark:border-slate-800">
                      {row.map((cell, j) => (
                        <td key={j} className={`px-4 py-3 ${j === 0 ? 'font-bold' : 'text-slate-600 dark:text-slate-400'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {chapter.commonMistakes && (
            <div className="mb-8 p-5 rounded-2xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30">
              <p className="text-sm font-bold mb-3 flex items-center text-red-700 dark:text-red-400">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Gyakori hibák és érettségi csapdák
              </p>
              <ul className="space-y-2">
                {chapter.commonMistakes.map((m, i) => (
                  <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    {renderWithGlossary(m)}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {chapter.mnemonic && (
            <div className="mb-8 p-5 rounded-2xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30">
              <p className="text-sm font-bold mb-2 flex items-center text-amber-700 dark:text-amber-400">
                <Lightbulb className="h-4 w-4 mr-2" />
                Mnemonika
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">{chapter.mnemonic}</p>
            </div>
          )}

          {levelContent.keyTerms && (
            <div className="mt-8 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <p className="text-sm font-bold mb-3">Kulcsfogalmak</p>
              <div className="flex flex-wrap gap-2">
                {levelContent.keyTerms.map((term) => {
                  const definition = GLOSSARY[term.toLowerCase()];
                  return (
                    <span
                      key={term}
                      className="px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm"
                    >
                      {definition ? (
                        <DefinedTerm term={term} definition={definition}>
                          {term}
                        </DefinedTerm>
                      ) : (
                        term
                      )}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {chapter.summary && (
            <div className="mt-8 p-5 rounded-2xl bg-primary-50 dark:bg-primary-900/10 border border-primary-200 dark:border-primary-900/30">
              <p className="text-sm font-bold mb-2 flex items-center text-primary-700 dark:text-primary-400">
                <ListChecks className="h-4 w-4 mr-2" />
                Összefoglaló
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">{chapter.summary}</p>
            </div>
          )}
        </div>
      )}

      {accessible && !levelContent?.comingSoon && (
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={() => markChapterComplete(moduleId, chapterId)}
            disabled={done}
            className={`w-full sm:w-auto flex items-center justify-center px-6 py-3 rounded-xl font-bold transition-all ${
              done
                ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 cursor-default'
                : 'bg-primary-600 text-white hover:bg-primary-700'
            }`}
          >
            <CheckCircle2 className="h-5 w-5 mr-2" />
            {done ? 'Fejezet teljesítve' : 'Megjelölés elvégzettként'}
          </button>

          {nextChapter && (
            <Link
              to={`/tananyag/${moduleId}/${nextChapter.id}`}
              className="w-full sm:w-auto flex items-center justify-center px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              Következő fejezet
              <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default ChapterView;
