import React from "react";
import { Github, LifeBuoy, ShieldCheck } from "lucide-react";

export default function UserFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 bg-white py-6 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* 1. Copyright e Nome */}
        <div className="text-sm text-slate-500">
          © {currentYear}{" "}
          <span className="font-semibold text-slate-700">SchoolManager</span>.
          Todos os direitos reservados.
        </div>

        {/* 2. Links Rápidos / Suporte */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="flex items-center gap-1 text-sm text-slate-500 hover:text-blue-600 transition-colors"
          >
            <LifeBuoy size={16} />
            Suporte
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-sm text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ShieldCheck size={16} />
            Privacidade
          </a>
          <a
            href="https://github.com/JoaoEmanoel2005"
            target="_blank"
            className="text-slate-400 hover:text-slate-900 transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
