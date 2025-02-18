import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "@/app/_components/ReservationContext";
// import SessionWrapper from "./_components/SessionWrapper";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotal, located in the heart of the Italian Dolomites surrounded by the beautiful mountains and dark forests",
};
export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
