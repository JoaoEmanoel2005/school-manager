// src/app/student/register/page.tsx
"use client";

import { useState } from "react";
import { createStudentAction } from "@/features/student/actions";

export default function StudentRegisterPage() {
  // Estados para controlar o formulário e retornos
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [course, setCourse] = useState("");

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage({ type: null, text: "" });

    // Chama a Server Action passando os dados estruturados do estudante
    const result = await createStudentAction({
      name,
      email,
      registrationNumber,
      course,
    });

    setLoading(false);

    if (result.success) {
      setResponseMessage({
        type: "success",
        text: result.message || "Sucesso!",
      });
      // Limpa o formulário em caso de sucesso
      setName("");
      setEmail("");
      setRegistrationNumber("");
      setCourse("");
    } else {
      setResponseMessage({
        type: "error",
        text: result.error || "Erro inesperado.",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4 dark:bg-slate-900">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg border border-slate-100 dark:bg-slate-800 dark:border-slate-700">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
            Portal do Estudante
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Crie uma nova conta de aluno
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo: Nome */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Nome Completo
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: João Silva"
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
            />
          </div>

          {/* Campo: E-mail */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              E-mail
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="joao@escola.com"
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Campo: Matrícula */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Matrícula
              </label>
              <input
                type="text"
                required
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                placeholder="2026XYZ"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
              />
            </div>

            {/* Campo: Curso */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Curso
              </label>
              <input
                type="text"
                required
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder="Ex: TI"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
              />
            </div>
          </div>

          {/* Botão de Envio */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-2.5 px-4 font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 transition-colors"
          >
            {loading ? "Cadastrando..." : "Cadastrar Estudante"}
          </button>
        </form>

        {/* Mensagens de Feedback */}
        {responseMessage.type && (
          <div
            className={`mt-4 rounded-lg p-3 text-center text-sm font-medium ${
              responseMessage.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
                : "bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800"
            }`}
          >
            {responseMessage.text}
          </div>
        )}
      </div>
    </div>
  );
}
