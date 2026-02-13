import Link from "next/link";
import { User, GraduationCap } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-10">
          <h1 className="text-3x1 md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Portal de acesso
        </h1>
          <p className="mt-3 text-slate-600">Selecione seu perfil para entrar na plataforma</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols gap-6">

          {/* Botao User/aluno */}
          <Link
            href="/user/home"
          className="group flex flex-col items-center p-10 bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
          >
            <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
              <User size={40} />
            </div>
            <h2 className="mt-6 text-xl font-bold text-slate-800">Área do Aluno</h2>
            <p className="mt-2 text-center text-slate-500 text-sm">
              Veja suas aulas, notas e progresso acadêmico
            </p>
          </Link>

          {/* Botão Professor */}

          <Link
          href="/teacher/home"
          className="group flex flex-col items-center p-10 bg-white rounded-03xl border border-slate-200 shadow-sm hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300"
          >
            <div className="p-4 bg-emerald-50 rounded-2xl text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
            <GraduationCap size={40}/>
            </div>
            <h2 className="mt-6 text-xl font-bold text-slate-800">Área do Professor</h2>
            <p className="mt-2 text-center text-slate-500 text-sm">
              Gerencie turmas, lance notas e organize conteúdos.
          </p>
          </Link>
        </div>
      </div>
   </main>
  );
}
