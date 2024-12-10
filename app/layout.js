// import bootstrap
import Bootstrap from "./components/bootstrap";
import "./globals.css";

export const metadata = {
  title: "National and Local Weather, Daily Forecast, Hurricane and ...",
  description: "weather application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Bootstrap />
        {children}
      </body>
    </html>
  );
}
