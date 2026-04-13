#!/usr/bin/env python3
"""Module for creating a multiplier function.

This module provides a function that returns another function which multiplies
its input by a fixed multiplier.
"""
import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    """Return a function that multiplies a float by ``multiplier``.

    Args:
        multiplier: The fixed multiplier value.

    Returns:
        A callable that takes a float and returns its product with
        ``multiplier``.
    """

    def inner(x: float) -> float:
        return x * multiplier

    return inner
