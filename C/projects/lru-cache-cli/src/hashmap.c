#include <string.h>
#include "hashmap.h"

int hash(char* key){
    int sum = 0;
    for(int i=0; key[i];i++) sum+=key[i];
    return sum % SIZE;
}

void putmap(HashMap* map, char* key, node* node) {
    map->table[hash(key)] = node;
}

Node* getmap(hashMap* map, char* key){
    return map->table[hash(key)];
}

void removemap(hashMap* map, char* key){
    map->table[hash(key)] = NULL;
}
