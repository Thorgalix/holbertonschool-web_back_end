#!/usr/bin/env python3
"""Module pour récupérer et afficher des stats venant de logs"""
from pymongo import MongoClient

client = MongoClient('mongodb://127.0.0.1:27017')
collection = client.logs.nginx

"""total = collection.count_documents({})
get = collection.count_documents({"method": "GET"})
post = collection.count_documents({"method": "POST"})
put = collection.count_documents({"method": "PUT"})
patch = collection.count_documents({"method": "PATCH"})
delete = collection.count_documents({"method": "DELETE"})
status = collection.count_documents({
    "method": "GET",
    "path": "/status"
})

print(f'{total} logs')
print('Methods:')
print(f'\t method GET: {get}')
print(f'\t method POST: {post}')
print(f'\t method PUT: {put}')
print(f'\t method PATCH: {patch}')
print(f'\t method DELETE: {delete}')
print(f'{status} status check')
"""

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
