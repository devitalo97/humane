import Link from "next/link";
import Logo from "../logo";
import * as S from "./style";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { titleByPathname } from "./data";
import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, motion, useAnimation } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@headlessui/react";
const inter = Inter({ subsets: ["latin"] });

const navigation = [
  { name: "Treinamentos", href: "/course" },
  { name: "Galeria", href: "/gallery" },
  { name: "Sobre", href: "/about" },
  { name: "Entender para Atender", href: "/project/entender-para-atender" },
];

export default function Navbar() {
  const { pathname } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

    if (
      val === 0 &&
      (pathname.includes("/gallery") ||
        pathname.includes("/about") ||
        pathname.includes("/course"))
    ) {
      controls.start("color");
    }

    lastScrollY.current = val;
  });

  useEffect(() => {
    if (pathname === "/") {
      controls.start("transparent");
    }

    if (
      pathname.includes("/gallery") ||
      pathname.includes("/about") ||
      pathname.includes("/course")
    ) {
      controls.start("color");
    }
  }, [pathname]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {/* <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div> */}
              <span />
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
