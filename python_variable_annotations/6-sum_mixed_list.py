#!/usr/bin/env python3
"""Module for summing a mixed list of ints and floats.

This module provides a function that computes the sum of a list containing
integers and floating-point numbers, then returns the result as a float.
"""
from typing import List, Union


def sum_mixed_list(mxd_list: List[Union[int, float]]) -> float:
    """Return the sum of a mixed list of integers and floats.

    Args:
        mxd_list: A list of integers and floating-point numbers.

    Returns:
        The sum of all values in mxd_list as a float.
    """
    return float(sum(mxd_list))
