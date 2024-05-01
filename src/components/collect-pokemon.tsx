'use client';
import { Button } from './ui/button';
import useCollectPokemon from '@/hooks/useCollectPokemon';

type CollectButtonProps = {
  pokemonId: number;
  isCollected: { result: string; status: string };
  className?: string;
};

export function CollectButton({ pokemonId, className, isCollected }: CollectButtonProps) {
  const { handleCollect, isPending, collectedInSession } = useCollectPokemon(pokemonId);

  let buttonText = 'Collect';
  if (isCollected?.result !== undefined || collectedInSession) {
    buttonText = 'Collected';
  } else if (isPending) {
    buttonText = 'Collecting';
  }

  return (
    <>
      <Button variant="obolPrimary" className={className} onClick={handleCollect} disabled={isCollected?.result !== undefined || isPending || collectedInSession}>
        {buttonText}
      </Button>
    </>
  );
}
