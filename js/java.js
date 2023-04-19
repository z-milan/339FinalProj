let chessDesc = 'My buddy Kyto and I playing chess at a local coffee shop. The owner acted very suspicious around us - we were pretty sure he was part of the Mafia..';
let country = 'Some of the beautiful rice paddies outside of Hai Phong, Vietnam.';
let moo = 'Here is a cow we encountered while on a motorbike ride in the countryside. I had to stop and take a picture. He was friendly.';
let halong = 'This is a view of Halong Bay - a natural archipelago just an hour away from the capital of Hanoi. There are supposedly near 1600 islands and islets.';
let HanoiNight = 'A cool view of the Hanoi nightlife (the milder side). In that brightly lit building, there are 5 coffee shops!';
let selfie = 'A quick motorbike-mirror selfie while Kyto drives. Some of the driving gets treacherous - but it sure was exciting.';
let shrine = 'A shrine in the Temple of Literature in Hanoi. This is a very old university. I really enjoyed walking through the grounds and it was pretty cool learning about the history!';
let sunset = 'A sunset while on a motorbike-ride back from a beach town about an hour south of where my parents live. It is pretty hazy, but it creates a cool effect when the sun gets lower.';
let calligraphy = 'Kyto practicing his calligraphy skills at the Temple of Literature. (the little girl was much better than him!)';
flexImgs = document.querySelectorAll('img');
function removeDbl() {
    for (let i = 0; i < flexImgs.length; ++i) {
        flexImgs[i].classList.remove('dblClick');
    }
}
// adding functionality for double clicking photos on personal page
document.getElementById('chess').addEventListener('click', function() {
    removeDbl();
    document.getElementById('img-desc').innerHTML = chessDesc;
    document.getElementById('chess').classList.toggle('dblClick');
})
document.getElementById('country').addEventListener('click', function() {
    removeDbl();
    document.getElementById('img-desc').innerHTML = country;
    document.getElementById('country').classList.toggle('dblClick');
})
document.getElementById('cow').addEventListener('click', function() {
    removeDbl();
    document.getElementById('img-desc').innerHTML = moo;
    document.getElementById('cow').classList.toggle('dblClick');
})
document.getElementById('halong').addEventListener('click', function() {
    removeDbl();
    document.getElementById('img-desc').innerHTML = halong;
    document.getElementById('halong').classList.toggle('dblClick');
})
document.getElementById('hanoi').addEventListener('click', function() {
    removeDbl();
    document.getElementById('img-desc').innerHTML = HanoiNight;
    document.getElementById('hanoi').classList.toggle('dblClick');
})
document.getElementById('mirror').addEventListener('click', function() {
    removeDbl();
    document.getElementById('img-desc').innerHTML = selfie;
    document.getElementById('mirror').classList.toggle('dblClick');
})
document.getElementById('shrine').addEventListener('click', function() {
    removeDbl();
    document.getElementById('img-desc').innerHTML = shrine;
    document.getElementById('shrine').classList.toggle('dblClick');
})
document.getElementById('sunset').addEventListener('click', function() {
    removeDbl();
    document.getElementById('img-desc').innerHTML = sunset;
    document.getElementById('sunset').classList.toggle('dblClick');
})
document.getElementById('call').addEventListener('click', function() {
    removeDbl();
    document.getElementById('img-desc').innerHTML = calligraphy;
    document.getElementById('call').classList.toggle('dblClick');
})


// adding functionality for focusing on photos on personal page
document.getElementById('chess').addEventListener('focus', function() {
    removeDbl();
    document.getElementById('img-desc').innerHTML = chessDesc;
    document.getElementById('chess').classList.toggle('dblClick');
})
document.getElementById('country').addEventListener('focus', function() {
    removeDbl();
    document.getElementById('img-desc').innerHTML = country;
    document.getElementById('country').classList.toggle('dblClick');
})
document.getElementById('cow').addEventListener('focus', function() {
    removeDbl();
    document.getElementById('img-desc').innerHTML = moo;
    document.getElementById('cow').classList.toggle('dblClick');
})
document.getElementById('halong').addEventListener('focus', function() {
    removeDbl();
    document.getElementById('img-desc').innerHTML = halong;
    document.getElementById('halong').classList.toggle('dblClick');
})
document.getElementById('hanoi').addEventListener('focus', function() {
    removeDbl();
    document.getElementById('img-desc').innerHTML = HanoiNight;
    document.getElementById('hanoi').classList.toggle('dblClick');
})
document.getElementById('mirror').addEventListener('focus', function() {
    removeDbl();
    document.getElementById('img-desc').innerHTML = selfie;
    document.getElementById('mirror').classList.toggle('dblClick');
})
document.getElementById('shrine').addEventListener('focus', function() {
    removeDbl();
    document.getElementById('img-desc').innerHTML = shrine;
    document.getElementById('shrine').classList.toggle('dblClick');
})
document.getElementById('sunset').addEventListener('focus', function() {
    removeDbl();
    document.getElementById('img-desc').innerHTML = sunset;
    document.getElementById('sunset').classList.toggle('dblClick');
})
document.getElementById('call').addEventListener('focus', function() {
    removeDbl();
    document.getElementById('img-desc').innerHTML = calligraphy;
    document.getElementById('call').classList.toggle('dblClick');
})
