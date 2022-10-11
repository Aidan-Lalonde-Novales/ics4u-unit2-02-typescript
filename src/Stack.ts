/**
 * This file pushes to and prints a stack.
 *
 * By:      Aidan Lalonde-Novales
 * Version: 1.0
 * Since:   2022-10-10
 */

class Stack {
  stack: number[] = []

  // push method - inserts a number to the stack
  push(userNum: number): void {
    this.stack.push(userNum)
  }

  // showStack method - shows the contents of the stack
  showStack(): void {
    console.log(this.stack)
  }
}

export = Stack
