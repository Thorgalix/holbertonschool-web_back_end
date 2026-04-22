#!/usr/bin/env python3
"""
    retourne tous les étudiants
    triés par leur average score
"""


def top_students(mongo_collection):
    """Fonction retournant les scores moyens des étudiants
    triés décroissant"""
    pipeline = [
        {
            "$addFields": {
                "averageScore": {"$avg": "$topics.score"}
            }
        },
        {
            "$sort": {"averageScore": -1}
        }
    ]

    return mongo_collection.aggregate(pipeline)
