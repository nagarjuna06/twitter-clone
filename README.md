# Twitter Clone Application

This is a Twitter clone application built using Next.js with various functionalities such as tweet feed, profile management, follow users, like tweets, recommend users, and Google authentication. The application also utilizes GraphQL server for data fetching and management.

## Technologies Used:

- **Frontend Framework**: Next.js
- **State Management**: React Query
- **UI Framework**: Shadcn UI, Tailwind CSS
- **Toast Notifications**: React Toast
- **Authentication**: Google Authentication
- **Data Querying**: GraphQL

## Functionalities:

### 1. Tweet Feed:

Users can view a feed of tweets from users they follow and interact with these tweets by liking, replying, or retweeting them.

### 2. Profile:

Users can view and edit their profile information, including their bio, profile picture, and other details.

### 3. Follow User:

Users can follow other users, which allows them to see tweets from those users in their feed.

### 4. Like Tweet:

Users can like tweets posted by other users. Liked tweets will be displayed in the user's profile under the "Likes" section.

### 5. Recommend Users:

The application provides recommendations for users to follow based on their interests, interactions, and connections.

### 6. Google Authentication:

Users can sign in to the application using their Google accounts for a seamless and secure authentication process.

## Getting Started:

1. Clone the repository:

```bash
git clone https://github.com/nagajuna/twitter-clone.git
```

2. Install dependencies:

```bash
cd twitter-clone
npm install
```

3. Set up environment variables:

   Create a `.env` file in the root directory of your project and add the necessary environment variables such as API keys, secrets, etc.

4. Start the development server:

```bash
npm run dev
```

5. Access the application:

Open your browser and navigate to `http://localhost:3000` to view the Twitter clone application.

## Project Structure:

- **app**: Contains Next.js pages for different routes.
- **components**: Reusable React components used across the application.
- **hooks**: Custom hooks for managing state and side effects.
- **graphql**: GraphQL queries and mutations.
- **public**: Static assets such as images, icons, etc.
- **utils**: Utility functions used throughout the application.

## Contributors:

- [Nagarjuna Chenna](https://github.com/nagarjuna06) - Role: Full Stack Developer

## Acknowledgments:

Special thanks to [Twitter](https://twitter.com) for inspiring this project and providing a platform for communication and expression.
