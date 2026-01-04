import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {
  FileImage,
  FileText,
  File,
  FilePlusCorner,
  FolderPlus,
  Folder,
} from "lucide-react";

export default function Home() {
  return (
    <main className="h-full bg-linear-to-b from-slate-50 to-slate-100 p-6">
      {/* TÍTULO */}
      <section className="max-w-7xl mx-auto mb-10">
        <h1 className="text-3xl font-bold text-slate-800">
          Archivos recientes
        </h1>
        <p className="text-slate-500 mt-1">Los últimos archivos que abriste</p>
      </section>

      {/* CARDS */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <Card className="hover:shadow-lg transition cursor-pointer">
          <CardHeader className="flex flex-row items-center gap-3">
            <FileImage className="text-indigo-500" />
            <CardTitle className="text-base">foto_viaje.png</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-500">
            Abierto hace 2 horas
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition cursor-pointer">
          <CardHeader className="flex flex-row items-center gap-3">
            <FileText className="text-emerald-500" />
            <CardTitle className="text-base">tarea_final.pdf</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-500">
            Abierto ayer
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition cursor-pointer">
          <CardHeader className="flex flex-row items-center gap-3">
            <File className="text-amber-500" />
            <CardTitle className="text-base">notas_clase.docx</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-500">
            Abierto hace 3 días
          </CardContent>
        </Card>
      </section>

      <hr className="my-6 border-gray-300" />

      {/* ACCIONES */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold text-slate-800 mb-4 text-center">
          Archivos y ficheros
        </h2>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="secondary" className="flex-1 h-14 text-base gap-2">
            <FilePlusCorner />
            Nuevo archivo
          </Button>

          <Button variant="secondary" className="flex-1 h-14 text-base gap-2">
            <FolderPlus />
            Nueva carpeta
          </Button>
        </div>
      </section>

      {/* EXPLORADOR */}
      <section className="max-w-7xl mx-auto mt-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-6 text-center">
          Mis archivos
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
          {/* CARPETA */}
          <div className="group cursor-pointer flex flex-col items-center">
            <div className="p-4 rounded-xl group-hover:bg-slate-200 transition">
              <Folder className="h-14 w-14 text-amber-500" />
            </div>
            <p className="mt-2 text-sm text-slate-800 text-center">
              Documentos
            </p>
          </div>

          {/* IMAGEN */}
          <div className="group cursor-pointer flex flex-col items-center">
            <div className="p-4 rounded-xl group-hover:bg-slate-200 transition">
              <FileImage className="h-14 w-14 text-indigo-500" />
            </div>
            <p className="mt-2 text-sm text-slate-800 text-center">foto.png</p>
          </div>

          {/* PDF */}
          <div className="group cursor-pointer flex flex-col items-center">
            <div className="p-4 rounded-xl group-hover:bg-slate-200 transition">
              <FileText className="h-14 w-14 text-emerald-500" />
            </div>
            <p className="mt-2 text-sm text-slate-800 text-center">
              reporte.pdf
            </p>
          </div>

          {/* DOC */}
          <div className="group cursor-pointer flex flex-col items-center">
            <div className="p-4 rounded-xl group-hover:bg-slate-200 transition">
              <File className="h-14 w-14 text-slate-500" />
            </div>
            <p className="mt-2 text-sm text-slate-800 text-center">
              notas.docx
            </p>
          </div>

          <div className="group cursor-pointer flex flex-col items-center">
            <div className="p-4 rounded-xl group-hover:bg-slate-200 transition">
              <FileText className="h-14 w-14 text-slate-500" />
            </div>
            <p className="mt-2 text-sm text-slate-800 text-center">notas.txt</p>
          </div>
        </div>
      </section>
    </main>
  );
}
