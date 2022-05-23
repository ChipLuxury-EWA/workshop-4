class AsyncGame {
    constructor() {
        this.API_BASE = "https://u-workshops.herokuapp.com";
    }

    /* 
        Note: most of these methods will use the `fetch` API
        It's ok if you don't fully understand it yet! You can think of it as a 'blackbox' for now
    */

    async createUser(name) {
        // POST request to the /new_user endpoint
        try {
            const response = await fetch(`${this.API_BASE}/new_user`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name }),
            });
            const ans = await response.json();
            console.log(ans);
            return ans;
        } catch (error) {
            console.log("error new user: ", error);
        }
    }

    async addToQABank(YOUR_USER_ID) {
        // POST request to /new_qa
        try {
            const response = await fetch(`${this.API_BASE}/new_qa`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ownerId: YOUR_USER_ID,
                    question: STRING QUESTION,
                    answer: "STRING OR INT ANSWER",
                }),
            });
            const ans = await response.json();
            console.log(ans);
            return ans;
        } catch (error) {
            console.log("error new user: ", error);
        }
    }

    async getAllQuestions() {
        // GET request to /all_questions
        // Note! More questions will be added as other students progress in this workshop.
        // Ask around to see who's added new questions!
    }

    async answerQuestion() {
        // POST request to /answer_question
        // Note! In the response of this request you'll see whether your answer was correct or not.
        // If you answered incorrectly, try again or bring it up with the user who posted the question!
    }

    async getAnswerSubmissions() {
        // GET request to /answer_submissions
    }

    async getUsers() {
        // GET request to /the_users
    }

    async calculateUserScores() {
        // +1 points for questions you've answered correctly
        // -1 points for questions you've answered incorrectly
        // This is the most "complicated" method - but you've got this ;)
        // Guidelines for this part (ignore if you want an extra challenge!)
        /*
            - Get the users
            - Get the submissions
            - Create an `scores` object
            - Loop through each user ID
                - Extract the username
                - Filter the correct submissions with matching user ID
                - Filter the incorrect submissions with matching user ID
                - Add a new entry to `scores` with the user's name and their score (correct.length - incorrect.length)

            Example of `score` at the end of this: 
            {
                Kayla: 12,
                Darwin: -1
            }
        */
    }
}

const game = new AsyncGame();
// Remember the server is unexpected, it might return an error!

// Example of running the game:
const { userId } = game.createUser("Tom Portugez");
game.addToQABank({
    question: "How many legs does a cat have?",
    answer: 4,
    ownerId: YOUR_USER_ID,
});

// game.getAllQuestions()
// game.answerQuestion({qaId: ID_FROM_SERVER, answer: YOUR_ANSWER, userId: YOUR_USER_ID})

// game.getUsers() // <-- how can you output the results from here *without* console.log in the method?
// game.getAnswerSubmissions()
// game.calculateUserScores()
