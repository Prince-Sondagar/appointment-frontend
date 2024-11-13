import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AuthContextProvider from "./contexts/AuthContext";


export const metadata: Metadata = {
  title: "Appointment",
  description: "appointment creation app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          // rtl={false}
          draggable
          // pauseOnHover
          theme="light"
        />
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
