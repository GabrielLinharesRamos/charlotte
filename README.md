# Fisio em Casa (FisioNow)

O **Fisio em Casa (FisioNow)** é uma plataforma mobile-first moderna e intuitiva projetada para conectar pacientes a fisioterapeutas qualificados para atendimentos personalizados em domicílio. O aplicativo oferece uma experiência completa desde o agendamento e pagamento de sessões até o acompanhamento do tratamento e controle financeiro dos profissionais.

---

## 🚀 Funcionalidades Principais

### Para Pacientes
- **Cadastro Simplificado & Seguro:** Fluxo de cadastro em 2 etapas com verificação de dados pessoais, telefone mascarado e criação de credenciais com consentimento dos Termos de Uso.
- **Busca por Sintomas & Localização:** Sistema inteligente de busca por sintomas com simulação de geolocalização em tempo real para encontrar fisioterapeutas nas proximidades.
- **Agendamento Completo:** Visualização de sessões agendadas através de uma agenda interativa e controle de compromissos futuros.
- **Acompanhamento de Recuperação:** Indicador de progresso circular (%) para acompanhar a evolução do tratamento e controle diário de exercícios prescritos (Checklist interativo).
- **Checkout Integrado:** Fluxo de pagamento direto simulando segurança, flexibilidade e confirmação instantânea.

### Para Fisioterapeutas
- **Cadastro Profissional Detalhado:** Fluxo de cadastro em 3 etapas incluindo validação de registro CREFITO, seleção de especialidades (RPG, Ortopedia, Pilates, Pediatria, etc.) e credenciais de acesso.
- **Painel de Controle do Profissional:** Visualização de status de atendimento (Online/Offline), contagem total de sessões realizadas, avaliação média acumulada e gráfico de faturamento mensal.
- **Gestão de Próximos Atendimentos:** Agenda de atendimentos organizada por ordem cronológica com visualização detalhada de prontuários dos pacientes e histórico de saúde via modal interativo.

---

## 🛠️ Stack Tecnológica

O projeto foi construído utilizando tecnologias modernas e eficientes no ecossistema web:

- **Framework:** [Next.js](https://nextjs.org/) (com suporte nativo ao App Router e Route Groups para isolamento de contextos).
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) para tipagem estática e prevenção de erros.
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) com injeção de temas inline, garantindo estilização atômica, carregamento veloz e responsividade mobile-first.
- **Gerenciamento de Estado:** React Context API (`AppContext`) centralizando o estado compartilhado de agendamentos, exercícios e interações do usuário.
- **Ícones & Interface:** Ícones em formato de vetores SVG puros injetados diretamente nos componentes para carregamento instantâneo, leveza e fidelidade estética.

---

## 📂 Estrutura do Projeto

O código segue uma organização modular e limpa para facilitar a manutenção e escalabilidade:

```text
├── app/                      # Roteamento baseado em arquivos do Next.js
│   ├── (nathanael)/          # Route Group para a jornada e contexto do Paciente
│   │   ├── _context/         # Contexto global (estado compartilhado do paciente)
│   │   ├── agenda/           # Tela de agenda e compromissos do paciente
│   │   ├── buscar/           # Fluxo de busca, localização e pagamento
│   │   ├── inicio/           # Tela inicial do paciente (exercícios e progresso)
│   │   └── perfil/           # Tela de configurações e dados do paciente
│   ├── agenda-fisio/         # Agenda de sessões do Fisioterapeuta
│   ├── cadastro-fisio/       # Fluxo de registro de fisioterapeutas
│   ├── cadastro-paciente/    # Fluxo de registro de pacientes (Etapas 1 e 2)
│   ├── ganhos-fisio/         # Painel de controle de receitas do fisioterapeuta
│   ├── home-fisio/           # Dashboard principal do fisioterapeuta
│   ├── login-fisioterapeuta/ # Login de fisioterapeutas
│   ├── login-paciente/       # Login de pacientes
│   ├── onboarding/           # Fluxo de introdução do app
│   ├── role_section/         # Seletor de perfil (Sou Paciente vs. Fisioterapeuta)
│   ├── layout.tsx            # Layout global do aplicativo
│   └── globals.css           # Configurações globais e tema do Tailwind v4
├── components/               # Componentes de UI modulares e reutilizáveis
│   ├── HomeScreen.tsx        # View principal do paciente
│   ├── SearchScreen.tsx      # View de busca de profissionais
│   ├── LocationScreen.tsx    # Simulação de mapa e geolocalização
│   ├── PaymentScreen.tsx     # Tela de pagamento de sessão
│   ├── ProfileScreen.tsx     # Tela de perfil e dados pessoais
│   └── ...
├── lib/                      # Definições de tipos TypeScript globais
└── mock/                     # Dados estáticos para simulação de banco de dados
```

---

## 💻 Como Executar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passo 1: Instalar dependências
Na pasta raiz do projeto, instale os pacotes necessários:
```bash
npm install
```

### Passo 2: Executar o servidor de desenvolvimento
Inicie o servidor localmente:
```bash
npm run dev
```
Abra o navegador e acesse: **[http://localhost:3000](http://localhost:3000)**.

### Passo 3: Compilar para Produção
Para verificar erros e gerar o bundle de produção otimizado:
```bash
npm run build
```

---

## 🎨 Design & UX
- **Abordagem Mobile-First:** O app foi desenhado para simular um aplicativo móvel nativo. Em telas de computador, o conteúdo é centralizado e emoldurado elegantemente, enquanto em smartphones ele se ajusta perfeitamente para ocupar 100% da tela disponível.
- **Identidade Visual Curada:** Utilização de uma paleta de cores voltada para saúde e bem-estar (baseada em tons de verde teal como `#0B7B69`), tipografia moderna utilizando Geist Sans e micro-animações fluidas para feedback instantâneo de cliques e ações.
