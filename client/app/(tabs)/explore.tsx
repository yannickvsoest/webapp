import WebViewScreen from "../webview";

export default function TabTwoScreen() {
  return (
    <WebViewScreen
      initialUrl="https://koopjouwvignet.nl/account/bestellingen"
      requireLogin={true}
    />
  );
}
