"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

/* ─── Ícones SVG ─────────────────────────────────────────────────────────── */

const IconChevronLeft = () => (
  <svg className="w-5 h-5 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const IconUser = () => (
  <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const IconPhone = () => (
  <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const IconChevronDown = () => (
  <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const IconMail = () => (
  <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconLock = () => (
  <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const IconEye = () => (
  <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const IconEyeSlash = () => (
  <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
  </svg>
);

const IconInfo = () => (
  <svg className="w-5 h-5 text-teal-650 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconShield = () => (
  <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

/* ─── Opções de Especialidades ───────────────────────────────────────────── */

const ESPECIALIDADES = [
  "Ortopedia",
  "Coluna",
  "Esportivo",
  "Neurológico",
  "Pós-cirúrgico",
  "Pós-parto",
  "Uroginecologia",
  "Pilates",
  "RPG",
];

export default function RegisterTherapistScreen() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Estados dos campos do formulário
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  
  const [crefito, setCrefito] = useState("");
  const [especialidadesAdicionais, setEspecialidadesAdicionais] = useState<string[]>([]);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showSenha, setShowSenha] = useState(false);

  // Formatação do telefone brasileiro: (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length > 11) val = val.slice(0, 11);
    
    if (val.length > 6) {
      val = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
    } else if (val.length > 2) {
      val = `(${val.slice(0, 2)}) ${val.slice(2)}`;
    } else if (val.length > 0) {
      val = `(${val}`;
    }
    setTelefone(val);
  };

  // Alternar seleção de especialidade adicional
  const handleToggleTag = (tag: string) => {
    setEspecialidadesAdicionais((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Navegação do botão voltar
  const handleBack = () => {
    if (step === 1) {
      router.back();
    } else {
      setStep((prev) => (prev - 1) as 1 | 2 | 3);
    }
  };

  // Botão continuar / finalizar
  const handleNext = () => {
    if (step < 3) {
      setStep((prev) => (prev + 1) as 1 | 2 | 3);
    } else {
      // Finalização do cadastro
      // Por ser um MVP de demonstração, redirecionamos para o início
      router.push("/inicio");
    }
  };

  // Validações de cada passo para habilitar botão
  const isStep1Valid = nome.trim().length >= 3 && telefone.trim().length >= 14;
  const isStep2Valid = crefito.trim().length >= 5 && especialidadesAdicionais.length > 0;
  const isStep3Valid = email.includes("@") && email.includes(".") && senha.length >= 6;

  const isButtonActive =
    (step === 1 && isStep1Valid) ||
    (step === 2 && isStep2Valid) ||
    (step === 3 && isStep3Valid);

  return (
    <div className="px-6 py-4 flex flex-col h-full min-h-[calc(100vh-160px)]">
      {/* Header com indicador de progresso e botão voltar */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleBack}
          className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:bg-slate-50 transition-colors"
          aria-label="Voltar"
        >
          <IconChevronLeft />
        </button>

        {/* Linha de progresso */}
        <div className="flex-1 flex gap-2">
          <div className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${step >= 1 ? "bg-[#0D7A5A]" : "bg-slate-200"}`} />
          <div className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${step >= 2 ? "bg-[#0D7A5A]" : "bg-slate-200"}`} />
          <div className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${step >= 3 ? "bg-[#0D7A5A]" : "bg-slate-200"}`} />
        </div>
      </div>

      <p className="text-slate-400 text-xs font-bold mt-3">Passo {step} de 3</p>

      {/* Conteúdo dinâmico baseado no passo */}
      <div className="flex-1 mt-6">
        {step === 1 && (
          <div>
            <h1 className="text-2xl font-bold text-slate-900 leading-tight">Olá, profissional!</h1>
            <p className="text-slate-500 text-sm mt-1">Vamos criar seu perfil</p>

            <div className="mt-8 space-y-4">
              {/* Nome completo */}
              <div className="flex items-center gap-3 bg-[#F6F8FA] rounded-2xl px-4 py-4 border border-slate-100 hover:border-slate-250 focus-within:border-teal-600 focus-within:bg-white transition-all">
                <IconUser />
                <input
                  type="text"
                  placeholder="Nome completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-slate-800 text-sm font-medium placeholder-slate-400"
                />
              </div>

              {/* Telefone */}
              <div className="flex items-center gap-3 bg-[#F6F8FA] rounded-2xl px-4 py-4 border border-slate-100 hover:border-slate-250 focus-within:border-teal-600 focus-within:bg-white transition-all">
                <IconPhone />
                <input
                  type="tel"
                  placeholder="Telefone"
                  value={telefone}
                  onChange={handlePhoneChange}
                  className="flex-1 bg-transparent border-none outline-none text-slate-800 text-sm font-medium placeholder-slate-400"
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h1 className="text-2xl font-bold text-slate-900 leading-tight">Dados profissionais</h1>
            <p className="text-slate-500 text-sm mt-1">Informações do seu registro</p>

            <div className="mt-6 space-y-6">
              {/* CREFITO Input */}
              <div className="flex items-center gap-3 bg-[#F6F8FA] rounded-2xl px-4 py-4 border border-slate-100 hover:border-slate-250 focus-within:border-teal-600 focus-within:bg-white transition-all">
                <IconShield />
                <input
                  type="text"
                  placeholder="CREFITO (ex: CREFITO-3 48721)"
                  value={crefito}
                  onChange={(e) => setCrefito(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-slate-800 text-sm font-medium placeholder-slate-400"
                />
              </div>

              {/* Tags de Especialidades */}
              <div>
                <h3 className="text-sm font-bold text-slate-800 mb-3">Especialidades</h3>
                <div className="flex flex-wrap gap-2">
                  {ESPECIALIDADES.map((esp) => {
                    const isSelected = especialidadesAdicionais.includes(esp);
                    return (
                      <button
                        key={esp}
                        type="button"
                        onClick={() => handleToggleTag(esp)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                          isSelected
                            ? "bg-[#E6F3F0] text-[#0D7A5A] border-[#0D7A5A]"
                            : "bg-[#F6F8FA] text-slate-500 border-slate-100 hover:border-slate-300"
                        }`}
                      >
                        {esp}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h1 className="text-2xl font-bold text-slate-900 leading-tight">Criar acesso</h1>
            <p className="text-slate-500 text-sm mt-1">Para acessar o app</p>

            <div className="mt-8 space-y-4">
              {/* E-mail profissional */}
              <div className="flex items-center gap-3 bg-[#F6F8FA] rounded-2xl px-4 py-4 border border-slate-100 hover:border-slate-250 focus-within:border-teal-600 focus-within:bg-white transition-all">
                <IconMail />
                <input
                  type="email"
                  placeholder="E-mail profissional"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-slate-800 text-sm font-medium placeholder-slate-400"
                />
              </div>

              {/* Senha */}
              <div className="flex items-center gap-3 bg-[#F6F8FA] rounded-2xl px-4 py-4 border border-slate-100 hover:border-slate-250 focus-within:border-teal-600 focus-within:bg-white transition-all">
                <IconLock />
                <input
                  type={showSenha ? "text" : "password"}
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-slate-800 text-sm font-medium placeholder-slate-400"
                />
                <button
                  type="button"
                  onClick={() => setShowSenha(!showSenha)}
                  className="focus:outline-none"
                  aria-label={showSenha ? "Esconder senha" : "Mostrar senha"}
                >
                  {showSenha ? <IconEyeSlash /> : <IconEye />}
                </button>
              </div>

              {/* Banner Declaração de CRM */}
              <div className="flex gap-3 bg-[#E6F3F0] border border-[#d2ebe5] rounded-2xl p-4 mt-6">
                <IconInfo />
                <div>
                  <h4 className="text-xs font-bold text-[#0D7A5A]">Declaração de CRM:</h4>
                  <p className="text-[11px] text-[#0D7A5A] font-medium leading-relaxed mt-0.5">
                    O CRM deve estar ativo e regularizado. Caso contrário, sua conta será bloqueada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Botão de ação fixo na base */}
      <div className="mt-8">
        <button
          type="button"
          disabled={!isButtonActive}
          onClick={handleNext}
          className={`w-full py-4 rounded-2xl text-center text-sm font-bold shadow-lg transition-all duration-300 ${
            isButtonActive
              ? "bg-[#0D7A5A] text-white shadow-[#0D7A5A]/20 hover:bg-[#0A5A44] cursor-pointer"
              : "bg-[#E6EBEF] text-slate-400 shadow-none cursor-not-allowed"
          }`}
        >
          {step === 3 ? "Criar conta" : "Continuar"}
        </button>
      </div>
    </div>
  );
}
