
Prompt the player to pick one of the people by displaying a randomly selected name.

Here is a handy function to generate a random number given a minimum and maximum.

```JavaScript
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
```

## Game Logic

- If the player clicks on the correct person
    - give them a success message.
    - Prompt the player to pick another person randomly and let them keep playing.
- If they pick the wrong person
    - give them an error message.
    - allow them to try again.