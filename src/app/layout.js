import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./globals.css";

export const metadata = {
  title: "Grupo 2 Ecommerce",
  description: "Trabajo Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
