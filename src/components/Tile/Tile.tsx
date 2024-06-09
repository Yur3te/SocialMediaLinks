import { TileData } from '../../types/interfaces'

export const Tile = ({name, url, icon}:TileData) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className='w-full py-2.5 mt-5 bg-neutral-700 hover:text-black hover:bg-lime-400 rounded-md flex items-center justify-center'>
        
        <div className="flex items-center">
          {icon}
          <p className='font-semibold ml-1'>{name}</p>
        </div>
    </a>
  )
}
