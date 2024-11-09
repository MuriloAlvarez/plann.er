import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
}

export function DestinationAndDateStep({
  closeGuestsInput,
  isGuestsInputOpen,
  openGuestsInput,
}: Readonly<DestinationAndDateStepProps>) {
  return (
    <div className="h-16 bg-zinc-900 rounded-xl px-4 flex items-center shadow-shape gap-3">
      {/* Disable campo de Localização */}
      {isGuestsInputOpen ? (
        <div className="flex items-center gap-2 flex-1">
          <MapPin className="size-5 text-zinc-600" />
          <input
            disabled={isGuestsInputOpen}
            type="text"
            placeholder="Para onde você vai?"
            className="bg-transparent text-lg placeholder-zinc-600 outline-none text-zinc-600"
          />
        </div>
      ) : (
        <div className="flex items-center gap-2 flex-1">
          <MapPin className="size-5 text-zinc-400" />
          <input
            type="text"
            placeholder="Para onde você vai?"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none text-zinc-400"
          />
        </div>
      )}
      {/* Disable campo de Data */}
      {isGuestsInputOpen ? (
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-600" />
          <input
            disabled={isGuestsInputOpen}
            type="text"
            placeholder="Quando?"
            className="bg-transparent text-lg placeholder-zinc-600  w-40 outline-none text-zinc-600"
          />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <input
            disabled={isGuestsInputOpen}
            type="text"
            placeholder="Quando?"
            className="bg-transparent text-lg placeholder-zinc-400  w-40 outline-none text-zinc-400"
          />
        </div>
      )}

      <div className="w-px h-6 bg-zinc-800" />

      {/* Alterando Botões */}
      {isGuestsInputOpen ? (
        <Button onClick={closeGuestsInput} variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput} variant="primary">
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}
