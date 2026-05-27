export interface UserProps {
  id?: string;
  name: string;
  email: string;
  role: "ADMIN" | "TEACHER" | "STUDENT";
  createdAt?: Date;
}

// CORREÇÃO: Garante que a lista persista globalmente no Node, mesmo com Hot Reload
const globalForUsers = globalThis as unknown as { usersDatabase: any[] };

export const usersDatabase = globalForUsers.usersDatabase ?? [];

if (process.env.NODE_ENV !== 'production') {
  globalForUsers.usersDatabase = usersDatabase;
}

export class UserModel {
  public id: string;
  public name: string;
  public email: string;
  public role: "ADMIN" | "TEACHER" | "STUDENT";
  public createdAt: Date;

  constructor(props: UserProps) {
    this.id = props.id || crypto.randomUUID();
    this.name = props.name;
    this.email = props.email;
    this.role = props.role;
    this.createdAt = props.createdAt || new Date();
  }

  // Método genérico para salvar qualquer tipo de usuário na lista
  public save(): this {
    // Se já existir na lista, atualiza, se não, adiciona (Simulando um upsert)
    const index = usersDatabase.findIndex((u) => u.id === this.id);
    if (index !== -1) {
      usersDatabase[index] = this;
    } else {
      usersDatabase.push(this);
    }
    return this;
  }

  // Método estático para buscar por email
  static findByEmail(email: string) {
    return usersDatabase.find((user) => user.email === email);
  }

  static findAll() {
    return usersDatabase;
  }
}
