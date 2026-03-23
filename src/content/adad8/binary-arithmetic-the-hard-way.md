---
title: "Binary Arithmetic the Hard Way"
teaser: "Deriving the Auxiliary Carry Flag from first principles using full adder identity."
order: 2
draft: true
---

## Six Flags, No Theme Park

The 8088 computes six status flags after every arithmetic operation: Carry (CF), Parity (PF), Auxiliary Carry (AF), Zero (ZF), Sign (SF), and Overflow (OF). Each has its own quirks.

**Carry Flag**: straightforward. Did the result exceed the register width? Compare the full-width result against `0xFF` (byte) or `0xFFFF` (word).

**Zero and Sign**: trivial. Is the result zero? Is the high bit set?

**Overflow**: subtle. Did two values with the same sign produce a result with a different sign? XOR the sign bits of both operands with the result.

**Parity**: count the set bits in the **low byte only** (even on word operations). A lookup or popcount works.

## The Auxiliary Carry Trick

AF tracks carry out of bit 3 (the low nibble). You can't observe this directly from the result alone. The XOR recovery trick derives it from the full adder identity:

```
AF = ((source ^ destination ^ result) & 0x10) != 0
```

Why this works: in a full adder, `sum = a ^ b ^ carry_in`. Rearranging: `carry_in = a ^ b ^ sum`. Bit 4 of that XOR expression is exactly the carry *out* of bit 3, which is AF.

This formula generalizes to SUB, CMP, and any arithmetic operation. The "obvious" approach of masking nibbles and comparing works too, but only for ADD.

## Sign Extension in C#

When the 8088 sign-extends an 8-bit immediate to 16 bits, C# makes this clean:

```csharp
ushort extended = (ushort)(short)(sbyte)rawByte;
```

Three casts, each doing one job: `sbyte` reinterprets as signed, `short` widens with sign, `ushort` reinterprets back to unsigned. No bit manipulation needed.
