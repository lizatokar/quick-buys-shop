This is Shop App.

Project Description:

Main Page: The Main page offers users a brief overview of the company and showcases selected product items along with the benefits of using the app highlighted through interactive buttons.

Catalogue Section: The Shop App allows users to browse a catalog of product items complete with detailed descriptions. Users can easily filter products by price and category to find exactly what they're looking for. Each product features a like-dislike rating system that enables users to vote and modify their preferences. Users can also leave reviews for products and delete them as needed.

Contacts Section: This section provides users with contact information for reaching out to the company.

This React app utilizes the react-router-dom package for routing, useState and useEffect hooks for state management, and an API (https://fakestoreapi.com/products) for product items fetched using axios.

Folder Structure:
The app includes the following folders:

- Assets: This folder contains images used in the project.
- Components: All project components are stored in this folder.

The Data folder includes the following files:

- buttons.js: This file is utilized in the Main component to dynamically update the displayed information on the UI in response to user interactions with different buttons.
- data.js: This file includes reviews that are imported in the index.js file and passed as props to the Review component for rendering in the UI.
