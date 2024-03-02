# URL SHORTENER
To use this url shortener in your local environment, follow the below steps :

1. Clone the repository to your local environment by using the command ```git clone <repo url>``` .

2. Navigate to the repository using the command ```cd url_shortener/Backend``` .

3. Install the necessary dependencies using ```npm install``` .

4. This shortener uses MongoDB for database, thus it's necessary to have a MongoDB account.

5. Install the MongoDB driver using ```npm install mongodb``` and replace the "mongoURI" value; present under default.json, which is further present under the config folder; with your connection string. **Remember to replace ```<password>``` with your MongoDB password**

6. Finally, run the application using ```node index.js``` command.

7. Open a new tab in a web browser and navigate to ```http://localhost:5000/api/url```.

 
