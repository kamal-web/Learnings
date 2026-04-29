#ifndef HASHMAP_H
#define HASHMAP_H

#include "dll.h"

#define SIZE 100

typedef struct {
    Node* table[SIZE];
} HashMap;

int hash(char* key);
void putmap(HashMap* map, char* key, Node* node);
Node* getmap(HashMap* map, char* key);
void removeMap(HashMap* map, char* key);

#endif