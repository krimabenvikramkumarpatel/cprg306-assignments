import "./globals.css";
import { AuthContextProvider } from "./contexts/AuthContext"; // Correct import

export const metadata = {
  title: "Shopping List",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}