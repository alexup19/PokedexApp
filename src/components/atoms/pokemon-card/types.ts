export type PokemonCardProps = {
  pokemon: {
    name: string;
    url: string;
  };
  onPress: (itemId: string, count: number) => void;
  id: string;
  count: number;
};
