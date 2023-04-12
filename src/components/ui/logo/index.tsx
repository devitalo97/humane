import Image from "next/image";
import Link from "next/link";
import logoIcon from "@/assets/svgs/logo_humane.svg" 

export default function Logo() {
  return (
    <>
      <Image alt="Logo Humane" src={logoIcon}/>
    </>
  )
}