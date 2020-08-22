<h1 align="center"> 

![Proffy Logo](https://raw.githubusercontent.com/HigorSnt/proffy/master/.github/logo.svg)

</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/juliastefanoni/proffy?style=flat-square&color=8257e5">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/juliastefanoni/proffy?style=flat-square&color=8257e5">
  <img alt="GitHub stars" src="https://img.shields.io/github/stars/juliastefanoni/proffy?style=flat-square&color=8257e5"> 
</p>

### A system that aims to facilitate the online contact of students and private teachers through a registration offered to teachers within the application, where teachers can be contacted by whatsapp by students interested in learning

<p align="center">
  <a href="#bookmark-functionalities">Functionalities</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#construction-requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies-used">Technologies used</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#arrow_forward-running-the-application">Running the application</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#iphone-screens">Screens</a>
</p>

## :bookmark: Functionalities 
<p> :heavy_check_mark: &nbsp Search for teachers filtering by subject and available time </p>
<p> :heavy_check_mark: &nbsp Proffy teacher registration </p>
<p> :heavy_check_mark: &nbsp Contact a teacher by Whatsapp number </p>

<br>

## :construction: Requirements 
 
- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [NPM](https://www.npmjs.com/) (Optional)
- [Expo CLI](https://expo.io/)

<br>

## :rocket: Technologies used

-  [Typescript](https://www.typescriptlang.org/)
-  [ReactJS](https://reactjs.org/)
-  [React Native](http://facebook.github.io/react-native/)
-  [Expo](https://expo.io/)
-  [NodeJS](https://nodejs.org/en/)
-  [Express](https://expressjs.com/)
-  [Axios](https://github.com/axios/axios)

<br> 

## :arrow_forward: Running the application 

At the terminal, clone the project:

``git clone https://github.com/juliastefanoni/proffy.git``

Go to the project folder:

``cd proffy``

### Run the server:

```sh
cd server

# Install the dependencies
yarn install

# Setting up the database and performing the last migration
yarn knex:migrate

# Run server running the REST API
yarn start
```

The server is now available locally from the route http://localhost:3333/

### Run the web application:

```sh
cd web

# Install the dependencies
yarn install

# Run web application
yarn start
```

The server is now available locally from the route http://localhost:3000/

### Run the mobile application:

```sh
cd mobile

# Install the dependencies
yarn install

# Run web application
yarn start
```
 
The application is now available locally from the route http://localhost:19002/ <br>
Scan the QR Code with the App Expo (android) or with the camera (iOS)

## :iphone: Screens

### Web
![Proffy](https://raw.githubusercontent.com/juliastefanoni/proffy/master/github/home.png)
![Proffy](https://raw.githubusercontent.com/juliastefanoni/proffy/master/github/dar-aulas.png)
![Proffy](https://raw.githubusercontent.com/juliastefanoni/proffy/master/github/proffys.png)

