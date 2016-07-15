# Clearing Floats

Often you'll want things that are side by side on opposite ends of a container.

By default, floating elements overhang their container, as you can see in the top example.

There are two ways to fix this:

1. Set `overflow:hidden;` on the container. This clips anything that runs over, but it also
causes the container to extend to fit the floats.
2. Set an `:after` psuedoelement on the container and have it `clear: both`.
    * This is useful if you want to be able to hang outside the container in another way.
    In the third example, the boxes stick out the top. 
    * In all the examples, there's a `box-shadow` that would be clipped by `overflow: hidden;`


## Notes

* Use `<hr>` for the lines between examples.
* `myelement:after` clears a psuedoelemnt. You need to set it's `content` and `display` to make it useful. 
`content` is probably blank in this case.
    * We'll cover more on psuedo-elements later.
