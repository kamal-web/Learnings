#include <stdio.h>
#include <string.h>
#include "dll.h"

Node* createNode(char* key, char* value){
    Node* node= (Node*)malloc(sizeof(Node));
    strcpy(node->key, key);
    strcpy(node->value, value);
    node->prev = node->next = NULL;
    return node;
}

void removeNode(Node** head, Node** tail, Node* node){
    if (node->prev) node->prev->next = node->next;
    else *head = node->next;

    if(node->next) node->next->prev = node->prev;
    else *tail = node->prev;

}

void moveToFront(Node** head, Node** tail, Node* node){
    removeNode(head, tail, node);

    node->prev = NULL;
    node->next = *head;

    if(*head) (*head)->prev = node;
    *head = node;

    if(!*tail) *tail = node;

}

Node* removeTail(Node** head, Node** tail){
    Node* temp = *tail;
    if(!temp) return NULL;

    removeNode(head, tail, temp);
    return temp;

}
