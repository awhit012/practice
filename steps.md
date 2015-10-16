SETUP

- mkdir my-project
- cd my-project
- git init
- Go to GitHub, create new repo
- Don't click add README
- git remote add
-  touch app.js
- npm init, and fill out with app.js as entry point
- npm install express --save

EXPRESS HELLO WORLD

- require express and start app 
- create basic GET route
- set up server to listen on por- 
- add optional but reccomended log of address and port
- run node app.js 
- open localhost::3000 in browser
- git add -A
- git commit

NODEMON
- Stop server
- npm install -g nodemon
- nodemon app.js

EXPRESS STATIC ROUTES

- npm install ejs -s
- app.set('view engine', 'ejs');
- res.render('index') in place of res.send
- mkdir views
- touch views/index.ejs
- throw hello world in index.ejs and make sure it works

CONNECT MONGO AND MONGOOSE
- npm install mongodb -s
- npm install mongoose -s
- in new terminal window mkdir /data/db
- mongod
- in app.js require and connect mongoose
- add function to log a message when we are connected. 
ADD SCHEMA FOR SHOUTS
- create Schema attribute on mongoose with attribute we need
- compile to model
- create instance and log attribute to know it works

Now just explain that you would actually create the new instances from the post method, and get the params from the req. Take a bow. 








