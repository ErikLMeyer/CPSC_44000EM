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

const hrefs = [
    "sprint3-chapter2",
    "sprint3-chapter3",
    "sprint3-chapter4"
]

const titles = [
    "Chapter 2",
    "Chapter 3",
    "Chapter 4"
]

exports.sprint3href = (idx) => {
    return azure(hrefs[idx]);
}

exports.sprintTitles = (idx) => {
    return titles[idx];
}