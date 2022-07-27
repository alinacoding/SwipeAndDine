import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";
import { Navigation } from "./src/infrastructure/navigation";
import * as firebase from "firebase";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyDx4jyJdl01bm6Z9PJTv18j0jaPcSdAa7I",
  authDomain: "swipeanddine-3c115.firebaseapp.com",
  projectId: "swipeanddine-3c115",
  storageBucket: "swipeanddine-3c115.appspot.com",
  messagingSenderId: "952811469935",
  appId: "1:952811469935:web:a2958da6b5d09d3a29219a",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
console.log(firebaseConfig);
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavoritesContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <Navigation />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavoritesContextProvider>
        </AuthenticationContextProvider>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
