import { supabase } from "./supabase";

export async function signUpNewUser(userEmail: string, userPassword: string) {
    return await supabase.auth.signUp({
      email: userEmail,
      password: userPassword,
    });
  }

export async function signInWithEmail(userEmail: string, userPassword: string) {
    return await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword,
    });
  }
  
export async function signOut() {
    const { error } = await supabase.auth.signOut()
  }

