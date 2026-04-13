#!/usr/bin/env python3
"""Module for summing a list of floats with type annotations.

This module provides a function that computes the sum of a list of
floating-point numbers and returns the result as a float.
"""
import typing


def sum_list(input_list: typing.List[float]) -> float:
    """Return the sum of a list of floats.

    Args:
        input_list: A list of floating-point numbers.

    Returns:
        The sum of all values in input_list as a float.
    """
    return float(sum(input_list))
