export type SessionState = Session | null;

export interface SessionProvider {
  session: SessionState;
  getSession: () => void;
  onSignIn: () => void;
  onSignOut: () => void;
}

// * Types
import type { Session } from "@supabase/supabase-js";

// * Libraries
import { ref } from "vue";
import { supabase } from "../services/supabase";

// * State Session
const session = ref<SessionState>(null);

// * Obtener sesion local del usuario
const getSession = async () => {
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    session.value = data.session;
  } else {
    return;
  }
};

// * Iniciar sesión con GitHub
const onSignIn = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:5175/auth/callback",
    },
  });
};

// * Cerrar sesión en toda la aplicación
const onSignOut = async () => {
  await supabase.auth.signOut();
  window.location.reload();
};

export const useSession: () => SessionProvider = () => ({
  session,
  getSession,
  onSignIn,
  onSignOut,
});
