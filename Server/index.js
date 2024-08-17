const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT
const quoteList = [
    {
      name: "Batman",
      quote: "It's not who I am underneath, but what I do that defines me."
    },
    {
      name: "Yoda",
      quote: "Do, or do not. There is no try."
    },
    {
      name: "Eleanor Roosevelt",
      quote: "The future belongs to those who believe in the beauty of their dreams."
    },
    {
      name: "Leonardo da Vinci",
      quote: "Simplicity is the ultimate sophistication."
    },
    {
      name: "Oscar Wilde",
      quote: "Be yourself; everyone else is already taken."
    },
    {
      name: "Friedrich Nietzsche",
      quote: "He who has a why to live can bear almost any how."
    },
    {
      name: "Confucius",
      quote: "It does not matter how slowly you go as long as you do not stop."
    },
    {
      name: "Julius Caesar",
      quote: "Veni, vidi, vici. (I came, I saw, I conquered.)"
    },
    {
      name: "Socrates",
      quote: "The unexamined life is not worth living."
    },
    {
      name: "Leonardo DiCaprio",
      quote: "I'm not afraid to die. I'm just afraid of not trying."
    },
    {
      name: "Marilyn Monroe",
      quote: "I'm selfish, impatient, and a little insecure. I make mistakes, I am out of control, and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    },
    {
      name: "Seneca",
      quote: "Luck is what happens when preparation meets opportunity."
    },
    {
      name: "Rumi",
      quote: "The wound is the place where the Light enters you."
    },
    {
      name: "Lao Tzu",
      quote: "A journey of a thousand miles begins with a single step."
    },
    {
      name: "Marcus Aurelius",
      quote: "The happiness of your life depends upon the quality of your thoughts."
    },
    {
      name: "Albert Einstein",
      quote: "Imagination is more important than knowledge."
    },
    {
      name: "Gautama Buddha",
      quote: "The mind is everything. What you think you become."
    },
    {
      name: "Ralph Waldo Emerson",
      quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
    },
    {
      name: "J.K. Rowling",
      quote: "It is our choices, Harry, that show what we truly are, far more than our abilities."
    },
    {
      name: "George Bernard Shaw",
      quote: "Life isn’t about finding yourself. Life is about creating yourself."
    }
  ];

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors()); // now it will treat different port also as one of our own
  
app.get('/', (req, res) => {
    console.log("get request served");
    return res.send('<h1>YOU ARE UP</h1>');
});
app.get('/api/quotes', (req, res) => {
    // return res.status(200).json(USER_DATA);
    return res.status(200).send(quoteList);
});

app.listen(PORT, () => (console.log('RUNNING @ ', PORT)));