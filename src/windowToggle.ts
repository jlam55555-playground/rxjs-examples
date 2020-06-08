import {timer} from "rxjs";
import {sequenceEqual, switchMap, take, toArray, windowToggle} from "rxjs/operators";

const openings = timer(0, 500);
const closing = () => timer(200);

timer(0, 100)
    .pipe(
        take(36),
        windowToggle(openings, closing),
        switchMap(s => s.pipe(toArray()))
    )
    .subscribe(console.log);
// note that the timers may not be entirely synced, causing for some variability in the output
