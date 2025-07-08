import React from 'react'

const Timing = ({rolls , time , bestTime , formatTime}) => {
    return (
        <div className="flex justify-between items-center mt-6">
            <div className="flex flex-col items-center">
                <p className="font-semibold">Rolls</p>
                <p className="font-semibold">{rolls}</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-semibold">Time</p>
                <p className="font-semibold">{formatTime(time)}</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-semibold">Best</p>
                <p className="font-semibold">{bestTime ? formatTime(bestTime) : '--:--'}</p>
            </div>
        </div>
    )
}

export default Timing
