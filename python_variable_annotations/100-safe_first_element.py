#!/usr/bin/env python3
"""Utilities for safely retrieving the first element from a sequence."""

from typing import Sequence, Any, Optional




def safe_first_element(lst: Sequence[Any]) -> Optional[Any]:
    """Return the first element of a sequence, or None when it is empty."""
    if lst:
        return lst[0]
    else:
        return None
