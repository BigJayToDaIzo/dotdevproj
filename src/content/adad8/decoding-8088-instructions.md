---
title: "Decoding Intel 8088 Instructions in C#"
teaser: "From bitfield extraction to 256-entry lookup tables: why the decoder architecture evolved."
order: 3
draft: true
---

## The Decoder's Job

Every 8088 instruction starts with an opcode byte. The decoder's job: turn raw bytes into a structured `DecodedInstruction` record that the CPU can execute. This means extracting the operation, operands, addressing mode, and byte length.

## Bitfields vs Lookup Tables

The first approach used bitfield extraction:masking and shifting to pull the operation, direction bit (D), and width bit (W) from the opcode. This works but gets messy fast as opcode patterns overlap and special cases accumulate.

The refactored approach uses **four static lookup tables**, each indexed by the full opcode byte:

- `_transOperation[256]`:opcode to Operation enum (Add, Sub, ...)
- `_transFormat[256]`:opcode to encoding format (ModRM, ImmediateToAccumulator, ...)
- `_transRM[8]`:R/M field to base/index register pair
- `_isPreOp[256]`:is this byte a prefix?

One array lookup replaces a chain of bit manipulation. The tables are populated once, read forever. Adding a new opcode means filling in table entries, not threading conditionals through extraction logic.

## The ModR/M Byte

Most 8088 instructions include a second byte:the ModR/M byte:that encodes the addressing mode:

- **MOD** (bits 7-6): register-to-register, or memory with 0/8/16-bit displacement
- **REG** (bits 5-3): one register operand
- **R/M** (bits 2-0): the other operand:register or memory addressing mode

The four MOD values each take a different path: `MOD=11` means both operands are registers. `MOD=00/01/10` mean memory, with varying displacement sizes. And `MOD=00, R/M=110` is a special case:direct address, not `[BP]`.

## Immutable Records

The decoded instruction is a C# record:immutable by default:

```csharp
record DecodedInstruction(
  Operation Operation,
  Register? Source,
  Register? Destination,
  ushort? Immediate,
  MemoryOperand? MemoryOperand,
  int ByteLength
);
```

Nullable fields reflect the reality: not every instruction has an immediate, not every instruction touches memory. The decoder fills in what applies and leaves the rest null.
