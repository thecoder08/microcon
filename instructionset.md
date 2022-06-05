# MicroCon instruction set
This is the instruction set for the MicroCon virtual console.
## Load
This instruction loads a value into the accumulator.
### immidiate - 0x0001
This loads the specified value directly into the accumulator.
### memory - 0x0002
This loads the value at the specified address into the accumulator.
### pointer - 0x0003
This loads the value at the address stored in the pointer at the specified address into the accumulator.
## Store
This stores the value in the accumulator in memory.
### memory - 0x0004
This stores the value in the accumulator at the specified address.
### pointer - 0x0005
This stores the value in the accumulator at the address stored in the pointer at the specified address.
## Add
This instruction adds a value to the accumulator.
### immidiate - 0x0006
This adds the specified value directly to the accumulator.
### memory - 0x0007
This adds the value at the specified address to the accumulator.
### pointer - 0x0008
This adds the value at the address stored in the pointer at the specified address to the accumulator.
## Subtract
This instruction subtracts a value from the accumulator.
### immidiate - 0x0009
This subtracts the specified value directly from the accumulator.
### memory - 0x000A
This subtracts the value at the specified address from the accumulator.
### pointer - 0x000B
This subtracts the value at the address stored in the pointer at the specified address from the accumulator.
## Jump
This instruction changes the location of code execution to a new address.
### unconditionally - 0x000C
This instruction jumps to the specified address unconditionally.
### if not zero - 0x000D
This instruction jumps to the specified address if the accumulator is not zero.
### if negative - 0x000E
This instruction jumps to the specified address if the accumulator is negative.
## No-Op
Any other instruction opcode is considered a no-op instruction. It will do nothing.