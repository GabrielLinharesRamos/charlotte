"use client";

/* ─── /buscar — Fluxo de Busca, Localização e Pagamento ─────────────────────
   Estado local aqui porque é um fluxo modal/overlay específico desta rota.
   Ao confirmar pagamento, salva no Context e navega para /agenda.
──────────────────────────────────────────────────────────────────────────── */

import { useState } from "react";
import { useRouter } from "next/navigation";
import SearchScreen from "../../../components/SearchScreen";
import LoadingScreen from "../../../components/LoadingScreen";
import LocationScreen from "../../../components/LocationScreen";
import PaymentScreen from "../../../components/PaymentScreen";
import { useAppContext } from "../_context/AppContext";

export default function BuscarPage() {
  const router = useRouter();
  const { addAppointment } = useAppContext();

  const [isSearching, setIsSearching] = useState(false);
  const [isLocating, setIsLocating]   = useState(false);
  const [isPaying, setIsPaying]       = useState(false);
  const [searchSymptom, setSearchSymptom] = useState("");

  const handleStartSearch = (symptom: string) => {
    setSearchSymptom(symptom);
    setIsSearching(true);
  };

  const handleCancelSearch = () => setIsSearching(false);

  const handleSearchSuccess = () => {
    setIsSearching(false);
    setIsLocating(true);
  };

  const handleCancelLocation = () => setIsLocating(false);

  const handlePaymentStart = () => {
    setIsLocating(false);
    setIsPaying(true);
  };

  const handleBackToLocation = () => {
    setIsPaying(false);
    setIsLocating(true);
  };

  const handleConfirmPayment = () => {
    setIsPaying(false);
    addAppointment({
      id: Date.now(),
      therapistName: "Dra. Ana Ribeiro",
      specialty: "Ortopedia & Esportivo",
      day: "Qui, 24 Jul",
      time: "14:00",
      price: 180,
    });
    router.push("/agenda");
  };

  return (
    <>
      {isSearching && (
        <LoadingScreen
          symptom={searchSymptom}
          onCancel={handleCancelSearch}
          onSuccess={handleSearchSuccess}
        />
      )}

      {isLocating && (
        <LocationScreen
          symptom={searchSymptom}
          onCancel={handleCancelLocation}
          onPaymentSuccess={handlePaymentStart}
        />
      )}

      {isPaying && (
        <PaymentScreen
          therapistName="Dra. Ana Ribeiro"
          specialty="Ortopedia & Esportivo"
          price={180}
          onBack={handleBackToLocation}
          onConfirmPayment={handleConfirmPayment}
        />
      )}

      {!isSearching && !isLocating && !isPaying && (
        <SearchScreen onSearch={handleStartSearch} />
      )}
    </>
  );
}
