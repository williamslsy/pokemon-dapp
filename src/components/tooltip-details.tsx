import Image from 'next/image';
import { StatObject } from '@/lib/types';
import { Progress } from './ui/progress';

type PokemonCardProps = {
  name: string;
  image: string;
  order: number;
  stats: StatObject;
  weight: number;
};

function ToolTipDetails({ name, image, order, stats, weight }: PokemonCardProps) {
  return (
    <section className="group rounded-lg bg-obolDark transition-colors">
      <Image src={image} alt={name} width={320} height={180} className="object-cover mx-auto" />
      <div className="flex flex-col justify-between items-center p-8 h-[124px] bg-obolDark rounded-b-lg">
        <ul className="text-sm text-gray-300 mt-[-40px]">
          {Object.entries(stats).map(([statName, statValue], index) => (
            <li key={index}>
              {' '}
              {statName} ✦ {statValue}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ToolTipDetails;
