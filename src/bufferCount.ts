import {of} from "rxjs";
import {bufferCount} from "rxjs/operators";

console.log('Buffering stream of(1,2,3) by count of 2');
of(1, 2, 3)
    .pipe(bufferCount(2))
    .subscribe(console.log);

console.log('Buffering stream of(1,2,3) by count of 2 and creating new buffer by count of 1');
// in other words, emit the last two elements for every element
of(1, 2, 3)
    .pipe(bufferCount(2, 1))
    .subscribe(console.log);
