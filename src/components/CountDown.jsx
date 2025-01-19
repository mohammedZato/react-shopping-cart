import React, { useEffect, useState } from "react";

export default function CountDown({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = new Date(targetDate) - new Date();
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) & 60),
            };
        }
        return null; // Countdown is over
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); //CleanUp on unmount
    }, [targetDate]);
    
    if (!timeLeft) return <div>Countdown has Ended</div>;

    return (
        <div>
            <h2 class="font-bold">Sale Ends: {targetDate} (GMT)</h2>
            <div class="font-medium">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </div>
        </div>
    )
}