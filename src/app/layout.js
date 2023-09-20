import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://wexorai.com"),
  title: {
    default: "WEXOR AI",
    template: `%s | WEXOR AI`,
  },
  description: "AI business solutions",
  verification: {
    google: "google-site-verification: google13431dd41fcdcc70.html",
  },
  category:"technology",
  robots:{
    index: false,
    follow:true,
    nocache:true,
  },
  keywords:["wexor","wexorAI","wexorAI website","AI automation in Calicut","software development in Calicut","AI automation in Kerala","software development in Kerala","AI automation in Kottakkal","software development in Kottakkal","wexorai contactus page","wexorai login page","wexor ai register page",]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          // crossOrigin
          crossOrigin="anonymous"

        ></link>
        {/* google font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Aldrich&family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Ysabeau+Infant:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        {/* font awsome */}
        {/* <link
          rel="stylesheet"
          href="path/to/font-awesome/css/font-awesome.min.css"
        ></link> */}
      </head>
      <body className="text-white font-secondary text-lg leading-8">
        {children}
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossOrigin="anonymous"
          async // Add the async attribute to load asynchronously
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossOrigin="anonymous"
          async // Add the async attribute to load asynchronously
        ></script>
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossOrigin="anonymous"
          async // Add the async attribute to load asynchronously
        ></script>
        {/* j quary link */}
        {/* <script
          src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
          type="text/javascript"
          async // Add the async attribute to load asynchronously
        ></script> */}
      </body>
    </html>
  );
}
