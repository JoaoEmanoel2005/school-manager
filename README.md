# 📚 SchoolManager
> **Sistema de Gestão Acadêmica Unificada**

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

## 📝 1. Visão Geral
O **SchoolManager** é uma plataforma robusta projetada para centralizar a gestão educacional, automatizar processos burocráticos e promover a transparência de dados entre a instituição e o corpo discente. O sistema visa mitigar falhas de comunicação e otimizar o fluxo de trabalho administrativo e pedagógico através de uma interface intuitiva e centralizada.

## ⚙️ 2. Stack Tecnológica & Arquitetura
O projeto adota uma arquitetura **Full-Stack Monorepo**, aproveitando o ecossistema moderno do Next.js:

* **Framework:** **Next.js (App Router)** com **API Routes** para backend integrado.
* **Linguagem:** **TypeScript** para garantir *Type-Safety* em toda a aplicação.
* **Estilização:** **Tailwind CSS** com design *Mobile-First*.
* **Banco de Dados:** **PostgreSQL** (Relacional).
* **ORM:** **Prisma** para modelagem, migrations e consultas tipadas.

## 👥 3. Arquitetura de Atores (RBAC)
O sistema utiliza controle de acesso baseado em funções para garantir a segurança dos dados:

### 👨‍🎓 Estudante
* **Dashboard:** Notas parciais, médias e status de aprovação.
* **Frequência:** Monitoramento de assiduidade por disciplina.
* **Agenda:** Cronograma de aulas, provas e prazos.

### 👨‍🏫 Professor
* **Diário Digital:** Lançamento de frequências e faltas.
* **Avaliações:** Gestão de notas e pesos avaliativos.
* **Conteúdo:** Registro de aulas e upload de materiais didáticos.

### 🏛️ Coordenação
* **Gestão Geral (CRUD):** Controle de Alunos, Professores, Disciplinas e Turmas.
* **Enturmação:** Alocação de estudantes e vinculação de grades horárias.
* **BI & Analytics:** Dashboards com taxas de evasão e desempenho global.

## 🔒 4. Segurança e LGPD
Desenvolvido sob princípios de *Security by Design*:
* **Conformidade LGPD:** Minimização de dados e transparência no tratamento de informações.
* **Autenticação:** Proteção de rotas via **JWT** e middlewares.
* **Validação:** Uso de **Zod** para garantir a integridade dos dados enviados às API Routes.

---

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para configurar o ambiente de desenvolvimento local:

### Pré-requisitos
* Node.js instalado (v18 ou superior)
* Instância do PostgreSQL ativa

### 1. Clone o repositório
```bash
git clone [https://github.com/seu-usuario/SchoolManager.git](https://github.com/seu-usuario/SchoolManager.git)
cd SchoolManager
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Configure as Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto e adicione sua URL de conexão com o banco:
Snippet de código
```bash
DATABASE_URL="postgresql://usuario:senha@localhost:5432/schoolmanager?schema=public"
NEXTAUTH_SECRET="sua_chave_secreta_aqui"
```

### 4. Configure o Banco de Dados (Prisma)

Execute as migrações para criar as tabelas no PostgreSQL:
```Bash
npx prisma migrate dev
```

### 5. Inicie o Servidor
```Bash
npm run dev
```

Acesse http://localhost:3000 no seu navegador.

Desenvolvido por Joao Emanoel - Conecte-se comigo no LinkedIn