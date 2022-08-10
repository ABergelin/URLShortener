This is a url shortener project to answer the brief:

"We would like you to implement a URL shortening service (think https://bitly.com/) that can redirect a browser from a shortened link to an expanded URL.
The mechanism for generating new shortened links could be a web form, but it could also be a terminal command."

To run my project, you will need to download and install mongodb community version and run it locally. mongodb can be found here: 
https://www.mongodb.com/try/download/community

Once done, please navigate to the Shrt.URL folder, run "npm i" with the CLI to install all dependencies and then run the app using the command 'npm run start'.

 Open a browser to http://localhost:5000, there you will be presented with a modest webform where you can enter a url and will be presented with a shorter url in a table. Clicking on the shortened url will direct you to the correct page.

Alternatively you can access the api via Postman or curl at http://localhost:5000/api/convert. You will need to provide a property of "fullUrl" in the body of the request. This property should contain the url to be shortened.

This project has been built using node.js and mongodb.

