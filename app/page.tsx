/* ─── Raiz — Redireciona para /inicio ────────────────────────────────────────
   Não há lógica aqui. Cada dev tem seu próprio Route Group em app/(nome)/.
──────────────────────────────────────────────────────────────────────────── */

import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/inicio");
}
