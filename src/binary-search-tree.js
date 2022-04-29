const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }


  root() {
    return this.rootNode
  }

  add(data ) {
    let newNode = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.insertNode(this.rootNode, newNode)
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  has( data ) {
    if (this.findNode(this.rootNode, data) === null) return false;
    return true;
  }

  find(data) {
    return this.findNode(this.rootNode, data)
  }

  findNode(node, data) {
    if (node === null) return null;
    else if (data < node.data) return this.findNode(node.left, data);
    else if (data > node.data) return this.findNode(node.right, data);
    else return node;
  }

  remove( data ) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, value) {
    if (node === null) {
      return null;
    } else if (value < node.data) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.data) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      let aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  min() {
    return this.findMinNode(this.rootNode).data;
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  max() {
    return this.findMaxNode(this.rootNode).data;
  }

  findMaxNode(node) {
    if (node.right === null) {
      return node;
    } else {
      return this.findMaxNode(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};