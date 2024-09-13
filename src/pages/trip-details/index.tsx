import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinksPage } from "./important-links";
import { GuestsPages } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destination-and-date-header";
// 01:08:00

export function TripDetailsPage (){
    const [isNewActivityModalOpen, setNewActivityModalOpen] = useState(false)

    function openNewActivityModal(){
        setNewActivityModalOpen(true)
    }

    function closeNewActivityModal() {
        setNewActivityModalOpen(false)
    }

    return (
        <div className="max-w-6xl py-10 px-6 mx-auto space-y-8">
            <DestinationAndDateHeader />

            <main className="flex gap-16 px-6">
                <Activities 
                openNewActivityModal={openNewActivityModal}
                />

                <div className="w-80 space-y-6">
                    <ImportantLinksPage />

                    <div className='w-full h-px bg-zinc-800'/>

                    <GuestsPages />
                </div>
            </main>
        {isNewActivityModalOpen && (
            <CreateActivityModal 
                closeNewActivityModal={closeNewActivityModal}
            />
        )}
        </div>
    )
}