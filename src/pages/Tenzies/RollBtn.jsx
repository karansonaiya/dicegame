import React from 'react'
import { Button } from "@/components/ui/button"

const RollBtn = ({handleRoll , win}) => {
    return (
        <>
            <div className="flex justify-center items-center mt-6">
                <Button
                    onClick={handleRoll}
                    className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition mt-4"
                >
                    {win ? 'You Won! 🎉' : 'Roll Dies'}
                </Button>
            </div>
        </>
    )
}

export default RollBtn
