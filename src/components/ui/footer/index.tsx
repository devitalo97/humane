import { Inter } from "next/font/google";
import Image from "next/image";
import LinkedinIcon from "@/assets/svgs/linkedin.svg";
import InstagramIcon from "@/assets/svgs/instagram.svg";
import FacebookIcon from "@/assets/svgs/facebook.svg";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const footerNavigation = {
  solutions: [
    { name: "Hosting", href: "#" },
    { name: "Data services", href: "#" },
    { name: "Uptime monitoring", href: "#" },
    { name: "Enterprise services", href: "#" },
    { name: "Analytics", href: "#" },
  ],
  support: [
    { name: "Submit ticket", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
  ],
  legal: [
    { name: "Terms of service", href: "#" },
    { name: "Privacy policy", href: "#" },
    { name: "License", href: "#" },
  ],
};

export default function Footer() {
  // return (
  //   <S.Container>
  //     <S.Wrapper>
  //       <S.Line display="flex" justifyContent="flex-end">
  //         <S.Nav>
  //           <Link href={"/blog"}>
  //             <Image src={linkedin} alt="linkedin" />
  //           </Link>
  //           <Link href={"/gallery"}>
  //             <Image src={instagram} alt="instagram" />
  //           </Link>
  //           <Link href={"/blog"}>
  //             <Image src={facebook} alt="facebook" />
  //           </Link>
  //         </S.Nav>
  //       </S.Line>
  //       <S.BottomLine
  //         display="flex"
  //         alignItems="flex-end"
  //         justifyContent="space-between"
  //       >
  //         <Link href={"/"}>
  //           <Image
  //             src={logotipo}
  //             alt="Logo tipo humane"
  //             style={{ height: "3em", width: "auto" }}
  //           />
  //         </Link>
  //         <S.RightsLine
  //           display="flex"
  //           flexDirection="column"
  //           alignItems="flex-end"
  //         >
  //           <S.Text style={inter.style}>Português</S.Text>
  //           <S.Text style={inter.style}>
  //             Termos e Políticas de privacidade
  //           </S.Text>
  //           <S.Text style={inter.style}>
  //             Humaning 2024 - Todos os direitos reservados
  //           </S.Text>
  //         </S.RightsLine>
  //       </S.BottomLine>
  //     </S.Wrapper>
  //   </S.Container>
  // );

  return (
    <div className="bg-white">
      <footer className="mx-auto max-w-7xl px-6 lg:px-8 bg-white">
        <div className="border-t border-gray-900/10 py-16 sm:py-24 lg:py-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <img
              alt="Company name"
              src="/logo/logo_humaning_color.svg"
              className="h-9"
            />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-gray-900">
                    Redes Sociais
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <Link href="https://www.linkedin.com/in/luiz-ricardo-pereira-de-souza-62634575/" target="_blank" className="flex gap-2 items-center">
                      <LinkedinIcon className="h-8 w-8"/>
                      <p className="text-sm/6 text-gray-600 hover:text-gray-900">LinkedIn</p>
                    </Link>
                    <Link href="https://www.instagram.com/luizricardo.humane?igsh=MTRzcmpiNHMybDRpMg==" target="_blank" className="flex gap-2 items-center">
                      <InstagramIcon className="h-8 w-8"/>
                      <p className="text-sm/6 text-gray-600 hover:text-gray-900">Instagram</p>
                    </Link>
                  </ul>

                </div>
                {/* <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-gray-900">
                    Support
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm/6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>
              {/* <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-gray-900">
                    Company
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm/6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-gray-900">
                    Legal
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm/6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
