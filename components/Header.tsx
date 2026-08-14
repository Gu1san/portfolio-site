"use client";
import { useState } from "react";
import HeaderLink from "./HeaderLink";
import { ChevronDown, MenuIcon, X } from "lucide-react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import DialogButton from "./DialogButton";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="absolute top-0 lg:top-3.5 flex flex-row justify-between align-center bg-background-tertiary/55 border-b lg:border border-brand lg:rounded-3xl w-full lg:w-2/3 max-h-16 py-4 px-3">
      <nav className="flex flex-1 flex-row justify-between gap-3">
        <a className="flex items-center justify-between">
          <span className="sr-only">Guilherme Logo</span>
          <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="h-8 w-auto"
          />
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center cursor-pointer rounded-md p-2.5 text-foreground"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-5">
          <HeaderLink link={"#"} text="Início" />
          <HeaderLink link={"#about"} text="Sobre" />
          <HeaderLink link={"#technologies"} text="Tecnologias" />
          <HeaderLink link={"#projects"} text="Projetos" />
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 font-semibold transparent rounded-xl py-1 px-2 hover:bg-brand  transition">
              Experiências
              <ChevronDown aria-hidden="true" className="size-5 flex-none" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute flex flex-col left-1/2 z-10 gap-2 p-2.5 mt-5 max-w-md -translate-x-1/2 overflow-hidden rounded-2xl bg-background-secondary outline-1 -outline-offset-1 outline-white/10 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <HeaderLink link={"#experiences"} text="Experiências" />
              <HeaderLink link={"#experiences"} text="Experiências" />
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background-secondary p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Guilherme Logo</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-foreground cursor-pointer"
            >
              <span className="sr-only">Close menu</span>
              <X aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                <DialogButton link="#">Início</DialogButton>
                <DialogButton link="#">Sobre</DialogButton>
                <DialogButton link="#">Tecnologias</DialogButton>
                <DialogButton link="#">Projetos</DialogButton>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-foreground hover:bg-hover">
                    Experiências
                    <ChevronDown
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180 transition"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    <DisclosureButton
                      as="a"
                      href={""}
                      className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-foreground hover:bg-hover"
                    >
                      Profissional
                    </DisclosureButton>
                    <DisclosureButton
                      as="a"
                      href={""}
                      className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-foreground hover:bg-hover"
                    >
                      Acadêmico
                    </DisclosureButton>
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
