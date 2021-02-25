// for when I want to link a git repository.
function myGit(repo){
    var myHub = "https://github.com/ErikLMeyer/xxx";
    var myRepo = myHub.replace("xxx", repo);
    return myRepo;
}

// for when I want to link to a deployed project.
function azure(siteName){
    var azure = "https://xxx.azurewebsites.net";
    var correctAzure = azure.replace("xxx", siteName);
    return correctAzure;
}


function sprint3(){
    document.getElementById("exercise2").href = azure("sprint3-chapter2");
    document.getElementById("exercise2").title = "Chapter 2";
    document.getElementById("exercise3").href = azure("sprint3-chapter3");
    document.getElementById("exercise2").title = "Chapter 3"
    document.getElementById("exercise4").href = azure("sprint3-chapter4");
    document.getElementById("exercise2").title = "Chapter 4";
}
