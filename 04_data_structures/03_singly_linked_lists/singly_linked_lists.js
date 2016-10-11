function Node(element) {
	this.element = element;
	this.next = null;
}

function SinglyLinkedList() {
	this._length = 0;
	this.head = null;
}

SinglyLinkedList.prototype.add = function(value) {
	var node = new Node(value);
	var currentNode = this.head;

	// if the head is empty,
	if (!currentNode) {
		this.head = node;
		this._length++;

		return node;
	}

	// if the head is not empty,
	while (currentNode.next) {
		currentNode = currentNode.next;
	}

	currentNode.next = node;
	this._length++;

	return node;
};

SinglyLinkedList.prototype.remove = function(position) {
	var currentNode = this.head;
	var length = this._length;
	var count = 0;
	var beforeNodeToDelete = null;
	var nodeToDelete = null;
	var deletedNode = null;

	// invalid position
	if (position < 0 || position > length) {
		throw new Error({failure: 'non-existent node in this list.'});
	}

	// the first node is removed
	if (position === 1) {
		this.head = currentNode.next;
		deletedNode = currentNode;
		currentNode = null;
		this._length--;

		return deletedNode;
	}

	// any other node is removed
	while (count < position) {
		beforeNodeToDelete = currentNode;
		nodeToDelete = currentNode.next
		count++;
	}

	beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;

    return deletedNode;
};

SinglyLinkedList.prototype.searchNodeAt = function(position) {
	var currentNode = this.head;
	var length = this._length;
	var count = 1;

	// for invalid postion
	if (length == 0 || position < 1 || position > length) {
		throw new Error({failure: "Failure: non-existent node in this list."});
	}

	// a valid postion
	while (count < position) {
		currentNode = currentNode.next;
		count++;
	}

	return currentNode;
};

SinglyLinkedList.prototype.display = function() {
	var currentNode = this.head;
	while (currentNode) {
		console.log(currentNode.element);
		currentNode = currentNode.next;
	}
};

var check = new SinglyLinkedList();

check.add("hi");
check.add("hello");
check.add("meow");
check.remove(1);
check.display();
