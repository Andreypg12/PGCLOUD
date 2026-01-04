import { Link } from "react-router-dom";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Menu, X, Home, Folder, User } from "lucide-react";

import logo from "@/assets/logo.png";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">

                {/* IZQUIERDA – Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="hidden sm:block text-lg font-bold text-slate-800">
                        PG <span className="text-indigo-500">CLOUD</span>
                    </span>
                </Link>

                {/* CENTRO – Menú desktop */}
                <div className="hidden md:flex items-center gap-6">
                    <Link
                        to="/"
                        className="flex items-center gap-1 text-slate-600 hover:text-indigo-500 transition"
                    >
                        <Home size={18} />
                        Inicio
                    </Link>

                    <Link
                        to="/archivos"
                        className="flex items-center gap-1 text-slate-600 hover:text-indigo-500 transition"
                    >
                        <Folder size={18} />
                        Archivos
                    </Link>

                    <Link
                        to="/perfil"
                        className="flex items-center gap-1 text-slate-600 hover:text-indigo-500 transition"
                    >
                        <User size={18} />
                        Perfil
                    </Link>
                </div>

                {/* DERECHA – Usuario + hamburguesa */}
                <div className="flex items-center gap-3">
                    <span className="hidden sm:block text-sm text-slate-600">
                        Nombre de usuario
                    </span>

                    {/* Botón hamburguesa (solo móvil) */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X /> : <Menu />}
                    </Button>
                </div>
            </div>

            {/* MENÚ MÓVIL */}
            {open && (
                <div className="md:hidden border-t bg-white">
                    <nav className="flex flex-col gap-2 p-4">
                        <Link
                            to="/"
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-slate-100"
                        >
                            <Home size={18} />
                            Inicio
                        </Link>

                        <Link
                            to="/archivos"
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-slate-100"
                        >
                            <Folder size={18} />
                            Archivos
                        </Link>

                        <Link
                            to="/perfil"
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-slate-100"
                        >
                            <User size={18} />
                            Perfil
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}