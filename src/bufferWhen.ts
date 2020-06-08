import {interval} from "rxjs";
import {bufferWhen, take, tap} from "rxjs/operators";

let x = 0;
interval(500)
    .pipe(
        take(10),
        tap(i => void (x = i)),
        // vary buffer closing
        bufferWhen(() => interval(x < 5 ? 1000 : 500))
    )
    .subscribe(console.log);

// note that bufferWhen immediately starts a new buffer after the completion of the previous
// the argument to bufferWhen is like the stop factory argument of the bufferToggle, except that the buffer
// restarts right away
