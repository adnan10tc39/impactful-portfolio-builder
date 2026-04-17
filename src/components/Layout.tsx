import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main className="pt-16 md:pt-20">{children}</main>
    <Footer />
  </>
);
