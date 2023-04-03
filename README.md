# React Quote Generator App

This is a simple React JS web application that generates random quotes, images, and background colors. It uses hooks such as useState, useEffect, useRef, and an API to fetch quotes.
# Getting Started
## Author
Suhana Roshan
## Prerequisites

Before running the application, make sure you have the following installed on your machine:

    Node.js
    NPM

## Installation

    Clone the repository:

bash

git clone https://github.com/suhanar/random-quote.git

    Install dependencies:

npm install

    Start the application:

sql

npm start

The application will open in your default browser at http://localhost:3000/.
## Usage

Upon opening the application, you will see a button labeled "New Quote." Clicking this button will generate a new quote along with a random background color and image. You can also click on the Tweet button to share the quote on Twitter.
## Components

This application has three main components:

    App: This is the main component that holds the CardQuote component.
    
    CardQuote: This is the component that holds the state for the quote, background color, and image.

    Quote: This component displays the current quote and author.

    Button: This component displays a button that, when clicked, generates a new quote, background color, and image.

## Hooks

This application uses the following React hooks:

    useState: This hook is used to store the current quote, background color, and image.

    useEffect: This hook is used to fetch a new quote from the API when the application first loads and whenever the "New Quote" button is clicked.

    useRef: This hook is used to reference the quoteContainer div so that we can capture a screenshot of the quote to share on Twitter.

## API

This application uses the https://type.fit/api/quotes/ to fetch new quotes. 
## License


