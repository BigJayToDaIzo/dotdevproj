---
title: "Building an 8088 Emulator with TDD"
teaser: "10,000 hardware-generated test cases per opcode. Red-Green-Refactor at the silicon level."
order: 1
---

## Why TDD for a CPU Emulator?

An emulator either matches hardware behavior or it doesn't. There's no "close enough." The [SingleStepTests/8088](https://github.com/SingleStepTests/8088) test suite provides **10,000 hardware-generated test cases per opcode**, each capturing the full CPU state before and after a single instruction execution. Every test case includes initial register values, memory contents, flag states, and the expected final state after execution.

This is TDD's ideal scenario: an authoritative oracle that defines correct behavior down to individual flag bits.

## The Workflow

Each session follows the same loop:

1. **Pick the smallest failing test**, not the most interesting one, the smallest one
2. **Write a unit test** that isolates the behavior
3. **Make it green** with the minimum implementation
4. **Refactor** only after green
5. **Run integration tests** against the hardware suite to validate

The integration test harness loads gzipped JSON test data, initializes CPU state from the test's `initial` block, executes the instruction bytes, then compares every register, flag, and memory byte against the `expected` block.

## What This Catches

The hardware tests are unforgiving. They surface bugs that manual testing never would:

- **Parity flag** computed on the wrong byte width
- **Auxiliary carry** using a formula that only works for ADD, not SUB
- **Effective address wrapping** at 16 bits vs 20 bits (two-phase wrapping)
- **Prefix bytes** silently consumed by the decoder, shifting the instruction stream

Every one of these was a real bug caught by the test suite, not by inspection.

## Signing Off

My favorite learning from this particular session is how easy it is to mask 6 bytes when you only mean to mask 5. I could not for the life of me figure out why the memory wasn't properly overflowing back to the 0 index. Turns out I had given it an extra order of magnitude and essentially configured a 16MB memory space, not seen till the 80286 according to legend. When the overflow mask didn't set as the integration tests expected, we found a missed edge case for the unit tests that should have ensured the flag was setting properly.

*TDD mf'n rules!*
*- jm*
