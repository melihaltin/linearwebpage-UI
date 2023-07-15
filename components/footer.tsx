import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./icons/logo";
import { TwitterIcon } from "./icons/twitter";
import { GithubIcon } from "./icons/github";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Docs", href: "#" },
      { title: "Linear Method", href: "#" },
      { title: "Download", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Brand", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
      { title: "DPA", href: "#" },
      { title: "Terms of service", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "GitHub", href: "#" },
    ],
  },
];
const Footer = () => {
  return (
    <footer className="border-t text-sm border-transparent-white py-[5.6rem] mt-12">
      <Container className="flex flex-col md:flex-row justify-between">
        <div>
          <div className="flex h-full flex-row lg:flex-col justify-between ">
            <div className="flex text-grey items-center">
              <Logo className="w-4 h-4 mr-4" />
              Linear - Designed worldwide
            </div>
            <div className="mt-auto flex space-x-4 text-grey">
              <TwitterIcon></TwitterIcon>
              <GithubIcon></GithubIcon>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          {footerLinks.map((column) => (
            <div className="lg:min-w-[18rem] mt-10 min-w-[50%] lg:mt-0">
              <h3 className="font-medium mb-3 ">{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li className="[&_a]:last:mb-0 ">
                    <Link
                      className="text-grey mb-3 block hover:text-white transition-colors"
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
