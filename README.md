#### [wip] song and lyrics
- This is a fullstack sample/poc for song + lyrics, built with below tech. stack.
	- `client` : [React], [Apollo], [Cypress], [Webpack], [Babel], [Bootstrap], [Cucumber].
	- `server` : [Graphql], [MongoDB], [Node.js], [Typescript], [Express], [Cypress], [Cucumber].
	- `other tools` : [nginx], [Docker]

- Cypress along with Cucumber for BDD experiments.

##### Pre-requirements
- For containerized way only [Docker] is the pre-requirement.
- For manual setup [Node.js] >= 8.10+, [MongoDB], [npm] >= 5.6.0 or [yarn].

##### Setup
1) Once the source code is in place then,

    1. Rename `.env.example` to  `.env` for api container environment vars.
    2. Rename `.env.test.example` to `.env.test` for test container environment vars.
    3. Update values in above `.env(s)` and in `docker-compose.yml` for port changes and user credentials .
    4. `nginx` configured to run on port `9000`, if want to change then change in `./nginx/default.conf` and `docker-compose.yml`.

2) There are few options for setup, either go for manual setup or for containerized way.
	1. Preferred way is using containers way : 
	`$ docker-compose up --build`

	2. In case of manual setup :
	```sh
	$ npm install
	$ npm run dev (hot reload)
	$ npm run test (cypress tests)
	```
	
##### Todo (WIP)

- Writing more tests (work in progress)
- Code refactor

##### License
----
MIT

[React]: <https://github.com/facebook/react>
[node.js]: <https://nodejs.org/>
[Typescript]: <https://www.typescriptlang.org/>
[cypress]: <https://www.cypress.io/>
[webpack]: <https://github.com/webpack/webpack>
[babel]: <https://github.com/babel/babel>
[Redux]: <https://www.npmjs.com/package/react-redux>
[express]: <https://www.npmjs.com/package/express>
[mongoDB]: <https://www.mongodb.com/>
[npm]: <https://www.npmjs.com/>
[bootstrap]: <https://getbootstrap.com>
[cucumber]: <https://github.com/TheBrainFamily/cypress-cucumber-preprocessor>
[apollo]: <https://github.com/apollographql>
[graphql]: <https://github.com/graphql>
[yarn]: <https://www.npmjs.com/package/yarn>
[nginx]: <https://www.nginx.com/>
[Docker]: <https://github.com/docker>
