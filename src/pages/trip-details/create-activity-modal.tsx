import { Calendar, Clock, Tag, X } from "lucide-react"
import { Button } from "../../components/button"

interface CreateActivityModalProps{
    closeNewActivityModal: () => void
}

export function CreateActivityModal({closeNewActivityModal}:CreateActivityModalProps){
    return(
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 bg-zinc-900 shadow-shape space-y-5'>
      
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <h2 className='text-zinc-200 text-lg font-semibold'>Cadastrar atividade</h2>
                    <button type='button' onClick={closeNewActivityModal}>
                      <X className='text-zinc-400 size-5'/>
                    </button>
                </div>
                  <p className='text-zinc-400 text-sm'>Todos convidados podem visualizar as atividades.</p>
              </div>
      
              <form className='space-y-3'>
                <div  className='h-14 px-4 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center gap-2'>
                <Tag className='size-5 text-zinc-400'/>
                <input
                  name='name'
                  placeholder="Qual a atividade?"
                  className="bg-transparent text-lg placeholder-zinc-400  w-40 outline-none text-zinc-400 flex-1"/>
                </div>

                <div className="flex items-center gap-2">
                    <div  className='h-14 px-4 bg-zinc-950 rounded-lg border flex-1 border-zinc-800 flex items-center gap-2'>
                        <Calendar className='size-5 text-zinc-400'/>
                        <input
                        type="date"
                        placeholder="Qual a data?"
                        className="bg-transparent text-lg placeholder-zinc-100 outline-none text-zinc-400 "/>
                    </div>
                    <div  className='h-14 px-4 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center gap-2 w-36'>
                        <Clock className='size-5 text-zinc-400'/>
                        <input
                        type="time"
                        placeholder="Horário"
                        className="bg-transparent text-lg placeholder-zinc-400 outline-none text-zinc-400"/>
                    </div>
                </div>
                <Button type='submit' size="full">
                Salvar atividade
                </Button>
                
              </form>
              </div>
          </div>
    )
}