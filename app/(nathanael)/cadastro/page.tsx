"use client";

/* ─── /cadastro — Tela de Cadastro do Fisioterapeuta ──────────────────────────
   Mantém a página de rota limpa de lógica de estado.
   Toda a orquestração do formulário de 3 passos fica no componente da tela.
──────────────────────────────────────────────────────────────────────────── */

import RegisterTherapistScreen from "../../../components/RegisterTherapistScreen";

export default function CadastroPage() {
  return <RegisterTherapistScreen />;
}
