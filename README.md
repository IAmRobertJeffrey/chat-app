# 📮 Robert's Chat App 



## 📝 Description
This is a real time text chat application, designed to allow multiple people to all join at once and instant message eachother.

This project was completed as part of a [Devjam.](https://discord.com/invite/nZBxGEudY6) Each participant was given the same set of required user stories to complete, upon completing the required user stories the challenge is complete and can be submitted. 

🛠️ Difficulty Level: Advanced <br/>
📅 Start: December 3rd <br/>
📅 Deadline: December 9th 16:00 (4PM) GMT

In addition to the required user stories, a set of optional user stories with higher difficulty are provided. Each set of user stories can be found in this readme.

[A live version of the website can be found here!](https://roberts-chatting.web.app/)

<hr>

## ⚙ Technologies

 This project was created using an Express/Socket.io backend and a React(CRA) frontend. This is my first project using Material-UI, or any component library for that matter. I normally use styled-components, but for the first time opted to try out Material-Ui using emotion. The frontend for this project was hosted on Firebase, the backend was hosted on Heroku.

|Technology  | Description                                                                                                                  |		  
|------------|------------------------------------------------------------------------------------------------------------------------------|
| [React](https://reactjs.org/)      | A JavaScript library for building user interfaces         |
| [Express](https://expressjs.com/)    | Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. messages.                                                                |	
| [Socket.io](https://socket.io)  | Bidirectional and low-latency communication for every platform |	
| [Material-Ui](https://mui.com/)| MUI provides a robust, customizable, and accessible library of foundational and advanced components, enabling you to build your own design system and develop React applications faster. |	

| Hosting  | Description                                                           |	
|------------|------------------------------------------------------------------------------------------------------------------------------|
| [Firebase](https://firebase.google.com/)| Front end hosting was through firebase |	
| [Heroku](https://dashboard.heroku.com/)| Back end hosting was through heroku |	

<hr>

## 📔  Required Features:

|Number| User Story                                                                                                                   |Complete|
|----  |------------------------------------------------------------------------------------------------------------------------------|--------|
| 1.   | The user is prompted to enter a username when they open the app. The username will be stored within the application.         |	✔	   |
| 2.   | The user can see an input field where they can type messages.                                                                |	✔	   |
| 3.   | By pressing the enter key or clicking on the send button the text will be displayed in the chat box alongside their username |	✔	   |



## ⭐ Optional Features: 

|Number|User story                                                                                            |Complete|
|----|--------------------------------------------------------------------------------------------------------|--------|
| 1. | The messages will be visible to all users that are currently in the chat app. (using WebSockets)       |	✔	   |
| 2. | When a new user joins the chat, a message is displayed to all existing users announcing their arrival. |	✔	   |
| 3. | Messages are saved in a database.                                                                      |	❌	  |
| 4. | The user can send images, videos and links which will be displayed properly.                           |	❌     |
| 5. | The user can select and send emojis.                                                                   |	❌     |
| 6. | Users are able to chat in private.                                                                     |	❌     |
| 7. | Users can join channels on specific topics.                                                            | ❌     |

<hr>

## Screenshots

### Login Screen
![Login Screen](https://raw.githubusercontent.com/IAmRobertJeffrey/chat-app/main/images/loginScreen.jpg?raw=true)


### Chat Screen
![Chat Screen](https://raw.githubusercontent.com/IAmRobertJeffrey/chat-app/main/images/chatScreen.JPG?raw=true)

<hr>

## ⌨ Installation

### 1. Clone this repository.

### 2. Run npm install to install dependencies.
<hr/>

### 3. Change line 13 in server.js from this:
```javascript

		origin: "https://roberts-chatting.web.app"		
```
### To this:
```javascript

		origin: "http://localhost:3000"		
```
### 4. Change line 50 of ./frontend/App.jsx from this:
```javascript

const client = io(`https://roberts-chatting.herokuapp.com`);
```
### To this
```javascript

const client = io(`http://localhost:3001`);
```

### 5. Navigate to the front end with 
```
cd frontend
```

### 6. Type npm run start into the terminal to start the front end, it should be started on port 3000

### 7. Navigate to the server with
```
 cd ../
 ```

 ### 8. Run the server with 
 ```
 npm run dev
 ```
 ### This should be started on port 3001 (it should prompt you to start on port 3001 because the front end is already running on 3000)

<br>

  ### The application should now be running.
<hr/>


<br>

## 🚀 Contribute

Want to contribute? You can always submit a pull request and I will look at it when I get around to it. Though due to this project being for a devjam, it's unlikely this will be developed much further. You can always talk to me/ask to collaberate on future projects too!  

