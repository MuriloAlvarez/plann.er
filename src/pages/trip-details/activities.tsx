import { CircleCheck, Plus } from "lucide-react";
import { Button } from "../../components/button";

interface ActivitiesProps{
    openNewActivityModal: () => void
}
export function Activities({openNewActivityModal}:ActivitiesProps){
    return(
        <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between" >
                        
                        <h2 className="text-3xl text-zinc-50 font-semibold">Atividades</h2>
                        <Button onClick={openNewActivityModal} variant="primary">
                        <Plus className='size-5'/>
                        Cadastrar atividade
                        </Button>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-3">
                            <div className="gap-2 flex items-baseline">
                                <span className="text-zinc-300 font-semibold text-xl">
                                    Dia 17
                                </span>
                                <span className="text-zinc-500 text-xs ">
                                    Sábado
                                </span>
                            </div>
                            <span className="text-zinc-500 text-sm">
                            Nenhuma atividade cadastrada nessa data
                            </span>
                        </div>

                        <div className="space-y-3">
                            <div className="gap-2 flex items-baseline">
                                <span className="text-zinc-300 font-semibold text-xl">
                                    Dia 18
                                </span>
                                <span className="text-zinc-500 text-xs ">
                                     Domingo
                                </span>
                            </div>
                            <div className="bg-zinc-900 py-3 shadow-shape px-4 flex items-center gap-3 rounded-xl">
                                <CircleCheck className="text-lime-300 size-5"/>
                                <span className="text-zinc-100">
                                    Almoço
                                </span>
                                <span className="ml-auto text-zinc-400 text-sm">
                                    12:00h
                                </span>
                            </div>
                            <div className="bg-zinc-900 h-10 shadow-shape px-4 flex items-center gap-3 rounded-xl">
                                <CircleCheck className="text-lime-300 size-5"/>
                                <span className="text-zinc-100">
                                    Corrida de Kart
                                </span>
                                <span className="ml-auto text-zinc-400 text-sm">
                                    14:00h
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
    )
}