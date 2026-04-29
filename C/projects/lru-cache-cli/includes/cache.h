#ifndef CACHE_H
#define CACHE_H

#include "dll.h"
#include "hashmap.h"

typedef struct {
    int capacity;
    int size;
    Node* head;
    Node* tail;
    HashMap map;

} LRUCache;

LRUCache* createCache(int capacity);
void put(LRUCache* cache, char* key, char* value);
char* get(LRUCache* cache, char* key); 

#endif