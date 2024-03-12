# API-Testing-using-Cypress
This code is a test suite written using Cypress, a popular JavaScript testing framework for web applications. The suite contains four tests, each representing a different HTTP request method (GET, POST, PUT, DELETE) to interact with an API endpoint provided by JSONPlaceholder, a fake online REST API for testing and prototyping.

Here's a breakdown of each test:

GET Call:

It sends a GET request to retrieve a specific post from the JSONPlaceholder API (post with ID 1).
After making the request, it checks if the response status is equal to 200, indicating a successful request.
POST Call:

It sends a POST request to create a new post on the JSONPlaceholder API.
The request body contains data for the new post (title, body, userId).
After making the request, it checks if the response status is equal to 201, indicating successful creation of the resource.
PUT Call:

It sends a PUT request to update an existing post on the JSONPlaceholder API (post with ID 1).
The request body contains updated data for the post (title, body, userId).
After making the request, it checks if the response status is equal to 200, indicating successful update of the resource.
DELETE Call:

It sends a DELETE request to remove an existing post from the JSONPlaceholder API (post with ID 1).
After making the request, it checks if the response status is equal to 200, indicating successful deletion of the resource.
Overall, this test suite ensures that basic CRUD (Create, Read, Update, Delete) operations on the JSONPlaceholder API endpoints are working as expecte
