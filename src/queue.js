const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.listHead = null
  }
  getUnderlyingList() {
    return this.listHead
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    if (this.listHead === null)
      this.listHead = new ListNode(value)
    else this.getLastNode().next = new ListNode(value)
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  dequeue() {
    const value = this.listHead.value
    this.listHead = this.listHead.next
    return value
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  getLastNode() {
    let current = this.listHead
    while (current.next !== null)
      current = current.next
    return current
  }
}

module.exports = {
  Queue
};
