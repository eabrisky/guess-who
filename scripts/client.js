console.log('Here are all the available people:', people);

$(document).ready(readyNow)

function readyNow(){
    $('#photoSection').on('click', '.picture', handleClick);
    printPeople();
    randomName();
} // end readyNow fn

function printPeople(){
    for (let info of people){
        $('.portraits').append(`
            <div class = "picture" data-name=${info.name} data-git="${info.githubUsername}">
                <img src="https://github.com/${info.githubUsername}.png?size=250">
            </div>
        `)
    } // end for of loop
} // end printPeople fn

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
} // end randomNumber fn

function randomName() {
    $('.nameClick').text(`${people[randomNumber(0, 10)].name}`);
} // end randomName fn

function handleClick(){
   let thisName = $(this).closest(`.picture`).data('name');
   let whoIsClicked = $('.nameClick').text();
    // console.log(thisName);
    // console.log(whoIsClicked);

    if(thisName == whoIsClicked){
        alert(`Correct!! Take my eternal gratitude. YOU'VE... EARNED IT! Keep playing if you want =D`)
        randomName();
        // $('this').text('Success!')
    } else {
        alert('TRY AGAIN...')

        
    }
} // end handleClick fn