# notes on streams
As mentioned in the README, reactive programming is concerned with data stream manipulation.

Data streams are one-way (in one end, out the other), asynchronous (don't necessarily block code execution), and its elements are independent of one another. They are also immutable (meaning that operations on a stream produce a new stream), and possibly infinite. Streams also can exist without an observer, and the act of observing is called "subscription."

In RxJS, subscribing to a stream allows us to provide three handlers: one to tap into the stream, one for errors, and one that is called when the stream is complete.

In RxJS, there are two kinds of observables: "cold observables" "start" when they are subscribed to, and the subscribers get all elements in the stream from the beginning. "Hot observables" "start" in the middle of a stream, providing only the values that come through since the observer has subscribed. Example use cases for cold observables include DB queries and HTTP requests, which are often asynchronous data streams triggered by some programmatic event. Hot observables include other events or interrupts, such as mouse or keyboard events.

In general, we can visualize the process of reactive programming with a "marble diagram." This is a visual of the function that our operators perform. Note also that operators are pure functions.
