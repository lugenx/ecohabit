### How to Run

- Clone the repository for this project by running the following command in a terminal: 
  ##### `git clone https://github.com/lugenx/ecohabit.git`
- Open the cloned folder in VS Code. Open the terminal and make sure its pointing to the root of the cloned project.


- Database creation
  - Create a mongodb account through the [MongoDB Website](https://www.mongodb.com)
  - Create a cluster (by default is Cluster0 which can be used)
  - Once the cluster is up, you need to click on the 'Connect' tab and follow the drivers section to retrieve the mongodb connection url and save it for the next steps

<br>

- Running Backend Node JS Application:

  - Change the directory to server folder using terminal command: `cd server`
  - At the root of the server directory, create an .env file and copy the content from .env.example into the new .env file. 
  - update the 'MONGODB_URL' property in the .env file with the mongodb connection url saved during Database creation
  - In the server directory, you can run:

  ##### `npm install`

  - It'll download all the packages/dependencies as defined in package.json file. Once the system completes this process, we can type below command:

  ##### `npm start`

  - Runs the app in the development mode.
  - You can start making http calls to [http://localhost:3001](http://localhost:3001)

- Running Frontend React JS Application:

  - Change the directory to client folder using terminal command: `cd client`
  - In the client directory, you can run:

  ##### `npm install`

  - It'll download all the packages/dependencies as defined in package.json file. Once the system completes this process, we can type below command:

  ##### `npm start`

  - Runs the app in the development mode.
  - Open [http://localhost:3000](http://localhost:3000) to view it in the browser

  - The page will reload if you make edits.
  - You will also see any lint errors in the console.

- Insert habit dummy data:

  - Go back to the MongoDB website to your project you created.
  - You will see a 'test' collection populated
  - Inside 'test', you will find 'habit' as a subcollection, open it and you can insert the below dummy documents

```
{
  category: "Recycle",
  description: "Reduce the amount of waste by using reusable bags!",
  question: "Which one of these did you use today?",
  answerOptions: ["clothbag"],
  __v:0
}
```

```
{
  category: "Commute",
  description: "Carpool with coworker or friends",
  question: "How did you commute to work today?",
  answerOptions: ["Uber", "Lyft"],
  __v:0
}
```

```
{
  category: "Recycle",
  description: "Separate bin for recycle stuff",
  question: "How much did you dump today for recycle",
  answerOptions: ["3boxes", "4boxes"],
  __v:0
}
```
- Note: When you insert a document, append the above json fields to the already defined unique id in the document

- The link [MongoDB Insert Document](https://www.mongodb.com/docs/manual/tutorial/insert-documents/)
 shows how to insert the document in the mongodb manually through the UI


  
