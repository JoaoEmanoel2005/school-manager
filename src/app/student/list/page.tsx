// src/app/student/list/page.tsx
"use client";

import { useEffect, useState } from "react";
import { getStudentsAction } from "@/features/student/actions";
import Link from "next/link";

// Interface para tipar o estado local
interface Student {
  id: string;
  name: string;
  email: string;
  registrationNumber: string;
  course: string;
  createdAt: string;
}

export default function StudentListPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Carrega os estudantes ao montar a página
  useEffect(() => {
    async function loadStudents() {
      const result = await getStudentsAction();

      if (result.success) {
        // Convertendo as datas para string para evitar problemas de serialização no cliente
        const formattedStudents = (result.data || []).map((s: any) => ({
          ...s,
          createdAt: new Date(s.createdAt).toLocaleDateString("pt-BR"),
        }));
        setStudents(formattedStudents);
      } else {
        setError(result.error || "Erro ao carregar listagem.");
      }
      setLoading(false);
    }

    loadStudents();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-6 dark:bg-slate-900 text-slate-800 dark:text-slate-100">
      <div className="mx-auto max-w-5xl">
        {/* Cabeçalho da Página */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Estudantes Cadastrados
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Gerencie e visualize todos os alunos ativos no sistema.
            </p>
          </div>
          <Link
            href="/student/register"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-colors"
          >
            + Novo Estudante
          </Link>
        </div>

        {/* Estado de Carregamento */}
        {loading && (
          <div className="flex h-40 items-center justify-center rounded-xl bg-white shadow dark:bg-slate-800">
            <p className="text-slate-500 animate-pulse">
              Buscando estudantes na memória...
            </p>
          </div>
        )}

        {/* Estado de Erro */}
        {error && !loading && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
            {error}
          </div>
        )}

        {/* Tabela de Dados */}
        {!loading && !error && (
          <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800">
            {students.length === 0 ? (
              <div className="p-12 text-center">
                <p className="text-lg font-medium text-slate-600 dark:text-slate-400">
                  Nenhum estudante encontrado
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  Cadastre o primeiro aluno para vê-lo aqui.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 font-semibold uppercase border-b border-slate-100 dark:border-slate-700">
                    <tr>
                      <th className="px-6 py-4">Matrícula</th>
                      <th className="px-6 py-4">Nome</th>
                      <th className="px-6 py-4">E-mail</th>
                      <th className="px-6 py-4">Curso</th>
                      <th className="px-6 py-4">Data Cadastro</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                    {students.map((student) => (
                      <tr
                        key={student.id}
                        className="hover:bg-slate-50/80 dark:hover:bg-slate-700/30 transition-colors"
                      >
                        <td className="px-6 py-4 font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                          {student.registrationNumber}
                        </td>
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                          {student.name}
                        </td>
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">
                          {student.email}
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                            {student.course}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">
                          {student.createdAt}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
