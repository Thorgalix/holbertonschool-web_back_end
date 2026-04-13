#!/usr/bin/env python3
"""Module for creating a key-value tuple with a squared float value.

This module provides a function that takes a string key and a numeric value,
then returns a tuple containing the key and the square of the value as a
floating-point number.
"""
import typing


def to_kv(k: str, v: typing.Union[int, float]) -> typing.Tuple[str, float]:
    """Return a tuple with a string key and the squared numeric value.

    Args:
        k: The key to include in the returned tuple.
        v: The numeric value to square.

    Returns:
        A tuple containing k and the square of v as a float.
    """
    return (k, float(v ** 2))
