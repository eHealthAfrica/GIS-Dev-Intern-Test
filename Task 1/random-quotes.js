displayRandomQuote = function () {
    var quotes = {
        0: "All computers wait at the same speed.",
        1: "A good programmer looks both ways before crossing a one-way street.",
        2: "Computers do not solve problems, they execute solutions.",
        3: "The best thing about a boolean is even if you are wrong, you are only off by a bit",
        4: "Ubuntu is an ancient African word, meaning 'can’t configure Debian'",
        5: "Without requirements or design, programming is the art of adding bugs to an empty 'text' file."

    }
     var rand = (Math.floor(Math.random() * (Object.keys(quotes).length / 2)) * 2) + 1;

    console.log(rand + ': ' + quotes[rand]);
}
displayRandomQuote();

/*
This can also be achieved using regular array below:

*/

BETTERdisplayRandomQuote = function () {
    var quotes = [
        "All computers wait at the same speed.",
        "A good programmer looks both ways before crossing a one-way street.",
        "Computers do not solve problems, they execute solutions.",
        "The best thing about a boolean is even if you are wrong, you are only off by a bit",
        "Ubuntu is an ancient African word, meaning 'can’t configure Debian'",
        "Without requirements or design, programming is the art of adding bugs to an empty 'text' file."

    ]
    var rand = (Math.floor(Math.random() * (quotes.length / 2)) * 2) + 1;

    console.log(rand + ': ' + quotes[rand]);
}

BETTERdisplayRandomQuote();


