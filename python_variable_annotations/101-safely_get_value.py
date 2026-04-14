#!/usr/bin/env python3
"""Helpers for safely reading values from mappings with a default fallback."""

from typing import Mapping, Any, Union, TypeVar

T = TypeVar('T')


def safely_get_value(
    dct: Mapping,
    key: Any,
    default: Union[T, None] = None
        ) -> Union[Any, T]:
    """Return mapping value for key, or default when key is not present."""
    if key in dct:
        return dct[key]
    else:
        return default
