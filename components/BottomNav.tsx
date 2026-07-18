"use client";

/* ─── BottomNav — Barra de Navegação Inferior ────────────────────────────────
   Usa usePathname() para saber qual aba está ativa.
   Usa <Link> do Next.js para navegar entre rotas.
   Sem props de estado — completamente autocontido.
──────────────────────────────────────────────────────────────────────────── */

import Link from "next/link";
import { usePathname } from "next/navigation";

/* ─── Ícones ─────────────────────────────────────────────────────────────── */

const IconHome = ({ active }: { active: boolean }) => (
  <svg className="w-6 h-6" fill={active ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 0 : 1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const IconSearch = ({ active }: { active: boolean }) => (
  <svg className="w-6 h-6" fill={active ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 0 : 1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const IconCalendar = ({ active }: { active: boolean }) => (
  <svg className="w-6 h-6" fill={active ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 0 : 1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const IconPerson = ({ active }: { active: boolean }) => (
  <svg className="w-6 h-6" fill={active ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 0 : 1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

/* ─── Itens da Navegação ─────────────────────────────────────────────────── */

const NAV_ITEMS = [
  { href: "/inicio",  label: "Início", Icon: IconHome     },
  { href: "/buscar",  label: "Buscar", Icon: IconSearch   },
  { href: "/agenda",  label: "Agenda", Icon: IconCalendar },
  { href: "/perfil",  label: "Perfil", Icon: IconPerson   },
] as const;

/* ─── Componente ─────────────────────────────────────────────────────────── */

export default function BottomNav() {
  const pathname = usePathname();

  const isTabActive = NAV_ITEMS.some(({ href }) => pathname === href || pathname.startsWith(href + "/"));
  if (!isTabActive) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div
        className="mx-auto max-w-lg flex items-center justify-around px-2 pt-2"
        style={{ paddingBottom: "max(8px, env(safe-area-inset-bottom))" }}
      >
        {NAV_ITEMS.map(({ href, label, Icon }) => {
          const isActive = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-1 px-5 py-2 rounded-xl transition-colors duration-150 min-w-[64px] ${
                isActive ? "text-[#0D7A5A]" : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <Icon active={isActive} />
              <span className={`text-[11px] ${isActive ? "font-bold" : "font-medium"}`}>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
