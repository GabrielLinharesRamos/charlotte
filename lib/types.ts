/* ─── Tipos Compartilhados do Projeto Charlotte ──────────────────────────────
   Importar daqui em vez de redefinir nos próprios arquivos.
   Nunca editar sem alinhamento com o time.
──────────────────────────────────────────────────────────────────────────── */

export interface ExerciseItem {
  id: number;
  emoji: string;
  name: string;
  duration: string;
  done: boolean;
}

export interface Appointment {
  id: number;
  therapistName: string;
  specialty: string;
  day: string;
  time: string;
  price: number;
}
