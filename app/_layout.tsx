import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { supabase } from "./utils/supabase";

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    // Check for active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      
      // if there is no session, go to login screen
      if (!session) {
        router.replace("/Login");
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const isLoginScreen = segments[0] === "Login";
      
      if (!session && !isLoginScreen) {
        router.replace("/Login");
      } 
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [segments]);

  return (
    <Stack>
      <Stack.Screen 
        name="Profile" 
        options={{ 
          title: "Profile",
          headerShown: true,
        }} 
      />
      <Stack.Screen 
        name="Login" 
        options={{ 
          title: "Login",
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="index" 
        options={{ 
          title: "Step With Friends",
          headerShown: true,
        }} 
      />
    </Stack>
  );
}
