String.prototype.capitalizwords = function() {
    return this.replace(/\b[a-z]/g, match => match.toUpperCase());  
}

console.log("this word will be capitalized".capitalizwords());