import Link from "@/shared/components/link";
import Icon, { MenuIcon } from "@/shared/components/icon";

export default function HubLink() {
  return (
    <Link href="/hub">
      <Icon>
        <MenuIcon />
      </Icon>
    </Link>
  );
}
