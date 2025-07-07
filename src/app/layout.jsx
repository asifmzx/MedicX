import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

export const metadata = {
  title: "MedicX ",
  description: "A Digital Health Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className="h-full bg-gray-50 dark:bg-black transition-colors duration-300"
        suppressHydrationWarning={true}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
