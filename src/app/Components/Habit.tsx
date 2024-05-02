import React, { useState } from 'react';

interface HabitProps {
    habit: string;
}

const Habit: React.FC<HabitProps> = ({ habit }) => {
    const [completed, setCompleted] = useState(false);

    const handleComplete = () => {
        setCompleted(true);
    };

    return (
        <div className='bg-slate-300 text-black'>
            <h3>{habit}</h3>
            {completed ? (
                <p>Completed for the day!</p>
            ) : (
                <button onClick={handleComplete}>Mark as Completed</button>
            )}
        </div>
    );
};

export default Habit;