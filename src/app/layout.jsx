import "./globals.css";

export const metadata = {
  title: "MedicX",
  description: "A Digital Health Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="ScrollBar">
        <main>{children}</main>
      </body>
    </html>
  );
}
