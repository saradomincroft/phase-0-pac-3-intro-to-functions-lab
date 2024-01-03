function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase(string));
}

function logWhisper(string) {
    console.log(string.toLowerCase(string))
}

function sayHiToHeadphonedRoommate(string) {

    if (string === string.toUpperCase()) {
        return "YES INDEED!"
    } else if (string === string.toLowerCase()) {
        return "I can't hear you!"
    } else {
        return "I would love to!"
    }

}