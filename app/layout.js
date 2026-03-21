import { AuthContextProvider } from "./contexts/AuthContext";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}