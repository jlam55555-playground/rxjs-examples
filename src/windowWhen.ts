import {timer} from "rxjs";
import {mergeAll, take, tap, windowWhen} from "rxjs/operators";

const source = timer(0, 1000).pipe(take(9));
const notifier = () => timer(2000);

source
    .pipe(
        windowWhen(notifier),
        tap(() => console.log('new buffer')),
        mergeAll()
    )
    .subscribe(console.log);
