#!/usr/bin/env python3
"""Pagination helper utilities for computing index ranges."""


def index_range(page: int, page_size: int) -> tuple:
    """Return start and end indexes for items of a specific pagination page."""
    assert isinstance(page, int) and page > 0
    assert isinstance(page_size, int) and page_size > 0
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
