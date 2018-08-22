# Advanced JavaScript Drills
## Objective
The objective of this lab assignment is to practice using advanced JavaScript that were explored in lecture.

1. Create an array called fruits

2. The fruits array should have three fruits

3. Declare a global variable named favFruit using the let keyword.

4. Create a function declaration that will print the first fruit in the fruits array

5. Inside this function create a new variable and set it equal to your favorite fruit

6. Call the function

7. Save and refresh the browser. You should now see the first fruit printed in the console

8. Declare another function that will print your favorite fruit.

9. Call the function

10. Save and refresh the browser.
* Why was the printFavFruit function able to log favFruit?

11. Remove the declaration of favFruit in the global scope

12. Declare favFruit using the let keyword in the printFruits function

13. Save and refresh the browser. favFruit is no longer in the global scope so printFavFruit() does not have access to the favFruit variable and is now undefined.

14. Nest the printFavFruit function inside of the printFruits function.

15. Call the printFavFruit function inside printFruits function

16. Save and refresh the browser. favFruit is now logged because the printFavFruit has access to variables in its parent function.

17. Create a new variable named leastFav using the let keyword

18. Assign it to your least favorite fruit

19. Log leasFav to the console after the printFavFruit function is declared

20. Save and refresh the browser. leastFav is undefined because the parent function does not have access to variables declared within the nested function.

21. Create a new function and name the function whatever you would like, make sure to create this using the function keyword, have this function console.log “Hello, “ and then your name. Call this function BEFORE the function body

22. Create a new function and name the function using a function expression (create it using let, not ver). Have this function have an alert appear with some text of your choosing.

23. Call the function before it is declared as an expression, what happens? Because of hoisting and the use the ES6 an error may occur. Adjust the code to allow the function to run.