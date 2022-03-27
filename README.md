<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">UrList - Store, Secure, Seamlessly </h3>
  <img src="https://lh3.googleusercontent.com/wY5xafshzpNPsOZccfl7NdTceXtk-L3bjiBEX0PxvLzjeSHF2Tm1y3UdZSFYyNwDIz_hZjYNCjx_sE0qvEd1Co6y6u59Fw2BAXzr-upPJkwwET3A5NlWPVH2i1bdpmTueseox8x-iQ=w2400" alt="logo" width="100">
  <p align="center">
    Secure, store, and access to accounts, commands, note, and other sensitive data.

  </p>
</div>

<!-- ABOUT THE PROJECT -->

# About The Project

urList, stands for **ur**gent **list**, is a self-project that was intended to simplify my work. As a test analyst, I had to memorize a lot of accounts, commandlines, notes from seniors, meeting, etc. So, I created this to make it easier to see/retrieve my data.

![TheUI][spa-ui]
![CRUD][crud-list]
![MarkdownEditor][markdown-editor]

<p align="right">(<a href="#top">back to top</a>)</p>

## Built With

The following lists show my development stack:

### Frontend Stack

- [React](https://reactjs.org/)
- [Styled-Components](https://styled-components.com/)
- [React-Redux](https://react-redux.js.org/)
- [Axios](https://axios-http.com/docs/intro)

### Backend Stack

- [ExpressJS](https://expressjs.com/)
- [cryto-js](https://www.npmjs.com/package/crypto-js)

### Database

- [Mongoose](https://mongoosejs.com/)
- [MongoDB](mongodb.com)

### Development Tools:

- [Git](https://git-scm.com/)
- [Neovim](https://neovim.io/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Concurrently](https://www.npmjs.com/package/concurrently)

<p align="right">(<a href="#top">back to top</a>)</p>

## What I've learnt?

- `Designing Lists Structure` => I learnt a lot (from mistakes) about how to create the sustainable structure because I have 3 different lists on this project, `Account` list, `Command Line` list, and `Note` list. Each has different UI and different structure. I'm not sure if this is how developer design the model but it worked in my project at least.
- `Express JS` => This is my first time using Express JS replacing core module of http-server from nodejs. At first, I struggle a lot about middlewares and how it works, but everything seems smooth when I get used to it. Plus I used third party library here for handling asynchronous function. I also learnt about Software Development Architecture in this project since I separate frontend and backend folder so it seems tend to be a macro microservice app :D
- `Styled Component` => I learn styled component from my udemy course and try to implement it to this project. The flow is so easy because the css is on the js file, since it basically a template literal of javascript. The integration with React State is the best.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

# Getting Started

## The Feature

- CRUD Functionality of three lists.
- Encrypted password when it logged to Database
- Database is using MongoDB and store it in cloud.
- Markdown Editor for Note Editing
- Search box for easy finding
- Copy-Paste on click on the Password and Command Line fields
- Fresh UI to keep your chin up facing your work :D

## Prerequisites

The project is divided by `frontend` and `backend` folder but don't worry, for development phase I implemented the `concurrently` library to concat the server calling.

If you want to edit the code, you need to have `nodejs` and `NPM`.

- Install all dependencies by this command if you already get node and npm installed in your system. Do it in `./` and `./frontend`

```sh
npm install
```

- Setup `.env` file in the `./` and `./frontend` folder

```sh
#Set these parameter in ./
MONGO_URI=<INSERT YOUR MONGO URI FOR DATABASE CONNECT>
NODE_ENV=development
CRYPTOJS_SECRET_PASSPHRASE=<INSERT YOUR SECRET KEY FOR CRYPTOJS>
```

```sh
#Set these parameter in ./frontend
REACT_APP_SECRET_PASSPHRASE=<INSERT YOUR SECRET KEY FOR CRYPTOJS>
```

<p align="right">(<a href="#top">back to top</a>)</p>

# Usage

- Set your terminal directory to `./`
- Start the server by this command, it will run `concurrently \"npm run server\" \"npm run client\"`
  ```sh
  npm run dev
  ```
- Open `localhost:3000` in your browser

<p align="right">(<a href="#top">back to top</a>)</p>

# Database Structure

## The Mongoose Schema

This project is still using only one model for the list.
`listModel`

```js
const listSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    details: {
      name: { type: String, required: true },
      url: { type: String, required: false },
      userName: { type: String, required: false },
      theDetail: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
)
```

<p align="right">(<a href="#top">back to top</a>)</p>

# Space for Improvement

- Authentication and Session implementation
- App for everyone and connect user data using Firebase
- Group feature and allow them to have realtime chatting
- Frequently used section feature
- Reordering list on the same list section

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Sedana Yoga - [@cok_yoga](https://twitter.com/Cok_Yoga)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[spa-ui]: docs/spa-ui.png
[crud-list]: docs/crud-list.png
[markdown-editor]: docs/markdown-editor.png
