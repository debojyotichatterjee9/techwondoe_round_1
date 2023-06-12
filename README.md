
## Installation

#### 1. Clone the project
```
$ git clone https://github.com/debojyotichatterjee9/techwondoe_round_1.git
```

### 2. Go to the project directory
```
$ cd techwondoe_round_1
```
### 3. Install dependencies using npm, yarn or pnpm
```
$ npm install
```
### 4. Start the server
```
$  npm run start:dev
```
### 5. To Run with Docker
(Note: Please make sure that the db uri is set to MONGODB_DOCKER_URI in the file: src/app/app.module.ts)
```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --detach --build

```