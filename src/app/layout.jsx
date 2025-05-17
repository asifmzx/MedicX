import "./globals.css";
import Header from "@/Components/Shared/Header";
import Sidebar from "@/Components/Shared/Sidebar";
import { SidebarProvider } from "@/Components/Shared/SidebarContext";
import { Container } from "@/Components/UI/Container";

export const metadata = {
  title: "MedicX",
  description: "A Digital Health Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
