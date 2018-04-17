import { Observable, Observer } from "rxjs";

let number = [1, 5, 10];
let source = Observable.fromEvent(document, 'mousemove')
                 .map((event: MouseEvent) => {
                     return {
                         x:event.clientX,
                         y:event.clientY
                     }
                 }).filter(element => {
                     return element.x>500;
                 })


source.subscribe(
    value => {
        console.log(`x: ${value.x} y: ${value.y}`);
       
    },
    error => {
        console.log(`Error: ${error}`);
    },
    () => {
        console.log('Complete');
    }
);