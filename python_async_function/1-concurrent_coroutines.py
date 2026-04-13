#!/usr/bin/env python3
"""Run multiple asynchronous wait coroutines concurrently."""

import asyncio


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> list[float]:
    """Spawn ``n`` wait coroutines and return sorted delays.

    Args:
        n: Number of coroutines to run concurrently.
        max_delay: Maximum delay passed to each ``wait_random`` call.

    Returns:
        A list of delay values sorted in ascending order.
    """

    tasks = [wait_random(max_delay) for _ in range(n)]
    results = await asyncio.gather(*tasks)
    return sorted(results)
