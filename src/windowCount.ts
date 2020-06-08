import {timer} from "rxjs";
import {switchMap, take, toArray, windowCount} from "rxjs/operators";

timer(0, 100).pipe(take(9))
    .pipe(
        windowCount(2),
        switchMap(w => w.pipe(toArray()))
    )
    .subscribe(console.log);
