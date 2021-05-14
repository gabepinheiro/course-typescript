const input1 = document.querySelector('.num1') as HTMLInputElement
const input2 = document.querySelector('.num2') as HTMLInputElement

const btn = document.querySelector('.somar')!

//Não foi necessário tipar o retorno, pois o TypeScript já entende que será
//retornado um número
function sum(a: number, b:number){
  return a + b
}

btn.addEventListener('click', () => {
  console.log(sum(Number(input1.value), Number(input2.value)))
})

