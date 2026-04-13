#!/usr/bin/env python3
"""Measure average runtime of asynchronous wait coroutines."""

import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Return the average execution time per coroutine.

    Args:
        n: Number of coroutines to execute.
        max_delay: Maximum delay passed to each coroutine.

    Returns:
        The average runtime in seconds.
    """

    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()
    return ((end_time - start_time) / n)
