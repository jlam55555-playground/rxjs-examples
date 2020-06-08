import {interval, timer} from "rxjs";
import {window, switchMap, take, toArray} from "rxjs/operators";

timer(0, 100)
    .pipe(
        window(interval(1000)),
        take(3),
        switchMap(w => w.pipe(toArray()))
    )
    .subscribe(console.log);
// window is just like buffer but returns an observable rather than a list
// we can use switchMap here to flatten the stream of observables into a single observable
// note also that this only returns two arrays, since the stream ends immediately after the third window
// is created (first window: 0-9, second window: 10-19, third window: (terminates immediately);
// to get three arrays of ten, we can perform take(30) before the window command rather than take(3) after it
