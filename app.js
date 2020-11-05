//// DEBUG BUTTONS
// Death
const debugKillCharacter = document.querySelector("#killCharacter");
debugKillCharacter.addEventListener('click', function () {
    currentCharacterPoints.hitPoints -= 4;
    updateStats();
})
// Insanity
const debugDriveInsane = document.querySelector("#driveInsane");
debugDriveInsane.addEventListener('click', function () {
    currentCharacterPoints.sanityPoints -= 20;
    updateStats();
})
// Character Sheet 
const debugHideCharacterSheet = document.querySelector("#hideCharacterSheet");
debugHideCharacterSheet.addEventListener('click', function () {
    if (document.querySelector("#full-character-sheet").style.display === "block") {
        function toggleCharacterSheetOff() {
            document.querySelector("#full-character-sheet").style.display = "none";
        };
        toggleCharacterSheetOff();
    } else {
        function toggleCharacterSheetOn() {
            document.querySelector("#full-character-sheet").style.display = "block";
        };
        toggleCharacterSheetOn();
    }
})

//// Hide Objects
// Character Select 
function displayNone() {
    document.querySelector("#characterSelectDiv").style.display = "none";
};
function displayNoneCharacterSheet() {
    document.querySelector("#full-character-sheet").style.display = "block";
};

//// End of Game
// DEATH
function death() {
    alert("YOU HAVE DIED!")
    function gameOver(availableCharacters) {
        for (const i in availableCharacters) {
            if (availableCharacters[i] !== false)
                return false;
        }
        return true;
    }
    if (gameOver(availableCharacters) === true) {
        displayNoneActiveParagraph()                                // THIS MAY BE REDUNDANT
        alert("GAME OVER")
        alert("There are no more characters left to continue your story")
        alert("Refresh this page to restart the game")
    } else {
        //game not over
        alert("Select a new character. You may not use a character you have already played with this session.")
        function displayBlock() {
            document.querySelector("#characterSelectDiv").style.display = "block";
        };
        displayBlock();
    }
}
// INSANITY
function insane() {
    alert("YOU HAVE GONE INSANE!")
    function gameOver(availableCharacters) {
        for (const i in availableCharacters) {
            if (availableCharacters[i] !== false)
                return false;
        }
        return true;
    }
    if (gameOver(availableCharacters) === true) {
        alert("GAME OVER")
        alert("There are no more characters left to continue your story")
        alert("Refresh this page to restart the game")
    } else {
        //game not over
        alert("Select a new character. You may not use a character you have already played with this session.")
        function displayBlock() {
            document.querySelector("#characterSelectDiv").style.display = "block";
        };
        displayBlock();
    }
}

//// Select Character
var availableCharacters = {
    grunewaldAvailable: true,
    holtAvailable: true,
    mcshaneAvailable: false,    // TURN THIS TO TRUE ONCE YOU MAKE THESE CHARACTERS
    wilsonAvailable: false    // TURN THIS TO TRUE ONCE YOU MAKE THESE CHARACTERS
}

// Blank Current Character
var currentCharacterInfo = {};
var currentCharacterStats = {};
var currentCharacterPoints = {};
var currentCharacterSkills = {};
var currentCharacterWeapons = {};
var currentCharacterMisc = {};
var currentCharacterMP = {};
var currentCharacterHP = {};
var currentCharacterSP = {};
const currentCharacterName = document.querySelector('#currentCharacterName');
const currentCharacter = currentCharacterName.innerText;

// Update Stats and Check for Death or Insanity
// Run this whenever you adjust a stat
function updateStats() {
    currentCharacterMagicPoints.innerText = currentCharacterPoints.magicPoints;
    currentCharacterHealthPoints.innerText = currentCharacterPoints.hitPoints;
    currentCharacterSanityPoints.innerText = currentCharacterPoints.sanityPoints;
    if (currentCharacterPoints.hitPoints <= 0) {
        death();
    }
    if (currentCharacterPoints.sanityPoints <= 0) {
        insane();
    }
}

// Louis Grunewald

