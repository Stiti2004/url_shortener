# URL SHORTENER
This application is a url shortener which helps in shortening the user-given long url.
The frontend of the application is developed using HTML, CSS and Javascript, whereas for backend, React.js is used.
MongoDB is used for datbase.
To use this url shortener in your local environment, follow the below steps :

1. Clone the repository to your local environment by using the command ```git clone <repo url>``` .

2. Navigate to the repository using the command ```cd url_shortener/Backend``` .

3. Install the necessary dependencies using ```npm install``` .

4. This shortener uses MongoDB for database, thus it's necessary to have a MongoDB account.

5. Install the MongoDB driver using ```npm install mongodb``` .R

6. Replace the "mongoURI" value with your MongoDB connection string( which correctly includes your username and password), then the "baseUrl" value with the baseurl you prefer( for example: "http://localhost:5000") and the "port" value with the port number, in the default.json.sample file and save it as ```default.json``` . 

8. Finally, run the application using ```node index.js``` command.

9. Open a new tab in a web browser and navigate to ```<baseUrl>/api/url```.

 
