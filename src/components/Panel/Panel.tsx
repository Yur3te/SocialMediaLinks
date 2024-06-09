import React from 'react'

import avatar from '../../assets/images/avatar.jpg';
import { TilesList } from '../TilesList/TilesList';


export const Panel: React.FC = () => {
  return (
    <div className='bg-zinc-900 flex flex-col items-center text-white rounded-xl w-md p-6 sm:p-12 m-4'>
        <img src={avatar} alt="profile pic" className='rounded-full w-20 mb-4'/>
        <h2 className='text-center font-semibold my-2 text-2xl'>Maciej Honkisz</h2>
        <p className='font-bold text-xs text-lime-300'>Kozy, Poland</p>
        <p className='text-sm mt-6 text-center'>"Full-stack developer and poker enjoyer"</p>
        <TilesList/>
    </div>
  )
}