const buttonGrunewald = document.querySelector("#selectGrunewald");
buttonGrunewald.addEventListener('click', function selectGrunewald() {
    currentCharacterInfo = grunewaldInfo;
    currentCharacterStats = grunewaldStats;
    currentCharacterPoints = grunewaldPoints;
    currentCharacterSkills = grunewaldSkills;
    currentCharacterWeapons = grunewaldWeapons;
    currentCharacterMisc = grunewaldMisc;
    currentCharacterMP = grunewaldPoints.magicPoints;
    currentCharacterHP = grunewaldPoints.hitPoints;
    currentCharacterSP = grunewaldPoints.sanityPoints;
    currentCharacterName.innerText = currentCharacterInfo.name;
    currentCharacterStatsStr.innerText = currentCharacterStats.str;
    currentCharacterStatsDex.innerText = currentCharacterStats.dex;
    currentCharacterStatsInt.innerText = currentCharacterStats.int;
    currentCharacterStatsIdea.innerText = currentCharacterStats.idea;
    currentCharacterStatsCon.innerText = currentCharacterStats.con;
    currentCharacterStatsApp.innerText = currentCharacterStats.app;
    currentCharacterStatsPow.innerText = currentCharacterStats.pow;
    currentCharacterStatsLuck.innerText = currentCharacterStats.luck;
    currentCharacterStatsSiz.innerText = currentCharacterStats.siz;
    currentCharacterStatsSan.innerText = currentCharacterStats.san;
    currentCharacterStatsEdu.innerText = currentCharacterStats.edu;
    currentCharacterStatsKnow.innerText = currentCharacterStats.know;
    updateStats();
    function displayNoneGrunewaldButton() {
        document.querySelector("#selectGrunewald").style.display = "none";
    };
    displayNoneGrunewaldButton();
    displayNone();
    displayNoneCharacterSheet();
    availableCharacters.grunewaldAvailable = false;
    displayActiveParagraph()
})

// Ernest Holt
const buttonHolt = document.querySelector("#selectHolt");
buttonHolt.addEventListener('click', function selectHolt() {
    currentCharacterInfo = holtInfo;
    currentCharacterStats = holtStats;
    currentCharacterPoints = holtPoints;
    currentCharacterSkills = holtSkills;
    currentCharacterWeapons = holtWeapons;
    currentCharacterMisc = holtMisc;
    currentCharacterMP = holtPoints.magicPoints;
    currentCharacterHP = holtPoints.hitPoints;
    currentCharacterSP = holtPoints.sanityPoints;
    currentCharacterName.innerText = holtInfo.name;
    currentCharacterStatsStr.innerText = currentCharacterStats.str;
    currentCharacterStatsDex.innerText = currentCharacterStats.dex;
    currentCharacterStatsInt.innerText = currentCharacterStats.int;
    currentCharacterStatsIdea.innerText = currentCharacterStats.idea;
    currentCharacterStatsCon.innerText = currentCharacterStats.con;
    currentCharacterStatsApp.innerText = currentCharacterStats.app;
    currentCharacterStatsPow.innerText = currentCharacterStats.pow;
    currentCharacterStatsLuck.innerText = currentCharacterStats.luck;
    currentCharacterStatsSiz.innerText = currentCharacterStats.siz;
    currentCharacterStatsSan.innerText = currentCharacterStats.san;
    currentCharacterStatsEdu.innerText = currentCharacterStats.edu;
    currentCharacterStatsKnow.innerText = currentCharacterStats.know;
    currentCharacterMagicPoints.innerText = holtPoints.magicPoints;
    currentCharacterHealthPoints.innerText = holtPoints.hitPoints;
    currentCharacterSanityPoints.innerText = holtPoints.sanityPoints;
    updateStats();
    function displayNoneHoltButton() {
        document.querySelector("#selectHolt").style.display = "none";
    };
    displayNoneHoltButton();
    displayNone();
    displayNoneCharacterSheet();
    availableCharacters.holtAvailable = false;
    previousParagraph = activeParagraph
    activeParagraph = "#thirtySix";
    displayActiveParagraph();
})

//// Dice
function rollDice(numDice, sides) {
    var result = 0;
    for (let i = 0; i < numDice; i++) {
        var diceRoll = Math.floor(Math.random() * sides) + 1;
        result += diceRoll;
    };
    return result;
}

