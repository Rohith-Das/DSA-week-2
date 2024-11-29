
// Define a Node class to represent each entry in the linked list
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;  // Pointer to the next node in the linked list
    }
}

class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    // Hash function to compute the index
    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);  // Sum the character codes of the key
        }
        return total % this.size;  // Modulo by table size to get the index
    }

    // Set function to insert or update key-value pairs
    set(key, value) {
        const index = this.hash(key);      // Step 1: Calculate index using hash function
        const newNode = new Node(key, value); // Create a new node for the key-value pair

        const bucket = this.table[index];  // Step 2: Access the linked list (bucket) at the index

        if (!bucket) {
            // If no bucket exists at the index, create one by adding the new node
            this.table[index] = newNode;
        } else {
            // If bucket exists, check if the key already exists
            let current = bucket;

            while (current) {
                if (current.key === key) {
                    // Key found, update its value
                    current.value = value;
                    return;
                }
                // Move to the next node in the linked list
                if (!current.next) {
                    break;
                }
                current = current.next;
            }

            // If the key is not found, append the new node to the end of the linked list
            current.next = newNode;
        }
    }

    // Get function to retrieve a value by key
    get(key) {
        const index = this.hash(key);      // Step 1: Calculate index using hash function
        const bucket = this.table[index];  // Step 2: Access the linked list (bucket) at the index

        let current = bucket;

        // Traverse the linked list to find the key
        while (current) {
            if (current.key === key) {
                // Return the value if the key is found
                return current.value;
            }
            current = current.next;  // Move to the next node in the linked list
        }

        // Return undefined if the key is not found
        return undefined;
    }

    // Function to display the contents of the hash table
    display() {
        for (let i = 0; i < this.table.length; i++) {
            const bucket = this.table[i];
            if (bucket) {
                let current = bucket;
                let output = [];
                while (current) {
                    output.push([current.key, current.value]);
                    current = current.next;  // Move to the next node
                }
                console.log(i, output);  // Display the bucket contents
            }
        }
    }
}

// Create a hash table with a small size to force collisions
const hashTable = new HashTable(5);

// Add key-value pairs that may cause a collision
hashTable.set("name", "Alice");  // Insert key "name" with value "Alice"
hashTable.set("naem", "Bob");    // Insert key "naem" with value "Bob"

// Display the table to show how the collision is handled
hashTable.display();

// Get the values of both keys
console.log("Value for 'name':", hashTable.get("name"));  // Output: Alice
console.log("Value for 'naem':", hashTable.get("naem"));  // Output: Bob
