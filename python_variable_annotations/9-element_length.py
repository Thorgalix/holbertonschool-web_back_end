#!/usr/bin/env python3
"""Module for pairing sequence elements with their lengths."""
import typing


def element_length(
    lst: typing.Iterable[typing.Sequence],
) -> typing.List[typing.Tuple[typing.Sequence, int]]:
    """Return a list of tuples containing each item and its length.

    Args:
        lst: An iterable of sequence elements.

    Returns:
        A list of tuples where each tuple contains a sequence from ``lst``
        and the length of that sequence.
    """

    return [(i, len(i)) for i in lst]
