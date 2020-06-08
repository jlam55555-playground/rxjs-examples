import {timer} from "rxjs";
import {switchMap, take, toArray, windowTime} from "rxjs/operators";

const source = timer(0, 100).pipe(take(9));

source
    .pipe(
        windowTime(200),
        switchMap(w => w.pipe(toArray()))
    )
    .subscribe(console.log);
