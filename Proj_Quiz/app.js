const correctAnswers = ['B','B','B','B'];
const form=document.querySelector(".quiz-form");
const result=document.querySelector(".result");
const showResultPercentage=document.querySelector("result.p");

form.addEventListener('submit', e =>{
    e.preventDefault();
    let score=0;
    const userAnsweres =[form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    // check answers
    userAnsweres.forEach((answers,index)=>{
        if(answers===correctAnswers[index]){
            score +=25;
        }
    });

    //console.log(`Total score is ${score}`);
    //console.log(score);

   //show results
   scrollTo(0,0);
   
   //result.querySelector('span').textContent=`${score}%`;
   result.classList.remove('d-none');//even though div it is a class name as per bootstrap so used class
   
    let output = 0;
    const timer = setInterval(() => {
      result.querySelector('span').textContent = `${output}%`;
      if(output === score){
      clearInterval(timer);
      } else {
      output++;
      }
   }, 10);  

});
// let i=0;
// setInterval(() => {
//     console.log("Hello!");
//     i++;
//     if(i==5){
//         clearInterval(timer);
//     }
// }, 1000);
//Window object (global object)
// doing 
//console.log("hello");
// is the same as
//windows.console.log("hello");