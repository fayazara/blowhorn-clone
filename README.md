# Blowhorn.com clone

This is a clone of the blowhorn.com made with the below tech stack

Live Demo - https://blowhorn-clone.vercel.app/

| Technology           | Used                                    |
|----------------------|-----------------------------------------|
| JS Framework         | [Vue.js](https://vuejs.org/)            |
| Web Framework        | [Nuxt.js](https://nuxtjs.org/)          |
| CSS Framework        | [Tailwindcss](https://tailwindcss.com/) |
| Backend              | [Node.js](https://nodejs.org/en/)                                 |
| Hosted On.           | [Vercel](https://vercel.com/)                                  |
| Backend architecture | [Vercel Serverless Functions (Lambdas)](https://vercel.com/docs/serverless-functions/introduction)   |
| Mock Database        | [JSON Box](https://jsonbox.io)                       |

### API Endpoints

**Book Truck**
This api is a POST request which accepts city, pickup & dropoff data and saves it in a mock database here - https://jsonbox.io/box_bcbed7702974818a29b3

API Endpoint - https://blowhorn-clone.vercel.app/api/book

**Signup**
This api is a POST request which accepts user data and responds with a succesful/failed response

API Endpoint - https://blowhorn-clone.vercel.app/api/signup

**Login**
This api is a POST request which accepts user email and password and responds with a succesful/failed response

Username - admin@test.com
Password - password

API Endpoint - https://blowhorn-clone.vercel.app/api/login

### Prerequisites
1. Node.js
2. [Vercel cli](https://vercel.com/download) for mocking serverless lambdas in localhost.

### Project Setup
1. Clone the project.
2. Run command `npm install` in the project root install all dependencies.
3. To run dev environment - `npm run dev`.
4. To generate a production build - `npm run generate`.