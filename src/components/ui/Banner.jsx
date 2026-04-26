import { useState, useEffect, useRef, useMemo } from 'react';
import { Clock, X, Play, Pause, RotateCcw  } from 'lucide-react';
import Button from '@components/ui/Button';
import { cn } from '@lib/utils';

const Banner = ( { setShowBanner } ) => {
  const initialTime = useMemo(() => 59 * 60 + 59, [])
  const [timer, setTimer] = useState(initialTime)
  const [isActive, setIsActive] = useState(true);
  const interval = useRef(null);
  const isOver = timer <= 0 && !isActive

  useEffect(() => {
    if (!isActive || timer <= 0) {
      clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(() => {
      setTimer(prev => {
        const newValue = prev - 1;
        if (newValue <= 0) {
          setIsActive(false);
          return 0;
        }
        return newValue;
      })
    }, 1000);

    return () => clearInterval(interval.current)
  }, [isActive, timer]);

  const timerRun = (
    <span className='font-bold'>
      {Math.floor(timer / 60 / 60)}:
      {Math.floor(timer / 60 % 60).toString().padStart(2, '0')}:
      {Math.floor(timer % 60).toString().padStart(2, '0')}
    </span>
  )

  const handleRestart  = () => {
    if (isOver) {
      setTimer(initialTime)
      setIsActive(true)
    } else {
      setTimer(initialTime)
    }
  }

  return (
    <div className="relative p-4 w-full text-sm h-full rounded-xl text-white bg-linear-to-r from-[#D4183D] to-[#D4183D]/80">
      <div className="flex flex-col">
        <div className='flex items-center gap-2 mb-2'>
          <Clock />
          <h3 className="text-lg">Special Deal!</h3>
        </div>
        <p className='max-w-50 max-lg:max-w-full max-lg:mb-2'>
          Register now to unlock exclusive offers and discounts
        </p>
        <div className='flex justify-between items-end mb-2'>
          <span>Offer expires in:</span>
          {isOver ? <span>Time is over</span> : timerRun}
        </div>
        <div className='flex justify-between items-end gap-2'>
          <Button className={cn((isOver && 'flex-1 outline-2 outline-offset-2 outline-solid bg-indigo-600'), 'flex-1')} variant='primary'
            onClick={handleRestart}><RotateCcw/></Button>
          <Button className={cn((isOver && 'flex-1 pointer-events-none text-black/50'), 'flex-1')} variant='secondary'
            onClick={() => setIsActive(!isActive)}>{isActive ? <Pause/> : <Play/>}</Button>
        </div>
      </div>
      <button className='absolute top-2 right-2 flex items-center justify-center size-6' onClick={() => setShowBanner(false)}><X size={16}></X></button>
    </div>
  );
};

export default Banner;