import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { Button } from './ui/button';
import { CollectButton } from './collect-pokemon';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ToolTipDetails from '@/components/tooltip-details';
import rightArrow from '@/assets/icons/arrow.svg';
import { firstLetterToUppercase } from '@/lib/utils';
import { StatObject } from '@/lib/types';

type PokemonCardProps = {
  name: string;
  abilities: string[];
  imageDefault: string;
  imageShiny: string;
  id: number;
  order: number;
  stats: StatObject;
  weight: number;
  isCollected: {
    result: string;
    status: string;
  };
};

function PokemonCard({ name, abilities, imageDefault, imageShiny, id, isCollected, order, stats, weight }: PokemonCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <section className="group rounded-lg bg-obolDark transition-colors">
      <Image src={imageShiny} alt={name} width={320} height={180} className="object-cover mx-auto" />
      <div className="flex flex-col justify-between items-center p-4 h-64 bg-obolDark rounded-b-lg">
        <h2 className="text-xl font-semibold text-white ">{firstLetterToUppercase(name)}</h2>

        <ul className="text-sm text-gray-300">
          {abilities.map((ability, index) => (
            <li key={index}> ✦ {firstLetterToUppercase(ability)}</li>
          ))}
        </ul>

        <div className="flex flex-col justify-between items-center">
          <CollectButton className="py-3 px-6" pokemonId={id} isCollected={isCollected} />
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild variant="ghost" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                  <Link href={`https://bulbapedia.bulbagarden.net/wiki/${name}`} className="text-[#2FE4AB] flex gap-x-2 text-sm mt-2 font-bold ">
                    <span>Details</span>
                    <Image src={rightArrow} alt="Right Arrow" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="border-none state-effects">
                <ToolTipDetails name={name} image={imageDefault} order={order} stats={stats} weight={weight} />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}

export default PokemonCard;
