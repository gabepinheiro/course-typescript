// Interfaces

// Definição
interface Gamee {
  title: string;
}

interface DLC {
  extra: string;
}

// interseção | extend
interface GameCollection extends Game, DLC {}

// implements
class CreateGame implements GameCollection {}

interface getSimilars {
  (title: string): void;
}

// ====================== Diferenças =========================

interface ID extends number {}

interface Tuple {
  0: number;
  1: number;
}
[1, 2, 3] as Tuple;

// Pode ter múltiplas declarações e ele une de mesmo nome
interface  JQuery {
  a: string;
} 

interface JQuery {
  b: string;
}

const $: JQuery = {
  a: 'bla',
  b: 'foo'
}

// vantagem: quando tiver criando libs, prefira interface
// porque são mais extensiveis

//criando obj/class (POO)







