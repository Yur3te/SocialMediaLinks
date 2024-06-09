import React from "react";
import { TilesData } from "../TilesData/TilesData";
import { Tile } from "../Tile/Tile";
import { TileData } from "../../types/interfaces";

export const TilesList: React.FC = () => {
  return (
    <div className="w-full">
      {TilesData.map((tile: TileData, index: number) => (
        <Tile key={index} icon={tile.icon} name={tile.name} url={tile.url}/>
      ))}
    </div>
  );
};
