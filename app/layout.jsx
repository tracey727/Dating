import "./globals.css";

export const metadata = {
  title: "GENEVIEVE — Meet people who fit",
  description: "Verified, compatibility-first dating for real people."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="ambient ambientOne" />
        <div className="ambient ambientTwo" />
        {children}
      </body>
    </html>
  );
}
