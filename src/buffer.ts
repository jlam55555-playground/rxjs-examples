import {interval, of} from 'rxjs';
import {buffer, bufferCount, bufferTime, take} from 'rxjs/operators';

console.log('Buffering stream interval(100) by interval of 1000ms');
interval(100)
    .pipe(
        buffer(interval(1000)),
        take(3)
    )
    .subscribe(console.log);
