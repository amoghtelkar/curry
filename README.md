#  Sambar

Sambar is a word in kannada which translate to curry in English.

## Usage

Install the module with below command 

`npm i sambar`

Import it like following code,

`import { add, sub, mul, div, mod } from 'sambar'`

#### Note: set `"type":"module"` in package.json

## What does sambar do ?

Sambar uses javascript currying functionality to make easy for the user to add, subtract, multiply, divide and modulu of n number of argumnets at a time. which will be convenient for the user to use,

### Addition
`add(1)(2)(3)()`

Which provides the sum of all three numbers which is 6

### Subtraction

`sub(9)(2)(1)(3)()`

which subtracts the values starting form left to right which result in 3

### Multiply

`mul(2)(3)(5)()`

which mul the values starting form left to right which result in 30

### Division

`div(100)(10)(2)()`

which divides the values starting form left to right which result in 5

### Modulus

`mod(100)(19)(3)()`

which modulud the values starting form left to right which result in 2

## Note

#### Don't forget to use `()` at the end.





