#!/usr/bin/env python3
"""Asynchronous generator module producing random float values."""

import random
import asyncio


async def async_generator():
    """Yield 10 random floats between 0 and 10 with one-second intervals."""
    for i in range(10):
        await asyncio.sleep(1)
        value = random.uniform(0, 10)
        yield value
