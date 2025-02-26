const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);
console.log(`Welcome to the Labyrinth of Blooming Doom, ${username}! Choose wisely to escape.`);
console.log("The air is thick with the scent of blooming flowers, their vibrant colors almost hypnotic. Towering petals sway gently, casting shifting shadows over the labyrinth. The fairies, their delicate wings shimmering with an ethereal glow, peer at you from behind massive blossoms, their eyes glinting with mischief and hunger.");

let choice1 = prompt('Do you take the Left Path or the Right Path? (left/right) ');

if (choice1 === 'left') {
    console.log('You walk into a dark, quiet path, feeling like you are being watched. The petals here are darker, glowing faintly with an eerie luminescence.');
    let choice2 = prompt('Do you follow the whispers or continue straight ahead? (whispers/straight) ');
    
    if (choice2 === 'whispers') {
        console.log('You find a glowing fairy offering you a magical flower, her smile both alluring and unsettling. Her translucent wings flutter as she watches your every move.');
        let choice3 = prompt('Do you accept the flower or refuse it? (accept/refuse) ');
        
        if (choice3 === 'accept') {
            console.log('The fairy’s magic overtakes you. You feel yourself being lifted into the air, your vision blurring as everything fades into a dreamlike haze. You have been captured! Game Over.');
        } else {
            console.log('The fairy frowns but lets you go. The path ahead turns into a maze of thorns, shifting as if alive. The flowers seem to whisper warnings.');
            let choice4 = prompt('Do you turn left or right? (left/right) ');
            if (choice4 === 'left') {
                console.log('You hear the sound of rushing water ahead. It might lead to an exit.');
            } else {
                console.log('The thorns grow thicker, making it difficult to move forward, as if trying to trap you.');
            }
        }
    } else {
        console.log('You push forward despite the dizziness from the toxic flowers. The fairies giggle in the distance, watching with interest.');
        let choice5 = prompt('Do you stop and rest or keep moving? (rest/move) ');
        
        if (choice5 === 'rest') {
            console.log('The fairies giggle as they close in. Their laughter surrounds you. You have been captured! Game Over.');
        } else {
            console.log('You struggle forward, hoping to find the exit, but the path twists unpredictably.');
            let choice6 = prompt('Do you run faster or look for clues? (run/clues) ');
            if (choice6 === 'run') {
                console.log('You push yourself harder, but the dizziness makes you stumble, the fairies’ shadows closing in.');
            } else {
                console.log('You notice a strange pattern in the vines, leading you towards a hidden path, illuminated by flickering fairy lights.');
            }
        }
    }
} else if (choice1 === 'right') {
    console.log('The bright path is filled with fairies watching you closely, their iridescent wings catching the sunlight. Their whispers sound like music, but the intent behind them is unknown.');
    let choice7 = prompt('Do you walk confidently or sneak through the flowers? (confident/sneak) ');
    
    if (choice7 === 'confident') {
        console.log('The fairies surround you, giggling and whispering, their eyes filled with mischievous intent.');
        let choice8 = prompt('Do you fight back or beg for mercy? (fight/beg) ');
        
        if (choice8 === 'fight') {
            console.log('You try to defend yourself, but the fairies overwhelm you, their magic wrapping around you like vines. Game Over.');
        } else {
            console.log('The fairies spare you, but you must navigate a tricky maze to escape. The flowers around you shift and move as if alive.');
            let choice9 = prompt('Do you climb the vines or crawl under them? (climb/crawl) ');
            if (choice9 === 'climb') {
                console.log('You struggle to the top, catching a glimpse of the exit, the fairy lights dimming behind you.');
            } else {
                console.log('Crawling proves difficult, but you manage to find a hidden passage, the fairies watching from above.');
            }
        }
    } else {
        console.log('You sneak through the flowers unnoticed, feeling their petals brush against your skin as if trying to hold you back.');
        let choice10 = prompt('Do you continue sneaking or make a run for it? (sneak/run) ');
        
        if (choice10 === 'run') {
            console.log('You sprint ahead but run into a dense thicket, the fairies’ laughter ringing behind you.');
            let choice11 = prompt('Do you leap through the thicket or slow down? (leap/slow) ');
            
            if (choice11 === 'leap') {
                console.log('You break free, the last of the fairy lights fading behind you as you find the exit! Congratulations, you escaped!');
            } else {
                console.log('The thicket traps you, and the fairies close in, their eyes gleaming. Game Over.');
            }
        } else {
            console.log('You successfully sneak to the exit, avoiding the fairies’ gaze. Congratulations, you escaped!');
        }
    }
} else {
    console.log('Invalid choice. The fairies catch you, their smiles widening as they close in. Game Over.');
}