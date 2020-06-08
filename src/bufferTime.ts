import {interval} from "rxjs";
import {bufferTime, take} from "rxjs/operators";

console.log('Buffering stream interval(1000) by every 2000ms, creating a new batch every 1000ms');
// in other words, emit all events of the past two two seconds every second
interval(1000)
    .pipe(
        take(6),
        bufferTime(2000, 1000)
    )
    .subscribe(console.log);
