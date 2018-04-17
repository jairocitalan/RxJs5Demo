import { Observable, Observer } from "rxjs";

let number = [1, 5, 10];
//quien va emitir eventos
let source = Observable.create((obsv)=>{
     let index=0;
    let produceValue = () => {

        obsv.next(number[index++])
       if(index<number.length){
           setTimeout(() =>{
               produceValue();
           },2000);
       }else{
           obsv.complete();
       }

    }
    produceValue();
  }).map(x=> x* 2).filter(x=> x >= 10);

source.subscribe(
    value => {
        console.log(`value: ${value}`);
    },
    error => {
        console.log(`Error: ${error}`);
    },
    () => {
        console.log('Complete');
    }
);