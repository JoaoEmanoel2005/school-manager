import { UserModel, UserProps, usersDatabase } from "../user/user.model";

// Propriedades exclusivas do professor + propriedades do usuário base
export interface TeacherProps extends Omit<UserProps, "role"> {
  functionalRecord: string; // Registro funcional (equivalente a matrícula para professores)
  department: string;
  subject: string;
}

export class TeacherModel extends UserModel {
  public functionalRecord: string;
  public department: string;
  public subject: string;

  constructor(props: TeacherProps) {
    // Passa os dados obrigatórios para o construtor do UserModel (classe pai)
    super({
      ...props,
      role: "TEACHER", // Força o papel como TEACHER automaticamente
    });

    this.functionalRecord = props.functionalRecord;
    this.department = props.department;
    this.subject = props.subject;
  }

  // Regra específica: Buscar professor pelo seu registro funcional
  static findByFunctionalRecord(functionalRecord: string): TeacherModel | undefined {
    return usersDatabase.find(
      (user) =>
        user.role === "TEACHER" && user.functionalRecord === functionalRecord,
    );
  }
}
