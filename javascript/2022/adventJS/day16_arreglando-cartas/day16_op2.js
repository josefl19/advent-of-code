function fixLetter(letter) {
    const capitalizeFirst = (word) => {
        return word[0].charAt(0).toUpperCase() + word.slice(1);
    }

    let letter_replaces = letter.trim()
                            .replace(/,/gmi, ", ")
                            .replace(/\s{2,}/gmi, " ")
                            .replace(/\s[.]/gmi, ".")
                            .replace(/\s[,]/gmi, ",")
                            .replace(/\?{2,}/gmi, "?")
                            .replace(/santa claus/gmi, "Santa Claus")
                            .replace(/\s[\?]/gmi, "?")
                            .replace(/\s[\!]/gmi, "!")
                            .replace(/[a-z0-9]$/gmi, letter.trim().slice(-1) + ".");
    
    return letter_replaces.split(/([.?!]\s)/gmi).map((oracion) => capitalizeFirst(oracion)).join('');
}

console.log(fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `));
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

console.log(fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"));
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?

console.log(fixLetter("  hi,santa claus. are you there ?   "));

console.log(fixLetter("Hey santa Claus .  I want a bike.   I want a videogame! "));
