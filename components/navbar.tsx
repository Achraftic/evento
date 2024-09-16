'use client'
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation"; 
import {motion} from 'framer-motion'

// Import useRouter

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, Logo } from "@/components/icons";

export const Navbar = () => {

     const pathname= usePathname()
     console.log(pathname)
     const validePath = (path: string) => {
      if (path === "/") {
        return path;
      }
      // Returning the regular expression or path
      return new RegExp(`^${path}/?$`).test("/about"); // Matches the path with or without a trailing slash
    };
   console.log( validePath("/about/ao") )

  return (
    <NextUINavbar maxWidth="lg" position="sticky">
      <NavbarBrand as="li" className="gap-3 max-w-fit">
        <NextLink className="flex justify-start items-center gap-1" href="/">
          <Logo />
          <p className="font-bold text-inherit">ACME</p>
        </NextLink>
      </NavbarBrand>

      <NavbarContent className="basis-1/5 sm:basis-full " justify="end">
        <ul className="hidden sm:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  pathname === item.href
                    ? " font-bold" // Apply active styles
                    : "", // Normal link styles
                  "data-[active=true]:text-primary text-foreground data-[active=true]:font-medium relative"
                )}
                href={item.href}
              >
                {item.label}
                { pathname === item.href &&  <motion.div layoutId="ligne_relative" className="h-1 bg-secondary rounded-2xl absolute w-full -bottom-2"></motion.div>}
               
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <ThemeSwitch className="sm:block hidden" />

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={item.href} // Corrected href
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
