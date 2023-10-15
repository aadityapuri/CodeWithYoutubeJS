const myArr= []
%DebugPrint(myArr)

##Above line makes no sense until the v8-debug engine is started to execute the file. 
// continuous, Holey

// SMI (small integer)
// Packed element
// Double (float, string, function)

## PACKED_SMI_ELEMENTS === CONTINUOUS SMI ELEMENTS (Most efficient one)

Packed double Element array will not be converted to packed SMI elent array once its made.

if any part or position is missing in an array, at that part of time it will be declared as the Holey_Elements.

### Holes are very Expensive
## Undefined returning values are the most costly ones in case of Holey arrays because it passes the check for out of bounds but is not even present in the array and due to prototypal nature of the javascript it will keep on checking the childs of the array too until it gets null.

## Out of bound Undefined would be the least costly one.

## Efficiency order
// SMI > DOUBLE > PACKED > H_SMI >H_DOUBLE > H_PACKED
Nan and Infinity also concludes to Double