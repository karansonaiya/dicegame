import React from 'react'
import { Button } from "@/components/ui/button"

const Dies = ({ dice, toggleHold, win }) => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
            {dice.map((die, index) => (
                <Button
                    key={index}
                    onClick={() => toggleHold(index)}
                    disabled={win} 
                    className={`flex justify-center text-blue-900 mx-auto items-center w-[15%] h-12 rounded-lg text-2xl font-bold cursor-pointer transition 
                        ${die.isHeld ? 'bg-green-600' : 'bg-amber-300 hover:bg-yellow-600'}
                        ${win ? 'opacity-50 cursor-not-allowed' : ''}`} 
                >
                    {die.value}
                </Button>
            ))}
        </div>
    )
}

export default Dies
