import { ArrowRight, Mail, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTripModalProps{
    closeConfirmTripModal: () => void
    createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({
    closeConfirmTripModal, 
    createTrip}
    :ConfirmTripModalProps){

    return(
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
      <div className='w-[640px] rounded-xl py-5 px-6 bg-zinc-900 shadow-shape space-y-5'>

{/* Título e SubTítulo do Modal */}
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h2 className='text-zinc-200 text-lg font-semibold'>Confirmar criação da viagem</h2>
              <button type='button' onClick={closeConfirmTripModal}>
                <X className='text-zinc-400 size-5'/>
              </button>
          </div>
            <p className='text-zinc-400 text-sm'>Para concluir a criação da viagem para <span className='text-zinc-100 font-semibold'>Florianópolis, Brasil</span>  nas datas de <span className='text-zinc-100 font-semibold'>16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:</p>
        </div>

{/* Digitar e-mail convidado */}
        <form onSubmit={createTrip} className='space-y-3'>
          <div  className='h-14 px-4 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center gap-2'>
          <User className='size-5 text-zinc-400'/>
          <input
            name='name'
            placeholder="Seu nome completo"
            className="bg-transparent text-lg placeholder-zinc-400  w-40 outline-none text-zinc-400 flex-1"/>
          </div>
          <div  className='h-14 px-4 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center gap-2'>
          <Mail className='size-5 text-zinc-400'/>
          <input
            type="email"
            name='email'
            placeholder="Seu e-mail pessoal"
            className="bg-transparent text-lg placeholder-zinc-400  w-40 outline-none text-zinc-400 flex-1"/>
          </div>

          <Button type='submit' size='full'>
            Confirmar criação da viagem
              <ArrowRight className='size-5'/>
            </Button>
          
        </form>
        </div>
    </div>
    )
}