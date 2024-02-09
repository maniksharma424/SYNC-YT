"use server";
import {
  createSupabaseServerClient,
  createSupabaseServerClientReadOnly,
} from "../../server";

export async function signUpWithGoogle() {
  return new Promise<any>(async (resolve, reject) => {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/api/auth",
      },
    });
    if (data) {
      resolve(data);
    } else {
      reject(error);
    }
  });
}
export async function signOut() {
  const supabase = await createSupabaseServerClient();
  return new Promise<any>(async (resolve, reject) => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      resolve(error);
    } else {
      resolve(true);
    }
  });
}
export const getSignedInUser = async () => {
  const supabase = await createSupabaseServerClient();
  return new Promise<any>(async (resolve, reject) => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (user) {
      resolve(user);
    } else {
      reject(error);
    }
  });
};
export const getServerSignedInUser = async () => {
  const supabase = await createSupabaseServerClientReadOnly();
  return new Promise<any>(async (resolve, reject) => {
    const { data, error } = await supabase.auth.getSession();

    if (data) {
      resolve(data);
    } else {
      reject(error);
    }
  });
};

export const exchangeAuthCode = async (code: string) => {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase.auth.exchangeCodeForSession(code);
  
  return { data, error };
};
