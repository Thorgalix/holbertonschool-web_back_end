#!/usr/bin/env python3
"""Module pour récupérer et afficher des stats venant de logs"""
from pymongo import MongoClient


def main():
    """Affiche des statistiques sur la collection logs.nginx."""
    client = MongoClient('mongodb://127.0.0.1:27017')
    collection = client.logs.nginx

    print(f'{collection.count_documents({})} logs')
    print('Methods:')

    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    for method in methods:
        count = collection.count_documents({'method': method})
        print(f'\tmethod {method}: {count}')

    status = collection.count_documents({
        "method": "GET",
        "path": "/status"
    })

    print(f'{status} status check')
    print('IPs:')
    pipeline = [
        {
            "$group": {
                "_id": "$ip",
                "count": {"$sum": 1}
            }
        },
        {"$sort": {"count": -1}},
        {"$limit": 10}
    ]
    ips = collection.aggregate(pipeline)
    for ip in ips:
        print(f'\t{ip["_id"]}: {ip["count"]}')


if __name__ == "__main__":
    main()
