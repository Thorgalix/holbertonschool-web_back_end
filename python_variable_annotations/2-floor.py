#!/usr/bin/env python3
"""Module for flooring a float to an integer with type annotations.

This module provides a simple function to compute the floor value of a
floating-point number and demonstrates the use of type annotations in Python.
"""


def floor(n: float) -> int:
    """Return the floor of a float as an integer.

    Args:
        n: The floating-point number to floor.

    Returns:
        The greatest integer less than or equal to n.
    """
    return int(n - n%1)
