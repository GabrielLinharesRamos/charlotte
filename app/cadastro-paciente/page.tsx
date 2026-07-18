"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/* ─── Ícones SVG ─────────────────────────────────────────────────────────── */

const IconChevronLeft = () => (
  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const IconUser = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const IconPhone = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.557-5.148-3.881-6.705-6.705l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const IconShield = () => (
  <svg className="w-5 h-5 text-[#0B7B69] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const IconMail = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const IconLock = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0V10.5m9 0h-9M12 18.75V16.5m-6 2.25h12M4.5 10.5H19.5a2.25 2.25 0 012.25 2.25v6.75a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25v-6.75a2.25 2.25 0 012.25-2.25z" />
  </svg>
);

export default function CadastroPacientePage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);

  // Estados dos Formulários
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [termosAceitos, setTermosAceitos] = useState(false);

  // Formata o input de telefone para (XX) XXXXX-XXXX
  const formatarTelefone = (val: string) => {
    const digits = val.replace(/\D/g, "");
    if (digits.length <= 10) {
      return digits
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      return digits
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .substring(0, 15);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatarTelefone(e.target.value);
    setTelefone(formatted);
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (nome.trim().length > 0 && telefone.trim().length >= 14) {
        setStep(2);
      }
    } else {
      // Finalizar cadastro
      if (email.trim().length > 0 && senha.length >= 6 && termosAceitos) {
        router.push("/inicio");
      }
    }
  };

  const handleBackStep = () => {
    if (step === 2) {
      setStep(1);
    } else {
      router.back();
    }
  };

  // Validação do botão por etapa
  const isStep1Valid = nome.trim().length > 0 && telefone.trim().length >= 14;
  const isStep2Valid = email.trim().length > 0 && senha.length >= 6 && termosAceitos;
  const isButtonEnabled = step === 1 ? isStep1Valid : isStep2Valid;

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F6F8FA] p-0 sm:p-4 font-sans selection:bg-[#0B7B69]/10">
      
      {/* Container Principal (Sem moldura preta de celular ou notch) */}
      <div className="relative flex h-screen w-full max-w-[400px] flex-col justify-between bg-white sm:h-[820px] sm:rounded-[32px] sm:border sm:border-gray-100 shadow-xl overflow-hidden text-gray-900">
        

        {/* TOPO FIXO: Voltar e Barra de Progresso */}
        <div className="px-6 pt-10 pb-4 space-y-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={handleBackStep}
              className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-650 hover:bg-gray-50 active:scale-95 transition-all shadow-sm"
              aria-label="Voltar"
            >
              <IconChevronLeft />
            </button>
            
            <div className="flex-1 space-y-1.5">
              {/* Barra de Progresso de 2 Passos */}
              <div className="flex gap-2 w-full">
                <div className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= 1 ? "bg-[#0B7B69]" : "bg-gray-100"}`} />
                <div className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= 2 ? "bg-[#0B7B69]" : "bg-gray-100"}`} />
              </div>
              <div className="text-[11px] font-bold text-gray-400">
                Passo {step} de 2
              </div>
            </div>
          </div>
        </div>

        {/* CONTEÚDO DINÂMICO (Formulários) */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 flex flex-col justify-between">
          
          <div className="space-y-6 pt-2">
            {/* ETAPA 1: DADOS PESSOAIS */}
            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h1 className="text-[28px] font-extrabold text-gray-950 tracking-tight leading-tight">
                    Criar conta
                  </h1>
                  <p className="text-sm font-medium text-gray-400 mt-1">
                    Seus dados pessoais
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Campo Nome */}
                  <div className="relative flex items-center">
                    <span className="absolute left-4">
                      <IconUser />
                    </span>
                    <input 
                      type="text" 
                      placeholder="Nome completo"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="w-full bg-[#F8F9FA] border border-transparent focus:border-gray-200 focus:bg-white rounded-2xl py-4 pl-12 pr-4 text-sm font-semibold outline-none transition-all text-gray-900 placeholder-gray-400"
                    />
                  </div>

                  {/* Campo Telefone */}
                  <div className="relative flex items-center">
                    <span className="absolute left-4">
                      <IconPhone />
                    </span>
                    <input 
                      type="tel" 
                      placeholder="Telefone"
                      value={telefone}
                      onChange={handlePhoneChange}
                      className="w-full bg-[#F8F9FA] border border-transparent focus:border-gray-200 focus:bg-white rounded-2xl py-4 pl-12 pr-4 text-sm font-semibold outline-none transition-all text-gray-900 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Callout de Privacidade */}
                <div className="flex gap-3 bg-[#EAF6F4] p-4 rounded-2xl border border-[#E1F2EF]">
                  <IconShield />
                  <p className="text-xs font-semibold text-[#0B7B69] leading-relaxed">
                    Seus dados são protegidos e nunca compartilhados sem sua autorização.
                  </p>
                </div>
              </div>
            )}

            {/* ETAPA 2: DADOS DE ACESSO */}
            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h1 className="text-[28px] font-extrabold text-gray-950 tracking-tight leading-tight">
                    Quase lá!
                  </h1>
                  <p className="text-sm font-medium text-gray-400 mt-1">
                    Crie seu acesso
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Campo E-mail */}
                  <div className="relative flex items-center">
                    <span className="absolute left-4">
                      <IconMail />
                    </span>
                    <input 
                      type="email" 
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#F8F9FA] border border-transparent focus:border-gray-200 focus:bg-white rounded-2xl py-4 pl-12 pr-4 text-sm font-semibold outline-none transition-all text-gray-900 placeholder-gray-400"
                    />
                  </div>

                  {/* Campo Senha */}
                  <div className="relative flex items-center">
                    <span className="absolute left-4">
                      <IconLock />
                    </span>
                    <input 
                      type={mostrarSenha ? "text" : "password"} 
                      placeholder="Senha"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      className="w-full bg-[#F8F9FA] border border-transparent focus:border-gray-200 focus:bg-white rounded-2xl py-4 pl-12 pr-12 text-sm font-semibold outline-none transition-all text-gray-900 placeholder-gray-400"
                    />
                    <button 
                      type="button"
                      onClick={() => setMostrarSenha(!mostrarSenha)}
                      className="absolute right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                      {mostrarSenha ? (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.822 7.822L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M12 15a3 3 0 100-6 3 3 0 000 6z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Termos de Uso */}
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input 
                    type="checkbox"
                    checked={termosAceitos}
                    onChange={(e) => setTermosAceitos(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-[#0B7B69] focus:ring-[#0B7B69] accent-[#0B7B69]"
                  />
                  <span className="text-xs font-semibold text-gray-500 leading-tight">
                    Concordo com os{" "}
                    <a href="#" className="text-[#0B7B69] hover:underline">Termos de Uso</a>
                    {" "}e a{" "}
                    <a href="#" className="text-[#0B7B69] hover:underline">Política de Privacidade</a>
                  </span>
                </label>
              </div>
            )}
          </div>

          {/* Botão de Ação / Rodapé */}
          <div className="pt-6 space-y-4">
            <button
              onClick={handleNextStep}
              disabled={!isButtonEnabled}
              className={`w-full py-4 rounded-2xl text-sm font-bold transition-all duration-300 active:scale-[0.98] ${
                isButtonEnabled 
                  ? "bg-[#0B7B69] text-white shadow-md hover:bg-[#096355]" 
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              {step === 1 ? "Continuar" : "Criar conta"}
            </button>

            {step === 2 && (
              <div className="text-center">
                <span className="text-xs font-semibold text-gray-400">
                  Já tem conta?{" "}
                  <button 
                    onClick={() => router.push("/login-paciente")} 
                    className="text-[#0B7B69] font-bold hover:underline ml-1"
                  >
                    Entrar
                  </button>
                </span>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
