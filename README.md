#   Answers to Questions

## 1 .  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


 ### ans :  1." document.getElementById " targets that element who has a unique id .And it returns only one element.
### 2 . "document.getElementsByClassName" target those elements who have same class . it can be one or many elements .and it returns all elements in an array like object.
### 3 . "document.querySelector" targets with id , class and tag names .But it return only one and first element.
### 4 . "document.querySelectorAll" targets with CSS selector (id,class,tag) . it returns all the elements in an array like object .

## 2. How do you create and insert a new element into the DOM?
### ans :by using document.createElement() method I can create a new element and by appendChild() I can insert the new element on a parent element where I want to append .

## 3.What is Event Bubbling? And how does it work?
### ans : event bubbling is  like a tree of Document . 
### at first it target on the specific element where the handler .then on its parent, then all the way up to the ancestors until it reaches the document object.

## 4.What is Event Delegation in JavaScript? Why is it useful?
### ans : event delegation is a system to target common parent elements . if we adding a single event listener on a single child element it will repeat many time to target every element . 

### event delegation is very useful .because =>
### 1. it save memory .
### 2 . code become easier to maintain and readable .

## 5. What is the difference between preventDefault() and stopPropagation() methods?
### ans : preventDefault() and stopPropagation() both stop code execution .
### preventDefault() method stops the default behavior associated with an HTML element.
### stopPropagation() method stops the Event Bubbling process.