//// Skill Check
//                                                                                                              Need to add a way to input "skill"
function skillTest(skill) {
    if ((Math.floor(Math.random() * 100) + 1) - currentCharacterSkills[skill] >= 1) {
        console.log("Success!");                                                                                // Need this to display more for player
    } else {
        console.log("Failure!");
    }
}

////// Character Sheet
//// Louis Grunewald
const grunewaldInfo = {
    name: "Louis Grunewald",
    occupation: "Professor",
    sex: "M",
    age: 53,
    nationality: "USA",
    residence: "Arkham"
}
//// Grunewald Investigator Statistics
const grunewaldStats = {
    str: 14,
    dex: 12,
    int: 14,
    idea: 70,
    con: 10,
    app: 11,
    pow: 11,
    luck: 55,
    siz: 9,
    san: 55,
    edu: 19,
    know: 95,
    schools: "U. Chicago",
    degrees: "M.A., Ph. D.",
    damageModifier: 0
}
//// Grunewald Magic, Sanity, and Hit Points
const grunewaldPoints = {
    magicPoints: 11,
    hitPoints: 10,
    sanityPoints: 55
}
//// Grunewald Investigator Skills
const grunewaldSkills = {
    accounting: 10,
    anthropology: 0,
    archaeology: 0,
    astronomy: 0,
    bargain: 5,
    botany: 0,
    camouflage: 25,
    chemistry: 0,
    climb: 40,
    creditRating: 15,
    cryptography: 0,
    cthulhuMythos: 0,
    debate: 10,
    diagnoseDisease: 5,
    dodge: grunewaldStats.dex * 2,
    driveAutomobile: 20,
    egyptology: 0,
    fastTalk: 5,
    firstAid: 30,
    geology: 0,
    hide: 10,
    antiquity: 20,
    jump: 25,
    law: 5,
    libraryUse: 25,
    linguist: 0,
    listen: 25,
    makeMaps: 10,
    mechanicalRepair: 20,
    navigate: 0,
    occult: 5,
    operateHeavyMachinery: 0,
    oratory: 5,
    pharmacy: 0,
    photography: 10,
    pickPocket: 5,
    pilotAircraft: 0,
    psychoanalysis: 0,
    psychology: 5,
    languageEnglish: grunewaldStats.edu * 5,
    languageGerman: 0,
    languageLatin: 0,
    languageNordic: 0,
    languageEgHieroglyph: 0,
    ride: 5,
    sneak: 10,
    speak: 0,
    spotHidden: 25,
    survival: 5,
    swim: 25,
    throwAction: 25,
    track: 10,
    treatDisease: 5,
    treatPoison: 5
}

//// Grunewald Weapons, and Miscellaneous Inventory
// Weapons
// grunewaldWeapons.fist() runs these
const grunewaldWeapons = {
    fist: () => rollDice(1, 3),
    kick: () => rollDice(1, 6),
    headButt: () => rollDice(1, 4),
    grapple: 0,
    epee: () => rollDice(1, 6) + 1,
    revolver45: () => rollDice(1, 10) + 2,
    gauge12: () => rollDice(4, 6)
}
// Miscellaneous
const grunewaldMisc = {
    Friends: "Ernest Holt",
    Instructed: "Nora McShane and Devon Wilson"
}

