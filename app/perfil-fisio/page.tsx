"use client"

import BottomNavigation from "@/components/BottomNavigation";
import { useRouter } from "next/navigation";

export default function PerfilFisioterapeutaPage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login-fisioterapeuta");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 p-0 sm:p-4 font-sans">
      
      {/* 📱 MOLDURA DO CELULAR */}
      <div className="relative flex h-screen w-full max-w-[400px] flex-col justify-between bg-[#F8F9FA] sm:h-[850px] sm:rounded-[40px] sm:border-[8px] sm:border-gray-800 shadow-2xl overflow-hidden select-none text-gray-900">
        
        {/* Linha da câmera do celular */}
        <div className="hidden sm:block absolute top-2 left-1/2 h-4 w-28 -translate-x-1/2 rounded-full bg-gray-800 z-50" />

        {/* CONTEÚDO SCROLLÁVEL */}
        <div className="flex-1 overflow-y-auto px-5 pt-8 pb-24 space-y-6 scrollbar-none">
          
          {/* TOPO: Título e Botão de Configurações */}
          <div className="flex items-center justify-between pt-4">
            <h1 className="text-2xl font-black text-gray-950 tracking-tight">Perfil</h1>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-100 text-gray-500 shadow-sm active:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.767c-.304.233-.463.607-.447.989.002.044.004.088.004.133 0 .045-.002.089-.004.133-.016.382.143.756.447.989l1.003.767a1.125 1.125 0 0 1 .26 1.43l-1.296 2.247a1.125 1.125 0 0 1-1.37.49l-1.216-.456c-.356-.133-.751-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.767c.304-.233.463-.607.447-.989a2.52 2.52 0 0 1-.004-.134c0-.045.002-.089.004-.133.016-.382-.143-.756-.447-.989l-1.004-.767a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.49l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </button>
          </div>

          {/* FOTO E IDENTIFICAÇÃO */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="relative h-24 w-24 rounded-full border-4 border-white shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1594824813573-246434e3b96a?w=200&auto=format&fit=crop&q=80" 
                alt="Dra. Ana Ribeiro"
                className="h-full w-full rounded-full object-cover"
              />
              <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-emerald-600 border-2 border-white" />
            </div>

            <div className="space-y-0.5">
              <h2 className="text-xl font-black text-gray-950 tracking-tight">Dra. Ana Ribeiro</h2>
              <p className="text-xs font-bold text-[#0B7B69]">Ortopedia & Esportivo</p>
              <p className="text-xs font-medium text-gray-400">ana.ribeiro@email.com</p>
            </div>

            {/* Badge CREFITO */}
            <div className="flex items-center gap-1.5 rounded-full bg-emerald-50/60 border border-emerald-100 py-1.5 px-4 text-[11px] font-bold text-[#0B7B69]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-3.5 w-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
              CREFITO-3 48721 - Verificado
            </div>

            {/* Botão Editar Perfil */}
            <button className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white py-1.5 px-5 text-xs font-bold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3.5 w-3.5 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
              </svg>
              Editar perfil
            </button>
          </div>

          {/* METRICAS DE ATENDIMENTO */}
          <div className="grid grid-cols-3 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm text-center divide-x divide-gray-100">
            <div>
              <div className="text-lg font-black text-gray-950">312</div>
              <div className="text-[10px] font-bold text-gray-400">Sessões</div>
            </div>
            <div>
              <div className="text-lg font-black text-gray-950">4.9★</div>
              <div className="text-[10px] font-bold text-gray-400">Avaliação</div>
            </div>
            <div>
              <div className="text-lg font-black text-gray-950">8</div>
              <div className="text-[10px] font-bold text-gray-400">Anos exp.</div>
            </div>
          </div>

          {/* TAGS / ESPECIALIDADES */}
          <div className="flex flex-wrap justify-center gap-2">
            {['Ortopedia', 'Esportivo', 'Pós-cirúrgico'].map((tag) => (
              <span key={tag} className="rounded-full bg-emerald-50/50 border border-emerald-100/50 py-1.5 px-4 text-xs font-semibold text-[#0B7B69]">
                {tag}
              </span>
            ))}
          </div>

          {/* CARD DE GANHOS DO MÊS */}
          <div className="w-full rounded-2xl bg-[#0B7B69] p-4 text-white shadow-lg flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[9px] font-bold text-emerald-200 uppercase tracking-wider">Ganhos este mês</span>
              <div className="text-xl font-black tracking-tight">R$ 3.240</div>
            </div>
            <span className="text-xs font-bold bg-white/10 py-1.5 px-3 rounded-xl backdrop-blur-sm">
              📈 +18%
            </span>
          </div>

          {/* SEÇÃO: DADOS PROFISSIONAIS */}
          <div className="space-y-2.5">
            <h3 className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest pl-1">Dados profissionais</h3>
            
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm divide-y divide-gray-50">
              {/* Item: Dados Pessoais */}
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50/50 transition-colors rounded-t-2xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#0B7B69]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-gray-950">Dados pessoais</h4>
                    <p className="text-xs text-gray-400 font-medium">Nome, telefone, e-mail</p>
                  </div>
                </div>
                <span className="text-gray-300 text-lg font-bold">›</span>
              </div>

              {/* Item: Credenciais */}
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50/50 transition-colors rounded-b-2xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#0B7B69]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.174c-.053-.49-.1-.984-.14-1.477a46.637 46.637 0 0 1 17.76 0c-.04.492-.088.986-.14 1.477m-17.48 0a48.467 48.467 0 0 1 3.36 5.841m0 0a4.962 4.962 0 0 1 4.223-3.448m-4.222 3.448A4.962 4.962 0 0 0 8.24 19.5M20.14 10.174a48.464 48.464 0 0 0-3.36 5.841m0 0a4.962 4.962 0 0 0-4.223-3.448m4.222 3.448a4.962 4.962 0 0 1-4.222 3.448m0 0a4.962 4.962 0 0 1-4.223-3.448M12 3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25h.008A2.25 2.25 0 0 0 15.375 18V4.5c0-.621-.504-1.125-1.125-1.125H12Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-gray-950">Credenciais</h4>
                    <p className="text-xs text-gray-400 font-medium">CREFITO-3 48721 - Verificado</p>
                  </div>
                </div>
                <span className="text-gray-300 text-lg font-bold">›</span>
              </div>
            </div>
          </div>

          {/* Botão Sair da Conta */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-between py-4 px-4 bg-white rounded-2xl border border-red-100 shadow-sm hover:bg-red-50 active:scale-[0.99] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
                <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
              </div>
              <span className="text-sm font-bold text-red-500">Sair da conta</span>
            </div>
            <svg className="w-4 h-4 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

            <BottomNavigation />

      </div>
    </div>
  );
}