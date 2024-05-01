import { toast } from '@/components/ui/use-toast';
import React, { useEffect, useState } from 'react';
import { useWriteContract, useAccount } from 'wagmi';
import useWalletConnect from './useWalletConnect';
import { wagmiConfig } from '@/config';
import { pokemonABI } from '@/abis/CollectPokemon';

function useCollectPokemon(pokemonId: number) {
  const { address: ownerAddress } = useAccount();
  const { data: hash, writeContract, isError, isSuccess, error, isPending } = useWriteContract({ config: wagmiConfig });

  const [collectedInSession, setCollectedInSession] = useState(false);
  const { connectWallet, isConnected } = useWalletConnect();

  useEffect(() => {
    if (isError && error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });

      setCollectedInSession(false);
    } else if (isSuccess && hash) {
      toast({ title: 'Success', description: `Transaction Hash: ${hash}` });
      setCollectedInSession(true);

      const collectedPokemons = JSON.parse(localStorage.getItem('collectedPokemons') || '[]');
      if (!collectedPokemons.includes(pokemonId)) {
        localStorage.setItem('collectedPokemons', JSON.stringify([...collectedPokemons, pokemonId]));
      }
    }
  }, [isError, isSuccess, error, hash, pokemonId]);

  const handleCollect = async () => {
    if (!isConnected) {
      await connectWallet();
      return;
    }
    writeContract({
      address: process.env.NEXT_PUBLIC_POKEMON_CONTRACT! as `0x${string}`,
      abi: pokemonABI,
      functionName: 'collectPokemon',
      args: [ownerAddress, BigInt(pokemonId)],
    });
  };
  return {
    handleCollect,
    isPending,
    collectedInSession,
  };
}

export default useCollectPokemon;
