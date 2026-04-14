#!/usr/bin/env python3
"""Measure the runtime of multiple async comprehension calls."""
import asyncio
from time import perf_counter

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Return the time needed to run four async comprehensions concurrently."""
    start = perf_counter()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    end = perf_counter()
    return end - start
