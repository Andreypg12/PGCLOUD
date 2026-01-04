import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, } from "@/components/ui/menubar";

import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";

import logo from "@/assets/logo.png";

export default function Header() {
    return (
        <header id="header" className="bordePersonalizado">
            <div className="mx-auto flex h-16 items-center gap-8 px-20">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-12 w-auto rounded-full object-cover"
                    />
                </Link>
                <span>Nombre de usuario</span>

                {/* Menú */}
                <Menubar className="border-none bg-transparent">
                    <MenubarMenu>
                        <MenubarTrigger className="text-base font-medium">
                            Menú
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem asChild>
                                <Link to="/">Inicio</Link>
                            </MenubarItem>
                            <MenubarItem>Archivos</MenubarItem>
                            <MenubarItem>Perfil</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>

            </div>
        </header>
    )
}