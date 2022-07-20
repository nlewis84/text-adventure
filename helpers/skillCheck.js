function skillTest(skill) {
  if ((Math.floor(Math.random() * 100) + 1) - currentCharacterSkills[skill] >= 1) {
    console.log("Success!");                                                                                // Need this to display more for player
  } else {
    console.log("Failure!");
  }
}

export default skillTest;