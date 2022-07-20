/*
Need to define all the types of entries.
The types of entries are:
1. SingleChoiceEntry
2. MultipleChoiceEntry
3. SkillCheckEntry
4. SpecialActionEntry
5. PreviousLocationEntry
6. TelephoneEntry - could be like any other entry, but will also have a telephoneParagraph

SingleChoiceEntry:
{
  type: "SingleChoiceEntry",
  locationName: null,
  paragraph: ``,
  goTo: {
      text: "You decide to head to another Arkham location",
      location: "Arkham",
      advance: {
        amount: 1,
        type: "Hour"
      }
    },
  telephone: false,
  previous: [1, 2],
}

MultipleChoiceEntry:
{
  type: "MultipleChoiceEntry",
  locationName: null,
  paragraph: ``,
  goTo: [
    {
      text: "You decide to stay here",
      location: 51,
      advance: {
        amount: 1,
        type: "Hour"
      }
    },
    {
      text: "You decide to escape",
      location: "Arkham",
      advance: {
        amount: 1,
        type: "Hour"
      }
    }
  ],
  telephone: false,
  previous: [52],
}

SkillCheckEntry:
{
  type: "SkillCheckEntry",
  locationName: null,
  paragraph: ``,
  skillCheck: {
    skill: "Sneak",
    passText: "",
    passGoTo: [
      {
        text: "You decide to try a random door",
        location: 52,
        advance: {
          amount: 1,
          type: "Hour"
        }
      },
      {
        text: "Go to any Arkham location.",
        location: "Arkham",
        advance: {
          amount: 1,
          type: "Hour"
        }
      }
    ],
    failText: ``,
    failGoTo: [
      {
        text: "You failed to sneak",
        location: 10,
        advance: {
          amount: 1,
          type: "Hour"
        }
      }
    ]
  },
  goTo: [],
  telephone: false,
  previous: [1],
}

SpecialActionEntry:
{
  type: "SpecialActionEntry",
  locationName: "Arkham First National Bank",
  paragraph: ``,
  specialAction: [
    {
      text: "Make a deposit",
      action: "Deposit",
    },
    {
      text: "Make a withdrawal",
      action: "Withdraw",
    }
  ],
  goTo: [
    {
      text: "You decide to head to another Arkham location",
      location: "Arkham",
      advance: {
        amount: 1,
        type: "Hour"
      }
    }
  ],
  telephone: false,
  previous: ["Arkham"],
}

PreviousLocationEntry:
{
  type: "PreviousLocationEntry",
  locationName: null,
  paragraph: `He's lying.`,
  goTo: "Previous",
  telephone: false,
  previous: [166, 177],
}

TelephoneEntry:
{
  type: "TelephoneEntry",
  locationName: null,
  telephoneParagraph: ``,
  paragraph: `He's lying.`,
  goTo: "Previous",
  telephone: false,
  previous: [166, 177],
}
*/

// TODO: Remove the Arkham location object from this object

