"use server";

import { UserModel } from "../user/user.model";
import { TeacherModel, TeacherProps } from "./teacher.model";

export async function createTeacherAction(formData: TeacherProps) {
    try {
        // 1. Validação de e-mail duplicado usando o método do modelo genérico (User)
        const emailExists = UserModel.findByEmail(formData.email);
        if (emailExists) {
            return { success: false, error: "Este e-mail já está em uso." };
        }

        // 2. Validação de registro funcional usando o método específico do Teacher
        const functionalRecordExists = TeacherModel.findByFunctionalRecord(
            formData.functionalRecord
        );
        if (functionalRecordExists) {
            return { success: false, error: "Este registro funcional já está cadastrado." };
        }

        // 3. Instancia o novo professor
        const newTeacher = new TeacherModel({
            name: formData.name,
            email: formData.email,
            functionalRecord: formData.functionalRecord,
            department: formData.department,
            subject: formData.subject,
        });

        // 4. Salva na nossa lista simulada usando o método herdado do pai
        newTeacher.save();

        // Apenas para debugar no terminal e ver se salvou na lista global
        console.log("Banco de Dados Atual:", UserModel.findAll());

        return {
            success: true,
            message: "Professor cadastrado com sucesso!",
            data: { id: newTeacher.id, name: newTeacher.name },
        };
    } catch (error) {
        return { success: false, error: "Erro interno ao cadastrar professor." };
    }
}

export async function getTeachersAction() {
    try {
        const allUsers = UserModel.findAll();

        // 1. Filtra os usuários com a role 'TEACHER'
        const teachersInstances = allUsers.filter(
            (user) => user.role === "TEACHER"
        );

        // 2. CORREÇÃO: Transforma as instâncias da classe em objetos literais puros
        const plainTeachers = teachersInstances.map((teacher) => ({
            id: teacher.id,
            name: teacher.name,
            email: teacher.email,
            functionalRecord: (teacher as TeacherModel).functionalRecord,
            department: (teacher as TeacherModel).department,
            subject: (teacher as TeacherModel).subject,
        }));
        return {
            success: true,
            data: plainTeachers,
        };
    } catch (error) {
        return { success: false, error: "Erro interno ao buscar professores." };
    }
}
