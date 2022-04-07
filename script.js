const input=document.getElementbyid("calculatorInput");
//
const buttons=document.querySelctorAll(".inputElements");
const clear = document.getElementbyid("clear");

input.innerText = "";
let string = "";
buttons.forEach((buttons, i) => {
  button.addEventListener('click', () =>){
    input.innerText=input.innerText.concat(button.innerText);
  });
});

clear.addEventListener('click', ()=> {
  string = "";
})
