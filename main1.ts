import { Observable, Observer } from "rxjs";

let number = [1, 5, 10];
let source = Observable.from(number);
/*
class MyObservable implements Observer<number> {
    //next() ocurrio un evento me lo pasas a ver que paso
    next(value: number){
    console.log(`ValueOk: ${value} `);
    };     
    error(err: any){
        console.log(`Error:${err}`);
    };         //en cuanto ocurra un errror truena 
    complete(){
        console.log(`Complete!`);
    };              //
}

source.subscribe(new MyObservable);
*/
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