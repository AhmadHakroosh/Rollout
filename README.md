# Rollout - Home Assignment

This project is for testing and interviewing purposes.

#### Description
* **Server**
Built with JavaSctript with strong typing (TypeScript) - See source for more details.
    - Third party packages and add-ons:
        1. [**Mongoose**](https://www.npmjs.com/package/mongoose) - For data modeling, while I could have not used it, I preferred using it for the flexibility it provides.
        2. [**Body Parser**](https://www.npmjs.com/package/body-parser) - A request data parsing middleware, it provides ease of configuring and handling HTTP requests.
        3. [**Dotenv**](https://www.npmjs.com/package/dotenv) - For loading environment variables from *.env* files into *process.env*.

* **Client**
Built with Vue with strong typing (TypeScript) - See source for more details.
    - Third party packages and add-ons:
        1. [**Axios**](https://www.npmjs.com/package/axios) - Simplify requests to the server and handling their responses.

* **Database**
MongoDB - Schema less database

* **Nginx**
Used as a proxy to map request from port 80 on localhost to the proper docker container (API/Client).

#### Deployment
1. Clone the repository:
    `git clone https://github.com/AhmadHakroosh/Rollout.git`

2. From the root directory `Rollout` run:
    `docker-compose up`

3. Open your browser and navigate to:
    `http://localhost`