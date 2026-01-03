import { Facebook, House, Instagram, Cloudy } from "lucide-react";
// import { Facebook, House, Instagram, Package, Phone, Cloudy } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-700 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4 py-8 text-gray-300">

            {/* Contenido principal */}
            <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-start md:justify-between">

                {/* Logo / Nombre */}
                <div className="flex items-center justify-center gap-2 md:justify-start">
                    <Cloudy className="h-6 w-6 text-indigo-400" />
                    <h2 className="text-xl font-bold tracking-wider text-white">
                        PG <span className="text-indigo-400">CLOUD</span>
                    </h2>
                </div>

                {/* Navegación */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
                        Links
                    </h3>

                    <ul className="space-y-2 text-sm">
                        <li>
                            <a
                                href="/"
                                className="flex items-center gap-1 hover:text-indigo-400 transition-colors"
                            >
                                <House className="h-4 w-4" />
                                <span>Inicio</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Redes sociales */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
                        Sígueme
                    </h3>

                    <div className="flex gap-4">
                        <a
                            href="https://www.facebook.com/AndreyPerezG1"
                            className="transition-transform hover:scale-110 hover:text-indigo-400"
                        >
                            <Facebook className="h-5 w-5" />
                        </a>
                        <a
                            href="https://www.instagram.com/andreyperezg1"
                            className="transition-transform hover:scale-110 hover:text-indigo-400"
                        >
                            <Instagram className="h-5 w-5" />
                        </a>
                    </div>
                </div>

            </div>

            {/* Línea inferior */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} PG CLOUD
            </div>
        </footer>
    )
}