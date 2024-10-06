import Image from "next/image";
import Link from "next/link";
import logoIcon from "@/assets/svgs/logo_humane.svg";

export default function Logo() {
  return (
    <Link
      href={"/"}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        alt="Logo Humaning"
        src={logoIcon}
        style={{
          width: "60px",
          height: "auto",
        }}
      />
    </Link>
  );
}
