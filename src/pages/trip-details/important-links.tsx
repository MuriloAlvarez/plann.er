import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinksPage(){
    return(
        <div className="space-y-6 ">
                        <div>
                            <span className="text-zinc-50 text-xl font-semibold">
                                Links importantes
                            </span>
                        </div>

                        <div className="space-y-5">
                            <div className="justify-between flex gap-6 items-center">
                                <div className="space-y-1.5">
                                    <span className="text-zinc-100 block">Reserva do AirBnB</span>
                                    <a className="text-zinc-400 block truncate hover:text-zinc-200" href="#">https://www.airbnb.com.br/rooms/104700011</a>
                                </div>
                                <Link2 className="size-5 text-zinc-400 shrink-0"/>
                            </div>
                            <div className="justify-between flex gap-6 items-center">
                                <div className="space-y-1.5">
                                    <span className="text-zinc-100 block">Regras da Casa</span>
                                    <a className="text-zinc-400 block truncate hover:text-zinc-200" href="#">https://www.notion.com/pages/1047000112354648336?adults=13&children=0&infants=0&pets=0&wishlist_item_id=11003621872995&check_in=2024-08-17&check_out=2024-08-26&source_impression_id=p3_1717600906_P3DL0E-bJZzguEci&previous_page_section_name=1000</a>
                                </div>
                                <Link2 className="size-5 text-zinc-400 shrink-0"/>
                            </div>
                        </div>

                        <Button variant="secondary" size="full">
                            <Plus className='size-5'/>
                            Cadastrar novo link
                        </Button>
                    </div>
    )
}