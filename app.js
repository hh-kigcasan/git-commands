const WorkingDirectory = require("./models/working-directory");
const GitCommand = require("./models/git-command");

//Initialize variables
let wd = new WorkingDirectory();
wd.addFile("index.html", "views", "<html>Hello</html>");
wd.addFile("index.js", "assets/scripts", "alert('Hi!')");

let git = new GitCommand(wd);


//1. Initialize git workspace
git.init();

//2. Check status
console.log(git.status());

//3. Add as index
console.log(git.add("views/index.html"));

//4. Check status
console.log(git.status());

//5. Commit
console.log(git.commit("Added index.html file"));

//6. Push
console.log(git.push());