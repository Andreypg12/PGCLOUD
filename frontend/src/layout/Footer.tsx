import { Facebook, House, Instagram, Package, Phone, Cloudy } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-8 px-2 border-t border-gray-700">
            <div className="flex justify-center gap-80 align-middle">

                {/* nombre */}
                <div className="flex items-center gap-2 mb-2">
                    <Cloudy className="h-6 w-6 text-indigo-400" />
                    <h2 className="text-xl font-bold text-white tracking-wider">
                        PG <span className="text-indigo-400">CLOUD</span>
                    </h2>
                </div>

                {/* Navegación */}
                <div className="flex flex-col">
                    <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                        Links
                    </h3>

                    <ul className="space-y-2 text-sm">

                        <li>
                            <a
                                href="/"
                                className="flex items-center justify-center md:justify-start gap-1 hover:text-indigo-400 transition-colors duration-200"
                            >
                                <House className="h-4 w-4" />
                                <span>inicio</span>
                            </a>
                        </li>

                        {/* <li>
                            <a
                                href="/productos"
                                className="flex items-center justify-center md:justify-start gap-1 hover:text-indigo-400 transition-colors duration-200"
                            >
                                <Package className="h-4 w-4" />
                                <span>link_products</span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="/contacto"
                                className="flex items-center justify-center md:justify-start gap-1 hover:text-indigo-400 transition-colors duration-200"
                            >
                                <Phone className="h-4 w-4" />
                                <span>link_contact</span>
                            </a>
                        </li> */}

                    </ul>
                </div>

                {/* Redes sociales */}
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                        Sígueme
                    </h3>

                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/AndreyPerezG1" className="hover:text-indigo-400 transition-transform transform hover:scale-110">
                            <Facebook className="h-5 w-5" />
                        </a>
                        <a href="https://www.instagram.com/andreyperezg1" className="hover:text-indigo-400 transition-transform transform hover:scale-110">
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
    );
}