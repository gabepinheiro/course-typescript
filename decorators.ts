// Decorator -> declaração/anotaçao que pode ser anotada em uma Class, method, component..
// Ele trabalha em cima das partes anotadas para que a gente consiga adicionar coisas novas
// ou fazer alguma validação...

// @Component
// @Selector
// @useState("")

// Factory -> usaremos para retornar a criação do nosso decorator
function Logger(prefix: string){
  return (target: any) => {
    console.log(`${prefix} - ${target}`)
  }
}

@Logger('awesome')
class Foo {

}

// Class decorator

function setAPIVersion(apiVersion: string){
  return (constructor: any) => {
    return class extends constructor {
      version = apiVersion
    }
  }
}

// decorator - anotar a versão da API
@setAPIVersion('1.0.0')
class API {

}

// Property decorator

function minLength(length: number){
  return (target: any, key: string) => {
    let val = target[key]

    const getter = () => val;

    const setter = (value: string) => {
      if(value.length < length) {
          console.log(`VocÊ não pode criar ${key} com o tamanho menor que ${length}`)
      } else {
        val = value
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter
    })
  }
}

class Movie {
  // validação - se for menor que 5 -> error
  @minLength(50)
  title: string;

  constructor(t: string){
    this.title = t;
  }
}

const movie = new Movie('Interstellar');
console.log(movie.title)

// Method decorator

function delay(ms: number){
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value

    descriptor.value = function(...args: any) {
      console.log(`Esperando ${ms}...`)
      setTimeout(() => {
        originalMethod.apply(this, args)
      }, ms)

      return descriptor
    } 
  }
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g
  }

  greet(){
    console.log(`Hello ${this.greeting}`)
  }
}

const pessoinha = new Greeter('Pessoinha')
pessoinha.greet()

// Parameter decorator
// Acessor decorator