describe("API Requests", () => {
  // Base URL for the JSONPlaceholder API
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  // ID of the post used for testing
  const postId = 1;

  // Test for GET request
  it("GET Call", () => {
    // Send a GET request to retrieve a specific post
    cy.request(`${baseUrl}/posts/${postId}`)
      // Check if the response status is 200
      .its('status')
      .should('equal', 200);
  });

  // Test for POST request
  it("POST Call", () => {
    // Data for creating a new post
    const postData = {
      title: "Test post",
      body: "This is post call",
      userId: 1
    };

    // Send a POST request to create a new post
    cy.request({
      method: 'POST',
      url: `${baseUrl}/posts`,
      body: postData
    })
    // Check if the response status is 201 (Created)
    .its('status')
    .should('equal', 201);
  });

  // Test for PUT request
  it("PUT Call", () => {
    // Updated data for the post
    const updatedPostData = {
      title: "Test post - Updated",
      body: "This is put call",
      userId: 1
    };

    // Send a PUT request to update an existing post
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/posts/${postId}`,
      body: updatedPostData
    })
    // Check if the response status is 200
    .its('status')
    .should('equal', 200);
  });

  // Test for DELETE request
  it("DELETE Call", () => {
    // Send a DELETE request to remove an existing post
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/posts/${postId}`
    })
    // Check if the response status is 200
    .its('status')
    .should('equal', 200);
  });
});
