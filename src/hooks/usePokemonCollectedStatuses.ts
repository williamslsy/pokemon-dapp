import React, { useEffect, useState } from 'react';
import { multicall } from '@wagmi/core';
import { wagmiConfig } from '@/config';
import { pokemonABI } from '@/abis/CollectPokemon';
import { TPokemon } from '@/lib/types';
import { useToast } from '@/components/ui/use-toast';
// defines and triggers a function to fetch the ownership statuses of the list of Pokémons using the multicall function from the wagmi library

function usePokemonCollectedStatuses(pokemonList: TPokemon[]) {
  const { toast } = useToast();
  const [collectedStatuses, setCollectedStatuses] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    let isMounted = true;

    const fetchCollectedStatuses = async () => {
      const callArray = pokemonList.map((pokemon) => ({
        address: process.env.NEXT_PUBLIC_POKEMON_CONTRACT! as `0x${string}`,
        abi: pokemonABI,
        functionName: 'ownerOf',
        args: [pokemon.id],
      }));

      try {
        const result = await multicall(wagmiConfig, {
          batchSize: 100,
          contracts: callArray,
          multicallAddress: '0xca11bde05977b3631167028862be2a173976ca11',
        });

        if (isMounted) {
          setCollectedStatuses(result);
        }
      } catch (error) {
        console.error('Failed to fetch collected statuses:', error);
        if (isMounted) {
          toast({
            title: 'Error',
            description: 'Failed to fetch collected statuses',
            variant: 'destructive',
          });
        }
      }
    };

    fetchCollectedStatuses();
    return () => {
      isMounted = false;
    };
  }, [pokemonList, toast]);

  return collectedStatuses;
}

export default usePokemonCollectedStatuses;
