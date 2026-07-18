"use client";

import React from "react";
import { useRouter } from "next/navigation";

/* ─── Ícones SVG ─────────────────────────────────────────────────────────── */

const IconSettings = () => (
  <svg className="w-5 h-5 text-slate-650" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconCamera = () => (
  <svg className="w-4 h-4 text-[#0D7A5A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconCheckMini = () => (
  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const IconChevronRight = () => (
  <svg className="w-4 h-4 text-slate-350 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const IconUser = () => (
  <svg className="w-5 h-5 text-[#0D7A5A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const IconPin = () => (
  <svg className="w-5 h-5 text-[#0D7A5A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconWallet = () => (
  <svg className="w-5 h-5 text-[#0D7A5A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const IconCalendar = () => (
  <svg className="w-5 h-5 text-[#0D7A5A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

/* ─── Tipagem ────────────────────────────────────────────────────────────── */

interface MenuItemProps {
  Icon: React.ComponentType;
  title: string;
  subtitle: string;
}

const MenuItem = ({ Icon, title, subtitle }: MenuItemProps) => (
  <button className="w-full flex items-center justify-between py-3.5 px-4 first:pt-4 last:pb-4 hover:bg-slate-50 transition-colors text-left group">
    <div className="flex items-center gap-3.5">
      <div className="w-10 h-10 rounded-full bg-[#E6F3F0] flex items-center justify-center shrink-0">
        <Icon />
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-800 leading-tight">{title}</h4>
        <p className="text-xs text-slate-400 mt-1 font-medium">{subtitle}</p>
      </div>
    </div>
    <IconChevronRight />
  </button>
);

const IconLogout = () => (
  <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
  </svg>
);

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login-paciente");
  };

  return (
    <div className="flex flex-col gap-6 pb-8 bg-[#F6F8FA] min-h-[calc(100vh-80px)]">
      {/* Top Header */}
      <div className="flex items-center justify-between px-6 pt-4">
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Perfil</h1>
        <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-slate-50 transition-colors">
          <IconSettings />
        </button>
      </div>

      {/* User Info Card */}
      <div className="flex flex-col items-center text-center mt-2 px-6">
        <div className="relative w-24 h-24 bg-[#0A3D2E] rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white text-3xl font-black tracking-wider">CS</span>
          {/* Badge de Verificado */}
          <div className="absolute bottom-0 right-0 bg-[#0D7A5A] text-white w-6 h-6 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
            <IconCheckMini />
          </div>
        </div>

        <h2 className="text-xl font-bold text-slate-900 mt-4 leading-tight">Carlos Souza</h2>
        <p className="text-sm text-slate-400 mt-1 font-medium">carlos.souza@email.com</p>

        <button className="flex items-center gap-1.5 border border-slate-200 bg-white hover:bg-slate-50 text-[#0D7A5A] text-xs font-bold px-4 py-2.5 rounded-full mt-4 transition-all shadow-2xs">
          <IconCamera />
          Editar perfil
        </button>
      </div>

      {/* Stats Bar */}
      <div className="mx-6 bg-white rounded-[24px] p-4 flex shadow-[0_4px_16px_rgba(0,0,0,0.015)] border border-slate-100/50 divide-x divide-slate-100">
        <div className="flex-1 flex flex-col items-center text-center py-1">
          <span className="text-lg font-black text-slate-900">12</span>
          <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Sessões</span>
        </div>
        <div className="flex-1 flex flex-col items-center text-center py-1">
          <span className="text-lg font-black text-slate-900">3</span>
          <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Favoritos</span>
        </div>
        <div className="flex-1 flex flex-col items-center text-center py-1">
          <span className="text-lg font-black text-slate-900">Jun 25</span>
          <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Desde</span>
        </div>
      </div>

      {/* Menu List: Minha Conta */}
      <div className="px-6 space-y-2">
        <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase px-1">Minha Conta</p>
        <div className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.015)] border border-slate-100/50 divide-y divide-slate-100/80">
          <MenuItem Icon={IconUser} title="Dados pessoais" subtitle="Nome, telefone, e-mail" />
          <MenuItem Icon={IconPin} title="Endereços salvos" subtitle="Casa, trabalho e outros" />
          <MenuItem Icon={IconWallet} title="Pagamento" subtitle="Cartão · Pix" />
        </div>
      </div>

      {/* Menu List: Histórico */}
      <div className="px-6 space-y-2">
        <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase px-1">Histórico</p>
        <div className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.015)] border border-slate-100/50">
          <MenuItem Icon={IconCalendar} title="Minhas sessões" subtitle="12 sessões realizadas" />
        </div>
      </div>

      {/* Botão Sair da Conta */}
      <div className="px-6">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-between py-4 px-4 bg-white rounded-3xl shadow-[0_4px_16px_rgba(0,0,0,0.015)] border border-slate-100/50 hover:bg-red-50 transition-colors group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
              <IconLogout />
            </div>
            <span className="text-sm font-bold text-red-500">Sair da conta</span>
          </div>
          <svg className="w-4 h-4 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
