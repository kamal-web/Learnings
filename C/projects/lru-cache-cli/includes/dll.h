#ifndef DLL_H
#define DLL_H

typedef struct Node {
    char key[50];
    char value[50];
    struct Node* prev;
    struct Node* next;
} Node;

Node* createNode(char* key, char* value);
void moveToFront(Node** head, Node** tail, Node* node);
void removeNode(Node** head, Node** tail, Node* node);
Node* removeTail(Node** head, Node** tail);

#endif