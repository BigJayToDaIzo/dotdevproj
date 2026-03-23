---
title: "Segment:Offset: Where Off-by-0x10000 Errors Hide"
teaser: "Two-phase address wrapping and the silent flag corruption trap."
order: 4
draft: true
---

## The 8088 Memory Model

The 8088 has a 20-bit address bus (1MB) but only 16-bit registers. The solution: **segment:offset addressing**. A physical address is computed as:

```
physical = ((segment << 4) + offset) & 0xFFFFF
```

The `& 0xFFFFF` wraps at 20 bits.address `0x100000` becomes `0x00000`. This is real mode's signature behavior.

## Two-Phase Wrapping

The wrapping happens in **two phases**, and getting the order wrong causes off-by-0x10000 errors:

1. **Offset wrapping** at 16 bits.the effective address calculation (base + index + displacement) wraps at `0xFFFF` before being combined with the segment
2. **Physical wrapping** at 20 bits.the final segment:offset sum wraps at `0xFFFFF`

Getting phase 1 wrong means the segment gets applied to an unwrapped offset, producing a physical address in the wrong 64K window.

## Segment Selection Rules

Which segment register to use isn't always obvious:

- If `BP` is the base register → use **SS** (stack segment)
- Otherwise → use **DS** (data segment)
- A segment override prefix (0x26, 0x2E, 0x36, 0x3E) can force any segment

Missing the BP/SS rule means every stack-relative memory access reads from the wrong segment.the data is there, but at the wrong physical address.

## The Silent Corruption Chain

The most insidious addressing bug isn't a crash.it's **silent flag corruption**:

1. Effective address computed wrong (bad displacement, wrong wrapping phase)
2. Memory read hits the wrong byte
3. Arithmetic produces the wrong result
4. Flags computed from the wrong result
5. Tests fail on flag values, not on the address

Debugging starts at step 5 and has to work backwards. The test says SF is wrong, but the real bug is in `ResolveEffectiveAddress`.three layers removed from the symptom.
