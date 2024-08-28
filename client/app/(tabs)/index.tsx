import WebViewScreen from "../webview";

export default function HomeScreen() {
  return (
    <WebViewScreen
      initialUrl="https://koopjouwvignet.nl/"
      requireLogin={false}
    />
  );
}
