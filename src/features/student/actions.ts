// src/features/student/actions.ts
"use server";

import { UserModel } from "../user/user.model";
import { StudentModel, StudentProps } from "./student.model";

//funcao de criacao de estudante, que sera chamada pela pagina de registro do estudante
export async function createStudentAction(formData: StudentProps) {
  try {
    // 1. Validação de e-mail duplicado usando o método do modelo genérico (User)
    const emailExists = UserModel.findByEmail(formData.email);
    if (emailExists) {
      return { success: false, error: "Este e-mail já está em uso." };
    }

    // 2. Validação de matrícula usando o método específico do Student
    const registrationExists = StudentModel.findByRegistration(
      formData.registrationNumber,
    );
    if (registrationExists) {
      return { success: false, error: "Esta matrícula já está cadastrada." };
    }

    // 3. Instancia o novo estudante
    const newStudent = new StudentModel({
      name: formData.name,
      email: formData.email,
      registrationNumber: formData.registrationNumber,
      course: formData.course,
    });

    // 4. Salva na nossa lista simulada usando o método herdado do pai
    newStudent.save();

    // Apenas para debugar no terminal e ver se salvou na lista global
    console.log("Banco de Dados Atual:", UserModel.findAll());

    return {
      success: true,
      message: "Estudante cadastrado com sucesso!",
      data: { id: newStudent.id, name: newStudent.name },
    };
  } catch (error) {
    return { success: false, error: "Erro interno ao cadastrar estudante." };
  }
}

//funcao para buscar todos os estudantes, que pode ser chamada por uma pagina de listagem de estudantes

export async function getStudentsAction() {
  try {
    const allUsers = UserModel.findAll();

    // 1. Filtra os usuários com a role 'STUDENT'
    const studentsInstances = allUsers.filter(
      (user) => user.role === "STUDENT",
    );

    // 2. CORREÇÃO: Transforma as instâncias da classe em objetos literais puros
    const plainStudents = studentsInstances.map((student) => ({
      id: student.id,
      name: student.name,
      email: student.email,
      role: student.role,
      registrationNumber: student.registrationNumber,
      course: student.course,
      createdAt: student.createdAt,
    }));

    return { success: true, data: plainStudents };
  } catch (error) {
    return { success: false, error: "Erro ao buscar estudantes.", data: [] };
  }
}