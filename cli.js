#!/user/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';
import Entries from './entries/entries.js';

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
const currentDate = new Date(1931, 8, 2);
let locationsVisited = [100];
let currentCharacter = {};
currentCharacter.name = "Louis Grunewald";

async function question1() {
  const question = await inquirer.prompt([
    {
      type: 'list',
      name: 'first',
      message: `${Entries[13].paragraph}`,
      choices: () => Entries[13].goTo.map((entry) => ({ ...entry, name: entry.text, value: Entries[13].goTo.indexOf(entry) })),
    }
  ])

  return nextLocation(Entries[13].goTo[question.first].location);
  // return handleAnswer(question.answers === 'green');
}

await question1();

async function nextLocation(location) {
  console.log(location)
  // TODO: Getting stuck in a loop on Arkhma Location Table.....value is not getting set correctly and question.locaiton = 0 is messing this up too.
  const question = await inquirer.prompt([
    {
      type: 'list',
      name: "location",
      message: `${Entries[location].paragraph}`,
      choices: Entries[location](currentCharacter, currentDate, locationsVisited).type === "LocationTable"
        ? () => Entries[location](currentCharacter, currentDate, locationsVisited).locations.map((entry) => ({ ...entry, name: entry.goTo[0].text, value: Entries[location](currentCharacter, currentDate, locationsVisited).locations.indexOf(entry) }))
        : () => Entries[location](currentCharacter, currentDate, locationsVisited).goTo.map((entry) => ({ ...entry, name: entry.text, value: Entries[location](currentCharacter, currentDate, locationsVisited).goTo.indexOf(entry) })),
    }
  ])
  question.location === -1 ? question.location = 0 : null;

  return Entries[location](currentCharacter, currentDate, locationsVisited).type === "LocationTable"
    ? nextLocation(Entries[location](currentCharacter, currentDate, locationsVisited).locations[question.location].goTo[0]?.location || Entries[location](currentCharacter, currentDate, locationsVisited).locations[0].goTo[0].location)
    : nextLocation(Entries[location](currentCharacter, currentDate, locationsVisited).goTo[question.location]?.location || Entries[location](currentCharacter, currentDate, locationsVisited).goTo[0].location)
  // return handleAnswer(question.answers === 'green');
}

await nextLocation();

async function handleAnswer(isCorrect) {
  const spinner = createSpinner();
  spinner.start();
  await sleep(1000);
  spinner.stop();
  if (isCorrect) {
    spinner.success({ text: `${chalk.green('Pass')}` });
  } else {
    spinner.error({ text: `${chalk.red('Fail')}` });
  }
}
