import "./globals.css";
import Navbar from "./COMMON/Navbar"; // navbar import

export const metadata = {
  title: "18 Homes - Elegant Interior Design Solutions",
  description: "Transforming Spaces with Style and Comfort",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
     
        {children}
      
      </body>
    </html>
  );
}
