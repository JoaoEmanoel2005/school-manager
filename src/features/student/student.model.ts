import { UserModel, UserProps, usersDatabase } from "../user/user.model";

// Propriedades exclusivas do estudante + propriedades do usuário base
export interface StudentProps extends Omit<UserProps, "role"> {
  registrationNumber: string; // Matrícula
  course: string;
}

export class StudentModel extends UserModel {
  public registrationNumber: string;
  public course: string;

  constructor(props: StudentProps) {
    // Passa os dados obrigatórios para o construtor do UserModel (classe pai)
    super({
      ...props,
      role: "STUDENT", // Força o papel como STUDENT automaticamente
    });

    this.registrationNumber = props.registrationNumber;
    this.course = props.course;
  }

  // Regra específica: Buscar estudante por matrícula
  static findByRegistration(registration: string): StudentModel | undefined {
    return usersDatabase.find(
      (user) =>
        user.role === "STUDENT" && user.registrationNumber === registration,
    );
  }
}
