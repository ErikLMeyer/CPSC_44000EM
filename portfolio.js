function myGit(repo){
    var myHub = "https://github.com/ErikLMeyer/xxx";
    var myRepo = myHub.replace("xxx", repo);
    return myRepo;
}


function sprint3(){
    document.getElementById("exercise2").href = myGit("SE-Sprint3-Exercises-Chapter-2");
    document.getElementById("exercise2").title = "Chapter 2";
    document.getElementById("exercise3").href = myGit("SE-Sprint3-Exercises-Chapter-3");
    document.getElementById("exercise2").title = "Chapter 3"
    document.getElementById("exercise4").href = myGit("SE-Sprint3-Exercises-Chapter-4");
    document.getElementById("exercise2").title = "Chapter 4";
}
