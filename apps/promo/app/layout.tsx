import { ReactNode } from "react";
import "@/styles/global.scss";
import GoogleTagManager, {
  GoogleTagManagerNoscript,
} from "@/shared/scripts/google-tag-manager";

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      {/* <head>
        <GoogleTagManager />
      </head> */}
      <body>
        {/* <GoogleTagManagerNoscript /> */}
        {children}
      </body>
    </html>
  );
}
