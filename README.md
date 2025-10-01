Answers to the questions:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   => getElementById is Fastest, but limited to ID. getElementsByClassName returns multiple elements, querySelector / querySelectorAll are more           flexible, they support full CSS selectors.
    
2. How do you **create and insert a new element into the DOM**?
   => const newElement = document.createElement("div");
            newElement.textContent = "Hello DOM";
            newElement.classList.add("greeting");
            document.body.appendChild(newElement);
   
3. What is **Event Bubbling** and how does it work?
   => Event bubbling is the process by which an event starts at the target element and moves up through its ancestors.
    
4. What is **Event Delegation** in JavaScript? Why is it useful?
   => Event delegation is a technique where a parent element handles events for its child elements using a single listener.
      Reduces the number of event listeners, Handles dynamically added elements, improves performance, and maintains the code.
   
6. What is the difference between **preventDefault() and stopPropagation()** methods?
   => preventDefault() stops form submission, stopPropagation() prevents the event from bubbling up to parent elements.
