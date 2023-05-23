<h1 align="center">EcoHabit</h1>
<h3 align="center">
    <a href="https://www.ecohabit.org/">EcoHabit.org</a> 
 
</h3>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Project Description](#project-description)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Roadmap](#roadmap)
- [Socials](#socials)
- [Contribute](#contribute)
- [Discuss](#discuss)

## Project Description

EcoHabit is a web app project that aims to create awareness of the environment and help people build environmental friendly habits.

It will visualize users' habits by tracking their activities (recycling, commuting, eating, etc.) and encourage them to improve their habits with better alternative options.

It also targets to be users' go-to place to find the closest recycling locations and give them clear instructions about how to divide and recycle each material.


## Tech Stack

*   **Front End:** [React](https://reactjs.org/), [Material UI](https://mui.com/) (JavaScript)
*   **Backend:** [NodeJS](https://nodejs.org/en/docs)/[ExpressJS](https://expressjs.com/) (JavaScript)
*   **Database:** [MongoDB](https://www.mongodb.com/docs/)

## Getting Started

### Prerequisites

- Download and install the latest version of Git on your system. See https://git-scm.com/downloads.
  - To make sure if your Git is on the latest version, run this command on the command line: `git -v`.
- Download and install the latest version of NodeJS and npm on your system. See https://nodejs.org/en/.
  - npm is included with the NodeJS installation. This means that you only have to download and run the NodeJS installer.
  - To make sure if your NodeJS is on the latest version, run this command on the command line: `node -v`.
  - To make sure if your npm is on the latest version, run this command on the command line: `npm -v`.

If you prefer the command line way of downloading and installing things, then feel free to do so. Otherwise, the instructions above should get you up and running.

### How to run

- Clone the repository for this project by running the following command in a terminal: 
  ##### `git clone https://github.com/lugenx/ecohabit.git`
- Open the cloned folder in VS Code. Open the terminal and make sure its pointing to the root of the cloned project.
- In the root folder, you can run:
  ##### `npm install`

- It'll download all the packages/dependencies as defined in package.json file.

- Running Backend Nods JS Application:

  - Change the directory to server folder using terminal command: cd server
  - Create a _.env_ file at the root of the 'server' folder and copy the content from _.env.example_ into the new _.env_ file. 
  - In the server directory, you can run:

  ##### `npm install`

  - It'll download all the packages/dependencies as defined in package.json file. Once the system completes this process, we can type below command:

  ##### `npm start`

  - Runs the app in the development mode.
  - You can start making http calls to [http://localhost:3001](http://localhost:3001)

- Running Frontend React JS Application:

  - Change the directory to client folder using terminal command: cd client
  - In the client directory, you can run:

  ##### `npm install`

  - It'll download all the packages/dependencies as defined in package.json file. Once the system completes this process, we can type below command:

  ##### `npm start`

  - Runs the app in the development mode.
  - Open [http://localhost:3000](http://localhost:3000) to view it in the browser

  - The page will reload if you make edits.
  - You will also see any lint errors in the console.

## Roadmap

- _List any features planned_

## Contribute

- ECOHABIT appreciates your contribution in any aspects of project development like documenting, UI/UX design, Frontend/Backend development etc.
- Please try and follow below guidelines while creating a new PR:
  - Keep the PR size smaller(max 8 files).
  - Each PR should be atomic in nature and should be focused on single issue only.
  - Respective Issue shall be linked with the PR.
  - If there's no existing Issue for which PR needs to be raised, first create an Issue in the project and then wait for it to get assigned.
  - Before starting work on a new pull request, make sure you have been assigned to the related issue. To get assigned, please comment on the issue.
  - Naming conventions and folder structure shall remain consistent.
- If you have some GIT experience but do not know how to contribute on a team project, we have a [beginner friendly guide](CONTRIBUTING.md)

## Discuss

We are always looking for new members to join our community. One way to get involved is by joining our [Discord server](https://discord.gg/2RMs6zWw4b). On Discord, you can discuss the project, ask questions, and receive support from other members of the community.

[![Discord Shield](https://discordapp.com/api/guilds/1038198557150285914/widget.png?style=shield)](https://discord.gg/2RMs6zWw4b)
