import { ReactNode } from "react";
import "@/styles/global.scss";

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
