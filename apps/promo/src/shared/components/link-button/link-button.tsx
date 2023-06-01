import NextLink, { LinkProps } from "next/link";
import { ReactNode } from "react";
import css from "./link-button.module.scss";

type LinkButtonProps = LinkProps & {
  children: ReactNode;
};

export default function LinkButton({
  href,
  children,
  ...rest
}: LinkButtonProps) {
  return (
    <NextLink href={href} className={css.root} {...rest}>
      {children}
    </NextLink>
  );
}
