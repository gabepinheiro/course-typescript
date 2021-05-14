// Type Alias

// Definição
type GmaeT = {
  title: string;
}

type DLCT = {
  extra: string;
}

// intersection
type GameCollectionT = Game & DLCT & { }

// implements
class CreateGameT implements GameCollectionT {}

// declarar função
type getSimilarsT = (title: string) => void


// ====================== Diferenças =========================

// Permite declarar tipos primitivos
type IDT = string | number;

// pode declarar tuplas primitivos
type TupleT = [number, number]
[1,2,3] as TupleT;

//Apenas uma declaração por escopo
type JQueryT = {a: string}
type JQueryT = {b: string}

// mais recomendado: na maioria das vezes

// React - Props
// - Escrever as props com os types, são melhores para esse caso.

//Consistência!!!