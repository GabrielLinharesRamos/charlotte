export interface HistoricoSessao {
  data: string;
  descricao: string;
}

export interface Paciente {
  id: number;
  nome: string;
  iniciais: string;
  idade: number;
  telefone: string;
  horario: string;
  local: string;
  status: "Confirmado" | "Pendente" | "Finalizado";
  sessao: string;
  problema: string;
  diagnostico: string;
  observacoes: string;
  valor: number;
  historico: HistoricoSessao[];
}

export const LISTA_PACIENTES: Paciente[] = [
  {
    id: 1,
    nome: "Carlos Souza",
    iniciais: "CS",
    idade: 34,
    telefone: "(11) 98765-4321",
    horario: "09:00 - 60 min",
    local: "Pinheiros",
    status: "Confirmado",
    sessao: "3ª sessão",
    problema: "Dor nas costas",
    diagnostico: "Lombalgia mecânica crônica com tensão muscular paravertebral bilateral.",
    observacoes: "Paciente sedentário, trabalha sentado 8h/dia. Relata piora da dor ao final do expediente. Sem irradiação para MMII.",
    valor: 180,
    historico: [
      { data: "10 Jul", descricao: "Avaliação inicial + mobilização lombar. Paciente referiu alívio imediato de 40%." },
      { data: "14 Jul", descricao: "Exercícios de estabilização do core. Boa evolução, sem queixas de piora." }
    ]
  },
  {
    id: 2,
    nome: "Mariana Lima",
    iniciais: "ML",
    idade: 29,
    telefone: "(11) 99876-1111",
    horario: "11:00 - 45 min",
    local: "Jardins",
    status: "Confirmado",
    sessao: "5ª sessão",
    problema: "Lesão no joelho",
    diagnostico: "Tendinopatia patelar associada à prática esportiva.",
    observacoes: "Paciente corredora amadora. Refere melhora significativa após início do tratamento.",
    valor: 180,
    historico: [
      { data: "08 Jul", descricao: "Avaliação funcional do joelho e início de exercícios excêntricos." },
      { data: "15 Jul", descricao: "Aumento gradual da carga. Sem dor durante os exercícios." }
    ]
  },
  {
    id: 3,
    nome: "Roberto Alves",
    iniciais: "RA",
    idade: 42,
    telefone: "(11) 97777-2222",
    horario: "14:00 - 45 min",
    local: "Moema",
    status: "Pendente",
    sessao: "2ª sessão",
    problema: "Pós-cirúrgico ombro",
    diagnostico: "Recuperação pós-artroscopia do manguito rotador.",
    observacoes: "Paciente em fase inicial de reabilitação. Restrição parcial de movimento.",
    valor: 155,
    historico: [
      { data: "12 Jul", descricao: "Avaliação inicial pós-cirúrgica. Limitação importante de abdução." },
      { data: "16 Jul", descricao: "Introdução de exercícios passivos com boa tolerância." }
    ]
  }
];