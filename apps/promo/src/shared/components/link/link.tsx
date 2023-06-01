import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { ReactNode } from "react";

type LinkProps = NextLinkProps & {
  children: ReactNode;
};

export default function Link({ href, children }: LinkProps) {
  return <NextLink href={href}>{children}</NextLink>;
}
