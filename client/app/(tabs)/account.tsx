import WebViewScreen from "../webview";

export default function Account() {
  return (
    <WebViewScreen
      initialUrl="https://koopjouwvignet.nl/inloggen"
      requireLogin={false}
    />
  );
}
