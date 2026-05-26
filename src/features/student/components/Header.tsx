import React from "react";
import { Bell, Search, User, LogOut, BookOpen } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white px-6">
      {/* 1. Logo / Nome do Projeto */}
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
          <BookOpen size={20} />
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-800 hidden sm:block">
          SchoolManager
        </span>
      </div>

      {/* 2. Barra de Busca (Opcional, mas muito útil) */}
      <div className="relative hidden md:flex items-center w-1/3">
        <Search className="absolute left-3 text-slate-400" size={18} />
        <input
          type="text"
          placeholder="Buscar aulas, notas ou avisos..."
          className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
        />
      </div>

      {/* 3. Ações e Perfil */}
      <div className="flex items-center gap-4">
        {/* Notificações */}
        <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
        </button>

        <div className="h-8 w-px bg-slate-200 mx-2"></div>

        {/* Info do Aluno */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-slate-900 leading-none">
              João Emanoel
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Sistemas • 3º Semestre
            </p>
          </div>

          <div className="h-10 w-10 rounded-full bg-slate-200 border-2 border-transparent group-hover:border-blue-500 transition-all flex items-center justify-center overflow-hidden">
            {/* Aqui você pode usar o componente Image do Next.js depois */}
            <User size={24} className="text-slate-500" />
          </div>
        </div>
      </div>
    </header>
  );
}
