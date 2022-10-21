# MEMORY GAME

A JavaScript-based memorisation game. Controllable via physical keyboard or on-screen elements. 

# HOW TO USE:

Simply download the zip and open the 'index.html' file in your browser of choice. 

After each successful attempt the difficulty will increase as one additional direction symbol is added (up to a maximum of 20 symbols.)

# HOW IT WORKS:

This project was designed for the purposes of testing my knowledge of generating random numbers, switch statements and intervals.

The program begins with a 'level' variable. An 'if' statement will then generate a random number up to the value of the 'level' variable. These random numbers will range between 0 to 3.

Each number is then passed through a switch statement which assigns a direction key to each possible number (e.g. 0 is up, 1 is right, etc.) and pushed onto the end of an answer array. Once the answer array is full, another function will convert the items within the array into icon elements on the page.

A countdown function sets an interval for one (1) second. Each interval will add an 'active' class to the icon elements, causing them to display on the screen. The interval will then check the value of a 'timer' variable. If the value is over 0 then the interval will reduce that value by 1 and repeat. Once the value of the 'timer' variable reaches 0 the function will remove the 'active' class from the icon elements, causing them to become invisible. The function will then display a 'go' message and add an event listener for the key logger before clearing itself.

Once the countdown has completed the user is able to enter their answer using their keyboard or the onscreen buttons. Two event listeners will respond to the key or button presses by logging the answers in a 'keyLog' array. Once this array reaches the same length as the 'level' variable, it will be converted to a JSON string and compared with the 'answer' array. If the two are identical then the success message is displayed and the 'level' variable increased by 1, making the next attempt more difficult. If the arrays do not match, the failure message is displayed and the 'level' variable is reset to its initial value of 5. In both cases the 'timer' variable is reset. If the maximum level of 20 is completed successfully a complete message is displayed and the 'level' variable reset to 5.

# CREDITS:

Arrow icon courtesy of NoodleBoi (https://www.redbubble.com/es/people/noodleboi)

# LINKS: 

For a live example please visit my online portfolio (https://gjmshrigley.netlify.app/projects/memory%20game/)
