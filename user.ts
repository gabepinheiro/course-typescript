// accountInfo
//charInfo

//PlayerInfo

type Uuid = string | number 

type AccountInfo = {
  id: Uuid;
  name: string;
  email?: string; // ? -> optional
}

const account: AccountInfo = {
  id: 123,
  name: 'Gabe',
  email: 'gabe@dev.com'
}

type CharInfo = {
  nickname: string;
  level: number
}

const char: CharInfo = {
  nickname: 'Gabeboy',
  level: 99
}

//Intersection &
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
  ...account,
  ...char 
}






