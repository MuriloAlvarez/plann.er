import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function GuestsPages(){
    return(
        <div className="space-y-6 ">
                        <div>
                            <span className="text-zinc-50 text-xl font-semibold">
                                Convidados
                            </span>
                        </div>

                        <div className="space-y-5">
                            <div className="justify-between flex gap-6 items-center">
                                <div className="space-y-1.5">
                                    <span className="text-zinc-100 block">Jessica White</span>
                                    <span className="text-zinc-400 block">jessica.white44@yahoo.com</span>
                                </div>
                                <CircleDashed className="size-5 text-zinc-400 shrink-0"/>
                            </div>
                            <div className="justify-between flex gap-6 items-center">
                                <div className="space-y-1.5">
                                    <span className="text-zinc-100 block">Dr. Rita Pacocha</span>
                                    <span className="text-zinc-400 block">lacy.stiedemann@gmail.com</span>
                                </div>
                                <CircleDashed className="size-5 text-zinc-400 shrink-0"/>
                            </div>
                        </div>

                        <Button variant="secondary" size="full">
                        <UserCog className='size-5'/>
                        Gerenciar convidados
                    </Button>
                    </div>
    )
}