import React, { useCallback, useState } from "react";
import { View, SafeAreaView, Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useUser } from "./userContext";
import { WebView } from "react-native-webview";

export default function WebViewScreen({ initialUrl, requireLogin }) {
  const { user, setUser } = useUser();
  const [url, setUrl] = useState(initialUrl);

  useFocusEffect(
    useCallback(() => {
      if (requireLogin && !user) {
        Alert.alert("Please login first...");
        setUrl("https://koopjouwvignet.nl/inloggen");
      }
    }, [user, requireLogin])
  );

  const handleNavigationChange = (navState) => {
    // Check if the user has successfully logged in based on the URL change
    if (navState.url.includes("/account") && !user) {
      // Assuming the presence of "/account" in the URL means the user is logged in
      setUser(true);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <SafeAreaView style={{ flex: 1, top: 30 }}>
        <WebView
          source={{ uri: url }}
          style={{ flex: 1 }}
          onNavigationStateChange={handleNavigationChange}
        />
        <View style={{ padding: 10, backgroundColor: "white" }}></View>
      </SafeAreaView>
    </SafeAreaView>
  );
}