////// Ernest Holt
const holtInfo = {
    name: "Ernest Holt",
    occupation: "Industrialist",
    sex: "M",
    age: 62,
    nationality: "USA",
    residence: "New York City"
}
//// Holt Investigator Statistics
const holtStats = {
    str: 9,
    dex: 6,
    int: 16,
    idea: 80,
    con: 7,
    app: 12,
    pow: 10,
    luck: 50,
    siz: 16,
    san: 50,
    edu: 11,
    know: 55,
    schools: "Renslaer",
    degrees: "B.S.",
    damageModifier: () => rollDice(1, 4)
}
//// Holt Magic, Sanity, and Hit Points
const holtPoints = {
    magicPoints: 10,
    hitPoints: 12,
    sanityPoints: 50
}
//// Holt Investigator Skills
const holtSkills = {
    accounting: 10,
    anthropology: 0,
    archaeology: 0,
    astronomy: 0,
    bargain: 5,
    botany: 0,
    camouflage: 25,
    chemistry: 0,
    climb: 40,
    creditRating: 15,
    cryptography: 0,
    cthulhuMythos: 0,
    debate: 10,
    diagnoseDisease: 5,
    dodge: grunewaldStats.dex * 2,
    driveAutomobile: 20,
    egyptology: 0,
    fastTalk: 5,
    firstAid: 30,
    geology: 0,
    hide: 10,
    antiquity: 20,
    jump: 25,
    law: 5,
    libraryUse: 25,
    linguist: 0,
    listen: 25,
    makeMaps: 10,
    mechanicalRepair: 20,
    navigate: 0,
    occult: 5,
    operateHeavyMachinery: 0,
    oratory: 5,
    pharmacy: 0,
    photography: 10,
    pickPocket: 5,
    pilotAircraft: 0,
    psychoanalysis: 0,
    psychology: 5,
    languageEnglish: grunewaldStats.edu * 5,
    languageGerman: 0,
    languageLatin: 0,
    languageNordic: 0,
    languageEgHieroglyph: 0,
    ride: 5,
    sneak: 10,
    speak: 0,
    spotHidden: 25,
    survival: 5,
    swim: 25,
    throwAction: 25,
    track: 10,
    treatDisease: 5,
    treatPoison: 5
}

//// Holt Weapons, and Miscellaneous Inventory
// Weapons
// holtWeapons.fist() runs these
const holtWeapons = {
    fist: () => rollDice(1, 3) + rollDice(1, 4),
    kick: () => rollDice(1, 6) + rollDice(1, 4),
    headButt: () => rollDice(2, 4),
    grapple: 0,
    club: () => rollDice(1, 6) + rollDice(1, 4),
    revolver45: () => rollDice(1, 10) + 2,
    gauge12: () => rollDice(4, 6)
}
// Miscellaneous
const holtMisc = {
    Friends: "Louis Grunewald and Nora McShane",
    Commanded: "Devon Wilson"
}

//// Passage of Time
// Date
var currentDate = 1;
function refreshDate() {
    if (currentDate === 1) {
        currentDateIndex.innerText = `Investigation has been active for ${currentDate} day.`;
    } else {
        currentDateIndex.innerText = `Investigation has been active for ${currentDate} days.`;
    }
}
refreshDate();

// Advance Days
function advanceDays(numberToAdvance = 1) {
    currentDate += numberToAdvance;
    refreshDate();
}


//// Paragraph Advancement
// Active Paragraph
var activeParagraph = "#thirteen";
// Previous Paragraph
var previousParagraph = "";
// Turning off and on paragraphs
function displayNoneActiveParagraph() {
    document.querySelector(activeParagraph).style.display = "none";
};
function displayActiveParagraph() {
    document.querySelector(activeParagraph).style.display = "block";
};
//////////////////////////////////////////////////////////////////////////make a naming convention that works for this better! make a function

// To 102 test
const to102 = document.querySelectorAll(".to102");
[...to102].forEach(function (item) {
    item.addEventListener('click', function () {
        displayNoneActiveParagraph();
        previousParagraph = activeParagraph
        activeParagraph = "#onehundredtwo";
        displayActiveParagraph();
    })
})

// To 120 test
const to120 = document.querySelectorAll(".to120");
[...to120].forEach(function (item) {
    item.addEventListener('click', function to120() {
        displayNoneActiveParagraph();
        previousParagraph = activeParagraph
        activeParagraph = "#onehundred20";
        displayActiveParagraph();
    })
})
// To 147 test
const to147 = document.querySelectorAll(".to147");
[...to147].forEach(function (item) {
    item.addEventListener('click', function to147() {
        displayNoneActiveParagraph();
        previousParagraph = activeParagraph
        activeParagraph = "#onehundred47";
        displayActiveParagraph();
    })
})
// To Arkham Locations test
const toArkhamLocations = document.querySelectorAll(".toArkhamLocations");
[...toArkhamLocations].forEach(function (item) {
    item.addEventListener('click', function allArkhamLocations() {
        displayNoneActiveParagraph();
        previousParagraph = activeParagraph
        activeParagraph = "#arkhamLocations";
        displayActiveParagraph();
    })
})