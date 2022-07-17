const Entries = {
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
  102: (currentDate) => currentDate > new Date(1931, 8, 1) && locationsVisited.contains(102)
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
        paragraph: "You are not are not Louis Grunewald.",
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
    paragraph: " The back door is ajar. You enter the small house and a strange, repellent odor assaults your nostrils. Then you hear a car pull away from in front of the house. You look out, but see only a long black sedan disappear around the corner. Everything looks okay until you enter Grunewald's office. It has been totally ransacked. Books and papers are everywhere. You can go to any Arkham location, or you can make a search: to search, spend one hour here.",
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
    "Arkham":
      [
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
}