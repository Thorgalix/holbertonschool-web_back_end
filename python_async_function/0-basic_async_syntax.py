#!/usr/bin/env python3
"""Basic asynchronous utilities."""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Wait for a random delay and return the delay value.

    Args:
        max_delay: Upper bound for the random delay in seconds.

    Returns:
        A random floating-point delay between 0 and ``max_delay``.
    """

    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
