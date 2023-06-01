import BaseLayout from "@/shared/layout/base";
import H1 from "@/shared/layout/base/h1";
import P from "@/shared/components/p";

export default function NotFound() {
  return <BaseLayout header={<H1>404</H1>} content={<P>Page not found</P>} />;
}
