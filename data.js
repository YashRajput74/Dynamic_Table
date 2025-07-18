/*Dynamic Data*/
var fields = ["Name", "Role", "Type", "Hitpoints", "Physical Attack", "Mana"];
var data = [
    {
        name: "Lukas",
        role: "Fighter",
        type: "Regen/Damage",
        HitPoint: 2550,
        PhysicalAttack: 119,
        Mana: 0
    },
    {
        name: "Suyou",
        role: "Assassian",
        type: "Chase/Burst",
        HitPoint: 2390,
        PhysicalAttack: 124,
        Mana: 0
    },
    {
        name: "Zhuxin",
        role: "Mage",
        type: "Damage/Crowd Control",
        HitPoint: 2280,
        PhysicalAttack: 115,
        Mana: 1300
    },
    {
        name: "Chip",
        role: "Tank",
        type: "Support/Crowd Control",
        HitPoint: 2481,
        PhysicalAttack: 112,
        Mana: 500
    },
    {
        name: "Ixia",
        role: "Marksman",
        type: "Finisher/Damage",
        HitPoint: 2320,
        PhysicalAttack: 100,
        Mana: 500
    },
    {
        name: "Arlott",
        role: "Fighter",
        type: "Charge/Burst",
        HitPoint: 2450,
        PhysicalAttack: 120,
        Mana: 0
    },
    {
        name: "Joy",
        role: "Assassian",
        type: "Chase/Damage",
        HitPoint: 2519,
        PhysicalAttack: 119,
        Mana: 0
    },
    {
        name: "Ferdrinn",
        role: "Tank",
        type: "Damage/Chase",
        HitPoint: 2600,
        PhysicalAttack: 125,
        Mana: 0
    },
    {
        name: "Floryn",
        role: "Support",
        type: "Poke/Guard",
        HitPoint: 2280,
        PhysicalAttack: 119,
        Mana: 500
    },
    {
        name: "Edith",
        role: "Tank",
        type: "Control/Burst",
        HitPoint: 2440,
        PhysicalAttack: 110,
        Mana: 0
    },
    {
        name: "Valentina",
        role: "Mage",
        type: "Burst/Finisher",
        HitPoint: 2580,
        PhysicalAttack: 115,
        Mana: 500
    },
    {
        name: "Aulus",
        role: "Fighter",
        type: "Damage/Crowd Control",
        HitPoint: 2580,
        PhysicalAttack: 90,
        Mana: 500
    },
    {
        name: "Phoveus",
        role: "Fighter",
        type: "Regen/Damage",
        HitPoint: 2650,
        PhysicalAttack: 132,
        Mana: 0
    },
    {
        name: "Gloo",
        role: "Tank",
        type: "Regen/Control",
        HitPoint: 2710,
        PhysicalAttack: 120,
        Mana: 500
    },
    {
        name: "Yve",
        role: "Mage",
        type: "Poke/Burst",
        HitPoint: 2530,
        PhysicalAttack: 115,
        Mana: 500
    },
    {
        name: "Brody",
        role: "Marksman",
        type: "Finisher/Burst",
        HitPoint: 2290,
        PhysicalAttack: 105,
        Mana: 500
    },
    {
        name: "Barats",
        role: "Tank",
        type: "Damage/Crowd Control",
        HitPoint: 2450,
        PhysicalAttack: 135,
        Mana: 500
    },
    {
        name: "Khaleed",
        role: "Fighter",
        type: "Damage/Regen",
        HitPoint: 2600,
        PhysicalAttack: 109,
        Mana: 0
    },
    {
        name: "Bendetta",
        role: "Assassian",
        type: "Chase/Burst",
        HitPoint: 2410,
        PhysicalAttack: 113,
        Mana: 500
    },
    {
        name: "Luo Yi",
        role: "Mage",
        type: "Support/Crowd Control",
        HitPoint: 2480,
        PhysicalAttack: 107,
        Mana: 500
    },
    {
        name: "Yu Zhong",
        role: "Fighter",
        type: "Regen/Damage",
        HitPoint: 2520,
        PhysicalAttack: 129,
        Mana: 0
    },
    {
        name: "Cecilion",
        role: "Mage",
        type: "Poke/Burst",
        HitPoint: 2335,
        PhysicalAttack: 105,
        Mana: 700
    },
    {
        name: "Lylia",
        role: "Mage",
        type: "Push/Damage",
        HitPoint: 2380,
        PhysicalAttack: 113,
        Mana: 500
    },
    {
        name: "Guinevere",
        role: "Fighter",
        type: "Burst/Magic Damage",
        HitPoint: 2350,
        PhysicalAttack: 126,
        Mana: 0
    },
    {
        name: "Khufra",
        role: "Tank",
        type: "Inititator/Crowd Control",
        HitPoint: 2670,
        PhysicalAttack: 117,
        Mana: 500
    },
    {
        name: "Badang",
        role: "Fighter",
        type: "Charge/Burst",
        HitPoint: 2530,
        PhysicalAttack: 111,
        Mana: 0
    },
    {
        name: "Faramis",
        role: "Support",
        type: "Guard/Charge",
        HitPoint: 2422,
        PhysicalAttack: 118,
        Mana: 500
    },
    {
        name: "Kadita",
        role: "Mage",
        type: "Burst/Charge",
        HitPoint: 2370,
        PhysicalAttack: 105,
        Mana: 500
    },
    {
        name: "Minsithar",
        role: "Fighter",
        type: "Initiator/Crowd Control",
        HitPoint: 2520,
        PhysicalAttack: 121,
        Mana: 500
    },
    {
        name: "Harith",
        role: "Mage",
        type: "Chase/Damage",
        HitPoint: 2280,
        PhysicalAttack: 114,
        Mana: 500
    },
    {
        name: "Thamuz",
        role: "Fighter",
        type: "Chase/Damage",
        HitPoint: 2580,
        PhysicalAttack: 107,
        Mana: 0
    },
    {
        name: "Hanzo",
        role: "Assassian",
        type: "Poke/Burst",
        HitPoint: 2435,
        PhysicalAttack: 108,
        Mana: 0
    },
    {
        name: "Lunox",
        role: "Mage",
        type: "Burst/Damage",
        HitPoint: 2610,
        PhysicalAttack: 115,
        Mana: 500
    },
    {
        name: "Leomard",
        role: "Fighter",
        type: "Chase/Burst",
        HitPoint: 2560,
        PhysicalAttack: 126,
        Mana: 0
    },
    {
        name: "Vale",
        role: "Mage",
        type: "Burst/Crowd Control",
        HitPoint: 2280,
        PhysicalAttack: 115,
        Mana: 500
    },
    {
        name: "Claude",
        role: "Marksman",
        type: "Burst/Chase",
        HitPoint: 2250,
        PhysicalAttack: 100,
        Mana: 0
    },
    {
        name: "Alduos",
        role: "Fighter",
        type: "Burst/Support",
        HitPoint: 2490,
        PhysicalAttack: 129,
        Mana: 500
    },
    {
        name: "Selena",
        role: "Assassian",
        type: "Initiator/Finisher",
        HitPoint: 2280,
        PhysicalAttack: 110,
        Mana: 500
    },
    {
        name: "Kaja",
        role: "Support/Fighter",
        type: "Control/ Charge",
        HitPoint: 2431,
        PhysicalAttack: 120,
        Mana: 500
    },
    {
        name: "Uranus",
        role: "Tank",
        type: "Regen",
        HitPoint: 2380,
        PhysicalAttack: 115,
        Mana: 500
    },
    {
        name: "Pharsa",
        role: "Mage",
        type: "Burst/Poke",
        HitPoint: 2300,
        PhysicalAttack: 109,
        Mana: 500
    },
    {
        name: "Lancelot",
        role: "Assassian",
        type: "Chase/Burst",
        HitPoint: 2390,
        PhysicalAttack: 124,
        Mana: 500
    },
    {
        name: "Argus",
        role: "Fighter",
        type: "Charge/Burst",
        HitPoint: 2450,
        PhysicalAttack: 111,
        Mana: 0
    },
    {
        name: "Grock",
        role: "Tank",
        type: "Crowd Control/Initiator",
        HitPoint: 2710,
        PhysicalAttack: 135,
        Mana: 0
    },
    {
        name: "Karrie",
        role: "Marksman",
        type: "Finisher/Damage",
        HitPoint: 2278,
        PhysicalAttack: 120,
        Mana: 500
    },
    {
        name: "Roger",
        role: "Fighter",
        type: "Finisher/Burst",
        HitPoint: 2530,
        PhysicalAttack: 128,
        Mana: 500
    },
    {
        name: "Aurora",
        role: "Mage",
        type: "Crowd Control/Poke",
        HitPoint: 2380,
        PhysicalAttack: 110,
        Mana: 500
    },
    {
        name: "Hilda",
        role: "Fighter/Tank",
        type: "Damage/Regen",
        HitPoint: 2680,
        PhysicalAttack: 123,
        Mana: 0
    },
    {
        name: "Johnson",
        role: "Tank",
        type: "Support/Crowd Control",
        HitPoint: 2700,
        PhysicalAttack: 120,
        Mana: 0
    },
    {
        name: "Moskov",
        role: "Marksman",
        type: "Finisher/Chase",
        HitPoint: 2255,
        PhysicalAttack: 125,
        Mana: 500
    },
    {
        name: "Yi Sun Shi",
        role: "Marksman",
        type: "Finisher/Chase",
        HitPoint: 2570,
        PhysicalAttack: 95,
        Mana: 500
    }

];
var values = [10, 15, 25];