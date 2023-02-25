import { useEffect, useState } from 'react'
import { useStore } from '../../Context/Store';

export default function Countdown(props) {
        
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const { win, lost, setReset } = useStore();

    let interval = -1;

    const getTime = (deadline) => {
        const time = deadline - Date.now();
        if(time > 0) {
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
            return;
        }

        setReset(true);
        clearInterval(interval);
        console.log('game reseted')
    };

    useEffect(() => {
        if(win || lost) {
            interval = setInterval(() => getTime(props.deadline), 1000);
        
            return () => clearInterval(interval);
        }
        
    }, []);

    return (
        <div className='font-bold text-2xl'>{`0${minutes}:${seconds > 9 ? '' : '0'}${seconds}`}</div>
    )
}