const Entries = {
  1: {
    type: "PreviousLocationEntry",
    locationName: null,
    paragraph: `He's lying.`,
    goTo: "Previous",
    telephone: false,
    previous: [166, 177],
  },
  2: {
    type: "MultipleChoiceEntry",
    locationName: null,
    paragraph: `The room is silent. You feel about for the light switch. You find it, and gently press it on. Oops! It's Mrs. Harding's room! What a mistake! You see her turn and rise from the bedclothes, her frightened face screaming. As the scream pierces your ears, you hear the boarders begin to stir. You can stay here or escape to another Arkham location.`,
    goTo: [
      {
        text: "You decide to stay here",
        location: 51,
        advance: {
          amount: 1,
          type: "Hour"
        }
      },
      {
        text: "You decide to escape",
        location: "Arkham",
        advance: {
          amount: 1,
          type: "Hour"
        }
      }
    ],
    telephone: false,
    previous: [52],
  },
  3: {
    type: "SpecialActionEntry",
    locationName: "Arkham First National Bank",
    paragraph: `Deposits and withdrawals are possible between 9 - 3, M·F. If you're Prof. Grunewald, your account is here and you can withdraw up to the amount noted on the investigator sheet, or the current balance as entered in your journal. From here you can go to any Arkham location.`,
    specialAction: [
      {
        text: "Make a deposit",
        action: "Deposit",
      },
      {
        text: "Make a withdrawal",
        action: "Withdraw",
      }
    ],
    goTo: [
      {
        text: "You decide to head to another Arkham location",
        location: "Arkham",
        advance: {
          amount: 1,
          type: "Hour"
        }
      }
    ],
    telephone: false,
    previous: ["Arkham"],
  },
  4: {
    type: "PreviousLocationEntry",
    locationName: null,
    paragraph: `He's lying. And he does not possess the implied skill.`,
    goTo: "Previous",
    telephone: false,
    previous: [76, 166, 177],
  },
  5: {
    type: "SingleChoiceEntry",
    locationName: null,
    paragraph: `You noticed flecks or flakes of dry, transparent material. It looks like skin. Whoever was here was peeling like a water-soaked ceiling! Baffled, you find no answer to this puzzle. No more evidence can be found here.`,
    goTo: [
      {
        text: "Go to any Arkham location.",
        location: "Arkham",
        advance: {
          amount: 1,
          type: "Hour"
        }
      }
    ],
    telephone: false,
    previous: [165],
  },
  6: {
    locationName: null,
    paragraph: `There is a difference between using a phrase book and speaking a language. They speak English at the Athens Bureau of Investigation, you suppose.`,
    goTo: [
      {
        text: "Head to the Athens Hall of Justice",
        location: 87,
        advance: {
          amount: 1,
          type: "Hour"
        }
      }
    ],
    telephone: false,
    previous: [1],
  },
  7: {
    type: "SkillCheckEntry",
    locationName: null,
    paragraph: `The window opens smoothly and you enter. You try to move as quietly as possible.`,
    skillCheck: {
      skill: "Sneak",
      passText: "You realize that you have no idea where Gliere's room is. You go upstairs. All the doors are close; none have names on them.",
      passGoTo: [
        {
          text: "You decide to try a random door",
          location: 52,
          advance: {
            amount: 1,
            type: "Hour"
          }
        },
        {
          text: "Go to any Arkham location.",
          location: "Arkham",
          advance: {
            amount: 1,
            type: "Hour"
          }
        }
      ],
      failText: ``,
      failGoTo: [
        {
          text: "You failed to sneak",
          location: 51,
          advance: {
            amount: 1,
            type: "Hour"
          }
        }
      ]
    },
    goTo: [],
    telephone: false,
    previous: [28, 90],
  },
  8: {
    type: "SingleChoiceEntry",
    locationName: null,
    paragraph: `He takes your refusal without interest. "Very well, sir. I shall return later." He leaves and you stare at the walls of your silent room.`,
    goTo: {
      text: "You need to decide what to do next",
      location: 73,
      advance: {
        amount: 1,
        type: "Hour"
      }
    },
    telephone: false,
    previous: [167],
  },
  9: {
    type: "SkillCheckEntry",
    locationName: null,
    paragraph: `The man is an Egyptian. His posture seems threatening.`,
    skillCheck: {
      skill: "Dodge",
      passText: "You get away successfully",
      passGoTo: [
        {
          text: "Back to next ship activity",
          location: 187,
          advance: {
            amount: 1,
            type: "Hour"
          }
        }
      ],
      failText: ``,
      failGoTo: [
        {
          text: "You failed to dodge",
          location: 10,
          advance: {
            amount: 1,
            type: "Hour"
          }
        }
      ]
    },
    goTo: [],
    telephone: false,
    previous: [47],
  },
  10: {
    type: "CombatEntry",
    locationName: null,
    paragraph: `Attempt a Luck roll.`,
    skillCheck: {
      skill: "Luck",
      passText: "Your investigator is armed, he or she gets weapon of choice in hand before the stranger attacks.",
      // Create a new object that contains all the combat encounters
      combat: "Steward",
      passGoTo: [
        {
          text: "You scuttle back to the next ship activity",
          location: 187,
          advance: {
            amount: 1,
            type: "Hour"
          }
        }
      ],
      failText: ``,
      failGoTo: [
        {
          text: "You couldn't escape or kill the steward",
          location: "TheEnd",
          advance: {
            amount: 1,
            type: "Hour"
          }
        }
      ]
    },
    goTo: [],
    telephone: false,
    previous: [9, 91],
  },
  11: {
    type: "SingleChoiceEntry",
    locationName: null,
    paragraph: `This room is actually just connectd to the adjacent room.`,
    goTo: [
      {
        text: "You hear something",
        location: 141,
        advance: {
          amount: 1,
          type: "Hour"
        }
      }
    ],
    telephone: false,
    previous: [52],
  },
  12: {
    type: "SkillCheckEntry",
    locationName: null,
    paragraph: `The food tasted all right at the time, but now your stomach is churning.Food poisoning! You're really sick!`,
    skillCheck: {
      skill: "Treat Poison",
      passText: "You go on your way",
      passGoTo: [
        {
          text: "It's time to head somewhere else",
          location: "CurrentLocationTable",
          advance: {
            amount: 1,
            type: "Hour"
          }
        }
      ],
      failText: `You spend three hours recovering, losing one Hit Point and one Magic Point`,
      failGoTo: [
        {
          text: "You should head somewhere else",
          location: "CurrentLocationTable",
          advance: {
            amount: 4,
            type: "Hour"
          }
        }
      ]
    },
    goTo: [],
    telephone: false,
    previous: [586],
  },
  13: {
    locationName: null,
    paragraph: `For you, Professor Louis Grunewald, this first day of September, 1931, has been tiring and uncomfortable. Light mist has covered Arkham for most of the day. You held two uninspired undergraduate classes at Miskatonic University. You also met with the new chairman of the Literature Department, a giddy Technocrat. You survey your desk and see that a stack of papers to grade has already formed. You're enjoying your second pipe of the evening when the doorbell rings. To your surprise, it's a telegraphic messenger. 
    
    "It arrived at Kingspoint Head station not more than an hour ago,"the boy says. You sign for it, and slip a dime into the youngster's hand. "Oh, thank you, sir!" You open the envelope and scan the contents. 
    
    ATHENS, GREECE 9/1/31 via Kingspoint Station
    
    IN JAIL FOR ANTIQUITY THEFT STOP NEED HELP STOP CAN YOU COME STOP URGENT STOP SEE CORPORAL ILIONAS, ATHENS BUREAU OF INVESTIGATION. 
    
    ~GLIERE~ 
    
    My goodness, you think. Imagine! Dotty old Gliere in prison! You recall that he had gone to Greece to work on his book concerning primitive myth. What has he gotten himself into? Should you wire money? You recall all the amusing discussions you've had with him, and a sudden insight lets you understand that Tibor Gliere had no close friends - except you. Should you go help him? You suppose the University will grant you leave. But, do you want to go?

    With uncommon speed you decide to go to Athens to help Gliere. You write him a wire, and another to Ernest Holt, a wealthy New York financier and a good friend of yours. If you get into hot water, Holt will help. And you decide to keep him posted on your progress. You give both telegrams to the waiting messenger, along with the necessary fund.

    What to do now? You have four dollars left in your wallet - you'll go to the bank first thing in the morning. Trans-Atlantic schedules - the Advertiser surely carries that information. As you pack, you wonder if you should check Gliere's room at Mrs. Harding's boarding house. Maybe you could get a clue about Gliere's activities or a hint about his arrest.
    
    Your passpost's in order; your clothes and sundries are packed. You'd best turn in. You're going on a little trip. When you awake, it is Sept. 2`,
    goTo: [
      {
        text: "The next day",
        location: 102,
        advance: {
          amount: 1,
          type: "Day"
        }
      },
    ],
    telephone: false,
    previous: [1],
  },
  102: (currentDate) => currentDate > new Date(1931, 8, 1) && locationsVisited.includes(102)
    ? {
      locationName: null,
      paragraph: "It is after September 8th.",
      goTo: [
        {
          text: "Something seems amiss",
          location: 147,
          advance: {
            amount: 1,
            type: "Hour"
          }
        },
      ],
      telephone: false,
      previous: [],
    }
    : currentCharacter.name !== "Louis Grunewald"
      ? {
        locationName: null,
        paragraph: "You are not Louis Grunewald.",
        goTo: [
          {
            text: "Something seems amiss",
            location: 120,
            advance: {
              amount: 1,
              type: "Hour"
            }
          },
        ],
        telephone: false,
        previous: [],
      }
      : {
        locationName: null,
        paragraph: "You rest and have a repast. You may travel to any Arkham location.",
        goTo: [
          {
            text: "Go to any Arkham location",
            location: "Arkham",
            advance: {
              amount: 1,
              type: "Hour"
            }
          },
        ],
        telephone: false,
        previous: [],
      },
  120: {
    locationName: null,
    paragraph: " The back door is ajar. You enter the small house and a strange, repellent odor assaults your nostrils. Then you hear a car pull away from in front of the house. You look out, but see only a long black sedan disappear around the corner. Everything looks okay until you enter Grunewald's office. It has been totally ransacked. Books and papers are everywhere. You can go to any Arkham location, or you can make a search.",
    goTo: [
      {
        text: "Go to any Arkham location",
        location: "Arkham",
        advance: {
          amount: 1,
          type: "Hour"
        }
      },
      {
        text: "Search Grunewald's Office",
        location: 165,
        advance: {
          amount: 1,
          type: "Hour"
        }
      }
    ],
    telephone: false,
    previous: [],
  },
  147: {
    locationName: null,
    paragraph: "Grunewald's room looks as though someone departed hastily.",
    goTo: [
      {
        text: "Nothing else to see here",
        location: 102,
        advance: {
          amount: 1,
          type: "Hour"
        }
      },
    ],
    telephone: false,
    previous: [102],
  },
  "Arkham": [
    {
      open: {
        days: [2, 3, 4, 5, 6],
        hours: [9, 10, 11, 12, 13, 14, 15],
      },
      goTo: [
        {
          text: "Arkham First National Bank",
          location: 3,
          advance: {
            amount: 1,
            type: "Hour"
          }
        }
      ],
      telephone: false,
    },
    {
      open: {
        days: [1, 2, 3, 4, 5, 6, 7],
        hours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      },
      goTo: [
        {
          text: "Hospital",
          location: 585,
          advance: {
            amount: 1,
            type: "Hour"
          }
        }
      ],
      telephone: false,
    },
    {
      open: {
        days: [1, 2, 3, 4, 5, 6, 7],
        hours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      },
      goTo: [
        {
          text: "Arkham (Boston & Maine RR) Depot",
          location: 16,
          advance: {
            amount: 1,
            type: "Hour"
          }
        }
      ],
      telephone: true,
    },
    {
      open: {
        days: [2, 3, 4, 5, 6, 7],
        hours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      },
      goTo: [
        {
          text: "Arkham General Store",
          location: 38,
          advance: {
            amount: 1,
            type: "Hour"
          }
        }
      ],
      telephone: false,
    },
    {
      open: {
        days: [2, 3, 4, 5, 6],
        hours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      },
      goTo: [
        {
          text: "Arkham Advertiser Newspaper",
          location: 60,
          advance: {
            amount: 1,
            type: "Hour"
          }
        }
      ],
      telephone: true,
    },
    {
      open: {
        days: [2, 3, 4, 5, 6],
        hours: [9, 10, 11, 12, 13, 14, 15, 16],
      },
      goTo: [
        {
          text: "Harding House",
          location: 113,
          advance: {
            amount: 1,
            type: "Hour"
          }
        }
      ],
      telephone: false,
    },
    {
      open: {
        days: [2, 3, 4, 5, 6],
        hours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      },
      goTo: [
        {
          text: "Miskatonic University",
          location: 82,
          advance: {
            amount: 1,
            type: "Hour"
          }
        }
      ],
      telephone: true,
    },
    {
      open: {
        days: [2, 3, 4, 5, 6],
        hours: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      },
      goTo: [
        {
          text: "Bee's Diner",
          location: 593,
          advance: {
            amount: 1,
            type: "Hour"
          }
        }
      ],
      telephone: false,
    },
    {
      open: {
        days: [2, 3, 4, 5, 6],
        hours: [9, 10, 11, 12, 13, 14, 15],
      },
      goTo: [
        {
          text: "Grunewald's Home",
          location: 102,
          advance: {
            amount: 1,
            type: "Hour"
          }
        }
      ],
      telephone: false,
    },
  ]
}