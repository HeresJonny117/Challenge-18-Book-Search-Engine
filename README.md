Book Search Engine

Description

This project is a full-stack web application that allows users to search for books using the Google Books API. Users can sign up, log in, save books to their account, and remove saved books. The project originally used a RESTful API but has been refactored to use GraphQL with Apollo Server.

Technologies Used

Frontend: React, Apollo Client

Backend: Node.js, Express.js, Apollo Server, GraphQL

Database: MongoDB (MongoDB Atlas)

Authentication: JWT (JSON Web Token)

Features

Search for books using the Google Books API.

User authentication with JWT.

Save books to a user's profile.

View saved books on a dedicated page.

Remove saved books from the user's account.

Installation

Prerequisites

Node.js installed

MongoDB Atlas account

Render account for deployment

Steps

Clone the repository:

git clone <repository-url>

Install dependencies:

npm install

Set up environment variables:
Create a .env file in the root directory and add:

PORT=4000
MONGODB_URI=<your-mongodb-atlas-uri>
JWT_SECRET=<your-secret-key>

Start the development server:

npm run dev

Usage

Open the app in your browser.

Sign up or log in.

Search for books using the search bar.

Click Save Book to add books to your profile.

Visit the Saved Books section to view or remove saved books.

Deployment

This application is deployed using Render and MongoDB Atlas.

Live URL: https://challenge-18-book-search-engine.onrender.com

GitHub Repository: https://github.com/HeresJonny117/Challenge-18-Book-Search-Engine

License

This project is licensed under the MIT License.
