import React from 'react'
import { useStore } from '../../Context/Store'
import Countdown from '../Countdow/Countdown'

export default function Statitics(props) {

  const { wins, games, correct, lost, } = useStore();

  return (
    <div className=''>
      <div className='flex justify-between w-72 mb-14 mx-auto '>
        <div>
          <b className='mb-4 text-3xl'>{games}</b>
          <p>Jugadas</p>
        </div>
        <div>
          <b className='mb-4 text-3xl'>{wins}</b>
          <p>Victorias</p>
        </div>
      </div>
      {lost && <p className='mb-4'>La palabra era: <b>{`${correct}`}</b></p>}
      <p className='mb-4'>SIGUIENTE PALABRA</p>
      <Countdown deadline={props.timer} />
    </div>
  )
}
