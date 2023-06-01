import { ReactNode } from "react";

type H3Props = {
  children: ReactNode;
};

export default function H3({ children }: H3Props) {
  return <h3>{children}</h3>;
}
