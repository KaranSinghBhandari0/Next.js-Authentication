import { Toaster } from "react-hot-toast";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "AuthPortal",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
