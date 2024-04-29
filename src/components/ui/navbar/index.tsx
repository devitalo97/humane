import Link from "next/link";
import Logo from "../logo";
import * as S from "./style";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { titleByPathname } from "./data";
import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, motion, useAnimation } from "framer-motion";
import path from "path";
const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  const { pathname } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();
  const scrollYRange = [0, 100, 100];

  const containerHeight = useTransform(scrollY, scrollYRange, [
    "100px",
    "60px",
    "60px",
  ]);
  const imageSize = useTransform(scrollY, scrollYRange, [
    "60px",
    "30px",
    "30px",
  ]);
  const fontSize = useTransform(scrollY, scrollYRange, [
    "3rem",
    "1.5rem",
    "1.5rem",
  ]);
  const opacity = useTransform(scrollY, scrollYRange, [0, 1, 1]);
  const paddingHeaderX = useTransform(scrollY, scrollYRange, [
    "30px",
    "20px",
    "20px",
  ]);

  // uncomment to check values
  // scrollY.onChange((val) => console.log(`useViewportScroll.y: ${val}`));

  const controls = useAnimation();
  const delta = useRef(0);
  const lastScrollY = useRef(0);
  scrollY.onChange((val) => {
    if (pathname.includes("blog") || pathname.includes("services")) return;
    const diff = Math.abs(val - lastScrollY.current);
    if (val >= lastScrollY.current) {
      delta.current = delta.current >= 10 ? 10 : delta.current + diff;
    } else {
      delta.current = delta.current <= -10 ? -10 : delta.current - diff;
    }

    if (delta.current >= 10 && val > 200) {
      controls.start("hidden");
    } else if (delta.current <= -10 || val < 200) {
      controls.start("visible");
    } else if (val > 800) {
      controls.start("visible");
      controls.start("color");
    }

    if (val === 0 && pathname === "/") {
      controls.start("transparent");
    }

    if (val === 0 && pathname.includes("gallery")) {
      controls.start("color");
    }

    lastScrollY.current = val;
  });

  return (
    <S.Container
      as={motion.div}
      initial="visible"
      animate={controls}
      variants={{
        visible: { top: "0px" },
        hidden: { top: "-100px" },
        color: {
          background:
            "linear-gradient(43deg, rgba(1,5,50,1) 0%, rgba(14,23,65,1) 100%)",
        },
        transparent: { background: "transparent" },
      }}
      inHome={pathname === "/"}
      isScrolled={isScrolled}
    >
      <S.Wrapper>
        <span>
          <Logo />
          <S.Title style={inter.style}>{titleByPathname[pathname]}</S.Title>
        </span>
        <S.Nav>
          <Link href={"/about"}>
            <S.Text style={inter.style}>Sobre</S.Text>
          </Link>
          {/* <Link href={"/services"}><S.Text style={inter.style}>Serviços</S.Text></Link> */}
          <Link href={"/gallery"}>
            <S.Text style={inter.style}>Galeria</S.Text>
          </Link>
          <Link href={"/course"}>
            <S.Text style={inter.style}>Cursos e Treinamentos</S.Text>
          </Link>
          {/* <Link href={"/blog"}><S.Text style={inter.style}>Blog</S.Text></Link> */}
        </S.Nav>
      </S.Wrapper>
    </S.Container>
  );
}
