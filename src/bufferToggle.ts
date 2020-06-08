import {interval} from "rxjs";
import {bufferToggle, take, tap} from "rxjs/operators";

// open a batch every 400ms (i.e., report every 400ms)
const opening = interval(400)
    .pipe(
        tap(() => console.log('open'))
    );

// close it 300ms after opening a batch (i.e., read the last 300ms)
const closing = () => interval(300)
    .pipe(
        tap(() => console.log('closing'))
    );

interval(100)
    .pipe(
        tap(x => console.log(x)),
        bufferToggle(opening, closing),
        take(3)
    )
    .subscribe(console.log);

// this bufferToggle example is similar to bufferTime(300, 400)
// note that this action has the effect of having "windows" off accepting/not accepting the observable data
