function myGit(repo){
    var myHub = "https://github.com/ErikLMeyer/xxx";
    var myRepo = myHub.replace("xxx", repo);
    return myRepo;
}


function sprint3(){
    document.getElementById("exercise4").href = myGit("SE-Sprint3-Exercises-Chapter-4");
}
