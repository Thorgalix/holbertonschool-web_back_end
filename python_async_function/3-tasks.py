#!/usr/bin/env python3
"""Create asyncio tasks from the basic wait coroutine."""

import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task[float]:
    """Create a task that waits for a random delay.

    Args:
        max_delay: Maximum delay passed to ``wait_random``.

    Returns:
        An asyncio task wrapping the coroutine returned by ``wait_random``.
    """

    return asyncio.create_task(wait_random(max_delay))
