"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CadastroFisioPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Estados dos Formulários
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [crefito, setCrefito] = useState("");
  const [especialidades, setEspecialidades] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const listaEspecialidades = [
    "Ortopedia", "Pilates", "Esportivo", 
    "Neurológico", "Pós-cirúrgico", "Pós-parto", 
    "Uroginecologia", "Pediátrico", "RPG"
  ];

  const toggleEspecialidade = (esp: string) => {
    if (especialidades.includes(esp)) {
      setEspecialidades(especialidades.filter((item) => item !== esp));
    } else {
      setEspecialidades([...especialidades, esp]);
    }
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep((prev) => (prev + 1) as 1 | 2 | 3);
    } else {
      // Finalizar cadastro
      router.push("/home"); 
    }
  };

  const handleBackStep = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as 1 | 2 | 3);
    } else {
      router.back();
    }
  };

  // Verifica se PELO MENOS UM dos campos da etapa atual possui conteúdo preenchido
  const hasAnyFieldFilled =
    (step === 1 && (nome.trim().length > 0 || telefone.trim().length > 0)) ||
    (step === 2 && (crefito.trim().length > 0 || especialidades.length > 0)) ||
    (step === 3 && (email.trim().length > 0 || senha.length > 0));

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 p-0 sm:p-4 font-sans">
      
      {/* 📱 MOLDURA DO CELULAR */}
      <div className="relative flex h-screen w-full max-w-[400px] flex-col justify-between bg-white sm:h-[850px] sm:rounded-[40px] sm:border-[8px] sm:border-gray-800 shadow-2xl overflow-hidden text-gray-900">
        
        {/* Linha da câmera do celular (visível apenas no PC) */}
        <div className="hidden sm:block absolute top-2 left-1/2 h-4 w-28 -translate-x-1/2 rounded-full bg-gray-800 z-50" />

        {/* TOPO FIXO: Voltar e Barra de Progresso */}
        <div className="px-5 pt-10 pb-4 space-y-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={handleBackStep}
              className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-50 active:scale-95 transition-all"
            >
              ←
            </button>
            <span className="text-xs font-bold text-gray-400">Passo {step} de 3</span>
          </div>

          {/* Indicadores horizontais de progresso */}
          <div className="flex gap-2 w-full">
            <div className={`h-1 flex-1 rounded-full transition-all duration-300 ${step >= 1 ? "bg-[#0B7B69]" : "bg-gray-100"}`} />
            <div className={`h-1 flex-1 rounded-full transition-all duration-300 ${step >= 2 ? "bg-[#0B7B69]" : "bg-gray-100"}`} />
            <div className={`h-1 flex-1 rounded-full transition-all duration-300 ${step >= 3 ? "bg-[#0B7B69]" : "bg-gray-100"}`} />
          </div>
        </div>

        {/* CONTEÚDO INTERNO DINÂMICO (Formulários) */}
        <div className="flex-1 overflow-y-auto px-5 pb-8 space-y-6 scrollbar-none">
          
          {/* PASSO 1: DADOS PESSOAIS */}
          {step === 1 && (
            <div className="space-y-6 pt-2 animate-fadeIn">
              <div>
                <h1 className="text-2xl font-black text-gray-950 tracking-tight">Olá, profissional!</h1>
                <p className="text-xs text-gray-400 mt-1 font-medium">Vamos criar o seu perfil.</p>
              </div>

              <div className="space-y-3">
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-gray-400 text-sm">👤</span>
                  <input 
                    type="text" 
                    placeholder="Nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full bg-[#F8F9FA] border border-transparent focus:border-gray-200 focus:bg-white rounded-2xl py-3.5 pl-11 pr-4 text-sm font-semibold outline-none transition-all text-gray-900"
                  />
                </div>

                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-gray-400 text-sm">📞</span>
                  <input 
                    type="tel" 
                    placeholder="Telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="w-full bg-[#F8F9FA] border border-transparent focus:border-gray-200 focus:bg-white rounded-2xl py-3.5 pl-11 pr-4 text-sm font-semibold outline-none transition-all text-gray-900"
                  />
                </div>
              </div>
            </div>
          )}

          {/* PASSO 2: DADOS PROFISSIONAIS */}
          {step === 2 && (
            <div className="space-y-6 pt-2 animate-fadeIn">
              <div>
                <h1 className="text-2xl font-black text-gray-950 tracking-tight">Dados profissionais</h1>
                <p className="text-xs text-gray-400 mt-1 font-medium">Informações do seu registro.</p>
              </div>

              <div className="space-y-5">
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-gray-400 text-sm">🪪</span>
                  <input 
                    type="text" 
                    placeholder="CREFITO (ex: CREFITO-3/48721)"
                    value={crefito}
                    onChange={(e) => setCrefito(e.target.value)}
                    className="w-full bg-[#F8F9FA] border border-transparent focus:border-gray-200 focus:bg-white rounded-2xl py-3.5 pl-11 pr-4 text-sm font-semibold outline-none transition-all text-gray-900"
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-black text-gray-950 uppercase tracking-wider">Especialidades</h3>
                  <div className="flex flex-wrap gap-2">
                    {listaEspecialidades.map((esp) => {
                      const isSelected = especialidades.includes(esp);
                      return (
                        <button
                          key={esp}
                          type="button"
                          onClick={() => toggleEspecialidade(esp)}
                          className={`text-xs font-bold px-4 py-2.5 rounded-full border transition-all ${
                            isSelected 
                              ? 'bg-[#0B7B69] text-white border-transparent shadow-sm shadow-[#0B7B69]/20' 
                              : 'bg-white text-gray-500 border-gray-100 hover:border-gray-200'
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

          {/* PASSO 3: CRIAR ACESSO */}
          {step === 3 && (
            <div className="space-y-6 pt-2 animate-fadeIn">
              <div>
                <h1 className="text-2xl font-black text-gray-950 tracking-tight">Criar acesso</h1>
                <p className="text-xs text-gray-400 mt-1 font-medium">Seu e-mail e senha.</p>
              </div>

              <div className="space-y-3">
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-gray-400 text-sm">✉️</span>
                  <input 
                    type="email" 
                    placeholder="E-mail profissional"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#F8F9FA] border border-transparent focus:border-gray-200 focus:bg-white rounded-2xl py-3.5 pl-11 pr-4 text-sm font-semibold outline-none transition-all text-gray-900"
                  />
                </div>

                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-gray-400 text-sm">🔒</span>
                  <input 
                    type="password" 
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="w-full bg-[#F8F9FA] border border-transparent focus:border-gray-200 focus:bg-white rounded-2xl py-3.5 pl-11 pr-4 text-sm font-semibold outline-none transition-all text-gray-900"
                  />
                </div>
              </div>

              {/* Banner Informativo de Verificação */}
              <div className="bg-[#EBF7F5] border border-emerald-100/50 p-4 rounded-2xl space-y-1">
                <h4 className="text-xs font-black text-[#0B7B69]">Verificação em até 24h</h4>
                <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                  Analisamos seu CREFITO antes de liberar seu perfil para atendimentos.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* DEBAIXO: Botão Fixo de Ação */}
        <div className="p-5 bg-white border-t border-gray-50 space-y-4">
          <button
            onClick={handleNextStep}
            className={`w-full py-4 rounded-2xl text-sm font-black transition-all text-center ${
              !hasAnyFieldFilled
                ? "bg-gray-100 text-gray-400 shadow-none"
                : "bg-[#0B7B69] text-white hover:bg-[#096355] shadow-lg shadow-[#0B7B69]/10"
            } active:scale-[0.99]`}
          >
            {step === 3 ? "Enviar cadastro" : "Continuar"}
          </button>

          {step === 3 && (
            <p className="text-center text-xs text-gray-400 font-bold">
                Já tem conta?{" "}
                <span 
                onClick={() => router.push("/login-fisioterapeuta")} 
                className="text-[#0B7B69] cursor-pointer hover:underline"
                >
                Entrar
                </span>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}