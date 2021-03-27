function welcomeGuest(name,greet) {
    greet(name);
}

var guest = 'Tom Hanks'

function greeting(guest) {
    console.log('Good Evening',guest);
}
welcomeGuest(guest, greeting);