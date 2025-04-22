**Project Name:** Daily Joke

**Application Description:** I wanted a platform that suggests me a new joke every day, with the possibility to ask for more jokes if the previous one wasn't good enough. I would like to be able to save the jokes I liked, with the possibility to rate them so I can better find the best ones.

**Features + Tools/Technologies:** The first feature is an external api call to a platform (https://icanhazdadjoke.com/api) that supplies jokes so that I can put them on my homepage. I also need to implement the fact that I can do the api call when I press the "Get a new joke" button.
Then, I need to setup a local api so that I can save the joke to my Mongo database and also retrieve all the jokes that I have previously saved. To do that, i will use mongoose, define a joke schema and model and use app.post / app.get functions. The saved jokes will then be displayed on another html page, sorted by date or rating.

**Timeline:** 
**04/20 :** Basic HTML structure and design with CSS
**04/21 : **Interactive features with Javascript : API call to the joke platform
**04/22 :** Local API and MongoDB database 
By the 04/22, I want to have most of the app done because I will have a busy week (job interviews).
**04/26-27 :** I will try to make it cleaner and add more features (like the rating of the jokes, dynamic sorting on the saved jokes page) before the final!
