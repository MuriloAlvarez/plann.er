import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface InviteGuestsModalProps {
  closeGuestsModal: () => void;
  emailsToInvite: string[];
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailFromInvites: (email: string) => void;
}
export function InviteGuestsModal({
  addNewEmailToInvite,
  closeGuestsModal,
  emailsToInvite,
  removeEmailFromInvites,
}: Readonly<InviteGuestsModalProps>) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 bg-zinc-900 shadow-shape space-y-5">
        {/* Título e SubTítulo do Modal */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-zinc-200 text-lg font-semibold">
              Selecionar convidados
            </h2>
            <button type="button" onClick={closeGuestsModal}>
              <X className="text-zinc-400 size-5" />
            </button>
          </div>
          <p className="text-zinc-400 text-sm">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        {/* Email-s */}
        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => {
            return (
              <div
                key={email}
                className="bg-zinc-800 px-2.5 py-1.5 rounded-md flex text-center gap-2"
              >
                <span className=" text-zinc-300">{email}</span>
                <button
                  type="button"
                  onClick={() => removeEmailFromInvites(email)}
                >
                  <X className="size-4 text-zinc-400" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="w-full h-px bg-zinc-800" />

        {/* Digitar e-mail convidado */}
        <form
          onSubmit={addNewEmailToInvite}
          className="p-2.5 bg-zinc-950 rounded-lg border border-zinc-800 flex"
        >
          <div className="px-2 flex items-center flex-1 gap-2">
            <AtSign className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado"
              className="bg-transparent text-lg placeholder-zinc-400  w-40 outline-none text-zinc-400 flex-1"
            />
          </div>
          <Button type="submit">
            Convidar
            <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
