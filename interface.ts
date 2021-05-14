// Interface é utilizada para descrever a estrutura de Objetos
interface Game {
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[]
  getSimilars?: (title: string) => void
}

const tlou: Game = {
  title: 'The Last of Us',
  description: 'The best game in the world',
  genre: 'Action',
  // platform: ['PS3', 'PS4'],
  getSimilars: (title: string) => {
    console.log(`Similars games to ${title}: Uncharted, A Plague Tale and Metro...`)
  }
}

// tlou.genre = 'new' //Cannot assign to 'genre' because it is a read-only property.
console.log(tlou.genre)

// type guard
if(tlou.getSimilars)
  tlou.getSimilars(tlou.title)



interface DLC extends Game {
  originalGame: Game;
  newContent: string[]
}

const leftBehind: DLC = {
  ...tlou,
  originalGame: tlou,
  newContent: ['3 hours story', 'new characters']
}


class CreateGame implements Game{
  title: string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string){
    this.title = t;
    this.description = d;
    this.genre = g;
  }
}














