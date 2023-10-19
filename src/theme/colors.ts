export const Colors = {
  identity: {
    primary: '#DC0A2D',
  },
  pokemonType: {
    bug: '#A7B723',
    dark: '#75574C',
    dragon: '#7037FF',
    electric: '#F9CF30',
    fairy: '#E69EAC',
    fighting: '#C12239',
    fire: '#F57D31',
    flying: '#A891EC',
    ghost: '#70559B',
    normal: '#AAA67F',
    grass: '#74CB48',
    ground: '#DEC16B',
    ice: '#9AD6DF',
    poison: '#A43E9E',
    psychic: '#FB5584',
    rock: '#B69E31',
    steel: '#B7B9D0',
    water: '#6493EB',
    default: '#B8B8B8',
  },
  grayscale: {
    dark: '#1D1D1D',
    medium: '#666666',
    light: '#E0E0E0',
    background: '#EFEFEF',
    white: '#FFFFFF',
    default: '#B8B8B8',
  },
};

export const getTypeColor = (type: string | undefined) => {
  switch (type) {
    case 'bug':
      return Colors.pokemonType.bug;
    case 'dark':
      return Colors.pokemonType.dark;
    case 'dragon':
      return Colors.pokemonType.dragon;
    case 'electric':
      return Colors.pokemonType.electric;
    case 'fairy':
      return Colors.pokemonType.fairy;
    case 'fighting':
      return Colors.pokemonType.fighting;
    case 'fire':
      return Colors.pokemonType.fire;
    case 'flying':
      return Colors.pokemonType.flying;
    case 'ghost':
      return Colors.pokemonType.ghost;
    case 'normal':
      return Colors.pokemonType.normal;
    case 'grass':
      return Colors.pokemonType.grass;
    case 'ground':
      return Colors.pokemonType.ground;
    case 'ice':
      return Colors.pokemonType.ice;
    case 'poison':
      return Colors.pokemonType.poison;
    case 'psychic':
      return Colors.pokemonType.psychic;
    case 'rock':
      return Colors.pokemonType.rock;
    case 'steel':
      return Colors.pokemonType.steel;
    case 'water':
      return Colors.pokemonType.water;
    default:
      return Colors.pokemonType.default;
  }
};
