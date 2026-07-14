import { supabase } from './supabaseClient';

const TABLE = 'user_progress';

// Az adatbázis-sor (snake_case, lapos oszlopok) <-> a UserDataContext állapota
// (camelCase, beágyazott objektumok) közötti átalakítás.

const rowToState = (row) => ({
  subscription: { plan: row.subscription_plan, since: row.subscription_since },
  examLevel: row.exam_level || 'kozep',
  progress: row.progress || {},
  xp: row.xp,
  streak: {
    current: row.streak_current,
    longest: row.streak_longest,
    lastActiveDate: row.streak_last_active,
  },
});

const stateToRow = (userId, state) => ({
  user_id: userId,
  subscription_plan: state.subscription.plan,
  subscription_since: state.subscription.since,
  exam_level: state.examLevel || 'kozep',
  progress: state.progress,
  xp: state.xp,
  streak_current: state.streak.current,
  streak_longest: state.streak.longest,
  streak_last_active: state.streak.lastActiveDate,
  updated_at: new Date().toISOString(),
});

export const fetchUserProgress = async (userId) => {
  const { data, error } = await supabase.from(TABLE).select('*').eq('user_id', userId).maybeSingle();
  if (error) {
    console.warn('[progressApi] Nem sikerult betolteni a progresszt:', error);
    return { data: null, error };
  }
  return { data: data ? rowToState(data) : null, error: null };
};

export const upsertUserProgress = async (userId, state) => {
  const { error } = await supabase
    .from(TABLE)
    .upsert(stateToRow(userId, state), { onConflict: 'user_id' });
  if (error) {
    console.warn('[progressApi] Nem sikerult menteni a progresszt:', error);
  }
  return { error };
};
