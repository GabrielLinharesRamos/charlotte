/* ─── Layout do Route Group (nathanael) ──────────────────────────────────────
   Wrapper mobile centralizado + BottomNav fixo.
   AppProvider compartilha estado entre as rotas deste grupo.
   Outros devs criam o próprio (nome)/layout.tsx com sua estrutura.
──────────────────────────────────────────────────────────────────────────── */

import { AppProvider } from "./_context/AppContext";
import BottomNav from "../../components/BottomNav";

export default function NathanaelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <div className="min-h-dvh bg-slate-100 sm:flex sm:items-start sm:justify-center sm:py-0">
        <div className="w-full sm:max-w-lg min-h-dvh bg-[#F6F8FA] sm:shadow-2xl sm:shadow-slate-300/40 flex flex-col relative overflow-hidden">
          <main
            className="flex-1 overflow-y-auto pt-4 pb-24"
            style={{ scrollbarWidth: "none" }}
          >
            {children}
          </main>

          <BottomNav />
        </div>
      </div>
    </AppProvider>
  );
}
