# ReactPlayground
A space for learning and experimenting with React.

## DotNet Commands
- `dotnet new sln`
- `dotnet new classlib -n Domain`
- `dotnet new classlib -n Application`
- `dotnet new classlib -n Persistence`
- `dotnet new webapi -n API`
- `dotnet sln add Domain/` - add project to sln
- `dotnet sln add Application/` 
- `dotnet sln add Persistence/` 
- `dotnet sln add API/` 
- `dotnet sln list` - list projects in solution
- `cd ./Application`
- `dotnet add reference ../Domain/` - Add reference to project (CD into Application csproj directory first)
- `dotnet add reference ../Persistence/`
- `cd ./API`
- `dotnet add reference ../Application/`
- `cd ./Persistence`
- `dotnet add reference ../Domain/`
- `dotnet run -p API/`
- `dotnet tool install --global dotnet-ef`
- `dotnet ef migrations add InitialCreate -p Persistence/ -s API/`
- `dotnet ef migrations remove -p Persistence/ -s API/`  Remove last migration
- `dotnet watch run`  (needs to cd ./API)
- `dotnet ef database update`
https://github.com/TryCatchLearn/Reactivities
## VS Code Extensions
- Auto Close Tag
- Auto Rename Tag
- Bracket Pair Colorizer 2
- C# for Visual Studio Code (powered by OmniSharp)
- C# Extensions (jchannon version)
- ES7 React/Redux/GraphQL/React-Native snippets (by dsznajder)
- Material Icon Theme (Philipp Kief)
- Nuget Package Manager (by jmrog)
- Prettier - Code formatter (Prettier)
- SQLite (alexcvzz)

## Installation and Use
- `npm i -g create-react-app`
- `create-react-app projectName`
- `npm start` - cd into react app directory
- `npm install --save radium`
- `npm install --save styled-components`
- `npm run eject`
- `npx create-react-app client-app --use-npm --template typescript` use typescript
- `npm install axios` rest client
- `npm install semantic-ui-react semantic-ui-css` styling framework
## Extensions 
- Simple React Snippets
- Prettier

### Repository Contents:
- AuthenticationTutorial, [src](https://blog.logrocket.com/complete-guide-authentication-with-react-router-v6/)