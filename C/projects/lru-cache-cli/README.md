Step 1: Understand LRU Cache (Core Idea)
========================================

    LRU = Least Recently Used (lru-cache-cli-tool)

    👉 When cache is full:

    Remove the item that was used least recently

    Example (capacity = 3)
    ======================
        put A → [A]
        put B → [A, B]
        put C → [A, B, C]

        get A → [B, C, A]   (A becomes most recent)

        put D → remove B → [C, A, D]

🧱 Step 2: Design Data Structures
=================================

    To make operations fast:

    Operation	Goal
    get(key)	O(1)
    put(key)	O(1)
    We use:
    Hash Map → key → node
    Doubly Linked List → track usage order

    🧩 Node Structure
    ------------------
    typedef struct Node {
        char key[50];
        char value[50];
        struct Node* prev;
        struct Node* next;
    } Node;
    🧩 Cache Structure
    -------------------
    typedef struct {
        int capacity;
        int size;
        Node* head; // most recent
        Node* tail; // least recent
        Node* map[100]; // simple hash map
    } LRUCache;



1. Final Project Structure (Clean & Scalable)
lru-cache-cli/
│
├── src/
│   ├── main.c              # Entry point (CLI handling)
│   ├── cache.c             # Core LRU logic
│   ├── hashmap.c           # Hash map implementation
│   ├── dll.c               # Doubly linked list
│   └── utils.c             # Helpers (string, logging)
│
├── include/
│   ├── cache.h
│   ├── hashmap.h
│   ├── dll.h
│   └── utils.h
│
├── tests/
│   └── test_cache.c
│
├── build/
│
├── Makefile
├── README.md
└── .gitignore