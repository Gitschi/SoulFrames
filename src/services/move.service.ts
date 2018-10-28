import { Move } from "../models/move.model";

// Move template
// new Move("", "", "", null, null, null, null, null),
// new Move("Soul Charge", "4A+B+G", "m", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, false, true),
// "Breakable only by Voldo & Astaroth"

/*
      new Move("", "A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("", "4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("", "ZA+G", "H", null, null, null, null, null, "", false, false, false, false, false, false, true),
      new Move("", "XA+G", "H", null, null, null, null, null, "", false, false, false, false, false, false, true),
      new Move("", "VA+G", "H", null, null, null, null, null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
*/

export class MoveService{

  Astaroth = [
    // Reversal Edge Attacks
    [
      new Move("Woebringer", "B+G", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Woebringer", "b+g", "M", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Ax of Woe", "rA", "H", null, null, null, null, null, null, false, true),
      new Move("Rending Torment", "rB", "M", null, null, null, null, null, "Shifts to attack throw upon hit/Shifts to clash upon guard", false, true, false, false, false, false, true, true),
      new Move("Eviscerate", "rK", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Final Anguish", "A+B+K", "H", null, null, null, null, null, null, false, false, false, false, false, false, true, false, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Bringer of Ruin", "S1AA", "LL", null, null, null, null, null, "Revenge attack/1st hit can be held", false, false, false, false, false, true),
      new Move("Ruinous Discus Breaker", "S1AB", "LM", null, null, null, null, null, "Revenge attack/1st hit can be held", false, false, false, false, false, true, false, true),
      new Move("Decimation Charge", "S4AA", "HH", null, null, null, null, null, "Revenge attack/Can be delayed/2nd hit shifts to attack throw upon hit", false, false, false, false, false, true, true),
      new Move("Cerberus Surge", "S236A", "MMMMMMMMM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Unstoppable Great Divide", "SBB", "MM", null, null, null, null, null, null, false, false, false, false, false, true, false, false, false, true),
      new Move("Savage Great Divine", "SBb", "MM", null, null, null, null, null, null, false, false, false, false, false, true, false, false, false, true),
      new Move("Apocalypse Pound", "SxKA+G", "MMM", null, null, null, null, null, null, false, false, false, false, false, true, true),
      new Move("Apocalypse Drop", "SxK4A+GA+G", "MMM", null, null, null, null, null, null, false, false, false, false, false, true, true),
      new Move("Ruin Slam", "S6B", "M", null, null, null, null, null, "Revenge attack/Can be held", false, false, false, false, false, true),
      new Move("Blood Tide Rush", "S6BA", "MMMMMMMMMM", null, null, null, null, null, "Revenge attack", false, false, false, false, false, true),
      new Move("Cyclopean Swipe", "S6BB", "MM", null, null, null, null, null, "Revenge attack", false, false, false, false, false, true, false, true),
      new Move("Ruinous Gorefang", "S4BB", "MM", null, null, null, null, null, "1st hit can be held", false, false, false, false, false, true, false, true),
      new Move("Annihilation Gorefang", "S4Bb", "MM", null, null, null, null, null, null, false, false, false, false, false, true, false, false, true),
      new Move("Victorious Charge", "S4KA", "MH", null, null, null, null, null, "Revenge attack/1st hit can be held/2nd hit can be delayed", false, false, false, false, false, true),
      new Move("Ruthless Assault", "S4Ka", "MM", null, null, null, null, null, "Revenge attack", false, false, false, false, false, true),
      new Move("Malicious Torment", "S4B+K", "LLL", null, null, null, null, null, "Revenge attack", false, false, true, false, false, true),
      new Move("Apocalypse Cannon", "@|*B", "M", null, null, null, null, null, null, false, true, false, false, false, true, false, true),
      new Move("Apocalypse Rush", "#|^|(KK", "MM", null, null, null, null, null, "Revenge attack/1st hit can be held", false, false, false, false, false, true),
      new Move("Vicious Fury", "S#|^|(A+G", "H", null, null, null, null, null, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, true, true),
      new Move("Cursed Altar", "S!|$|uA+G", "H", null, null, null, null, null, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, true, true),
      new Move("Apocalypse Pound", "S2A+G", "M", null, null, null, null, null, "Breakable", false, false, false, false, false, true, true), // Against crouching opponent
      new Move("Apocalypse Drop", "S1A+GA+G", "M", null, null, null, null, null, "Breakable", false, false, false, false, false, true, true), // Against crouching opponent
      new Move("Apocalypse Destroyer", "S236A+GA+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, true, true),
      new Move("Ride of the Wicked", "S214A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, true, true),
      new Move("Wicked Twister of Carnage", "S214A+G2|8A", "H", null, null, null, null, null, null, false, false, false, false, false, true, true)
    ],
    // Horizontal Moves
    [
      new Move("Annihilation", "AA", "HH", null, null, null, null, null, "Can be delayed", false, false, false, false, false, false, true, false, false, true),
      new Move("Annihilation(counter)", "HAA", "HH", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true, false, false, true),
      new Move("Destruction", "AB", "HM", null, null, null, null, null, "Can be delayed"),
      new Move("Hades Control", "6A", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Hades Control(counter)", "H6A", "H", null, null, null, null, null, "Shits to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Ax Blow", "3A", "M", null, null, null, null, null),
      new Move("Hades Break", "2A", "L", null, null, null, null, null, null, false, false, true),
      new Move("Discus", "1A", "L", null, null, null, null, null, null, false, false, true),
      new Move("Double Discus", "1aA", "LL", null, null, null, null, null, null, false, false, true),
      new Move("Discus Breaker", "1aB", "LM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Decimation", "4AA", "HH", null, null, null, null, null, "Can be delayed/Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Decimation", "4Aa", "HH", null, null, null, null, null, null, false, false, false, false, false, false, true, true),
      new Move("Grip Shot to Ax Volcano", "4AB", "HM", null, null, null, null, null, "Can be delayed"),
      new Move("Poseidon Tide", "214A", "M", null, null, null, null, null, "Shifts to attack throw upon hit/Can move using D-pad", false, false, false, false, false, false, true),
      new Move("Poseidon Tide Rush", "214AAAAAA", "MMMMMM", null, null, null, null, null, "Can move using D-pad"),
      new Move("Hades Break", "CA", "L", null, null, null, null, null, null, false, false, true),
      new Move("Reverse Spiral Ax", "WA", "H", null, null, null, null, null),
      new Move("Great Annihilation", "JA", "H", null, null, null, null, null),
      new Move("Reverse Ax Split", "TA", "H", null, null, null, null, null),
      new Move("Lower Hades Split", "T2A", "S", null, null, null, null, null, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Great Divide", "BB", "MM", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Great Divide", "Bb", "MM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Command Kicks", "xKK", "MMM", null, null, null, null, null, "2nd hit can be delayed"),
      new Move("Castigate", "xKA+G", "MMM", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Bluster", "xK4A+G", "MMM", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Ax Offering", "x6B", "MM", null, null, null, null, null, "2nd hit can be delayed", false, false, false, false, false, false, true),
      new Move("Ax Offering(counter)", "Hx6B", "MM", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Ax Side Divide", "Bx6", "MM", null, null, null, null, null),
      new Move("Ax Side Cannon", "6B", "M", null, null, null, null, null),
      new Move("Swipe", "6bB", "MM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Ax Volcano", "3B", "M", null, null, null, null, null),
      new Move("Ax Volcano", "3b", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Hades", "2B", "M", null, null, null, null, null, null, false, false, true),
      new Move("Ax Grave", "1B", "L", null, null, null, null, null, "Can be held", false, false, true),
      new Move("Bear Fang", "4B", "M", null, null, null, null, null),
      new Move("Bear Fang", "4b", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Gorefang", "4bB", "MM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Gorefang", "4bb", "MM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Dark Split", "CB", "M", null, null, null, null, null, null, false, false, true),
      new Move("Hades Rising", "WB", "M", null, null, null, null, null),
      new Move("Hades Rising", "Wb", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Greater divide", "JB", "M", null, null, null, null, null),
      new Move("Reverse Dark Split", "TB", "M", null, null, null, null, null),
      new Move("Lower Dark Split", "T2B", "M", null, null, null, null, null, null, false, false, true)
    ],
    // Kicks
    [
      new Move("Moloch's Vise", "K", "H", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Moloch's Vise", "k", "H", null, null, null, null, null, "Shifts to attack throw upon hit", false, true, false, false, false, false, true),
      new Move("Hades Knee", "6K", "M", null, null, null, null, null),
      new Move("Moloch's Revenge", "3K", "MM", null, null, null, null, null),
      new Move("Bull Low Kick", "2K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Reverse Tamer", "1KA", "LH", null, null, null, null, null),
      new Move("Dark Tamer", "4KA", "MH", null, null, null, null, null, "1st hit can be held/2nd hit can be delayed"),
      new Move("Dark Coercion", "4Ka", "MM", null, null, null, null, null),
      new Move("Bull Kick", "CK", "L", null, null, null, null, null, null, false, false, true),
      new Move("Bull Rage", "C3K", "M", null, null, null, null, null),
      new Move("Rising Torment", "WKA", "MH", null, null, null, null, null),
      new Move("Rising Carnage", "Wka", "MM", null, null, null, null, null),
      new Move("Great Kick", "JK", "M", null, null, null, null, null),
      new Move("Reverse Bull Kick", "TK", "H", null, null, null, null, null),
      new Move("Lower Sweep", "T2K", "L", null, null, null, null, null, null, false, false, true)      
    ],
    // Simultaneous Press Moves
    [
      new Move("Eternal Damnation", "A+B", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Minotaur Crush", "6A+B", "M", null, null, null, null, null, null, false, true),
      new Move("Titan Ax", "2A+B", "M", null, null, null, null, null),
      new Move("Breath of Hades", "4A+B", "M", null, null, null, null, null),
      new Move("Breath of Hades", "4a+b", "M", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true, false, true),
      new Move("Flip Titan Ax", "8A+B", "M", null, null, null, null, null),
      new Move("Guard Crusher", "B+K", "H", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Body Splash", "6B+K", "M", null, null, null, null, null),
      new Move("Body Splash", "6b+k", "M", null, null, null, null, null, "Revenge attack"),
      new Move("Hades Crush", "2B+K", "M", null, null, null, null, null),
      new Move("Hymn to Destruction", "2B+KA+G", "M", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Hymn to Annihilation", "2B+K4A+G", "M", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Ax Lower Cannon", "4B+K", "LLL", null, null, null, null, null, null, false, false, true),
      new Move("Ax Lower Cannon", "4B+KvB", "LLL", null, null, null, null, null, null, false, false, false, false, false, false, true), //During close range hit
      new Move("Flying Divide", "9B+K", "M", null, null, null, null, null),
      new Move("Flying Divide", "9b+k", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Demented Moon", "236B+K", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Side Divide", "TB+K", "M", null, null, null, null, null)
    ],
    // 8-Way Run Moves
    [
      new Move("Tornado Spike", "#|^|(A+B", "MM", null, null, null, null, null),
      new Move("Tornado Spike", "#|^|(Ab", "MM", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Poseidon Crest", "@|*AA", "MM", null, null, null, null, null),
      new Move("Hades Divide", "!|$|uA", "M", null, null, null, null, null),
      new Move("Hades Divide", "!|$|ua", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Ax Crash", "#|^|(B", "H", null, null, null, null, null, null, false, true),
      new Move("Hades Cannon", "@|*B", "M", null, null, null, null, null, null, false, true),
      new Move("Azazel Tackle", "!|uBK", "MM", null, null, null, null, null, "2nd hit can be delayed"),
      new Move("Canyon Creation", "$B", "M", null, null, null, null, null, null, false, false, true),
      new Move("Canyon Creation", "$b", "M", null, null, null, null, null, null, false, false, true, false, false, false, false, false, true, true),
      new Move("Bull Rush", "#|^|(K", "M", null, null, null, null, null),
      new Move("Bone Grinder", "#|^|(kK", "MM", null, null, null, null, null, null, false, true),
      new Move("Stamp of Hades", "@|*K", "M", null, null, null, null, null),
      new Move("Stamp of Hades", "@|*k", "m", null, null, null, null, null, "Becomes a low attack when at distance", false, false, false, false, false, false, false, true),
      new Move("Lower Command Kick", "!|$|uK", "M", null, null, null, null, null, null, false, false, true),
      new Move("Atlas Punishment", "#|^|(A+B", "M", null, null, null, null, null),
      new Move("Titan Ax", "@A+B", "M", null, null, null, null, null),
      new Move("Flip Titan Ax", "*A+B", "M", null, null, null, null, null),
      new Move("Vicious Madness", "#|^|(A+G", "H", null, null, null, null, null, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, false, true),
      new Move("Underworld Pull", "#|^|(A+G2", "M", null, null, null, null, null, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, false, true), // Against crouching opponent
      new Move("Cursed Earth", "!|$|uA+G", "H", null, null, null, null, null, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, false, true),
      new Move("Cursed Flesh", "!|$|uA+Gbj", "H", null, null, null, null, null, "2nd hit can be held", false, false, false, false, false, false, true),
      new Move("Uproot", "!|$|uA+G2", "M", null, null, null, null, null, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, false, true), // Against crouching opponent
      new Move("Sliding", "RK", "L", null, null, null, null, null)
    ],
    // Throws
    [
      new Move("Hades Destroyer", "A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Colossus", "6A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Festival of Havoc", "4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Beat Down", "ZA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("On Silent Wings", "XA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Death Crush", "VA+G", "H", null, null, null, null, null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Maelstrom Divide", "8A+G", "M", null, null, null, null, null, "Not breakable", false, false, false, false, false, false, true), // against crouching opponent
      new Move("Bludgeoning Crush", "2A+G", "M", null, null, null, null, null, "Breakable", false, false, false, false, false, false, false, true), // against crouching opponent
      new Move("Apocalypse Pound", "S2A+G", "M", null, null, null, null, null, "Breakable", false, false, false, false, false, true, false, true), // against crouching opponent
      new Move("Drop of Lava", "1A+G", "M", null, null, null, null, null, "Breakable", false, false, false, false, false, false, false, true), // against crouching opponent
      new Move("Apocalypse Drop", "S1A+GA+G", "M", null, null, null, null, null, "Breakable", false, false, false, false, false, true, true),
      new Move("Wrath of the Accursed", "A+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true), // against mid-air opponent
      new Move("Wrath of the Damned", "4A+G", "H", null, null, null, null, null, null, false, true, false, false, false, false, true), // against mid-air opponent
      new Move("Titan Bomb", "236A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Titan Bomb(fast)", "236A+GF", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Apocalypse Destroyer", "S236A+GA+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, true, true),
      new Move("Flight of the Wicked", "214A+G", "H", null, null, null, null, null, "Breakable/Can be held/Unable to break when held", false, false, false, false, false, false, true),
      new Move("Flight of the Wicked(fast)", "214A+Gj", "H", null, null, null, null, "Breakable/Can be held/Unable to break when held", null, false, false, false, false, false, false, true),
      new Move("Wicked Twister", "214A+G2|8A", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Ride of the Wicked", "S214A+G", "H", null, null, null, null, null, "Breakable/Can be held/Unable to break when held", false, false, false, false, false, true, true),
      new Move("Wicked Twister of Carnage", "S214A+G2|8A", "H", null, null, null, null, null, null, false, false, false, false, false, true, true),
      new Move("Obsidian Drop", "28A+G", null, null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Obsidian Drop(fast)", "28A+GF", null, null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Brutal Grasp", "3A+G", null, null, null, null, null, null, "Not breakable", false, false, false, false, false, false, true),
      new Move("Vicious Madness", "#|^|(A+G", "", null, null, null, null, null, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, false, true),
      new Move("Vicious Fury", "S#|^|(A+G", "H", null, null, null, null, null, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, true, true),
      new Move("Underworld Pull", "#|^|(A+G2", "M", null, null, null, null, null, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, false, true), // Against crouching opponent
      new Move("Cursed Earth", "!|$|uA+G", "H", null, null, null, null, null, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, false, true),
      new Move("Cursed Flesh", "!|$|uA+Gbj", "H", null, null, null, null, null, "2nd hit can be held", false, false, false, false, false, false, true),
      new Move("Cursed Altar", "S!|$|uA+G", "H", null, null, null, null, null, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, true, true),
      new Move("Uproot", "!|$|uA+G2", "M", null, null, null, null, null, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, false, true) // Against crouching opponent
    ]
  ]

  Azwel = [
    // Reversal Edge Attacks
    [
      new Move("Director of Fate", "B+G", "MMM", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Director of Fate", "b+g", "MMM", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Standing Ovation", "rA", "H", null, null, null, null, null, null, false, true),
      new Move("Standing Ovation ~ Beauty of Balance", "rAK", "H", null, null, null, null, null, null, true, true),
      new Move("Standing Ovation ~ Tragedy of War", "rA6K", "H", null, null, null, null, null, null, true, true),
      new Move("Standing Ovation ~ Comedy of Errors", "rA4K", "H", null, null, null, null, null, null, true, true),
      new Move("Nebulous Critique", "rBB", "MMMMM", null, null, null, null, null, "Shifts to clash upon guard/Switches to Almighty mode"),
      new Move("Disillusionment", "rK", null, null, null, null, null, null, "Dodges opponent's attack", true)
    ],
    // Gauge Attacks
    [
      new Move("From Science, with Love", "A+B+K", "M", null, null, null, null, null, null, false, false, false, false, false, false, true, false, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("I Shall Save Humanity!", "S6A+B+K", "MMMM", null, null, null, null, null, null, false, false, false, false, false, true, true, false, false, false, true),
      new Move("Road to Redemption", "SAAA", "HHMMMMMM", null, null, null, null, null, "Switches to Almighty mode", false, false, false, false, false, true, false, true),
      new Move("Epistemophilia", "SBBB", "MMMMMM", null, null, null, null, null, "Switches to Almighty mode", false, false, false, false, false, true, false, true),
      new Move("Viva Academia", "S6A+B", "MMMM", null, null, null, null, null, "Switches to Almighty mode", false, false, false, false, false, true, false, true),
      new Move("Destiny's Choice", "S8A+B", "MMMM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("New World Revolution", "SA+B", "MMMMMM", null, null, null, null, null, "Switches to Almighty mode", false, true, false, false, false, true, false, true) // during 8-way run
    ],
    // Horizontal Moves
    [
      new Move("Pilgrimage of Anthropos", "AAA", "HHMMMMMM", null, null, null, null, null, "Switches to Almighty mode", false, false, false, false, false, false, false, false, false, true),
      new Move("Tragedy of Humanity", "AB", "HM", null, null, null, null, null),
      new Move("Light in the Dark", "6AA", "HH", null, null, null, null, null),
      new Move("Forbidden Path", "3A", "M", null, null, null, null, null),
      new Move("Heretic's Sweep", "2A", "SS", null, null, null, null, null, null, false, false, true),
      new Move("Heretic's Sweep ~ Beauty of Balance", "2AK", "SS", null, null, null, null, null, null, true),
      new Move("Heretic's Sweep ~ Tragedy of War", "2A6K", "SS", null, null, null, null, null, null, true),
      new Move("Heretic's Sweep ~ Comedy of Errors", "2A4K", "SS", null, null, null, null, null, null, true),
      new Move("Peace Through Hardship", "1A", "L", null, null, null, null, null, "GI vs. mid & low", false, false, false, true),
      new Move("Peace Through Hardship", "1AI", null, null, null, null, null, null, null, true),
      new Move("Fell the Unworthy", "4A", "H", null, null, null, null, null, "GI vs. high", false, false, false, true),
      new Move("Fell the Unworthy", "4AI", null, null, null, null, null, null, null, true),
      new Move("Heretic's Sweep", "CA", "SS", null, null, null, null, null, null, false, false, true),
      new Move("Heretic's Sweep ~ Beauty of Balance", "CAK", "SS", null, null, null, null, null, null, true),
      new Move("Heretic's Sweep ~ Tragedy of War", "CA6K", "SS", null, null, null, null, null, null, true),
      new Move("Heretic's Sweep ~ Comedy of Errors", "CA4K", "SS", null, null, null, null, null, null, true),
      new Move("Impulse Pincer", "C3A", "HH", null, null, null, null, null),
      new Move("Righteous Judgment", "C1A", "L", null, null, null, null, null, null, false, false, true),
      new Move("Double Cross Baptism", "WA", "M", null, null, null, null, null),
      new Move("Absolute Devotion", "9A", "L", null, null, null, null, null, null, false, false, true),
      new Move("Radical Liberty", "8A", "M", null, null, null, null, null),
      new Move("Thorough Inquest", "7A", "L", null, null, null, null, null, null, false, false, true),
      new Move("Faith Betrayal", "TA", "H", null, null, null, null, null),
      new Move("Martyr of Progress", "T2A", "S", null, null, null, null, null, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Heart on Trial", "BA", "MH", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Seven Sages' Aphorism", "BBB", "MMMMMM", null, null, null, null, null, "Switches to Almighty mode"),
      new Move("Seven Sages' Aphorism ~ Beauty of Balance", "BBK", "MM", null, null, null, null, null, null, true),
      new Move("Seven Sages' Aphorism ~ Tragedy of War", "BB6K", "MM", null, null, null, null, null, null, true),
      new Move("Seven Sages' Aphorism ~ Comedy of Errors", "BB4K", "MM", null, null, null, null, null, null, true),
      new Move("Adulation Blade", "x6", "H", null, null, null, null, null),
      new Move("Tears of Pain", "x4", "M", null, null, null, null, null),
      new Move("Usurp the Autocracy", "6BA", "MHHH", null, null, null, null, null, "Time precisely for increased damage"),
      new Move("Truculent World", "6BB", "MM", null, null, null, null, null),
      new Move("Eternal Conflict", "3BB", "MM", null, null, null, null, null, "2nd hit can be held", false, true),
      new Move("Path to Glory", "2BB", "MM", null, null, null, null, null),
      new Move("Path to Glory ~ Beaty of Balance", "2BBK", "MM", null, null, null, null, null, null, true),
      new Move("Path to Glory ~ Tragedy of War", "2BB6K", "MM", null, null, null, null, null, null, true),
      new Move("Path to Glory ~ Comedy of Errors", "2BB4K", "MM", null, null, null, null, null, null, true),
      new Move("Save the Betrayed", "1BB", "LH", null, null, null, null, null, "GI vs. low", false, false, false, true),
      new Move("Save the Betrayed", "1BI", null, null, null, null, null, null, null, true),
      new Move("Instruct the Unwise", "4B", "", null, null, null, null, null, "GI vs. mid", false, true, false, true, false, false, false, true),
      new Move("Instruct the Unwise", "4BI", null, null, null, null, null, null, null, true),
      new Move("Nihilism", "CB", "", null, null, null, null, null, null, false, false, true),
      new Move("Coup D'etat", "C3BB", "", null, null, null, null, null),
      new Move("Talion Shield", "C1B", "M", null, null, null, null, null),
      new Move("Enlightenment", "CBB", "MM", null, null, null, null, null, "Can be delayed"),
      new Move("Extinction Betrayer", "9B", "M", null, null, null, null, null),
      new Move("Biting Critique", "8B", "M", null, null, null, null, null),
      new Move("Revelatory Punishment", "7B", "M", null, null, null, null, null),
      new Move("Whistleblower", "TB", "M", null, null, null, null, null),
      new Move("Cognitive Dissonance", "T2B", "M", null, null, null, null, null, null, false, false, true)
    ],
    // Kicks
    [
    ],
    // Simultaneous Press Moves
    [
      new Move("Harmonious Abandon", "A+B", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Harmonious Abandon", "A+B", "M", null, null, null, null, null, "While in sword mode", false, true, false, false, false, false, false, true), // While in sword mode
      new Move("Rebellious Abandon", "A+B", "M", null, null, null, null, null, "While in axe mode", false, true, false, false, false, false, false, true), // While in axe mode
      new Move("Fraternal Abandon", "A+B", "M", null, null, null, null, null, "While in spear mode/GI. vs high, mid & low", false, true, false, true, false, false, false, true), // While in spear mode
      new Move("Lawless Abandon", "A+B", "M", null, null, null, null, null, "While in Almighty mode/GI vs. high, mid & low", false, true, false, true, false, false, false, true), // While in Almighty mode
      new Move("Epistemological Punishment", "6A+B", "MMMM", null, null, null, null, null, "Switches to Almighty mode"),
      new Move("Geometrical Precision", "2A+B", "L", null, null, null, null, null),
      new Move("Power of Pathos", "4A+B", "M", null, null, null, null, null),
      new Move("Encyclopeid Mind", "8A+B", "M", null, null, null, null, null),
      new Move("Ophion's Omnipresence", "214A+B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Pleroma Ascension", "B+K", "MM", null, null, null, null, null, "While in sword or Almighty mode/Resets weapon to unformed state"),
      new Move("O, Fallen Scholar", "B+K", "L", null, null, null, null, null, "While in axe mode/Resets weapon to unformed state"),
      new Move("O, Fallen Scholar", "6B+K", "L", null, null, null, null, null, "While in Almighty mode/Resets weapon to unformed state"),
      new Move("Aufheben Sublimation", "B+K", "MHH", null, null, null, null, null, "While in spear mode/Resets weapon to unformed state/GI vs. mid & low", false, false, false, true),
      new Move("Aufheben Sublimation", "4B+K", "MHH", null, null, null, null, null, "While in Almighty mode/Resets weapon to unformed state/GI vs. mid & low", false, false, false, true),
      new Move("Rebuttal", "TA+B", "M", null, null, null, null, null, null, false, false, true, false, false, false, false, true)
    ],
    // 8-Way Run Moves
    [
      new Move("Plunder the Depths", "#|&|*A", "H", null, null, null, null, null),
      new Move("Subliminal Persuasion", "@|*A", "H", null, null, null, null, null, null, false, true),
      new Move("Subliminal Persuasion ~ Beauty of Balance", "@|*AK", "H", null, null, null, null, null, null, true, true),
      new Move("Subliminal Persuasion ~ Tragedy of War", "@|*A6K", "H", null, null, null, null, null, null, true, true),
      new Move("Subliminal Persuasion ~ Comedy of Errors", "@|*A4K", "H", null, null, null, null, null, null, true, true),
      new Move("Justice for All", "!|$|uA", "H", null, null, null, null, null),
      new Move("Trials of Conflict", "#|^|(B", "M", null, null, null, null, null),
      new Move("Unequivocal Love", "@|*B", "M", null, null, null, null, null, null, false, true),
      new Move("Unequivocal Love ~ Beauty of Balance", "@|*BK", "M", null, null, null, null, null, null, true, true),
      new Move("Unequivocal Love ~ Tragedy of War", "@|*B6K", "M", null, null, null, null, null, null, true, true),
      new Move("Unequivocal Love ~ Comedy of Errors", "@|*B4K", "M", null, null, null, null, null, null, true, true),
      new Move("No More Naysayers", "!|$|uB", "M", null, null, null, null, null, null, false, true),
      new Move("No More Naysayers", "!|$|ub", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("March of Humanity", "A+B", "MMMMMM", null, null, null, null, null, "During 8-way run"), // during 8 way run
      new Move("Philosophy Slide", "RK", "L", null, null, null, null, null)
    ],
    // Throws
    [
      new Move("Modify the Weak", "A+G", "H", null, null, null, null, null, "Switches to Almighty mode/Breakable", false, false, false, false, false, false, true),
      new Move("Reformation", "4A+G", "H", null, null, null, null, null, "Switches to Almighty mode/Breakable", false, false, false, false, false, false, true),
      new Move("Transmigration", "VA+G", "H", null, null, null, null, null, "Switches to Almighty mode/Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true)
    ],
    // ************ Stances *************
    // Beauty of Balance
    [
      new Move("Beauty of Balance", "K", null, null, null, null, null, null, null, true),
      new Move("Beauty of Wonder", "2K|2K", null, null, null, null, null, null, null, true),
      new Move("Beauty of Performance", "@|*K", null, null, null, null, null, null, "Dodges high, mid & low", true),
      new Move("Beauty of Balance", "TK", null, null, null, null, null, null, null, true),
      new Move("Beauty of Wonder", "T@|*K", null, null, null, null, null, null, null, true),
      new Move("Salvation Doctrine", "[AAA", "HHH", null, null, null, null, null),
      new Move("Ideological Insight", "[AAB", "HHM", null, null, null, null, null),
      new Move("Salvation Doctrine ~ Beauty of Balance", "[AAK", "HH", null, null, null, null, null, null, true),
      new Move("Salvation Doctrine ~ Tragedy of War", "[AA6K", "HH", null, null, null, null, null, null, true),
      new Move("Salvation Doctrine ~ Comedy of Errors", "[AA4K", "HH", null, null, null, null, null, null, true),
      new Move("Lower the Gavel", "[AB", "HMM", null, null, null, null, null),
      new Move("Karmic Consequence", "[B", "M", null, null, null, null, null, null, false, true),
      new Move("Raconteur", "[K", "H", null, null, null, null, null),
      new Move("Beauty of Balance ~ Tragedy of War", "[6K", null, null, null, null, null, null, null, true),
      new Move("Beauty of Balance ~ Comedy of Errors", "[4K", null, null, null, null, null, null, null, true)
    ],
    // Tragedy of War
    [
      new Move("Tragedy of War", "3|6|9K", null, null, null, null, null, null, null, true),
      new Move("Tragedy of Performance", "#|^|(K", null, null, null, null, null, null, "Dodges high, mid & low", true),
      new Move("Tragedy of War", "T6K", null, null, null, null, null, null, null, true),
      new Move("Scream of Defiance", "]A", "", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("War and Destruction", "]B", "", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Fall of the Wise", "]6K", "LL", null, null, null, null, null),
      new Move("Tragedy of War ~ Beauty of Balance", "]K", null, null, null, null, null, null, null, true),
      new Move("Tragedy of War ~ Beauty of Wonder", "]2|8k", null, null, null, null, null, null, null, true),
      new Move("Tragedy of War ~ Comedy of Errors", "]4K", null, null, null, null, null, null, null, true)
    ],
    // Comedy of Errors
    [
      new Move("Comedy of Errors", "1|4|uK", null, null, null, null, null, null, null, true),
      new Move("Comedy of Performance", "!|$|uK", null, null, null, null, null, null, "Dodges high, mid & low", true),
      new Move("Comedy of Errors", "T4K", null, null, null, null, null, null, null, true),
      new Move("Premonition of Abraxas", "{AB", "", null, null, null, null, null),
      new Move("Will to Dominate", "{BB", "", null, null, null, null, null),
      new Move("Executioner's Gavel", "{x6", "M", null, null, null, null, null),
      new Move("Advocate of Change", "{4K", "L", null, null, null, null, null),
      new Move("Comedy of Errors ~ Beauty of Balance", "{K", null, null, null, null, null, null, null, true),
      new Move("Comedy of Errors ~ Beauty of Wonder", "{2|8K", null, null, null, null, null, null, null, true),
      new Move("Comedy of Errors ~ Tragedy of War", "{6K", null, null, null, null, null, null, null, true)
    ]
  ]

  Groh = [
    // Reversal Edge Attacks
    [
      new Move("Existence", "B+G", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Existence", "b+g", "M", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Darkside", "B+G6", "M", null, null, null, null, null, null, false, false, false, false, true),
      new Move("Screeching Spirit", "rA", "H", null, null, null, null, null, null, false, true),
      new Move("Screeching Spirit ~ Serpent's Embrace", "ra", "H", null, null, null, null, null, null, true, true),
      new Move("Fires of Insanity", "rBBBBBBBB", "MMMMMMMM", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Queen of Blades", "rK", "M", null, null, null, null, null, null, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Guilty Throne", "A+B+K", "MMMMMMMM", null, null, null, null, null, "GI vs. high, mid & low", false, false, false, true, false, false, true, false, false, false, true),
      new Move("Guilty Throne", "[A+B+K", "MMMMMMMM", null, null, null, null, null, null, false, false, false, false,false, false, true, false, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Deadly Cataclysm", "S6AA", "HMH", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Deadly Firestorm", "S4A", "HH", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Death Glance", "S6BB", "MM", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, true, true, true),
      new Move("Unseen Connection", "S^KK", "MM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Unseen Connection ~ Serpent's Embrace", "S^Kk", "MM", null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Decaying Land", "S@|*A+BB", "MMMMMM", null, null, null, null, null, "GI vs. mid horizontal", false, false, false, true, false, true),
      new Move("Deadly Screaming Mandrake", "S[AA", "HMH", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Mourning Spirit", "S[6AA", "HH", null, null, null, null, null, "Shifts to follow-up attack upon hit", false, false, false, false, false, true, false, false, true)
    ],
    // Horizontal Moves
    [
      new Move("Biting Raven", "AA", "HH", null, null, null, null, null, null, false, true, false, false, false, false, false, false, false, true),
      new Move("Governance", "AK", "HM", null, null, null, null, null),
      new Move("Cataclysm", "6AA", "HMH", null, null, null, null, null),
      new Move("Dashing Wind", "6AK", "HH", null, null, null, null, null),
      new Move("Tempting Tezhas", "6a", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Tempting Tezhas(counter)", "H6a", "H", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Raven Gash", "3A", "M", null, null, null, null, null),
      new Move("Dancing Tezhas", "3a", "M", null, null, null, null, null),
      new Move("Ancient Worshipper", "2A", "S", null, null, null, null, null, null, false, false, true),
      new Move("Ancient Wheel", "1AA", "LL", null, null, null, null, null, null, false, false, true),
      new Move("Dancing Insanity", "4A", "HH", null, null, null, null, null),
      new Move("Dancing Insanity ~ Serpent's Embrace", "4a", "HH", null, null, null, null, null, null, true),
      new Move("Serpent's Venom", "214A", "H", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Ancient Worshipper", "CA", "S", null, null, null, null, null, null, false, false, true),
      new Move("Menace Slice", "WA", "H", null, null, null, null, null),
      new Move("Deceitful Raven", "Wa", "H", null, null, null, null, null),
      new Move("Rising Raven", "JA", "M", null, null, null, null, null),
      new Move("Scars of Memory", "TA", "H", null, null, null, null, null),
      new Move("Screams of Paranoia", "T2AB", "LM", null, null, null, null, null, "GI vs. low", false, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Ode to Undine", "BBB", "MMM", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true, false, false, false, false, true),
      new Move("Ode to Undine", "BBb", "MMM", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Poisoned Destiny", "b", "MM", null, null, null, null, null),
      new Move("Raven's Egg", "xA", "H", null, null, null, null, null),
      new Move("Eclipse Raven", "xa", "HM", null, null, null, null, null),
      new Move("Darkside", "x6", "M", null, null, null, null, null),
      new Move("Warning Mood", "6BA", "MH", null, null, null, null, null),
      new Move("Warning Mood ~ Serpent's Embrace", "6Ba", "MH", null, null, null, null, null, null, true),
      new Move("Warning Immortal", "6BB", "MM", null, null, null, null, null),
      new Move("Ivy Lick", "6x8", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Ivy Lick", "6x8", "H", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true), // Against midair opponent
      new Move("Silhouette", "6x8K", "HL", null, null, null, null, null),
      new Move("Ivy Lash", "6b", "M", null, null, null, null, null),
      new Move("Biting Ivy Inner", "6b2|8", "MM", null, null, null, null, null),
      new Move("Aqua Clipper", "3B", "M", null, null, null, null, null, null, false, true),
      new Move("Dominance", "2B", "M", null, null, null, null, null),
      new Move("Poison Leaf", "1B", "L", null, null, null, null, null),
      new Move("Poison Ivy", "1b", "Lmm", null, null, null, null, null),
      new Move("Rushing Raven", "4B", "H", null, null, null, null, null),
      new Move("Dashing Wings", "4x8", "HHHHHmmmM", null, null, null, null, null),
      new Move("Venom Lash", "214B", "MM", null, null, null, null, null),
      new Move("Venom Lash ~ Serpent's Embrace", "214b", "MM", null, null, null, null, null, null, true),
      new Move("Aqua Worshipper", "CB", "M", null, null, null, null, null, null, false, false, true),
      new Move("Ivy Masquerade", "C3B", "L", null, null, null, null, null, null, false, true, true),
      new Move("Masquerade ~ Spiral Lust", "C3b", "L", null, null, null, null, null, null, true, true),
      new Move("Pride", "C1B", "M", null, null, null, null, null),
      new Move("Cagemaster", "WBB", "MHH", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Akasha's Cage", "JBBB", "MMHH", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Reverse Immortal", "TB", "M", null, null, null, null, null),
      new Move("Deep Immortal", "T2B", "M", null, null, null, null, null, null, false, false, true)
    ],
    // Kick Moves 
    [
      new Move("Night Swallow", "K", "H", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Starving Spirit", "6KB", "MH", null, null, null, null, null, "Becomes a middle attack when at distance/Returns to crouching on G cancel", false, false, false, false, false, false, false, false, false, true),
      new Move("Blade Sharpener", "6Kb", "MH", null, null, null, null, null, "Becomes a middle attack when at distance/Returns to crouching on G cancel", false, false, false, false, false, false, false, false, true, true),
      new Move("Rage Kick", "3K", "M", null, null, null, null, null),
      new Move("Rage Kick", "3k", "M", null, null, null, null, null, null, false, true),
      new Move("Charmer Silhouette", "2K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Queen's Pleasure", "1K", "L", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Ivy Sweep", "1K", "LL", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true), // Against downed opponent
      new Move("Evil Sparrow", "4K", "M", null, null, null, null, null),
      new Move("Charmer Silhouette", "CK", "L", null, null, null, null, null, null, false, false, true),
      new Move("Nail Cross", "C3K", "M", null, null, null, null, null, null, false, false, true),
      new Move("Rising Cross", "WK", "M", null, null, null, null, null),
      new Move("Rising Mind Shatter", "JK", "M", null, null, null, null, null),
      new Move("Reverse Night Swallow", "TK", "H", null, null, null, null, null),
      new Move("Deep Silhouette", "T2K", "L", null, null, null, null, null, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Revelation", "A+B", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("God Whisper", "6A+BA", "MSM", null, null, null, null, null),
      new Move("Suppressed Exile ~ Spiral Lust", "3A+B", null, null, null, null, null, null, null, true),
      new Move("Metal Fencer", "2A+BB", "MM", null, null, null, null, null),
      new Move("Razor's Bite", "1A+B", "L", null, null, null, null, null),
      new Move("Spiral Punishment", "4A+BB", "MMMMMMM", null, null, null, null, null, "GI vs. mid horizontal(except kicks)", false, false, false, true),
      new Move("Creeping Ivy", "8A+BB", "MM", null, null, null, null, null),
      new Move("Hailstorm", "8A+Bb", "MMMM", null, null, null, null, null),
      new Move("Banshee", "B+K", "M", null, null, null, null, null, "Returns to facing away", false, true),
      new Move("Embrace of Guilt", "6B+K", "M", null, null, null, null, null, "Shifts to attack throw upon close-range hit", false, false, false, false, false, false, true),
      new Move("Embrace of Guilt", "6b+k", "M", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Fear's Void", "2|3B+K", "M", null, null, null, null, null, "Returns to crouching on G cancel", false, true, false, false, false, false, false, false, false, true),
      new Move("Heel Explosion", "4B+K", "M", null, null, null, null, null, "Returns to crouching on G cancel", false, false, false, false, false, false, false, false, true, true),
      new Move("Stinging Souls", "8|9B+K", "MM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Fear's Void", "C2|3B+K", "M", null, null, null, null, null, "Returns to crouching on G cancel", false, true, false, false, false, false, false, false, false, true),
      new Move("Asylum", "WB+K", "MM", null, null, null, null, null, "GI vs. high, mid & low", false, false, false, true),
      new Move("Viper Tail", "TB+K", "m", null, null, null, null, null, "Returns to facing away")
    ],
    // 8-Way Run Moves
    [
      new Move("Damned Mark", "#|^|(A", "M", null, null, null, null, null),
      new Move("Sparking Blade", "#|^|(a", "MM", null, null, null, null, null, null, false, true),
      new Move("Wolf Lash", "*A", "H", null, null, null, null, null, null, false, true),
      new Move("Wolf Sign", "@A", "H", null, null, null, null, null, null, false, true),
      new Move("Cursed Soul", "!|$|uA", "M", null, null, null, null, null),
      new Move("Insanity Light", "!|$|ua", "M", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Insanity Feast", "!|$|ua6", "M", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Elder Gnome", "#|^|(BB", "MM", null, null, null, null, null),
      new Move("Nocturnal Sylph", "@|*BA", "MH", null, null, null, null, null, "Returns to facing away"),
      new Move("Drowning Madness ~ Serpent's Embrace", "@|*b", "M", null, null, null, null, null, null, true),
      new Move("Cursed Heavens", "!|$|uB", "M", null, null, null, null, null, null, false, true),
      new Move("Wondergale", "^K", "M", null, null, null, null, null),
      new Move("Wondergale ~ Serpent's Embrace", "^k", "M", null, null, null, null, null, null, true),
      new Move("Mind Shatter", "#|(K", "H", null, null, null, null, null),
      new Move("Royal Huntress", "@|*K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Diving Raven", "!|$|uK", "M", null, null, null, null, null, "Returns to downed position"),
      new Move("Freeze Gaze", "#|^|(A+B", "MM", null, null, null, null, null),
      new Move("Arid Land", "@|*A+B", "MM", null, null, null, null, null, "GI vs. mid horizontal", false, false, false, true),
      new Move("Crucifixion", "!|$|uA+B", "M", null, null, null, null, null),
      new Move("Crucifixion", "!|$|ua+b", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Raging Gnome", "#|^|(B+K", "MMM", null, null, null, null, null),
      new Move("Exile ~ Serpent's Embrace", "!|$|uB+K", "M", null, null, null, null, null, null, true),
      new Move("Sliding", "RK", "L", null, null, null, null, null)
    ],
    // Throws
    [
      new Move("Dominion Throw", "A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Primal Dominance", "4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Heartless Guide", "ZA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Sunset Cradle", "XA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Sweet Dominance", "VA+G", "H", null, null, null, null, null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Vile Condemnation", "2|3A+G", "L", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Vile Condemnation", "C2|3A+G", "L", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Summon Suffering", "376231A+G", "H", null, null, null, null, null, "Not breakable", false, false, false, false, false, false, true),
      new Move("Summon Suffering(fast)", "376231A+GF", "H", null, null, null, null, null, "Not breakable", false, false, false, false, false, false, true),
      new Move("Calamity Symphony", "3746916A+G", "H", null, null, null, null, null, "Brakable", false, false, false, false, false, false, true),
      new Move("Calamity Symphony(fast)", "3746916A+GF", "H", null, null, null, null, null, "Brakable", false, false, false, false, false, false, true)
    ],
    // ************ Stances *************
    // Avenger
    [
      new Move("Serpent's Embrace", "4a", null, null, null, null, null, null, null, true),
      new Move("Violent Spirits", "[AA", "HMH", null, null, null, null, null),
      new Move("Wind Embrace", "[6AA", "HH", null, null, null, null, null, "Shifts to follow-up attack upon hit"),
      new Move("Lamenting Tail", "[4A", "L", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Mistress' Justice", "[BBB", "MMM", null, null, null, null, null),
      new Move("Howling Spirits", "[BBBBBj", "MMMMM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Ivy Sting", "[6B", "M", null, null, null, null, null, "Shifts to follow-up attack upon hit"),
      new Move("Landing Embrace", "[4B", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Charging Serpent", "[K", "M", null, null, null, null, null),
      new Move("Charging Serpent ~ Serpent's Embrace", "[k", "M", null, null, null, null, null, null, true),
      new Move("Stinging Souls", "[B+K|6B+K|4B+K", "MM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Redemption", "[8B+K", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Redemption", "[8B+K", "H", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true), // Against mid-air opponent
      new Move("Blind Obsession", "[8B+KK", "HL", null, null, null, null, null),
      new Move("Released Souls", "[A+B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Guilty Throne", "[A+B+K", "MMMMMMMM", null, null, null, null, null, null, false, false, false, false, false, false, true, false, false, false, true)
    ]
  ]

  Inferno = [
    // Reversal Edge Attacks
    [
      new Move("Crimson Gateway", "B+G", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Crimson Gateway", "b+g", "M", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Fire Avalanche", "rAA", "HH", null, null, null, null, null, null, false, true, false, false, false, false, false, false, true),
      new Move("Incinerator", "rB", "M", null, null, null, null, null, "Shifts to follow-up attack upon hit", false, true, false, false, false, false, false, true, true),
      new Move("Despair Breeder", "rK", "M", null, null, null, null, null, "Shifts to attack throw upon hit", false, true, false, false, false, false, true, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Dark Reconquista: Purgatory", "A+B+K", "M", null, null, null, null, null, null, false, false, false, false, false, false, true, false, false, false, true),
      new Move("Dark Reconquista: Purgatory", "a+b+k", "M", null, null, null, null, null, null, false, false, false, false, false, false, true, false, true, false, true),
      new Move("Soul Charge", "4A+B+K", "m", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, false, true)
    ],
    // Horizontal Moves
    [
      new Move("Arrhostia Demolition", "AAA", "HMH", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Arrhostia Force", "AK", "HH", null, null, null, null, null),
      new Move("Quick Chainmail Buster", "zB", "M", null, null, null, null, null),
      new Move("Gore Fest", "6AAA", "HHMMH", null, null, null, null, null, "Revenge Attack", false, false, false, false, false, false, false, true),
      new Move("Dire vengeance", "w6A", "M", null, null, null, null, null, "GI vs. high, mid & low", false, true, false, true, false, false, false, true),
      new Move("Infernal Reign", "3AA", "MH", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Infernal Divide", "3AB", "MM", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Vorpal Violence", "2ABB", "LMM", null, null, null, null, null),
      new Move("Vorpal Violence ~ Vile Glare", "2AB6", "LM", null, null, null, null, null, null, true),
      new Move("Shadow Slicer", "1A", "L", null, null, null, null, null, null, false, true),
      new Move("Shadow Slicer", "1a", "L", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Shadow Slicer ~ Vile Glare", "1A6", "L", null, null, null, null, null, null, true, true),
      new Move("Shadow Slicer ~ Vile Glare", "1a6", "L", null, null, null, null, null, null, true, true, false, false, false, false, false, true),
      new Move("Primal Fear", "4A", "H", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Jade Slicer", "CA", "L", null, null, null, null, null, null, false, false, true),
      new Move("Maelstrom", "WAA", "ML", null, null, null, null, null),
      new Move("Maelstrom ~ Vile Glare", "WAa6", "M", null, null, null, null, null, null, true),
      new Move("Fatal Spin Slash", "JA", "H", null, null, null, null, null),
      new Move("Turning Head Slash", "TA", "H", null, null, null, null, null),
      new Move("Turning Leg Slash", "T2A", "S", null, null, null, null, null, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Hell Vortex", "BBB", "MMM", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Hell vortex ~ Vile Glare", "BB6", "MM", null, null, null, null, null, null, true),
      new Move("Death Lord's Impalement", "6BBB", "MMMMMM", null, null, null, null, null, "Revenge Attack", false, false, false, false, false, false, false, true),
      new Move("Death Lord's Impalement ~ Void Star", "6BBB8", "MMMMMM", null, null, null, null, null, "Revenge Attack", true, false, false, false, false, false, false, true),
      new Move("Dire Vengeance", "w6B", "M", null, null, null, null, null, "GI vs. high, mid & low", false, true, false, true, false, false, false, true),
      new Move("Death Smash", "3B", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Death Smash ~ Void Star", "3B2", "M", null, null, null, null, null, null, true, true, false, false, false, false, false, true),
      new Move("Shadow Buster", "2B", "M", null, null, null, null, null, null, false, false, true),
      new Move("Dark Soul Impact", "1B", "L", null, null, null, null, null),
      new Move("Razor Edge", "4B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Shadow Buster", "CB", "M", null, null, null, null, null, null, false, false, true),
      new Move("Will Crusher", "WBB", "MM", null, null, null, null, null),
      new Move("Will Crusher ~ Vile Glare", "WB6", "M", null, null, null, null, null, null, true),
      new Move("Fatal Buster", "JB", "M", null, null, null, null, null),
      new Move("Turning Sword Buster", "TB", "M", null, null, null, null, null),
      new Move("Turning Shadow Buster", "T2B", "M", null, null, null, null, null, null, false, false, true)
    ],
    // Kicks
    [
      new Move("Crushing Hell Storm", "K", "H", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Adamantine Cracker", "6K", "H", null, null, null, null, null, "Revenge Attack", false, true),
      new Move("Adamantine Cracker ~ Vile Glare", "6K6", "H", null, null, null, null, null, null, true, true),
      new Move("Dire Vengeance", "w6K", "M", null, null, null, null, null, "GI vs. high, mid & low", false, true, false, true, false, false, false, true),
      new Move("Dark Middle Kick", "3K", "M", null, null, null, null, null, "Can be held"),
      new Move("Dark Low Kick", "2K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Earth Trample", "1K", "L", null, null, null, null, null),
      new Move("Earth Trample", "1k", "L", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Sinew Crusher", "4KB", "MM", null, null, null, null, null),
      new Move("Double Death Strike", "4KK", "MH", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Dark Low Kick", "CK", "L", null, null, null, null, null, null, false, false, true),
      new Move("Phantom Knee", "WK", "M", null, null, null, null, null),
      new Move("Fatal Brave Kick", "JK", "M", null, null, null, null, null),
      new Move("Turning Dark High Kick", "TK", "H", null, null, null, null, null),
      new Move("Turning Dark Low Kick", "T2K", "L", null, null, null, null, null, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Soul Wave", "A+B", "M", null, null, null, null, null, "Revenge Attack", false, true, false, false, false, false, false, true),
      new Move("Dire Vengeance", "wA+B", "M", null, null, null, null, null, "GI vs. high, mid & low", false, true, false, true, false, false, false, true),
      new Move("Roy D' Effrayeur", "6A+BB", "HMMMMMMM", null, null, null, null, null),
      new Move("Soul Smasher", "2A+B", "M", null, null, null, null, null, "Shifts to attack throw upon close-range hit", false, false, false, false, false, false, true),
      new Move("Soul Smasher", "2A+Bv", "M", null, null, null, null, null, "Shifts to attack throw upon close-range hit", false, false, false, false, false, false, true), // Against downed opponent
      new Move("Soul Blaze", "4A+B", "", null, null, null, null, null, "Cancel with G", false, false, false, false, false, false, false, false, true),
      new Move("Roy D' Angolmois", "8A+B", "", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Soul Wave (Ambush)", "TA+B", "", null, null, null, null, null, "Revenge Attack", false, false, false, false, false, false, false, true),
      new Move("Dire Vengeance", "wTA+B", "", null, null, null, null, null, "GI vs. high, mid & low", false, true, false, true, false, false, false, true),
      new Move("Dark Bite", "TB+K", "", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true)
    ],
    // 8-Way Run Moves
    [
      new Move("Insanity Storm", "#|^|(AA", "HM", null, null, null, null, null),
      new Move("Insanity Storm ~ Vile Glare", "#|^|(Az6", "H", null, null, null, null, null, null, true),
      new Move("Death Rage", "@|*AA", "MM", null, null, null, null, null),
      new Move("Death Rage ~ Vile Glare", "@|*Az6", "M", null, null, null, null, null, null, true),
      new Move("Soul Gorge", "!|$|uAA", "MH", null, null, null, null, null),
      new Move("Ether Lord's Carnage", "#|^|(BB", "MM", null, null, null, null, null),
      new Move("Ether Lord's Carnage ~ Vile Glare", "#|^|(B6", "M", null, null, null, null, null, null, true),
      new Move("Ether Lord's Carnage ~ Void Star", "#|^|(BB8", "MM", null, null, null, null, null, null, true),
      new Move("Rock Splitter", "@|*B", "M", null, null, null, null, null, null, false, false, true),
      new Move("Rock Splitter ~ Vile Glare", "@|*B6", "M", null, null, null, null, null, null, true),
      new Move("Darkness Impact", "#|uB", "L", null, null, null, null, null),
      new Move("Catastrophe's Call", "$BBB", "MMM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Grim Lord's Auto-da-fe", "#|^|(KK", "MH", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true, true),
      new Move("Bloody Lord's Invasion", "@|*K", "M", null, null, null, null, null, "Becomes a low attack when at a distance", false, false, false, false, false, false, false, false, true),
      new Move("Bloody Lord's Invasion ~ Void Star", "@|*K8", "M", null, null, null, null, null, "Becomes a low attack when at a distance", true, false, false, false, false, false, false, false, true),
      new Move("Jade Smasher", "#|$|uK", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Jade Smasher ~ Vile Glare", "#|$|uK6", "M", null, null, null, null, null, null, true, false, false, false, false, false, false, true),
      new Move("Crimson Vortex", "#|^|(A+B", "M", null, null, null, null, null),
      new Move("Sliding", "RK", "L", null, null, null, null, null)
    ],
    // Throws
    [
      new Move("Reign of Doom", "A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Soul Devour", "4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Doom's Invitation", "ZA+G", "H", null, null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Unholy Terror", "XA+G", "H", null, null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Witch Hunt", "VA+G", "H", null, null, null, null, null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true)
    ],
    // ************ Stances *************
    // Vile Glare
    [
      new Move("Vile Glare", "236", null, null, null, null, null, null, "Revenge Attack", true, false, true),
      new Move("Dire Vengeance", "[w", "M", null, null, null, null, null, "GI vs. high, mid & low", false, true, false, true, false, false, false, true),
      new Move("Grim Lord's Desolation", "[AA", "HH", null, null, null, null, null, "GI vs. high & vertical mid/Shifts to attack throw upon hit", false, false, false, true, false, false, true),
      new Move("Evil eye", "[aB", "H", null, null, null, null, null, null, false, true),
      new Move("Primordial Blood", "[B", "MM", null, null, null, null, null),
      new Move("Vile Sting", "[K", "L", null, null, null, null, null),
      new Move("Judecca Flood", "[A+B", "M", null, null, null, null, null, "Revenge Attack"),
      new Move("Dire Vengeance", "w[A+B", "M", null, null, null, null, null, "GI vs. high, mid & low", false, true, false, true, false, false, false, true),
      new Move("Shadow Flare", "[B+K", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true)
    ],
    // Void Star
    [
      new Move("Void Star", "B+K", null, null, null, null, null, null, null, true),
      new Move("Traitor's Blast", "]A", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Shadow Flare", "]B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Infernal Carnage", "]K", "M", null, null, null, null, null),
    ]
  ]

  Ivy = [
    // Reversal Edge Attacks
    [
      new Move("Existence", "B+G", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Existence", "b+g", "M", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Darkside", "B+G6", "M", null, null, null, null, null, null, false, false, false, false, true),
      new Move("Screeching Spirit", "rA", "H", null, null, null, null, null, null, false, true),
      new Move("Screeching Spirit ~ Serpent's Embrace", "ra", "H", null, null, null, null, null, null, true, true),
      new Move("Fires of Insanity", "rBBBBBBBB", "MMMMMMMM", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Queen of Blades", "rK", "M", null, null, null, null, null, null, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Guilty Throne", "A+B+K", "MMMMMMMM", null, null, null, null, null, "GI vs. high, mid & low", false, false, false, true, false, false, true, false, false, false, true),
      new Move("Guilty Throne", "[A+B+K", "MMMMMMMM", null, null, null, null, null, null, false, false, false, false,false, false, true, false, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Deadly Cataclysm", "S6AA", "HMH", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Deadly Firestorm", "S4A", "HH", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Death Glance", "S6BB", "MM", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, true, true, true),
      new Move("Unseen Connection", "S^KK", "MM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Unseen Connection ~ Serpent's Embrace", "S^Kk", "MM", null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Decaying Land", "S@|*A+BB", "MMMMMM", null, null, null, null, null, "GI vs. mid horizontal", false, false, false, true, false, true),
      new Move("Deadly Screaming Mandrake", "S[AA", "HMH", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Mourning Spirit", "S[6AA", "HH", null, null, null, null, null, "Shifts to follow-up attack upon hit", false, false, false, false, false, true, false, false, true)
    ],
    // Horizontal Moves
    [
      new Move("Biting Raven", "AA", "HH", null, null, null, null, null, null, false, true, false, false, false, false, false, false, false, true),
      new Move("Governance", "AK", "HM", null, null, null, null, null),
      new Move("Cataclysm", "6AA", "HMH", null, null, null, null, null),
      new Move("Dashing Wind", "6AK", "HH", null, null, null, null, null),
      new Move("Tempting Tezhas", "6a", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Tempting Tezhas(counter)", "H6a", "H", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Raven Gash", "3A", "M", null, null, null, null, null),
      new Move("Dancing Tezhas", "3a", "M", null, null, null, null, null),
      new Move("Ancient Worshipper", "2A", "S", null, null, null, null, null, null, false, false, true),
      new Move("Ancient Wheel", "1AA", "LL", null, null, null, null, null, null, false, false, true),
      new Move("Dancing Insanity", "4A", "HH", null, null, null, null, null),
      new Move("Dancing Insanity ~ Serpent's Embrace", "4a", "HH", null, null, null, null, null, null, true),
      new Move("Serpent's Venom", "214A", "H", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Ancient Worshipper", "CA", "S", null, null, null, null, null, null, false, false, true),
      new Move("Menace Slice", "WA", "H", null, null, null, null, null),
      new Move("Deceitful Raven", "Wa", "H", null, null, null, null, null),
      new Move("Rising Raven", "JA", "M", null, null, null, null, null),
      new Move("Scars of Memory", "TA", "H", null, null, null, null, null),
      new Move("Screams of Paranoia", "T2AB", "LM", null, null, null, null, null, "GI vs. low", false, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Ode to Undine", "BBB", "MMM", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true, false, false, false, false, true),
      new Move("Ode to Undine", "BBb", "MMM", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Poisoned Destiny", "b", "MM", null, null, null, null, null),
      new Move("Raven's Egg", "xA", "H", null, null, null, null, null),
      new Move("Eclipse Raven", "xa", "HM", null, null, null, null, null),
      new Move("Darkside", "x6", "M", null, null, null, null, null),
      new Move("Warning Mood", "6BA", "MH", null, null, null, null, null),
      new Move("Warning Mood ~ Serpent's Embrace", "6Ba", "MH", null, null, null, null, null, null, true),
      new Move("Warning Immortal", "6BB", "MM", null, null, null, null, null),
      new Move("Ivy Lick", "6x8", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Ivy Lick", "6x8", "H", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true), // Against midair opponent
      new Move("Silhouette", "6x8K", "HL", null, null, null, null, null),
      new Move("Ivy Lash", "6b", "M", null, null, null, null, null),
      new Move("Biting Ivy Inner", "6b2|8", "MM", null, null, null, null, null),
      new Move("Aqua Clipper", "3B", "M", null, null, null, null, null, null, false, true),

      new Move("Dominance", "2B", "M", null, null, null, null, null),
      new Move("Poison Leaf", "1B", "L", null, null, null, null, null),
      new Move("Poison Ivy", "1b", "Lmm", null, null, null, null, null),
      new Move("Rushing Raven", "4B", "H", null, null, null, null, null),
      new Move("Dashing Wings", "4x8", "HHHHHmmmM", null, null, null, null, null),
      new Move("Venom Lash", "214B", "MM", null, null, null, null, null),
      new Move("Venom Lash ~ Serpent's Embrace", "214b", "MM", null, null, null, null, null, null, true),
      new Move("Aqua Worshipper", "CB", "M", null, null, null, null, null, null, false, false, true),
      new Move("Ivy Masquerade", "C3B", "L", null, null, null, null, null, null, false, true, true),
      new Move("Masquerade ~ Spiral Lust", "C3b", "L", null, null, null, null, null, null, true, true),
      new Move("Pride", "C1B", "M", null, null, null, null, null),
      new Move("Cagemaster", "WBB", "MHH", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Akasha's Cage", "JBBB", "MMHH", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Reverse Immortal", "TB", "M", null, null, null, null, null),
      new Move("Deep Immortal", "T2B", "M", null, null, null, null, null, null, false, false, true)
    ],
    // Kick Moves 
    [
      new Move("Night Swallow", "K", "H", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Starving Spirit", "6KB", "MH", null, null, null, null, null, "Becomes a middle attack when at distance/Returns to crouching on G cancel", false, false, false, false, false, false, false, false, false, true),
      new Move("Blade Sharpener", "6Kb", "MH", null, null, null, null, null, "Becomes a middle attack when at distance/Returns to crouching on G cancel", false, false, false, false, false, false, false, false, true, true),
      new Move("Rage Kick", "3K", "M", null, null, null, null, null),
      new Move("Rage Kick", "3k", "M", null, null, null, null, null, null, false, true),
      new Move("Charmer Silhouette", "2K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Queen's Pleasure", "1K", "L", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Ivy Sweep", "1K", "LL", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true), // Against downed opponent
      new Move("Evil Sparrow", "4K", "M", null, null, null, null, null),
      new Move("Charmer Silhouette", "CK", "L", null, null, null, null, null, null, false, false, true),
      new Move("Nail Cross", "C3K", "M", null, null, null, null, null, null, false, false, true),
      new Move("Rising Cross", "WK", "M", null, null, null, null, null),
      new Move("Rising Mind Shatter", "JK", "M", null, null, null, null, null),
      new Move("Reverse Night Swallow", "TK", "H", null, null, null, null, null),
      new Move("Deep Silhouette", "T2K", "L", null, null, null, null, null, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Revelation", "A+B", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("God Whisper", "6A+BA", "MSM", null, null, null, null, null),
      new Move("Suppressed Exile ~ Spiral Lust", "3A+B", null, null, null, null, null, null, null, true),
      new Move("Metal Fencer", "2A+BB", "MM", null, null, null, null, null),
      new Move("Razor's Bite", "1A+B", "L", null, null, null, null, null),
      new Move("Spiral Punishment", "4A+BB", "MMMMMMM", null, null, null, null, null, "GI vs. mid horizontal(except kicks)", false, false, false, true),
      new Move("Creeping Ivy", "8A+BB", "MM", null, null, null, null, null),
      new Move("Hailstorm", "8A+Bb", "MMMM", null, null, null, null, null),
      new Move("Banshee", "B+K", "M", null, null, null, null, null, "Returns to facing away", false, true),
      new Move("Embrace of Guilt", "6B+K", "M", null, null, null, null, null, "Shifts to attack throw upon close-range hit", false, false, false, false, false, false, true),
      new Move("Embrace of Guilt", "6b+k", "M", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Fear's Void", "2|3B+K", "M", null, null, null, null, null, "Returns to crouching on G cancel", false, true, false, false, false, false, false, false, false, true),
      new Move("Heel Explosion", "4B+K", "M", null, null, null, null, null, "Returns to crouching on G cancel", false, false, false, false, false, false, false, false, true, true),
      new Move("Stinging Souls", "8|9B+K", "MM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Fear's Void", "C2|3B+K", "M", null, null, null, null, null, "Returns to crouching on G cancel", false, true, false, false, false, false, false, false, false, true),
      new Move("Asylum", "WB+K", "MM", null, null, null, null, null, "GI vs. high, mid & low", false, false, false, true),
      new Move("Viper Tail", "TB+K", "m", null, null, null, null, null, "Returns to facing away")
    ],
    // 8-Way Run Moves
    [
      new Move("Damned Mark", "#|^|(A", "M", null, null, null, null, null),
      new Move("Sparking Blade", "#|^|(a", "MM", null, null, null, null, null, null, false, true),
      new Move("Wolf Lash", "*A", "H", null, null, null, null, null, null, false, true),
      new Move("Wolf Sign", "@A", "H", null, null, null, null, null, null, false, true),
      new Move("Cursed Soul", "!|$|uA", "M", null, null, null, null, null),
      new Move("Insanity Light", "!|$|ua", "M", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Insanity Feast", "!|$|ua6", "M", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Elder Gnome", "#|^|(BB", "MM", null, null, null, null, null),
      new Move("Nocturnal Sylph", "@|*BA", "MH", null, null, null, null, null, "Returns to facing away"),
      new Move("Drowning Madness ~ Serpent's Embrace", "@|*b", "M", null, null, null, null, null, null, true),
      new Move("Cursed Heavens", "!|$|uB", "M", null, null, null, null, null, null, false, true),
      new Move("Wondergale", "^K", "M", null, null, null, null, null),
      new Move("Wondergale ~ Serpent's Embrace", "^k", "M", null, null, null, null, null, null, true),
      new Move("Mind Shatter", "#|(K", "H", null, null, null, null, null),
      new Move("Royal Huntress", "@|*K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Diving Raven", "!|$|uK", "M", null, null, null, null, null, "Returns to downed position"),
      new Move("Freeze Gaze", "#|^|(A+B", "MM", null, null, null, null, null),
      new Move("Arid Land", "@|*A+B", "MM", null, null, null, null, null, "GI vs. mid horizontal", false, false, false, true),
      new Move("Crucifixion", "!|$|uA+B", "M", null, null, null, null, null),
      new Move("Crucifixion", "!|$|ua+b", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Raging Gnome", "#|^|(B+K", "MMM", null, null, null, null, null),
      new Move("Exile ~ Serpent's Embrace", "!|$|uB+K", "M", null, null, null, null, null, null, true),
      new Move("Sliding", "RK", "L", null, null, null, null, null)
    ],
    // Throws
    [
      new Move("Dominion Throw", "A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Primal Dominance", "4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Heartless Guide", "ZA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Sunset Cradle", "XA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Sweet Dominance", "VA+G", "H", null, null, null, null, null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Vile Condemnation", "2|3A+G", "L", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Vile Condemnation", "C2|3A+G", "L", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Summon Suffering", "376231A+G", "H", null, null, null, null, null, "Not breakable", false, false, false, false, false, false, true),
      new Move("Summon Suffering(fast)", "376231A+GF", "H", null, null, null, null, null, "Not breakable", false, false, false, false, false, false, true),
      new Move("Calamity Symphony", "3746916A+G", "H", null, null, null, null, null, "Brakable", false, false, false, false, false, false, true),
      new Move("Calamity Symphony(fast)", "3746916A+GF", "H", null, null, null, null, null, "Brakable", false, false, false, false, false, false, true)
    ],
    // ************ Stances *************
    // Serpent's Embrace
    [
      new Move("Serpent's Embrace", "4a", null, null, null, null, null, null, null, true),
      new Move("Violent Spirits", "[AA", "HMH", null, null, null, null, null),
      new Move("Wind Embrace", "[6AA", "HH", null, null, null, null, null, "Shifts to follow-up attack upon hit"),
      new Move("Lamenting Tail", "[4A", "L", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Mistress' Justice", "[BBB", "MMM", null, null, null, null, null),
      new Move("Howling Spirits", "[BBBBBj", "MMMMM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Ivy Sting", "[6B", "M", null, null, null, null, null, "Shifts to follow-up attack upon hit"),
      new Move("Landing Embrace", "[4B", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Charging Serpent", "[K", "M", null, null, null, null, null),
      new Move("Charging Serpent ~ Serpent's Embrace", "[k", "M", null, null, null, null, null, null, true),
      new Move("Stinging Souls", "[B+K|6B+K|4B+K", "MM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Redemption", "[8B+K", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Redemption", "[8B+K", "H", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true), // Against mid-air opponent
      new Move("Blind Obsession", "[8B+KK", "HL", null, null, null, null, null),
      new Move("Released Souls", "[A+B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Guilty Throne", "[A+B+K", "MMMMMMMM", null, null, null, null, null, null, false, false, false, false, false, false, true, false, false, false, true)
    ],
    // Spiral Lust
    [
      new Move("Spiral Lust", "3A+B", "M", null, null, null, null, null, null, true, false, false, false, false, false, false, false, true),
      new Move("Exile", "]B", "M", null, null, null, null, null),
      new Move("Exile(delay)", "]B", "M", null, null, null, null, null),
      new Move("Spiral Lust ~ Serpent's Embrace", "]G", null, null, null, null, null, null, null, true)
    ]
  ]

  Kilik = [
    // Reversal Edge Attacks
    [
      new Move("Third Eye", "B+G", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Third Eye", "b+g", "M", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Nine Ring Bo", "rA", "H", null, null, null, null, null, null, false, true),
      new Move("Crystal Fang", "rB", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Corrupted Crystal Fang", "SrB", "MMMM", null, null, null, null, null, null, false, true, false, false, false, true, false, true),
      new Move("Serpent Kick", "rK", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Ling-Shen Su Phoenix Loop", "A+B+K", "M", null, null, null, null, null, null, false, false, false, false, false, false, true, false, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Forbidden Moonset", "SA+B+K", "H", null, null, null, null, null, null, false, false, false, false, false, true, true, false, true),
      new Move("Roc Wing", "S3AB", "MM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Headsman's Ax", "S4BBBK", "MMMM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Withered Lotus", "S#|^|(AAA", "MHH", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Black Tortoise Embers", "S@|*AAA", "MLL", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Heavy Bo", "S#|^|(B", "M", null, null, null, null, null, "Shifts to attack throw upon close-range hit", false, false, false, false, false, true, true),
      new Move("Vermillion Bird Descends", "S#|^|(A+B", "MHM", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("White Tiger Mark", "S#|^|(B+K", "MMM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Festival of the Damned", "SA+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, true, true),
      new Move("Festival of the Dead", "S4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, true, true),
      new Move("Corrupted Crystal Fang", "SrB", "MMMM", null, null, null, null, null, null, false, true, false, false, false, true, false, true)
    ],
    // Horizontal Moves
    [
      new Move("Raging Phoenix Combo", "AAA", "HHH", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Cutting Wind", "AB", "HH", null, null, null, null, null),
      new Move("Crushing Bo", "6AA", "HHH", null, null, null, null, null),
      new Move("Gale Force", "6AB", "HHM", null, null, null, null, null),
      new Move("Mid Sweep", "3A", "M", null, null, null, null, null),
      new Move("Bo Slice", "2A", "S", null, null, null, null, null, null, false, false, true),
      new Move("Blinding Fan", "2zB", "SMMM", null, null, null, null, null),
      new Move("Trick Bo", "1A", "L", null, null, null, null, null, "Breakable/Shifts to attack throw upon close-range hit", null, false, false, false, false, false, true),
      new Move("Dirty Bo", "1z", "L", null, null, null, null, null, "Breakable/Shifts to attack throw upon close-range hit", null, false, false, false, false, false, true),
      new Move("Inner Peace", "4A", "L", null, null, null, null, null, null, false, true, true),
      new Move("Lower Bo Slice", "CA", "S", null, null, null, null, null, null, false, false, true),
      new Move("Blinding Fan", "CzB", "SMMM", null, null, null, null, null),
      new Move("Ling Sheng Slash", "WA", "M", null, null, null, null, null),
      new Move("Scattering Bo", "JA", "M", null, null, null, null, null),
      new Move("Reverse Bo Tap", "TA", "H", null, null, null, null, null),
      new Move("Reverse Lower Bo Slice", "T2A", "S", null, null, null, null, null, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Heatwave", "BBB", "MMM", null, null, null, null, null, null, false, false, true, false, false, false, false, true),
      new Move("Fang Thrust", "x6", "M", null, null, null, null, null, null, false, true),
      new Move("Phoenix Feint", "x4", "M", null, null, null, null, null),
      new Move("Kite's Prey", "6BA", "MH", null, null, null, null, null, "Can be delayed", false, false, true),
      new Move("Twin Bo Upper", "6BB", "MM", null, null, null, null, null, "Can be delayed", false, true),
      new Move("Dragon Tree Bo", "3B", "M", null, null, null, null, null, null, false, true),
      new Move("Rushing Waterfall", "2BB", "MM", null, null, null, null, null),
      new Move("Phoenix Claw", "1B", "L", null, null, null, null, null),
      new Move("Weaver", "4BB", "HM", null, null, null, null, null, "Shifts to clash upon hit", false, true, false, false, true),
      new Move("Weaver", "4Bb", "HM", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Rushing Waterfall", "CBB", "MM", null, null, null, null, null),
      new Move("Stream Thrust", "C3B", "M", null, null, null, null, null),
      new Move("River Thrust", "C1B", "L", null, null, null, null, null, null, false, false, true),
      new Move("Reverse Bo Thrust", "WB", "M", null, null, null, null, null),
      new Move("Great Waterfall", "JB", "M", null, null, null, null, null),
      new Move("Reverse Waterfall", "TB", "M", null, null, null, null, null),
      new Move("Reverse Waterfall", "T2B", "M", null, null, null, null, null, null, false, false, true)
    ],
    // Kick Moves 
    [
      new Move("Sheng Front Kick", "K", "H", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Sheng Illusion Kick", "cB", "HL", null, null, null, null, null),
      new Move("Yin Rising", "6K", "MM", null, null, null, null, null),
      new Move("Sheng Side Kick", "3K", "M", null, null, null, null, null),
      new Move("Sheng Su Low Kick", "2K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Sheng Su Thrust", "1KB", "LM", null, null, null, null, null),
      new Move("Sheng Lung Kick Combo", "4KB", "MH", null, null, null, null, null),
      new Move("Master Kicks", "4KK", "MM", null, null, null, null, null),
      new Move("Sheng Su Low Kick", "CK", "L", null, null, null, null, null, null, false, false, true),
      new Move("Sunrise Kick", "WK", "MH", null, null, null, null, null),
      new Move("Phoenix Splits", "JK", "H", null, null, null, null, null),
      new Move("Incense Burner", "TK", "M", null, null, null, null, null, "GI vs. high, mid(except kicks, thrusting attacks)", false, false, false, true),
      new Move("Reverse Sheng Su Low Kick", "T2K", "L", null, null, null, null, null, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Phoenix Rage Thrust", "A+B", "M", null, null, null, null, null, "Dodges high, mid vertical", false, true, false, false, false, false, false, true),
      new Move("Phoenix Rage Thrust", "a+b", "M", null, null, null, null, null, "Dodges high, mid vertical", false, true, false, false, false, false, false, false, true),
      new Move("Star Stealer", "A+B|a+bI", null, null, null, null, null, null),
      new Move("Bo Smack Down", "6A+B", "HHHHHH", null, null, null, null, null),
      new Move("Wave Divide", "2A+B", "L", null, null, null, null, null),
      new Move("Phoenix Plume", "4A+B", "LL", null, null, null, null, null),
      new Move("Phoenix Cross", "8A+B", "MM", null, null, null, null, null),
      new Move("Absolute Truth", "B+K", "M", null, null, null, null, null),
      new Move("Absolute Truth ~ Momentum", "B+K6", "M", null, null, null, null, null, "GI vs. horizontal (except kicks)", true, false, false, true),
      new Move("Absolute Truth", "b+k", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Absolute Truth ~ Monument", "b+k6", "M", null, null, null, null, null, "GI vs. horizontal (except kicks)", true, false, false, true, false, false, false, true),
      new Move("Biting Phoenix", "6B+K", "MMMMM", null, null, null, null, null),
      new Move("Lower Bo Smackdown", "6x+c2", "LLLL", null, null, null, null, null),
      new Move("Playful Phoenix", "2B+K", "L", null, null, null, null, null),
      new Move("Playful Phoenix", "2b+k", null, null, null, null, null, null, "Returns to downed position"),
      new Move("Dragon Seal", "4B+KBB", "MMMMMM", null, null, null, null, null),
      new Move("Asura Clairvoyance", "TB+KBK", "MMM", null, null, null, null, null, "Time precisely for increased damage")
    ],
    // 8-Way Run Moves
    [
      new Move("Pursuing Strike", "#|^|(A", "M", null, null, null, null, null),
      new Move("Wind Divide", "@|*AA", "ML", null, null, null, null, null, null, false, false, true),
      new Move("Mountain Carve", "@|*AB", "MM", null, null, null, null, null),
      new Move("Dragon Glide Bo", "!|$|uAA", "HL", null, null, null, null, null),
      new Move("Heavy Bo", "#|^|(B", "M", null, null, null, null, null),
      new Move("Heavy Bo ~ Monument", "#|^|(B6", "M", null, null, null, null, null, "GI vs. horizontal (except kicks)", true, false, false, true),
      new Move("Raven Slaughter", "@|*B", "M", null, null, null, null, null),
      new Move("Raven Slaughter", "@|*b", "M", null, null, null, null, null, null, false, true),
      new Move("Phoenix Thrust", "!|$|uB", "M", null, null, null, null, null),
      new Move("Stream Thrust", "!|$|ux2", "L", null, null, null, null, null),
      new Move("Rising Phoenix", "#|^|(KKB", "MMMM", null, null, null, null, null),
      new Move("Hawk Claw", "@|*KB", "HL", null, null, null, null, null),
      new Move("Phosphorous Fang", "@|*cB", "L", null, null, null, null, null),
      new Move("Conquering Spirit", "!|$|uK", "M", null, null, null, null, null),
      new Move("Conquering Spirit", "!|$|uKvBj", "M", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Yin and Yang", "!|$|uA+B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Phoenix Lunge", "!|$|uB+K", "L", null, null, null, null, null),
      new Move("Sliding", "RK", "L", null, null, null, null, null)
    ],
    // Throws
    [
      new Move("Light Breeze", "A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Heaven Dance", "4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Cutting Sadness", "ZA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Summer Gale", "XA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Phoenix Pounce", "VA+G", "H", null, null, null, null, null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Festival of the Damned", "SA+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, true, true),
      new Move("Festival of the Dead", "S4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, true, true)
    ],
    // ************ Stances *************
    // Monument
    [
      new Move("Monument", "236", null, null, null, null, null, null, "GI vs. horizontal attacks (except kicks)", true, false, false, true),
      new Move("Geyser Kick", "[ABK", "MLM", null, null, null, null, null, null, false, true),
      new Move("Back Parry", "[A4", "M", null, null, null, null, null, "GI vs vertical attacks (except kicks)", true, false, false, true),
      new Move("Advancing Bo", "[B", "M", null, null, null, null, null),
      new Move("Scythe", "[K", "HH", null, null, null, null, null),
      new Move("Heaven Monument", "[A+B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Heaven Monument ~ Move Forward", "[z+x6", "", null, null, null, null, null),
      new Move("Heaven Monument ~ Move Forward", "[z+x^", "", null, null, null, null, null, "Against the wall", true),
      new Move("Heaven Monument ~ Move Backward", "[z+x4", "", null, null, null, null, null),
      new Move("Heaven Monument ~ Move Backward", "[z+x$", "", null, null, null, null, null, "Against the wall", true),
      new Move("Heaven Momentum Fall", "[z+xK", "L", null, null, null, null, null),
      new Move("Asura Dance", "[B+KBK", "MMM", null, null, null, null, null, "Time precisely for increased damage"),
      new Move("Left Pulse", "[8", null, null, null, null, null, null),
      new Move("Right Pulse", "[2", null, null, null, null, null, null)
    ],
    // Back Parry
    [
      new Move("Back Parry", "214", null, null, null, null, null, null, "GI vs. vertical (except kicks)", true, false, false, true),
      new Move("Parry Sweeper", "]A", "L", null, null, null, null, null, null, false, true),
      new Move("Parry Bolt", "]B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Parry Kick", "]K", "H", null, null, null, null, null)
    ],
    // While Down
    [
      new Move("Heaven Monument", "{A+B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Heaven Monument ~ Move Forward", "{z+x6", "", null, null, null, null, null),
      new Move("Heaven Monument ~ Move Forward", "{z+x^", "", null, null, null, null, null, "Against the wall", true),
      new Move("Heaven Monument ~ Move Backward", "{z+x4", "", null, null, null, null, null),
      new Move("Heaven Monument ~ Move Backward", "{z+x$", "", null, null, null, null, null, "Against the wall", true),
      new Move("Heaven Momentum Fall", "{z+xK", "L", null, null, null, null, null),
      new Move("Rising Flare", "{2A+B", "L", null, null, null, null, null)
    ]
  ]

  Maxi = [
    // Reversal Edge Attacks
    [
      new Move("Snapping Leviathan", "B+G", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Snapping Leviathan", "b+g", "M", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Crashing Wave", "rAA", "HL", null, null, null, null, null, null, false, true, true),
      new Move("Crashing Wave ~ Behind Lower", "rA", "H", null, null, null, null, null, null, true, true),
      new Move("Crashing Wave ~ Right Outer", "ra", "H", null, null, null, null, null, null, true, true),
      new Move("Wave Breaker ~ Left Inner", "rB", "M", null, null, null, null, null, "Shifts to clash upon guard", true, true, false, false, false, false, false, true),
      new Move("Incense Burner", "rK", "M", null, null, null, null, null, null, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Raging Dragon Zodiac", "A+B+K", "M", null, null, null, null, null, "Return to Right Outer with A+B+K(hold)", false, false, false, false, false, false, true, false, false, false, true),
      new Move("Raging Dragon Zodiac: Reprisal", "☻A+B+K", "M", null, null, null, null, null, "Return to Right Outer with A+B+K(hold)", false, false, false, false, false, false, true, true, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Dragon's Roar ~ Left Inner", "S4A+B+K", "HMMM", null, null, null, null, null, null, true, false, false, false, false, true, false, true),
      new Move("Setting Sun ~ Behind Lower", "S236A", "LLLLL", null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Hydra's Brand ~ Left Inner", "S6A+B", "M", null, null, null, null, null, null, true, false, false, false, false, true, false, true),
      new Move("Crashing Waves ~ Behind Lower", "S[AA+B", "HH", null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Dragon's Shadow ~ Left Outer", "S[BBA+B", "MMM", null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Ocean Splitter ~ Right Outer", "S[A+B", "M", null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Lightning Dragon ~ Left Outer", "S]BA+B", "MM", null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Hydra's Cross ~ Left Inner", "S}AB", "MM", null, null, null, null, null, null, true, false, false, false, false, true, false, true),
      new Move("Swooping Swallow", "S}A+B", "MM", null, null, null, null, null, null, false, false, true, false, false, true, false, true),
      new Move("Hydra's Frenzy", "S☺KK", "LH", null, null, null, null, null, null, false, false, false, false, false, true, false, true)
    ],
    // Horizontal Moves
    [
      new Move("Twin Snakes ~ Right Cross", "AA", "HH", null, null, null, null, null, null, true, false, false, false, false, false, false, false, false, true),
      new Move("Lunging Snake ~ Right Outer", "6A", "H", null, null, null, null, null, null, true),
      new Move("Lotus ~ Behind Lower", "3A", "M", null, null, null, null, null, null, true, true),
      new Move("Tongue", "2A", "S", null, null, null, null, null, null, false, false, true),
      new Move("Scythe Fang ~ Left Outer", "1AB", "LM", null, null, null, null, null, null, true),
      new Move("Serpent's Bane", "4AAAB", "HMMM", null, null, null, null, null),
      new Move("Serpent's Bane ~ Behind Lower", "4A", "H", null, null, null, null, null, null, true),
      new Move("Serpent's Bane ~ Right Outer", "4a", "H", null, null, null, null, null, null, true),
      new Move("Serpent's Bane ~ Behind Lower", "4AAA", "HMM", null, null, null, null, null, null, true),
      new Move("Nunchaku Slap to Steel Dragon ~ Left Outer", "4AB", "HH", null, null, null, null, null, null, true),
      new Move("Nunchaku Slap to Steel Dragon ~ Left Inner", "4Ax4", "HMMMMMMMMMM", null, null, null, null, null, null, true, false, false, false, false, false, false, false, false, true),
      new Move("Tongue", "CA", "S", null, null, null, null, null, null, false, false, true),
      new Move("Rope Dancer ~ Right Outer", "C3AAA", "LLL", null, null, null, null, null, null, true),
      new Move("Water Cutter ~ Left Inner", "WA", "M", null, null, null, null, null, null, true),
      new Move("Falling Snake Scythe ~ Right Cross", "JA", "L", null, null, null, null, null, null, true),
      new Move("Reverse Snake", "TA", "H", null, null, null, null, null),
      new Move("Reverse Tongue", "T2A", "S", null, null, null, null, null, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Snake Bite ~ Right Outer", "B", "M", null, null, null, null, null, null, true, false, false, false, false, false, false, false, false, true),
      new Move("Dragon Backfist", "6BBB", "MMH", null, null, null, null, null),
      new Move("Dragon Backfist ~ Right Outer", "6BB", "MM", null, null, null, null, null, null, true),
      new Move("Illusion Serpent ~ Right Outer", "3B", "M", null, null, null, null, null, null, true),
      new Move("Falling Fang", "2B", "M", null, null, null, null, null, null, false, false, true),
      new Move("Nunchaku Lick ~ Right Outer", "1B", "L", null, null, null, null, null, null, true),
      new Move("Snake Kiss ~ Left Outer", "4B", "M", null, null, null, null, null, null, true),
      new Move("Mantis Lunge ~ Left Inner", "236B", "MMM", null, null, null, null, null, null, true),
      new Move("Crouching Inner Upper", "CB", "M", null, null, null, null, null, null, false, false, true),
      new Move("Rolling Biting Upper ~ Left Inner", "WB", "M", null, null, null, null, null, null, true),
      new Move("Cobra Fangs ~ Left Outer", "JB", "M", null, null, null, null, null, null, true),
      new Move("Reverse Snake Bite", "TB", "M", null, null, null, null, null),
      new Move("Reverse Biting Upper", "T2B", "M", null, null, null, null, null, null, false, false, true)
    ],
    // Kicks
    [
      new Move("Fang Scratch", "K", "H", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Left Roundhouse", "6K", "H", null, null, null, null, null),
      new Move("Snap Kick", "3K", "M", null, null, null, null, null),
      new Move("Quick Slice", "2K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Circling Dragon ~ Left Outer", "1KA", "LHM", null, null, null, null, null, null, true),
      new Move("Illusion Kick ~ Right Outer", "1KB", "LM", null, null, null, null, null, null, true),
      new Move("Illusion Low Kicks", "1KK", "LL", null, null, null, null, null, null, false, false, true),
      new Move("Right Roundhouse", "4K", "H", null, null, null, null, null),
      new Move("Hurricane", "236K", "MMMMMMM", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Quick Slice", "CB", "L", null, null, null, null, null, null, false, false, true),
      new Move("Dragon Scream", "WKK", "MH", null, null, null, null, null),
      new Move("Reverse Roundhouse", "JK", "M", null, null, null, null, null),
      new Move("Reverse Fang Scratch", "TK", "H", null, null, null, null, null),
      new Move("Reverse Illusion Kick", "T2K", "L", null, null, null, null, null, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Vagabond", "A+B", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Dragon's Brand", "6A+B", "M", null, null, null, null, null),
      new Move("Guillotine Dance", "2A+B", "LH", null, null, null, null, null, null, false, false, true),
      new Move("Rage of Pleasure", "4A+B", "MM", null, null, null, null, null),
      new Move("Rage of Pleasure", "4a+b", "MM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Falling Sky", "8A+B", "M", null, null, null, null, null),
      new Move("Fury ~ Right Outer", "B+KBBBAj", "MMMMMMMMM", null, null, null, null, null, null, true),
      new Move("Serpent's Pleasure", "6B+K", "MM", null, null, null, null, null, "Can be held"),
      new Move("Serpent's Pleasure ~ Right Cross", "6x+cG", "M", null, null, null, null, null, null, true),
      new Move("Tiger Slaughter", "2B+KB", "LL", null, null, null, null, null),
      new Move("Twisted Loop", "4B+K", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Dragon's Sky ~ Behind Lower", "C3A+B", "H", null, null, null, null, null, null, true),
      new Move("Canyon Carve ~ Behind Lower", "WB+K", "M", null, null, null, null, null, null, true),
      new Move("Canyon Carve ~ Right Outer", "Wx+cG", null, null, null, null, null, null, null, true),
      new Move("Reverse Blow", "TB+K", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, true)
    ],
    // 8-Way Run Moves
    [
      new Move("Striking Snake", "#|^|(A", "H", null, null, null, null, null),
      new Move("Northern Lights ~ Left Inner", "@A", "M", null, null, null, null, null, null, true),
      new Move("Northern Lights(Reverse)", "*A", "M", null, null, null, null, null),
      new Move("Propeller Nunchaku ~ Right Outer", "!|$|uAB", "HMmm", null, null, null, null, null, null, true),
      new Move("Steel Dragon ~ Left Outer", "^B", "H", null, null, null, null, null, null, true, true),
      new Move("Branding Nunchaku ~ Left Inner", "^x4", "MMMMMMMMMM", null, null, null, null, null, null, true, false, false, false, false, false, false, false, false, true),
      new Move("Return of Fear ~ Behind Lower", "#|(B", "M", null, null, null, null, null, null, true),
      new Move("Cobra's Temple ~ Right Cross", "#|(xA", "H", null, null, null, null, null, null, true),
      new Move("Mark of the Beast", "@|*B", "MMMM", null, null, null, null, null),
      new Move("Reverse Snake Cross ~ Right Cross", "!|$|uB", "M", null, null, null, null, null, null, true, true),
      new Move("Rolling Sobat", "#|^|(K", "H", null, null, null, null, null),
      new Move("Dragon Star", "@|*KKKF", "LMH", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Falling Hydra", "!|$|uK", "M", null, null, null, null, null, null, false, false, true),
      new Move("Seismic Whale ~ Right Outer", "#|^|(A+B", "MM", null, null, null, null, null, null, true),
      new Move("Seismic Whale ~ Behind Lower", "#|^|(a+b", "MM", null, null, null, null, null, null, true),
      new Move("Fish in a Barrel ~ Left Outer", "#|^|(A+BB", "MM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Dragon Cannon", "#|^|(B+K", "M", null, null, null, null, null),
      new Move("Sliding", "RK", "L", null, null, null, null, null)
    ],
    // Throws
    [
      new Move("Falling Heaven Dragon", "A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Lynching", "4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Dragon Destroyer", "ZA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Leaving the Dragon Nest ~ Behind Lower", "XA+G", "H", null, null, null, null, null, null, true, false, false, false, false, false, true),
      new Move("Parting the Waves", "VA+G", "H", null, null, null, null, null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true)
    ],
    // ************ Stances *************
    // Right Outer
    [
      new Move("Right Outer (Dubhe)", "6A", null, null, null, null, null, null, null, true),
      new Move("Dragon Bite", "[AK", "HM", null, null, null, null, null),
      new Move("Dragon Bite", "[Ak", "HM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Dragon Bite ~ Behind Lower", "[A", "H", null, null, null, null, null, null, true),
      new Move("Dragon Wing Sobat", "[BBK", "MMH", null, null, null, null, null),
      new Move("Dragon Wing Sobat ~ Right Cross", "[B", "M", null, null, null, null, null, null, true),
      new Move("Dragon Wing Sobat ~ Right Cross", "[BB", "MM", null, null, null, null, null, null, true),
      new Move("Star Gale", "[K", "H", null, null, null, null, null)
    ],
    // Left Outer
    [
      new Move("Left Outer (Merak)", "4B", null, null, null, null, null, null, null, true),
      new Move("Bloody Cross", "]AK", "LM", null, null, null, null, null),
      new Move("Wing Sobat", "]BK", "MH", null, null, null, null, null),
      new Move("Wing Sobat ~ Right Cross", "]B", "M", null, null, null, null, null, null, true),
      new Move("Skewering Hunt", "]K", "H", null, null, null, null, null, null, false, true)
    ],
    // Left Inner
    [
      new Move("Left Inner (Phecda)", "WB", null, null, null, null, null, null, null, true),
      new Move("Purity Cross ~ Right Cross", "{A", "H", null, null, null, null, null, null, true),
      new Move("Backfist Blow", "{B", "M", null, null, null, null, null),
      new Move("Dragon Pounce", "{KK", "MM", null, null, null, null, null),
      new Move("Dragon Pounce", "{Kk", "MM", null, null, null, null, null, null, false, true)
    ],
    // Right Cross
    [
      new Move("Right Cross (Megrez)", "AA", null, null, null, null, null, null, null, true),
      new Move("Dragon's Beard ~ Left Inner", "}AA", "", null, null, null, null, null, null, true, false, false, false, false, false, false, true),
      new Move("Dragon's Beard ~ Left Outer", "}Aa", "", null, null, null, null, null, null, true, false, false, false, false, false, false, true),
      new Move("Dragon's Cross", "}AB", "", null, null, null, null, null),
      new Move("Stampede Wave ~ Left Inner", "}B", "", null, null, null, null, null, null, true, false, false, false, false, false, false, true),
      new Move("Rear Kick", "}K", "M", null, null, null, null, null, null, false, true)
    ],
    // Behind Lower
    [
      new Move("Behind Lower (Alioth)", "3A", null, null, null, null, null, null, null, true),
      new Move("Inverted Moon", "☺A", "H", null, null, null, null, null),
      new Move("Black Serpent ~ Right Cross", "☺B", "M", null, null, null, null, null, null, true, true),
      new Move("Black Serpent ~ Left Outer", "☺b", "M", null, null, null, null, null, null, true, true),
      new Move("Fury Kicks", "☺KK", "LH", null, null, null, null, null)
    ],
    // Neutral Guard
    [
      new Move("Neutral Guard (Alkaid)", "B+K", null, null, null, null, null, null, "While in special stance/GI vs. high, mid vertical", true, false, false, true), // While in Special Stance, Seven Stars Rebirth
      new Move("Shin Breaker", "☻A", "L", null, null, null, null, null, null, false, true),
      new Move("Transforming Serpent ~ Right Cross", "☻BB", "MM", null, null, null, null, null, null, true),
      new Move("Transforming Serpent ~ Left Outer", "☻Bb", "MM", null, null, null, null, null, null, true),
      new Move("Transforming Serpent ~ Left Outer", "☻B", "M", null, null, null, null, null, null, true),
      new Move("Guillotine Kick", "☻KK", "LM", null, null, null, null, null),
      new Move("Raging Dragon Zodiac: Reprisal", "☻A+B+K", "M", null, null, null, null, null, "Return to right outer with A+B+K (hold)", false, false, false, false, false, false, true, true, false, false, true),
      new Move("Seven Stars Fury ~ Right Outer", "B+KBBBA", "MMMMMMMMM", null, null, null, null, null, "Time precisely for increased damage", true, true), // During Seven Stars Severance
      new Move("Pure Seven", "6", "", null, null, null, null, null, "While in a special stance/GI vs. high, mid horizontal", true, false, false, true) // While in a special stance
    ]   
  ]

  Mitsurugi = [
    // Reversal Edge Attacks
    [
      new Move("Quivering Strike", "B+G", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Quivering Strike", "b+g", "M", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Bamboo Blind Slice", "rAAA", "HHH", null, null, null, null, null, null, false, true),
      new Move("Bamboo Blind Slice ~ Relic", "rAa", "HH", null, null, null, null, null, null, true, true),
      new Move("Flight of the Swans", "rB", "M", null, null, null, null, null, "Shifts to attack throw upon hit/Shifts to clash upon guard", false, true, false, false, false, false, true, true),
      new Move("Harvest Lantern Divide", "rKBB", "MMMM", null, null, null, null, null, null, false, true),
      new Move("Harvest Stalk Reaper", "rKKB", "MLM", null, null, null, null, null, null, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Thunderbolt Blade", "A+B+K", "M", null, null, null, null, null, null, false, false, false, false, false, false, true, false, false, false, true),
      new Move("Soul Charge", "4A+B+K", "m", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Tear Step", "SxA", "M", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, true, true),
      new Move("Nirvana Cannon", "S3BB", "MM", null, null, null, null, null, "2nd hit can be delayed", false, true, false, false, false, true, false, true),
      new Move("Roaring Top", "ScB", "MM", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Harvest Dance", "S1KBB", "LMM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Endless Howl", "S@|*BB", "MM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Exploding Flame Roar", "S#|^|(A+B", "M", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Imperial Zeal", "236AoABj", "HHM", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Step Heavenly Divide", "236B", "M", null, null, null, null, null, null, false, false, false, false, false, true)
    ],
    // Horizontal Moves
    [
      new Move("Prime Moon Shadow Rush", "AAA", "HHH", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Double Binder", "6AA", "HM", null, null, null, null, null),
      new Move("Double Binder ~ Relic", "6a", "H", null, null, null, null, null, null, true),
      new Move("Twisted Gold", "3A", "M", null, null, null, null, null),
      new Move("Knee Slice", "2A", "S", null, null, null, null, null, null, false, false, true),
      new Move("Shin Slicer", "1A", "L", null, null, null, null, null, null, false, true),
      new Move("Pattern Dance", "1AB", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Drawn Breath", "4A", "H", null, null, null, null, null),
      new Move("Drawn Breath ~ Mist", "4a", "H", null, null, null, null, null, null, true),
      new Move("Knee Slice", "CA", "S", null, null, null, null, null, null, false, false, true),
      new Move("Reaving Shears", "WAA", "MH", null, null, null, null, null),
      new Move("Field Reave", "JA", "H", null, null, null, null, null),
      new Move("Reverse Slice", "TA", "H", null, null, null, null, null),
      new Move("Hidden Slice", "T2A", "S", null, null, null, null, null, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Tribute", "BBB", "MMM", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true, false, false, false, false, true),
      new Move("Tribute", "BBb", "MMM", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Tribute ~ Mist", "Bb", "MM", null, null, null, null, null, null, true),
      new Move("Mask", "x6", "H", null, null, null, null, null, null, false, true),
      new Move("Feint L", "xA", "M", null, null, null, null, null),
      new Move("Furious Stab ~ Mist", "6BB", "MM", null, null, null, null, null, null, true),
      new Move("Heaven Cannon", "3B", "M", null, null, null, null, null, null, false, true),
      new Move("Air Tale", "2B", "M", null, null, null, null, null),
      new Move("Leap of the Loach", "1BB", "LM", null, null, null, null, null, null, false, false, true),
      new Move("Sun Flip ~ Relic", "1BA+B", "LM", null, null, null, null, null, null, true, true, false, false, false, false, false, true),
      new Move("Wind Hole Upper", "4B", "H", null, null, null, null, null),
      new Move("Upper Arch", "CB", "M", null, null, null, null, null, null, false, false, true),
      new Move("Heavenly Stich", "WB2B", "MM", null, null, null, null, null, null, false, true),
      new Move("Falling Rust", "JB", "M", null, null, null, null, null),
      new Move("Reverse Divide", "TB", "M", null, null, null, null, null),
      new Move("Hidden Divide", "2B", "M", null, null, null, null, null, null, false, false, true)
    ],
    // Kicks
    [
      new Move("Snap Kick", "K", "H", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Obedience", "cB", "MM", null, null, null, null, null),
      new Move("Wheel Kick", "6K", "H", null, null, null, null, null),
      new Move("Front Kick", "3K", "M", null, null, null, null, null),
      new Move("Hem Stitch", "2K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Stalk Shaver", "1KB", "LM", null, null, null, null, null),
      new Move("Stalk Shaver ~ Mist", "1Kb", "LM", null, null, null, null, null, null, true),
      new Move("Bullet Cutter", "4KB", "MM", null, null, null, null, null),
      new Move("Hem Stitch", "CK", "L", null, null, null, null, null, null, false, false, true),
      new Move("Bullet Stopper", "WK", "M", null, null, null, null, null),
      new Move("Jump Kick", "JK", "M", null, null, null, null, null),
      new Move("Reverse Kick", "TK", "H", null, null, null, null, null),
      new Move("Hidden Kick", "T2K", "L", null, null, null, null, null, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Geyser Cannon", "A+B", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Dividing Thrust", "6A+B", "M", null, null, null, null, null, "Shifts to attack throw upon close-range hit", false, false, false, false, false, false, true),
      new Move("Cold stitch", "2A+B", "M", null, null, null, null, null),
      new Move("Wheel Slash", "7|8|9A+B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Steel Slicer", "B+K", "MM", null, null, null, null, null),
      new Move("Triple Steel", "B+KvBj", "MMM", null, null, null, null, null),
      new Move("Full Moon Disembowel", "2B+K", "M", null, null, null, null, null, "Shifts to attack throw upon close-range hit", false, false, false, false, false, false, true, false, true, true),
      new Move("Full Moon Disembowel", "2b+k", "M", null, null, null, null, null, "Shifts to attack throw upon close-range hit", false, false, false, false, false, false, true, false, true, true),
      new Move("Samurai Tackle", "TB+K", "M", null, null, null, null, null)
    ],
    // 8-Way Run Moves
    [
      new Move("Swift Edge", "#|^|(AA", "HH", null, null, null, null, null),
      new Move("Rib Ripper", "@|*A", "M", null, null, null, null, null, null, false, true),
      new Move("Drawn Air", "!|$|uA", "M", null, null, null, null, null),
      new Move("Drawn Air ~ Relic", "#|$|ua", "M", null, null, null, null, null, null, true),
      new Move("Heavenly Dance", "#|^|(BB", "MM", null, null, null, null, null),
      new Move("Heavenly Dance ~ Relic", "#|^|(b", "M", null, null, null, null, null, null, true),
      new Move("Hell Flash", "@|*B", "M", null, null, null, null, null),
      new Move("Blunt Flames", "!|$|uBAB", "MHM", null, null, null, null, null),
      new Move("Blunt Flames ~ Mist", "!|$|uBa", "MH", null, null, null, null, null, null, true),
      new Move("Blunt Flames(Cancel) ~ Relic", "!|$|uBAxG", "MH", null, null, null, null, null, null, true),
      new Move("Bell Breaker", "^K", "M", null, null, null, null, null),
      new Move("Rising Knee", "#|(K", "M", null, null, null, null, null),
      new Move("Shin Clip", "@|*K", "L", null, null, null, null, null),
      new Move("Bullet Cutter", "!|$|uKB", "MM", null, null, null, null, null),
      new Move("Phoenix Tail", "#|^|(A+B", "M", null, null, null, null, null),
      new Move("Phoenix Tail(Cancel) ~ Relic", "#|^|(z+xG", null, null, null, null, null, null, null, true),
      new Move("Sliding", "RK", "L", null, null, null, null, null),
    ],
    // Throws
    [
      new Move("Sea of Madness", "A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Zen Blade", "4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Gates of Hell", "ZA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("8th Bill of Punishment", "XA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Divine Gift", "VA+G", "H", null, null, null, null, null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Lion's Clutch", "6A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Lion's Clutch", "]A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true)
    ],
    // ************ Stances *************
    // Silent Step
    [
      new Move("Silent Step", "236", null, null, null, null, null, null, null, true),
      new Move("Ear Slicer", "[AoAj", "HH", null, null, null, null, null),
      new Move("Step Stone Divide", "[B", "M", null, null, null, null, null),
      new Move("Step Stone Divide(hold)", "[b", "M", null, null, null, null, null),
      new Move("Silent Stalk Spin", "[K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Silent Stalk Spin ~ Relic", "[K", "L", null, null, null, null, null, null, true)
    ],
    // Mist
    [
      new Move("Mist", "6B+K", null, null, null, null, null, null, "Cancel stance with G", true),
      new Move("Mist", "#|^|(B+K", null, null, null, null, null, null, null, true),
      new Move("Full Divide", "]A", "H", null, null, null, null, null),
      new Move("Cloud Cutter", "]BBBB", "HHHM", null, null, null, null, null, "During Mist B to return to Mist"),
      new Move("Cloud Cutter ~ Relic", "]B", "H", null, null, null, null, null, null, true),
      new Move("Purifying Thrust", "]6B", "M", null, null, null, null, null, "Shifts to attack throw upon close-range hit", false, false, false, false, false, false, true),
      new Move("Water Parting Thrust", "]KB", "LH", null, null, null, null, null),
      new Move("Divide", "]A+B", "M", null, null, null, null, null, "Revenge Attack"),
      new Move("Divide", "]A+Bw", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Lion's Clutch", "]A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Relic", "]B+K", null, null, null, null, null, null, null, true),
      new Move("Mist Step", "]66|44", null, null, null, null, null, null, null, true),
      new Move("Mist ~ Jump", "]7|8|9", null, null, null, null, null, null, null, true),
      new Move("Mist ~ Duck", "]1|2|3", null, null, null, null, null, null, null, true)
    ],
    // Relic
    [
      new Move("Relic", "4B+K", null, null, null, null, null, null, "Cancel stance with G", true),
      new Move("Relic", "!|$|uB+K", null, null, null, null, null, null, null, true),
      new Move("Quick Draw ~ Relic", "{AA", "HH", null, null, null, null, null, "Time precisely for increased damage", true, false, false, false, false, false, false, true),
      new Move("Quick Draw ~ Mist", "{a", "H", null, null, null, null, null, null, true),
      new Move("Fire Brand", "{B", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Leaping the Bullet", "{K", "M", null, null, null, null, null),
      new Move("Cannon Divide ~ Relic", "{A+B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Cannon Divide ~ Relic(hold)", "{a+b", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Mist", "{B+K", null, null, null, null, null, null, null, true),
      new Move("False Purification ~ Relic", "{6G", null, null, null, null, null, null, "GI vs. high, middle, low attacks", false, false, false, true),
      new Move("False Purification", "{6GI", "MMM", null, null, null, null, null),
      new Move("Relic Step", "{66|44", null, null, null, null, null, null, null, true),
      new Move("Relic ~ Jump", "{7|8|9", null, null, null, null, null, null, null, true),
      new Move("Relic ~ Duck", "{1|2|3", null, null, null, null, null, null, null, true)
    ]
  ]

  Nightmare = [
    // Reversal Edge Attacks
    [
      new Move("Azure Retribution", "B+G", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Azure Retribution", "b+g", "M", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Calculated Slaughter", "rA", "H", null, null, null, null, null, null, false, true),
      new Move("Crown Splitter ~ Night Side Stance", "rB", "M", null, null, null, null, null, "Shifts to clash upon guard", true, true, false, false, false, false, false, true),
      new Move("Crimson Fountain", "rK", "M", null, null, null, null, null, "Shifts to attack throw upon hit/Triggers Terror Charge", false, true, false, false, false, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Dark Reconquista: Triumph", "A+B+K", "M", null, null, null, null, null, "Revenge Attack", false, false, false, false, false, false, true, false, false, false, true),
      new Move("Dark Reconquista: Triumph", "a+b+k", "M", null, null, null, null, null, "Revenge Attack", false, false, false, false, false, false, true, false, true, false, true),
      new Move("Soul Charge", "4A+B+K", "m", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Death Lord's Impalement", "S6BBB", "MMMMMM", null, null, null, null, null, "1st hit is Revenge attack", false, false, false, false, false, true, false, true),
      new Move("Malicious Lord's Destruction", "SKB", "HM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Haunted Lord's Torment", "SWKB", "MH", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Haunted Lord's Torment", "SWKb", "MH", null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Death Lord's Agony", "S#|^|(KK", "MM", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Death Lord's Agony ~ Grim Stride", "S#|^|(Kc6", "MM", null, null, null, null, null, null, true, false, false, false, false, true, false, true),
      new Move("Grim Lord's Desolation", "S[AA", "HH", null, null, null, null, null, "GI vs high, mid vertical/Shifts to attack throw upon hit", false, false, false, true, false, true, true),
      new Move("Grim Lord's Auto-da-fe", "S[KK", "MH", null, null, null, null, null, "Triggers Terror Charge", false, false, false, false, false, true, true, true),
      new Move("Sable Destruction", "S[A+B", "MMM", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Vert Annihilation", "S]A+B", "MMMM", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Gules Obliteration", "S{A+B", "MMMH", null, null, null, null, null, "GI vs. horizontal(except kicks)", false, false, false, true, false, true, false, true),
      new Move("Phantom Lord's Gammadia", "S}xAB", "HM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Purpure Devastation", "S}A+B", "MM", null, null, null, null, null, null, false, false, false, false, false, true, false, true)
    ],
    // Horizontal Moves
    [
      new Move("Plague Spreader", "AA", "HM", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Plague Spreader ~ Grim Stride", "Az6", "H", null, null, null, null, null, null, true),
      new Move("Plague Spreader ~ Night Side Stance", "a", "H", null, null, null, null, null, null, true),
      new Move("Quick Chainmail Buster", "zB", "M", null, null, null, null, null),
      new Move("Quick Backspin Slash", "zxA", "H", null, null, null, null, null, null, false, true),
      new Move("Quick Backspin Slash(fast)", "zxAF", "", null, null, null, null, null, null, false, true),
      new Move("Quick Neck Buster", "zvA", "", null, null, null, null, null, null, false, true),
      new Move("Quick Neck Buster(fast)", "zvAF", "", null, null, null, null, null, null, false, true),
      new Move("Blood Storm", "6AA", "", null, null, null, null, null, "1st hit is Revenge attack"),
      new Move("Blood Storm ~ Night Side Stance", "6a", "", null, null, null, null, null, "Revenge Attack", true),
      new Move("Blood Storm ~ Night Behind Stance", "6AzG", "H", null, null, null, null, null, "Revenge Attack", true),
      new Move("Dire Vengeance", "w6A", "M", null, null, null, null, null, "GI vs. high, mid & low/Triggers Terror Charge", false, true, false, true, false, false, false, true),
      new Move("Mail Crusher", "3AA", "MM", null, null, null, null, null),
      new Move("Cursed Shadow", "3AK", "MH", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Jade Slicer", "2A", "L", null, null, null, null, null, null, false, false, true),
      new Move("Shadow Slicer", "1A", "L", null, null, null, null, null, null, false, true),
      new Move("Shadow Slicer", "1a", "L", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Jade Crusher", "1zK", "H", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Jade Crusher ~ Grim Stride", "1A6", "L", null, null, null, null, null, null, true, true),
      new Move("Back Blade", "4A", "H", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Jade Slicer", "CA", "L", null, null, null, null, null, null, false, false, true),
      new Move("Maelstrom", "WAA", "ML", null, null, null, null, null),
      new Move("Maelstrom ~ Night Side Stance", "Wa", "M", null, null, null, null, null, null, true),
      new Move("Maelstrom ~ Grim Stride", "WAz6", "M", null, null, null, null, null, null, true),
      new Move("Fatal Spin Slash", "JA", "H", null, null, null, null, null),
      new Move("Turning Head Slash", "TA", "H", null, null, null, null, null),
      new Move("Turning Leg Slash", "T2A", "S", null, null, null, null, null, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Chariot Splitter", "BB", "MM", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Chariot Splitter ~ Night Behind Stance", "Bx4", "M", null, null, null, null, null, null, true),
      new Move("Double Avenger", "6BB", "MM", null, null, null, null, null, "1st hit is Revenge attack"),
      new Move("Dire Vengeance", "w6B", "M", null, null, null, null, null, "GI vs. high, middle & low/Triggers Terror Charge", false, true, false, true, false, false, false, true),
      new Move("Death Smash", "3B", "M", null, null, null, null, null),
      new Move("Death Smash ~ Night Side Stance", "3b", "M", null, null, null, null, null, null, true),
      new Move("Shadow Buster", "2B", "M", null, null, null, null, null, null, false, false, true),
      new Move("Shadow Buster ~ Night Lower Stance", "2b", "M", null, null, null, null, null, null, true),
      new Move("Dark Soul Impact", "1B", "L", null, null, null, null, null),
      new Move("Triple Headbutt", "4BBB", "MMM", null, null, null, null, null),
      new Move("Shadow Buster", "CB", "M", null, null, null, null, null, null, false, false, true),
      new Move("Shadow Buster ~ Night Lower Stance", "Cb", "M", null, null, null, null, null, null, true),
      new Move("Soul Taker", "C3B", "M", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Upper Claw", "WB", "M", null, null, null, null, null, null, false, true),
      new Move("Upper Claw ~ Night Side Stance", "Wb", "M", null, null, null, null, null, null, true, true),
      new Move("Fatal Buster", "JB", "M", null, null, null, null, null),
      new Move("Turning Sword Buster", "TB", "M", null, null, null, null, null),
      new Move("Turning Shadow Buster", "T2B", "M", null, null, null, null, null, null, false, false, true)
    ],
    // Kicks
    [
      new Move("Jade Strike", "K", "H", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Adamantine Cracker", "6K", "H", null, null, null, null, null, "Revenge attack", false, true),
      new Move("Dire Vengeance", "w6K", "M", null, null, null, null, null, "GI vs. high, mid & low/Triggers Terror Charge", false, true, false, true, false, false, false, true),
      new Move("Dark Rush Kick", "3K", "M", null, null, null, null, null),
      new Move("Dark Low Kick", "2K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Earth Trample", "1K", "L", null, null, null, null, null),
      new Move("Earth Trample", "1k", "L", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Sinew Crusher", "4KB", "MM", null, null, null, null, null),
      new Move("Double Death Strike", "4KK", "MH", null, null, null, null, null, "Shifts to attack throw upon hit/Triggers Terror Charge", false, false, false, false, false, false, true),
      new Move("Dark Low Kick", "CK", "L", null, null, null, null, null, null, false, false, true),
      new Move("Dark Head Upper", "WK", "M", null, null, null, null, null),
      new Move("Fatal Brave Kick", "JK", "M", null, null, null, null, null),
      new Move("Turning Dark High Kick", "TK", "H", null, null, null, null, null),
      new Move("Turning Dark Low Kick", "T2K", "L", null, null, null, null, null, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Midnight Launcher ~ Night Behind Stance", "A+B", "", null, null, null, null, null, null, true, true, false, false, false, false, false, true),
      new Move("Soul Wave", "6A+B", "", null, null, null, null, null, "Revenge attack/Triggers Terror Charge"),
      new Move("Dire Vengeance", "w6A+B", "", null, null, null, null, null, "GI vs. high, mid & low/Triggers Terror Charge", false, true, false, true, false, false, false, true),
      new Move("Soul Smasher", "2A+B", "", null, null, null, null, null, "Shifts to attack throw upon close-range hit/Triggers Terror Charge", false, false, false, false, false, false, true),
      new Move("Soul Smasher", "2A+B", "", null, null, null, null, null, "Against downed opponent/Shifts to attack throw upon close-range hit/Triggers Terror Charge", false, false, false, false, false, false, true), // Against downed opponent
      new Move("Soul Blaze", "4A+B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Soul Wave (Ambush)", "TA+B", "M", null, null, null, null, null, "Revenge attack/Triggers Terror Charge", false, false, false, false, false, false, false, true),
      new Move("Dire Vengeance", "wTA+B", "M", null, null, null, null, null, "GI vs. high, mid & low/Triggers Terror Charge", false, true, false, true, false, false, false, true)
    ],
    // 8-Way Run Moves
    [
      new Move("Right Slasher", "#|&|(A", "H", null, null, null, null, null),
      new Move("Right Slasher ~ Grim Stride", "#|^|(z6", "H", null, null, null, null, null, null, true),
      new Move("Death Rage", "@|*AA", "MM", null, null, null, null, null),
      new Move("Death Rage ~ Grim Stride", "@|*Az6", "M", null, null, null, null, null, null, true),
      new Move("Plague Storm", "!|$|uA", "M", null, null, null, null, null),
      new Move("Plague Storm ~ Grim Stride", "#|$|uz6", null, null, null, null, null, null, null, true),
      new Move("Ether Splitter", "#|^|(B", "M", null, null, null, null, null),
      new Move("Ether Splitter ~ Grim Stride", "#|^|(x6", "M", null, null, null, null, null, null, true),
      new Move("Ether Splitter ~ Night Behind Stance", "#|^|(b", "M", null, null, null, null, null, null, true),
      new Move("Rook Splitter", "@|*B", "M", null, null, null, null, null, null, false, true, true),

      new Move("Rook Splitter ~ Night Lower Stance", "@|*b", "M", null, null, null, null, null, null, true, true),
      new Move("Darkness Impact", "!|uB", "L", null, null, null, null, null),
      new Move("Darkness Impact ~ Night Lower Stance", "!|ub", "L", null, null, null, null, null, null, true),
      new Move("Shadow Breaker", "$BB", "MM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Shadow Breaker ~ Night Side Stance", "$Bb", "MM", null, null, null, null, null, null, true, false, false, false, false, false, false, true),

      new Move("Shoulder Rush", "#|^|(K", "M", null, null, null, null, null),
      new Move("Shoulder Rush ~ Grim Stride", "#|^|(c6", "M", null, null, null, null, null, null, true),
      new Move("Bloody Jade Impact", "@|*K", "m", null, null, null, null, null, "Becomes a low attack when at distance"),
      new Move("Drop Kick", "!|$|uK", "H", null, null, null, null, null, "Returns to downed position", false, false, false, false, false, false, false, true),
      new Move("Crimson Vortex", "#|^|(A+B", "M", null, null, null, null, null),
      new Move("Sliding", "RK", "L", null, null, null, null, null)
    ],
    // Throws
    [
      new Move("Shoulder Claw Throw", "A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Soul Devour", "4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Doom's Invitation", "ZA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Unholy Terror", "XA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Witch Hunt", "VA+G", "H", null, null, null, null, null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Flap Jack", "3A+G", "L", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Over Toss", "1A+G", "L", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true)
    ],
    // ************ Stances *************
    // Grim Stride
    [
      new Move("Grim Stride", "236", null, null, null, null, null, null, null, true, false, true),
      new Move("Grim Fang", "[A", "H", null, null, null, null, null, "GI vs. high, mid vertical", false, false, false, true),
      new Move("Evil Eye", "[zB", "H", null, null, null, null, null, null, false, true),
      new Move("Grim Launcher", "[B", "M", null, null, null, null, null),
      new Move("Grim Launcher ~ Grim Stride", "[x6", "M", null, null, null, null, null, null, true),
      new Move("Grim Riser Kick", "[K", "M", null, null, null, null, null),
    ],
    // Night Lower Stance
    [
      new Move("Night Lower Stance", "B+K", null, null, null, null, null, null, "Returns to crouch when cancelled", true),
      new Move("Night Lower Stance", "TB+K", null, null, null, null, null, null, "Reutrns to crouch when cancelled", true),
      new Move("Leg Hacker", "]A", "L", null, null, null, null, null),
      new Move("Leg Hacker ~ Night Side Stance", "]a", "L", null, null, null, null, null, null, true),
      new Move("Death Horn Charge", "]B", "M", null, null, null, null, null, "Sifts to attack throw upon close-range hit", false, false, false, false, false, false, true),
      new Move("Death Horn Charge ~ Night Behind Stance", "]b", "M", null, null, null, null, null, null, true),
      new Move("Death Lifting Kick", "]K", "MH", null, null, null, null, null),
      new Move("Night Lower Stance ~ Night Behind Stance", "]6B+K", null, null, null, null, null, null, null, true),
      new Move("Night Lower Stance ~ Night Side Stance", "]4B+K", null, null, null, null, null, null, null, true),
      new Move("Night Lower Stance ~ Grim Stride", "]236", null, null, null, null, null, null, null, true)
    ],
    // Night Behind Stance
    [
      new Move("Night Behind Stance", "6B+K", null, null, null, null, null, null, null, true),
      new Move("Terror Sweeper", "{A", "", null, null, null, null, null),
      new Move("Terror Sweeper ~ Night Side Stance", "{a", "", null, null, null, null, null, null, true),
      new Move("Terror Vortex", "{B", "", null, null, null, null, null),
      new Move("Knee Kick Rush", "{KK", "", null, null, null, null, null),
      new Move("Night Behind Stance ~ Night Lower Stance", "{B+K", null, null, null, null, null, null, null, true),
      new Move("Night Behind Stance ~ Night Side Stance", "{4B+K", null, null, null, null, null, null, null, true),
      new Move("Night Behind Stance ~ Grim Stride", "{236", null, null, null, null, null, null, null, true)
    ], 
    // Night Side Stance
    [
      new Move("Night Side Stance", "4B+K", null, null, null, null, null, null, null, true),
      new Move("Soul Biter", "}A", "M", null, null, null, null, null),
      new Move("Soul Biter ~ Night Side Stance", "}a", "M", null, null, null, null, null, null, true),
      new Move("Phantom Star", "}zB", "M", null, null, null, null, null, null, false, true),
      new Move("Phantom Star ~ Night Behind Stance", "}zb", "M", null, null, null, null, null, null, true, true),
      new Move("Phantom Splitter", "}B", "M", null, null, null, null, null),
      new Move("Skull Chopper", "}xA", "H", null, null, null, null, null),
      new Move("Skull Chopper(fast)", "}xAF", "H", null, null, null, null, null),
      new Move("Night Front Kick", "}K", "H", null, null, null, null, null),
      new Move("Night Side Stance ~ Night Lower Stance", "}B+K", null, null, null, null, null, null, null, true),
      new Move("Night Side Stance ~ Night Behind Stance", "}6B+K", null, null, null, null, null, null, null, true),
      new Move("Night Side Stance ~ Grim Stride", "}236", null, null, null, null, null, null, null, true)
    ]
  ]

  Raphael = [
    // Reversal Edge Attacks
    [
      new Move("Venomous Strike", "B+G", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Venomous Strike", "b+g", "M", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Venomous Strike ~ Arriere Gambit", "B+G4", "M", null, null, null, null, null, "vs. low attacks/ Shifts to clash upon hit", true, false, false, true, true),
      new Move("Venomous Strike (Cancel) ~ Arriere Gambit", "x+n4", null, null, null, null, null, null, "vs. low attacks", true, false, false, true),
      new Move("Fatal Sting", "B+GB", "MH", null, null, null, null, null, "1st hit shifts to clash upon hit", false, false, false, false, true),
      new Move("Fatal Sting ~ Preparation", "B+Gb", "MH", null, null, null, null, null, "1st hit shifts to clash upon hit / Dodges high attacks", true, false, false, false, true),
      new Move("Venomous Strike", "[B+G", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Venomous Strike", "[b+g", "M", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Venomous Strike ~ Arriere Gambit", "[B+G", "M", null, null, null, null, null, "Shifts to clash upon hit or guard", true, false, false, false, true, false, false, true),
      new Move("Venomous Strike (Cancel) ~ Arriere Gambit", "[x+n4", null, null, null, null, null, null, "Shifts to clash upon hit or guard", true, false, false, false, true, false, false, true),
      new Move("Fatal Sting", "[B+GB", "MH", null, null, null, null, null, "1st hit shifts to clash upon hit", false, false, false, false, true),
      new Move("Fatal Sting ~ Preparation", "[B+Gb", "MH", null, null, null, null, null, "1st hit shifts to clash upon hit / Dodges high attacks", true, false, false, false, true),
      new Move("Toxic Talon", "rA", "H", null, null, null, null, null, null, false, true),
      new Move("Fatal Skewer", "rB", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Bella Donna Spin", "rK", "MH", null, null, null, null, null, null, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Royal Poison", "A+B+G", "M", null, null, null, null, null, null, false, false, false, false, false, false, true, false, false, false, true),
      new Move("Royal Poison: Fatal Dose", "[A+B+G", "M", null, null, null, null, null, null, false, false, false, false, false, false, true, true, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Viper Hiss", "S6AB", "HM", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Viper Hiss ~ Preparation", "S6Ab", "HM", null, null, null, null, null, "Dodges high attacks", true, false, false, false, false, true, false, true),
      new Move("Renegade Thrust", "S4AB", "HM", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Renegade Thrust ~ Preparation", "S4Ab", "HM", null, null, null, null, null, "Dodges high attacks", true, false, false, false, false, true, false, true),
      new Move("Death Throes", "S6BBBB", "HHMM", null, null, null, null, null, null, false, false, false, false, false, true, true),
      new Move("Vicious Viper", "S4BBB", "HHM", null, null, null, null, null, null, false, false, false, false, false, true), 
      new Move("Tarantula Swarm", "S1KB", "LL", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Le Vol d'lcare", "S2A+BB", "MMH", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Scarlet Roar", "SJAB", "MM", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Scarlet Roar ~ Preparation", "SJAb", "MM", null, null, null, null, null, "Dodges high attacks", true, false, false, false, false, true, false, true),
      new Move("Thousand Hornets", "SA+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, true, true),
      new Move("Rampage of the Queen Bee", "S[BBA+B", "HHMMMMMMMMM", null, null, null, null, null, null, false, false, true, false, false, true),
      new Move("Folie a Deux", "S[6KK", "MH", null, null, null, null, null, null, false, false, false, false, false, true)
    ],
    // Horizontal Moves
    [
      new Move("Temple Bayonet", "AA", "HH", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Quick Needle", "AB", "HL", null, null, null, null, null),
      new Move("Vicious Lullaby", "6AA", "HH", null, null, null, null, null),
      new Move("Violent Blood", "3A", "M", null, null, null, null, null, null, false, true),
      new Move("Cleaving Talon", "2A", "S", null, null, null, null, null, null, false, false, true),
      new Move("Hell Snipe", "1A", "L", null, null, null, null, null, null, false, false, true),
      new Move("Heavy Mandritti", "4A", "H", null, null, null, null, null),
      new Move("Rising Wyvern", "46A", "H", null, null, null, null, null, null, false, true),
      new Move("Low Tondo Roveral", "CA", "S", null, null, null, null, null, null, false, false, true),
      new Move("Rising Tondo", "WA", "H", null, null, null, null, null),
      new Move("Scarlet Talon", "JA", "M", null, null, null, null, null),
      new Move("Turning Attack au Fer", "TA", "H", null, null, null, null, null),
      new Move("Low Turn Attack au Fer", "T2A", "S", null, null, null, null, null, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Rapid Arrogance", "BBBB", "MMHM", null, null, null, null, null, "3rd hit can be delayed", false, false, false, false, false, false, false, false, false, true),
      new Move("Rapid Arrogance (just)", "BBBB", "MMHM", null, null, null, null, null),
      new Move("Rapid Arrogance ~ Arriere Gambit", "BBB4", "MMH", null, null, null, null, null, null, true, false, false, true),
      new Move("Phasing Moon", "BBK", "MMM", null, null, null, null, null),
      new Move("Grave Needle", "x2B", "LL", null, null, null, null, null),
      new Move("Single Montante", "x4", "M", null, null, null, null, null),
      new Move("Triple Botta in Tempo", "6BBB", "HHM", null, null, null, null, null),
      new Move("Triple Botta in Tempo(just)", "6BBB", "HHM", null, null, null, null, null),
      new Move("Triple Botta in Tempo ~ Arriere Gambit", "6B4", "H", null, null, null, null, null, "vs. low attacks", true, false, false, true),
      new Move("Triple Botta in Tempo ~ Preparation", "6Bb", "HH", null, null, null, null, null, "Dodges high attacks", true),
      new Move("Raptor Rush", "3B", "M", null, null, null, null, null, null),
      new Move("Raptor Rush ~ Preparation", "3b", "M", null, null, null, null, null, "Dodges high attacks", true),
      new Move("Fendante", "2B", "M", null, null, null, null, null, null, false, false, true),
      new Move("Striking Snake", "1B", "L", null, null, null, null, null),
      new Move("Striking Snake ~ Preparation", "1b", "L", null, null, null, null, null, "Dodges high attacks", true),
      new Move("Wicked Thrust", "4B", "H", null, null, null, null, null),
      new Move("Wicked Thrust ~ Preparation", "4b", "H", null, null, null, null, null, "Dodges high attack", true),
      new Move("Affondo Fendante", "236B", "M", null, null, null, null, null, null, false, true),
      new Move("Affondo Fendante(fast)", "236BF", "M", null, null, null, null, null, null, false, true),
      new Move("Nouveau Soleil", "214B", "H", null, null, null, null, null, null, false, true),
      new Move("Nouveau Soleil(fast)", "214BF", "H", null, null, null, null, null, null, false, true),
      new Move("Deadly Dirge", "46B", "M", null, null, null, null, null, null, null, true),
      new Move("Crouching Montante", "CB", "M", null, null, null, null, null, null, false, false, true),
      new Move("Advance Slicer", "C3B", "M", null, null, null, null, null, null, false, true),
      new Move("Rising Threat", "WBB", "MH", null, null, null, null, null),
      new Move("Rising Threat ~ Arriere Gambit", "WBB4", "MH", null, null, null, null, null, "vs. low attacks", true, false, false, true),
      new Move("Sky Agente", "JB", "M", null, null, null, null, null),
      new Move("Turning Montante", "TB", "M", null, null, null, null, null),
      new Move("Low Turn Montante", "T2B", "M", null, null, null, null, null, null, false, false, true)
    ],
    // Kick Moves 
    [
      new Move("Venom High Kick", "K", "H", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Venom Toe Kick", "6K", "M", null, null, null, null, null),
      new Move("Venom Kick", "3K", "M", null, null, null, null, null),
      new Move("Harm Kick", "2K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Pirouette Sweep", "1K", "L", null, null, null, null, null),
      new Move("Venom Heel", "4K", "H", null, null, null, null, null),
      new Move("Hemlock Kick", "46K", "H", null, null, null, null, null, null, false, true),
      new Move("Harm Kick", "CK", "L", null, null, null, null, null, null, false, false, true),
      new Move("High Toe Kick", "WK", "H", null, null, null, null, null),
      new Move("Chaos Moon", "JK", "M", null, null, null, null, null),
      new Move("Turning Venom High Kick", "TK", "H", null, null, null, null, null),
      new Move("Turning Sweep Kick", "T2K", "L", null, null, null, null, null, null, false, null, true)
    ],
    // Dual Button Attacks
    [
      new Move("Enveloping Stocatta", "A+B", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Fury of the Loup-Garou", "6A+B", "MH", null, null, null, null, null, "Can be held"),
      new Move("Baroque Storm", "2A+B", "MM", null, null, null, null, null),
      new Move("Assalto Montante Crescendo", "4A+BA", "MML", null, null, null, null, null),
      new Move("Blood Roar", "8A+B", "HM", null, null, null, null, null, "vs. high, middle horizontal/thrusting attacks (except kicks)", false, false, false, true),
      new Move("Cantarella Needle (Advance)", "6B+K", "M", null, null, null, null, null),
      new Move("Cantarella Needle (Left)", "6B+K8", "M", null, null, null, null, null),
      new Move("Cantarella Needle (Right)", "6B+K2", "M", null, null, null, null, null),
      new Move("Spiral Envelopment", "B+K", null, null, null, null, null, null, "Dodges high, middle attacks/Increases evasion window by holding buttons", true),
      new Move("Circular Envelopment", "2B+K", null, null, null, null, null, null, "Dodges middle attacks/Increase evasion window by holding buttons", true),
      new Move("Sly Riposte", "B", "M", null, null, null, null, null, "After successfully form dodging"),
      new Move("Sly Riposte ~ Arriere Gambit", "B4", "M", null, null, null, null, null, "After successfully form dodging", true, false, false, true),
      new Move("Spiral Envelopment", "TB+K", null, null, null, null, null, null, "Dodges high, middle attacks/Increases evasion window by holding buttons", true),
      new Move("Circular Envelopment", "T2B+K", null, null, null, null, null, null, "Dodges middle attacks/Increase evasion window by holding buttons", true)
    ],
    // 8-Way Run Moves
    [
      new Move("Bloody Slicer", "#|^|(A", "H", null, null, null, null, null),
      new Move("Merciless Stramazone", "@|*AA", "HH", null, null, null, null, null),
      new Move("Merciless Stramazone ~ Arriere Gambit", "@|*AA4", "HH", null, null, null, null, null, "vs. low attacks", true, false, false, true),
      new Move("Deadly Strikes", "@|*AB", "HL", null, null, null, null, null),
      new Move("Deadly Strikes ~ Preparation", "@|*Ab", "HL", null, null, null, null, null, "Dodges high attacks", true),
      new Move("Squalambrato Concierto", "!|$|uAB", "MM", null, null, null, null, null),
      new Move("Squalambrato Concierto ~ Preparation", "!|$|uAb", "MM", null, null, null, null, null, "Dodges high attacks", true),
      new Move("Broken Thrust", "^B", "M", null, null, null, null, null),
      new Move("Broken Thrust ~ Preparation", "^b", "M", null, null, null, null, null, "Dodges high attacks", true),
      new Move("Death Guise", "#|(B", "L", null, null, null, null, null),
      new Move("Valiant Falcon", "@|*BB", "MM", null, null, null, null, null),
      new Move("Aiming Shaft", "!|$|uB", "L", null, null, null, null, null),
      new Move("Venom Side Kick", "#|^|(K", "H", null, null, null, null, null),
      new Move("Venom Roundhouse", "@|*K", "H", null, null, null, null, null),
      new Move("Dark Moon", "!|$|uK", "M", null, null, null, null, null, "Into Back turned on hit"),
      new Move("Wyvern's Tail", "#|^|(A+B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Bloody Funeral", "!|$|uA+B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Bloody Funeral(cancel) ~ Preparation", "!|$|uz+xG", null, null, null, null, null, null, "Dodges high attacks", true),
      new Move("Dread Coffin", "#|^|(B+K", "M", null, null, null, null, null),
      new Move("Dread Coffin ~ Preparation", "#|^|(b+k", "M", null, null, null, null, null, "Dodges high attacks", true),
      new Move("Sliding", "RK", "L", null, null, null, null, null)
    ],
    // Throws
    [
      new Move("Unending Stings", "A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Death Puppet", "4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("A Lesson in Massacre", "ZA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Undertaker", "XA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Pure Sacrifice", "VA+G", "H", null, null, null, null, null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Thousand Hornets", "SA+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, true, true)
    ],
    // ************ Stances *************
    // Preparation
    [
      new Move("Preparation", "3b", null, null, null, null, null, null, "Dodges high attacks", true),
      new Move("Ebony Slash", "[AA", "MM", null, null, null, null, null),
      new Move("Ebony Combo", "[AB", "MH", null, null, null, null, null),
      new Move("Ebony Combo ~ Preparation", "[Ab", "MH", null, null, null, null, null, "Dodges high attacks", true),
      new Move("Lunging Press", "[6A", "H", null, null, null, null, null),
      new Move("Underworld Call", "[BBB", "HHM", null, null, null, null, null),
      new Move("Underworld Call(just)", "[BBBj", "HHM", null, null, null, null, null),
      new Move("Underworld Call ~ Preparation", "[Bb", "HH", null, null, null, null, null, "Dodges high attacks", true),
      new Move("Rapid Head Hunter", "[BK", "HH", null, null, null, null, null),
      new Move("Trifold Slash", "[BBA", "HHL", null, null, null, null, null, null, false, false, true),
      new Move("Dread Intrigue", "[6B", "", null, null, null, null, null),
      new Move("Lunatic Rouge", "[KKvBj", "HMH", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Pirouette Kick", "[6K", "M", null, null, null, null, null),
      new Move("Cantarella Needle (Retreat)", "[B+K", "M", null, null, null, null, null),
      new Move("Royal Poison: Fatal Dose", "[A+B+K", "M", null, null, null, null, null, null, false, false, false, false, false, true, true, true),
      new Move("Venomous Strike", "[B+G", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Venomous Strike", "[b+g", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true, false, false, true),
      new Move("Venomous Strike ~ Arriere Gambit", "[B+G4", "M", null, null, null, null, null, "vs. low attacks/Shifts to clash upon hit", true, false, false, true, true),
      new Move("Venomous Strike(cancel) ~ Arriere Gambit", "[z+x4", null, null, null, null, null, null, "vs. low attacks/Shifts to clash upon hit", true, false, false, true),
      new Move("Fatal Sting", "[B+GB", "MH", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Fatal Sting ~ Preparation", "[B+Gb", "MH", null, null, null, null, null, "Shifts to clash upon hit", true, false, false, false, true, false, false, true),
      new Move("Preparation ~ Preparation", "[6", null, null, null, null, null, null, "Dodges high attacks", true),
      new Move("Preparation ~ Arriere Gambit", "[4", null, null, null, null, null, null, "vs. low attacks", true, false, false, true),
      new Move("Preparation ~ Shadow Evade", "[2", null, null, null, null, null, null, "Can be held/Dodges high attacks", true)
    ],
    // Arriere Gambit
    [
      new Move("Arriere Gambit", "[4", null, null, null, null, null, null, "vs. low attacks", true, false, false, true),
      new Move("Heavy Mandritti", "]AB", "MM", null, null, null, null, null),
      new Move("Bite of the Deadly Adder", "]B", "M", null, null, null, null, null),
      new Move("Dark Stinger", "]K", "L", null, null, null, null, null),
      new Move("Dark Stinger Crescendo(just)", "]KvK", "LL", null, null, null, null, null),
      new Move("Arriere Gambit ~ Preparation", "]6", null, null, null, null, null, null, "Dodges high attacks", true)
    ],
    // Shadow Evade
    [
      new Move("Shadow Evade", "[2", null, null, null, null, null, null, "Can be held/Dodges high attacks", true),
      new Move("Bloody Assault", "{A", "M", null, null, null, null, null),
      new Move("Bloody Terror", "{B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Mandrake Heel", "{K", "L", null, null, null, null, null)
    ],
    // Quick Parade
    [
      new Move("Quick Parade", "4B+K", null, null, null, null, null, null, "vs. middle attacks", false, false, false, true),
      new Move("Quick Parade ~ Preparation", "4b+k", null, null, null, null, null, null, "vs. middle attacks/Dodges high attacks", true, false, false, true),
      new Move("Haunted Talon", "}A", "L", null, null, null, null, null),
      new Move("Dreaded Rampage", "}BB", "MMMMMMMM", null, null, null, null, null)
    ]
  ]

  Siegfried = [
    // Reversal Edge Attacks
    [
      new Move("Nightwalker", "B+G", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Nightwalker", "b+g", "M", null, null, null, null, null, "Shifts to clash upon hit or block", false, false, false, false, true, false, false, true),
      new Move("Anthem Slasher ~ Side Hold", "rA", "H", null, null, null, null, null, null, true, true),
      new Move("Midnight Splitter", "rB", "M", null, null, null, null, null, "Shifts to clash upon guard", false, true, false, false, false, false, false, true),
      new Move("Defiant Knee Stomp", "rKB", "MM", null, null, null, null, null, null, false, true),
      new Move("Defiant Knee Stomp ~ Base Hold", "rKb", "MM", null, null, null, null, null, null, true, true),
      new Move("Defiant Knee Stomp ~ Chief Hold", "rK", "M", null, null, null, null, null, null, true, true),
      new Move("Defiant Knee Kick Rush", "rKK", "MH", null, null, null, null, null, null, false, true),
      new Move("Defiant Knee Kick Rush ~ Chief Hold", "rKk", "MH", null, null, null, null, null, null, true, true),
      new Move("Defiant Vortex", "SrKA+B", "MM", null, null, null, null, null, null, false, true, false, false, false, true, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Deep Scar", "A+B+K", "M", null, null, null, null, null, "Progresses toward Dark Legacy", false, false, false, false, false, false, true, false, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Rising Hilt ~ Chief Hold", "Sb6B", "MM", null, null, null, null, null, null, true, false, false, false, false, true, false, true),
      new Move("Brazen Splitter", "S4A+B+B", "MMM", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Kaizer Charge ~ Chief Hold", "S#|^|(KB", "MM", null, null, null, null, null, null, true, false, false, false, false, true, false, true),
      new Move("Reborn Grinder", "S[K", "MMM", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Haunted Assault", "S]AA", "HH", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Kick Rush Vortex", "S{KA+B", "MM", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Defiant Vortex", "SrKA+B", "MM", null, null, null, null, null, null, false, true, false, false, false, true, false, true)
    ],
    // Horizontal Moves
    [
      new Move("Progressive Step", "AAA", "HHH", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Progressive Step ~ Side Hold", "a", "H", null, null, null, null, null, null, true),
      new Move("Progressive Step ~ Chief Hold", "Az4", "H", null, null, null, null, null, null, true),
      new Move("Slash Impact", "AAB", "HHL", null, null, null, null, null),
      new Move("Slash Impact ~ Base Hold", "AAb", "HHL", null, null, null, null, null, null, true),
      new Move("Agressive Onrush", "zB", "M", null, null, null, null, null),
      new Move("Agressive Onrush(fast)", "zBF", "M", null, null, null, null, null),
      new Move("Agressive Onrush ~ Base Hold", "zB", "M", null, null, null, null, null, null, true),
      new Move("Quick Backspin Slash", "znA", "H", null, null, null, null, null),
      new Move("Quick Backspin Slash(fast)", "znAF", "H", null, null, null, null, null, null, false, true),
      new Move("Quick Backspin Slash ~ Reverse Side Hold", "zna", "H", null, null, null, null, null, null, true),
      new Move("Nightbane Slasher", "6AA", "HH", null, null, null, null, null),
      new Move("Shadow Strike", "6AB", "HM", null, null, null, null, null),
      new Move("Nightbane Slasher ~ Reverse Side Hold", "6a", "H", null, null, null, null, null, null, true),
      new Move("Armlet Crusher", "3A", "M", null, null, null, null, null),
      new Move("Alternate Cross", "3a4", "M", null, null, null, null, null),
      new Move("Leg Slash", "2A", "L", null, null, null, null, null, null, false, false, true),
      new Move("Double Grounder Beta", "1AA", "LL", null, null, null, null, null),
      new Move("Quick Spin Slash", "4A", "H", null, null, null, null, null),
      new Move("Quick Spin Slash ~ Side Hold", "4a", "H", null, null, null, null, null, null, true),
      new Move("Leg Slash", "CA", "L", null, null, null, null, null, null, false, false, true),
      new Move("Maelstrom", "WAA", "ML", null, null, null, null, null),
      new Move("Maelstrom ~ Side Hold", "Wa", "M", null, null, null, null, null, null, true),
      new Move("Maelstrom", "WAa2", "M", null, null, null, null, null, null, false, false, true),
      new Move("Fatal Spin Slash", "JA", "H", null, null, null, null, null),
      new Move("Turning Head Slash", "TA", "H", null, null, null, null, null),
      new Move("Turning Leg Slash", "T2A", "S", null, null, null, null, null, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Castle Toppler", "BB", "MM", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Hilt Knocker", "x6", "M", null, null, null, null, null),
      new Move("Piercing Strike", "xnB", "M", null, null, null, null, null),
      new Move("Illusion Rampart", "6BB", "MM", null, null, null, null, null),
      new Move("Illusion Rampart ~ Chief Hold", "6b", "M", null, null, null, null, null, null, true),
      new Move("Sky Splitter", "3B", "M", null, null, null, null, null, null, false, true),
      new Move("Sky Splitter ~ Chief Hold", "3b", "M", null, null, null, null, null, null, true, true),
      new Move("Shadow Buster", "2B", "M", null, null, null, null, null, null, false, false, true),
      new Move("Shadow Buster ~ Base Hold", "2b", "M", null, null, null, null, null, null, true),
      new Move("Grief Impact", "1B", "L", null, null, null, null, null),
      new Move("Grief Impact ~ Base Hold", "1b", "L", null, null, null, null, null, null, true),
      new Move("Thrust Throw", "4B", "M", null, null, null, null, null, "Shifts to attack throw upon close-range hit", false, false, false, false, false, false, true),
      new Move("Earth Divide", "236B", "M", null, null, null, null, null, "Cancel with G", false, false, false, false, false, false, false, false, true),
      new Move("Split Buster", "CB", "M", null, null, null, null, null, null, false, false, true),
      new Move("Split Buster ~ Base Hold", "Cb", "M", null, null, null, null, null, null, true),
      new Move("Rising Splitter", "WB", "M", null, null, null, null, null),
      new Move("Rising Splitter ~ Chief Hold", "Wb", "M", null, null, null, null, null, null, true),
      new Move("Diving Splitter", "JB", "M", null, null, null, null, null),
      new Move("Diving Splitter ~ Chief Hold", "Jb", "M", null, null, null, null, null, null, true),
      new Move("Turning Sword Thrust", "TBB", "ML", null, null, null, null, null),
      new Move("Turning Shadow Buster", "T2B", "M", null, null, null, null, null, null, false, false, true)
    ],
    // Kicks
    [
      new Move("Grief High Kick", "K", "H", null, null, null, null, null, null, false, false, true),
      new Move("Grief Side Kick", "6K", "M", null, null, null, null, null),
      new Move("Axle Head Upper", "3KKK", "MLM", null, null, null, null, null),
      new Move("Grief Low Kick", "2K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Grievance", "1K", "L", null, null, null, null, null),
      new Move("Grievance ~ Chief Hold", "1k", "L", null, null, null, null, null, null, true),
      new Move("Spin Slash Double Grounder", "4KAAA", "HHLL", null, null, null, null, null),
      new Move("Spin Slash Double Grounder ~ Chief Hold", "4Ka", "HH", null, null, null, null, null, null, true),
      new Move("Spinning Cross Combo", "4KAB", "HHM", null, null, null, null, null),
      new Move("Spin Kick Combo", "4KK", "HM", null, null, null, null, null),
      new Move("Stomping", "236KKKKK", "LLLLL", null, null, null, null, null),
      new Move("Grief Low Kick", "CK", "L", null, null, null, null, null, null, false, false, true),
      new Move("Rising Night Kick", "WK", "MM", null, null, null, null, null),
      new Move("Diving Axle Headbutt", "JKK", "LM", null, null, null, null, null),
      new Move("Turning Grief High Kick", "TK", "H", null, null, null, null, null),
      new Move("Turning Grief Low Kick", "T2K", "L", null, null, null, null, null, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Anthem Slasher ~ Side Hold", "A+B", "HS", null, null, null, null, null, null, true, true, false, false, false, false, false, true),
      new Move("Grim Omen", "6A+B", null, null, null, null, null, null, "GI vs. high, mid & low/Progresses toward Dark Legacy", false, false, false, true),
      new Move("Soul Wave: Epitaph", "6A+B", "MMMM", null, null, null, null, null, "During Dark Legacy/GI vs. high, mid & low", false, false, false, true, false, false, false, true),
      new Move("Flying Edge", "2A+B", "M", null, null, null, null, null, null, false, false, true),
      new Move("Blaze Wind ~ Side Hold", "4A+B", "MMM", null, null, null, null, null, null, true),
      new Move("Blaze Storm", "4A+BA", "MML", null, null, null, null, null),
      new Move("Chief Hold", "TB+K", null, null, null, null, null, null, "GI vs. horizontal (except kicks)", true, false, false, true)
    ],
    // 8-Way Run Moves
    [
      new Move("Rebuff Turn Slash", "#|^|(A", "H", null, null, null, null, null, "GI vs. horizontal (except kicks)", false, false, false, true, false, false, false, true),
      new Move("Rebuff Turn Slash ~ Base Hold", "#|^|(a", "H", null, null, null, null, null, "GI vs. horizontal (except kicks)", true, false, false, true, false, false, false, true),
      new Move("Memento Slap", "@|*A", "M", null, null, null, null, null),
      new Move("Backspin Slash", "!|$|uA", "H", null, null, null, null, null),
      new Move("Backspin Slash ~ Reverse Side Hold", "!|$|ua", "H", null, null, null, null, null, null, true),
      new Move("Rook Splitter", "^B", "M", null, null, null, null, null, null, false, false, true),
      new Move("Cloud Splitter", "#|(B", "M", null, null, null, null, null),
      new Move("Cloud Splitter ~ Chief Hold", "#|(b", "M", null, null, null, null, null, null, true),
      new Move("Armor Breaker", "@|*BBB", "MMM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Armor Breaker ~ Base Hold", "@|*b", "M", null, null, null, null, null, null, true),
      new Move("Armor Breaker ~ Chief Hold", "@|*BBb", "MMM", null, null, null, null, null, null, true, false, false, false, false, false, false, true),
      new Move("Break Kick", "@|*BBK", "MMH", null, null, null, null, null),
      new Move("Fatal Dive", "!|$|uBB", "MM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Fatal Dive ~ Base Hold", "!|$|ub", "M", null, null, null, null, null, null, true),
      new Move("Fatal Dive ~ Chief Hold", "!|$|uxG", null, null, null, null, null, null, null, true),
      new Move("Fatal Dive ~ Chief Hold", "!|$|uxG", null, null, null, null, null, null, null, true),
      new Move("Fatal Dive ~ Chief Hold", "!|$|uBb", "MM", null, null, null, null, null, null, true, false, false, false, false, false, false, true),
      new Move("Ascending Kick", "#|^|(KK", "MH", null, null, null, null, null),
      new Move("Grievous Low Kick", "@|*K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Grievous Low Kick ~ Base Hold", "@|*k", "L", null, null, null, null, null, null, true),
      new Move("Drop Kick", "!|$|uK", "H", null, null, null, null, null, "Returns to downed position"),
      new Move("Schwarz Drive", "#|^|(A+B", "MM", null, null, null, null, null, "Can be held", false, true),
      new Move("Sliding", "RK", "L", null, null, null, null, null)
    ],
    // Throws
    [
      new Move("Hilt Impact", "A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Lingering Regret", "4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Calamity Fall", "ZA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Silent Pride", "XA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Neutral Judge", "VA+G", "H", null, null, null, null, null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Nightmare Killer", "6A+G", "H", null, null, null, null, null, "Breakable", false, true, false, false, false, false, true),
      new Move("Flap Jack", "3A+G", "L", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Over Toss", "1A+G", "L", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true)
    ],
    // ************ Stances *************
    // Base Hold
    [
      new Move("Base Hold", "B+K", null, null, null, null, null, null, "GI vs. middle, low horizontal(except kicks)", true, false, false, true),
      new Move("Reborn Storm", "[A", "L", null, null, null, null, null),
      new Move("Reborn Storm", "[z2", null, null, null, null, null, null, null, false, false, true),
      new Move("Reborn Kaiser", "[B", "M", null, null, null, null, null, null, false, true),
      new Move("Reborn Basher", "[K", "M", null, null, null, null, null),
      new Move("Landing Slasher", "[A+B", "L", null, null, null, null, null),
      new Move("Landing Slasher ~ Reverse Side Hold", "[z+xG", null, null, null, null, null, null, null, true),
      new Move("Base Hold ~ Reverse Side Hold", "[6B+K", null, null, null, null, null, null, null, true),
      new Move("Base Hold ~ Chief Hold", "[2|8B+K", null, null, null, null, null, null, null, true),
      new Move("Base Hold ~ Side Hold", "[4B+K", null, null, null, null, null, null, null, true)
    ],
    // Reverse Side Hold
    [
      new Move("Reverse Side Hold", "6B+K", null, null, null, null, null, null, null, true),
      new Move("Geist Slasher", "]A", "H", null, null, null, null, null),
      new Move("Geist Strike", "]B", "M", null, null, null, null, null, null, false, true),
      new Move("Geist Spinning Low Kick", "]K", "L", null, null, null, null, null, null, false, true),
      new Move("Geist Spinning Low Kick ~ Reverse Side Hold", "]k", "L", null, null, null, null, null, null, true, true),
      new Move("Riend Shatter", "]A+B", "M", null, null, null, null, null, null, false, false, true),
      new Move("Reverse Side Hold ~ Reverse Side Hold", "]6B+K", null, null, null, null, null, null, null, true),
      new Move("Reverse Side Hold ~ Chief Hold", "]2|8B+K", null, null, null, null, null, null, null, true),
      new Move("Reverse Side Hold ~ Side Hold", "]4B+K", null, null, null, null, null, null, null, true),
      new Move("Reverse Side Hold ~ Base Hold", "]B+K", null, null, null, null, null, null, null, true)
    ],
    // Chief Hold
    [
      new Move("Chief Hold", "2|8B+K", null, null, null, null, null, null, null, true),
      new Move("Chief Hold", "TB+K", null, null, null, null, null, null, "GI vs. horizontal(except kicks)", true, false, false, true),
      new Move("Terror Circular", "{AA", "HL", null, null, null, null, null),
      new Move("Terror Circular ~ Side Hold", "{a", "H", null, null, null, null, null, null, true),
      new Move("Terror Circular ~ Reverse Side Hold", "{Aa", "HL", null, null, null, null, null, null, true),
      new Move("Terror Stomper", "{B", "M", null, null, null, null, null, null, false, true),
      new Move("Terror Stomper", "{b", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Terror Knee Stomp", "{KB", "MM", null, null, null, null, null, "During Chief Hold K to return to Chief Hold"),
      new Move("Terror Knee Stomp ~ Base Hold", "{Kb", "MM", null, null, null, null, null, null, true),
      new Move("Terror Knee Kick Rush", "{KK", "MH", null, null, null, null, null),
      new Move("Terror Knee Kick Rush ~ Chief Hold", "{Kk", "MH", null, null, null, null, null, null, true),
      new Move("Terror Slap", "{A+B", "H", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Chief Hold ~ Reverse Side Hold", "{6B+K", null, null, null, null, null, null, null, true),
      new Move("Chief Hold ~ Chief Hold", "{2|8B+K", null, null, null, null, null, null, null, true),
      new Move("Chief Hold ~ Side Hold", "{4B+K", null, null, null, null, null, null, null, true),
      new Move("Chief Hold ~ Base Hold", "{B+K", null, null, null, null, null, null, null, true)
    ],
    // Side Hold
    [
      new Move("Side Hold", "4B+K", null, null, null, null, null, null, null, true),
      new Move("Double Grounder Alpha", "}AA", "LL", null, null, null, null, null),
      new Move("Double Grounder Alpha ~ Reverse Side Hold", "}a", "L", null, null, null, null, null, null, true),
      new Move("Phantom Castling", "}BBB", "MMM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Phantom Castling ~ Chief Hold", "}BBb", "MMM", null, null, null, null, null, null, true, false, false, false, false, false, false, true),
      new Move("High Kick Beta", "}K", "H", null, null, null, null, null),
      new Move("Shadow Slasher", "}A+B", "L", null, null, null, null, null),
      new Move("Side Hold ~ Reverse Side Hold", "}6B+K", null, null, null, null, null, null, null, true),
      new Move("Side Hold ~ Chief Hold", "}2|8B+K", null, null, null, null, null, null, null, true),
      new Move("Side Hold ~ Side Hold", "}4B+K", null, null, null, null, null, null, null, true),
      new Move("Side Hold ~ Base Hold", "}B+K", null, null, null, null, null, null, null, true)
    ]    
  ]

  Sophitia = [
    // Reversal Edge Attacks
    [
      new Move("Holy Resonance", "B+G", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Holy Resonance", "b+g", "M", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Celestial Blade", "rA", "H", null, null, null, null, null, null, false, true),
      new Move("Celestial Blade ~ Angel Step", "rA6", "H", null, null, null, null, null, null, true, true),
      new Move("Angel Vanguard", "rB", "MM", null, null, null, null, null, "Shifts to clash upon guard", false, true, false, false, false, false, false, true),
      new Move("Spiritual Spin Kick", "rK", "M", null, null, null, null, null, null, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Providential Thunder", "A+B+K", "M", null, null, null, null, null, null, false, false, false, false, false, false, true, false, false, true),
      new Move("Soul Charge", "4A+B+K", "m", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Cutlass Empyrean", "S4AB", "HM", null, null, null, null, null, "1st hit can be held", false, false, false, false, false, true, false, true),
      new Move("Mystic Sword Rain", "SBBBB", "MMMMM", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Guardian Punisher", "S2|CBB", "MM", null, null, null, null, null, "Can shift to Seraphim Punisher upon hit", false, false, false, false, false, true),
      new Move("Temporal Punisher", "SB+KB", "MM", null, null, null, null, null, "Can shift to Seraphim Punisher upon hit", false, false, false, false, false, true),
      new Move("Twin Step Sword Rain", "S#|$|u4A+BB", "MMM", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Mirage Cross", "S$AB", "MM", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Sun's Corona", "S[AAB", "MLM", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Angel Punisher", "S[B", "M", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Angel Punisher(fast)", "S[BF", "M", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Painful Fate", "S[Bv4", "M", null, null, null, null, null, null, false, false, false, false, false, true, true),
      new Move("Heaven's Rapture", "S[BvB", "M", null, null, null, null, null, null, false, false, false, false, false, true, true),
      new Move("Seraphim Punisher", "S]B", "M", null, null, null, null, null, null, false, true, false, false, false, true),
      new Move("Angel Arc", "S]Bv4", "M", null, null, null, null, null, null, false, false, false, false, false, true, true),
      new Move("Heaven's Rapture", "S]BvB", "M", null, null, null, null, null, null, false, false, false, false, false, true, true)
    ],
    // Horizontal Moves
    [
      new Move("Starlight Blade", "AAA", "HHH", null, null, null, null, null, null ,false, false, false, false, false, false, false, false, false, true),
      new Move("Starlight Blade ~ Angel Step", "AAA6", "HHH", null, null, null, null, null, null, true),
      new Move("Slide Tornado", "AK", "HL", null, null, null, null, null),
      new Move("Roaring Stream", "6AA", "HL", null, null, null, null, null, "GI vs. low attacks", false, false, true, true),
      new Move("Roaring Stream ~ Angel Step", "6AA6", "HL", null, null, null, null, null, "GI vs. low attacks", true, false, false, true),
      new Move("Angel Punisher", "3A", "M", null, null, null, null, null),
      new Move("Under Slide Blade", "2A", "S", null, null, null, null, null, null, false, false, true),
      new Move("Iron Butterfly", "1AA", "LM", null, null, null, null, null),
      new Move("Cutlass Europa", "4AAA", "HLM", null, null, null, null, null, "1st hit can be held"),
      new Move("Cutlass Seraphim", "4AB", "HM", null, null, null, null, null, "1st hit can be held"),
      new Move("Cutlass Europa", "4aAAA", "HLML", null, null, null, null, null),
      new Move("Under Slide Blade", "CA", "S", null, null, null, null, null, null, false, false, true),
      new Move("Full Turn Blade", "WA", "M", null, null, null, null, null),
      new Move("Jumping Mirage Satellite", "JA", "H", null, null, null, null, null),
      new Move("Turning Slide Blade", "TA", "H", null, null, null, null, null),
      new Move("Turning Under Stream", "T2A", "S", null, null, null, null, null, null, false, false, true),
    ],
    // Vertical Moves
    [
      new Move("Divine Mist", "BBB", "MMMM", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Angel's Flow", "BK", "MH", null, null, null, null, null),
      new Move("Ascetic's Force", "6BA", "MM", null, null, null, null, null, "GI vs. mid verticals(except Kicks, thrusting attacks)", false, false, false, true),
      new Move("Ascetic's Blade", "6xA", "M", null, null, null, null, null, "GI vs. mid verticals(except Kicks, thrusting attacks)", false, false, false, true),
      new Move("Press the Hilt", "6BB", "MM", null, null, null, null, null, "GI vs. mid vericals(except kicks)", false, false, false, true),
      new Move("Paladin Purifier", "3B", "M", null, null, null, null, null),
      new Move("Guardian Strike", "2BB", "MM", null, null, null, null, null, "Can shift to Angel Strike upon hit"),
      new Move("Guardian Spear Kick", "2BK", "MH", null, null, null, null, null, null, false, true),
      new Move("Nasty Impale", "1BBBB", "LLLL", null, null, null, null, null),
      new Move("Sword Shower", "4B", "M", null, null, null, null, null),
      new Move("Guardian Strike", "CBB", "MM", null, null, null, null, null, "Can shift to Angel Strike upon hit"),
      new Move("Guardian Spear Kick", "CBK", "MH", null, null, null, null, null, null, false, true),
      new Move("Under Splash", "C3B", "M", null, null, null, null, null, null, false, false, true),
      new Move("Exile", "B", "M", null, null, null, null, null),
      new Move("Divine Exile", "JB", "M", null, null, null, null, null),
      new Move("Turning Sword Splash", "TB", "M", null, null, null, null, null),
      new Move("Turning Under Splash", "2TB", "M", null, null, null, null, null, null, false, false, true)
    ],
    // Kick Moves 
    [
      new Move("Kick Duo", "KK", "HM", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Holy Punishment", "6K", "M", null, null, null, null, null),
      new Move("Flapping Heel Kick", "3K", "M", null, null, null, null, null),
      new Move("Spring Under Kick", "2K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Tornado Low Kick", "1K", "L", null, null, null, null, null),
      new Move("Tornado Low Kick", "1k", "L", null, null, null, null, null, null, false, true),
      new Move("Rising Temple", "4K", "H", null, null, null, null, null),
      new Move("Spring Under Kick", "CK", "L", null, null, null, null, null, null, false, false, true),
      new Move("Angel's Spring", "WK", "MM", null, null, null, null, null),
      new Move("Holy Crest Kick", "JK", "M", null, null, null, null, null),
      new Move("Turning Holy High Kick", "TK", "H", null, null, null, null, null),
      new Move("Turning Angel Sweep", "T2K", "L", null, null, null, null, null, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Elk Strike", "A+B", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("El Fortune", "6A+B", null, null, null, null, null, null, "GI vs mid attacks", false, false, false, true),
      new Move("Spinning Hilt", "6A+BI", "H", null, null, null, null, null, "On GI vertical"),
      new Move("Guardian's Judgment", "6A+BI", "MMM", null, null, null, null, null, "On GI vertical"),
      new Move("Tornado High Kick", "6A+BI", "H", null, null, null, null, null, "On GI kick"),
      new Move("Angel Fall", "8A+B", "m", null, null, null, null, null, "Becomes a low when at distance"),
      new Move("Angel Fall", "8a+b", "m", null, null, null, null, null, "Becomes a low when at distance", false, false, false, false, false, false, false, false, true),
      new Move("Twin Step Grace", "4A+B", "MM", null, null, null, null, null),
      new Move("Temperance Strike", "B+KB", "MM", null, null, null, null, null, "Can shift to Angel Strike upon hit"),
      new Move("Quick Strike", "6B+K", "M", null, null, null, null, null),
      new Move("Angel Stroke", "8B+KAB", "MMLM", null, null, null, null, null),
      new Move("Angel Fall", "8B+KB", "MMM", null, null, null, null, null),
      new Move("Angel's Sault", "8B+KK", "MMM", null, null, null, null, null),
      new Move("Heaven's Gate", "4B+K", "M", null, null, null, null, null, "Cancel with G", false, false, false, false, false, false, false, false, true),
      new Move("Dawn of Eos", "WB+K", "HM", null, null, null, null, null),
      new Move("Hip Charge", "TB+K", "M", null, null, null, null, null)
    ],
    // 8-Way Run Moves
    [
      new Move("Silent Cross", "#|^|(A", "M", null, null, null, null, null),
      new Move("Shield Rush", "@A", "H", null, null, null, null, null),
      new Move("Inverse Shield Rush", "*A", "H", null, null, null, null, null),
      new Move("Reverse Mirage", "$A", "M", null, null, null, null, null, "Shifts to follow-up attack upon counter hit"),
      new Move("Reverse Mirage ~ Angel Step", "$A6", "M", null, null, null, null, null, null, true),
      new Move("Silent Stream", "!|uAA", "LM", null, null, null, null, null),
      new Move("Silent Stream", "!|uAa", "LM", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Olympus Cannon", "#|^|(B", "M", null, null, null, null, null),
      new Move("Guardian's Judgment", "@|*BAK", "MMM", null, null, null, null, null),
      new Move("Guardian Upper", "!|#|uB", "M", null, null, null, null, null, null, false, true),
      new Move("Plasma Blade", "#|^|(K", "M", null, null, null, null, null),
      new Move("Angel Side Kick", "@|*K", "M", null, null, null, null, null),
      new Move("Tornado High Kick", "!|$|uK", "H", null, null, null, null, null),
      new Move("Tornado Feint", "!|$|ukK", "M", null, null, null, null, null),
      new Move("Lodestar Strike", "#|^|(A+B", "H", null, null, null, null, null, null, false, true),
      new Move("Ascension", "@|*A+B", "M", null, null, null, null, null),
      new Move("Twin Step Grace", "!|$|uA+B", "MM", null, null, null, null, null),
      new Move("Jet Stream Rush", "#|^|(B+KAB", "MHM", null, null, null, null, null),
      new Move("Olympus Shower", "@|*|!|$|uB+K", "M", null, null, null, null, null, null, false, true),
      new Move("Heaven's Arch", "#|^|(A+B", "H", null, null, null, null, null, "Breakable", false, true, false, false, false, false, true),
      new Move("Sliding", "RK", "L", null, null, null, null, null)
    ],
    // Throws
    [
      new Move("Widow Maker", "A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Widow Maker", "A+G@", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Holy Cracker", "4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Heaven To Hell", "4A+GA|4A", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Round Knocker", "ZA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Broken Promise", "XA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Bottoms Up", "VA+G", "H", null, null, null, null, null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Heaven's Arch", "#|^|(A+G", "H", null, null, null, null, null, "Breakable", false, true, false, false, false, false, true)
    ],
    // ************ Stances *************
    // Angel Step
    [
      new Move("Angel Step", "236", null, null, null, null, null, null, null, true),
      new Move("Angel Satellite", "[AA", "ML", null, null, null, null, null),
      new Move("Angel's Strike", "[B", "M", null, null, null, null, null),
      new Move("Angel's Strike(fast)", "[BF", "M", null, null, null, null, null),
      new Move("Painful Fate", "[Bv4", "M", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Painful Fate(just)", "[Bv4j", "M", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Heaven's Rapture", "[BvB", "M", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Heaven's Rapture(just)", "[BvBj", "M", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Holy Arrow Kick", "[K", "H", null, null, null, null, null, null, false, true),
      new Move("Angel Step ~ Sidestep", "[2|8", null, null, null, null, null, null, "Can be shifted to during Angel Step", true)
    ],
    // Twin Angel Step
    [
      new Move("Twin Angel Step", "2366|23^", null, null, null, null, null, null, null, true),
      new Move("Seraphim Blade", "]AA", "ML", null, null, null, null, null, "Second hit can be delayed", false, false, true),
      new Move("Seraphim Echo", "]AB", "MM", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Seraphim Strike", "]B", "M", null, null, null, null, null, null, false, true),
      new Move("Painful Fate", "]Bv4", "M", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Angel Arc(just)", "]Bv4j", "M", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Heaven's Rapture", "]BvB", "M", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Heaven's Rapture(just)", "]BvBj", "M", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Tornado Feint", "]K", "M", null, null, null, null, null)
    ]
  ]

  Xianghua = [
    // Reversal Edge Attacks
    [
      new Move("Jade Break", "B+G", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Jade Break", "b+g", "M", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Place Rhythm", "rAA", "HL", null, null, null, null, null, null, false, true, true),
      new Move("Jewel Song", "rAB", "HM", null, null, null, null, null, null, false, true),
      new Move("Palace Rhythm ~ Facing away", "rAzG", "H", null, null, null, null, null, null, false, true, true),
      new Move("Auspicious Strike", "rB", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Lin Yuen Kick", "rK", "M", null, null, null, null, null, null, false, true),
      new Move("Lin Yuen Kick ~ Hou Lee", "rKB+K", "M", null, null, null, null, null, null, true, true)
    ],
    // Gauge Attacks
    [
      new Move("Sublimating Blade", "A+B+K", "M", null, null, null, null, null, null, false, false, false, false, false, false, true, false, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Dazzling Song", "SAB", "HM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Wind Blossom Song", "SAABB", "HHMMM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Qing Quake Step", "SAABK", "HHMMm", null, null, null, null, null, "Becomes a low attack when at a distance", false, false, false, false, false, true, false, true),
      new Move("Red Moon Chime", "S6AKK", "HLMM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Lian Hua Pagoda Sweeps", "S6AK2K", "HLL", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Shining Blossom", "S3AA", "LM", null, null, null, null, null, null, false, false, true, false, false, true),
      new Move("Flower Dance", "SxKB", "MMM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Shining Swallow", "S6KBB", "MMM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Shining Swallow ~ Silent Xia Sheng", "S6Kb", "MM", null, null, null, null, null, null, true, false, false, true, false, true),
      new Move("Drunken Woan Shyong Swing", "S#|^|(KK", "ML", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Woan Shyong Feint Divide", "S#|&|(KAAB", "MMMML", null, null, null, null, null, null, false, false, true, false, false, true),
      new Move("Woan Shyong Feint Kick", "S#|^|(KAAK", "MMMMM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Radiant Ring", "S#|^|(A+BB", "MMMM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Scintillating Waterfall", "S#|^|(B+KB", "MM", null, null, null, null, null, null, false, false, true, false, false, true),
      new Move("Scintillating Waterfall", "S#|^|(B+KxG", "M", null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Silent Xia Sheng", "Sb+k", null, null, null, null, null, null, "GI vs. high, mid(except kicks)", true, false, false, true, false, true),
      new Move("Heavenly Waterfall", "S]B", "M", null, null, null, null, null, null, false, false, true, false, false, true, false, true),
      new Move("Heavenly Waterfall", "S]b", "M", null, null, null, null, null, null, false, false, true, false, false, true, false, false, true),
      new Move("Twisting Lotus Flower", "S]A+G|4A+GB", "H", null, null, null, null, null, null, false, false, false, false, false, true, true),
      new Move("Playful Xia Sheng", "S]2", null, null, null, null, null, null, "Can be shifted to follow-up during SXS/Can be held", true, false, false, false, false, true)
    ],
    // Horizontal Moves
    [
      new Move("Beautiful Melody", "AAA", "HHM", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Beautiful Rhythm", "AAB", "HHM", null, null, null, null, null),
      new Move("Beautiful Rhythm ~ Laughing Bea Her Hua", "AAB4", "HHM", null, null, null, null, null, "GI vs. high, mid vertical", true, false, false, true),
      new Move("Beautiful Rhythm ~ Silent Xia Sheng", "Aa", "HH", null, null, null, null, null, null, true),
      new Move("Lian Hua Water Rhythm", "6AA", "HL", null, null, null, null, null),
      new Move("Angry Shui Shian", "3AK", "LH", null, null, null, null, null),
      new Move("Angry Shui Shian ~ Playful Xia Sheng", "3A2", "L", null, null, null, null, null, null, true),
      new Move("Rhythm Halt", "2A", "S", null, null, null, null, null, null, false, false, true),
      new Move("Yann Divide", "1A", "L", null, null, null, null, null, null, false, true, true),
      new Move("Yann Divide ~ facing away", "1zG", null, null, null, null, null, null, null, false, false, true),
      new Move("Sweet Harmony", "4AA", "MH", null, null, null, null, null, "GI vs. high, mid horizontal", false, false, false, true),
      new Move("Sweet Harmony ~ Silent Xia Sheng", "4a", "M", null, null, null, null, null, null, true, false, false, true),
      new Move("Chai Hua Slice", "CA", "S", null, null, null, null, null, null, false, false, true),
      new Move("Mei Hua Twilight", "C3AA", "LHH", null, null, null, null, null),
      new Move("Mei Hua Twilight ~ Bea Her Hua", "C3Aa", "LHH", null, null, null, null, null, "GI vs. high, mid horizontal", true, false, false, true),
      new Move("Mei Hua Divide", "C3AB", "LHH", null, null, null, null, null),
      new Move("Muu Jiann Rhythm", "WAA", "MM", null, null, null, null, null),
      new Move("Sparrow Spin Blade", "JA", "H", null, null, null, null, null),
      new Move("Spinning Jiann Slice", "TA", "H", null, null, null, null, null),
      new Move("Spinning Rhythm Halt", "T2A", "S", null, null, null, null, null, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Emperor's Lament", "BBB", "MMMM", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Emperor's Lament ~ Silent Xia Sheng", "BBb", "MMM", null, null, null, null, null),
      new Move("Lapis Chime", "BBK", "MML", null, null, null, null, null, null, false, false, true),
      new Move("Wei Guang Blade", "xA", "M", null, null, null, null, null),
      new Move("Crescent Flow", "xK", "MM", null, null, null, null, null),
      new Move("Rippling Chant", "6BA", "ML", null, null, null, null, null, null, false, false, true),
      new Move("Still Water", "6BB", "MM", null, null, null, null, null),
      new Move("Still Water ~ Laughing Bea Her Hua", "6B4", "M", null, null, null, null, null, "GI vs. high, mid vertical", true, false, false, true),
      new Move("Still Water ~ Playful Xia Sheng", "6B2", "M", null, null, null, null, null, null, true),
      new Move("Lian Hua Upper", "3B", "M", null, null, null, null, null),
      new Move("Rhythm Break", "2B", "M", null, null, null, null, null, null, false, false, true),
      new Move("Wild Spin", "1B", "L", null, null, null, null, null),
      new Move("Advancing Rhythm", "4BA", "HM", null, null, null, null, null),
      new Move("Pointing Thrust", "4BB", "HL", null, null, null, null, null),
      new Move("Rhythm Break", "CB", "M", null, null, null, null, null, null, false, false, true),
      new Move("Mei Guei Hua", "C3B", "M", null, null, null, null, null),
      new Move("Shiang Ryh Kwei", "WB", "MM", null, null, null, null, null),
      new Move("Sparrow Flutter Blade", "JB", "M", null, null, null, null, null),
      new Move("Spinning Hua Bann", "TB", "M", null, null, null, null, null),
      new Move("Spinning Rhythm Break", "T2B", "M", null, null, null, null, null, null, false, false, true)
    ],
    // Kicks
    [
      new Move("Yuen Kick", "K", "H", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Heh Kick", "c6", "H", null, null, null, null, null),
      new Move("Swallow's Blade", "6KA", "MH", null, null, null, null, null, null),
      new Move("Swallow's Blade ~ Bea Her Hua", "6Ka", "MH", null, null, null, null, null, "GI vs. high, mid horizontal", true, false, false, true),
      new Move("Chicken Kick", "3K", "M", null, null, null, null, null),
      new Move("Woan Shyong Nibble", "2K", "L", null, null, null, null, null),
      new Move("Circle Breaker", "1K", "L", null, null, null, null, null),
      new Move("Circle Breaker Feint Divide", "1cAAB", "MMML", null, null, null, null, null),
      new Move("Circle Breaker Feint Double Feng Yun", "1cAAK", "MMMM", null, null, null, null, null),
      new Move("Shan Kick", "4K", "H", null, null, null, null, null),
      new Move("Woan Shyong Nibble", "CK", "L", null, null, null, null, null, null, false, false, true),
      new Move("Rising Hou Ling Thorn", "C3KB", "MH", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Rising Shun Ling Thorn", "C3KB6", "MH", null, null, null, null, null),
      new Move("Rising Hou Ling Thorn ~ Playful Xia Sheng", "C3KB2", "M", null, null, null, null, null, null, true),
      new Move("Rising Hou Ling Thorn ~ Playful Xia Sheng", "C3Kx2", "M", null, null, null, null, null, null, true),
      new Move("Advancing Tiger Thrust", "WKB", "M", null, null, null, null, null),
      new Move("Advancing Tiger Thrust ~ Silent Xia Sheng", "Wk", "MMM", null, null, null, null, null, null, true),
      new Move("Star Kick", "JKK", "MMM", null, null, null, null, null),
      new Move("Star Kick ~ Playful Xia Sheng", "JKK2", "H", null, null, null, null, null, null, true),
      new Move("Spinning Yuen Kick", "TK", "L", null, null, null, null, null),
      new Move("Spinning Woan Shyong Nibble", "T2K", "L", null, null, null, null, null, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Hou Ling Thorn", "A+B", "H", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Shun Ling Thorn", "A+B6", "H", null, null, null, null, null, null, false, true),
      new Move("Shun Ling Thorn ~ Playful Xia Sheng", "A+B2", null, null, null, null, null, null, null, true),
      new Move("Shun Ling Thorn ~ Playful Xia Sheng", "z+x2", null, null, null, null, null, null, null, true),
      new Move("Twin Mei Hua", "6A+B", "MM", null, null, null, null, null, "GI vs. high, mid vertical", false, true, false, true),
      new Move("Fluttering Lan Se Ren", "2A+B", "M", null, null, null, null, null, "GI vs. low", false, true, false, true),
      new Move("Muu Jiann Retreat", "4A+B", "MM", null, null, null, null, null, "GI vs. high, mid horizontal", false, true, false, true),
      new Move("Hou Lee", "B+K", null, null, null, null, null, null, null, true, false, true),
      new Move("Hou Lee ~ Silent Xia Sheng", "b+k", null, null, null, null, null, null, null, true),
      new Move("Muu Jiann", "6B+K", "MM", null, null, null, null, null, "2nd hit can be held"),
      new Move("Great Wall Chime", "3B+KK", "MM", null, null, null, null, null),
      new Move("Quake Step", "2B+K", "m", null, null, null, null, null, "Becomes a low attack when at a distance", false, false, false, false, false, false, false, true),
      new Move("Quake Step ~ Silent Xia Sheng", "2b+k", null, null, null, null, null, null, null, true),
      new Move("Hwu Dye", "1B+K", "M", null, null, null, null, null),
      new Move("Muu Ling", "4B+K", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Mei Guei Hue Feint", "C3B+K", "L", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Mei Guei Hue Feint ~ Silent Xia Sheng", "C3b+k", null, null, null, null, null, null, null, true),
      new Move("Shiang Gyh Kwei Feint", "8B+K", "L", null, null, null, null, null, "Returns to crouch on cancel", false, false, false, false, false, false, false, false, false, true),
      new Move("Shiang Gyh Kwei Feint ~ Silent Xia Sheng", "8b+k", null, null, null, null, null, null, null, true),
      new Move("Reverse Chicken Kick", "TB+K", "M", null, null, null, null, null),
      new Move("Circle Breaker", "T2B+K", "L", null, null, null, null, null),
      new Move("Guei", "A+B", "L", null, null, null, null, null, "While downed/Returns to downed position") // While down
    ],
    // 8-Way Run Moves
    [
      new Move("Fragrant Dream", "#|^|(ABA", "HMM", null, null, null, null, null, "Returns to crouch when G cancelling 3rd hit", null, false, false, false, false, false, false, false, false, true),
      new Move("Fragrant Dream ~ Silent Xia Sheng", "#|^|(ABa", "HM", null, null, null, null, null, null, true),
      new Move("Fragrant Fantasy", "#|^|(ABB", "HML", null, null, null, null, null, "Returns to crouch when G cancelling 3rd hit", null, false, false, false, false, false, false, false, false, true),
      new Move("Fragrant Fantasy ~ Silent Xia Sheng", "#|^|(ABb", "HM", null, null, null, null, null, null, true),
      new Move("Storming Lian Hua", "@|*A", "M", null, null, null, null, null),
      new Move("Lan Hua", "!|$|uA", "M", null, null, null, null, null),
      new Move("Lan Hua", "!|$ua", "MH", null, null, null, null, null),
      new Move("Playful Rhythm", "#|^|(BB", "MM", null, null, null, null, null),
      new Move("Playful Rhythm", "#|^|(Bb", "MM", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Playful Rhythm ~ Laughin Bea Her Hua", "#|^|(B4", "M", null, null, null, null, null, "GI vs. high, mid vertical", true, false, false, true),
      new Move("Playful Rhythm ~ Laughing Bea Her Hua", "#|^|(BB4", "MM", null, null, null, null, null, "GI vs. high, mid vertical", true, false, false, true),
      new Move("Playful Rhythm ~ Silent Xia Sheng", "#|^|(b", "M", null, null, null, null, null, null, true),
      new Move("Playful Slice", "@|*B", "MM", null, null, null, null, null),
      new Move("Vengeful Lian Hua", "!|$|uB", "M", null, null, null, null, null),
      new Move("Vengeful Lian Hua ~ Laughin Bea Her Hua", "!|$|uB4", "M", null, null, null, null, null, "GI vs. high, middle vertical", true, false, false, true),
      new Move("Woan Shyong Swing", "#|^|(K", "M", null, null, null, null, null),
      new Move("Mei Hua Kick", "@|*K", "M", null, null, null, null, null),
      new Move("Mei Hua Kick ~ Playful Xia Sheng", "@|*K2", "M", null, null, null, null, null, null, true),
      new Move("Lian Hua Kicks", "!|$|uKK", "LMM", null, null, null, null, null),
      new Move("Lian Hua Sweeps", "!|$|uK2K", "LL", null, null, null, null, null),
      new Move("San Jaan", "#|^|(A+B", "MMM", null, null, null, null, null),
      new Move("San Jaan ~ Silent Xia Sheng", "#|^|(a+b", "MM", null, null, null, null, null, null, true),
      new Move("Lian Hua Cannon", "@|*A+B", "M", null, null, null, null, null),
      new Move("Reverse Shui Shian", "!|$|uA+B", "M", null, null, null, null, null, "Returns to downed when G cancelling", false, false, false, false, false, false, false, false, false, true),
      new Move("Hou Lee Hua", "#|^|(B+K", "M", null, null, null, null, null),
      new Move("Bea Her Hua", "@|*B+K", null, null, null, null, null, null, "GI vs. high, mid horizontal", true, false, false, true),
      new Move("Retreating Bea Her Hua", "!|$|uB+K", null, null, null, null, null, null, "GI vs. high, mid horizontal", true, false, false, true),
      new Move("Sliding", "RK", "L", null, null, null, null, null)
    ],
    // Throws
    [
      new Move("Yuen Chuei Shaur", "A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Long Ling Sheang", "4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Tien E Sheang", "ZA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Yng Dyi Yann", "XA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Yuh Luen Shaur", "VA+G", "H", null, null, null, null, null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Shui Long Sheang", "2|3A+G", "M", null, null, null, null, null, "Breakable/Returns to downed", false, false, false, false, false, false, true),// Against crouching opponent // Returns to downed
      new Move("Lo Tsai Shaur ~ Reverse Chicken Kick", "1A+GB+K", "MM", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),// Against crouching opponent
      new Move("Lo Tsai Shaur ~ Reverse Chicken Kick(just)", "1A+GB+Kj", "MM", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),// Against crouching opponent
      new Move("Water Banquet", "214A+G", "HH", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Wind Chime", "]A+G|4A+G", "HH", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Twisting Lotus Flower", "S]A+G|4A+GB", "H", null, null, null, null, null, null, false, false, false, false, false, true, true)
    ],
    // ************ Stances *************
    // Hou Lee
    [
      new Move("Hou Lee", "B+K", null, null, null, null, null, null, null, true, false, true),
      new Move("Lower Great Wall Punishment", "[B", "M", null, null, null, null, null),
      new Move("Lower Great Wall", "[b", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, true)
    ],
    // Silent Xia Sheng
    [
      new Move("Silent Xia Sheng", "b+k", null, null, null, null, null, null, null, true),
      new Move("Splitting Mist", "]A", "H", null, null, null, null, null),
      new Move("Waterfall", "]B", "M", null, null, null, null, null, null, false, false, true),
      new Move("Waterfall", "]b", "M", null, null, null, null, null, null, false, false, true, false, false, false, false, true),
      new Move("Rising Cloud", "]K", "M", null, null, null, null, null, null, false, true),
      new Move("Great Wall", "]A+B", "M", null, null, null, null, null, null, false, true),
      new Move("Dawn Blade", "]z+x6", "H", null, null, null, null, null, null, false, true),
      new Move("Bea Her Hua", "]B+K", null, null, null, null, null, null, "GI vs. high, mid horizontal", true, false, false, true),
      new Move("Wind Chime", "]A+G|4A+G", "HH", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Playful Xia Sheng", "S]2", null, null, null, null, null, null, "Can be shifted to follow-up during SXS/Can be held", true, false, false, false, false, true),
      new Move("Summer Smile", "]K+G", "H", null, null, null, null, null),
      new Move("Summer Blessing", "]6K+G", "MM", null, null, null, null, null),
      new Move("Summer Delight", "]4K+G", "H", null, null, null, null, null)
    ],
    // Bea Her Hua
    [
      new Move("Bea Her Hua", "@|*B+K", null, null, null, null, null, null, "GI vs. high, mid horizontal", true, false, false, true),
      new Move("Ma Chiueh", "{A", "", null, null, null, null, null),
      new Move("Jade Break", "{B", "", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Feint Wheel Kick", "{K", "", null, null, null, null, null),
      new Move("Feint Wheel Kick ~ Side Step", "{K2|8", "", null, null, null, null, null, null, true),
      new Move("Hou Ling Thorn", "{A+B", "H", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Shun Ling Thorn", "{A+B6", "H", null, null, null, null, null, null, false, true),
      new Move("Hou Ling Thorn ~ Playful Xia Sheng", "{A+B2", null, null, null, null, null, null, null, true),
      new Move("Hou Ling Thorn ~ Playful Xia Sheng", "{z+x2", null, null, null, null, null, null, null, true)
    ]
  ]

  Yoshimitsu = [
    // Reversal Edge Attacks
    [
      new Move("Johari Thistle", "B+G", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Johari Thistle", "b+g", "M", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Enma's Flame ~ Manji Dragonfly", "rA", "H", null, null, null, null, null, null, true, true),
      new Move("Shurado War Fan ~ Manji Dragonfly", "rAA", "HH", null, null, null, null, null, null, true, true, false, false, false, true, false, true),
      new Move("Famished Preta", "rB", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Road to Madness", "rK", "M", null, null, null, null, null, "Shifts to attack throw upon hit/Absorbs soul gauge", false, true, false, false, false, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Ghost Thief Funeral", "A+B+K", "M", null, null, null, null, null, "Shifts to attack throw upon hit/Absorbs soul gauge", false,false, false, false, false, false, true, true, false, false, true),
      new Move("Banishing Kurikara", "AAA+B", "HHMM", null, null, null, null, null, "Consumes soul gauge/No gauge cost when soul charge", false, false, false, false, false, false, false, true, false, false, true),
      new Move("Swirling Blossom", "4zA+B", "HHHHHH", null, null, null, null, null, "Consumes soul gauge/No gauge cost when soul charge", false, false, false, false, false, false, false, true, false, false, true),
      new Move("Shoki Gehosen", "6BBA+B", "MHM", null, null, null, null, null, "Consumes soul gauge/No gauge cost when soul charge", false, false, false, false, false, false, false, false, false, false, true),
      new Move("Shoki Gehosen", "6BBBA+B", "MHHM", null, null, null, null, null, "Consumes soul gauge/No gauge cost when soul charge", false, false, false, false, false, false, false, false, false, false, true),
      new Move("Thundercloud Rider", "6cA+B", "HMM", null, null, null, null, null, "Consumes soul gauge/No gauge cost when soul charge", false, false, false, false, false, false, false, false, false, false, true),
      new Move("Scowling Moon God ~ Manji Dragonfly", "WAA+B", "MM", null, null, null, null, null, "Consumes soul gauge/No gauge cost when soul charge", true, false, false, false, false, false, false, false, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Oni Killer", "S3AA", "MH", null, null, null, null, null, "Shifts to attack throw upon hit/Absorbs soul gauge", false, false, false, false, false, true, true),
      new Move("Manji Tatsumi", "SA+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, true, true),
      new Move("Nimbus", "S4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, true, true),
      new Move("Mandala Shredder", "S{AB", "MMMM", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Samsara Pandemonium", "S{BvBBB", "MMMMMM", null, null, null, null, null, "Shifts to attack throw upon hit/Absorbs soul gauge", false, false, false, false, false, true, true, false, true),
      new Move("Rising Kite Rubia ~ Super Dragonfly", "S{KA", "LMMM", null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Super Dragonfly", "S{8B+K", null, null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Parachute Spinner", "S}A", "MM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Transcendent Dragonfly", "S}B", "M", null, null, null, null, null, null, false, false, false, false, false, true, false, false, true),
      new Move("Acrobatic Bliss", "S}K", "m", null, null, null, null, null, "When landing press K(just) to increase soul gauge", false, false, false, false, false, true),
      new Move("Spinning Fall ~ Flea", "S}B+K", "M", null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Super Dragonfly ~ Manji Dragonfly", "S}8B+K", null, null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Daruma Drop ~ Indian Stance", "S}2B+K", "mM", null, null, null, null, null, "Becomes a low attack when at distance", true, false, false, false, false, true, false, true),
      new Move("Paradise Death", "S}A+K", "M", null, null, null, null, null, "Costs health/Returns to downed position", false, false, false, false, false, true, false, false, true),
      new Move("Super Dragonfly ~ Move", "S}6|2|8|4", null, null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Shurado War Fan ~ Manji Dragonfly", "rAA", "HH", null, null, null, null, null, null, true, true, false, false, false, true, false, true)
    ],
    // Horizontal Moves
    [
      new Move("Splinter Gale Lightning Blade", "AAA", "HHH", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Heshikirigari", "6AA", "HH", null, null, null, null, null, null, false, true),
      new Move("Heshikirinagi", "6AB", "HMM", null, null, null, null, null, null, false, true),
      new Move("Golden Bar", "3AA", "MH", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Oni Killer", "H3AA", "MH", null, null, null, null, null, "Shifts to attack throw upon counter hit/Absorbs soul gauge", false, false, false, false, false, false, true),
      new Move("Golden Gates", "3AB", "MM", null, null, null, null, null, null, false, false, true),
      new Move("Parting Grass", "2A", "S", null, null, null, null, null, null, false, false, true),
      new Move("Manji Carve Fist", "2zB", "S", null, null, null, null, null, null, false, false, true),
      new Move("Asura Sweeper", "1A", "L", null, null, null, null, null),
      new Move("Slap U Silly", "4AAAAA", "HHHHH", null, null, null, null, null, "Returns to downed position"),
      new Move("Samurai Cutter", "214A", "L", null, null, null, null, null, null, false, true),
      new Move("Parting Grass", "CA", "S", null, null, null, null, null, null, false, false, true),
      new Move("Manji Carve Fist", "CzB", "S", null, null, null, null, null, null, false, false, true),
      new Move("Stone Fists", "C1AAAAA", "MMMMM", null, null, null, null, null, "Returns to downed position"),
      new Move("Scowling Moon God ~ Manji Dragonfly", "WAA+B", "MM", null, null, null, null, null, "Consumes soulgauge/No gauge cost when soul charged", true, false, false, false, false, false, false, false, false, false, true),
      new Move("Kurama Itto", "JA", "L", null, null, null, null, null, null, false, false, true),
      new Move("Reverse Splinter Gale", "TA", "H", null, null, null, null, null),
      new Move("Reverse Grass Part", "T2A", "S", null, null, null, null, null, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Vampiric Rain", "BBB", "MMM", null, null, null, null, null, "Absorbs soul gauge", false, true, false, false, false, false, false, false, false, true),
      new Move("Yomi Gake", "xA", "M", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Yomi Gake(fast)", "xAF", "M", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Yomi Kakenuke", "HxA", "M", null, null, null, null, null, "Shifts to attack throw upon close-range counter hit/Absorbs soul gauge", false, false, false, false, false, false, true),
      new Move("Door Knocker", "6BBBB", "MHHM", null, null, null, null, null),
      new Move("Submission Slash", "3BB", "MMMM", null, null, null, null, null),
      new Move("Submission Slash ~ Manji Dragonfly", "3b", "MMM", null, null, null, null, null, null, true),
      new Move("Death Slash", "2B", "M", null, null, null, null, null),
      new Move("Death Slash", "2b", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Nebular Burst", "1BA", "LM", null, null, null, null, null),
      new Move("Crashing Wave ~ Indian Stance", "1b", "L", null, null, null, null, null, null, true),
      new Move("Hell Divide", "1BB", "LM", null, null, null, null, null),
      new Move("Hannya Hammer", "4B", "H", null, null, null, null, null, "Absorbs soul gauge"),
      new Move("Snowflake", "CB", "M", null, null, null, null, null, null, false, false, true),
      new Move("Inner Palm", "WB", "M", null, null, null, null, null),
      new Move("Quarter Moon", "JB", "", null, null, null, null, null),
      new Move("Reverse Drizzle", "TB", "", null, null, null, null, null),
      new Move("Reverse Snowflake", "T2B", "", null, null, null, null, null, null, false, false, true)
    ],
    // Kick Moves 
    [
      new Move("Side Kick", "K", "H", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Ballerina Spin", "6K", "H", null, null, null, null, null),
      new Move("Mid Kick", "3K", "M", null, null, null, null, null),
      new Move("Arc Kick", "2K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Nozuchi Fumi", "1K", "L", null, null, null, null, null),
      new Move("Wood Cutter", "4KB", "MM", null, null, null, null, null),
      new Move("Wood Cutter", "4Kb", "MM", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Steel Wind", "236KK", "MM", null, null, null, null, null),
      new Move("Poison Wind", "236Ko4", "M", null, null, null, null, null, null, true),
      new Move("Steel Wind", "236KKo4", "MM", null, null, null, null, null, null, true),
      new Move("Steel Wind ~ Manji Dragonfly", "236Kk", "M", null, null, null, null, null, null, true),
      new Move("Arc Kick", "CK", "L", null, null, null, null, null, null, false, false, true),
      new Move("Knee Cap", "C3K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Manji Spin Low Kicks", "C1KKKKK", "LLLLL", null, null, null, null, null, "Returns to downed position"),
      new Move("Rising Knee", "WK", "M", null, null, null, null, null),
      new Move("Avoiding the Puddle", "JK", "M", null, null, null, null, null),
      new Move("Reverse Koragashi", "TK", "H", null, null, null, null, null),
      new Move("Reverse Dust Banishment", "T2K", "L", null, null, null, null, null, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Poison Breath", "A+B", "H", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Toxic Breath", "a+b", "m", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Bad Stomach to Backflip Kick", "z+xK", "MM", null, null, null, null, null, null, true),
      new Move("Diggin Cyclone ~ Flea", "6A+B", "M", null, null, null, null, null, null, true),
      new Move("Spine Divide", "4A+B", "M", null, null, null, null, null, null, false, true),
      new Move("Deathcopter", "8A+B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Deathcopter Slice", "8A+B2|G", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Deathcopter Slice", "8z+x2|G", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Deathcopter Trick", "2z+x4", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Deathcopter Slice ~ Manji Dragonfly", "2z+xB+K", null, null, null, null, null, null, null, true),
      new Move("Moonsault Slayer", "236A+B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Flea", "B+K", null, null, null, null, null, null, null, true),
      new Move("Indian Stance", "2B+K", null, null, null, null, null, null, null, true),
      new Move("Manji Dragonfly", "8B+K", null, null, null, null, null, null, null, true),
      new Move("Spinning Evade", "4B+KBBBBBB", null, null, null, null, null, null, "Costs health/Returns to downed position", true),
      new Move("Soul Stealer", "A+K", "M", null, null, null, null, null, "GI vs. high, mid horizontal", false, false, false, true),
      new Move("Harakiri", "2A+B", "M", null, null, null, null, null, "Costs health/Returns to downed position", false, false, false, false, false, false, false, false, true),
      new Move("Manji Blood Dance", "2A+KAAAA", "MMMMM", null, null, null, null, null, "Costs health/Increases soul gauge(random)", false, false, false, false, false, false, false, false, true),
      new Move("Confusion", "6A+K", null, null, null, null, null, null, "Returns to facing away", true),
      new Move("Suicide", "6a+k", "M", null, null, null, null, null, "Costs health/Returns to downed position", false, false, false, false, false, false, false, false, true),
      new Move("Manji Blood Dance", "6a+kAAAA", "MMMMM", null, null, null, null, null, "Costs health/Increases soul gauge(random)", false, false, false, false, false, false, false, false, true),
      new Move("Double Suicide", "6a+kA+K", "MM", null, null, null, null, null, "Costs health/Returns to downed position", false, false, false, false, false, false, false, false, true),
      new Move("Flea", "TB+K", null, null, null, null, null, null, null, true),
      new Move("Indian Stance", "T2B+K", null, null, null, null, null, null, null, true),
      new Move("Manji Dragonfly", "T8B+K", null, null, null, null, null, null, null, true),
      new Move("Harakiri", "2A+K", "M", null, null, null, null, null, "Costs health/Returns to downed position", false, false, false, false, false, false, false, false, true),
      new Move("Indian Stance", "B+K", null, null, null, null, null, null, "While down(face up)", true) // While down (face up)
    ],
    // 8-Way Run Moves
    [
      new Move("Kabuki", "#|^|(A", "M", null, null, null, null, null),
      new Move("Kabuki Compendium", "#|^|(HA", "MM", null, null, null, null, null, "Absorbs soul gauge"),
      new Move("Ganto", "@|*A", "H", null, null, null, null, null, null, false, true),
      new Move("Flagstaff", "!|$|uA", "M", null, null, null, null, null),
      new Move("Circium", "#|^|(B", "M", null, null, null, null, null),
      new Move("Shrine", "@|*B", "M", null, null, null, null, null),
      new Move("Sword Stab", "!|$|uB", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Sword Poke Windmill", "!|$|uxA", "MMMMMMM", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Face Splitter", "!|$|uxB", "H", null, null, null, null, null, null, false, true),
      new Move("Fubuki", "#|^|(K", "M", null, null, null, null, null),
      new Move("Guillotine Crow Kick", "@|*K", "MM", null, null, null, null, null),
      new Move("Kangaroo Kick", "!|$|uK", "M", null, null, null, null, null, null, false, true),
      new Move("Crying Spirit Sword", "#|^|(A+B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Crying Spirit Sword ~ Flea", "#|^|(a+b", null, null, null, null, null, null, null, true),
      new Move("Crying Spirit Sword to Death", "#|^|(z+x2B", "L", null, null, null, null, null),
      new Move("Solar Kick Shark Attack", "#|^|(B+KA+BK", "MHM", null, null, null, null, null, null, false, true),
      new Move("Solar Kick Shark Attack ~ Indian Stance", "#|^|(B+Ka+b", "MH", null, null, null, null, null, null, true, true),
      new Move("Reverse Solar Kick Shark Attack", "#|^|(b+kA+BK", "MHM", null, null, null, null, null, null, false, true),
      new Move("Reverse Solar Kick Shark Attack ~ Indian Stance", "#|^|(b+ka+b", "MH", null, null, null, null, null, null, true, true),
      new Move("Ninja Sun Flare", "@|*|!|$|uB+K", "M", null, null, null, null, null, "Returns to crouching on G cancel", false, false, false, false, false, false, false, false, false, true),
      new Move("Ninja Sun Flare ~ Indian Stance", "@|*|!|$|ub+k", null, null, null, null, null, null, null, true),
      new Move("Sliding", "RK", "L", null, null, null, null, null)
    ],
    // Throws
    [
      new Move("Sword Face Smash", "A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Jumping Body Slam", "4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Elegant Storm", "ZA+G", "H", null, null, null, null, null, "", false, false, false, false, false, false, true),
      new Move("Wheels of Hell", "XA+G", "H", null, null, null, null, null, "", false, false, false, false, false, false, true),
      new Move("Tornado Drop", "VA+G", "H", null, null, null, null, null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Soul Siphon", "6A+B", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Soul Possession", "6A+B6", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Rainbow Drop", "214A+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Manji Tatsumi", "SA+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, true, true),
      new Move("Nimbus", "S4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, true, true)
    ],
    // ************ Stances *************
    // Flea
    [
      new Move("Flea", "B+K", null, null, null, null, null, null, null, true),
      new Move("Rolling Spark", "[A", "L", null, null, null, null, null, null, false, false, true),
      new Move("Skull Splitter", "[B", "M", null, null, null, null, null, "Can be held"),
      new Move("Flea Kicker ~ Indian Stance", "[K", "M", null, null, null, null, null, null, true),
      new Move("Flea Gouge", "[A+B", "M", null, null, null, null, null, "Absorbs soul gauge", false, false, false, false, false, false, false, true),
      new Move("Flea Roll", "[B+K", null, null, null, null, null, null, null, false, false, true),
      new Move("Jumping Flea ~ Flea", "[7|8|9", "M", null, null, null, null, null, null, true),
      new Move("Flea Step ~ Flea", "[4|6", null, null, null, null, null, null, null, true),
      new Move("Flea Digger ~ Flea", "[1|2|3", null, null, null, null, null, null, null, true),
      new Move("Running Flea", "[66", "SSS", null, null, null, null, null, null, true),
      new Move("Flea Gouge", "[66v", "SSSM", null, null, null, null, null, "Absorbs soul gauge"),
      new Move("Flea ~ Manji Dragonfly", "[8B+K", null, null, null, null, null, null, null, true),
      new Move("Flea ~ Indian Stance", "[2B+K", null, null, null, null, null, null, null, true)
    ],
    // Indian Stance
    [
      new Move("Indian Stance", "2B+K", null, null, null, null, null, null, null, true),
      new Move("Indian Stance Healing", "]", null, null, null, null, null, null, "Increases soul gauge", true),
      new Move("Warp Rolling Shark", "]A", "L", null, null, null, null, null, null, false, false, true),
      new Move("Englightened Sun Flare", "]B", "M", null, null, null, null, null, "Dodges high, mid & low", false, true),
      new Move("Tobi Ushiwaka ~ Manji Dragonfly", "]K", "MM", null, null, null, null, null, null, true),
      new Move("No Fear", "]A+K", "M", null, null, null, null, null, "Costs health/Returns to downed position", false, false, false, false, false, false, false, false, true),
      new Move("Intrepid", "]a+k", "MM", null, null, null, null, null, "Costs health/Returns to downed position", false, false, false, false, false, false, false, false, true),
      new Move("Manji Blood Star", "]A+KA", "MM", null, null, null, null, null, "Costs health/Returns to downed position", false, false, false, false, false, false, false, false, true),
      new Move("Raging Kneel ~ Indian Stance", "]2B+K", null, null, null, null, null, null, "Extend the motion with 2(hold)", true),
      new Move("Raging Kneel Head", "]2B+KB", "L", null, null, null, null, null, "Returns to downed position"),
      new Move("Warp", "]6|4|2|8", null, null, null, null, null, null),
      new Move("Indian Stance ~ Flea", "]B+K", null, null, null, null, null, null, null, true),
      new Move("Indian Stance ~ Manji Dragonfly", "]8B+K", null, null, null, null, null, null, null, true)
    ],
    // Manji Dragonfly
    [
      new Move("Manji Dragonfly", "2B+K", null, null, null, null, null, null, null, true),
      new Move("Akitsu Mandala", "{A", "MMM", null, null, null, null, null),
      new Move("Dragonfly Blade", "{B", "M", null, null, null, null, null),
      new Move("Dragonfly Sweep", "{K", "L", null, null, null, null, null),
      new Move("Spirited Away ~ Manji Dragonfly", "{A+B", "H", null, null, null, null, null, null, true),
      new Move("Spirited Away", "{A+B", "H", null, null, null, null, null, "Against midair opponent/Shifts to attack throw upon hit/Press K(just) when landing for meter", false, false, false, false, false, false, true),
      new Move("Manji Dragonfly ~ Move", "{6|2|8|4", null, null, null, null, null, null, "Increased speed while soul charged", true),
      new Move("Manji Dragonfly ~ Flea", "{B+K", null, null, null, null, null, null, null, true),
      new Move("Manji Dragonfly ~ Indian Stance", "{2B+K", null, null, null, null, null, null, null, true)
    ],
    // Super Dragonfly
    [
      new Move("Super Dragonfly", "S{8B+K", null, null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Parachute Spinner", "S}A", "MM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Transcendent Dragonfly", "S}B", "M", null, null, null, null, null, null, false, false, false, false, false, true, false, false, true),
      new Move("Acrobatic Bliss", "S}K", "m", null, null, null, null, null, "When landing press K(just) to increase soul gauge", false, false, false, false, false, true),
      new Move("Spinning Fall ~ Flea", "S}B+K", "M", null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Super Dragonfly ~ Manji Dragonfly", "S}8B+K", null, null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Daruma Drop ~ Indian Stance", "S}2B+K", "mM", null, null, null, null, null, "Becomes a low attack when at distance", true, false, false, false, false, true, false, true),
      new Move("Paradise Death", "S}A+K", "M", null, null, null, null, null, "Costs health/Returns to downed position", false, false, false, false, false, true, false, false, true),
      new Move("Super Dragonfly ~ Move", "S}6|2|8|4", null, null, null, null, null, null, null, true, false, false, false, false, true),
    ]
  ]

  Zasalamel = [
    // Reversal Edge Attacks
    [
      new Move("Ereshkigal's Embrace", "B+K", "MM", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, false, true),
      new Move("Ereshkigal's Embrace", "b+g", "MM", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, false, true, false, true),
      new Move("Namtar's Execution Spike", "rAo", "HH", null, null, null, null, null, null, false, true),
      new Move("Ugallu's Threat", "rB", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Ugallu's Ingress", "rBoB", "Mm", null, null, null, null, null, "If opponent is cursed"), // only if opponent is cursed
      new Move("Feral Hound Uridimmu", "rK", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true)
    ],
    // Gauge Attacks
    [
      new Move("The Voice from the Abyss", "M", "M", null, null, null, null, null, "Curses opponent on hit or guard/GI vs. high, mid & low", false, false, false, true, false, false, false, true, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Ode to Humbaba", "S3AKB", "MHM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Ceremonial Sacrifice", "S1AB", "LHM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Void Nova", "SA+B", "mmmmmm", null, null, null, null, null, null, false, true, false, false, false, true, false, true),
      new Move("Temple of Eternity", "S2A+B", "M", null, null, null, null, null, "Curses opponent upon hit/Shifts to attack throw upon hit", false, false, false, false, false, true, true, true),
      new Move("Ishtar's Return", "@|*BBvB", "MMH", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Fatal Gravity", "SA+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, true, true)
    ],
    // Horizontal Moves
    [
      new Move("Rending Blade of Shamash", "AAA", "HHH", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Bashum's Whisper", "z6", "M", null, null, null, null, null),
      new Move("Damnation of Ereshkigal", "6AA", "HH", null, null, null, null, null),
      new Move("Ereshkigal's Snare", "6AB", "HM", null, null, null, null, null, null, false, true),
      new Move("Hook of Namtar", "3AB", "MM", null, null, null, null, null, "2nd hit can be held"),
      new Move("Humbaba's Flame", "3AK", "MH", null, null, null, null, null),
      new Move("Mutter of Bashm", "2A", "S", null, null, null, null, null, null, false, false, true),
      new Move("Bite of the Kulullu", "1A", "L", null, null, null, null, null, null, false, false, true),
      new Move("Ilabrat's Sapara", "4Ao", "HM", null, null, null, null, null),
      new Move("Mutter of Bashm", "CA", "S", null, null, null, null, null, null, false, false, true),
      new Move("Great Scythe of Shamash", "WA", "H", null, null, null, null, null),
      new Move("Shamash the Just", "JA", "L", null, null, null, null, null, null, false, false, true),
      new Move("Sin's Glance", "TA", "H", null, null, null, null, null),
      new Move("Sin's Glare", "T2A", "S", null, null, null, null, null, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Mighty Hammer of Ea", "BBB", "MMM", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Nergal's Anguish", "xA", "H", null, null, null, null, null),
      new Move("Adoration of Gilgamesh", "xK", "MM", null, null, null, null, null),
      new Move("Adoration of Gilgamesh(fast)", "xKF", "MM", null, null, null, null, null),
      new Move("Nergal's Talon", "6BB", "MS", null, null, null, null, null, null, false, true),
      new Move("Nergal's Mockery", "6BK", "MM", null, null, null, null, null),
      new Move("Paean to Ishtar", "3B", "M", null, null, null, null, null),
      new Move("Ea the Grand Ruler", "2B", "M", null, null, null, null, null, null, false, false, true),
      new Move("Asushunamir's Spear", "1B", "L", null, null, null, null, null),
      new Move("Lilitu's Ingress", "1BoB", "Lm", null, null, null, null, null, "If opponent is cursed"),
      new Move("Sacred Rite of Ishtar", "4B", "M", null, null, null, null, null),
      new Move("Sacred Rite of Ishtar", "4BHBj", "MMH", null, null, null, null, null),
      new Move("Belit-Sheri's Cleaver", "46B", "M", null, null, null, null, null),
      new Move("Belit-Sheri's Cleaver(fast)", "46BF", "M", null, null, null, null, null),
      new Move("Belit-Sheri's Ingress", "46BoB", "Mm", null, null, null, null, null, "If opponent is cursed"),
      new Move("Ea the Grand Ruler", "CB", "M", null, null, null, null, null, null, false, false, true),
      new Move("Ode to Mamnenaum", "WB", "M", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Anu the Radiant", "JB", "M", null, null, null, null, null),
      new Move("Nergal's Grapple", "TBB", "MS", null, null, null, null, null),
      new Move("Ea's Glare", "T2B", "M", null, null, null, null, null, null, false, false, true)
    ],
    // Kicks
    [
      new Move("Will of Gilgamesh", "KK", "HL", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Triumph of Gilgamesh", "k6", "H", null, null, null, null, null),
      new Move("Hound of Tiamat", "6K", "H", null, null, null, null, null, "Curses opponent upon hit", false, true),
      new Move("Command of Tiamat", "3K", "M", null, null, null, null, null, "Curses opponent upon hit"),
      new Move("Shamhat's Allure", "2K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Enkidu's Frenzy", "1K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Lament for Enkidu", "4K", "M", null, null, null, null, null, null, false, true),
      new Move("Shamhat's Allure", "CK", "L", null, null, null, null, null, null, false, false, true),
      new Move("Devotion to Ninsun", "C3K", "H", null, null, null, null, null),
      new Move("Enlil's Enmity", "WKB", "MM", null, null, null, null, null),
      new Move("Enkidu the Valiant", "JK", "H", null, null, null, null, null),
      new Move("Enkidu's Glance", "TK", "M", null, null, null, null, null, "Returns to facing away"),
      new Move("Shamhat's Glare", "T2K", "L", null, null, null, null, null, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Anshar's Halberd", "A+B", "H", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Marduk's Thunder", "6A+BB", "MMM", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Marduk's Thunder", "6A+Bb", "MMM", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, true),
      new Move("Anu's Justice", "2A+B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Tiamat's Frenzy", "4A+B", "MMM", null, null, null, null, null),

      new Move("Offering to Kishar", "8A+B", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Offering to Kishar", "8A+B", "H", null, null, null, null, null, "Against midair opponent/Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Tiamat's Quaking Blow", "B+KK", "M", null, null, null, null, null, "Curses oppponent upon hit or guard/Power increases according to K timing", false, false, false, false, false, false, false, true, false, true),
      new Move("Curse of Nergal", "6B+KA", "MH", null, null, null, null, null),
      new Move("Immortal Utnapishtim", "2B+K", "LM", null, null, null, null, null),
      new Move("Confession to Lahamu", "4B+K", "MM", null, null, null, null, null),
      new Move("Tiamat's Fury", "8B+K", "M", null, null, null, null, null),
      new Move("Enlil's Admonition", "WB+K", "M", null, null, null, null, null),
      new Move("Adad's Great Shears", "TB+K", "MM", null, null, null, null, null, "Can be held", false, false, false, false, false, false, false, true)
    ],
    // 8-Way Run Moves
    [
      new Move("Judgment of Shamash", "#|^|(A", "MM", null, null, null, null, null, "Can be held"),
      new Move("Talon of Zu", "@|*Ao", "LL", null, null, null, null, null),
      new Move("Sickle of Sin", "!|$|uA", "M", null, null, null, null, null),
      new Move("Ishtar's Mercy", "#|^|(B", "M", null, null, null, null, null, null, false, true),
      new Move("Prayer to Ishtar", "@|*B", "M", null, null, null, null, null),
      new Move("Lilitu's Needle", "!|uB", "", null, null, null, null, null, null, false, false, true),
      new Move("Ea's Judgment", "$B", "", null, null, null, null, null),
      new Move("Ea's Judgment", "$b", "", null, null, null, null, null, null, false, true),
      new Move("Enkidu's Valor", "#|^|(K", "", null, null, null, null, null),
      new Move("Enkidu's Bravery", "#|^|(cB", "", null, null, null, null, null),
      new Move("The Ark of Utnapishtim", "@|*KK", "HH", null, null, null, null, null, null, false, false, true),
      new Move("Enkidu's Karma", "!|$|uK", "H", null, null, null, null, null, "GI vs. low attacks", false, true, false, true),
      new Move("Wrath of Tiamat", "#|^(A+B", "M", null, null, null, null, null),
      new Move("Tiamat's Ingress", "#|^|(A+BoB", "Mm", null, null, null, null, null, "If opponent is cursed"),
      new Move("Prayer to Belit-ili", "!|$|uA+B", "M", null, null, null, null, null, null, false, true),
      new Move("Blessing for Lahamu", "#|^|(B+K", "M", null, null, null, null, null, null, false, true),
      new Move("Tiamat's Rampage", "!|$|uB+K", "MMM", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Urshanabi's Crossing", "RK", "L", null, null, null, null, null)
    ],
    // Throws
    [
      new Move("Ereshkigal the Ruthless", "A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Kingu the Sly Lord", "4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Apsu the Origin", "ZA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Ea of the Abyss", "XA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Marduk the Tempest", "VA+G", "H", null, null, null, null, null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Nergal's Bloodthirst", "6A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Judgement of Nergal", "6A+GA|2A", "M", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Roar of Nergal", "6A+GB", "M", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Uridimmu's Howl", "6A+GK", "M", null, null, null, null, null, "Curses opponent on hit", false, false, false, false, false, false, true),
      new Move("Fatal Gravity", "SA+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, true, true)
    ]
  ]
}