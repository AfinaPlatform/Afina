import { ReactNode } from "react";

type PProps = {
  children: ReactNode;
};

export default function P({ children }: PProps) {
  return <p>{children}</p>;
}
