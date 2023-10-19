export type ListProps = {
  goToPokemonScreen: (pokemonId: string, pokemonCount: number) => void;
};

export type ListItemProps = {
  name: string;
  url: string;
};
