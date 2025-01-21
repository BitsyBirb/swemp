/*
    This page is the About Me page.
    Pertinent Information:
        Name: Alias. I don't want my real name out there. They can refer to my resume for that.
        Maybe a shitty drawing of Ernesto as well on the right hand side. Think of that linux thing people do.
        Neofetch: Call it CretinFetch

    Format:

    Upon first entry:
        Text: 
            Top 40% of the screen (set dynamically using react)
            Left 50% of the screen (5 safety margins on each side)

        Image: Random ASCII art image (gonna be hard to do dynamically wth actual text)
            Maybe use the Dr. House image because why not. Funny haha
            Right 50% of the screen (5 safety margins on each side)

        Line below the main portion:
        User input line:
            Single row of text input, wrapping around (same width as the text from above)
            (Mainly just to go back, but has several options for input):

            Options:
                1) Education (more formal)
                2) Hobbies
                    Within hobbies, can maybe expand for more shit
                        In this case, return would have to go back to the aboutme page.
                        There should be a decently easy way of doing this?
                        No clue.
                3) return (go back to previous page which should be the main terminal)

        Inspired heavily by Neofetch

        When loading more info, be sure to clear the rest of the screen and display said info.
        ASCII Art :<
*/