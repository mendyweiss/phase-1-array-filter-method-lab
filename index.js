// Code your solution here
function findMatching (arrayName, stringName) {
    let results = [];
    arrayName.map(function (x) {
        if(x.toUpperCase() === stringName.toUpperCase()) {
            results.push(x);
        }
    })
    return results;
    
};

function fuzzyMatch (arrayName, stringName) {
    // let letter = stringName;
    return arrayName.filter(x => x[0] === stringName[0]);
};

function matchName (arrayName, stringName) {
    return arrayName.filter(x => x.name === stringName);
}