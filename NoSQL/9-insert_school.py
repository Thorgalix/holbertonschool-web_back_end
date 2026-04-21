#!/usr/bin/env python3
"""Module qui insere un document dans une collection MongoDB."""


def insert_school(mongo_collection, **kwargs):
    """Insere un nouveau document et retourne son identifiant."""
    cursor = mongo_collection.insert_one(kwargs)
    return cursor.inserted_id
