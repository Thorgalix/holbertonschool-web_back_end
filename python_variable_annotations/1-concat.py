#!/usr/bin/env python3
"""Module for concatenating two strings with type annotations.

This module provides a simple function to concatenate two strings
and demonstrates the use of type annotations in Python.
"""


def concat(str1: str, str2: str) -> str:
    """Concatenate two strings and return the result.

    Args:
        str1: The first string to concatenate.
        str2: The second string to concatenate.

    Returns:
        The concatenation of the two input strings.
    """
    return str1 + str2
