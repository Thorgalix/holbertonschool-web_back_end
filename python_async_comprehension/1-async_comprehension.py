#!/usr/bin/env python3
"""Async comprehension helpers built on top of the async generator module."""
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Collect ten values from the async generator using
    an async comprehension."""
    return [x async for x in async_generator()]
