/**
 * This program runs alongside Stack.ts
 * in order to add items to and view a stack.
 *
 * By:      Aidan Lalonde-Novales
 * Version: 1.0
 * Since:   2022-10-10
 */

import Stack from './Stack'
import promptSync from 'prompt-sync'

// Constants
const prompt = promptSync()
const myStack = new Stack()

// Input
const userNum = Number(prompt('Enter a number to add to a stack: '))

// Process
myStack.push(userNum)

// Output
console.log('')
myStack.showStack()

console.log('\nDone.')
