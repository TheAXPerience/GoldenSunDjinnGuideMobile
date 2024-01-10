// temporary file for the djinn index, used for the details page
// each djinn needs id, name, image, game, location, description, blurb

export const DJINN_INDEX = {
    flint: {
        name: 'Flint',
        element: 'venus',
        goldensun: {
            id: 1,
            image: 'venus',
            location: 'Outside of Vale',
            description: 'Joins automatically',
            blurb: 'Attacks with the force of Venus'
        },
        lostage: {
            id: 106,
            image: 'venus',
            location: 'Contigo',
            description: 'Joins with Isaac and friends',
            blurb: 'Attacks with the force of Venus'
        },
        darkdawn: {
            id: 201,
            image: 'flint',
            location: 'Outside of Lookout Cabin',
            description: 'Joins automatically',
            blurb: 'Attacks with the force of Venus'
        }
    },
    forge: {
        name: 'Forge',
        element: 'mars',
        goldensun: {
            id: 2,
            image: 'mars',
            location: 'Goma Cave',
            description: 'Found after solving a log puzzle',
            blurb: 'Tempers weapons with extreme heat'
        }
    },
    gust: {
        name: 'Gust',
        element: 'jupiter',
        goldensun: {
            id: 3,
            image: 'jupiter',
            location: 'Bilibin',
            description: 'Found in the underground tunnel',
            blurb: 'Strikes multiple times with sharp wind'
        }
    },
    fever: {
        name: 'Fever',
        element: 'mars',
        goldensun: {
            id: 4,
            image: 'mars',
            location: 'Imil',
            description: 'Hidden in a cave behind an ice puzzle',
            blurb: 'Strikes the foe with deluding heat'
        }
    },
    sleet: {
        name: 'Sleet',
        element: 'mercury',
        goldensun: {
            id: 5,
            image: 'mercury',
            location: 'Mercury Lighthouse',
            description: 'Hidden behind a waterfall',
            blurb: 'Pelts ice at the enemy, lowering attack'
        },
        darkdawn: {
            id: 203,
            image: 'sleet',
            location: 'Barrel',
            description: 'Joins automatically with Rief',
            blurb: 'Pelts ice at the enemy, lowering attack'
        }
    },
    echo: {
        name: 'Echo',
        element: 'venus',
        lostage: {
            id: 101,
            image: 'venus',
            location: 'Outside Daila',
            description: 'Joins automatically',
            blurb: 'Strikes an enemy twice'
        }
    },
    breath: {
        name: 'Breath',
        element: 'jupiter',
        lostage: {
            id: 102,
            image: 'jupiter',
            location: 'Shrine of the Sea God',
            description: 'Joins after solving a push puzzle',
            blurb: 'Heals with the power of wind'
        }
    },
    cannon: {
        name: 'Cannon',
        element: 'mars',
        lostage: {
            id: 103,
            image: 'mars',
            location: 'Daikon Plateau',
            description: 'Joins after solving a Pound puzzle',
            blurb: 'Fires a giant fireball at an enemy'
        }
    },
    zagan: {
        name: 'Zagan',
        element: 'summon',
        lostage: {
            id: 104,
            image: 'zagan',
            location: 'A cave outside of Madra',
            description: 'Solve a push puzzle',
            blurb: 'Summons the demon lord, Zagan, with his flaming axe'
        }
    },
    spark: {
        name: 'Spark',
        element: 'mars',
        lostage: {
            id: 105,
            image: 'mars',
            location: 'Mikasalla',
            description: 'Come back with Scoop',
            blurb: 'Spark life back into a dead corpse'
        }
    },
    flower: {
        name: 'Flower',
        element: 'venus',
        darkdawn: {
            id: 202,
            image: 'flower',
            location: 'That one gate',
            description: 'Use Whirlwind on a bunch of flowers on top of a cliff',
            blurb: 'Springs life into the petals blown in the wind'
        }
    },
    doldrum: {
        name: 'Doldrum',
        element: 'jupiter',
        darkdawn: {
            id: 204,
            image: 'doldrum',
            location: 'The Zodiac Ruins',
            description: 'Blast it with a fireball',
            blurb: 'Stops the air from moving'
        }
    },
    aurora: {
        name: 'Aurora',
        element: 'mars',
        darkdawn: {
            id: 205,
            image: 'aurora',
            location: 'The Final Dungeon',
            description: 'Walk up the stairs',
            blurb: 'Shines a light that raptures every djinni back to life'
        }
    },
    iris: {
        name: 'Iris',
        element: 'summon',
        darkdawn: {
            id: 206,
            image: 'iris',
            location: 'Crossbone Isle',
            description: 'Reach the bottom of the island and defeat Dullahan',
            blurb: 'Brings everything to life while burning the earth with the power of the sun'
        }
    }
};