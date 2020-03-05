# Unit 6 Project - Static Node.js and Express Site

TO RUN THE PROGRAM (default port is 4000):
  - npm install --save
  - npm start

======================
Description:

In this project, we have created a Porfolio site to showcase our previous projects we built during our Techdegree unit assessments.
This site contains a modern landing page, and about page, projects page and default error page.

We used a JSON file to store our data about the project we created
Then we used pug templating engine and JSON to generatre markups for display pages in browser.

We used Node.js and Express to 
  - Import dependencies 
   - Link JSON with pug templates 
   - Set up different routes to handle request and errors 
   - Set up middleware to use statice assets 
   - Set up server to render the project

Some minor changes in styles and display: 
  - added favicon - added hr between text data and images 
  - added hr between text and buttons on about, index pages 
  - added a logo on page above the profile picture which takes you to home page when you click it 
  - added font weight on to the h5 of the project names 
  - added icons on social media buttons
