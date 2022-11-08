import type { FC, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAddress, useMetamask } from "@thirdweb-dev/react";
import MagnifyingGlassIcon from "./SearchInput";
import NavMenus from "./NavMenus";

interface ILayout {
    children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
    const connectMetamask = useMetamask();
    const userAddress = useAddress();

    const handelConnect = () => {
        connectMetamask();
    };

    const menus = [
        {
            name: "Explore",
            href: "#",
        },
        {
            name: "Stats",
            href: "#",
        },
        {
            name: "Resources",
            href: "#",
        },
        {
            name: "Create",
            href: "#",
        },
    ];

    return (
        <div className="flex min-h-screen w-full flex-col overflow-hidden bg-[#202225]">
            <header className="border: 0px bg-[#202226]">
                <div className="container mx-auto flex justify-between py-4 px-4 sm:px-0">
                    <Link href={"/"}>
                        <h1 className="flex cursor-pointer items-center font-extrabold">
                            <Image src="/opensea.svg" width={36} height={36} />
                            <span className="pl-2 text-xl text-white sm:pl-4 sm:text-2xl">
                                Opensea
                            </span>
                        </h1>
                    </Link>
                    <div className="ml-8 hidden flex-1 sm:block">
                        <MagnifyingGlassIcon />
                    </div>
                    <div className="hidden pr-6 lg:block xl:pl-8"></div>
                    <div className="hidden pr-6 lg:block xl:pl-8">
                        <NavMenus menus={menus} />
                    </div>
                    <button
                        className="max-w-[120px] truncate  rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-5 text-white hover:opacity-80 sm:max-w-[200px]"
                        onClick={handelConnect}
                    >
                        {userAddress ? userAddress : "Connect MetaMask"}
                    </button>
                </div>
            </header>
            <main className="grow">{children}</main>
            <footer className="bg-[#04111d]">
                <div className="container mx-auto">
                    <p className="py-4 text-center text-white">
                        © 2022 markglenn
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
