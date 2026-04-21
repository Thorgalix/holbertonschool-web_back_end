#!/usr/bin/env python3
"""Module for retrieving all documents from a MongoDB collection."""


def list_all(mongo_collection):
    """List all documents in a MongoDB collection.

    Args:
        mongo_collection: A pymongo collection object.

    Returns:
        A list of all documents in the collection. Returns an empty list
        if the collection is empty.
    """
    cursor = mongo_collection.find()
    return list(cursor)
