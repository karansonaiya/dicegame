import React from 'react'
import { Button } from "@/components/ui/button"


const Dies = ({dice , toggleHold}) => {
    return (
        <>
            <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
                {dice.map((die, index) => (
                    <Button
                        key={index}
                        onClick={() => toggleHold(index)}
                        className={`flex justify-center bg-amber-300 text-blue-900 mx-auto items-center w-[15%] h-12 rounded-lg text-2xl font-bold cursor-pointer transition ${die.isHeld ? 'bg-green-600' : 'hover:bg-yellow-600'
                            }`}
                    >
                        {die.value}
                    </Button>
                ))}
            </div>
        </>
    )
}

export default Dies
