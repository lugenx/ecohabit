### This is a temporary file to define the basic structure of the server side code

- Packages in src/main/java/com/ecohabit/ & their use:
  - **Controllers**: handles routing and make calls to various services
  - **Services**: implement the business logic
  - **Repositories**: handle the database CRUD operations as requested by the services
  - **Entities**: contain the objects that are to be persisted
  - **Models**: contain variants of the entities that modify how the api responds to requests