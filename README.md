# GUES5

# Line 1-5
  This is mainly just so I have something to visualize of how my functions would work.
  
# Line 7-57
  I loop through the 5 letter words array and then have another loop to go through each individual element. While its looping through every character, I made 5 Maps, each Map will have the letters that belong in those positions. So for example there are 3 words that start with "S" in position 1. So the Map called posOne will have "S" as a key and 3 as a value, because it comes across it 3 times total in position 1. Once I have all those Maps filled, I store them in an array called positionCounts.

# Line 59-62
  I create 4 empty arrays for later use with the feedback array.
  
# Line 64-71
  Made a loop where it would loop through the feed back array and check if any object had gray or yellow as a color. If it had a "Gray" value it would push that letter into the notGood array. If it had a "Yellow" value it would push it to the someWhat array.
  
# Line 75-78
  a function where once the 5 letter words array is entered, it filters the words that don't contain the letter in "Gray" anywhere. once filtered, it pushes all those good words into the subArr array.
  
# Line 86-89 
  a function where now the subArr array will be entered, so it can filter it one more time and leave the words that contain that letter in yellow somewhere in the word.
  
# Line 93-94
  using the first function and making new Maps for just the remaining words in the closestArr array and saving it in a variable called "minus".
  
# Line 97-101
  Created 5 new empty arrays

# Line 104-120
  extracted just the key from the newest Maps and putting them in single arrays for each position

# Line 124- 128
  Made 5 new arrays
  
# Line 131-177
  A function that checks how many each of the old 5 letter words array have the remaining letters in the correct positions, once it checks it will put a string in the previous 5 empty arrays with the message " X has "number" chances of coming out in tile X". 

# Line 182-185
  A function that just returns the last 5 arrays with the messages/hints to make a better choice on what letters to use next based on the 5 letter words array and the feedback given by the game.
  
# Feel free to ask any further questions 
  
