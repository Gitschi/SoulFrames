import { Move } from "../models/move.model";

// ************* Workflow Templates **************

// Single Move Template
// new Move("", "", "", null, null, null, null, null),

// Soul Charge Template
// new Move("Soul Charge", "4A+B+G", "m", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, false, true),

// Throws Template
/*
      new Move("", "A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("", "4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("", "ZA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("", "XA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("", "VA+G", "H", null, null, null, null, null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
*/

// ***********************************************

export class MoveService{

  Astaroth = [
    // Reversal Edge Attacks
    [
      new Move("Woebringer", "B+G", "M", 50, -12, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Woebringer", "b+g", "M", 70, 50, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Ax of Woe", "rA", "H", null, -6, "KND", "KND", 54, null, false, true),
      new Move("Rending Torment", "rB", "M", null, "KND", "KND", 63, null, "Shifts to attack throw upon hit/Shifts to clash upon guard", false, true, false, false, false, false, true, true),
      new Move("Eviscerate", "rK", "M", null, 14, 14, 14, 36, null, false, true, false, false, false, false, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Final Anguish", "A+B+K", "H", 24, "KND", "KND", "KND", 85, null, false, false, false, false, false, false, true, false, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", 6, 0, 8, 8, 0, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Bringer of Ruin", "S1AA", "LL", 36, null, "KND", "KND", 65, "Revenge attack/1st hit can be held", false, false, false, false, false, true),
      new Move("Ruinous Discus Breaker", "S1AB", "LM", 36, null, "KND", "KND", 70, "Revenge attack/1st hit can be held", false, false, false, false, false, true, false, true),
      new Move("Decimation Charge", "S4AA", "HH", 14, 4, 14, 14, 26, "Revenge attack/Can be delayed/2nd hit shifts to attack throw upon hit", false, false, false, false, false, true, true),
      new Move("Cerberus Surge", "S236A", "MMMMMMMMM", 20, 8, "KND", "KND", 68, null, false, false, false, false, false, true),

      new Move("Unstoppable Great Divide", "SBB", "MM", 20, null, "LNC", "LNC", 44, null, false, false, false, false, false, true, false, false, false, true),
      new Move("Savage Great Divine", "SBb", "MM", 20, null, "LNC", "LNC", 57, null, false, false, false, false, false, true, false, false, false, true),

      new Move("Apocalypse Pound", "SxKA+G", "MMM", 20, null, "KND", "KND", 88, null, false, false, false, false, false, true, true),
      new Move("Apocalypse Drop", "SxK4A+GA+G", "MMM", 20, null, "KND", "KND", 93, null, false, false, false, false, false, true, true),

      new Move("Ruin Slam", "S6B", "M", 20, -8, 2, "KND", 24, "Revenge attack/Can be held", false, false, false, false, false, true),
      new Move("Blood Tide Rush", "S6BA", "MMMMMMMMMM", 20, 8, "KND", "KND", 90, "Revenge attack", false, false, false, false, false, true),
      new Move("Cyclopean Swipe", "S6BB", "MM", 40, 8, "KND", "KND", 52, "Revenge attack", false, false, false, false, false, true, false, true),

      new Move("Ruinous Gorefang", "S4BB", "MM", 16, null, "KND", "KND", 56, "1st hit can be held", false, false, false, false, false, true, false, true),
      new Move("Annihilation Gorefang", "S4Bb", "MM", 16, null, "KND", "KND", 61, null, false, false, false, false, false, true, false, false, true),

      new Move("Victorious Charge", "S4KA", "MH", 18, null, "KND", "KND", 53, "Revenge attack/1st hit can be held/2nd hit can be delayed", false, false, false, false, false, true),
      new Move("Ruthless Assault", "S4Ka", "MM", 18, null, null, "KND", 59, "Revenge attack", false, false, false, false, false, true),

      new Move("Malicious Torment", "S4B+K", "LLL", 40, null, "KND", "KND", 27, "Revenge attack", false, false, true, false, false, true),
      new Move("Apocalypse Cannon", "S@|*B", "M", 30, null, "LNC", "LNC", 49, null, false, true, false, false, false, true, false, true),
      new Move("Apocalypse Rush", "S#|^|(KK", "MM", 18, null, "KND", "KND", 51, "Revenge attack/1st hit can be held", false, false, false, false, false, true),

      new Move("Vicious Fury", "S#|^|(A+G", "H", 46, null, "KND", "KND", 55, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, true, true),
      new Move("Cursed Altar", "S!|$|uA+G", "H", 46, null, "KND", "KND", 78, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, true, true),
      
      new Move("Apocalypse Pound", "SQ2A+G", "M", 14, null, "KND", "KND", 60, "Breakable", false, false, false, false, false, true, true),
      new Move("Apocalypse Drop", "SQ1A+GA+G", "M", 14, null, "KND", "KND", 80, "Breakable", false, false, false, false, false, true, true),

      new Move("Apocalypse Destroyer", "S236A+GA+G", "H", 18, null, "KND", "KND", 85, "Breakable", false, false, false, false, false, true, true),
      new Move("Ride of the Wicked", "S214A+G", "H", 18, null, "LNC", "LNC", 45, "Breakable", false, false, false, false, false, true, true),
      new Move("Wicked Twister of Carnage", "S214A+G2|8A", "H", 18, null, "KND", "KND", 68, null, false, false, false, false, false, true, true)
    ],
    // Horizontal Moves
    [
      new Move("Annihilation", "A", "H", 20, -4, 2, 6, null, null, false, false, false, false, false, false, true, false, false, true),
      new Move("Annihilation", "AA", "HH", 20, -8, 2, 2, 38, "Can be delayed", false, false, false, false, false, false, true, false, false, true),
      new Move("Annihilation(counter)", "HAA", "HH", 20, -4, 2, 6, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true, false, false, true),
      new Move("Destruction", "AB", "HM", 20, -12, 0, 0, 40, "Can be delayed"),

      new Move("Hades Control", "6A", "H", 18, -6, 4, 14, 18, null, false, false, false, false, false, false, true),
      new Move("Hades Control(counter)", "H6A", "H", 18, -6, 4, 18, null, "Shits to attack throw upon hit", false, false, false, false, false, false, true),

      new Move("Ax Blow", "3A", "M", 20, -12, 0, "KND", 24),
      new Move("Hades Break", "2A", "L", 20, -14, -4, -4, 18, null, false, false, true),

      new Move("Discus", "1A", "L", 36, -14, -6, "KND", 26, null, false, false, true),
      new Move("Discus(hold)", "1a", "L", 56, -16, "KND", "KND", 32, null, false, false, true),
      new Move("Double Discus", "1aA", "LL", 56, -24, "KND", "KND", 59, null, false, false, true),
      new Move("Discus Breaker", "1aB", "LM", 56, 8, "KND", "KND", 64, null, false, false, false, false, false, false, false, true),

      new Move("Decimation", "4A", "H", 14, -12, 0, 0, 10, "Can be delayed/Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Decimation", "4AA", "HH", 14, 4, 14, 14, 24, "Can be delayed/Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Decimation", "4Aa", "HH", 14, 8, 14, 14, 34, null, false, false, false, false, false, false, true, true),

      new Move("Grip Shot to Ax Volcano", "4AB", "HM", 14, -6, "LNC", "LNC", 40, "Can be delayed"),

      new Move("Poseidon Tide", "214A", "M", 34, -14, "KND", "KND", 90, "Shifts to attack throw upon hit/Can move using D-pad", false, false, false, false, false, false, true),
      new Move("Poseidon Tide Rush", "214AA", "MM", 34, -22, null, null, 38, "Can move using D-pad"),
      new Move("Poseidon Tide Rush", "214AAA", "MMM", 34, -22, null, null, 46, "Can move using D-pad"),
      new Move("Poseidon Tide Rush", "214AAAA", "MMMM", 34, -22, null, null, 54, "Can move using D-pad"),
      new Move("Poseidon Tide Rush", "214AAAAA", "MMMMM", 34, -22, null, null, 62, "Can move using D-pad"),
      new Move("Poseidon Tide Rush", "214AAAAAA", "MMMMMM", 34, -16, -4, -4, 70, "Can move using D-pad"),

      new Move("Hades Break", "CA", "L", 20, -14, -4, -4, 18, null, false, false, true),
      new Move("Reverse Spiral Ax", "WA", "H", 26, -2, "KND", "KND", 52),

      // Possibly different according to direction
      new Move("Great Annihilation", "JA", "H", 26, -14, "KND", "KND", null),

      new Move("Reverse Ax Split", "TA", "H", null, null, null, null, null),
      new Move("Lower Hades Split", "T2A", "S", null, null, null, null, null, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Great Divide", "B", "M", 20, -8, 2, 8, 20, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Great Divide", "BB", "MM", 20, -2, 12, 12, 40, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Great Divide", "Bb", "MM", 20, 6, "LNC", "LNC", 52, null, false, false, false, false, false, false, false, true),

      new Move("Command Kicks", "xK", "MM", 20, -12, -2, -2, 26, "2nd hit can be delayed"),
      new Move("Command Kicks", "xKK", "MMM", 20, -2, 14, 14, 53, "2nd hit can be delayed"),
      new Move("Castigate", "xKA+G", "MMM", 20, null, "KND", "KND", 66, null, false, false, false, false, false, false, true),
      new Move("Bluster", "xK4A+G", "MMM", 20, null, "KND", "KND", 66, null, false, false, false, false, false, false, true),

      new Move("Ax Offering", "x6", "M", 18, -18, -2, 4, 28, null),
      new Move("Ax Offering", "x6B", "MM", 18, -4, 4, 14, 39, "2nd hit can be delayed", false, false, false, false, false, false, true),
      new Move("Ax Offering(counter)", "Hx6B", "MM", 18, -4, 4, 14, 39, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),

      new Move("Ax Side Divide", "Bx6", "MM", 20, 2, 10, 10, 36),
      new Move("Ax Side Cannon", "6B", "M", 20, -8, 2, "KND", 22),

      new Move("Swipe", "6b", "M", 40, 2, "KND", "KND", 26, null, false, false, false, false, false, false, false, true),
      new Move("Swipe", "6bB", "MM", 40, 8, "KND", "KND", 53, null, false, false, false, false, false, false, false, true),

      new Move("Ax Volcano", "3B", "M", 24, -12, "LNC", "LNC", 32),
      new Move("Ax Volcano", "3b", "M", 64, "LNC", "LNC", "LNC", 52, null, false, false, false, false, false, false, false, false, true),

      new Move("Hades", "2B", "M", 20, -10, 6, 6, 24, null, false, false, true),
      new Move("Ax Grave", "1B", "L", 24, -18, "KND", "KND", 24, "Can be held", false, false, true),

      new Move("Bear Fang", "4B", "M", 16, -8, 6, 6, 20),
      new Move("Bear Fang", "4b", "M", 42, 6, "KND", "KND", 30, null, false, false, false, false, false, false, false, true),
      new Move("Gorefang", "4bB", "MM", 42, 0, 6, 6, 52, null, false, false, false, false, false, false, false, true),
      new Move("Gorefang", "4bb", "MM", 42, 10, "KND", "KND", 57, null, false, false, false, false, false, false, false, true),

      new Move("Dark Split", "CB", "M", 20, -10, 6, 6, 24, null, false, false, true),
      new Move("Hades Rising", "WB", "M", null, null, null, null, null),
      new Move("Hades Rising", "Wb", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Greater divide", "JB", "M", null, null, null, null, null),
      new Move("Reverse Dark Split", "TB", "M", null, null, null, null, null),
      new Move("Lower Dark Split", "T2B", "M", 22, null, null, null, 22, null, false, false, true)
    ],
    // Kicks
    [
      new Move("Moloch's Vise", "K", "H", 14, -8, 4, 4, 14, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Moloch's Vise", "k", "H", 28, 0, "KND", "KND", 78, "Shifts to attack throw upon hit", false, true, false, false, false, false, true),
      new Move("Hades Knee", "6K", "M", 18, -12, 4, "KND", 16),
      new Move("Moloch's Revenge", "3K", "MM", 16, -8, 4, 4, 24),
      new Move("Bull Low Kick", "2K", "L", 16, -14, -4, -4, 14, null, false, false, true),

      new Move("Reverse Tamer", "1K", "L", 26, -18, 0, "KND", 26),
      new Move("Reverse Tamer", "1KA", "LH", 26, 0, "KND", "KND", 68),

      new Move("Dark Tamer", "4K", "M", 18, -12, -2, -2, 19, "1st hit can be held"),
      new Move("Dark Tamer", "4KA", "MH", 18, -1, "KND", "KND", null, "1st hit can be held/2nd hit can be delayed"),
      new Move("Dark Coercion", "4Ka", "MM", 18, -8, 6, "KND", 55),

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
      new Move("Eternal Damnation", "A+B", "M", 38, 6, "KND", "KND", 40, null, false, true, false, false, false, false, false, true),
      new Move("Minotaur Crush", "6A+B", "M", 18, -18, 0, 8, 22, null, false, true),
      new Move("Titan Ax", "2A+B", "M", 28, -20, "KND", "KND", 52),
      new Move("Titan Ax(Near)", "2A+B", "M", 28, -20, -8, -8, 32),

      new Move("Breath of Hades", "4A+B", "M", 20, -18, "KND", "KND", 26),
      new Move("Breath of Hades", "4a+b", "M", 20, "KND", "KND", "KND", 56, "Shifts to attack throw upon hit", false, false, false, false, false, false, true, false, true),

      new Move("Flip Titan Ax", "8A+B", "M", 28, -20, "KND", "KND", 52),
      new Move("Guard Crusher", "B+K", "H", 22, -4, 14, 14, 16, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      
      new Move("Body Splash", "6B+K", "M", 18, -14, 8, 8, 26),
      new Move("Body Splash", "6b+k", "M", 18, -12, 12, 12, 26, "Revenge attack", false, true),
      
      new Move("Hades Crush", "2B+K", "M", 36, -2, "KND", "KND", 36),
      new Move("Hymn to Destruction", "2B+KA+G", "M", 36, -26, "KND", "KND", 58, null, false, false, false, false, false, false, true),
      new Move("Hymn to Annihilation", "2B+K4A+G", "M", 36, -26, "KND", "KND", 58, null, false, false, false, false, false, false, true),
      new Move("Ax Lower Cannon", "4B+K", "LLL", 40, 0, "KND", "KND", 24, null, false, false, true),
      new Move("Ax Lower Cannon", "4B+KEB", "LLL", 40, 0, "LNC", "LNC", 44, null, false, false, false, false, false, false, true),
      new Move("Flying Divide", "9B+K", "M", null, 0, "KND", "KND", 42),
      new Move("Flying Divide", "9b+k", "M", null, 14, "KND", "KND", 52, null, false, false, false, false, false, false, false, true),
      new Move("Demented Moon", "236B+K", "M", 84, "LNC", "LNC", "LNC", 120, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Side Divide", "TB+K", "M", 14, 0, 10, "STN", 28)
    ],
    // 8-Way Run Moves
    [
      new Move("Tornado Spike", "#|^|(A", "M", 24, -18, -4, "KND", 28),
      new Move("Tornado Spike", "#|^|(AB", "MM", 24, -4, "KND", "KND", 58),
      new Move("Tornado Spike", "#|^|(Ab", "MM", 24, "KND", "KND", "KND", 103, null, false, false, false, false, false, false, false, false, true),

      new Move("Poseidon Crest", "@|*A", "M", 18, -10, 0, 0, 16),
      new Move("Poseidon Crest", "@|*AA", "MM", 18, -12, 2, 2, 36),

      new Move("Hades Divide", "!|$|uA", "M", 26, -12, 6, "KND", 22),
      new Move("Hades Divide", "!|$|ua", "M", 44, 8, "KND", "KND", 36, null, false, false, false, false, false, false, false, true),

      new Move("Ax Crash", "#|^|(B", "H", 16, -14, 0, "KND", 32, null, false, true),
      new Move("Hades Cannon", "@|*B", "M", 30, -10, "KND", "KND", 55, null, false, true),

      new Move("Azazel Tackle", "!|uB", "M", 30, -16, "KND", "KND", 32),
      new Move("Azazel Tackle", "!|uBK", "MM", 30, -4, "KND", "KND", 51, "2nd hit can be delayed"),

      new Move("Canyon Creation", "$B", "M", 28, -6, "KND", "KND", 38, null, false, false, true),
      new Move("Canyon Creation", "$b", "M", 60, "KND", "KND", "KND", 65, null, false, false, true, false, false, false, false, false, true, true),

      new Move("Bull Rush", "#|^|(K", "M", 18, -6, 12, "KND", 26),
      new Move("Bone Grinder", "#|^|(k", "M", 48, -4, "KND", "KND", null, null, false, true),
      new Move("Bone Grinder", "#|^|(kK", "MM", 48, -10, "KND", "KND", 70, null, false, true),
      
      new Move("Stamp of Hades", "@|*K", "M", 34, -6, "KND", "KND", 20),
      new Move("Stamp of Hades", "@|*k", "m", 58, 8, "KND", "KND", 30, "Becomes a low attack when at distance", false, false, false, false, false, false, false, true),

      new Move("Lower Command Kick", "!|$|uK", "M", 32, -2, "KND", "KND", 26, null, false, false, true),
      new Move("Atlas Punishment", "#|^|(A+B", "M", 44, -8, "KND", "KND", 42),

      new Move("Titan Ax", "@A+B", "M", 28, -20, "KND", "KND", 52),
      new Move("Titan Ax(Near)", "@A+B", "M", 28, -20, -8, -8, 32),
      new Move("Flip Titan Ax", "*A+B", "M", 28, -20, "KND", "KND", 52),

      new Move("Vicious Madness", "#|^|(A+G", "H", null, null, null, null, null, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, false, true),
      new Move("Underworld Pull", "Q#|^|(A+G2", "M", null, null, null, null, null, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, false, true),
      new Move("Cursed Earth", "!|$|uA+G", "H", null, null, null, null, null, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, false, true),
      new Move("Cursed Flesh", "!|$|uA+Gbj", "H", null, null, null, null, null, "2nd hit can be held", false, false, false, false, false, false, true),
      new Move("Uproot", "Q!|$|uA+G2", "M", null, null, null, null, null, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, false, true),
      new Move("Sliding", "RK", "L", null, null, "KND", "KND", 26)
    ],
    // Throws
    [
      new Move("Hades Destroyer", "A+G", "H", 18, null, "KND", "KND", 55, "Breakable", false, false, false, false, false, false, true),
      new Move("Colossus", "6A+G", "H", 18, null, "KND", "KND", 60, "Breakable", false, false, false, false, false, false, true),
      new Move("Festival of Havoc", "4A+G", "H", 18, null, "KND", "KND", 50, "Breakable", false, false, false, false, false, false, true),
      new Move("Beat Down", "ZA+G", "H", 18, null, "KND", "KND", 67, null, false, false, false, false, false, false, true),
      new Move("On Silent Wings", "XA+G", "H", 18, null, "KND", "KND", 65, null, false, false, false, false, false, false, true),
      new Move("Death Crush", "VA+G", "H", 18, null, "KND", "KND", 75, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),

      new Move("Maelstrom Divide", "Q8A+G", "M", 28, null, "KND", "KND", 55, "Not breakable", false, false, false, false, false, false, true),
      new Move("Bludgeoning Crush", "Q2A+G", "M", 14, null, "KND", "KND", 45, "Breakable", false, false, false, false, false, false, false, true),
      new Move("Apocalypse Pound", "SQ2A+G", "M", null, null, "KND", "KND", null, "Breakable", false, false, false, false, false, true, false, true),
      new Move("Drop of Lava", "Q1A+G", "M", 14, null, "KND", "KND", 55, "Breakable", false, false, false, false, false, false, false, true),
      new Move("Apocalypse Drop", "S1A+GA+G", "M", null, null, "KND", "KND", null, "Breakable", false, false, false, false, false, true, true),
      
      new Move("Wrath of the Accursed", "MA+G", "H", 18, null, "KND", "KND", 29, null, false, false, false, false, false, false, true),
      new Move("Wrath of the Damned", "M4A+G", "H", 18, null, "KND", "KND", 29, null, false, true, false, false, false, false, true),
      new Move("Titan Bomb", "236A+G", "H", 18, null, "KND", "KND", 60, "Breakable", false, false, false, false, false, false, true),
      new Move("Titan Bomb(fast)", "236A+GF", "H", 18, null, "KND", "KND", 65, "Breakable", false, false, false, false, false, false, true),
      new Move("Titan Bomb(hold)", "236a+g", "H", 45, null, "KND", "KND", 65, "Breakable", false, false, false, false, false, false, true),
      new Move("Apocalypse Destroyer", "S236A+GA+G", "H", null, null, "KND", "KND", null, "Breakable", false, false, false, false, false, true, true),
      
      new Move("Flight of the Wicked", "214A+G", "H", 18, null, "LNC", "LNC", 35, "Breakable/Can be held/Unable to break when held", false, false, false, false, false, false, true),
      new Move("Flight of the Wicked(fast)", "214A+Gj", "H", 18, null, "LNC", "LNC", 40, "Breakable/Can be held/Unable to break when held", false, false, false, false, false, false, true),
      new Move("Flight of the Wicked(hold)", "214a+g", "H", 40, null, "LNC", "LNC", 40, "Breakable/Can be held/Unable to break when held", false, false, false, false, false, false, true),

      new Move("Wicked Twister", "214A+G2|8A", "H", 18, null, "KND", "KND", 52, null, false, false, false, false, false, false, true),
      new Move("Ride of the Wicked", "S214A+G", "H", null, null, null, null, null, "Breakable/Can be held/Unable to break when held", false, false, false, false, false, true, true),
      new Move("Wicked Twister of Carnage", "S214A+G2|8A", "H", null, null, null, null, null, null, false, false, false, false, false, true, true),
      
      new Move("Obsidian Drop", "28A+G", null, 18, null, "KND", "KND", 55, null, false, false, false, false, false, false, true),
      new Move("Obsidian Drop(fast)", "28A+GF", null, 18, null, "KND", "KND", 60, null, false, false, false, false, false, false, true),

      new Move("Brutal Grasp", "3A+G", null, null, null, 10, 10, 10, "Not breakable", false, false, false, false, false, false, true),

      new Move("Vicious Madness", "#|^|(A+G", "H", 46, null, "KND", "KND", 40, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, false, true),
      new Move("Vicious Fury", "S#|^|(A+G", "H", null, null, "KND", "KND", null, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, true, true),
      new Move("Underworld Pull", "Q#|^|(A+G2", "M", 45, "KND", "KND", null, 45, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, false, true),
      new Move("Cursed Earth", "!|$|uA+G", "H", 46, null, "KND", "KND", 60, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, false, true),
      new Move("Cursed Earth", "!|$|uA+GB", "H", 46, null, "KND", "KND", 71, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, false, true),

      new Move("Cursed Flesh", "!|$|uA+Gbj", "H", null, null, "KND", "KND", null, "2nd hit can be held", false, false, false, false, false, false, true),
      new Move("Cursed Altar", "S!|$|uA+G", "H", null, "KND", "KND", null, null, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, true, true),
      new Move("Uproot", "Q!|$|uA+G2", "M", 45, null, "KND", "KND", 40, "Breakable/Revenge attack/Unable to break when revenge is active", false, false, false, false, false, false, true)
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
      new Move("New World Revolution", "SeA+B", "MMMMMM", null, null, null, null, null, "Switches to Almighty mode", false, true, false, false, false, true, false, true)
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
      new Move("Instruct the Unwise", "4B", "M", null, null, null, null, null, "GI vs. mid", false, true, false, true, false, false, false, true),
      new Move("Instruct the Unwise", "4BI", null, null, null, null, null, null, null, true),
      new Move("Nihilism", "CB", "M", null, null, null, null, null, null, false, false, true),
      new Move("Coup D'etat", "C3BB", "MM", null, null, null, null, null),
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
      new Move("Plunder the Depths", "#|^|*A", "H", null, null, null, null, null),
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
      new Move("March of Humanity", "eA+B", "MMMMMM", null, null, null, null, null),
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
      new Move("Scream of Defiance", "]A", "H", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("War and Destruction", "]B", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
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
      new Move("Premonition of Abraxas", "{AB", "HM", null, null, null, null, null),
      new Move("Will to Dominate", "{BB", "MM", null, null, null, null, null),
      new Move("Executioner's Gavel", "{x6", "M", null, null, null, null, null),
      new Move("Advocate of Change", "{4K", "L", null, null, null, null, null),
      new Move("Comedy of Errors ~ Beauty of Balance", "{K", null, null, null, null, null, null, null, true),
      new Move("Comedy of Errors ~ Beauty of Wonder", "{2|8K", null, null, null, null, null, null, null, true),
      new Move("Comedy of Errors ~ Tragedy of War", "{6K", null, null, null, null, null, null, null, true)
    ]
  ]

  Cervantes = [
    // Reversal Edge Attacks
    [
      new Move("Shipwrecker", "B+G", "M", 46, -8, null, null, 40, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Shipwrecker", "b+g", "M", 66, null, null, null, 50, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Accursed Corsair", "rAA", "HHH", null, null, null, null, null, null, false, true),
      new Move("Damned Culverin", "rAB", "HHHH", null, null, null, null, null, "Gun technique", false, true, false, false, false, false, false, true),
      new Move("Accursed Corsair ~ Dread Charge", "ra", "H", null, null, null, null, null, null, true, true),
      new Move("Wildfire Culverin", "rB", "MH", null, null, null, null, null, "Gun technique", false, true, false, false, false, false, false, true),
      new Move("Black Storm Ignition", "SrBv", "MHMM", null, null, null, null, null, "Gun technique", false, true, false, false, false, true, false, true),
      new Move("Anchor Dragger", "rK", "M", null, null, null, null, null, null, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Casa de Leviathan", "A+B+K", "M", 16, -18, "KND", "KND", 80, "Gun technique", false, false, false, false, false, false, true, false, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", 6, 0, 10, 10, 0, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Deep Sea Storm Flare", "SBBBB", "MMMM", 33, 9, "KND", "KND", 36, null, false, false, false, false, false, true, false, true),
      new Move("Head Snap Kick ~ Infernal Flare", "Sxk", "M", 26, -22, "KND", "KND", 30, null, true, false, false, false, false, true),
      new Move("Deep Sea Cannon Flare", "S3BB", "MM", 35, 6, "KND", "KND", 39, null, false, false, false, false, false, true, false, true),
      
      // version without last hit missing ?
      new Move("Vile Tornado", "S1KBvB", "LHH", 24, null, "KND", "KND", 24, "Gun technique", false, false, false, false, false, true, false, false, true),
      new Move("Treacherous Double Lunge", "S^b", "M", 35, -20, "KND", "KND", null, null, false, false, false, false, false, true, true),
      new Move("Raging Geo Da Ray", "S#|(BB", "MM", 21, 7, "LNC", "LNC", 30, null, false, false, false, false, false, true, false, true),
      new Move("Infernal Flare ~ Dread Charge", "S#|^|(B+K", null, null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Infernal Flare ~ Dread Storm", "S#|^|(b+k", null, null, null, null, null, null, "against the wall", true, false, false, false, false, true),
      new Move("Infernal Flare ~ Dread Charge", "@|*B+K", null, null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Infernal Flare ~ Dread Storm", "@|(b+k", null, null, null, null, null, null, "against wall", true, false, false, false, false, true),
      new Move("Infernal Flare ~ Dread Charge", "!|$|uB+K", null, null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Infernal Flare ~ Dread Storm", "!|$|ub+k", null, null, null, null, null, null, "against wall", true, false, false, false, false, true),
      new Move("Shrieking Sixties", "S{2|8BA", "MM", 14, null, "KND", "KND", 41, null, false, true, false, false, false, true),

      new Move("Shrieking Geo Da Ray", "S{2|8BB", "MM", 11, 2, "LNC", "LNC", 66, null, false, false, false, false, false, true, false, true),
      new Move("Shrieking Geo Da Ray(far)", "S{2|8BB", "MM", 11, 14, "LNC", "LNC", 66, null, false, false, false, false, false, true, false, true),

      new Move("Shrieking Ash", "S{2|8BK", "ML", 26, -26, "KND", "KND", 26, null, false, true, false, false, false, true),
      new Move("Furious Geo Da Ray", "S]B", "M", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Night Storm Ignition", "SM2a+b", "HMM", null, null, null, null, null, "Gun technique", false, false, false, false, false, true, false, false, true),
      new Move("Black Storm Ignition", "Srbv", "MHMM", null, null, null, null, null, null, false, true, false, false, false, true, false, true),
      new Move("Curse of the Ancient Mariner", "S236A+G", "H", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, true, true)
    ],
    // Horizontal Moves
    [
      new Move("Bridgette Cannonball", "A", "H", 12, -8, 2, 2, 12, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Bridgette Cannonball", "AA", "HH", 12, -6, 6, 6, 14, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Bridgette Cannonball", "AAA", "HHMH", 12, -12, "KND", "KND", 35, null, false, false, false, false, false, false, false, false, false, true),
      
      new Move("Pirate's Cross", "zB", "HM", 14, -18, -4, -4, 40),
      new Move("Storm Signal", "z6", "HM", 18, -8, 6, 6, 30),

      new Move("Half-Mast Wave", "6A", "H", 16, -10, 0, 0, 16),
      new Move("Half-Mast Wave", "6AA", "HH", 16, -6, "KND", "KND", 26),
      new Move("Half-Mast Wave ~ Dread Charge", "6Aa", "HH", 16, null, null, null, null, null, true), // Data missing
      new Move("Half-Mast Windmill", "6AB", "HMH", 16, -12, "KND", "KND", 30),

      new Move("Scissor Wave", "3A", "MM", 16, -12, 6, 6, 32),
      new Move("Sever Soul", "2A", "S", 12, -6, 6, 6, 12, null, false, false, true),
      new Move("Wave Break", "1A", "L", 30, -14, 6, "KND", 22, null, false, false, true),

      new Move("Scissor Lifter", "1zB", "LM", 24, -16, -2, -2, 24),
      new Move("Deadly Torrent ~ Dread Charge", "1zBB", "LMM", 24, -4, "LNC", "LNC", 24, "Shifts to attack throw upon hit", true, false, false, false, false, false, true),
      
      new Move("Crush Keel", "4A", "H", 18, -6, -2, "STN", 15),
      new Move("Crush Keel(hold)", "4a", "H", 32, -2, "STN", "STN", 15),

      new Move("Sever Soul", "CA", "S", 12, -6, 6, 6, 12,  null, false, false, true),
      new Move("Cursed Blow", "WA", "M", 18, -16, 16, 16, 18),
      new Move("Soul Wipe Riptide", "JA", "H", 26, -2, 8, 8, 26),
      new Move("Aft Soul Wipe", "TA", "H", 14, -6, 6, 6, 17),
      new Move("Sub Laser Wave", "T2A", "S", 14, -6, 6, 6, 15, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Wild Storm", "B", "M", 18, -8, 4, 4, 12, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Wild Storm", "BB", "MM", 18, -10, -2, -2, 10, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Wild Storm", "BBB", "MMM", 18, -16, "KND", "KND", 36, null, false, false, false, false, false, false, false, false, false, true),
      
      new Move("Storm Generate", "x2", "m", 14, -6, 2, 2, 8, null, false, false, false, false, false, false, true),
      new Move("Storm Generate", "Mx2", "m", 14, null, "KND", "KND", 37, "Gun technique/Shifts to attack throw upon hit", false, true, false, false, false, false, true),
      new Move("Surprise Wave", "xA", "H", 20, -14, "STN", "STN", 20, "GI vs. high, mid horizontal(except kicks)", false, false, false, true),
      new Move("Head Snap Kick", "xK", "M", 26, -2, "KND", "KND", 28),

      new Move("Sail Nautilus", "6B", "M", 16, -14, 2, 2, 14),
      new Move("Sail Nautilus", "6BB", "MM", 16, -14, "KND", "KND", 30),

      new Move("Dreadnought Culverin", "6x", "M", 28, -14, "STN", "STN", 25, "Gun technique/Shifts to follow-up attack upon hit"),
      new Move("Dreadnought Culverin", "6xA+B", "MMMMMMMM", 28, -14, "KND", "KND", 44, "Gun technique/Shifts to follow-up attack upon hit"),
      
      new Move("Cannonball Lifter", "3B", "M", 20, -14, "LNC", "LNC", 28),
      new Move("Spike Anchor", "2B", "M", 18, -8, 0, 0, 18, null, false, false, true),
      
      new Move("Submerged Harpoon", "1B", "L", 24, -20, 2, 2, 20),
      new Move("Storm Nest", "D1b", "L", 24, null, "STN", "STN", 20, "Gun technique/Shifts to attack throw upon close-range hit", false, false, false, false, false, false, true),
      
      new Move("Bloody Corposant", "4B", "M", 14, -14, -4, -4, 14),
      new Move("Bloody Corposant", "4BB", "MM", 14, -12, -2, -2, 12),
      new Move("Bloody Corposant", "4BBB", "MMMM", 14, -12, -6, -6, 21),
      new Move("Bloody Hilt Kick", "4BK", "MH", 14, -14, "KND", "KND", 18),

      new Move("Slay Storm", "CB", "M", 14, -8, -3, -3, 18, null, false, false, true),
      new Move("Devastater", "WB", "M", 18, -10, "LNC", "LNC", 30),
      new Move("Devastater ~ Dread Charge", "Wb", "M", 18, null, null, null, null, null, true),
      new Move("Deck Lifter", "JB", "M", 40, -12, "LNC", "LNC", 28),
      new Move("Aft Blade Storm", "TB", "M", 16, -6, 4, 4, 18),
      new Move("Sub Slay Storm", "T2B", "M", 18, -8, 2, 2, 18, null, false, false, true)
    ],
    // Kick Moves 
    [
      new Move("Anchor Kick", "K", "H", 12, -8, 0, 0, 14, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Killer Windrose", "cA", "MH", 24, -4, 6, 6, 40, null, false, true),
      new Move("Anchor Gusty Kick", "c6", "H", 16, -6, 4, 4, 28, "Returns to facing away"),
      new Move("Anchor Knee Kick", "6K", "M", 14, -8, 6, 6, 14),
      new Move("Anchor Middle Kick", "3K", "M", 14, -4, 6, 6, 14),
      new Move("Anchor Bow Kick", "2K", "L", 16, -14, -4, -4, 12, null, false, false, true),
      new Move("Vile Slide", "1K", "L", 28, -24, -8, "STN", 25),

      new Move("Anchor Steep Kick", "4K", "H", 14, -10, -2, -2, 16),
      new Move("Anchor Steep Kick", "4KK", "HM", 14, -12, 0, 0, 20),

      new Move("Anchor Bow Kick", "CK", "L", 16, -14, -4, -4, 12, null, false, false, true),
      new Move("Anchor Revive Kick", "WK", "M", 12, -12, 6, 6, 16),
      new Move("Cannon Launch Kick", "JK", "M", 22, -8, 2, 2, 24),
      new Move("Aft Anchor Kick", "TK", "H", 14, -8, 2, 2, 16),
      new Move("Sub Anchor Bow Kick", "T2K", "L", 18, -14, 2, 2, 16, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Iceberg Circular ~ Dread Charge", "A+B", "M", 38, -14, "LNC", "LNC", 25, null, true, true, false, false, false, false, false, true),
      new Move("Pirate's Scheme", "6A+B", null, null, null, null, null, null, "GI vs. horizontal attacks(except kicks)", false, false, false, true),
      new Move("Pirate's Scheme", "6A+BI", null, null, null, null, null, null, "Becomes a middle attack when at a distance", false, false, false, false, false, false, true),
      
      new Move("Killer X", "2A+B", "M", 18, -10, "KND", "KND", 30, null, false, true, true),
      new Move("Genocidal Culverin", "4A+B", "H", 40, null, null, null, 60, "Gun technique", false, false, false, false, false, false, false, false, true),
      new Move("Bloody Culverin", "8A+B", "H", 16, null, "KND", "KND", 21, "Gun technique", false, false, false, false, false, false, false, false, true),
      new Move("Anchor Bow Heel", "B+K", "M", 30, -4, 6, "LNC", 30, "GI vs. high, mid horizontal", false, false, false, true),
      
      new Move("Pirate's Tactics", "6B+K", null, null, null, null, null, null, "GI vs. vertical(except kicks)", false, false, false, true),
      new Move("Pirate's Tactics", "6B+KI", "M", null, null, null, null, null, "Gun technique", false, false, false, false, false, false, false, false, true),
      
      new Move("High Tide Anchoring", "2B+K", "M", 22, -16, "KND", "KND", 30),
      new Move("High Tide Anchoring", "2b+k", "m", 38, -14, "KND", "KND", 40),
      new Move("High Tide Anchoring(far)", "2b+k", "L", 38, -12, "STN", "STN", 0),

      new Move("Eternal Curse", "1B+K", "M", 67, null, "LNC", "LNC", 40, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Dark Geo Da Ray", "4B+K", "MMM", 78, 4, "LNC", "LNC", 52, null, false, false, false, false, false, false, false, true),
      new Move("Dark Geo Da Ray ~ Dread Storm", "4b+k", null, null, null, null, null, null, "against the wall", true),
     
      new Move("Killer X Crawler", "8B+K", "M", 34, -14, "KND", "KND", 36),
      new Move("Pressure Astern", "8b+k", "M", 36, -4, "STN", "STN", 22, "Hits opponent behind you"),
     
      new Move("Flying Dutchman", "CA+B", "MMMMMMM", null, null, null, null, null),
      new Move("Pressure Astern", "TB+K", "M", 14, -4, "STN", "STN", 20)
    ],
    // 8-Way Run Moves
    [
      new Move("Lagging Wave", "#|^|(A", "H", 20, -12, "KND", "KND", 28),
      new Move("Lagging Wave ~ Dread Charge", "#|^|(a", "H", null, null, null, null, null, null, true),
      new Move("Bloody Hoist", "#|^(zB", "M", 24, -14, 6, 6, 24),

      new Move("Gibbering Torpedo", "@|*A", "L", 24, -18, -6, -6, 14),
      new Move("Gibbering Torpedo", "@|*AA", "LL", 24, -14, "KND", "KND", 14),
      new Move("Gibbering Torpedo ~ Dread Charge", "@|*a", "L", null, null, null, null, null, null, true),
      new Move("Gibbering Pressure", "@|*AB", "LM", 24, 14, "STN", "STN", 20, null, false, false, false, false, false, false, false, true),

      new Move("Merciless Wave", "!|$|uA", "H", 24, -2, "KND", "KND", 30),
      new Move("Merciless Wave ~ Dread Charge", "!|$|ua", "H", 34, -16, "STN", "STN", 10, null, true),
      new Move("Merciless Needle", "!|$|uzBB", "MM", 34, -16, 2, 2, 14),
      new Move("Bile Lunges", "^B", "M", 18, -14, "KND", "KND", 48, "Shifts to attack throw upon close-range hit", false, false, false, false, false, false, true),
      new Move("Riot Storm", "#|(B", "M", 26, -6, "LNC", "LNC", 38),
      new Move("Dread Pressure", "@|*B", "M", 24, -14, 8, 8, 22),
      new Move("Dread Pressure", "@|*b", "M", 42, 6, "STN", "STN", 30, null, false, true, false, false, false, false, false, true),
      new Move("Bow Breaker", "!|$|uB", "M", 26, -16, "KND", "KND", 34),
      new Move("Head Scratch Kick", "#|^|(K", "M", 16, -8, 2, 2, 18),
      new Move("Anchor Side Kick", "@|*K", "M", 24, -10, 6, "KND", 20, "GI vs. high, mid horizontal", false, false, false, true),
      new Move("Anchor Side Kick", "@|*k", "M", 34, 0, "KND", "KND", 26, "GI vs. high, middle horizontal", false, true, false, true),
      new Move("Anchor Swirl Kick", "!|uK", "L", 24, -16, 4, 4, 18, null, false, false, true),

      new Move("Galleon Sinker", "$K", "M", 24, -4, "KND", "KND", 26, null, false, false, true),
      new Move("Galleon Sinker(far)", "$K", "M", 24, 3, "KND", "KND", 26, null, false, false, true),

      new Move("Night Raid", "#|^|(A+B", "MMM", 26, -8, "KND", "KND", 48),
      new Move("Tornado Slice", "@|*A+B", "HM", 28, -6, "KND", "KND", 44),
      new Move("Cross Bone Divider", "!|$|uA+B", "M", 44, -12, "LNC", "LNC", 48),
      new Move("Cross Bone Divider", "!|$|ua+b", "M", 64, null, "LNC", "LNC", 26, null, false, false, false, false, false, false, false, false, true),
      new Move("Dark Flame ~ Dread Charge", "#|^|uB+K", null, null, null, null, null, null, null, true),
      new Move("Dark Flame ~ Dread Storm", "#|^|ub+k", null, null, null, null, null, null, "Against the wall", true),
      new Move("Dark Flame ~ Dread Charge", "@|*B+K", null, null, null, null, null, null, null, true),
      new Move("Dark Flame ~ Dread Storm", "@|*b+k", null, null, null, null, null, null, "Against the wall", true),
      new Move("Dark Flame ~ Dread Charge", "!|$|uB+K", null, null, null, null, null, null, null, true),
      new Move("Dark Flame ~ Dread Storm", "!|$|ub+k", null, null, null, null, null, null, "Against the wall", true),
      new Move("Dead Compass", "#|^|(A+G", "H", 18, null, 4, 4, null, "Not Breakable", false, false, false, false, false, false, true),
      new Move("Sliding", "RK", "L", 20, -22, "KND", "KND", 26)
    ],
    // Throws
    [
      new Move("Sadistic Cross", "A+G", "H", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),
      new Move("Cannonball Split", "4A+G", "H", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),
      new Move("Figurehead Break", "ZA+G", "H", 18, null, "KND", "KND", null, "", false, false, false, false, false, false, true),
      new Move("Jolly Roger Hoist", "XA+G", "H", 18, null, "KND", "KND", null, "", false, false, false, false, false, false, true),
      new Move("Flush Flood", "VA+G", "H", 18, null, "KND", "KND", null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Dead Compass", "#|^|(A+G", "H", 18, null, 4, 4, null, "Not Breakable/6 DMG on wall hit", false, false, false, false, false, false, true),
      new Move("Curse of the Ancient Mariner", "S236A+G", "H", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, true, true)
    ],
    // ************ Stances *************
    // Dread Charge
    [
      new Move("Dread Charge", "214", null, null, null, null, null, null, null, true),
      new Move("Geo Da Ray Rafaga", "214BF", "M", null, null, null, null, null, "Powers up on just input/Becomes a high attack when at distance"),
      
      new Move("Damned Onslaught", "[A", "HH", 27, 2, "KND", "KND", 32),
      new Move("Geo Da Ray", "[B", "M", 11, -16, "LNC", "KND", 40),
      new Move("Geo Da Ray ~ Dread Storm", "[b", "M", 11, null, "LNC", "KND", null, "Against the wall", true),

      new Move("Geo Da Ray", "[2|8B", "M", 11, -16, "LNC", "KND", 40),
      new Move("Geo Da Ray ~ Dread Storm", "[2|8b", "M", 11, null, "LNC", "KND", null, "Against the wall", true),

      new Move("Rolling Slapper", "[K", "MM", 30, 2, "STN", "KND", 40, "Returns to facing away"),
      new Move("Tornado Swell", "[A+B", "MMM", 24, -44, "KND", "KND", 82),
      new Move("Shadow Flare", "[B+K", "M", 38, 6, "KND", "KND", 55, null, false, false, false, false, false, false, false, true),
      new Move("Shadow Flare", "[b+k", "M", 38, 6, "KND", "KND", 60, null, false, false, false, false, false, false, false, true),
      new Move("Dread Dash", "[6", null, null, null, null, null, null, null, true)
    ],
    // Dread Storm
    [
      new Move("Dread Storm", "[b", null, null, null, null, null, null, "Against the wall", true),
      new Move("Soaring Spider", "]A", "M", 14, null, "KND", "KND", 41, "-18 to -32 on guard", false, true),
      new Move("Rolling Geo Da Ray", "]B", "M", 11, null, "LNC", "LNC", 66, "+2 to +14 on guard"),
      new Move("Abduction", "]K", "L", 26, -26, "KND", "KND", 26, null, false, true)
    ]
  ]

  Geralt = [
    // Reversal Edge Attacks
    [
      new Move("Parry", "B+G", "M", 44, -4, null, null, 35, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Parry", "b+g", "M", null, null, null, null, 45, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),

      new Move("School of the Wolf", "rA", "H", null, null, null, null, 19, "Powers up when opponent is soul charged", false, true),
      new Move("School of the Wolf", "rAA", "HHH", null, null, null, null, 45, "Powers up when opponent is soul charged", false, true),

      new Move("Butcher of Blaviken", "rB", "M", null, null, null, null, 56, "Shifts to attack throw upon hit/Shifts to clash upon guard", false, true, false, false, false, false, true, true),
      new Move("Flood of Anger", "rK", "M", null, null, null, null, 25, null, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Hunt of the White Wolf", "A+B+K", "M", 16, null, null, null, 80, null, false, false, false, false, false, false, true, false, false, false, true),
      new Move("Impaling Hilt ~ Igni Burn", "6Bb", "MHHm", 18, -6, "STN", "STN", 52, "Consumes soul gauge/No gauge cost when soul charged", false, false, false, false, false, false, false, false, false, false, true),
      
      new Move("Quen Strike", "6A+B", "M", 43, null, "STN", "STN", 20, "Consumes soul gauge/No gauge cost when soul charged", false, false, false, false, false, false, false, false, false, false, true),
      new Move("Quen Expel", "6A+BUA", "M", null, null, "KND", "KND", 30),
      new Move("Quen Charge", "6A+BUB", "M", null, null, null, "STN", 44,"Powers up when opponent is soul charged", false, true, false, false, false, false, false, true),
      new Move("Glyph of the Quen ~ Fleet Footwork", "6A+B2|8B+K", null, null, null, null, null, null, null, true),
      
      new Move("Igni Burn", "2|@|*A+B", "HH", 18, -12, 4, 4, 22, "Consumes soul gauge/No gauge cost when soul charged", false, false, false, false, false, false, false, false, false, false, true),
      new Move("Igni Burn", "2|@|*a+b", "HHm", 18, -6, "KND", "KND", 46, "Consumes soul gauge/No gauge cost when soul charged", false, false, false, false, false, false, false, false, false, false, true),
      new Move("Yrden Glyph", "4|!|$|uA+B", null, null, null, null, null, null, "Consumes soul gauge/No gauge cost when soul charged/GI vs. high, mid & low", true, false, false, true, false, false, false, false, false, false, true),
      new Move("Aard Push", "8A+B", "m", 10, -10, 4, 4, 20, "Consumes soul gauge/No gauge cost when soul charged", false, false, false, false, false, false, false, false, false, false, true),
      new Move("Igni Armor Melter", "#|^|(A+B", "M", 60, null, "STN", "STN", 45, "Consumes soul gauge/No gauge cost when soul charged", false, false, false, false, false, false, false, false, true, true, true),
      new Move("Vaulting Aard Hammer", "A+G|4A+GA+B", "H", 18, null, "KND", "KND", 70, "Consumes soul gauge/No gauge cost when soul charged", false, true, false, false, false, false, true, false, false, false, true),
      
      new Move("Soul Charge", "4A+B+G", "m", 6, 0, 8, 8, 0, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Wolven Storm", "SAAAA", "HHMH", null, null, "KND", "KND", 58, null, false, false, false, false, false, true),
      new Move("Ursine Rage", "S6ABB", "HMM", null, -16, "KND", "ND", 65, "Powers up when opponent is soul charged", false, true, false, false, false, true),

      new Move("Tawny Owl Upsurge", "3A", "M", null, null, null, null, 15, null, false, false, false, false, false, true),
      new Move("Tawny Owl Upsurge", "3AA", "MM", null, -20, -10, -10, 25, null, false, false, false, false, false, true),
      new Move("Tawny Owl Upsurge", "3AAA", "MMHMMM", null, -12, 2, 2, 43, null, false, false, false, false, false, true),
      new Move("Tawny Owl Upsurge", "3AAAAA", "MMHMMM", null, -16, "KND", "KND", null, null, false, false, false, false, false, true),
      
      new Move("Blizzard Frenzy", "#|^|(AAA", "HHM", null, 4, "KND", "KND", 56, null, false, false, false, false, false, true)
    ],
    // Horizontal Moves
    [
      new Move("Steel Whirlwind", "A", "H", 12, -8, -4, -4, 10, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Steel Whirlwind", "AA", "HH", 12, -10, 2, 2, 24, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Steel Whirlwind", "AAA", "HHM", 12, -8, 8, 8, 62, null, false, false, false, false, false, false, false, false, false, true),
      
      new Move("Svalblod Strike", "6A", "H", 14, -10, -4, 0, 14),
      new Move("Svalblod Strike", "6AA", "HM", 14, -6, "KND", "KND", 36),
      new Move("Berserker Crush", "6AB", "HM", 14, -6, 2, 2, 34),

      new Move("Bonhart Blitz", "3A", "M", 16, -10, -2, -2, 14),
      new Move("Shank Slash", "2A", "S", 12, -6, 4, 4, 10, null, false, false, true),

      new Move("Sweeping Aard Thrust", "1A", "L", 26, -20, -10, -4, 18),
      new Move("Sweeping Aard Thrust", "1AA", "Lm", 26, -10, 4, 4, 39),
      new Move("Kingsweeper", "1AB", "LM", 26, -22, "KND", "KND", 41, null, false, true),

      new Move("Adrenaline Onslaught", "4A", "M", 22, -16, -6, null, 20, "Powers up when opponent is soul charged"),
      new Move("Adrenaline Onslaught", "4AH", "MM", 22, null, null, null, 26, "Powers up when opponent is soul charged"),
      new Move("Adrenaline Onslaught", "4AHAj", "MMM", 22, null, null, null, 41, "Powers up when opponent is soul charged"),

      new Move("Gnomish Knee-Slash", "CA", "S", 12, -6, 4, 4, 10, null, false, false, true),
      new Move("Feline Lacerate", "WA", "M", 18, -10, 2, 2, 20),
      new Move("Griffin Swipe", "JA", "H", 22, -4, 6, 6, 18, "Damage differs slightly according to jump direction"),
      new Move("Turnaround Smite", "TA", "H", null, null, null, null, 14),
      new Move("Turnaround Shincracker", "T2A", "S", null, null, null, null, 14, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Wolf Bite", "B", "M", 14, -10, 0, 0, 12, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Wolf Bite", "BB", "MM", 14, -8, 2, 2, 28, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Wolf Bite", "BBB", "MMM", 14, -10, 6, 6, 48, null, false, false, false, false, false, false, false, false, false, true),
      
      new Move("Impaling Hilt", "6B", "M", 18, -14, 0, 0, 16),
      new Move("Impaling Hilt ~ Igni Burn", "6BB", "MHH", 18, -12, 4, 4, 34),

      new Move("Skelliger Uppercut", "3B", "M", 20, -14, "LNC", "LNC", 28),
      new Move("Sunderstep", "2B", "M", 14, -8, 2, 2, 14, null, false, false, true),
      new Move("Crippling Strike", "1B", "L", 26, -14, "KND", "KND", 22),

      new Move("Backhand Eviscerate", "4B", "M", 22, -12, "KND", "KND", 22, "Powers up when opponent is soul charged", false, true),
      new Move("Backhand Eviscerate(hold)", "4b", "M", 44, -6, "SLNC", "SLNC", 30, "Powers up when opponent is soul charged/Can be held", false, true),

      new Move("Dwarven Dismember", "CB", "M", 14, -8, 2, 2, 14, null, false, false, true),
      new Move("Panther Shred", "WB", "MM", 12, -8, 2, 2, 22),

      new Move("Wyvern Dive(backward)", "7JB", "M", 36, -8, 2, 2, 26),
      new Move("Wyvern Dive(neutral)", "8JB", "M", 36, -8, "KND", "KND", 28),
      new Move("Wyvern Dive(forward)", "9JB", "M", 36, -8, "KND", "KND", 30),

      new Move("Turnaround Crush", "TB", "M", null, null, null, null, 18),
      new Move("Turnaround Crippler", "T2B", "M", null, null, null, null, 20, null, false, false, true)
    ],
    // Kicks
    [
      new Move("Septum Deviator", "K", "H", 12, -8, 0, 0, 12, null, false, false, false, false, false, false, false, false, false, true),

      new Move("Splintered Sternum", "6K", "M", 16, -10, 2, "KND", 18),
      new Move("Splintered Sternum", "6k", "M", 34, 2, "KND", "KND", 28),

      new Move("Kidney Crunch", "3K", "M", 14, -8, 2, 2, 16),
      new Move("Crouching Destabilizer", "2K", "L", 16, -14, -4, -4, 12, null, false, false, true),
      new Move("Dijkstra Legbreaker", "1K", "L", 18, -14, -2, 4, 18),

      new Move("The Law of Surprise", "4K", "M", 24, -14, 6, "STN", 20),
      new Move("The Law of Surprise ~ Quen Strike", "4KK", "MM", 24, -4, 10, "KND", 36),
      new Move("The Law of Surprise ~ Quen Expel", "4KKUA", "MM", 24, -12, "KND", "KND", 44),
      new Move("The Law of Surprise ~ Quen Charge", "4KKUB", "MM", 24, 6, "STN", "STN", 64),
      new Move("The Law of Surprise ~ Glyph of Quen ~ Fleet Footwork", "4KK2|8B+K", "M", 24, null, null, null, 20),

      new Move("Mahakam Sidewinder", "CK", "L", 16, -14, -4, -4, 12, null, false, false, true),
      new Move("Manticore Rend", "WK", "M", 14, -8, 2, 2, 18),
      new Move("Forktail Pounce", "JK", "M", 22, -8, 4, 4, 18, "Damage differs slightly according to jump direction"),
      new Move("Turnaround Cranium Kick", "TK", "H", null, null, null, null, 16),
      new Move("Turnaround Ankle Stomp", "T2K", "L", null, null, null, null, 18, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Thunderbolt Overdose", "A+B", "M", 36, 4, "KND", "KND", 36, null, false, true, false, false, false, false, false, true),
      new Move("Rolling Charge", "B+K", "M", 44, -8, "KND", "KND", 36),
      new Move("Rolling Charge ~ Fleet Footwork", "B+K2|2B+K", null, null, null, null, null, null, null, true),

      new Move("Swallow Surge", "6B+K", "M", 20, -16, "LNC", "LNC", 14, "Powers up when opponent is soul charged"),
      new Move("Swallow Surge", "6B+KB", "MM", 20, -14, "KND", "KND", 27, "Powers up when opponent is soul charged"),

      new Move("Fleet Footwork", "2|8B+K", null, null, null, null, null, null, null, true),

      new Move("Precision Aard Pummel", "TB+K", "M", 18, -12, "STN", "STN", 30),
      new Move("Precision Aard Pummel", "TB+KB", "Mm", 18, -10, "KND", "KND", 51)
    ],
    // 8-Way Run Moves
    [
      new Move("Cleaving Pirouette", "#|^|(A", "H", 18, -10, 0, 0, 14),
      new Move("Cleaving Pirouette", "#|^|(AA", "HH", 18, -6, 2, 2, 30),
      new Move("Cleaving Pirouette ~ Quen Strike", "#|^|(AB", "HN", 18, -4, 10, "KND", 34),
      new Move("Cleaving Pirouette ~ Quen Expel", "#|^|(ABUA", "HN", 18, -12, "KND", "KND", 44),
      new Move("Cleaving Pirouette ~ Quen Charge", "#|^|(ABUB", "HM", 18, 6, "KND", "KND", 58, "Powers up when opponent is soul charged", false, true, false, false, false, false, false, true),
      new Move("Cleaving Pirouette ~ Glypth of Quen ~ Fleet Footwork", "#|^|(AB2|8B+K", "H", 18, null, null, null, 14, null, true),
      new Move("Toussant Two-Step", "#|^|(AK", "HL", 18, -10, 4, 4, 34, "2nd hit can be held"),
      
      new Move("Sword Deflection", "@|*A", "M", 32, -14, 0, 0, 18, "GI vs. mid horizontal(except kicks)", false, true, false, true),
      new Move("Deadly Retribution", "!|$|uA", "H", 26, -12, "KND", "KND", 60, "Shifts to attack throw upon close-range hit/Powers up when opponent is soul charged", false, false, false, false, false, false, true),

      new Move("Gyrating Slash", "^B", "M", 30, -16, -4, -4, 18, "Powers up when opponent is soul charged", false, true),
      new Move("Gyrating Slash", "^BA", "MH", 30, -6, 4, 4, 34, "Powers up when opponent is soul charged", false, true),
      new Move("Alzur's Double-Cross", "^BB", "MM", 30, -12, "KND", "KND", 44),

      new Move("Fiery Dancer", "#|(B", "MM", 18, -14, "STN", "STN", 36),
      new Move("Circle of Power", "@|*B", "M", 42, -2, "KND", "KND", 36),

      new Move("Swift Silver", "!|$|uB", "M", 26, -18, -8, -8, 14, "Powers up when opponent is soul charged"),
      new Move("Swift Silver", "!|$|uBB", "MM", 26, -16, "KND", "KND", 32, "Powers up when opponent is soul charged"),

      new Move("Sir Ravix Roundhouse", "#|^|(K", "M", 18, -6, 4, 4, 16),
      new Move("Dijkstra Legbreaker", "@|*K", "L", 18, -14, -2, 4, 18),

      new Move("The Law of Surprise", "!|$|uK", "M", 24, null, null, null, 20),
      new Move("The Law of Surprise ~ Quen Strike", "!|$|uKK", "MM", 24, null, "STN", "KND", 36),
      new Move("The Law of Surprise ~ Quen Expel", "!|$|uKKUA", "MM", 24, null, "KND", "KND", 44),
      new Move("The Law of Surprise ~ Quen Charge", "!|$|uKKUB", "MM", 24, null, null, "STN", 64, "Powers up when opponent is soul charged", false, true, false, false, false, false, false, true),
      new Move("The Law of Surprise ~ Glyph of Quen ~ Fleet Footwork", "!|$|uKK2|8B+K", "M", 24, null, null, null, 20, null, true),
      
      new Move("Whirling Manticore", "#|^|(B+K", "MM", 28, -8, "LNC", "LNC", 53),
      new Move("Fleet Footwork", "@|*B+K", null, null, null, null, null, null, null, true),
      new Move("Rolling Charge", "!|$|uB+K", "M", 44, -8, "KND", "KND", 36),
      new Move("Rolling Charge ~ Fleet Footwork", "!|$|uB+K2|8B+K", null, null, null, null, null, null, null, true),
      new Move("Viper in the Grass", "RK", "L", null, -22, "KND", "KND", 26)
    ],
    // Throws
    [
      new Move("Monster Slayer", "A+G", "H", 18, null, "KND", "KND", 50, "Breakable", false, false, false, false, false, false, true),
      new Move("Geralt's Fury", "4A+G", "H", 18, null, "KND", "KND", 55, "Breakable", false, false, false, false, false, false, true),
      new Move("Temerian Devil", "ZA+G", "H", 18, null, "KND", "KND", 65, null, false, false, false, false, false, false, true),
      new Move("Adrenaline Rush", "XA+G", "H", 18, null, "KND", "KND", 60, null, false, false, false, false, false, false, true),
      new Move("Mutant's Wrath", "VA+G", "H", 18, null, "KND", "KND", 70, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Vaulting Aard Hammer", "A+G|4A+GA+B", "H", 18, null, "KND", "KND", 70, "Consumes soul gauge/No gauge cost when soul charged", false, true, false, false, false, false, true, false, false, false, true),
    ]
  ]

  Groh = [
    // Reversal Edge Attacks
    [
      new Move("Glory's End", "B+G", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Glory's End", "b+g", "M", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Destruction of Logres", "rA", "H", null, null, null, null, null, null, false, true),
      new Move("Path to Avalon", "rB", "MMM", null, null, null, null, null, "Shifts to clash upon guard", false, true, false, false, false, false, false, true),
      new Move("Path to Avalon ~ Avenger", "rB6", "MMM", null, null, null, null, null, null, true, true, false, false, false, false, false, true),
      new Move("Guinevere's Indiscretion", "rK", "M", null, null, null, null, null, null, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Chevalier Mal Fet", "A+B+K", "M", 16, -16, "KND", "KND", null, null, false, false, false, false, false, false, true, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", 6, 3, 8, 8, 0, null, false, false, false, false, false, false, false, true, false, false, true), // +4 on block?
     
      new Move("Questing Fang ~ Steed of the Night", "S6AA6", "HM", null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Guilt Seeker", "S1AK", "Lm", 26, -22, "KND", "KND", null, "Shifts to attack throw upon hit", false, false, false, false, false, true, true),
      new Move("Calamitous Judgment", "S3BB", "MMMM", 18, -8, "KND", "KND", null),
      new Move("Curse of Morgan ~ Steed of the Night", "S1BB6", "LM", null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Benevolence Step ~ Steed of the Night", "S4B6", "M", null, null, null, null, null, null, true, true, false, false, false, true),
      new Move("Wasteland", "S2A+B", "L", null, null, null, null, null, null, false, false, true, false, false, true, false, true),
      new Move("War of Benwick ~ Steed of the Night", "S4A+B6", "M", null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Morgan's Deception ~ Steed of the Night", "S4B+K6", "M", null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Steed of the Night", "S[6", null, null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Cover of Darkness", "S[4", null, null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Demon King Slayer", "S[6A", "HH", 33, 4, "KND", "KND", null, null, false, false, false, false, false, true, false, true),
      new Move("Calamity's Collapse", "S[6B", "MMM", 38, -8, "KND", "KND", null, null, false, false, false, false, false, true),
      new Move("Destructive Order", "S[6K", "M", 31, -2, "KND", "KND", null, null, false, false, false, false, false, true)
    ],
    // Horizontal Moves
    [
      new Move("Knight's Oath", "A", "H", 12, -6, 4, 4, 10, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Knight's Oath", "AA", "HH", 12, -8, 4, 4, 22, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Knight's Oath", "AAA", "HHH", 12, -6, 6, 6, 38, null, false, false, false, false, false, false, false, false, false, true),
      
      new Move("Question Fang", "6A", "H", 16, -8, 0, 4, 16),
      new Move("Question Fang", "6AA", "HM", 16, -8, "KND", "KND", 38),
      new Move("Questing Fang ~ Avenger", "6A6", "H", 16, -4, 4, 8, 16, null, true),

      new Move("Cutting Truth", "3A", "M", 16, -10, 0, 6, 15),
      new Move("Gallant Slash", "2A", "S", 12, -6, 6, 6, 10, null, false, false, true),
      new Move("Saint Mia", "1A", "L", 26, -16, 4, 4, 20, null, false, false, true),

      new Move("Sir Tristan's Charity", "4A", "M", 30, -4, 4, 4, 35),
      new Move("Sir Tristan's Charity ~ Avenger", "4A6", "M", 30, 3, 11, 11, 35, null, true),

      new Move("Kneeling Slash", "CA", "S", 12, -6, 6, 6, 10, null, false, false, true),

      new Move("Ascending Slash", "WA", "M", 18, -12, 4, 4, 22),
      new Move("Ascending Slash ~ Avenger", "WA6", "M", 18, -8, 8, 8, 22, null, true),

      new Move("Vaulting Slash", "JA", "H", 24, -6, "KND", "KND", 26),
      new Move("Penitent Slash", "TA", "H", 14, -8, 2, 2, 12),
      new Move("Atoning Slash", "T2A", "S", 14, -6, 6, 6, 12, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Knight's Accolade", "B", "M", 14, -8, 2, 2, 14, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Knight's Accolade", "BB", "MM", 14, -6, 4, 4, 28, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Knight's Accolade", "BBB", "MMM", 14, -4, "KND", "KND", 48, null, false, false, false, false, false, false, false, false, false, true),
     
      new Move("Darting Raven", "6B", "M", 16, -10, 3, 3, 12),
      new Move("Darting Raven", "6BB", "MM", 16, -10, 2, 2, 24),
      new Move("Darting Raven ~ Avenger", "6BB6", "MM", 16, -5, 7, 7, 24, null, true),

      new Move("Steel Judgment", "3B", "M", 18, -16, "LNC", "LNC", 24),
      new Move("Gallant Strike", "2B", "M", 14, -10, 2, 2, 14, null, false, false, true),

      new Move("Curse of Morgan", "1B", "L", 22, -16, "LNC", "LNC", 24),
      new Move("Curse of Morgan", "1BB", "LM", 22, -14, -3, -3, 14),

      new Move("Benevolence Step", "4B", "M", 22, -7, 4, "STN", 18, null, false, true),
      new Move("Kneeling Strike", "CB", "M", 14, -10, 2, 2, 14, null, false, false, true),
      new Move("Ascending Thrust", "WB", "M", 14, -12, 0, 0, null),
      new Move("Ascending Thrust ~ Avenger", "WB6", "M", 14, -4, 8, 8, null, null, true),
      new Move("Vaulting Strike", "JB", "M", 30, -8, "KND", "KND", 28),
      new Move("Penitent Strike", "TB", "M", 16, -8, 2, 2, 16),
      new Move("Atoning Strike", "T2B", "M", 18, -10, 2, 2, 18, null, false, false, true)
    ],
    // Kick Moves 
    [
      // Damage missing from here =======================================================================================

      new Move("Noble Courage", "K", "H", 12, -8, 0, 0, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Lofty Faith", "6K", "H", 16, -10, 4, 4, null),
      new Move("Rising Courage", "3K", "M", 14, -4, 6, 10, null),
      new Move("Vigilant Courage", "2K", "L", 16, -14, -4, -4, null, null, false, false, true),
      new Move("Chivalrous Courage", "1K", "L", 24, -14, 0, "KND", null, null, false, false, true),
      new Move("Valiant Strike", "4K", "M", 22, -10, "KND", "KND", null),

      new Move("Kneeling Swipe", "CK", "L", 16, -14, -4, -4, null, null , false, false, true),
      new Move("Ascending Knee", "WK", "M", 12, -8, 6, 6, null),
      new Move("Vaulting Drive", "JK", "M", 22, -10, 4, 4, null),
      new Move("Penitent Blow", "TK", "H", 14, -8, 2, 2, null),
      new Move("Atoning Swipe", "T2K", "L", 18, -14, -4, -4, null, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Scarlet Sleeve", "A+B", "M", 38, 4, "KND", "KND", null, null, false, true, false, false, false, false, false, true),
      new Move("Scarlet Sleeve ~ Avenger", "A+B6", "M", 38, 9, "KND", "KND", null, null, true, true, false, false, false, false, false, true),

      new Move("Broceliande's Splendor", "6A+B", "MM", 24, -14, "KND", "STN", null, null, false, true),
      new Move("Broceliande's Splendor ~ Avenger", "6A+B6", "MM", 24, -6, "KND", "STN", null, null, true, true),

      new Move("Dolorous Stroke", "2A+B", "L", 46, 4, "KND", "KND", null, null, false, false, true, false, false, false, false, true),
      new Move("War of Benwick", "4A+B", "M", 34, -8, "LNC", "LNC", null),

      new Move("Sir Gareth's Zest", "8A+B", "MM", 24, -24, "LNC", "LNC", null),
      new Move("Sir Gareth's Zest ~ Avenger", "8A+B6", "MM", 24, -22, "LNC", "LNC", null, null, true),

      new Move("Battle of Bedegraine ~ Avenger", "6B+K", "MM", 26, -8, "LNC", "LNC", null, null, true),
      new Move("Gallatin Eclipse", "2B+K", "M", 60, null, "KND", "KND", null, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Morgan's Deception", "4B+K", "M", 26, -6, 0, 0, null),
      new Move("Daredevil", "8B+K", "M", 36, -6, "KND", "KND", null),
      new Move("Merlin's Counsel", "TB+K", "M", 18, -12, "STN", "STN", null)
    ],
    // 8-Way Run Moves
    [
      new Move("Sir Lancelot's Fervor", "#|^|(A", "H", 18, -8, 0, 0, null),
      new Move("Sir Lancelot's Fervor", "#|^|(AA", "HM", 18, -14, "KND", "KND", null),

      new Move("Bertilak the Headless", "@|*A", "H", 22, -2, "KND", "KND", null, "Can be held"),
      new Move("Morgause's Mischief", "!|$|uA", "H", 34, -4, 4, "STN", null, "GI vs. high, mid verical(exept kicks)", false, true, false, true),

      new Move("Sir Gawain's Charge", "#|^|(B", "M", 22, -10, -2, -2, null),
      new Move("Sir Gawain's Charge", "#|^|(BB", "MM", 22, -10, "KND", "KND", null),

      new Move("Sable Grief", "@|*B", "M", 22, -16, "LNC", "LNC", null, null, false, true),
      new Move("Troubadour's Elegy", "@|*xA", "H", 17, -6, 6, 6, null),
      new Move("King Pellinore's Delight", "!|$|uB", "M", 28, 2, "KND", "KND", null),
      new Move("Intrepid Adventure", "#|^(K", "M", 24, -12, "LNC", "LNC", null),
      new Move("Chivalrous Courage", "@|*K", "L", 24, -14, 0, 0, null, null, false, false, true),
      new Move("Faith's Reprisal", "!|$|uK", "M", 28, -14, "STN", "STN", null, null, false, true),
      new Move("Sir Tristan's Triumph", "@|*|#|^|(A+B", "MM", 22, -16, "KND", "KND", null),

      new Move("Sir Garlon's Wile", "#|^|(B+K", "MM", 18, -14, 0, 0, null),
      new Move("Sir Garlon's Wile ~ Avenger", "#|^|(B+K6", "MM", 18, -5, 9, 9, null, null, true),

      new Move("Sir Percival's Gratitude", "@|*|!|$|uB+K", "MH", 18, -14, "KND", "KND", null),
      new Move("Dauntless Slide", "RK", "L", 18, -5, "KND", "KND", null)
    ],
    // Throws
    [
      new Move("Gamlann's Lament", "A+G", "H", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),
      new Move("Lohengrin's Courage", "4A+G", "H", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),
      new Move("Nimue's Embrace", "ZA+G", "H", 18, null, "KND", "KND", null, null, false, false, false, false, false, false, true),
      new Move("Sire Balin's Sword", "XA+G", "H", 18, null, "KND", "KND", null, null, false, false, false, false, false, false, true),
      new Move("Astolat's Echo", "VA+G", "H", 18, null, "KND", "KND", null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true)
    ],
    // ************ Stances *************
    // Avenger
    [
      new Move("Avenger", "B+K", null, null, null, null, null, null, null, true),
      new Move("Endless Quest", "[A", "LLLL", 24, -20, "KND", "KND", null, "Can be held", false, true),

      new Move("Nameless Blade", "[B", "MM", 12, -12, 3, 3, null, "Can be delayed"),
      new Move("Nameless Blade", "[BB", "MMMM", 12, -6, 6, 6, null, "Can be delayed"),

      new Move("Corbenic's Veil", "[K", "L", 16, -11, 3, 3, null),
      new Move("Arondight's Roar", "[A+B", "M", 20, -16, "KND", "KND", null, "Shifts to attack throw upon hit"),
      new Move("Sir Galahad's Bravery", "[B+K", "MM", 28, 8, "KND", "KND", null, null, false, true, false, false, false, false, false, true),
      new Move("Avenger ~ Side Step", "[2|8", null, null, null, null, null, null, null, true)
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
      new Move("Soul Smasher", "D2A+Bv", "M", null, null, null, null, null, "Shifts to attack throw upon close-range hit", false, false, false, false, false, false, true),
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
      new Move("Existence", "B+G", "M", 46, -8, null, null, 35, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Existence", "b+g", "M", 66, null, null, null, 45, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Darkside", "B+G6", "M", 52, -7, 4, 4, 20, null, false, false, false, false, true),
      new Move("Screeching Spirit", "rA", "H", null, null, null, null, 15, null, false, true),
      new Move("Screeching Spirit ~ Serpent's Embrace", "ra", "H", null, null, null, null, 15, null, true, true),
      new Move("Fires of Insanity", "rBBBBBBBB", "MMMMMMMM", null, null, null, null, null, "DMG 10 - 48 depending on hits", false, true, false, false, false, false, false, true),
      new Move("Queen of Blades", "rK", "M", null, null, null, null, 16, null, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Guilty Throne", "A+B+K", "MMMMMMMM", 34, -20, "KND", "KND", 80, "GI vs. high, mid & low", false, false, false, true, false, false, true, false, false, false, true),
      new Move("Guilty Throne", "[A+B+K", "MMMMMMMM", 34, -20, "KND", "KND", 80, null, false, false, false, false, false, false, true, false, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", 6, 3, 8, 8, 0, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Deadly Cataclysm", "S6AA", "HMH", 16, 4, "KND", "KND", 38, null, false, false, false, false, false, true, false, true),

      new Move("Deadly Firestorm", "S4A", "HH", 20, 8, 10, 10, 23, null, false, false, false, false, false, true, false, true),
      new Move("Deadly Firestorm ~ Serpent's Embrace", "S4a", "HH", 20, 2, 8, 8, 23, null, true, false, false, false, false, true, false, true),

      new Move("Death Glance", "S6BB", "MM", 18, 1, "KND", "KND", 68, "Shifts to attack throw upon hit", false, false, false, false, false, true, true, true),
      new Move("Unseen Connection", "S^KK", "MM", 16, -2, 6, 6, 47, null, false, false, false, false, false, true),
      new Move("Unseen Connection ~ Serpent's Embrace", "S^Kk", "MM", 16, 0, 8, 8, 47, null, true, false, false, false, false, true),
      new Move("Decaying Land", "S@|*A+BB", "MMMMMM", 26, 0, "KND", "KND", 78, "GI vs. mid horizontal", false, false, false, true, false, true),
      new Move("Deadly Screaming Mandrake", "S[AA", "HMH", 18, 4, "KND", "KND", 36, null, false, false, false, false, false, true, false, true),
      new Move("Mourning Spirit", "S[6AA", "HH", 20, null, "KND", "KND", 64, "Shifts to follow-up attack upon hit", false, false, false, false, false, true, false, false, true)
    ],
    // Horizontal Moves
    [
      new Move("Biting Raven", "A", "H", 12, -8, -2, 2, 8, null, false, true, false, false, false, false, false, false, false, true),
      new Move("Biting Raven", "AA", "HH", 12, -12, 2, 2, 26, null, false, true, false, false, false, false, false, false, false, true),
      new Move("Governance", "AK", "HM", 12, -8, 6, 6, 28),

      new Move("Cataclysm", "6A", "HM", 16, -16, -12, -2, 12),
      new Move("Cataclysm", "6AA", "HMH", 16, -4, 6, 6, 44),
      new Move("Dashing Wind", "6AK", "HH", 16, 2, 6, 6, 30),

      new Move("Tempting Tezhas", "6a", "H", 20, -16, -4, "KND", 18, null, false, false, false, false, false, false, true),
      new Move("Tempting Tezhas(counter)", "H6a", "H", 20, -16, "KND", "KND", 41, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      
      new Move("Raven Gash", "3A", "M", 18, -6, 12, 12, 18),
      new Move("Dancing Tezhas", "3a", "M", 22, -12, 0, 0, 16),

      new Move("Ancient Worshipper", "2A", "S", 16, -10, -2, -2, 10, null, false, false, true),

      new Move("Ancient Wheel", "1A", "L", 26, -18, -4, -4, 12, null, false, false, true),
      new Move("Ancient Wheel", "1AA", "LL", 26, -14, -2, -2, 27, null, false, false, true),

      new Move("Dancing Insanity", "4A", "HH", 20, 0, 8, 8, 20),
      new Move("Dancing Insanity ~ Serpent's Embrace", "4a", "HH", 20, -4, 4, 4, 20, null, true),

      new Move("Serpent's Venom", "214A", "H", 54, null, "KND", "KND", 100, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Ancient Worshipper", "CA", "S", 16, -10, -2, -2, 10, null, false, false, true),
      new Move("Menace Slice", "WA", "H", 20, -4, 8, "KND", 30),
      new Move("Deceitful Raven", "Wa", "H", 22, -16, -2, -2, 14),
      new Move("Rising Raven", "JA", "M", 28, -12, -4, -4, 22, "Damage differs slightly according to jump direction"),
      new Move("Scars of Memory", "TA", "H", 12, -8, "KND", "KND", 19),

      new Move("Screams of Paranoia", "T2A", "L", 22, -14, -6, 4, 8, "GI vs. low", false, false, false, true),
      new Move("Screams of Paranoia", "T2AB", "LM", 22, -14, "KND", "KND", 32, "GI vs. low", false, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Ode to Undine", "B", "M", 16, -10, -4, -4, 12, "Shifts to clash upon hit", false, false, false, false, true, false, false, false, false, true),
      new Move("Poisoned Destiny", "b", "MM", 16, -20, -10, -10, 30),
      new Move("Ode to Undine", "BB", "MM", 16, -10, -4, -4, 28, "Shifts to clash upon hit", false, false, false, false, true, false, false, false, false, true),
      new Move("Ode to Undine", "BBB", "MMM", 16, -8, null, null, 28, "Shifts to clash upon hit", false, false, false, false, true, false, false, false, false, true),
      new Move("Ode to Undine", "BBb", "MMM", 16, null, null, null, 35, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      
      new Move("Raven's Egg", "xA", "H", 18, -8, "KND", "KND", 30),
      new Move("Eclipse Raven", "xa", "HM", 22, -10, 6, 6, 24),

      new Move("Darkside", "x6", "M", 20, -8, 4, 4, 20),

      new Move("Warning Mood", "6B", "M", 18, -8, 0, 0, 14),
      new Move("Warning Mood", "6BA", "MH", 18, -4, 0, 0, 40),
      new Move("Warning Mood ~ Serpent's Embrace", "6Ba", "MH", 18, 4, 8, 8, 40, null, true),
      new Move("Warning Immortal", "6BB", "MM", 18, -8, 6, 6, 34),

      new Move("Ivy Lick", "6x8", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Ivy Lick", "M6x8", "H", 12, null, "KND", "KND", 41, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Silhouette", "6x8K", "HL", 12, -14, 2, 2, 36),

      new Move("Ivy Lash", "6b", "M", 24, -16, -2, -2, 14),
      new Move("Biting Ivy Inner", "6b2|8", "MM", 24, -20, -6, -6, 26),

      new Move("Aqua Clipper", "3B", "M", 20, -16, "KND", "KND", 22, null, false, true),
      new Move("Dominance", "2B", "M", 20, -6, 2, 2, 23),
      new Move("Poison Leaf", "1B", "L", 28, -6, 2, 2, 18),
      new Move("Poison Ivy", "1b", "Lmm", 28, -2, "KND", "KND", 30),

      new Move("Rushing Raven", "4B", "H", 22, -14, -6, -6, 18),
      new Move("Dashing Wings", "4x8", "HHHHHmmmM", 20, 2, "KND", "KND", 45),

      new Move("Venom Lash", "214B", "MM", 20, -16, -10, -10, 31),
      new Move("Venom Lash ~ Serpent's Embrace", "214b", "MM", 20, -14, 0, 0, 31, null, true),

      new Move("Aqua Worshipper", "CB", "M", 18, -10, 0, 0, 16, null, false, false, true),
      new Move("Ivy Masquerade", "C3B", "L", 18, -20, 6, "KND", 18, null, false, true, true),
      new Move("Masquerade ~ Spiral Lust", "C3b", "L", null, null, null, null, 18, null, true, true),
      new Move("Pride", "C1B", "M", 18, -12, "KND", "KND", 26),

      new Move("Cagemaster", "WB", "MH", 20, -14, "KND", "KND", 16, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Cagemaster", "WBB", "MHH", 20, -12, -6, -6, 27, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      
      new Move("Akasha's Cage", "JB", "MM", 42, -10, "KND", "KND", 28, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Akasha's Cage", "JBB", "MMH", 42, -16, "KND", "KND", 44, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Akasha's Cage", "JBBB", "MMHH", 42, -12, -6, -6, 55, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      
      new Move("Reverse Immortal", "TB", "M", 18, -6, 4, 4, 16),
      new Move("Deep Immortal", "T2B", "M", 18, -8, 2, 2, 18, null, false, false, true)
    ],
    // Kick Moves 
    [
      new Move("Night Swallow", "K", "H", 12, -8, 0, 0, 12, null, false, false, false, false, false, false, false, false, false, true),

      new Move("Starving Spirit", "6K", "M", 16, 12, -8, 2, 2, "Becomes a middle attack when at distance/Returns to crouching on G cancel", false, false, false, false, false, false, false, false, false, true),
      new Move("Starving Spirit", "6KB", "MH", 16, 4, "KND", "KND", 38, "Becomes a middle attack when at distance/Returns to crouching on G cancel", false, false, false, false, false, false, false, false, false, true),
      new Move("Blade Sharpener", "6Kb", "MH", 16, null, "KND", "KND", 42, "Becomes a middle attack when at distance/Returns to crouching on G cancel", false, false, false, false, false, false, false, false, true, true),
      
      new Move("Rage Kick", "3K", "M", 14, -6, 4, 4, 16),
      new Move("Rage Kick", "3k", "M", 34, 2, "KND", "KND", 27, null, false, true),

      new Move("Charmer Silhouette", "2K", "L", 16, -14, -4, -4, 12, null, false, false, true),
      new Move("Queen's Pleasure", "1K", "L", 16, -16, -2, "KND", 10, null, false, false, false, false, false, false, true),
      new Move("Ivy Sweep", "D1K", "LL", 16, null, "KND", "KND", 25, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Evil Sparrow", "4K", "M", 18, -6, 8, 8, 22),

      new Move("Charmer Silhouette", "CK", "L", 16, -14, -4, -4, 12, null, false, false, true),
      new Move("Nail Cross", "C3K", "M", 18, -12, -4, -4, 14, null, false, false, true),
      new Move("Rising Cross", "WK", "M", 12, -8, 4, 4, 14),
      new Move("Rising Mind Shatter", "JK", "M", 26, -6, "KND", "KND", 22),
      new Move("Reverse Night Swallow", "TK", "H", 14, -6, 4, 4, 14),
      new Move("Deep Silhouette", "T2K", "L", 18, -14, -4, -4, 18, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Revelation", "A+B", "M", 44, 10, "KND", "KND", 30, null, false, true, false, false, false, false, false, true),

      new Move("God Whisper", "6A+B", "M", 22, -16, 0, 0, 12),
      new Move("God Whisper", "6A+BA", "MSM", 22, -6, 4, 4, 33),

      new Move("Suppressed Exile ~ Spiral Lust", "3A+B", null, null, null, null, null, null, null, true),

      new Move("Metal Fencer", "2A+B", "M", 34, -18, "KND", "KND", 22),
      new Move("Metal Fencer", "2A+BB", "MM", 34, -22, "KND", "KND", 40),
      new Move("Razor's Bite", "1A+B", "L", 30, -12, "KND", "KND", 20),

      new Move("Spiral Punishment", "4A+B", "MMM", 28, -6, 4, 4, 18, "GI vs. mid horizontal(except kicks)", false, false, false, true),
      new Move("Spiral Punishment", "4A+BB", "MMMMMMM", 28, -24, "KND", "KND", 50, "GI vs. mid horizontal(except kicks)", false, false, false, true),
      
      new Move("Creeping Ivy", "8A+B", "M", 22, -34, "KND", "KND", 20),
      new Move("Creeping Ivy", "8A+BB", "MM", 22, -24, "KND", "KND", 35),
      new Move("Hailstorm", "8A+Bb", "MMMM", 22, -20, "KND", "KND", 47),

      new Move("Banshee", "B+K", "M", 26, -6, "KND", "KND", 24, "Returns to facing away", false, true),

      new Move("Embrace of Guilt", "6B+K", "M", 28, -4, 4, 4, 37, "Shifts to attack throw upon close-range hit", false, false, false, false, false, false, true),
      new Move("Embrace of Guilt", "6b+k", "M", 28, -4, 10, 10, 37, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      
      new Move("Fear's Void", "2|3B+K", "M", 30, -8, "KND", "KND", 30, "Returns to crouching on G cancel", false, true, false, false, false, false, false, false, false, true),
      new Move("Heel Explosion", "4B+K", "M", 74, null, "KND", "KND", 80, "Returns to crouching on G cancel", false, false, false, false, false, false, false, false, true, true),
      new Move("Stinging Souls", "8|9B+K", "MM", 28, 4, "KND", "KND", 26, null, false, false, false, false, false, false, false, true),
      new Move("Fear's Void", "C2|3B+K", "M", 30, -8, "KND", "KND", 30, "Returns to crouching on G cancel", false, true, false, false, false, false, false, false, false, true),
      new Move("Asylum", "WB+K", "MM", 20, -18, -10, -10, 42, "GI vs. high, mid & low", false, false, false, true),
      new Move("Viper Tail", "TB+K", "m", 26, -4, "KND", "KND", 24, "Returns to facing away")
    ],
    // 8-Way Run Moves
    [
      new Move("Damned Mark", "#|^|(A", "M", 20, -8, 2, 2, 24),
      new Move("Sparking Blade", "#|^|(a", "MM", 20, -12, -4, -4, 44, null, false, true),
      new Move("Wolf Lash", "*A", "H", 26, -12, 0, 0, 18, null, false, true),
      new Move("Wolf Sign", "@A", "H", null, null, null, null, null, null, false, true),

      new Move("Cursed Soul", "!|$|uA", "M", 24, -8, 2, 2, 24),
      new Move("Insanity Light", "!|$|ua", "M", 28, -24, 8, 8, 34, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Insanity Feast", "!|$|ua6", "M", 28, -24, "KND", "KND", 44, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),

      new Move("Elder Gnome", "#|^|(B", "M", 16, -12, 4, "KND", 18),
      new Move("Elder Gnome", "#|^|(BB", "MM", 16, -12, 14, 14, 41),

      new Move("Nocturnal Sylph", "@|*B", "M", 16, -12, 2, 2, 20, "Returns to facing away"),
      new Move("Nocturnal Sylph", "@|*BA", "MH", 16, 4, "KND", "KND", 40, "Returns to facing away"),
      new Move("Drowning Madness ~ Serpent's Embrace", "@|*b", "M", 16, -4, "KND", "KND", 23, null, true),

      new Move("Cursed Heavens", "!|$|uB", "M", 18, -12, "KND", "KND", 22, null, false, true),

      new Move("Wondergale", "^K", "M", 16, -4, 4, 4, 18),
      new Move("Wondergale ~ Serpent's Embrace", "^k", "M", 16, -6, 2, 2, 18, null, true),

      new Move("Mind Shatter", "#|(K", "H", 16, -6, "KND", "KND", 24),
      new Move("Royal Huntress", "@|*K", "L", 24, -18, "KND", "KND", 18, null, false, false, true),
      new Move("Diving Raven", "!|$|uK", "M", 28, -18, "KND", "KND", 26, "Returns to downed position"),

      new Move("Freeze Gaze", "#|^|(A+B", "MM", 18, -8, 4, 4, 35),
      new Move("Arid Land", "@|*A+B", "MM", 26, -10, "KND", "KND", 40, "GI vs. mid horizontal", false, false, false, true),
      
      new Move("Crucifixion", "!|$|uA+B", "M", null, -6, "KND", "KND", 42),
      new Move("Crucifixion", "!|$|ua+b", "M", null, null, "KND", "KND", 70, null, false, false, false, false, false, false, false, false, true),

      new Move("Raging Gnome", "#|^|(B+K", "MMM", 34, -4, "KND", "KND", 37),
      new Move("Exile ~ Serpent's Embrace", "!|$|uB+K", "M", 40, null, null, null, 20, null, true),
      new Move("Sliding", "RK", "L", 20, -22, "KND", "KND", 26)
    ],
    // Throws
    [
      new Move("Dominion Throw", "A+G", "H", 18, null, "KND", "KND", 55, "Breakable", false, false, false, false, false, false, true),
      new Move("Primal Dominance", "4A+G", "H", 18, null, "KND", "KND", 50, "Breakable", false, false, false, false, false, false, true),
      new Move("Heartless Guide", "ZA+G", "H", 18, null, "KND", "KND", 55, null, false, false, false, false, false, false, true),
      new Move("Sunset Cradle", "XA+G", "H", 18, null, "KND", "KND", null, null, false, false, false, false, false, false, true),
      new Move("Sweet Dominance", "VA+G", "H", 18, null, "KND", "KND", 70, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      
      new Move("Vile Condemnation", "2|3A+G", "L", 28, -14, "KND", "KND", 45, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Vile Condemnation", "C2|3A+G", "L", 28, -14, "KND", "KND", 45, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      
      new Move("Summon Suffering", "376231A+G", "H", 20, null, "KND", "KND", 60, "Not breakable", false, false, false, false, false, false, true),
      new Move("Summon Suffering(fast)", "376231A+GF", "H", 20, null, "KND", "KND", 65, "Not breakable", false, false, false, false, false, false, true),
      
      new Move("Calamity Symphony", "3746916A+G", "H", 16, null, "KND", "KND", 80, "Brakable", false, false, false, false, false, false, true),
      new Move("Calamity Symphony(fast)", "3746916A+GF", "H", 16, null, "KND", "KND", 90, "Brakable", false, false, false, false, false, false, true)
    ],
    // ************ Stances *************
    // Serpent's Embrace
    [
      new Move("Serpent's Embrace", "4a", null, null, null, null, null, null, null, true),

      new Move("Violent Spirits", "[AA", "HMH", 18, -4, 6, 6, 40),
      new Move("Wind Embrace", "[6AA", "HH", 20, 8, "KND", "KND", 58, "Shifts to follow-up attack upon hit"),
      new Move("Lamenting Tail", "[4A", "L", 24, -26, "KND", "KND", 51, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      
      new Move("Mistress' Justice", "[BBB", "MMM", 22, -16, "KND", "KND", 36),
      new Move("Howling Spirits", "[BBBBBj", "MMMMM", 22, 12, "KND", "KND", 68, null, false, false, false, false, false, false, false, true),
      
      new Move("Ivy Sting", "[6B", "M", 14, -12, "KND", "KND", 24, "Shifts to follow-up attack upon hit"),
      new Move("Landing Embrace", "[4B", "M", 38, 12, "KND", "KND", 33, null, false, true, false, false, false, false, false, true), // Might be completely wrong
      
      new Move("Charging Serpent", "[K", "M", 16, -8, 2, "KND", 18),
      new Move("Charging Serpent ~ Serpent's Embrace", "[k", "M", 16, 0, 8, "KND", 18, null, true),
      new Move("Stinging Souls", "[B+K|6B+K|4B+K", "MM", 49, 4, "KND", "KND", 41, null, false, false, false, false, false, false, false, true),
      
      new Move("Redemption", "[8B+K", "H", 12, -20, -10, -10, 20, null, false, false, false, false, false, false, true),
      new Move("Redemption", "M[8B+K", "H", 12, null, "KND", "KND", 51, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      
      new Move("Blind Obsession", "[8B+KK", "HL", 12, -14, 2, 2, 36),
      new Move("Released Souls", "[A+B", "M", 74, null, "KND", "KND", 60, null, false, false, false, false, false, false, false, false, true),
      new Move("Guilty Throne", "[A+B+K", "MMMMMMMM", 34, -20, "KND", "KND", 80, null, false, false, false, false, false, false, true, false, false, false, true),
    ],
    // Spiral Lust
    [
      new Move("Spiral Lust", "3A+B", "M", null, null, "KND", "KND", 56, null, true, false, false, false, false, false, false, false, true),
      new Move("Exile", "]B", "M", null, -12, "KND", "KND", 30),
      new Move("Exile(delay)", "]B", "M", null, 2, "KND", "KND", 30),
      new Move("Spiral Lust ~ Serpent's Embrace", "]G", null, null, null, null, null, null, null, true)
    ]
  ]

  Kilik = [
    // Reversal Edge Attacks
    [
      new Move("Third Eye", "B+G", "M", 16, -4, null, null, 35, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Third Eye", "b+g", "M", null, null, null, null, 45, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Nine Ring Bo", "rA", "H", null, null, null, null, null, null, false, true),
      new Move("Crystal Fang", "rB", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Corrupted Crystal Fang", "SrB", "MMMM", null, null, null, null, null, null, false, true, false, false, false, true, false, true),
      new Move("Serpent Kick", "rK", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Ling-Shen Su Phoenix Loop", "A+B+K", "M", 16, -8, null, null, 79, null, false, false, false, false, false, false, true, false, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", null, 0, 8, 8, 0, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Forbidden Moonset", "SA+B+K", "H", 11, null, null, null, 107, null, false, false, false, false, false, true, true, false, true),

      new Move("Roc Wing", "S3A", "M", 24, -8, 2, 2, 19, null, false, false, false, false, false, true),
      new Move("Roc Wing", "S3AB", "MM", 24, -16, "KND", "KND", 52, null, false, false, false, false, false, true),

      new Move("Headsman's Ax", "S4B", "M", 26, -6, 4, 4, 13, null, false, false, false, false, false, true),
      new Move("Headsman's Ax", "S4BB", "MM", 26, -6, 4, 4, 26, null, false, false, false, false, false, true),
      new Move("Headsman's Ax", "S4BBB", "MMM", 26, -6, 4, 4, 39, null, false, false, false, false, false, true),
      new Move("Headsman's Ax", "S4BBBK", "MMMM", 26, -18, "KND", "KND", 61, null, false, false, false, false, false, true),

      new Move("Withered Lotus", "S#|^|(A", "M", 28, -8, 10, 10, 22, null, false, false, false, false, false, true),
      new Move("Withered Lotus", "S#|^|(AA", "MH", 28, -10, 0, 0, 33, null, false, false, false, false, false, true),
      new Move("Withered Lotus", "S#|^|(AAA", "MHH", 28, -8, "KND", "KND", 55, null, false, false, false, false, false, true),

      new Move("Black Tortoise Embers", "S@|*A", "M", 22, -8, 0, 6, 18, null, false, false, false, false, false, true),
      new Move("Black Tortoise Embers", "S@|*AA", "ML", 22, -20, "KND", "KND", 35, null, false, false, false, false, false, true),
      new Move("Black Tortoise Embers", "S@|*AAA", "MLL", 22, -20, "KND", "KND", 64, null, false, false, false, false, false, true),

      new Move("Heavy Bo", "S#|^|(B", "M", 16, -10, "KND", "KND", 49, "Shifts to attack throw upon close-range hit", false, false, false, false, false, true, true),
      new Move("Vermillion Bird Descends", "S#|^|(A+B", "MHM", 30, 8, "KND", "KND", 50, null, false, false, false, false, false, true, false, true),
      new Move("White Tiger Mark", "S#|^|(B+K", "MMM", 20, 0, 12, 12, 43, null, false, false, false, false, false, true),
      new Move("Festival of the Damned", "SA+G", "H", 18, null, null, null, 40, "Breakable", false, false, false, false, false, true, true),
      new Move("Festival of the Dead", "S4A+G", "H", 18, null, null, null, 65, "Breakable", false, false, false, false, false, true, true),
    ],
    // Horizontal Moves
    [
      new Move("Raging Phoenix Combo", "A", "H", 12, -4, 0, 0, 10, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Raging Phoenix Combo", "AA", "HH", 12, -6, -2, -2, 20, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Raging Phoenix Combo", "AAA", "HHH", 12, -8, "KND", "KND", 40, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Cutting Wind", "AB", "HH", 12, -2, "KND", "KND", 30),

      new Move("Crushing Bo", "6A", "HH", 16, -6, 4, 4, 16),
      new Move("Crushing Bo", "6AA", "HHH", 16, 0, "KND", "KND", 40),
      new Move("Gale Force", "6AB", "HHM", 16, -16, "LNC", "LNC", 38),

      new Move("Mid Sweep", "3A", "M", 24, -8, 2, 2, 18),
      new Move("Bo Slice", "2A", "S", 12, -6, 6, 6, 12, null, false, false, true),
      new Move("Blinding Fan", "2zB", "SMMM", 12, -16, -6, -6, 53),

      new Move("Trick Bo", "1A", "L", 24, -16, "KND", "KND", 37, "Breakable/Shifts to attack throw upon close-range hit", null, false, false, false, false, false, true),
      new Move("Dirty Bo", "1z", "L", 24, -16, "KND", "KND", 46, "Breakable/Shifts to attack throw upon close-range hit", null, false, false, false, false, false, true),

      new Move("Inner Peace", "4A", "L", 22, -12, -4, -4, 14, null, false, true, true),

      new Move("Lower Bo Slice", "CA", "S", 12, -6, 6, 6, 12, null, false, false, true),
      new Move("Blinding Fan", "CzB", "SMMM", 12, -16, -6, -6, 54),
      new Move("Ling Sheng Slash", "WA", "M", 18, -10, 4, 4, 24),
      new Move("Scattering Bo", "JA", "M", 28, -8, 2, 2, 25),
      new Move("Reverse Bo Tap", "TA", "H", 20, -2, 8, 8, 16),
      new Move("Reverse Lower Bo Slice", "T2A", "S", 20, -6, 4, 4, 19, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Heatwave", "B", "M", 14, -8, 2, 2, 16, null, false, false, true, false, false, false, false, true),
      new Move("Heatwave", "BB", "MM", 14, -6, 4, 4, 32, null, false, false, true, false, false, false, false, true),
      new Move("Heatwave", "BBB", "MMM", 14, 2, "KND", "KND", 62, null, false, false, true, false, false, false, false, true),

      new Move("Fang Thrust", "x6", "M", 20, -14, 0, 0, 16, null, false, true),
      new Move("Phoenix Feint", "x4", "M", 26, -14, 6, 14, 23),

      new Move("Kite's Prey", "6BA", "MH", 16, -4, "KND", "KND", 46, "Can be delayed", false, false, true),
      new Move("Twin Bo Upper", "6BB", "MM", 16, -12, "KND", "KND", 40, "Can be delayed", false, true),

      new Move("Dragon Tree Bo", "3B", "M", 19, -11, "LNC", "LNC", 26, null, false, true),

      new Move("Rushing Waterfall", "2B", "M", 22, -8, 2, 2, 23),
      new Move("Rushing Waterfall", "2BB", "MM", 22, -2, 6, 6, 47),

      new Move("Phoenix Claw", "1B", "L", 18, -16, 0, 0, 18),

      new Move("Weaver", "4BB", "HM", 14, -4, null, null, 45, "Shifts to clash upon hit", false, true, false, false, true),
      new Move("Weaver", "4Bb", "HM", 14, null, null, null, 57, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),

      new Move("Rushing Waterfall", "CB", "M", 22, -4, 4, 4, 23),
      new Move("Rushing Waterfall", "CBB", "MM", 22, -2, 6, 6, 47),
      new Move("Stream Thrust", "C3B", "M", 16, -10, 2, 2, 21),
      new Move("River Thrust", "C1B", "L", 28, -8, -2, -2, 16, null, false, false, true),

      new Move("Reverse Bo Thrust", "WB", "M", 18, -12, "LNC", "LNC", 20),
      new Move("Great Waterfall", "JB", "M", 38, -6, "KND", "KND", 33),

      new Move("Reverse Waterfall", "TB", "M", 24, -6, 4, 4, 20),
      new Move("Reverse Waterfall", "T2B", "M", 24, -8, 2, 2, 22, null, false, false, true)
    ],
    // Kick Moves 
    [
      new Move("Sheng Front Kick", "K", "H", 12, -8, 0, 0, 12, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Sheng Illusion Kick", "cB", "HL", 22, -12, 2, 2, 30), // Different if high guarded ?
      new Move("Yin Rising", "6K", "MM", 24, -8, "STN", "STN", 24),
      new Move("Sheng Side Kick", "3K", "M", 14, -10, -2, -2, 14),
      new Move("Sheng Su Low Kick", "2K", "L", 16, -14, -4, -4, 12, null, false, false, true),
      new Move("Sheng Su Thrust", "1KB", "LM", 22, -16, 0, "KND", 46),

      new Move("Sheng Lung Kick Combo", "4K", "M", 18, -12, 0, "STN", 14),
      new Move("Sheng Lung Kick Combo", "4KB", "MH", 18, -10, "KND", "KND", 37),
      new Move("Master Kicks", "4KK", "MM", 18, 0, 12, 12, 40),

      new Move("Sheng Su Low Kick", "CK", "L", 16, -14, -4, -4, 12, null, false, false, true),
      new Move("Sunrise Kick", "WK", "MH", 12, -12, "KND", "KND", 21),
      new Move("Phoenix Splits", "JK", "H", 20, -4, 4, 4, 18),
      new Move("Incense Burner", "TK", "M", 13, -15, "LNC", "LNC", 28, "GI vs. high, mid(except kicks, thrusting attacks)", false, false, false, true),
      new Move("Reverse Sheng Su Low Kick", "T2K", "L", 18, -14, -4, -4, 17, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Phoenix Rage Thrust", "A+B", "M", 34, 2, "KND", "KND", 50, "Dodges high, mid vertical", false, true, false, false, false, false, false, true),
      new Move("Phoenix Rage Thrust", "a+b", "M", 70, null, "KND", "KND", 50, "Dodges high, mid vertical", false, true, false, false, false, false, false, false, true),
      new Move("Star Stealer", "A+B|a+bI", null, null, null, null, null, null),
      new Move("Bo Smack Down", "6A+B", "HHHHHH", 20, -12, "LNC", "LNC", 48),
      new Move("Wave Divide", "2A+B", "L", 32, -16, "KND", "KND", 33),
      new Move("Phoenix Plume", "4A+B", "LL", 44, -2, "KND", "KND", 40),
      new Move("Phoenix Cross", "8A+B", "MM", 20, -6, 4, 4, 40),
      new Move("Absolute Truth", "B+K", "M", 22, -4, 6, "STN", 26),
      new Move("Absolute Truth", "b+k", "M", 44, 6, "STN", "STN", 23, null, false, false, false, false, false, false, false, true),
      new Move("Absolute Truth ~ Momentum", "B+K6", "M", 22, null, null, "STN", 26, "GI vs. horizontal (except kicks)", true, false, false, true),
      new Move("Absolute Truth ~ Monument", "b+k6", "M", 44, null, "STN", "STN", 23, "GI vs. horizontal (except kicks)", true, false, false, true, false, false, false, true),
      new Move("Biting Phoenix", "6B+K", "MMMMM", 24, -12, "STN", "STN", 52),
      new Move("Lower Bo Smackdown", "6x+c2", "LLLL", 26, -16, -6, -6, 40),
      new Move("Playful Phoenix", "2B+K", "L", 24, -14, 0, 0, 24),
      new Move("Playful Phoenix", "2b+k", null, null, null, null, null, null, "Returns to downed position"),

      new Move("Dragon Seal", "4B+K", "MMMM", 26, -14, -2, -2, 46),
      new Move("Dragon Seal", "4B+KB", "MMM", 26, -17, "KND", "KND", 42),
      new Move("Dragon Seal", "4B+KBB", "MMMMMM", 26, -14, "KND", "KND", 65),

      new Move("Asura Clairvoyance", "TB+K", "M", 24, -21, -11, -11, 15, "Time precisely for increased damage"),
      new Move("Asura Clairvoyance", "TB+KB", "MM", 24, -23, -7, -7, 26, "Time precisely for increased damage"),
      new Move("Asura Clairvoyance", "TB+KBK", "MMM", 24, -26, "KND", "KND", 64, "Time precisely for increased damage")
    ],
    // 8-Way Run Moves
    [
      new Move("Pursuing Strike", "#|^|(A", "M", 28, -8, 10, 10, 20),

      new Move("Wind Divide", "@|*A", "M", 22, -8, 0, 6, 16, null, false, false, true),
      new Move("Wind Divide", "@|*AA", "ML", 22, -20, "KND", "KND", 32, null, false, false, true),
      new Move("Mountain Carve", "@|*AB", "MM", 22, -12, "KND", "KND", 45),

      new Move("Dragon Glide Bo", "!|$|uA", "H", 26, -18, 2, 2, 16),
      new Move("Dragon Glide Bo", "!|$|uAA", "HL", 26, -8, "KND", "KND", 36),

      new Move("Heavy Bo", "#|^|(B", "M", 16, -8, 2, "STN", 18),
      new Move("Heavy Bo ~ Monument", "#|^|(B6", "M", 16, null, null, null, 28, "GI vs. horizontal (except kicks)", true, false, false, true),

      new Move("Raven Slaughter", "@|*B", "M", 20, -14, "LNC", "LNC", 28),
      new Move("Raven Slaughter", "@|*b", "M", 40, null, "LNC", null, 30, null, false, true),

      new Move("Phoenix Thrust", "!|$|uB", "M", 26, -18, "KND", "KND", 40),
      new Move("Stream Thrust", "!|$|ux2", "L", 28, -18, -6, -6, 20),

      new Move("Rising Phoenix", "#|^|(K", "MM", 22, -10, 0, 0, 24),
      new Move("Rising Phoenix", "#|^|(KK", "MMM", 22, -12, 0, 0, 40),
      new Move("Rising Phoenix", "#|^|(KKB", "MMMM", 22, -10, "LNC", "LNC", 71),

      new Move("Hawk Claw", "@|*KB", "HL", 22, -4, 6, 6, 26),
      new Move("Hawk Claw", "@|*KB", "HL", 22, -8, 4, 4, 46),
      new Move("Phosphorous Fang", "@|*cB", "L", 20, -4, "KND", "KND", null),

      new Move("Conquering Spirit", "!|$|uK", "M", 30, -4, "KND", "KND", 20),
      new Move("Conquering Spirit", "!|$|uKvBj", "M", 30, null, null, "STN", 50, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),

      new Move("Yin and Yang", "!|$|uA+B", "M", 65, null, "KND", "KND", 55, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Phoenix Lunge", "!|$|uB+K", "L", 34, -12, "KND", "KND", 35),
      new Move("Sliding", "RK", "L", 20, -22, "KND", "KND", 28)
    ],
    // Throws
    [
      new Move("Light Breeze", "A+G", "H", 18, null, "KND", "KND", 50, "Breakable", false, false, false, false, false, false, true),
      new Move("Heaven Dance", "4A+G", "H", 18, null, "KND", "KND", 45, "Breakable", false, false, false, false, false, false, true),
      new Move("Cutting Sadness", "ZA+G", "H", 18, null, "KND", "KND", null, null, false, false, false, false, false, false, true),
      new Move("Summer Gale", "XA+G", "H", 18, null, "KND", "KND", null, null, false, false, false, false, false, false, true),
      new Move("Phoenix Pounce", "VA+G", "H", 18, null, "KND", "KND", null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Festival of the Damned", "SA+G", "H", 18, null, "LNC", "LNC", 40, "Breakable", false, false, false, false, false, true, true),
      new Move("Festival of the Dead", "S4A+G", "H", 18, null, "KND", "KND", 65, "Breakable", false, false, false, false, false, true, true)
    ],
    // ************ Stances *************
    // Monument
    [
      new Move("Monument", "236", null, null, null, null, null, null, "GI vs. horizontal attacks (except kicks)", true, false, false, true),

      new Move("Geyser Kick", "[A", "M", 18, -14, "STN", "STN", 18, null, false, true),
      new Move("Back Parry", "[A4", "M", 18, null, "LNC", "LNC", 18, "GI vs vertical attacks (except kicks)", true, false, false, true),
      new Move("Geyser Kick", "[AB", "ML", 18, -12, -4, -4, 36, null, false, true),
      new Move("Geyser Kick", "[ABK", "MLM", 18, -16, "KND", "KND", 51, null, false, true),

      new Move("Advancing Bo", "[B", "M", 26, -8, "STN", "STN", 37),
      new Move("Scythe", "[K", "HH", 25, 2, "KND", "KND", 35),
      new Move("Heaven Monument", "[A+B", "M", 64, null, "KND", "KND", 75, null, false, false, false, false, false, false, false, false, true),
      new Move("Heaven Monument ~ Move Forward", "[z+x6", "", null, null, null, null, null),
      new Move("Heaven Monument ~ Move Forward", "[z+x^", "", null, null, null, null, null, "Against the wall", true),
      new Move("Heaven Monument ~ Move Backward", "[z+x4", "", null, null, null, null, null),
      new Move("Heaven Monument ~ Move Backward", "[z+x$", "", null, null, null, null, null, "Against the wall", true),

      new Move("Heaven Momentum Fall", "[z+xK", "L", 90, -2, "KND", "KND", 30),

      new Move("Asura Dance", "[B+K", "M", 26, -24, -4, -4, 15, "Time precisely for increased damage"),
      new Move("Asura Dance", "[B+KB", "MM", 26, -20, -4, -4, 25, "Time precisely for increased damage"),
      new Move("Asura Dance", "[B+KBK", "MMM", 26, -20, "KND", "KND", 61, "Time precisely for increased damage"),

      new Move("Left Pulse", "[8", null, null, null, null, null, null),
      new Move("Right Pulse", "[2", null, null, null, null, null, null)
    ],
    // Back Parry
    [
      new Move("Back Parry", "214", null, null, null, null, null, null, "GI vs. vertical (except kicks)", true, false, false, true),
      new Move("Parry Sweeper", "]A", "L", 26, -13, 1, 1, 22, null, false, true),
      new Move("Parry Bolt", "]B", "M", 34, 12, "STN", "STN", 37, null, false, false, false, false, false, false, false, true),
      new Move("Parry Kick", "]K", "H", 22, 2, "STN", "STN", 24)
    ],
    // While Down
    [
      new Move("Heaven Monument", "{A+B", "M", 66, null, "KND", "KND", 75, null, false, false, false, false, false, false, false, false, true),
      new Move("Heaven Monument ~ Move Forward", "{z+x6", "", null, null, null, null, null),
      new Move("Heaven Monument ~ Move Forward", "{z+x^", "", null, null, null, null, null, "Against the wall", true),
      new Move("Heaven Monument ~ Move Backward", "{z+x4", "", null, null, null, null, null),
      new Move("Heaven Monument ~ Move Backward", "{z+x$", "", null, null, null, null, null, "Against the wall", true),
      new Move("Heaven Momentum Fall", "{z+xK", "L", 92, -2, "KND", "KND", 30),
      new Move("Rising Flare", "{2A+B", "L", 38, -30, "KND", "KND", 30)
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
      new Move("Dragon's Beard ~ Left Inner", "}AA", "MH", null, null, null, null, null, null, true, false, false, false, false, false, false, true),
      new Move("Dragon's Beard ~ Left Outer", "}Aa", "MH", null, null, null, null, null, null, true, false, false, false, false, false, false, true),
      new Move("Dragon's Cross", "}AB", "MM", null, null, null, null, null),
      new Move("Stampede Wave ~ Left Inner", "}B", "M", null, null, null, null, null, null, true, false, false, false, false, false, false, true),
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
      new Move("Neutral Guard (Alkaid)", "♥B+K", null, null, null, null, null, null, "While in special stance/GI vs. high, mid vertical", true, false, false, true),
      new Move("Shin Breaker", "☻A", "L", null, null, null, null, null, null, false, true),
      new Move("Transforming Serpent ~ Right Cross", "☻BB", "MM", null, null, null, null, null, null, true),
      new Move("Transforming Serpent ~ Left Outer", "☻Bb", "MM", null, null, null, null, null, null, true),
      new Move("Transforming Serpent ~ Left Outer", "☻B", "M", null, null, null, null, null, null, true),
      new Move("Guillotine Kick", "☻KK", "LM", null, null, null, null, null),
      new Move("Raging Dragon Zodiac: Reprisal", "☻A+B+K", "M", null, null, null, null, null, "Return to right outer with A+B+K (hold)", false, false, false, false, false, false, true, true, false, false, true),
      new Move("Seven Stars Fury ~ Right Outer", "♥B+KBBBA", "MMMMMMMMM", null, null, null, null, null, "Time precisely for increased damage", true, true),
      new Move("Pure Seven", "♥6", "", null, null, null, null, null, "While in a special stance/GI vs. high, mid horizontal", true, false, false, true)
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
      new Move("Thunderbolt Blade", "A+B+K", "M", 12, -24, "LNC", "LNC", 80, null, false, false, false, false, false, false, true, false, false, false, true),
      new Move("Soul Charge", "4A+B+K", "m", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, false, true),
     
      new Move("Tear Step", "SxA", "M", 23, -20, 10, "KND", 32, "Shifts to attack throw upon hit", false, false, false, false, false, true, true),
      
      new Move("Nirvana Cannon", "S3B", "M", 18, -14, "LNC", "LNC", 26, "2nd hit can be delayed", false, true, false, false, false, true, false, true),
      new Move("Nirvana Cannon", "S3BB", "MM", 18, 1, "LNC", "LNC", 46, "2nd hit can be delayed", false, true, false, false, false, true, false, true),
      
      new Move("Roaring Top", "ScB", "M", 19, -36, -30, -30, 20, null, false, false, false, false, false, true, false, true),
      new Move("Roaring Top", "ScB", "MM", 19, 4, "KND", "KND", 46, null, false, false, false, false, false, true, false, true),

      new Move("Harvest Dance", "S1K", "L", 18, -26, "LNC", "LNC", 20, null, false, false, false, false, false, true),
      new Move("Harvest Dance", "S1KB", "LM", 18, -26, -16, -16, 48, null, false, false, false, false, false, true),
      new Move("Harvest Dance", "S1KBB", "LMM", 18, -23, "STN", "STN", 70, null, false, false, false, false, false, true),

      new Move("Endless Howl", "S@|*B", "M", 22, -10, "KND", "KND", 24, null, false, false, false, false, false, true),
      new Move("Endless Howl", "S@|*BB", "MM", 22, -10, "LNC", "LNC", 34, null, false, false, false, false, false, true),

      new Move("Exploding Flame Roar", "S#|^|(A+B", "M", 30, 0, "KND", "KND", 16, null, false, false, false, false, false, true, false, true),

      new Move("Imperial Zeal", "236A", "H", 14, -8, 0, "LNC", 12, null, false, false, false, false, false, true, false, true),
      new Move("Imperial Zeal", "236AoAj", "HH", 14, -14, "KND", "KND", 28, null, false, false, false, false, false, true, false, true),
      new Move("Imperial Zeal", "236AoABj", "HHM", 14, 8, "LNC", "LNC", 70, null, false, false, false, false, false, true, false, true),
      
      new Move("Step Heavenly Divide", "236B", "M", 16, -16, "STN", "LNC", 36, null, false, false, false, false, false, true)
    ],
    // Horizontal Moves
    [
      new Move("Prime Moon Shadow Rush", "A", "H", 12, -8, 2, 2, 12, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Prime Moon Shadow Rush", "AA", "HH", 12, -6, 6, 6, 24, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Prime Moon Shadow Rush", "AAA", "HHH", 12, -12, "KND", "KND", 54, null, false, false, false, false, false, false, false, false, false, true),
     
      new Move("Double Binder", "6A", "H", 16, -6, 4, 4, 14),
      new Move("Double Binder", "6AA", "HM", 16, 4, "STN", "STN", 46),
      new Move("Double Binder ~ Relic", "6a", "H", 16, -2, 8, 8, 14, null, true),
      
      new Move("Twisted Gold", "3A", "M", 14, -8, 2, "KND", 12),
      new Move("Knee Slice", "2A", "S", 12, -6, 6, 6, 12, null, false, false, true),
      new Move("Shin Slicer", "1A", "L", 34, -14, "STN", "STN", 34, null, false, true),
      new Move("Pattern Dance", "1AB", "M", 51, 9, "LNC", "LNC", 42, null, false, true, false, false, false, false, false, true),

      new Move("Drawn Breath", "4A", "H", 20, -6, 4, 4, 20),
      new Move("Drawn Breath ~ Mist", "4a", "H", 20, -2, 8, 8, 20, null, true),

      new Move("Knee Slice", "CA", "S", 12, -6, 6, 6, 12, null, false, false, true),

      new Move("Reaving Shears", "WA", "M", 18, -8, 2, 2, 18),
      new Move("Reaving Shears", "WAA", "MH", 18, -8, 4, 4, 40),

      new Move("Field Reave", "JA", "H", 26, -2, 8, 8, 24, "Damage differs slightly depending on jump direction"),
      new Move("Reverse Slice", "TA", "H", 14, -6, 6, 6, 14),
      new Move("Hidden Slice", "T2A", "S", 14, -6, 8, 8, 14, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Tribute", "B", "M", 14, -8, 2, 2, 12, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Tribute", "BB", "MM", 14, -6, 4, 4, 30, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Tribute", "BBB", "MMM", 14, -4, null, null, 65, "Shifts to clash upon hit", false, false, false, false, true, false, false, false, false, true),
      new Move("Tribute", "BBb", "MMM", 14, null, null, null, 75, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Tribute ~ Mist", "Bb", "MM", 14, -10, 0, 0, 30, null, true),
      
      new Move("Mask", "x6", "H", 16, -14, 0, "LNC", 22, null, false, true),
      new Move("Feint L", "xA", "M", 16, -20, -10, "KND", 26),

      new Move("Furious Stab", "6B", "M", 18, -10, 0, 0, 16),
      new Move("Furious Stab ~ Mist", "6BB", "MM", 18, -6, 4, 4, 28, null, true),
      new Move("Furious Stab ~ Mist", "6Bb", "MM", 18, 7, "STN", "STN", 24, null, true),

      new Move("Heaven Cannon", "3B", "M", 18, -14, "LNC", "LNC", 26, null, false, true),
      new Move("Air Tale", "2B", "M", 13, -7, 3, 3, 14),

      new Move("Leap of the Loach", "1B", "L", 20, -24, "STN", "STN", 16, null, false, false, true),
      new Move("Leap of the Loach", "1BB", "LM", 20, -28, "STN", "STN", 44, null, false, false, true),
      new Move("Sun Flip ~ Relic", "1BA+B", "LM", 20, 4, "LNC", "LNC", 52, null, true, true, false, false, false, false, false, true),

      new Move("Wind Hole Upper", "4B", "H", 16, -4, 6, 6, 18),
      new Move("Upper Arch", "CB", "M", 14, -8, 2, 2, 18, null, false, false, true),

      new Move("Heavenly Stich", "WB", "M", 16, -14, "LNC", "LNC", 22, null, false, true),
      new Move("Heavenly Stich", "WB2B", "MM", 16, -4, "STN", "STN", 40, null, false, true),

      new Move("Falling Rust", "JB", "M", 40, -6, "KND", "KND", 30, "Damage differs slightly depending on jump direction"),
      new Move("Reverse Divide", "TB", "M", 16, -6, 4, 4, 18),
      new Move("Hidden Divide", "2B", "M", 16, -8, 2, 2, 20, null, false, false, true)
    ],
    // Kicks
    [
      new Move("Snap Kick", "K", "H", 12, -8, 2, 2, 20, null, false, false, false, false, false, false, false, false, false, true),

      new Move("Obedience", "cB", "M", 19, -36, -30, -30, 20),
      new Move("Obedience", "cB", "MM", 19, -16, "KND", "KND", 58),

      new Move("Wheel Kick", "6K", "H", 16, -10, 8, "LNC", 18),
      new Move("Front Kick", "3K", "M", 14, -6, 4, 4, 16),
      new Move("Hem Stitch", "2K", "L", 16, -14, "STN", "STN", 12, null, false, false, true),

      new Move("Stalk Shaver", "1K", "L", 18, -26, "STN", "STN", 20),
      new Move("Stalk Shaver", "1KB", "LM", 18, -26, -14, -14, 44),
      new Move("Stalk Shaver ~ Mist", "1Kb", "LM", 18, -18, -6, -6, 44, null, true),

      new Move("Bullet Cutter", "4K", "M", 20, -12, 0, 0, 18),
      new Move("Bullet Cutter", "4KB", "MM", 20, -8, "STN", "STN", 30),

      new Move("Hem Stitch", "CK", "L", 16, -14, "STN", "STN", 12, null, false, false, true),
      new Move("Bullet Stopper", "WK", "M", 12, -8, 2, 2, 18),
      new Move("Jump Kick", "JK", "M", 22, -8, 4, 4, 25, "Damage differs slightly depending on jump direction"),
      new Move("Reverse Kick", "TK", "H", 14, -8, 2, 2, 16),
      new Move("Hidden Kick", "T2K", "L", -14, "STN", "STN", 18, null, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Geyser Cannon", "A+B", "M", null, 2, "STN", "STN", 40, null, false, true, false, false, false, false, false, true),
      new Move("Dividing Thrust", "6A+B", "M", 18, -18, "STN", "STN", 30, "Shifts to attack throw upon close-range hit", false, false, false, false, false, false, true),
      new Move("Cold stitch", "2A+B", "M", 24, -2, 8, 8, 20),
      new Move("Wheel Slash", "7|8|9A+B", "M", 56, 2, "KND", "KND", 58, null, false, false, false, false, false, false, false, true),
      
      new Move("Steel Slicer", "B+K", "M", 22, -31, -25, -25, 12),
      new Move("Steel Slicer", "B+K", "MM", 22, -16, "LNC", "LNC", 12),
      
      new Move("Triple Steel", "B+KvBj", "MMM", 24, -20, "LNC", "LNC", 32),
      new Move("Full Moon Disembowel", "2B+K", "M", 72, null, "KND", "KND", 85, "Shifts to attack throw upon close-range hit", false, false, false, false, false, false, true, false, true, true),
      // Held version of Full Moon Disembowel here
      new Move("Samurai Tackle", "TB+K", "M", 10, -12, "STN", "STN", 30)
    ],
    // 8-Way Run Moves
    [
      new Move("Swift Edge", "#|^|(A", "H", 20, -10, 0, 0, 12),
      new Move("Swift Edge", "#|^|(AA", "HH", 20, -8, 8, 8, 14),

      new Move("Rib Ripper", "@|*A", "M", 26, -12, 4, 4, 16, null, false, true),

      new Move("Drawn Air", "!|$|uA", "M", 24, -8, "STN", "STN", 26),
      new Move("Drawn Air ~ Relic", "#|$|ua", "M", 24, -4, "STN", "STN", 26, null, true),

      new Move("Heavenly Dance", "#|^|(B", "M", 19, -15, "LNC", "LNC", 20),
      new Move("Heavenly Dance", "#|^|(BB", "MM", 19, -29, "LNC", "LNC", 40),
      new Move("Heavenly Dance ~ Relic", "#|^|(b", "M", 20, -6, "LNC", "LNC", 20, null, true),

      new Move("Hell Flash", "@|*B", "M", 22, -10, "KND", "KND", 24),

      new Move("Blunt Flames", "!|$|uB", "M", 19, -9, 1, 1, 16),
      new Move("Blunt Flames", "!|$|uBA", "MH", 19, -6, 4, "LNC", 34),
      new Move("Blunt Flames", "!|$|uBAB", "MHM", 19, -4, "KND", "KND", 70),
      new Move("Blunt Flames ~ Mist", "!|$|uBa", "MH", 19, -1, 9, 9, 34, null, true),
      new Move("Blunt Flames(Cancel) ~ Relic", "!|$|uBAxG", "MH", 19, -33, -23, -23, null, null, true),

      new Move("Bell Breaker", "^K", "M", 16, -10, "STN", "STN", 24),
      new Move("Rising Knee", "#|(K", "M", 14, -2, 4, "STN", 20),
      new Move("Shin Clip", "@|*K", "L", 18, -18, "STN", "STN", 20),

      new Move("Bullet Cutter", "!|$|uK", "M", 20, -12, 0, 0, 18),
      new Move("Bullet Cutter", "!|$|uKB", "MM", 20, -8, "STN", "STN", 48),

      new Move("Phoenix Tail", "#|^|(A+B", "M", 30, -4, "KND", "KND", 52),
      new Move("Phoenix Tail(Cancel) ~ Relic", "#|^|(z+xG", null, null, null, null, null, null, null, true),

      new Move("Sliding", "RK", "L", 20, -22, "LNC", "LNC", 26)
    ],
    // Throws
    [
      new Move("Sea of Madness", "A+G", "H", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),
      new Move("Zen Blade", "4A+G", "H", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),
      new Move("Gates of Hell", "ZA+G", "H", 18, null, "KND", "KND", null, null, false, false, false, false, false, false, true),
      new Move("8th Bill of Punishment", "XA+G", "H", 18, null, "KND", "KND", null, null, false, false, false, false, false, false, true),
      new Move("Divine Gift", "VA+G", "H", 18, null, "KND", "KND", null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Lion's Clutch", "6A+G", "H", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),
      new Move("Lion's Clutch", "]A+G", "H", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true)
    ],
    // ************ Stances *************
    // Silent Step
    [
      new Move("Silent Step", "236", null, null, null, null, null, null, null, true),

      new Move("Ear Slicer", "[A", "H", 14, -8, 0, "LNC", 12),
      new Move("Ear Slicer", "[AoAj", "HH", 14, -14, "KND", "KND", 30),

      new Move("Step Stone Divide", "[B", "M", 16, -14, "KND", "KND", 36),
      new Move("Step Stone Divide(hold)", "[b", "M", null, -2, "STN", "STN", 50),

      new Move("Silent Stalk Spin", "[K", "L", 18, -22, "STN", "STN", 16, null, false, false, true),
      new Move("Silent Stalk Spin ~ Relic", "[K", "L", 18, "STN", "STN", 32, null, null, true)
    ],
    // Mist
    [
      new Move("Mist", "6B+K", null, null, null, null, null, null, "Cancel stance with G", true),
      new Move("Mist", "#|^|(B+K", null, null, null, null, null, null, null, true),

      new Move("Full Divide", "]A", "H", 24, -4, "STN", "STN", 28),

      new Move("Cloud Cutter", "]B", "H", 8, -15, -11, "LNC", 8, "During Mist B to return to Mist"),
      new Move("Cloud Cutter", "]BB", "HH", 8, -12, -2, -2, 16, "During Mist B to return to Mist"),
      new Move("Cloud Cutter", "]BBB", "HHH", 8, -12, -2, "LNC", 24, "During Mist B to return to Mist"),
      new Move("Cloud Cutter", "]BBBB", "HHHM", 8, -18, 4, "LNC", 44),
      new Move("Cloud Cutter ~ Relic", "]B", "H", 8, 8, 12, "LNC", 8, null, true),
      new Move("Cloud Cutter ~ Guard", "]BG", "H", 8, -6, -2, "LNC", 8, null, true),

      new Move("Purifying Thrust", "]6B", "M", 18, -18, "KND", "KND", 30, "Shifts to attack throw upon close-range hit", false, false, false, false, false, false, true),
      
      new Move("Water Parting Thrust", "]K", "L", 16, -18, "KND", "KND", 16),
      new Move("Water Parting Thrust", "]KB", "LH", 16, -8, "LNC", "LNC", 44),

      new Move("Divide", "]A+B", "M", 28, -8, "KND", "KND", 36, "Revenge Attack"),
      new Move("Divide", "]A+Bw", "M", 42, null, "LNC", "LNC", 56, null, false, false, false, false, false, false, false, false, true),
      
      new Move("Lion's Clutch", "6A+G", "H", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),
      new Move("Lion's Clutch", "]A+G", "H", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),

      new Move("Relic", "]B+K", null, null, null, null, null, null, null, true),
      new Move("Mist Step", "]66|44", null, null, null, null, null, null, null, true),
      new Move("Mist ~ Jump", "]7|8|9", null, null, null, null, null, null, null, true),
      new Move("Mist ~ Duck", "]1|2|3", null, null, null, null, null, null, null, true)
    ],
    // Relic
    [
      new Move("Relic", "4B+K", null, null, null, null, null, null, "Cancel stance with G", true),
      new Move("Relic", "!|$|uB+K", null, null, null, null, null, null, null, true),
      
      new Move("Quick Draw ~ Relic", "{A", "H", 16, -22, -12, -8, 20, null, true, false, false, false, false, false, false, true),
      new Move("Quick Draw ~ Relic", "{AA", "HH", 16, 4, "LNC", "LNC", 40, null, true, false, false, false, false, false, false, true),
      new Move("Quick Draw ~ Relic(just)", "{AAj", "HH", 16, 11, "LNC", "LNC", 54, null, true, false, false, false, false, false, false, true),
      new Move("Quick Draw ~ Mist", "{a", "H", 16, -10, -2, 2, 20, null, true),
      
      new Move("Fire Brand", "{B", "M", 20, 4, "STN", "STN", 26, null, false, true, false, false, false, false, false, true),
      new Move("Leaping the Bullet", "{K", "M", 14, -16, "LNC", "LNC", 16),

      new Move("Cannon Divide ~ Relic", "{A+B", "M", 46, null, "LNC", "LNC", 55, null, false, false, false, false, false, false, false, false, true),
      new Move("Cannon Divide ~ Relic(hold)", "{a+b", "M", 70, null, "LNC", "LNC", 80, null, false, false, false, false, false, false, false, false, true),
      
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
      new Move("Azure Retribution", "B+G", "M", 46, -16, null, null, 40, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Azure Retribution", "b+g", "M", 66, null, null, null, 50, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Calculated Slaughter", "rA", "H", null, null, "KND", "KND", 40, null, false, true),
      new Move("Crown Splitter ~ Night Side Stance", "rB", "M", null, null, "STN", "STN", 52, "Shifts to clash upon guard", true, true, false, false, false, false, false, true),
      new Move("Crimson Fountain", "rK", "M", null, null, "KND", "KND", 60, "Shifts to attack throw upon hit/Triggers Terror Charge", false, true, false, false, false, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Dark Reconquista: Triumph", "A+B+K", "M", null, -20, "KND", "KND", 80, "Revenge Attack", false, false, false, false, false, false, true, false, false, false, true),
      new Move("Dark Reconquista: Triumph", "a+b+k", "M", null, null, "KND", "KND", 110, "Revenge Attack", false, false, false, false, false, false, true, false, true, false, true),
      new Move("Soul Charge", "4A+B+K", "m", 6, 3, 8, 8, 0, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Death Lord's Impalement", "S6BBB", "MMMMMM", 22, 4, "KND", "KND", 76, "1st hit is Revenge attack", false, false, false, false, false, true, false, true),
      new Move("Malicious Lord's Destruction", "SKB", "HM", 14, -4, "KND", "KND", 48, null, false, false, false, false, false, true),
      new Move("Haunted Lord's Torment", "SWKB", "MH", 14, -12, "STN", "STN", 32, null, false, false, false, false, false, true),
      new Move("Haunted Lord's Torment", "SWKb", "MH", 14, -4, "STN", "STN", 32, null, true, false, false, false, false, true),
      new Move("Death Lord's Agony", "S#|^|(KK", "MM", 16, 0, "STN", "STN", 42, null, false, false, false, false, false, true, false, true),
      new Move("Death Lord's Agony ~ Grim Stride", "S#|^|(Kc6", "MM", 16, null, "STN", "STN", 42, null, true, false, false, false, false, true, false, true),
      new Move("Grim Lord's Desolation", "S[AA", "HH", 28, -2, "KND", "KND", 59, "GI vs high, mid vertical/Shifts to attack throw upon hit", false, false, false, true, false, true, true),
      new Move("Grim Lord's Auto-da-fe", "S[KK", "MH", 28, 10, "KND", "KND", 43, "Triggers Terror Charge", false, false, false, false, false, true, true, true),
      new Move("Sable Destruction", "S[A+B", "MMM", 33, -2, "KND", "KND", 55, null, false, false, false, false, false, true, false, true),
      new Move("Vert Annihilation", "S]A+B", "MMMM", null, 14, "KND", "KND", 106, null, false, false, false, false, false, true, false, true),
      new Move("Gules Obliteration", "S{A+B", "MMMH", 31, null, "KND", "KND", 84, "GI vs. horizontal(except kicks)", false, false, false, true, false, true, false, true),
      new Move("Phantom Lord's Gammadia", "S}xAB", "HM", null, null, "KND", "KND", null, null, false, false, false, false, false, true),
      new Move("Purpure Devastation", "S}A+B", "MM", null, null, "KND", "KND", null, null, false, false, false, false, false, true, false, true)
    ],
    // Horizontal Moves
    [
      new Move("Plague Spreader", "A", "H", 16, -6, 4, 4, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Plague Spreader", "AA", "HM", 16, -12, "KND", "KND", null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Plague Spreader ~ Grim Stride", "Az6", "H", null, null, null, null, null, null, true),
      new Move("Plague Spreader ~ Night Side Stance", "a", "H", 16, -5, 8, 8, null, null, true),

      // levels missing
      new Move("Quick Chainmail Buster", "zB", "M", 19, -16, "KND", "KND", null),
      new Move("Quick Backspin Slash", "zxA", "H", 16, -2, "KND", "KND", null, null, false, true),
      new Move("Quick Backspin Slash(fast)", "zxAF", "H", null, null, null, null, null, null, false, true),

      new Move("Quick Neck Buster", "zvA", "H", 16, 0, "KND", "KND", null, null, false, true),
      new Move("Quick Neck Buster(far)", "zvA", "H", 16, 1, "KND", "KND", null, null, false, true),
      new Move("Quick Neck Buster(fast)", "zvAF", "H", null, null, null, null, null, null, false, true),

      new Move("Blood Storm", "6A", "H", 22, -16, -4, -4, null, "1st hit is Revenge attack"),
      new Move("Blood Storm", "6AA", "HH", 22, 2, "KND", "KND", null, "1st hit is Revenge attack"),
      new Move("Blood Storm ~ Night Side Stance", "6a", "H", 22, -10, 2, 2, null, "Revenge Attack", true),
      new Move("Blood Storm ~ Night Behind Stance", "6AzG", "H", 22, -13, 3, 3, null, "Revenge Attack", true),

      new Move("Dire Vengeance", "w6A", "M", null, null, null, null, null, "GI vs. high, mid & low/Triggers Terror Charge", false, true, false, true, false, false, false, true),
      
      new Move("Mail Crusher", "3A", "M", 20, -22, -4, -4, null),
      new Move("Mail Crusher", "3AA", "MM", 20, -20, "KND", "KND", null),
      new Move("Cursed Shadow", "3AK", "MH", 20, 2, "KND", "KND", null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      
      new Move("Jade Slicer", "2A", "L", 18, -14, -4, -4, null, null, false, false, true),
      new Move("Shadow Slicer", "1A", "L", 32, null, 4, "KND", null, null, false, true),
      new Move("Shadow Slicer", "1a", "L", null, 4, "KND", null, null, null, false, true, false, false, false, false, false, true),
      new Move("Jade Crusher", "1zK", "H", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Jade Crusher ~ Grim Stride", "1A6", "L", 32, -28, null, "KND", null, null, true, true),
      
      new Move("Back Blade", "4A", "H", 32, 4, "KND", "KND", null, null, false, false, false, false, false, false, false, true),
      new Move("Jade Slicer", "CA", "L", null, null, null, null, null, null, false, false, true),

      new Move("Maelstrom", "WA", "M", 18, -20, -10, -10, null),
      new Move("Maelstrom ~ Night Side Stance", "Wa", "M", 18, -4, 7, 7, null, null, true),
      new Move("Maelstrom", "WAA", "ML", 18, -24, "KND", "KND", null),
      new Move("Maelstrom ~ Grim Stride", "WAz6", "M", 18, -28, "KND", "KND", null, null, true),
      new Move("Fatal Spin Slash", "JA", "H", 26, -10, "KND", "KND", null),
      new Move("Turning Head Slash", "TA", "H", null, null, null, null, null),
      new Move("Turning Leg Slash", "T2A", "S", null, null, null, null, null, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Chariot Splitter", "B", "M", 26, -18, "KND", "KND", null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Chariot Splitter", "BB", "MM", 26, -16, "KND", "KND", null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Chariot Splitter ~ Night Behind Stance", "Bx4", "M", 26, -8, "KND", "KND", null, null, true),
      
      new Move("Double Avenger", "6B", "M", 22, -16, "KND", "KND", null, "1st hit is Revenge attack"),
      new Move("Double Avenger", "6BB", "MM", 22, -14, "KND", "KND", null, "1st hit is Revenge attack"),
      
      new Move("Dire Vengeance", "w6B", "M", null, null, null, null, null, "GI vs. high, middle & low/Triggers Terror Charge", false, true, false, true, false, false, false, true),
     
      new Move("Death Smash", "3B", "M", 22, -20, "LNC", "LNC", null), // startup might be 21
      new Move("Death Smash ~ Night Side Stance", "3b", "M", 22, -8, "LNC", "LNC", null, null, true),

      new Move("Shadow Buster", "2B", "M", 20, -8, 2, 2, null, null, false, false, true),
      new Move("Shadow Buster ~ Night Lower Stance", "2b", "M", 20, -5, 7, 7, null, null, true),

      new Move("Dark Soul Impact", "1B", "L", 32, -16, "KND", "KND", null),

      new Move("Triple Headbutt", "4B", "M", 16, -10, 0, 0, null),
      new Move("Triple Headbutt", "4BB", "MM", 16, -12, 2, 2, null),
      new Move("Triple Headbutt", "4BBB", "MMM", 16, -14, "KND", "KND", null),

      new Move("Shadow Buster", "CB", "M", null, null, null, null, null, null, false, false, true),
      new Move("Shadow Buster ~ Night Lower Stance", "Cb", "M", null, null, null, null, null, null, true),

      new Move("Soul Taker", "C3B", "M", 24, -22, "LNC", "LNC", null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Upper Claw", "WB", "M", 16, -22, "LNC", "LNC", null, null, false, true),
      new Move("Upper Claw ~ Night Side Stance", "Wb", "M", 16, -2, "LNC", "LNC", null, null, true, true),

      new Move("Fatal Buster", "JB", "M", null, null, null, null, null),
      new Move("Turning Sword Buster", "TB", "M", null, null, null, null, null),
      new Move("Turning Shadow Buster", "T2B", "M", null, null, null, null, null, null, false, false, true)
    ],
    // Kicks
    [
      new Move("Jade Strike", "K", "H", 14, -8, 4, "KND", null, null, false, false, false, false, false, false, false, false, false, true),
      
      new Move("Adamantine Cracker", "6K", "H", 16, -8, "KND", "KND", null, "Revenge attack", false, true),
      new Move("Dire Vengeance", "w6K", "M", null, null, null, null, null, "GI vs. high, mid & low/Triggers Terror Charge", false, true, false, true, false, false, false, true),
      
      new Move("Dark Rush Kick", "3K", "M", 14, -8, 0, 0, null),
      new Move("Dark Low Kick", "2K", "L", 16, -14, -4, -4, null, null, false, false, true),

      new Move("Earth Trample", "1K", "L", 20, -16, -2, null, null),
      new Move("Earth Trample", "1k", "L", null, null, "KND", "KND", null, null, false, false, false, false, false, false, false, false, true),

      new Move("Sinew Crusher", "4KB", "MM", null, null, null, null, null),
      new Move("Double Death Strike", "4KK", "MH", null, null, null, null, null, "Shifts to attack throw upon hit/Triggers Terror Charge", false, false, false, false, false, false, true),
      new Move("Dark Low Kick", "CK", "L", null, null, null, null, null, null, false, false, true),
      new Move("Dark Head Upper", "WK", "M", null, null, null, null, null),
      new Move("Fatal Brave Kick", "JK", "M", 24, -8, 6, 6, null),
      new Move("Turning Dark High Kick", "TK", "H", 12, -8, 2, 2, null),
      new Move("Turning Dark Low Kick", "T2K", "L", 16, -14, -4, -4, null, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Midnight Launcher ~ Night Behind Stance", "A+B", "M", 32, 3, "LNC", "LNC", 42, null, true, true, false, false, false, false, false, true),
      new Move("Soul Wave", "6A+B", "M", 36, -14, "KND", "KND", 36, "Revenge attack/Triggers Terror Charge"),
      new Move("Dire Vengeance", "w6A+B", "M", null, null, null, null, null, "GI vs. high, mid & low/Triggers Terror Charge", false, true, false, true, false, false, false, true),
      new Move("Soul Smasher", "2A+B", "M", 19, -16, "KND", "KND", null, "Shifts to attack throw upon close-range hit/Triggers Terror Charge", false, false, false, false, false, false, true),
      new Move("Soul Smasher", "D2A+B", "M", 20, null, "KND", "KND", 40, "Shifts to attack throw upon close-range hit/Triggers Terror Charge", false, false, false, false, false, false, true),
      new Move("Soul Blaze", "4A+B", "M", 67, null, "LNC", "LNC", null, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Soul Wave (Ambush)", "TA+B", "M", 34, -20, "KND", "KND", null, "Revenge attack/Triggers Terror Charge", false, false, false, false, false, false, false, true),
      new Move("Dire Vengeance", "wTA+B", "M", null, null, null, null, null, "GI vs. high, mid & low/Triggers Terror Charge", false, true, false, true, false, false, false, true)
    ],
    // 8-Way Run Moves
    [
      new Move("Right Slasher", "#|^|(A", "H", 26, 2, "KND", "KND", null),
      new Move("Right Slasher ~ Grim Stride", "#|^|(z6", "H", null, null, null, null, null, null, true),

      new Move("Death Rage", "@|*A", "M", 32, -10, 0, 0, null),
      new Move("Death Rage", "@|*AA", "MM", 32, -16, "KND", "KND", null),
      new Move("Death Rage ~ Grim Stride", "@|*Az6", "M", null, null, null, null, null, null, true),

      new Move("Plague Storm", "!|$|uA", "M", 30, -12, "KND", "KND", null),
      new Move("Plague Storm ~ Grim Stride", "#|$|uz6", null, null, null, null, null, null, null, true),

      new Move("Ether Splitter", "#|^|(B", "M", 19, -22, "LNC", "LNC", null),
      new Move("Ether Splitter ~ Grim Stride", "#|^|(x6", "M", null, null, null, null, null, null, true),
      new Move("Ether Splitter ~ Night Behind Stance", "#|^|(b", "M", null, null, "LNC", "LNC", null, null, true),
      
      new Move("Rook Splitter", "@|*B", "M", 40, -18, "KND", "KND", null, null, false, true, true),
      new Move("Rook Splitter ~ Night Lower Stance", "@|*b", "M", 40, -11, "KND", "KND", null, null, true, true),

      new Move("Darkness Impact", "!|uB", "L", 40, -20, -4, -4, null),
      new Move("Darkness Impact ~ Night Lower Stance", "!|ub", "L", 40, -13, 3, 3, null, null, true),
      
      new Move("Shadow Breaker", "$BB", "MM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Shadow Breaker ~ Night Side Stance", "$Bb", "MM", null, null, null, null, null, null, true, false, false, false, false, false, false, true),

      new Move("Shoulder Rush", "#|^|(K", "M", 16, -16, 2, 2, null),
      new Move("Shoulder Rush ~ Grim Stride", "#|^|(c6", "M", 16, null, 12, 12, null, null, true),

      new Move("Bloody Jade Impact", "@|*K", "m", 50, -9, null, null, null, "Becomes a low attack when at distance"),
      // far version missing

      new Move("Drop Kick", "!|$|uK", "H", null, null, "KND", "KND", 52, "Returns to downed position", false, false, false, false, false, false, false, true),
      new Move("Crimson Vortex", "#|^|(A+B", "M", 31, -2, "LNC", "LNC", null),
      new Move("Sliding", "RK", "L", null, null, "KND", "KND", null)
    ],
    // Throws
    [
      new Move("Shoulder Claw Throw", "A+G", "H", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),
      new Move("Soul Devour", "4A+G", "H", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),
      new Move("Doom's Invitation", "ZA+G", "H", 18, null, "KND", "KND", null, null, false, false, false, false, false, false, true),
      new Move("Unholy Terror", "XA+G", "H", 18, null, "KND", "KND", null, null, false, false, false, false, false, false, true),
      new Move("Witch Hunt", "VA+G", "H", 18, null, "KND", "KND", null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Flap Jack", "3A+G", "L", 18, -16, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),
      new Move("Over Toss", "1A+G", "L", 18, -16, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true)
    ],
    // ************ Stances *************
    // Grim Stride
    [
      new Move("Grim Stride", "236", null, null, null, null, null, null, null, true, false, true),
      new Move("Grim Fang", "[A", "H", 28, -16, 10, "STN", null, "GI vs. high, mid vertical", false, false, false, true),
      new Move("Evil Eye", "[zB", "H", 32, -18, 0, 0, null, null, false, true),
      new Move("Grim Launcher", "[B", "M", 32, -10, "LNC", "LNC", null),
      new Move("Grim Launcher ~ Grim Stride", "[x6", "M", 32, 1, "LNC", "LNC", null, null, true),
      new Move("Grim Riser Kick", "[K", "M", 28, -14, "STN", "STN", null),
    ],
    // Night Lower Stance
    [
      new Move("Night Lower Stance", "B+K", null, null, null, null, null, null, "Returns to crouch when cancelled", true),
      new Move("Night Lower Stance", "TB+K", null, null, null, null, null, null, "Reutrns to crouch when cancelled", true),
      new Move("Leg Hacker", "]A", "L", 19, -10, 2, 2, null),
      new Move("Leg Hacker ~ Night Side Stance", "]a", "L", 19, -4, 9, 9, null, null, true),
      new Move("Death Horn Charge", "]B", "M", 8, -10, "KND", "KND", null, "Shifts to attack throw upon close-range hit", false, false, false, false, false, false, true),
      new Move("Death Horn Charge ~ Night Behind Stance", "]b", "M", 8, 2, "STN", "STN", null, null, true),
      new Move("Death Lifting Kick", "]K", "MH", 11, -6, null, null, null),

      new Move("Night Lower Stance ~ Night Behind Stance", "]6B+K", null, null, null, null, null, null, null, true),
      new Move("Night Lower Stance ~ Night Side Stance", "]4B+K", null, null, null, null, null, null, null, true),
      new Move("Night Lower Stance ~ Grim Stride", "]236", null, null, null, null, null, null, null, true)
    ],
    // Night Behind Stance
    [
      new Move("Night Behind Stance", "6B+K", null, null, null, null, null, null, null, true),
      new Move("Terror Sweeper", "{A", "L", 20, -18, 8, "KND", null),
      new Move("Terror Sweeper ~ Night Side Stance", "{a", "L", 20, -14, 6, 6, null, null, true),
      new Move("Terror Vortex", "{B", "M", 22, -2, null, null, null),

      new Move("Knee Kick Rush", "{K", "M", 10, -8, 2, 2, null),
      new Move("Knee Kick Rush", "{KK", "MH", 10, -10, -1, "STN", null),

      new Move("Night Behind Stance ~ Night Lower Stance", "{B+K", null, null, null, null, null, null, null, true),
      new Move("Night Behind Stance ~ Night Side Stance", "{4B+K", null, null, null, null, null, null, null, true),
      new Move("Night Behind Stance ~ Grim Stride", "{236", null, null, null, null, null, null, null, true)
    ], 
    // Night Side Stance
    [
      new Move("Night Side Stance", "4B+K", null, null, null, null, null, null, null, true),
      new Move("Soul Biter", "}A", "M", 24, -10, 8, 8, null),
      new Move("Soul Biter ~ Night Side Stance", "}a", "M", 24, -6, 13, 13, null, null, true),
      new Move("Phantom Star", "}zB", "M", 25, -18, "STN", "STN", null, null, false, true),
      new Move("Phantom Star ~ Night Behind Stance", "}zb", "M", 25, -2, "STN", "STN", null, null, true, true),
      new Move("Phantom Splitter", "}B", "M", 20, -14, "LNC", "LNC", null),
      new Move("Skull Chopper", "}xA", "H", 13, -16, "KND", "KND", null),
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
      new Move("Venomous Strike", "B+G", "M", 44, -8, null, null, 30, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Venomous Strike", "b+g", "M", 83, null, null, null, 40, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
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
      new Move("Toxic Talon", "rA", "H", null, 2, "KND", "KND", 30, null, false, true),
      new Move("Fatal Skewer", "rB", "M", null, null, "KND", "KND", 45, null, false, true, false, false, false, false, false, true),
      new Move("Bella Donna Spin", "rK", "MH", null, -2, "KND", "KND", 35, null, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Royal Poison", "A+B+G", "M", 18, -8, "KND", "KND", 75, null, false, false, false, false, false, false, true, false, false, false, true),
      new Move("Royal Poison: Fatal Dose", "[A+B+G", "M", null, null, null, null, null, null, false, false, false, false, false, false, true, true, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", 6, 0, 8, 8, 0, null, false, false, false, false, false, false, false, true, false, false, true),
      
      new Move("Viper Hiss", "S6AB", "HM", null, 2, "KND", "KND", 35, null, false, false, false, false, false, true, false, true),
      new Move("Viper Hiss ~ Preparation", "S6Ab", "HM", null, 8, "KND", "KND", 35, "Dodges high attacks", true, false, false, false, false, true, false, true),
      
      new Move("Renegade Thrust", "S4AB", "HM", null, 2, "STN", "STN", 50, null, false, false, false, false, false, true, false, true),
      new Move("Renegade Thrust ~ Preparation", "S4Ab", "HM", null, 8, "STN", "STN", 50, "Dodges high attacks", true, false, false, false, false, true, false, true),
      
      new Move("Death Throes", "S6BBBB", "HHMM", null, -8, "KND", "KND", 106, null, false, false, false, false, false, true, true),
      new Move("Death Throes(just)", "S6BBBBj", "HHMM", null, -8, "KND", "KND", 111, null, false, false, false, false, false, true, true),

      new Move("Vicious Viper", "S4BBB", "HHM", null, -2, "KND", "KND", 70, null, false, false, false, false, false, true), 
      new Move("Tarantula Swarm", "S1KB", "LL", null, -14, "KND", "KND", 55, null, false, false, false, false, false, true),
      new Move("Le Vol d'lcare", "S2A+BB", "MMH", null, -20, "KND", "KND", 81, null, false, false, false, false, false, true),

      new Move("Scarlet Roar", "SJAB", "MM", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Scarlet Roar ~ Preparation", "SJAb", "MM", null, null, null, null, null, "Dodges high attacks", true, false, false, false, false, true, false, true),
      
      new Move("Thousand Hornets", "SA+G", "H", 18, null, "KND", "KND", 70, "Breakable", false, false, false, false, false, true, true),
      new Move("Rampage of the Queen Bee", "S[BBA+B", "HHMMMMMMMMM", null, -14, null, "KND", 83, null, false, false, true, false, false, true),
      new Move("Folie a Deux", "S[6KK", "MH", null, null, "KND", "KND", 53, null, false, false, false, false, false, true)
    ],
    // Horizontal Moves
    [
      new Move("Temple Bayonet", "A", "H", 12, -6, 2, 2, 10, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Temple Bayonet", "AA", "HH", 12, -6, 0, 20, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Quick Needle", "AB", "HL", 12, -12, 0, 0, 25),
      
      new Move("Vicious Lullaby", "6A", "H", 18, -14, 0, 0, 12),
      new Move("Vicious Lullaby", "6AA", "HH", 18, -12, 4, 4, 26),

      new Move("Violent Blood", "3A", "M", 20, -12, 2, 2, 14, null, false, true),
      new Move("Cleaving Talon", "2A", "S", 12, -10, 4, 4, 10, null, false, false, true),
      new Move("Hell Snipe", "1A", "L", 20, -16, -4, -4, 15, null, false, false, true),
      new Move("Heavy Mandritti", "4A", "H", 20, -16, "KND", 16, null), // disadvantage on guard -16 ~ 14
      new Move("Rising Wyvern", "46A", "H", 20, -12, 4, 4, 20, null, false, true),
      new Move("Low Tondo Roveral", "CA", "S", 12, -10, 4, 10, null, null, false, false, true),
      new Move("Rising Tondo", "WA", "H", 18, -4, 8, 8, 14),
      new Move("Scarlet Talon", "JA", "M", null, null, null, null, null),
      new Move("Turning Attack au Fer", "TA", "H", 18, -6, 4, 4, 12),
      new Move("Low Turn Attack au Fer", "T2A", "S", 14, -6, 6, 6, 11, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Rapid Arrogance", "B", "M", 14, -8, -2, -2, 10, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Single Montante", "x4", "M", 24, -6, "KND", "KND", 30),

      new Move("Grave Needle", "x2", "L", 18, -12, 4, 4, 12),
      new Move("Grave Needle", "x2B", "LL", 18, -16, 0, 0, 27),

      new Move("Rapid Arrogance", "BB", "MM", 14, -14, -4, -4, 28, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Rapid Arrogance", "BBB", "MMH", 14, -10, 0, 0, 38, "3rd hit can be delayed", false, false, false, false, false, false, false, false, false, true),
      new Move("Rapid Arrogance(just)", "BBBj", "MMH", 14, -8, 2, 2, 42, "3rd hit can be delayed", false, false, false, false, false, false, false, false, false, true),
      new Move("Phasing Moon", "BBK", "MMM", 14, -12, "KND", "KND", 48),
      new Move("Rapid Arrogance ~ Arriere Gambit", "BBB4", "MMH", 14, -1, 9, 9, 38, null, true, false, false, true),
      //46 move missing

      new Move("Rapid Arrogance ~ Arriere Gambit(just)", "BBB4j", "MMH", 14, 1, 11, 11, 38, null, true, false, false, true),
      //46 move missing

      new Move("Rapid Arrogance", "BBBB", "MMHM", 14, -14, 2, 2, 58, "3rd hit can be delayed", false, false, false, false, false, false, false, false, false, true),
      new Move("Rapid Arrogance (just)", "BBBBj", "MMHM", 14, -14, 2, 2, 64),
      
      new Move("Triple Botta in Tempo", "6B", "H", 10, -12, -2, -2, 10),
      new Move("Triple Botta in Tempo ~ Arriere Gambit", "6B4", "H", 10, 0, 10, 10, 10, "GI vs. low attacks", true, false, false, true),
      // 46 Move missing

      new Move("Triple Botta in Tempo", "6BB", "HH", 10, -14, -2, -2, 20),
      new Move("Triple Botta in Tempo ~ Preparation", "6Bb", "HH", 10, -4, 8, 8, 20, "Dodges high attacks", true),
      
      new Move("Triple Botta in Tempo", "6BBB", "HHM", 10, -16, 0, 0, 40),
      new Move("Triple Botta in Tempo(just)", "6BBBj", "HHM", 10, -16, 0, 0, 45),
      
      new Move("Raptor Rush", "3B", "M", 20, -14, "LNC", "LNC", 22, null),
      new Move("Raptor Rush ~ Preparation", "3b", "M", 20, -4, "LNC", "LNC", 26, "Dodges high attacks", true),

      new Move("Fendante", "2B", "M", 16, -8, 2, 2, 16, null, false, false, true),

      new Move("Striking Snake", "1B", "L", 18, -16, -4, -4, 25),
      new Move("Striking Snake ~ Preparation", "1b", "L", 18, -12, 0, 0, 25, "Dodges high attacks", true),

      new Move("Wicked Thrust", "4B", "H", 22, -14, 2, 2, 20),
      new Move("Wicked Thrust ~ Preparation", "4b", "H", 22, -4, 12, 12, 20, "Dodges high attack", true),

      new Move("Affondo Fendante", "236B", "M", 20, -10, "KND", "KND", 38, null, false, true),
      new Move("Affondo Fendante(fast)", "236BF", "M", 20, -10, "KND", "KND", 42, null, false, true),

      new Move("Nouveau Soleil", "214B", "H", 16, -20, "KND", "KND", 42, null, false, true),
      new Move("Nouveau Soleil(fast)", "214BF", "H", 16, -20, "KND", "KND", 46, null, false, true),

      new Move("Deadly Dirge", "46B", "M", null, null, null, null, null, null, null, true),

      new Move("Crouching Montante", "CB", "M", 16, -8, 2, 2, 16, null, false, false, true),
      new Move("Advance Slicer", "C3B", "M", 18, -14, "KND", "KND", 18, null, false, true),

      new Move("Rising Threat", "WB", "M", 10, -12, -2, -2, 10),
      new Move("Rising Threat", "WBB", "MH", 10, -12, 2, 2, 20),
      new Move("Rising Threat ~ Arriere Gambit", "WBB4", "MH", 10, 0, 14, 14, 20, "vs. low attacks", true, false, false, true),
      // 46 version missing?

      new Move("Sky Agente", "JB", "M", 28, -10, "KND", "KND", 24, "Damage slightly differs according to jump direction"),
      new Move("Turning Montante", "TB", "M", null, null, null, null, null),
      new Move("Low Turn Montante", "T2B", "M", null, null, null, null, null, null, false, false, true)
    ],
    // Kick Moves 
    [
      new Move("Venom High Kick", "K", "H", 12, -8, 0, 0, 12, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Venom Toe Kick", "6K", "M", 16, -8, 6, 6, 20),
      new Move("Venom Kick", "3K", "M", 14, -4, 6, 6, 16),
      new Move("Harm Kick", "2K", "L", 16, -14, -4, -4, 12, null, false, false, true),
      new Move("Pirouette Sweep", "1K", "L", 22, -14, -2, -2, 20),
      new Move("Venom Heel", "4K", "H", 14, -6, 8, 8, 12),

      new Move("Hemlock Kick", "46K", "H", 12, -8, 0, 0, 16, null, false, true),
      new Move("Harm Kick", "CK", "L", 16, -14, -4, -4, 12, null, false, false, true),
      new Move("High Toe Kick", "WK", "H", 14, -2, 8, 8, 16),
      new Move("Chaos Moon", "JK", "M", 24, -8, 4, 4, 18, "Damage differs slightly according to jump direction"),
      new Move("Turning Venom High Kick", "TK", "H", 14, -8, 2, 2, 12),
      new Move("Turning Sweep Kick", "T2K", "L", 16, -14, -2, -2, 10, null, false, null, true)
    ],
    // Dual Button Attacks
    [
      new Move("Enveloping Stocatta", "A+B", "M", 34, 2, "KND", "KND", 40, null, false, true, false, false, false, false, false, true),
      new Move("Fury of the Loup-Garou", "6A+B", "MH", 24, -2, 9, 9, 28),
      new Move("Fury of the Loup-Garou(hold)", "6a+b", "MH", 39, -2, "KND", "KND", 30),

      new Move("Baroque Storm", "2A+B", "MM", 20, -10, "KND", "KND", 35),

      new Move("Assalto Montante Crescendo", "4A+B", "MM", 19, -16, 2, 2, 34),
      new Move("Assalto Montante Crescendo", "4A+BA", "MML", 19, -12, 6, 6, 58),

      new Move("Blood Roar", "8A+B", "HM", 18, -10, 4, 4, 35, "vs. high, middle horizontal/thrusting attacks (except kicks)", false, false, false, true),
      
      new Move("Cantarella Needle (Advance)", "6B+K", "M", 18, -10, 4, "KND", 20),
      new Move("Cantarella Needle (Left)", "6B+K8", "M", 18, -10, "KND", "KND", 20),
      new Move("Cantarella Needle (Right)", "6B+K2", "M", 18, -10, "KND", "KND", 20),
      
      new Move("Spiral Envelopment", "B+K", null, null, null, null, null, null, "Dodges high, middle attacks/Increases evasion window by holding buttons", true),
      new Move("Circular Envelopment", "2B+K", null, null, null, null, null, null, "Dodges middle attacks/Increase evasion window by holding buttons", true),
      new Move("Sly Riposte", "B", "M", 10, -12, "STN", "STN", 25, "After successfully form dodging"),
      new Move("Sly Riposte ~ Arriere Gambit", "B4", "M", 10, null, "STN", "STN", 25, "After successfully form dodging", true, false, false, true),
      new Move("Spiral Envelopment", "TB+K", null, null, null, null, null, null, "Dodges high, middle attacks/Increases evasion window by holding buttons", true),
      new Move("Circular Envelopment", "T2B+K", null, null, null, null, null, null, "Dodges middle attacks/Increase evasion window by holding buttons", true)
    ],
    // 8-Way Run Moves
    [
      new Move("Bloody Slicer", "#|^|(A", "H", 22, -14, 4, 4, 22),

      new Move("Merciless Stramazone", "@|*A", "H", null, -6, 10, 10, 12),
      new Move("Merciless Stramazone", "@|*AA", "HH", null, -8, 12, 12, 30),
      new Move("Merciless Stramazone ~ Arriere Gambit", "@|*AA4", "HH", null, -2, 20, 20, 30, "vs. low attacks", true, false, false, true),
      //46 version missing

      new Move("Deadly Strikes", "@|*AB", "HL", null, -18, -6, -6, 18),
      new Move("Deadly Strikes ~ Preparation", "@|*Ab", "HL", null, -2, 8, 8, 18, "Dodges high attacks", true),

      new Move("Squalambrato Concierto", "!|$|uA", "M", 28, -10, 0, 8, 14),
      new Move("Squalambrato Concierto", "!|$|uAB", "MM", 28, -14, -2, -2, 30),
      new Move("Squalambrato Concierto ~ Preparation", "!|$|uAb", "MM", 28, -4, 6, 6, 30, "Dodges high attacks", true),

      new Move("Broken Thrust", "^B", "M", 16, -16, 4, 4, 18),
      new Move("Broken Thrust ~ Preparation", "^b", "M", 16, -6, 12, 12, 18, "Dodges high attacks", true),

      new Move("Death Guise", "#|(B", "L", null, -16, 0, "KND", 20),
      new Move("Valiant Falcon", "@|*BB", "MM", null, -16, "LNC", "LNC", 16),
      new Move("Aiming Shaft", "!|$|uB", "L", 34, -22, "KND", "KND", 35),

      new Move("Venom Side Kick", "#|^|(K", "H", 20, -10, "KND", "KND", 24),
      new Move("Venom Roundhouse", "@|*K", "H", null, -6, 6, "KND", 16),
      new Move("Dark Moon", "!|$|uK", "M", 20, -10, "KND", "KND", 22, "Into Back turned on hit"),

      new Move("Wyvern's Tail", "#|^|(A+B", "M", 26, -2, "LNC", "LNC", 26, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Bloody Funeral", "!|$|uA+B", "M", 54, null, "KND", "KND", 70, null, false, false, false, false, false, false, false, false, true),
      new Move("Bloody Funeral(cancel) ~ Preparation", "!|$|uz+xG", null, null, null, null, null, null, "Dodges high attacks", true),
      
      new Move("Dread Coffin", "#|^|(B+K", "M", 22, 2, "KND", "KND", 30),
      new Move("Dread Coffin ~ Preparation", "#|^|(b+k", "M", 22, 8, "KND", "KND", 30, "Dodges high attacks", true),
      
      new Move("Sliding", "RK", "L", 20, -22, "KND", "KND", 22)
    ],
    // Throws
    [
      new Move("Unending Stings", "A+G", "H", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),
      new Move("Death Puppet", "4A+G", "H", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),
      new Move("A Lesson in Massacre", "ZA+G", "H", 18, null, "KND", "KND", null, null, false, false, false, false, false, false, true),
      new Move("Undertaker", "XA+G", "H", 18, null, "KND", "KND", null, null, false, false, false, false, false, false, true),
      new Move("Pure Sacrifice", "VA+G", "H", 18, null, "KND", "KND", null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Thousand Hornets", "SA+G", "H", 18, null, "KND", "KND", 70, "Breakable", false, false, false, false, false, true, true)
    ],
    // ************ Stances *************
    // Preparation
    [
      new Move("Preparation", "3b", null, null, null, null, null, null, "Dodges high attacks", true),

      new Move("Ebony Slash", "[AA", "MM", 14, -10, -2, -2, 10),
      new Move("Ebony Slash", "[AA", "MM", 14, -6, 6, 6, 30),
      new Move("Ebony Combo", "[AB", "MH", 14, -14, 7, 7, 25),
      new Move("Ebony Combo ~ Preparation", "[Ab", "MH", 14, -2, 18, 18, 25, "Dodges high attacks", true),

      new Move("Lunging Press", "[6A", "H", 22, -8, 8, 8, 22),

      new Move("Underworld Call", "[B", "H", 10, -10, -2, -2, 10),
      new Move("Underworld Call", "[BB", "HH", 10, -12, 2, 2, 20),
      new Move("Underworld Call ~ Preparation", "[Bb", "HH", 10, -6, 8, 8, 20, "Dodges high attacks", true),
      new Move("Rapid Head Hunter", "[BK", "HH", 10, -16, "KND", "KND", 25),
      new Move("Trifold Slash", "[BBA", "HHL", 10, -16, -4, -4, 35, null, false, false, true),
      new Move("Underworld Call", "[BBB", "HHM", 10, -6, "KND", "KND", 50),
      new Move("Underworld Call(just)", "[BBBj", "HHM", 10, -6, "KND", "KND", 60),

      new Move("Dread Intrigue", "[6B", "M", 18, -10, "KND", "KND", 40),

      new Move("Lunatic Rouge", "[K", "H", 16, -12, "KND", "KND", 10, null, false, false, false, false, false, false, false, true),
      new Move("Lunatic Rouge", "[KKvBj", "HMH", 16, -18, "KND", "KND", 38, null, false, false, false, false, false, false, false, true),

      new Move("Pirouette Kick", "[6K", "M", 20, -16, 4, "KND", 26),
      new Move("Cantarella Needle (Retreat)", "[B+K", "M", 12, -10, 6, "KND", 30),
      new Move("Royal Poison: Fatal Dose", "[A+B+K", "M", 14, 2, "KND", "KND", 85, null, false, false, false, false, false, true, true, true),

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

      new Move("Heavy Mandritti", "]A", "M", 24, -12, 8, 8, 15),
      new Move("Heavy Mandritti", "]AB", "MM", 24, -10, 10, 10, 35),
      new Move("Bite of the Deadly Adder", "]B", "M", 24, -2, "LNC", "LNC", 30),
      new Move("Dark Stinger", "]K", "L", null, null, null, null, null),
      new Move("Dark Stinger Crescendo(just)", "]KvK", "LL", 32, -18, "KND", "KND", 40),
      
      new Move("Arriere Gambit ~ Preparation", "]6", null, null, null, null, null, null, "Dodges high attacks", true)
    ],
    // Shadow Evade
    [
      new Move("Shadow Evade", "[2", null, null, null, null, null, null, "Can be held/Dodges high attacks", true),

      new Move("Bloody Assault", "{A", "M", 16, -4, 8, 8, 20),
      new Move("Bloody Terror", "{B", "M", 20, 8, "STN", "STN", 35, null, false, false, false, false, false, false, false, true),
      new Move("Mandrake Heel", "{K", "L", 20, -16, "KND", "KND", 28)
    ],
    // Quick Parade
    [
      new Move("Quick Parade", "4B+K", null, null, null, null, null, null, "vs. middle attacks", false, false, false, true),
      new Move("Quick Parade ~ Preparation", "4b+k", null, null, null, null, null, null, "vs. middle attacks/Dodges high attacks", true, false, false, true),
      new Move("Haunted Talon", "}A", "L", null, -10, "KND", "KND", 20),

      new Move("Dreaded Rampage", "}B", "MMMMMMM", null, -6, 2, 2, 35),
      new Move("Dreaded Rampage", "}BB", "MMMMMMMM", null, -10, "KND", "KND", 35)
    ]
  ]

  SeongMina = [
    // Reversal Edge Attacks
    [
      new Move("Harbringer's Edge", "B+G", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Harbringer's Edge", "b+g", "M", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Harbringer's Radiance", "rAA", "HH", null, null, null, null, null, null, false, true),
      new Move("Harbringer's Exalted Blade", "rAB", "HM", null, null, null, null, null, "Can be held", false, true),
      new Move("Hazed Skewer", "rB", "M", null, null, null, null, null, "Shifts to clash upon guard", false, true, false, false, false, false, false, true),
      new Move("Flying Flash Kick", "rK", "M", null, null, null, null, null, null, false, true, true)
    ],
    // Gauge Attacks
    [
      new Move("New Seong Style: Scarlet Meteor", "A+B+K", "M", 18, -18, "KND", "KND", 80, null, false, false, false, false, false, false, true, false, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", 6, null, null, null, 0, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Shattering Violet Squall", "S6A", "H", 20, 2, "KND", "KND", 22, null, false, true, false, false, false, true, false, true),
      new Move("Shattering Meteor Shower", "SBBB", "MMM", 20, 4, "KND", "KND", 44, null, false, false, false, false, false, true, false, true, false, true),
      new Move("Shattering Lightning Fang", "S1B", "L", 22, 2, "KND", "KND", 40, "Returns to crouching on G cancel", false, false, false, false, false, true, false, true, false, true),
      new Move("Seong Cloud Burst", "SC1KKB", "LMMM", 22, -12, null, null, null),
      new Move("Seong Snapping Jaw", "S#|^|(AA", "MHH", 18, -6, "KND", "KND", 52, null, false, false, false, false, false, true),
      new Move("Whirling Willow Frenzy", "S@|*AAAA", "MMMM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Shattering Lightning Fang", "S!|uB", "L", null, null, null, null, null, null, false, false, false, false, false, true, false, true, false, true),
      new Move("Shattering Spinning Divide", "S#|^|(A+B", "M", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Shattering Seong's Diamond Crusher", "S!|$|uA+B", "M", null, null, null, null, null, null, false, true, false, false, false, true, false, true),
      new Move("Shattering Talon Rush", "S!|$|uB+K", "M", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Shattering Talon Rush", "S!|$|ub+k", "M", null, null, null, null, null, null, false, false, false, false, false, true, false, false, true)
    ],
    // Horizontal Moves
    [
      new Move("Tumultuous Assault", "A", "H", 18, -6, 2, 2, 16, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Tumultuous Assault", "AA", "HH", 18, -12, 0, 0, 28, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Tumultuous Assault", "AAA", "HHL", 18, -12, 0, 0, 55, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Twin Fang Thrust", "AAB", "HHM", 18, -14, 2, 2, 58),

      new Move("Violet Squall", "6A", "H", 20, -18, "KND", "KND", 20, null, false, true),
      new Move("Violet Squall(far)", "6A", "H", 20, -18, "KND", "KND", 32, null, false, true),

      new Move("Wing Cross", "3A", "M", 26, -14, -6, -6, 14, null, false, false, true),
      new Move("Wing Cross", "3AA", "ML", 26, -12, "KND", "KND", null, null, false, false, true),

      new Move("Knee Slicer", "2A", "S", 12, -6, 4, 4, 12, null, false, false, true),
      new Move("Opening Treasure", "1A", "L", 24, -16, "KND", "KND", 32, "Breakable/Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Opening Treasure(far)", "1A", "L", 24, -16, -4, "KND", 12, null, false, false, false, false, false, false, true),

      new Move("Holding Treasure", "1a", "L", 24, -16, "KND", "KND", 46, "Breakable/Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Holding Treasure(far)", "1a", "L", 24, -16, -4, "KND", 12, null, false, false, false, false, false, false, true),

      new Move("Shadow Step Slice", "4A", "L", 26, -18, -6, -6, 14),
      
      new Move("Knee Slicer", "CA", "S", 12, -6, 4, 4, 12, null, false, false, true),
      new Move("Hilt Kick", "C3A", "M", 14, -12, 0, 0, 10),
      new Move("Hilt Kick", "C3AK", "MH", 14, -6, 2, 2, 24),

      new Move("Twin Fang Strike", "WA", "M", 18, -4, 6, 6, 14),
      new Move("Twin Fang Strike", "WAA", "MM", 18, -8, 0, 0, 30),

      new Move("Divine Biting Strike", "8|9JA", "L", 36, -10, "KND", "KND", 24),
      new Move("Divine Biting Strike", "7JA", "L", 36, -16, -4, -4, 20),

      new Move("Reverse Dance Blade", "TA", "H", 20, -2, 8, 8, 16),
      new Move("Reverse Biting Snake", "T2A", "S", 16, -6, 4, 4, 18, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Assailing Arc", "B", "M", 20, -6, 2, 2, 14, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Assailing Arc", "BB", "MM", 20, -14, -6, "KND", 26, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Assailing Arc", "BBA", "MML", 20, -14, -14, "KND", 44, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Meteor Shower", "BBB", "MMM", 20, -16, "KND", "KND", 54),
      new Move("Retreating Divide", "B4B", "MH", 20, -14, 4, 4, 24),
      new Move("Retreating Divide ~ Lingering Step", "B4Bo", "MH", 20, null, null, null, null, null, true),

      new Move("Double Hilt", "x6", "HH", 16, -8, "KND", "KND", 32),
      new Move("Braided Spear", "6B", "M", 24, -12, "KND", "KND", 36, null, false, true),

      new Move("Strangling Slash", "6xA", "M", 28, -12, 0, 0, 20),
      new Move("Strangling Slash(far)", "6xA", "M", 28, -2, "KND", "KND", 28),

      new Move("Lifting Heavens", "3B", "M", 20, -14, "LNC", "LNC", 22),
      new Move("Lifting Heavens(far)", "3B", "M", 20, -14, "LNC", "LNC", 28),
      new Move("Thrust Kick", "3xK", "M", 14, -14, "KND", "KND", 20),
      new Move("Thrust Kick(fast)", "3xKF", "M", 14, -14, "KND", "KND", 28),

      new Move("Dancing Fang Sweep", "2B", "M", 18, -12, 2, 2, 10),
      new Move("Dancing Fang Sweep", "2BA", "ML", 18, -8, "KND", "KND", 40),
      new Move("Back Step Fang", "2BB", "MH", 18, -16, -2, -2, 20),
      new Move("Back Step Fang ~ Lingering Step", "2BBo", "MH", 18, null, null, null, 20, null, true),
      new Move("Spring Barrage", "2BK", "MM", 18, -8, "KND", "KND", 30),

      new Move("Lightning Fang", "1B", "L", 22, -20, -8, -8, 22, "Returns to crouching on G cancel", false, false, false, false, false, false, false, false, false, true),
      new Move("Lightning Fang(far)", "1B", "L", 22, -10, "KND", "KND", 34, "Returns to crouching on G cancel", false, false, false, false, false, false, false, false, false, true),

      new Move("Retreating Fang", "4B", "H", 16, -7, 5, 5, 18),
      new Move("Retreating Fang ~ Lingering Step", "4Bo", "H", 16, null, null, null, 18, null, true),

      new Move("Torrential Rush", "CB", "M", 18, -6, 2, 2, 20, null, false, false, true),
      new Move("Torrential Rush", "CBB", "ML", 18, -6, 4, 4, 42, null, false, false, true),

      new Move("Lifting Wing", "WB", "M", 18, -10, "LNC", "LNC", 22),
      new Move("Divine Lifting Heavens", "8|9JB", "M", -12, "LNC", "LNC", 25, null),
      new Move("Divine Lifting Heavens", "7JB", "M", -14, "KND", "KND", 25, null),

      new Move("Reverse Air Parting", "TB", "M", 22, -6, 6, 6, 20),
      new Move("Crouching Air Parting", "T2B", "M", 22, -8, 2, 2, 24, null, false, false, true)
    ],
    // Kicks
    [
      new Move("Snap Kick", "K", "H", 12, -8, 0, 0, 14, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Banishment Kick", "6K", "M", 24, -14, "KND", "KND", 24, "GI vs. high & mid vertical(except kicks)", false, false, false, true),
      
      new Move("Belly Crush Spin Kick", "3K", "M", 14, -12, -4, -4, 10),
      new Move("Belly Crush Spin Kick", "3KK", "MH", 14, -8, 0, 0, 24),
      new Move("Earth Kick", "2K", "L", 16, -14, -4, -4, 16, null, false, false, true),
      new Move("Rock Breaker", "1K", "L", 22, -18, -6, -6, 24),

      new Move("Check Mate", "4K", "M", 22, -14, 0, 0, 10, "GI vs. high & mid horizontal(except kicks)/Can be delayed", false, false, false, true),
      new Move("Check Mate", "4KB", "MM", 22, -14, 0, 0, 22, "GI vs. high & mid horizontal(except kicks)/Can be delayed", false, false, false, true),
      
      new Move("Earth Kick", "CK", "L", 16, -14, -4, -4, 14, null, false, false, true),
      new Move("Liquid Rising", "C1K", "L", 22, -24, "KND", "KND", 15),
      new Move("Liquid Rising", "C1KK", "LM", 22, -14, 0, 0, 22),

      new Move("Shattering Kick", "WK", "M", 12, -16, "KND", "KND", 20),
      new Move("Giant Rising Kick", "8|9JK", "M", 18, -8, 0, 0, 20),
      new Move("Giant Rising Kick", "7JK", "M", 18, -14, -8, -8, 20),

      new Move("Reverse Snap Kick", "TK", "H", 14, -16, 4, 4, 18),
      new Move("Reverse Earth Kick", "T2K", "L", 18, -14, -4, -4, 16, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Roaring Heaven", "A+B", "M", 38, 6, "LNC", "LNC", 36, null, false, true, false, false, false, false, false, true),
      new Move("Iron Chin Strike", "6A+B", "H", 18, -14, -4, -4, 26),
      new Move("Sweeping Blade", "2A+B", "L", 36, 4, "KND", "KND", 30, "Returns to crouching on G cancel", false, true, false, false, false, false, false, true, false, true),
      
      new Move("Dancing Crane", "4A+B", "MMMM", 16, -8, 0, 0, 20, null, false, false, false, false, false, false, false, true, false, true),
      new Move("Dancing Crane", "4A+BA", "MMMH", 16, -8, 2, 2, 35, null, false, false, false, false, false, false, false, true, false, true),
      new Move("Dancing Crane", "4A+BAB", "MMMHM", 16, 4, "KND", "KND", 70, null, false, false, false, false, false, false, false, true, false, true),
      new Move("Heavy Crane", "4A+BA+B", "MMMMMMMM", 16, -8, 2, 2, null),

      new Move("Seong's Crushing Long Blade", "9A+B", "M", 84, "KND", "KND", "KND", 100, null, false, false, false, false, false, false, false, false, true),
      new Move("Seong's Quick Long Blade", "9A+BB", "M", 87, 14, "KND", "KND", 60, null, false, true, false, false, false, false, false, true),
      new Move("Seong's Quick Long Blade ~ Lingering Step", "9z+xG", null, null, null, null, null, null, null, true),

      new Move("Radiant Wing", "8A+B", "M", 18, -20, "KND", "KND", 35),
      new Move("Heaven's Wheel", "B+K", "MM", 24, -20, "KND", "KND", 42),
      new Move("Fang Barrage", "6B+K", "MMMMM", 18, -14, "KND", "KND", 52),
      new Move("Shadow Fang", "2B+K", "L", 24, -16, -2, "KND", 18),
      new Move("Retreating Sands", "4B+K", "MMM", 36, -6, "KND", "KND", 30, "GI vs. high & mid vertical(except kicks)", false, false, false, true),
      new Move("Celestial Kick ~ Lingering Step", "WB+K", "MM", 20, -37, "LNC", "LNC", 28, null, true, true),

      new Move("Leaping Horse Vault", "8B+K", "M", 22, -14, 2, 2, 16),
      new Move("Leaping Horse Vault", "8B+KB", "MM", 22, -14, 2, 2, 26),
      new Move("Leaping Horse Vault", "8B+KBB", "MMM", 22, -12, 4, 4, 46),
      new Move("Leaping Horse Vault", "8B+KBBj", "MMM", 22, -12, 4, 4, 46),
      new Move("Transformed Heavens", "TB+K", "M", 18, -8, "LNC", "LNC", 22)
    ],
    // 8-Way Run Moves
    [
      new Move("Circular Heaven Slash", "#|^|(A", "M", 18, -8, 2, 2, 20, null, false, false, true),

      new Move("Heavy Willow Divide", "@|*A", "M", 22, -16, -4, -4, 15),
      new Move("Heavy Willow Divide", "@|*AA", "MM", 22, -12, "KND", "KND", 31),

      new Move("Sparrow Sweep", "!|uA", "L", 28, -14, 0, 0, 15),
      new Move("Root Fang", "$A", "L", 28, -16, -6, -6, 18, null, false, true),

      new Move("Lightning Thrust", "#|^|(B", "M", 18, -12, 4, 4, 22),
      new Move("Lightning Thrust(hold)", "#|^|(b", "M", 20, -4, "KND", "KND", 35),

      new Move("Sky Blossom", "@|*B", "M", 20, -17, "LNC", "LNC", 32),
      new Move("Lightning Fang", "!|uB", "L", 22, -20, -8, -8, 22, "Returns to crouching on G cancel", false, false, false, false, false, false, false, false, false, true),
      new Move("Top Hammer Fang", "$B", "M", 34, 2, "KND", "KND", 20, null, false, false, true),

      new Move("Circular Heaven Spin Kick", "#|^|(K", "M", 22, -10, 2, 2, 10),
      new Move("Circular Heaven Spin Kick", "#|^|(KK", "MM", 22, -14, -4, -4, 20),
      new Move("Circular Heaven Spin Kick", "#|^|(KKK", "MMH", 22, -8, 8, "STN", 34),

      new Move("Thunder Kick", "@|*K", "M", 30, 0, "KND", "KND", 30),
      new Move("Circular Blade Kick", "!|$|uK", "M", 26, -12, 8, 8, 32, null, false, true),
      new Move("Spinning Divide", "#|^|(A+B", "M", 28, -8, "KND", "KND", 40),
      new Move("Seong's Diamond Crusher", "!|$|uA+B", "M", 40, -2, "LNC", "LNC", 42, null, false, true),
      new Move("Jagged Comet Blade", "#|^|(B+K", "MM", 18, -22, "KND", "KND", 32, null, false, false, true),
      new Move("Jagged Comet Blade", "#|^|(b+k", "MMS", 18, -2, "LNC", "LNC", 47, null, false, false, true),

      new Move("Glory Wing", "!|$|uB+K", "M", 38, -6, "KND", "KND", 30),
      new Move("Talon Rush", "!|$|ub+k", "M", null, 8, "KND", "KND", 40, null, false, false, false, false, false, false, false, true),

      new Move("Sliding", "RK", "L", 12, -22, "KND", "KND", 22)
    ],
    // Throws
    [
      new Move("Crushing Soul", "A+G", "H", 18, null, "KND", "KND", 50, "Breakable", false, false, false, false, false, false, true),
      new Move("Dropping Embrace", "4A+G", "H", 18, null, "KND", "KND", 55, "Breakable", false, false, false, false, false, false, true),
      new Move("Riding Mustang", "ZA+G", "H", 18, null, "KND", "KND", 60, null, false, false, false, false, false, false, true),
      new Move("Mi-na Frankensteiner", "XA+G", "H", 18, null, "KND", "KND", 64, null, false, false, false, false, false, false, true),
      new Move("Stalk Cutter", "VA+G", "H", 18, null, "KND", "KND", 72, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Furious Swing", "46A+G", "H", 18, null, "KND", "KND", 0, "Breakable", false, false, false, false, false, false, true),
      new Move("Furious Swing ~ Stone Shock", "46A+GB", "M", 18, null, "KND", "KND", 30), // guard frames missing
      new Move("Furious Swing ~ Stone Shock", "46A+Gb", "M", 18, null, "KND", "KND", 40, null, false, false, false, false, false, false, false, true) // guard frames missing
    ],
    // ************ Stances *************
    // Lingering Step
    [
      new Move("Lingering Step", "B4Bv", null, null, null, null, null, null, null, true),
      new Move("Violet Squall", "[A", "H", null, null, null, null, null),
      new Move("Lightning Fang", "[B", "L", null, -20, null, null, null, "Returns to crouching on G cancel", false, false, false, false, false, false, false, false, false, true),
      new Move("Lightning Fang(far)", "[B", "L", null, -10, null, null, null, "Returns to crouching on G cancel", false, false, false, false, false, false, false, false, false, true),
      new Move("Spinning Storm Kick", "[K", "M", 36, 6, "KND", "KND", 35, null, false, false, false, false, false, false, false, true)
    ]
  ]

  Siegfried = [
    // Reversal Edge Attacks
    [
      new Move("Nightwalker", "B+G", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Nightwalker", "b+g", "M", null, null, null, null, null, "Shifts to clash upon hit or block", false, false, false, false, true, false, false, true),
      new Move("Anthem Slasher ~ Side Hold", "rA", "H", null, null, "KND", "KND", 22, null, true, true),
      new Move("Midnight Splitter", "rB", "M", 24, null, "LNC", "LNC", null, "Shifts to clash upon guard", false, true, false, false, false, false, false, true),
      new Move("Defiant Knee Stomp", "rKB", "MM", null, null, null, null, 33, null, false, true),
      new Move("Defiant Knee Stomp ~ Base Hold", "rKb", "MM", null, null, null, null, 33, null, true, true),
      new Move("Defiant Knee Stomp ~ Chief Hold", "rK", "M", null, null, null, null, 12, null, true, true),
      new Move("Defiant Knee Kick Rush", "rKK", "MH", null, null, null, null, 30, null, false, true),
      new Move("Defiant Knee Kick Rush ~ Chief Hold", "rKk", "MH", null, null, null, null, 30, null, true, true),
      new Move("Defiant Vortex", "SrKA+B", "MM", 10, null, "KND", "KND", 50, null, false, true, false, false, false, true, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Deep Scar", "A+B+K", "M", 20, -8, "KND", "KND", 88, "Progresses toward Dark Legacy", false, false, false, false, false, false, true, false, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Rising Hilt ~ Chief Hold", "Sx6B", "MM", 16, 4, "KND", "KND", 45, null, true, false, false, false, false, true, false, true),
      new Move("Brazen Splitter", "S4A+B+B", "MMM", 18, 2, "LNC", "LNC", null, null, false, false, false, false, false, true, false, true),
      new Move("Kaizer Charge ~ Chief Hold", "S#|^|(KB", "MM", 16, 4, "LNC", "LNC", null, null, true, false, false, false, false, true, false, true),
      new Move("Reborn Grinder", "S[K", "MMM", 16, 4, "KND", "KND", 68, null, false, false, false, false, false, true, false, true),
      new Move("Haunted Assault", "S]AA", "HH", 28, 2, "KND", "KND", 83, null, false, false, false, false, false, true, false, true),
      new Move("Kick Rush Vortex", "S{KA+B", "MM", 10, 2, "LNC", "LNC", 53, null, false, false, false, false, false, true, false, true),
    ],
    // Horizontal Moves
    [
      new Move("Progressive Step", "A", "H", 16, -8, 4, 4, 16, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Progressive Step", "AA", "HH", 16, -10, 4, 4, 30, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Progressive Step", "AAA", "HHH", 16, -12, "KND", "KND", 60, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Progressive Step ~ Side Hold", "a", "H", 16, -4, 6, 10, 16, null, true),
      new Move("Progressive Step ~ Chief Hold", "Az4", "H", 16, -6, 6, 10, 16, null, true),
      new Move("Slash Impact", "AAB", "HHL", 16, -10, "KND", "KND", 60),
      new Move("Slash Impact ~ Base Hold", "AAb", "HHL", 16, 6, "KND", "KND", 60, null, true),

      new Move("Agressive Onrush", "zB", "M", 18, -16, "KND", "KND", 26),
      new Move("Agressive Onrush(fast)", "zBF", "M", 18, -16, "KND", "KND", 30),
      new Move("Agressive Onrush ~ Base Hold", "zb", "M", 18, 2, "KND", "KND", 26, null, true),
      new Move("Agressive Onrush(fast) ~ Base Hold", "zbF", "M", 18, 2, "KND", "KND", 30, null, true),

      new Move("Quick Backspin Slash", "znA", "H", 16, 0, "KND", "KND", 28),
      new Move("Quick Backspin Slash(fast)", "znAF", "H", 16, 0, "KND", "KND", 36, null, false, true),
      new Move("Quick Backspin Slash ~ Reverse Side Hold", "zna", "H", 16, -8, "KND", "KND", 28, null, true),
      new Move("Quick Backspin Slash(fast) ~ Reverse Side Hold", "znaF", "H", 16, -8, "KND", "KND", 36, null, true),

      new Move("Nightbane Slasher", "6A", "H", 16, -12, 0, 0, 16),
      new Move("Nightbane Slasher", "6AA", "HH", 16, -2, "KND", "KND", 46),
      new Move("Shadow Strike", "6AB", "HM", 16, -16, "STN", "STN", 36),
      new Move("Nightbane Slasher ~ Reverse Side Hold", "6a", "H", 16, -4, 8, 8, 16, null, true),

      new Move("Armlet Crusher", "3A", "M", 20, -14, "KND", "KND", 26),
      new Move("Alternate Cross", "3a4", "M", 26, -8, "KND", "KND", 36),

      new Move("Leg Slash", "2A", "L", 20, -14, -6, -6, 14, null, false, false, true),

      new Move("Double Grounder Beta", "1A", "L", 28, -16, -4, -4, 16),
      new Move("Double Grounder Beta", "1AA", "LL", 28, -12, "KND", "KND", 39),

      new Move("Quick Spin Slash", "4A", "H", 14, -14, 2, "KND", 26),
      new Move("Quick Spin Slash ~ Side Hold", "4a", "H", 14, -10, 4, "KND", 26, null, true),

      new Move("Leg Slash", "CA", "L", 20, -14, -6, -6, 14, null, false, false, true),

      new Move("Maelstrom", "WA", "M", 18, -18, -8, -8, 20),
      new Move("Maelstrom", "WAA", "ML", 18, -24, "KND", "KND", 51),
      new Move("Maelstrom ~ Side Hold", "Wa", "M", 18, 0, 8, 10, 20, null, true),
      new Move("Maelstrom", "WAa2", "M", 18, -22, -12, -12, 20, null, false, false, true),

      new Move("Fatal Spin Slash", "7JA", "H", 28, -10, 0, 0, 22),
      new Move("Fatal Spin Slash", "8JA", "H", 28, -10, "KND", "KND", 25),
      new Move("Fatal Spin Slash", "9JA", "H", 28, -8, "KND", "KND", 28),

      new Move("Turning Head Slash", "TA", "H", 20, -8, 4, 4, 22),

      new Move("Turning Leg Slash", "T2A", "S", 22, -6, 4, 4, 22, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Castle Toppler", "B", "M", 16, -12, -2, -2, 16, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Castle Toppler", "BB", "MM", 16, -14, "KND", "KND", 49, null, false, false, false, false, false, false, false, false, false, true),

      new Move("Hilt Knocker", "x6", "M", 14, -16, 4, "STN", 20),

      new Move("Piercing Strike", "xnB", "M", 27, -14, "KND", "KND", 36),

      new Move("Illusion Rampart", "6B", "M", 22, -12, 2, "STN", 20),
      new Move("Illusion Rampart ~ Chief Hold", "6b", "M", 22, -4, 8, "STN", 20, null, true),
      new Move("Illusion Rampart", "6BB", "MM", 22, -12, "KND", "KND", 66),

      new Move("Sky Splitter", "3B", "M", 20, -20, "LNC", "SLC", 26, null, false, true),
      new Move("Sky Splitter ~ Chief Hold", "3b", "M", 20, -4, "LNC", "SLC", 26, "Doesn't launch on tip only hit", true, true),

      new Move("Shadow Buster", "2B", "M", 24, -8, 2, 2, 18, null, false, false, true),
      new Move("Shadow Buster ~ Base Hold", "2b", "M", 24, 2, 12, 12, 18, null, true),

      new Move("Grief Impact", "1B", "L", 30, -10, "KND", "KND", 30),
      new Move("Grief Impact ~ Base Hold", "1b", "L", 30, 6, "KND", "KND", 30, null, true),

      new Move("Thrust Throw", "4B", "M", 24, -16, "KND", "KND", 62, "Shifts to attack throw upon close-range hit", false, false, false, false, false, false, true),

      new Move("Earth Divide", "236B", "M", 66, null, "KND", "KND", 80, null, false, false, false, false, false, false, false, false, true, true),

      new Move("Split Buster", "CB", "M", 24, -8, 2, 2, 18, null, false, false, true),
      new Move("Split Buster ~ Base Hold", "Cb", "M", 24, 2, 12, 12, 18, null, true),

      new Move("Rising Splitter", "WB", "M", 16, -22, "LNC", "SLC", 34),
      new Move("Rising Splitter ~ Chief Hold", "Wb", "M", 16, -2, "LNC", "SLC", 34, null, true),

      new Move("Diving Splitter", "JB", "M", 42, -20, "LNC", "LNC", 25),
      new Move("Diving Splitter ~ Chief Hold", "Jb", "M", 42, null, "LNC", "LNC", 25, null, true),

      new Move("Turning Sword Thrust", "TB", "M", 26, -6, 4, 4, null),
      new Move("Turning Sword Thrust", "TBB", "ML", 26, -20, -2, -2, null),

      new Move("Turning Shadow Buster", "T2B", "M", 26, -8, 2, 2, null, null, false, false, true)
    ],
    // Kicks
    [
      new Move("Grief High Kick", "K", "H", 12, -8, 0, 0, 14, null, false, false, true),

      new Move("Grief Side Kick", "6K", "M", 18, -6, 4, "KND", 14),

      new Move("Axle Head Upper", "3K", "M", 14, -10, -2, -2, 16),
      new Move("Axle Head Upper", "3KK", "ML", 14, -18, -8, -8, 26),
      new Move("Axle Head Upper", "3KKK", "MLM", 14, -16, 0, 0, 46),

      new Move("Grief Low Kick", "2K", "L", 16, -14, -4, -4, 12, null, false, false, true),

      new Move("Grievance", "1K", "L", 18, -16, -8, -2, 18),
      new Move("Grievance ~ Chief Hold", "1k", "L", 20, -4, 2, 8, 18, null, true),

      new Move("Spin Slash Double Grounder", "4K", "H", 22, -3, 4, 4, 20),
      new Move("Spin Slash Double Grounder", "4KA", "HH", 22, -8, 2, 2, 35),
      new Move("Spin Slash Double Grounder ~ Chief Hold", "4Ka", "HH", 22, -2, 8, 8, 35, null, true),
      new Move("Spin Slash Double Grounder", "4KAA", "HHL", 22, -8, 2, "KND", 55),
      new Move("Spin Slash Double Grounder", "4KAAA", "HHLL", 22, -18, "KND", "KND", 90),
      new Move("Spinning Cross Combo", "4KAB", "HHM", 22, -10, "KND", "KND", 71),

      new Move("Spin Kick Combo", "4KK", "HM", 22, -12, 4, "KND", 42),

      new Move("Stomping", "236K", "L", 20, -18, -6, -6, 12),
      new Move("Stomping", "236KK", "LL", 20, -18, -9, -9, 22),
      new Move("Stomping", "236KKK", "LLL", 20, null, null, null, 26),
      new Move("Stomping", "236KKKK", "LLLL", 20, null, null, null, 30),
      new Move("Stomping", "236KKKKK", "LLLLL", 20, null, null, null, 42),

      new Move("Grief Low Kick", "CK", "L", 16, -12, -4, -4, 12, null, false, false, true),

      new Move("Rising Night Kick", "WK", "MM", 12, -12, 2, 2, 26),

      new Move("Diving Axle Headbutt", "JK", "L", 36, -16, -1, -1, null),
      new Move("Diving Axle Headbutt", "JKK", "LM", 36, -16, 0, null, null),

      new Move("Turning Grief High Kick", "TK", "H", 14, -8, 2, 2, null),

      new Move("Turning Grief Low Kick", "T2K", "L", 18, -12, -4, -4, null, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Anthem Slasher ~ Side Hold", "A+B", "HS", 40, 4, "KND", "KND", 45, null, true, true, false, false, false, false, false, true),
      new Move("Grim Omen", "6A+B", null, null, null, null, null, null, "GI vs. high, mid & low/Progresses toward Dark Legacy", false, false, false, true),
      new Move("Soul Wave: Epitaph", "6A+B", "MMMM", null, 2, "KND", "KND", 40, "During Dark Legacy/GI vs. high, mid & low", false, false, false, true, false, false, false, true),
      new Move("Flying Edge", "2A+B", "M", 28, -16, "KND", "KND", 48, null, false, false, true),
      new Move("Blaze Wind ~ Side Hold", "4A+B", "MMM", 18, 0, 10, 10, 48, null, true),
      new Move("Blaze Storm", "4A+BA", "MML", 18, -22, 6, 6, 62),
    ],
    // 8-Way Run Moves
    [
      new Move("Rebuff Turn Slash", "#|^|(A", "H", 34, 2, "KND", "KND", 42, "GI vs. horizontal(except kicks)(frame 6-14)", false, false, false, true, false, false, false, true),
      new Move("Rebuff Turn Slash ~ Base Hold", "#|^|(a", "H", 34, 12, "KND", "KND", 42, "GI vs. horizontal(except kicks)(frame 6-14)", true, false, false, true, false, false, false, true),

      new Move("Memento Slap", "@|*A", "M", 26, -8, "KND", "KND", 32),

      new Move("Backspin Slash", "!|$|uA", "H", 34, 2, "KND", "KND", 32),
      new Move("Backspin Slash ~ Reverse Side Hold", "!|$|ua", "H", 34, -6, "KND", "KND", 32, null, true),

      new Move("Rook Splitter", "^B", "M", 30, -22, "KND", "STN", 42, null, false, false, true),

      new Move("Cloud Splitter", "#|(B", "M", 18, -20, "LNC", "SLC", 30),
      new Move("Cloud Splitter ~ Chief Hold", "#|(b", "M", 18, -4, "LNC", "SLC", 30, null, true),

      new Move("Armor Breaker", "@|*B", "M", 22, -12, 0, 0, 16),
      new Move("Armor Breaker ~ Base Hold", "@|*b", "M", 22, 0, 12, 12, 16, null, true),
      new Move("Armor Breaker", "@|*BB", "MM", 22, -14, -2, -2, 32),
      new Move("Armor Breaker", "@|*BBB", "MMM", 22, 2, "LNC", "LNC", 62, null, false, false, false, false, false, false, false, true),
      new Move("Armor Breaker ~ Chief Hold", "@|*BBb", "MMM", 22, 2, "LNC", "LNC", 62, null, true, false, false, false, false, false, false, true),
      new Move("Break Kick", "@|*BBK", "MMH", 22, -2, "KND", "KND", 52),

      new Move("Fatal Dive", "!|$|uB", "M", 38, -14, "STN", "STN", 32),
      new Move("Fatal Dive ~ Base Hold", "!|$|ub", "M", 38, 6, "STN", "STN", 32, null, true),
      new Move("Fatal Dive", "!|$|uBB", "MM", 38, 2, "LNC", "LNC", 54, null, false, false, false, false, false, false, false, true),
      new Move("Fatal Dive ~ Chief Hold", "!|$|uBb", "MM", 38, 4, "LNC", "LNC", 54, null, true, false, false, false, false, false, false, true),
      new Move("Fatal Dive ~ Chief Hold", "!|$|uxG", null, null, null, null, null, null, null, true),

      new Move("Ascending Kick", "#|^|(K", "M", 16, -10, 6, 6, 22),
      new Move("Ascending Kick", "#|^|(KK", "MH", 16, 0, "KND", "KND", 50),

      new Move("Grievous Low Kick", "@|*K", "L", 20, -18, -4, -4, 20, null, false, false, true),
      new Move("Grievous Low Kick ~ Base Hold", "@|*k", "L", 20, -12, 4, 4, null, null, true),

      new Move("Drop Kick", "!|$|uK", "H", 30, -11, "KND", "KND", 50, "Returns to downed position"),

      new Move("Schwarz Drive", "#|^|(A+B", "MM", 20, -16, "KND", "KND", 43, "Can be held", false, true),
      new Move("Schwarz Drive(hold)", "#|^|(a+b", "MM", 20, -6, "KND", "KND", 45, null, false, true),

      new Move("Sliding", "RK", "L", null, -18, "KND", "KND", 26)
    ],
    // Throws
    [
      new Move("Hilt Impact", "A+G", "H", 18, null, "KND", "KND", 45, "Breakable", false, false, false, false, false, false, true),
      new Move("Lingering Regret", "4A+G", "H", 18, null, "KND", "KND", 50, "Breakable", false, false, false, false, false, false, true),
      new Move("Calamity Fall", "ZA+G", "H", 18, null, "KND", "KND", 62, null, false, false, false, false, false, false, true),
      new Move("Silent Pride", "XA+G", "H", 18, null, "KND", "KND", 57, null, false, false, false, false, false, false, true),
      new Move("Neutral Judge", "VA+G", "H", 18, null, "KND", "KND", 72, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Nightmare Killer", "6A+G", "H", 18, null, "KND", "KND", 50, "Breakable", false, true, false, false, false, false, true),
      new Move("Flap Jack", "3A+G", "L", 18, -16, "KND", "KND", 30, "Breakable", false, false, false, false, false, false, true),
      new Move("Over Toss", "1A+G", "L", 18, -16, "KND", "KND", 30, "Breakable", false, false, false, false, false, false, true)
    ],
    // ************ Stances *************
    // Base Hold
    [
      new Move("Base Hold", "B+K", null, null, null, null, null, null, "GI vs. middle, low horizontal(except kicks)", true, false, false, true),
      new Move("Reborn Storm", "[A", "L", 28, -22, "KND", "KND", 26),
      new Move("Reborn Storm", "[z2", null, null, null, null, null, null, null, false, false, true),
      new Move("Reborn Kaiser", "[B", "M", 34, -6, "SLC", "SLC", 28, null, false, true),
      new Move("Reborn Basher", "[K", "M", 16, -16, "KND", "KND", 20),
      new Move("Landing Slasher", "[A+B", "L", 36, -8, "KND", "KND", 48),

      new Move("Landing Slasher ~ Reverse Side Hold", "[z+xG", null, null, null, null, null, null, null, true),
      new Move("Base Hold ~ Reverse Side Hold", "[6B+K", null, null, null, null, null, null, null, true),
      new Move("Base Hold ~ Chief Hold", "[2|8B+K", null, null, null, null, null, null, null, true),
      new Move("Base Hold ~ Side Hold", "[4B+K", null, null, null, null, null, null, null, true)
    ],
    // Reverse Side Hold
    [
      new Move("Reverse Side Hold", "6B+K", null, null, null, null, null, null, null, true),
      new Move("Geist Slasher", "]A", "H", 28, -2, "KND", "KND", 36),
      new Move("Geist Strike", "]B", "M", 18, -22, "STN", "STN", 30, null, false, true),
      new Move("Geist Spinning Low Kick", "]K", "L", 20, -20, "STN", "STN", 20, null, false, true),
      new Move("Geist Spinning Low Kick ~ Reverse Side Hold", "]k", "L", 20, -4, "STN", "STN", 20, null, null, true, true),
      new Move("Fiend Shatter", "]A+B", "M", 30, -10, "KND", "KND", 48, null, false, false, true),

      new Move("Reverse Side Hold ~ Reverse Side Hold", "]6B+K", null, null, null, null, null, null, null, true),
      new Move("Reverse Side Hold ~ Chief Hold", "]2|8B+K", null, null, null, null, null, null, null, true),
      new Move("Reverse Side Hold ~ Side Hold", "]4B+K", null, null, null, null, null, null, null, true),
      new Move("Reverse Side Hold ~ Base Hold", "]B+K", null, null, null, null, null, null, null, true)
    ],
    // Chief Hold
    [
      new Move("Chief Hold", "2|8B+K", null, null, null, null, null, null, null, true),
      new Move("Chief Hold", "TB+K", null, null, null, null, null, null, "GI vs. horizontal(except kicks)", true, false, false, true),

      new Move("Terror Circular", "{A", "HM", 16, -2, 8, 8, 40),
      new Move("Terror Circular ~ Side Hold", "{a", "H", 16, -2, 6, 6, 20, null, true),
      new Move("Terror Circular", "{AA", "HL", 16, -22, -2, "KND", 50),
      new Move("Terror Circular ~ Reverse Side Hold", "{Aa", "HL", 16, -5, 15, 15, 30, null, true),

      new Move("Terror Stomper", "{B", "M", 18, -2, "STN", "STN", 42, null, false, true),
      new Move("Terror Stomper", "{b", "M", null, 4, "LNC", "LNC", 60, null, false, true, false, false, false, false, false, true),

      new Move("Terror Knee Stomp ~ Chief Hold", "{K", "M", 10, -6, 6, 6, 12, null, true),
      new Move("Terror Knee Stomp", "{KB", "MM", 10, -14, "STN", "STN", 37),
      new Move("Terror Knee Stomp ~ Base Hold", "{Kb", "MM", 10, -2, "STN", "STN", 24, null, true),
      new Move("Terror Knee Kick Rush", "{KK", "MH", 10, -14, "KND", "STN", 34),
      new Move("Terror Knee Kick Rush ~ Chief Hold", "{Kk", "MH", 10, -4, "KND", "STN", 46, null, true),

      new Move("Terror Slap", "{A+B", "H", 24, 2, "KND", "KND", 46, null, false, false, false, false, false, false, false, true),

      new Move("Chief Hold ~ Reverse Side Hold", "{6B+K", null, null, null, null, null, null, null, true),
      new Move("Chief Hold ~ Chief Hold", "{2|8B+K", null, null, null, null, null, null, null, true),
      new Move("Chief Hold ~ Side Hold", "{4B+K", null, null, null, null, null, null, null, true),
      new Move("Chief Hold ~ Base Hold", "{B+K", null, null, null, null, null, null, null, true)
    ],
    // Side Hold
    [
      new Move("Side Hold", "4B+K", null, null, null, null, null, null, null, true),

      new Move("Double Grounder Alpha", "}A", "L", 22, -12, 0, 0, 20),
      new Move("Double Grounder Alpha ~ Reverse Side Hold", "}a", "L", 22, -14, 8, 8, 20, null, true),
      new Move("Double Grounder Alpha", "}AA", "LL", 22, -14, "KND", "KND", 50),
      
      new Move("Phantom Castling", "}B", "M", 26, -18, "STN", "STN", 26),
      new Move("Phantom Castling", "}BB", "MM", 26, -16, "STN", "STN", 47),
      new Move("Phantom Castling", "}BBB", "MMM", 26, 2, "LNC", "LNC", 62, null, false, false, false, false, false, false, false, true),
      new Move("Phantom Castling ~ Chief Hold", "}BBb", "MMM", 26, 4, "LNC", "LNC", 62, null, true, false, false, false, false, false, false, true),

      new Move("High Kick Beta", "}K", "H", 10, -14, "KND", "KND", 18),

      new Move("Shadow Slasher", "}A+B", "L", 22, -22, "STN", "STN", 40),

      new Move("Side Hold ~ Reverse Side Hold", "}6B+K", null, null, null, null, null, null, null, true),
      new Move("Side Hold ~ Chief Hold", "}2|8B+K", null, null, null, null, null, null, null, true),
      new Move("Side Hold ~ Side Hold", "}4B+K", null, null, null, null, null, null, null, true),
      new Move("Side Hold ~ Base Hold", "}B+K", null, null, null, null, null, null, null, true)
    ]    
  ]

  Sophitia = [
    // Reversal Edge Attacks
    [
      new Move("Holy Resonance", "B+G", "M", 46, -8, null, null, 30, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Holy Resonance", "b+g", "M", 64, null, null, null, 64, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      
      new Move("Celestial Blade", "rA", "H", null, -4, 8, 8, 20, null, false, true),
      new Move("Celestial Blade ~ Angel Step", "rA6", "H", null, 6, "STN", "STN", 20, null, true, true),
      new Move("Angel Vanguard", "rB", "MM", null, null, "LNC", "LNC", 21, "Shifts to clash upon guard", false, true, false, false, false, false, false, true),
      new Move("Spiritual Spin Kick", "rK", "M", null, -2, "KND", "KND", 10, null, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Providential Thunder", "A+B+K", "M", 16, -16, "KND", "KND", 80, null, false, false, false, false, false, false, true, false, false, true),
      new Move("Soul Charge", "4A+B+K", "m", 6, 0, 8, 8, 0, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Cutlass Empyrean", "S4AB", "HM", 18, 2, "KND", "KND", 55, "1st hit can be held", false, false, false, false, false, true, false, true),
      new Move("Mystic Sword Rain", "SBBBB", "MMMMM", 14, 2, "KND", "KND", 85, null, false, false, false, false, false, true, false, true),
      new Move("Guardian Punisher", "S2|CBB", "MM", 16, -8, "KND", "KND", 53, "Can shift to Seraphim Punisher upon hit", false, false, false, false, false, true),
      new Move("Temporal Punisher", "SB+KB", "MM", 26, -8, "KND", "KND", 55, "Can shift to Seraphim Punisher upon hit", false, false, false, false, false, true),
      new Move("Twin Step Sword Rain", "S#|$|u4A+BB", "MMM", 20, 2, "KND", "KND", 66, null, false, false, false, false, false, true, false, true),
      new Move("Mirage Cross", "S$AB", "MM", 24, 4, "LNC", "LNC", 59, null, false, false, false, false, false, true, false, true),
      new Move("Sun's Corona", "S[AAB", "MLM", 19, 4, "KND", "KND", 56, null, false, false, false, false, false, true, false, true),
      new Move("Angel Punisher", "S[B", "M", 14, -21, "KND", "KND", 33, null, false, false, false, false, false, true),
      new Move("Angel Punisher(fast)", "S[BF", "M", 14, -21, "KND", "KND", 39, null, false, false, false, false, false, true),
      new Move("Painful Fate", "S[Bv4", "M", 14, -21, "KND", "KND", 35, null, false, false, false, false, false, true, true),
      new Move("Heaven's Rapture", "S[BvB", "M", 14, -21, "KND", "KND", 30, null, false, false, false, false, false, true, true),
      new Move("Seraphim Punisher", "S]B", "M", 16, -8, "KND", "KND", 44, null, false, true, false, false, false, true),
      new Move("Angel Arc", "S]Bv4", "M", 14, -21, "KND", "KND", 38, null, false, false, false, false, false, true, true),
      new Move("Heaven's Rapture", "S]BvB", "M", 14, -21, "KND", "KND", 28, null, false, false, false, false, false, true, true)
    ],
    // Horizontal Moves
    [
      new Move("Starlight Blade", "A", "H", 12, -8, 2, 2, 8, null ,false, false, false, false, false, false, false, false, false, true),
      new Move("Starlight Blade", "AA", "HH", 12, -8, 2, 2, 18, null ,false, false, false, false, false, false, false, false, false, true),
      new Move("Starlight Blade", "AAA", "HHH", 12, -4, 6, 6, 43, null ,false, false, false, false, false, false, false, false, false, true),
      new Move("Starlight Blade ~ Angel Step", "AAA6", "HHH", 12, -2, 8, 8, 43, null, true),
      new Move("Slide Tornado", "AK", "HL", 12, -2, 8, 8, 18),

      new Move("Roaring Stream", "6A", "H", 22, -8, 0, 0, 12, "GI vs. low attacks", false, false, true, true),
      new Move("Roaring Stream", "6AA", "HL", 22, -10, -2, -2, 30, "GI vs. low attacks", false, false, true, true),
      new Move("Roaring Stream ~ Angel Step", "6AA6", "HL", 22, -2, 6, 6, 30, "GI vs. low attacks", true, false, false, true),

      new Move("Angel Punisher", "3A", "M", 19, -14, -2, -2, 22),
      new Move("Under Slide Blade", "2A", "S", 13, -6, 6, 6, 10, null, false, false, true),

      new Move("Iron Butterfly", "1A", "L", 28, -16, -6, -6, 14),
      new Move("Iron Butterfly", "1AA", "LM", 28, -24, "KND", "KND", 40),

      new Move("Cutlass Europa", "4A", "H", 18, -10, 4, 4, 18),
      new Move("Cutlass Europa", "4a", "H", 38, -2, "STN", "STN", 30),
      new Move("Cutlass Europa", "4AA", "HL", 18, -16, "KND", "KND", 33),
      new Move("Cutlass Europa", "4AAA", "HLM", 18, -24, "KND", "KND", 53),
      new Move("Cutlass Europa", "4aAAA", "HLML", 38, -16, "KND", "KND", 38),
      new Move("Cutlass Seraphim", "4AB", "HM", 18, -16, "KND", "KND", 38),
      new Move("Cutlass Seraphim", "4aB", "HM", 74, null, null, null, 51),

      new Move("Under Slide Blade", "CA", "S", 13, -6, 6, 6, 10, null, false, false, true),
      new Move("Full Turn Blade", "WA", "M", 16, -10, 4, 4, 18),
      new Move("Jumping Mirage Satellite", "JA", "H", 16, -8, "KND", "KND", 35),
      new Move("Turning Slide Blade", "TA", "H", 14, -4, 7, 7, 12),
      new Move("Turning Under Stream", "T2A", "S", 16, -4, 6, 6, 14, null, false, false, true),
    ],
    // Vertical Moves
    [
      new Move("Divine Mist", "B", "M", 14, -6, 0, 0, 14, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Divine Mist", "BB", "MM", 14, -8, 2, 2, 28, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Divine Mist", "BBB", "MMMM", 14, -6, "KND", "KND", 58, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Angel's Flow", "BK", "MH", 14, null, null, null, 32),

      new Move("Ascetic's Force", "6B", "M", 20, -10, -2, 4, 14, "GI vs. mid verticals(except Kicks, thrusting attacks)", false, false, false, true),
      new Move("Ascetic's Force", "6BA", "MM", 20, -13, 10, 10, 30, "GI vs. mid verticals(except Kicks, thrusting attacks)", false, false, false, true),
      
      new Move("Ascetic's Blade", "6xA", "M", null, -13, "STN", "STN", 24, "GI vs. mid verticals(except Kicks, thrusting attacks)", false, false, false, true),
      
      // B only version missing
      new Move("Press the Hilt", "6BB", "MM", 20, -8, 4, 4, 30, "GI vs. mid vericals(except kicks)", false, false, false, true),

      new Move("Paladin Purifier", "3B", "M", 20, -16, "LNC", "LNC", 22),

      new Move("Guardian Strike", "2B", "M", 16, -10, 0, 0, 14, "Can shift to Angel Strike upon hit"),
      new Move("Guardian Strike", "2BB", "MM", 16, -21, "KND", "KND", 36, "Can shift to Angel Strike upon hit"),
      new Move("Guardian Spear Kick", "2BK", "MH", 16, -13, 10, "KND", 34, null, false, true),

      new Move("Nasty Impale", "1B", "L", 20, -14, -4, "KND", 10),
      // BB only version missing
      // BBB only version missing
      new Move("Nasty Impale", "1BBBB", "LLLL", 20, -14, -4, "KND", 34),

      new Move("Sword Shower", "4B", "M", 18, -2, 4, 4, 20),

      new Move("Guardian Strike", "CB", "M", 16, -10, 0, 0, 14, "Can shift to Angel Strike upon hit"),
      new Move("Guardian Strike", "CBB", "MM", 16, -20, "KND", "KND", 36, "Can shift to Angel Strike upon hit"),
      new Move("Guardian Spear Kick", "CBK", "MH", 16, -12, 10, "KND", 34, null, false, true),

      new Move("Under Splash", "C3B", "M", 16, -8, 2, 2, 18, null, false, false, true),
      new Move("Exile", "WB", "M", 14, -6, 4, 4, 20),
      new Move("Divine Exile", "JB", "M", 38, -4, "KND", "KND", 18),
      new Move("Turning Sword Splash", "TB", "M", 16, -8, 6, 6, 18),
      new Move("Turning Under Splash", "2TB", "M", 18, -6, 4, 4, 20, null, false, false, true)
    ],
    // Kick Moves 
    [
      new Move("Kick Duo", "K", "H", 12, -10, -2, -2, 14, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Kick Duo", "KK", "HM", 12, -6, 2, 2, 24, null, false, false, false, false, false, false, false, false, false, true),
      
      new Move("Holy Punishment", "6K", "M", 16, -6, 6, "KND", 20),
      new Move("Flapping Heel Kick", "3K", "M", 14, -6, 4, 4, 14),
      new Move("Spring Under Kick", "2K", "L", 16, -14, -2, -2, 12, null, false, false, true),

      new Move("Tornado Low Kick", "1K", "L", 21, -14, -2, "KND", 20),
      new Move("Tornado Low Kick", "1k", "L", null, -6, "KND", "KND", 30, null, false, true),

      new Move("Rising Temple", "4K", "H", 14, -2, 8, 8, 20),
      new Move("Spring Under Kick", "CK", "L", 16, -14, -2, -2, 12, null, false, false, true),
      new Move("Angel's Spring", "WK", "MM", 16, -2, 8, 8, 20),
      new Move("Holy Crest Kick", "JK", "M", 22, -6, 6, 6, 18),
      new Move("Turning Holy High Kick", "TK", "H", 16, -4, 2, 2, 18),
      new Move("Turning Angel Sweep", "T2K", "L", 18, null, null, null, 16, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Elk Strike", "A+B", "M", 43, 8, "KND", "KND", 35, null, false, true, false, false, false, false, false, true),

      new Move("El Fortune", "6A+B", null, null, null, null, null, null, "GI vs mid attacks", false, false, false, true),
      new Move("Spinning Hilt", "6A+BI", "H", null, null, null, null, 10, "On GI horizonal"),
      new Move("Guardian's Judgment", "6A+BI", "MMM", null, null, null, null, 58, "On GI vertical"),
      new Move("Tornado High Kick", "6A+BI", "H", null, null, null, null, 18, "On GI kick"),

      new Move("Angel Fall", "8A+B", "m", 40, -16, "KND", "KND", 40, "Becomes a low when at distance"),
      new Move("Angel Fall", "8a+b", "m", 60, null, "KND", "KND", 60, "Becomes a low when at distance", false, false, false, false, false, false, false, false, true),
      
      new Move("Twin Step Grace", "4A+B", "MM", 18, -6, "KND", "KND", 30),

      new Move("Temperance Strike", "B+K", "M", 26, -12, 0, 0, 16, "Can shift to Angel Strike upon hit"),
      new Move("Temperance Strike", "B+KB", "MM", 26, -20, "KND", "KND", 38, "Can shift to Angel Strike upon hit"),
      new Move("Quick Strike", "6B+K", "M", 18, -10, 2, "KND", 26),

      new Move("Angel Stroke", "8B+K", "MM", 30, -14, -4, "KND", 20),
      new Move("Angel Stroke", "8B+KA", "MML", 30, -16, "KND", "KND", 40),
      new Move("Angel Stroke", "8B+KAB", "MMLM", 30, -18, "KND", "KND", 65),
      new Move("Angel Fall", "8B+KB", "MMM", 30, 2, "KND", "KND", 60),
      new Move("Angel's Sault", "8B+KK", "MMM", 30, -14, "KND", "KND", 42),

      new Move("Heaven's Gate", "4B+K", "M", null, null, "LNC", "LNC", 50, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Dawn of Eos", "WB+K", "HM", 12, -6, "KND", "KND", 30),
      new Move("Hip Charge", "TB+K", "M", 16, -8, 8, 8, 24)
    ],
    // 8-Way Run Moves
    [
      new Move("Silent Cross", "#|^|(A", "M", 18, -13, 6, 6, 26),
      new Move("Shield Rush", "@A", "H", null, -6, "KND", "KND", 28),
      new Move("Inverse Shield Rush", "*A", "H", null, -6, 4, "LNC", 28),
      
      new Move("Reverse Mirage", "$A", "M", 24, -6, 4, "LNC", 20),
      new Move("Reverse Mirage(counter)", "H$A", "MM", 24, null, null, "LNC", 42, "Follow-up attack upon counter hit"),
      new Move("Reverse Mirage ~ Angel Step", "$A6", "M", 24, -8, 2, "LNC", 20, null, true),

      new Move("Silent Stream", "!|uAA", "LM", null, -14, "KND", "KND", 40),
      new Move("Silent Stream", "!|uAa", "LM", null, null, "KND", "KND", 54, null, false, false, false, false, false, false, false, false, true),
      
      new Move("Olympus Cannon", "#|^|(B", "M", 24, -2, "LNC", "LNC", 31),

      new Move("Guardian's Judgment", "@|*B", "M", 14, -26, "KND", "KND", 20),
      new Move("Guardian's Judgment", "@|*BA", "MM", 14, -46, "KND", "KND", 27),
      new Move("Guardian's Judgment", "@|*BAK", "MMM", 14, -60, "KND", "KND", 47),
      
      new Move("Guardian Upper", "!|#|uB", "M", 22, -16, "LNC", "LNC", 30, null, false, true),
      new Move("Plasma Blade", "#|^|(K", "M", 16, -14, "LNC", "LNC", 16),
      new Move("Angel Side Kick", "@|*K", "M", 16, -8, 4, 4, 20),
      new Move("Tornado High Kick", "!|$|uK", "H", 28, 0, "LNC", "LNC", 25),
      new Move("Tornado Feint", "!|$|ukK", "M", 40, 4, "LNC", "LNC", 40),

      new Move("Lodestar Strike", "#|^|(A+B", "H", 18, -10, "KND", "KND", 40, null, false, true),
      new Move("Ascension", "@|*A+B", "M", null, -14, "LNC", "LNC", 21),
      new Move("Twin Step Grace", "!|$|uA+B", "MM", 20, -6, "KND", "KND", 40),

      new Move("Jet Stream Rush", "#|^|(B+K", "M", 24, -8, 0, 0, 14),
      new Move("Jet Stream Rush", "#|^|(B+KA", "MH", 24, -18, -2, -2, 20),
      new Move("Jet Stream Rush", "#|^|(B+KAB", "MHM", 24, -14, "LNC", "LNC", 36),
      new Move("Olympus Shower", "@|*|!|$|uB+K", "M", 26, -6, "KND", "KND", 34, null, false, true),
      new Move("Heaven's Arch", "#|^|(A+G", "H", 18, null, "KND", "KND", 55, "Breakable", false, true, false, false, false, false, true),
      new Move("Sliding", "RK", "L", null, null, null, null, 25)
    ],
    // Throws
    [
      new Move("Widow Maker", "A+G", "H", 18, null, "KND", "KND", 40, "Breakable", false, false, false, false, false, false, true),
      new Move("Widow Maker", "A+G@", "H", 18, null, "KND", "KND", 35, "Breakable", false, false, false, false, false, false, true),
      new Move("Holy Cracker", "4A+G", "H", 18, null, "KND", "KND", 40, "Breakable", false, false, false, false, false, false, true),
      new Move("Heaven To Hell", "4A+GA|4A", "H", 18, null, "KND", "KND", 65, null, false, false, false, false, false, false, true),
      new Move("Round Knocker", "ZA+G", "H", 18, null, "KND", "KND", 40, null, false, false, false, false, false, false, true),
      new Move("Broken Promise", "XA+G", "H", 18, null, "KND", "KND", 70, null, false, false, false, false, false, false, true),
      new Move("Bottoms Up", "VA+G", "H", 18, null, "KND", "KND", 35, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Heaven's Arch", "#|^|(A+G", "H", 18, null, "KND", "KND", 55, "Breakable", false, true, false, false, false, false, true),
    ],
    // ************ Stances *************
    // Angel Step
    [
      new Move("Angel Step", "236", null, null, null, null, null, null, null, true),

      new Move("Angel Satellite", "[A", "M", 19, -18, "KND", "KND", 20),
      new Move("Angel Satellite", "[AA", "ML", 19, -16, "KND", "KND", 39),
      new Move("Angel's Strike", "[B", "M", 14, -21, "KND", "KND", 30),
      new Move("Angel's Strike(fast)", "[BF", "M", 14, -21, "KND", "KND", 36),

      new Move("Painful Fate", "[Bv4", "M", 14, 21, "KND", "KND", 15, null, false, false, false, false, false, false, true),
      new Move("Painful Fate(just)", "[Bv4j", "M", 14, 21, "KND", "KND", 25, null, false, false, false, false, false, false, true),

      new Move("Heaven's Rapture", "[BvB", "M", 14, 21, "KND", "KND", 15, null, false, false, false, false, false, false, true),
      new Move("Heaven's Rapture(just)", "[BvBj", "M", 14, 21, "KND", "KND", 20, null, false, false, false, false, false, false, true),

      new Move("Holy Arrow Kick", "[K", "H", 14, -21, "KND", "KND", 20, null, false, true),
      new Move("Angel Step ~ Sidestep", "[2|8", null, null, null, null, null, null, "Can be shifted to during Angel Step", true)
    ],
    // Twin Angel Step
    [
      new Move("Twin Angel Step", "2366|23^", null, null, null, null, null, null, null, true),

      new Move("Seraphim Blade", "]A", "M", 19, -14, -4, "KND", 20, "Second hit can be delayed", false, false, true),
      new Move("Seraphim Blade", "]AA", "ML", 19, -12, 6, "STN", 46, "Second hit can be delayed", false, false, true),
      new Move("Seraphim Echo", "]AB", "MM", 19, 4, "KND", "KND", 58, null, false, true, false, false, false, false, false, true),

      new Move("Seraphim Strike", "]B", "M", 16, -14, "KND", "KND", 35, null, false, true),

      new Move("Painful Fate", "]Bv4", "M", 16, -21, "KND", "KND", 21, null, false, false, false, false, false, false, true),
      new Move("Angel Arc(just)", "]Bv4j", "M", 16, -21, "KND", "KND", 28, null, false, false, false, false, false, false, true),

      new Move("Heaven's Rapture", "]BvB", "M", 16, -21, "KND", "KND", 14, null, false, false, false, false, false, false, true),
      new Move("Heaven's Rapture(just)", "]BvBj", "M", 16, -21, "KND", "KND", 21, null, false, false, false, false, false, false, true),

      new Move("Tornado Feint", "]K", "M", 37, 4, "KND", "KND", 30)
    ]
  ]

  Taki = [
    // Reversal Edge Attacks
    [
      new Move("Blighted Leaves", "B+G", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Blighted Leaves", "b+g", "M", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Falling Leaf ~ Possession", "B+G4", null, null, null, null, null, null, null, true),
      new Move("Demon Oppressor", "rAAA", "HHSS", null, null, null, null, null, null, false, true),
      new Move("Demon Oppressor ~ Possession", "rAA4", "HH", null, null, null, null, null, null, true, true),
      new Move("Demon Oppressor ~ Wind Roll", "rAB+K", "H", null, null, null, null, null, null, true, true),
      new Move("Demon Oppressor ~ Gunpowder Plot", "rAb+k", "HH", null, null, null, null, null, null, false, true),
      new Move("Blazing Flame", "rB", "MM", null, null, null, null, null, "Shifts to clash upon guard", false, true, true, false, false, false, false, true),
      new Move("Death Dealer", "rK", "M", null, null, null, null, null, null, false, true, true)
    ],
    // Gauge Attacks
    [
      new Move("Fu-Ma Seal, Fatal Violet", "A+B+K", "M", null, null, null, null, null, "Dodges high, mid & low", false, false, false, false, false, false, true, false, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Rending Ninja Cannon: Imina", "SAAA+B", "HHS", null, null, null, null, null, null, false, false, true, false, false, true, false, true),
      new Move("Rending Ninja Cannon", "SAAA+BA", "HHSH", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Exorcising Blade", "SAAz+xA", "HHH", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Exorcising Blade ~ Possession", "SAAz+xA4", "HHH", null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Rapid Wing", "S6ABBBB", "HMMMM", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Midnight Stalker", "SWAAA", "MHM", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Wing Ninja Cannon: Imina", "S3BA+B", "MS", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Spectral Mist ~ Possession Rush", "S6A+B", "H", null, null, null, null, null, "Dodges high, mid & low", true, false, false, false, false, true, false, true),
      new Move("Spectral Mist ~ Possession", "S6A+B4", "H", null, null, null, null, null, null, true, false, false, false, false, true, false, true),
      new Move("Iron Seal", "S4A+B", "M", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Eraser Ninja Cannon: Imina", "S#|^|(AAA+B", "HHS", null, null, null, null, null, null, false, false, true, false, false, true, false, true),
      new Move("Eraser Ninja Cannon", "S#|^|(AAA+BA", "HHSH", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Target Takeout", "S#|^|(AAz+xA", "HHH", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Target Takeout ~ Possession", "S#|^|(AAz+xA4", "HHH", null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Mourning Gods", "S[B", "M", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Demon Purification", "S[6BAA", "MMM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Fallen Demon", "S[6A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, true, true)
    ],
    // Horizontal Moves
    [
      new Move("Barbed Blades", "AAA", "HHSH", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Shadow Ripper", "AAB", "HHM", null, null, null, null, null, null, false, false, true),
      new Move("Death Penalty", "AAK", "HHH", null, null, null, null, null),
      new Move("Shadow Shrine", "z6", "MM", null, null, null, null, null, null, false, true),
      new Move("Shadow Shrine", "z6j", "MM", null, null, null, null, null, null, false, true),
      new Move("Shadow Shrine ~ Wind Roll", "z6B+K", "MM", null, null, null, null, null, null, true, true),
      new Move("Shadow Shrine ~ Gunpowder Plot", "z6b+k", "MMH", null, null, null, null, null, null, false, true),
      new Move("Shadow Shrine ~ Distorted Breeze", "z62|8B+K", "MM", null, null, null, null, null, null, true, true),
      new Move("Lightning Scroll", "6AA", "HMM", null, null, null, null, null),
      new Move("Lightning Scroll ~ Possession", "6A4", "H", null, null, null, null, null, null, true),
      new Move("Burning Misery", "6ABBB", "HMMM", null, null, null, null, null),
      new Move("Wind Scroll", "3A", "M", null, null, null, null, null),
      new Move("Shadow Split", "2A", "S", null, null, null, null, null, null, false, false, true),
      new Move("Reaping Hook", "1A", "L", null, null, null, null, null, null, false, false, true),
      new Move("Divine Judgment", "4AK", "HMH", null, null, null, null, null),
      new Move("Divine Judgment ~ Possession", "4A4", "H", null, null, null, null, null, null, true),
      new Move("Divine Judgment ~ Possession", "4AK4", "HMH", null, null, null, null, null, null, true),
      new Move("Shadow Split", "CA", "S", null, null, null, null, null, null, false, false, true),
      new Move("Earth Scroll", "C3AK", "LL", null, null, null, null, null, null, false, false, true),
      new Move("Shadow Claw", "WAAA", "MHM", null, null, null, null, null),
      new Move("Shadow Claw ~ Possession", "WAA4", "MH", null, null, null, null, null, null, true),
      new Move("Falling Scroll", "JA", "L", null, null, null, null, null, null, false, false, true),
      new Move("Reverse Shadow", "TA", "H", null, null, null, null, null),
      new Move("Reverse Shadow Split", "T2A", "S", null, null, null, null, null, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Shadow Banishment", "BAK", "MHH", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Shadow Banishment ~ Possession", "BA4", "MH", null, null, null, null, null, null, true),
      new Move("Hidden Assassin", "BBB", "MMMM", null, null, null, null, null, null, false, false, true),
      new Move("Hidden Assassin ~ Possession", "BB4", "MM", null, null, null, null, null, null, true),
      new Move("Oppression", "BK", "MH", null, null, null, null, null, "Can be held"),
      new Move("Explosive Talisman", "6BB", "MMM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Spread Wing", "3B", "M", null, null, null, null, null),
      new Move("Spread Wing ~ Stalker", "3BB+K", "M", null, null, null, null, null, null, true),
      new Move("Vacuum", "2B", "M", null, null, null, null, null, null, false, false, true),
      new Move("Dark Slicer", "2BA", "MH", null, null, null, null, null),
      new Move("Dark Slicer ~ Mekki-Maru", "2xA", "H", null, null, null, null, null),
      new Move("Dark Slicer Feint ~ Possession", "2xA4", "H", null, null, null, null, null, null, true),
      new Move("Curse ~ Possession", "1B", "L", null, null, null, null, null, null, true),
      new Move("Lightning Scroll", "4BA", "MH", null, null, null, null, null),
      new Move("Lightning Scroll ~ Possession", "4BA4", "MH", null, null, null, null, null, null, true),
      new Move("Seal of the Fire Dragon", "41236B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Free Shadow", "CB", "M", null, null, null, null, null, null, false, false, true),
      new Move("Darkness Banishment", "WBB", "ML", null, null, null, null, null),
      new Move("Darkness Banishment ~ Stalker", "WBB+K", "M", null, null, null, null, null, null, true),
      new Move("Darkness Banishment", "JBB", "ML", null, null, null, null, null),
      new Move("Darkness Banishment ~ Stalker", "JBB+K", "M", null, null, null, null, null, null, true),
      new Move("Shadow Mekki-Maru", "TBA", "MH", null, null, null, null, null),
      new Move("Shadow Mekki-Maru ~ Possession", "TBA4", "MH", null, null, null, null, null, null, true),
      new Move("Darkness Shatter", "T2B", "M", null, null, null, null, null, null, false, false, true),
      new Move("Darkness Shatter ~ Possession", "T2B4", "M", null, null, null, null, null, null, true)
    ],
    // Kicks
    [
      new Move("Haste", "KKK", "HHH", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Haste ~ Possession", "KK4", "HH", null, null, null, null, null, null, true),
      new Move("Water Haste", "KK2K", "HHL", null, null, null, null, null, null, false, false, true),
      new Move("Thunder Fall Kick", "c2", "MM", null, null, null, null, null),
      new Move("Divine Punishment ~ Mekki-Maru", "6KA", "MH", null, null, null, null, null),
      new Move("Divine Punishment ~ Possession", "6KA4", "MH", null, null, null, null, null, null, true),
      new Move("Divine Kicker", "6KK", "MM", null, null, null, null, null),
      new Move("Rapid Destruction", "3KKK", "MMM", null, null, null, null, null),
      new Move("Rapid Destruction ~ Wind Roll", "3KKB+K", "MM", null, null, null, null, null, null, true),
      new Move("Rapid Destruction ~ Gunpowser Plot", "3KKb+k", "MMH", null, null, null, null, null, null, false, true),
      new Move("Sealing Punishment", "2K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Punishing Strike", "1KK", "LM", null, null, null, null, null),
      new Move("Water Kick", "4KK", "HL", null, null, null, null, null, null, false, false, true),
      new Move("Sealing Punishment", "CK", "L", null, null, null, null, null, null, false, false, true),
      new Move("Divine Cannon Combo", "C3KK", "LM", null, null, null, null, null),
      new Move("Divine Cannon", "WK", "M", null, null, null, null, null),
      new Move("Haste Alternate", "JKKK", "HLH", null, null, null, null, null),
      new Move("Haste Alternate ~ Possession", "JKK4", "HL", null, null, null, null, null, null, true),
      new Move("Punishing Wind", "TK", "M", null, null, null, null, null),
      new Move("Reverse Seal Punishment", "T2K", "L", null, null, null, null, null, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Ninja Cannon", "A+B", "S", null, null, null, null, null, null, false, true, true, false, false, false, false, true),
      new Move("Ninja Cannon ~ Mekki-Maru", "A+BA", "SH", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Ninja Cannon ~ Possession", "A+BA4", "SH", null, null, null, null, null, null, true, true, false, false, false, false, false, true),
      new Move("Lightning Blaze", "z+xA", "H", null, null, null, null, null),
      new Move("Lightning Blaze ~ Possession", "z+xA4", "H", null, null, null, null, null, null, true),
      new Move("Demon Destroyer ~ Possession Rush", "6A+B", "H", null, null, null, null, null, null, true),
      new Move("Demon Destroyer ~ Possession", "6A+B4", "H", null, null, null, null, null, null, true),
      new Move("Fog Blanket", "2A+B", "M", null, null, null, null, null, "Returns to downed position on miss"),
      new Move("Seal", "4A+B", "M", null, null, null, null, null),
      new Move("Poison Dart", "CA+B", "S", null, null, null, null, null),
      new Move("Fog Blanket", "T2A+B", "M", null, null, null, null, null, "Returns to downed position on miss"),
      new Move("Reverse Lightning", "TB+K", "M", null, null, null, null, null),
      new Move("Reverse Lightning", "dB+K", "M", null, null, null, null, null)
    ],
    // 8-Way Run Moves
    [
      new Move("Shadow Run", "#|^|(AA", "HH", null, null, null, null, null),
      new Move("Shadow Run ~ Possession", "#|^|(A4", "H", null, null, null, null, null, null, true),
      new Move("Shadow Run ~ Possession", "#|^|(AA4", "HH", null, null, null, null, null, null, true),
      new Move("Piercing Wind", "@A", "H", null, null, null, null, null, null, false, false, true),
      new Move("Piercing Wind", "*A", "H", null, null, null, null, null, null, false, false, true),
      new Move("Piercing Wind ~ Possession", "@|*A4", "H", null, null, null, null, null, null, true),
      new Move("Bamboo Cutter", "!|$|uA", "H", null, null, null, null, null),
      new Move("Assassin's Strike", "#|^|(B", "M", null, null, null, null, null, null, false, true),
      new Move("Illusion Scroll", "@|*B", "MM", null, null, null, null, null),
      new Move("Cursed Talisman", "!|$|uB", "MM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Hurricane Punishment", "#|^|(K", "mm", null, null, null, null, null),
      new Move("Storm Cloud Scroll", "@|*KA", "HHM", null, null, null, null, null),
      new Move("Storm Cloud Scroll ~ Stalker", "@|*KB+K", "HH", null, null, null, null, null, null, true),
      new Move("Storm Cloud Scroll ~ Wind Roll", "@|*K6B+K", "HH", null, null, null, null, null, null, true),
      new Move("Storm Cloud Scroll ~ Gunpowder Plot", "@|*K6b+k", "HHH", null, null, null, null, null, null, false, true),
      new Move("Storm Cloud Scroll ~ Distorted Breeze", "@|*K2|8B+K", "HH", null, null, null, null, null, null, true),
      new Move("Heavy Burden", "!|$|uK", "M", null, null, null, null, null),
      new Move("Crossing the Cliff", "#|^|(A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Vacuum Drop Kick", "RKvKB", "LLM", null, null, null, null, null)
    ],
    // Throws
    [
      new Move("Strangulation Blade", "A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Departure in Fire", "4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Jute Burial", "ZA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Cellar Drop", "XA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Dropping the Bottle", "VA+G", "H", null, null, null, null, null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Crossing the Cliff", "#|^|(A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Return of the Sun", "[A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Bow Breaker", "[6A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Fallen Demon", "S[6A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, true, true)
    ],
    // ************ Stances *************
    // Possession
    [
      new Move("Possession", "214", null, null, null, null, null, null, null, true),
      new Move("Striking Shadow", "[A", "H", null, null, null, null, null),
      new Move("Striking Shadow ~ Possession", "[A4", "H", null, null, null, null, null, null, true),
      new Move("Scroll of Darkness", "[6A", "M", null, null, null, null, null),
      new Move("Scroll of Darkness ~ Stalker", "[6AB+K", "M", null, null, null, null, null, null, true),
      new Move("Storm Scroll", "[2|8A", "HM", null, null, null, null, null, null, false, false, true),
      new Move("Dream Scroll", "[B", "M", null, null, null, null, null),
      new Move("Possession Quake", "[xA", "HH", null, null, null, null, null),
      new Move("Assassin's Purification", "[6BA", "MM", null, null, null, null, null),
      new Move("Assassin's Secret ~ Possession", "[2|8B", "MM", null, null, null, null, null, null, true, true),
      new Move("Mat", "[KoK", "MM", null, null, null, null, null, "Returns to facing away"),
      new Move("Stormy Skies", "[k", "M", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Whirling Misery", "[6K", "MH", null, null, null, null, null),
      new Move("Whirling Misery ~ Possession", "[6K4", "MH", null, null, null, null, null, null, true),
      new Move("Possession Strike", "[2|8K", "M", null, null, null, null, null),
      new Move("Exorcism", "[A+B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Hover Lightning", "[B+K", "M", null, null, null, null, null, null, false, true, true),
      new Move("Return of the Sun", "[A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Bow Breaker", "[6A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Possession Rush", "[6", null, null, null, null, null, null, null, true),
      new Move("Possession Rush", "[2|8", null, null, null, null, null, null, null, true)
    ],
    // Wind Roll
    [
      new Move("Wind Roll", "6B+K", null, null, null, null, null, null, null, true, false, true),
      new Move("Gunpowder Plot", "6b+k", "H", null, null, null, null, null, null, false, true),
      new Move("Silent Killer", "]A", "SS", null, null, null, null, null, null, false, true),
      new Move("Wind Death Sault", "]BBB", "MHM", null, null, null, null, null),
      new Move("Wind Sealing Rush", "]BBvB", "MHH", null, null, null, null, null),
      new Move("Wind Sealing Descent", "]BKvb", "MHH", null, null, null, null, null),
      new Move("Wind Stealth Launch", "]K", "H", null, null, null, null, null),
      new Move("Wind Roll ~ Possession", "]4", null, null, null, null, null, null)
    ],
    // Distorted Breeze
    [
      new Move("Distorted Breeze", "2|8B+K", null, null, null, null, null, null, null, true, false, true),
      new Move("Side Breeze", "8B+KA", "M", null, null, null, null, null),
      new Move("Side Breeze", "2B+KA", "M", null, null, null, null, null, "GI vs. high & mid", false, true, false, true),
      new Move("Demon Fangs", "{B", "M", null, null, null, null, null),
      new Move("Storm Cloud Scroll", "{BA", "HMM", null, null, null, null, null),
      new Move("Storm Cloud Scroll ~ Stalker", "{KB+K", "HH", null, null, null, null, null, null, true),
      new Move("Storm Cloud Scroll ~ Wind Roll", "{K6B+K", "HH", null, null, null, null, null, null, true),
      new Move("Storm Cloud Scroll ~ Gunpowder Plot", "{K6b+k", "HHH", null, null, null, null, null, null, false, true),
      new Move("Storm Cloud Scroll ~ Distroted Breeze", "{K2|8B+K", "HH", null, null, null, null, null, null, true),
      new Move("Distorted Breeze ~ Possession", "{4", null, null, null, null, null, null, null, true)
    ],
    // Stalker
    [
      new Move("Stalker", "B+K", null, null, null, null, null, null, null, true),
      new Move("Stalker", "b+k", null, null, null, null, null, null, null, true),
      new Move("Stalker", "x+c2|8", null, null, null, null, null, null, null, true),
      new Move("Stalker ~ Possession", "x+c2|84", null, null, null, null, null, null, null, true),
      new Move("Stalker Blade", "}A", "M", null, null, null, null, null),
      new Move("Stalker Thunder", "}B", "M", null, null, null, null, null, null, false, true),
      new Move("Stalker Omen", "}KA", "MMM", null, null, null, null, null),
      new Move("Stalker Omen ~ Possession", "}K4", "MM", null, null, null, null, null, null, true),
      new Move("Stalker Drop", "}A+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true)
    ]    
  ]

  Talim = [
    // Reversal Edge Attacks
    [
      new Move("Zephyr", "B+G", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Zephyr", "b+g", "M", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Zephyr ~ Wind Charmer", "x+v2|8", null, null, null, null, null, null, null, true),
      new Move("Zephyr ~ Wind Sault", "x+v6", null, null, null, null, null, null, null, true),
      new Move("Zephyr ~ Wind Fury", "x+v4", null, null, null, null, null, null, null, true),
      new Move("Cloud Seeker", "rA", "H", null, null, null, null, null, null, false, true),
      new Move("Cloud Seeker ~ Wind Charmer", "rA2|8", "H", null, null, null, null, null, null, true, true),
      new Move("Cloud Seeker ~ Wind Sault", "rA6", "H", null, null, null, null, null, null, true, true),
      new Move("Cloud Seeker ~ Wind Fury", "rA4", "H", null, null, null, null, null, null, true, true),
      new Move("Swirling Current", "rBB", "MM", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Eddy Sipa", "rK", "M", null, null, null, null, null, null, false, true)
    ],
    // Gauge Attacks
    [
      new Move("Dancing Tempest", "A+B+K", "MMM", null, null, null, null, null, "Restores health upon hit", false, false, false, false, false, false, true, false, false, false, true),
      new Move("Dancing Tempest", "TA+B+K", "MMM", null, null, null, null, null, "Restores health upon hit", false, false, false, false, false, false, true, false, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Rapid Gale Barrage", "SAABB", "HHMM", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Rapid Gale Barrage ~ Wind Fury", "SAABb", "HHMM", null, null, null, null, null, null, true, false, false, false, false, true, false, true),
      new Move("Kampilan Witik Sweep", "SBKA", "MHLLL", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Tornado Assault Kamay", "S#|^|(AAAB", "HHMMMMM", null, null, null, null, null, "Time precisely for increased damage", false, false, false, false, false, true, false, true),
      new Move("Changing Winds", "S#|^|(BB", "HM", null, null, null, null, null, null, false, true, false, false, false, true, false, true),
      new Move("Tempest Assault", "S[ABB", "HHMMMM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Arctic Winds", "S[AKAA", "HHLHMM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Light Breeze", "S]B", "M", null, null, null, null, null, null, false, false, false, false, false, true, false, true),
      new Move("Light Breeze ~ Wind Fury", "S]b", "M", null, null, null, null, null, null, false, false, false, false, false, true, false, true)
    ],
    // Horizontal Moves
    [
      new Move("Weather Vane Buster", "AAA", "HHHH", null, null, null, null, null, "Returns to facing away", false, false, false, false, false, false, false, false, false, true),
      new Move("Rapid Espada", "AABA", "HHMH", null, null, null, null, null),
      new Move("Rapid Espada ~ Wind Charmer", "AABA2|8", "HHMH", null, null, null, null, null, null, true),
      new Move("Rapid Espada ~ Wind Sault", "AABA6", "HHMH", null, null, null, null, null, null, true),
      new Move("Rapid Espada ~ Wind Fury", "AABA4", "HHMH", null, null, null, null, null, null, true),
      new Move("Rapid Barrage", "AABB", "HHMM", null, null, null, null, null),
      new Move("Rapid Barrage ~ Wind Fury", "AAAb", "HHMM", null, null, null, null, null, null, true),
      new Move("Swift Espada", "AAA+B", "HHmH", null, null, null, null, null),
      new Move("Wind Dance", "z6", "HH", null, null, null, null, null),
      new Move("Mirror Fan Strikes", "6AA", "HH", null, null, null, null, null),
      new Move("Mirror Fan Strikes ~ Wind Charmer", "6AA2|8", "HH", null, null, null, null, null, null, true),
      new Move("Mirror Fan Strikes ~ Wind Sault", "6AA6", "HH", null, null, null, null, null, null, true),
      new Move("Mirror Fan Strikes ~ Wind Fury", "6AA4", "HH", null, null, null, null, null, null, true),
      new Move("Wind Walker", "6AB", "HM", null, null, null, null, null),
      new Move("Mirror Fan Sipa", "6AK", "HM", null, null, null, null, null),
      new Move("Razor Storm", "3A", "MMMM", null, null, null, null, null, "Returns to facing away"),
      new Move("Tuhod Slicer", "2A", "S", null, null, null, null, null, null, false, false, true),
      new Move("Spinning Low Hiwa", "1A", "L", null, null, null, null, null, null, false, false, true),
      new Move("Witik Sipa", "4AA", "HM", null, null, null, null, null),
      new Move("Tuhod Slicer", "CA", "S", null, null, null, null, null, null, false, false, true),
      new Move("Left Witik", "WA", "M", null, null, null, null, null),
      new Move("Diving Tuhod Slicer", "JA", "L", null, null, null, null, null, null, false, false, true),
      new Move("Ice Wind Combo", "TAAB", "MMMMMMMMM", null, null, null, null, null),
      new Move("Turning Tuhod Slicer", "T2A", "S", null, null, null, null, null, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Kampilan Flurry", "BBB", "MMM", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true, false, false, false, false, true),
      new Move("Kampilan Flurry", "BBb", "MMM", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Kampilan Flurry ~ Wind Charmer", "BB2|8", "MM", null, null, null, null, null, null, true),
      new Move("Kampilan Flurry ~ Wind Sault", "BBB6", "MM", null, null, null, null, null, null, true),
      new Move("Kampilan Flurry ~ Wind Fury", "BBB4", "MM", null, null, null, null, null, null, true),
      new Move("Kampilan Talon", "BK", "MH", null, null, null, null, null),
      new Move("Air Blade Thrust", "6BB", "MM", null, null, null, null, null),
      new Move("Air Blade Thrust", "6Bb", "MM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Air Blade Thrust ~ Wind Charmer", "6BB|b2|8", "MM", null, null, null, null, null, null, true),
      new Move("Air Blade Thrust ~ Wind Sault", "6BB|b6", "MM", null, null, null, null, null, null, true),
      new Move("Air Blade Thrust ~ Wind Fury", "6BB|b4", "MM", null, null, null, null, null, null, true),
      new Move("West Wind Combo", "3B", "MMM", null, null, null, null, null),
      new Move("Turning Witik Blow", "2B", "M", null, null, null, null, null, "Returns to facing away"),
      new Move("Gust Slicer", "4BA", "MH", null, null, null, null, null, "Returns to facing away/2nd hit can be held", false, false, false, false, false, false, false, false, false, true),
      new Move("Gusting Vertical Abaniko", "4BB", "MM", null, null, null, null, null),
      new Move("Cumulus Crash", "1B", "LL", null, null, null, null, null, null, false, false, true),
      new Move("Blue Sky", "236B", "M", null, null, null, null, null),
      new Move("Blue Sky", "236b", "M", null, null, null, null, null, null, false, true),
      new Move("Whirlwind Hambalos", "214B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Whirlwind Hambalos (Cancel) ~ Wind Sault", "214xG", null, null, null, null, null, null, null, true),
      new Move("Satik", "CB", "M", null, null, null, null, null, null, false, false, true),
      new Move("Rising Baraw", "C3BB", "MMM", null, null, null, null, null, "Can be delayed"),
      new Move("Rising Baraw ~ Wind Charmer", "C3BB2|8", "MMM", null, null, null, null, null, null, true),
      new Move("Rising Baraw ~ Wind Sault", "C3BB6", "MMM", null, null, null, null, null, null, true),
      new Move("Rising Baraw ~ Wind Fury", "C3BB4", "MMM", null, null, null, null, null, null, true),
      new Move("Rising Elbow Blade", "WB", "M", null, null, null, null, null),
      new Move("Swift Leap", "JB", "H", null, null, null, null, null),
      new Move("Baraw Punch Turn", "TB", "M", null, null, null, null, null),
      new Move("Turning Satik", "T2B", "M", null, null, null, null, null, null, false, false, true)
    ],
    // Kick Moves 
    [
      new Move("High Sipa", "K", "H", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Side Sipa", "6K", "M", null, null, null, null, null),
      new Move("Inner Sipa", "3K", "M", null, null, null, null, null),
      new Move("Low Sipa Sweep", "2K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Sipa Trip", "1K", "L", null, null, null, null, null),
      new Move("Roundhouse Sipa", "4K", "H", null, null, null, null, null),
      new Move("Low Sipa Sweep", "WK", "L", null, null, null, null, null, null, false, false, true),
      new Move("Front Sipa", "WK", "M", null, null, null, null, null),
      new Move("Sipa Jump", "JK", "M", null, null, null, null, null),
      new Move("Diving Wind Sipa", "TK", "H", null, null, null, null, null, "Returns to facing away"),
      new Move("Turning Sipa Sweep", "T2K", "L", null, null, null, null, null, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Ice Wind", "A+B", "M", null, null, null, null, null, "Returns to facing away on G cancel", false, true, false, false, false, false, false, true, false, true),
      new Move("Shearing Blades", "6A+B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Shearing Blades", "6a+b", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, false, false, true),
      new Move("Crosswind", "3A+B", "HH", null, null, null, null, null, null, false, true),
      new Move("Rapid Force", "2A+B", "M", null, null, null, null, null),
      new Move("Rapid Force ~ Wind Fury", "2a+b", "M", null, null, null, null, null, null, true),
      new Move("Twin Baraw Lift", "1A+B", "M", null, null, null, null, null, null, false, true),
      new Move("Twin Espadas", "4A+B", "MM", null, null, null, null, null, "Returns to facing away"),
      new Move("Desert Gust", "CA+B", "HM", null, null, null, null, null),
      new Move("Olisi Turn", "TA+B", "H", null, null, null, null, null, "Can be held", false, true, false, false, false, false, false, true),
      new Move("Sudden Storm", "TB+KA+B", "MMMM", null, null, null, null, null, "Returns to facing away", false, false, false, false, false, false, false, true),
      new Move("Sudden Storm", "Tb+kA+B", "MMMM", null, null, null, null, null, "Returns to facing away", false, false, false, false, false, false, false, false, true)
    ],
    // 8-Way Run Moves
    [
      new Move("Flowing Gale Hook", "#|^|(A", "H", null, null, null, null, null),
      new Move("Flowing Gale Hook ~ Wind Charmer", "#|^|(A2|8", "HH", null, null, null, null, null, null, true),
      new Move("Flowing Gale Hook ~ Wind Sault", "#|^|(A6", "HH", null, null, null, null, null, null, true),
      new Move("Flowing Gale Hook ~ Wind Fury", "#|^|(A4", "HH", null, null, null, null, null, null, true),
      new Move("Blade Cyclone", "@|*A", "MM", null, null, null, null, null),
      new Move("Blade Cyclone ~ Wind Charmer", "@|*A2|8", "MM", null, null, null, null, null, null, true),
      new Move("Blade Cyclone ~ Wind Sault", "@|*A6", "MM", null, null, null, null, null, null, true),
      new Move("Blade Cyclone ~ Wind Fury", "@|*A4", "MM", null, null, null, null, null, null, true),
      new Move("Double Abaniko", "!|$|uAA", "HM", null, null, null, null, null, null, false, true),
      new Move("Double Abaniko", "!|$|uAa", "HM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Paayon Thrust", "#|^|(B", "H", null, null, null, null, null, null, false, true),
      new Move("Gust Hook", "@|*BB", "MM", null, null, null, null, null),
      new Move("Gust Hook", "@|*BBj", "MMM", null, null, null, null, null),
      new Move("Isa Hampas", "!|$|uB", "M", null, null, null, null, null, "Returns to facing away", false, true),
      new Move("Isa Hampas ~ Wind Charmer", "!|$|uB2|*", "M", null, null, null, null, null, null, true),
      new Move("Isa Hampas ~ Wind Sault", "!|$|uB6", "M", null, null, null, null, null, null, true),
      new Move("Isa Hampas ~ Wind Fury", "!|$|uB4", "M", null, null, null, null, null, null, true),
      new Move("Parabolic Sipa", "#|^|(K", "M", null, null, null, null, null, "Returns to facing away"),
      new Move("Sipa Windmill", "@|*K", "H", null, null, null, null, null),
      new Move("Sipa Rising", "!|$|uK", "MH", null, null, null, null, null),
      new Move("Rising Gale", "#|^|(A+B", "MM", null, null, null, null, null),
      new Move("Rising Gale ~ Wind Charmer", "#|^|(A+B2|8", "MM", null, null, null, null, null, null, true),
      new Move("Rising Gale ~ Wind Sault", "#|^|(A+B6", "MM", null, null, null, null, null, null, true),
      new Move("Rising Gale ~ Wind Fury", "#|^|(A+B4", "MM", null, null, null, null, null, null, true),
      new Move("Tumbling Razors", "!|$|uA+B", "MMMM", null, null, null, null, null),
      new Move("Sipa Slide", "RK", "L", null, null, null, null, null),
      new Move("Was Sipa Slide", "RK", "L", null, null, null, null, null, "While your health is low", false, true)
    ],
    // Throws
    [
      new Move("Tagga Na Kamay", "A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Monsoon", "4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Tower Sipa", "ZA+G", "H", null, null, null, null, null, "", false, false, false, false, false, false, true),
      new Move("Piggyback Tulison", "XA+G", "H", null, null, null, null, null, "", false, false, false, false, false, false, true),
      new Move("Diving Wind Sipa Throw", "VA+G", "H", null, null, null, null, null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Sungabb Throw", "TA+G", "H", null, null, null, null, null, "Breakable", false, false, false,false, false, false, true),
      new Move("Monsoon Season", "T4A+G4|6A", "H", null, null, null, null, null, "Breakable", false, false, false,false, false, false, true),
      new Move("Tagga", "[A+G", "H", null, null, null, null, null, "Not Breakable", false, false, false,false, false, false, true)
    ],
    // ************ Stances *************
    // Wind Charmer
    [
      new Move("Wind Charmer", "2|8B+K", null, null, null, null, null, null, null, true),
      new Move("Turning Kali Strikes", "[AB", "HMM", null, null, null, null, null, "Returns to facing away"),
      new Move("Turning Kali Strikes ~ Wind Charmer", "[A2|8", "HH", null, null, null, null, null, null, true),
      new Move("Turning Kali Strikes ~ Wind Sault", "[A6", "HH", null, null, null, null, null, null, true),
      new Move("Turning Kali Strikes ~ Wind Fury", "[A4", "HH", null, null, null, null, null, null, true),
      new Move("Kali Rush", "[AKA", "HHLH", null, null, null, null, null),
      new Move("Baraw Strikes", "[BB", "MM", null, null, null, null, null),
      new Move("Rising Baraw Slice", "[BB", "MM", null, null, null, null, null, "delay second hit/Time precisely for increased power", false, false, false, false, false, false, false, true), // delayed
      new Move("Twirling Wind", "[K", "M", null, null, null, null, null, null, false, true),
      new Move("Tuhod Strike", "[A+B", "L", null, null, null, null, null),
      new Move("Tagga", "[A+G", "H", null, null, null, null, null, "Not Breakable", false, false, false, false, false, false, true)
    ],
    // Wind Sault
    [
      new Move("Wind Sault", "6B+K", null, null, null, null, null, null, null, true),
      new Move("Double Inwardi", "]A", "L", null, null, null, null, null, null, false, false, true),
      new Move("Double Inwardi ~ Wind Charmer", "]A2|8", "L", null, null, null, null, null, null, true),
      new Move("Double Inwardi ~ Wind Sault", "]A6", "L", null, null, null, null, null, null, true),
      new Move("Double Inwardi ~ Wind Fury", "]A4", "L", null, null, null, null, null, null, true),
      new Move("Double Bartikal", "]B", "M", null, null, null, null, null),
      new Move("Double Bartikal ~ Wind Fury", "]b", "M", null, null, null, null, null, null, true),
      new Move("Layout", "]K", "H", null, null, null, null, null, "Returns to downed on miss/Shifts to Wind Sault on hit"),
      new Move("Reverse Wind", "]k", "M", null, null, null, null, null),
      new Move("Rolling Storm", "]A+B", "MMM", null, null, null, null, null)
    ],
    // Wind Fury
    [
      new Move("Wind Fury", "B+K", null, null, null, null, null, null, "Dodges high, mid horizontal(except kicks)", true),
      new Move("Leaping Wind Fury", "4B+K|$B+K", null, null, null, null, null, null, null, true),
      new Move("Swooping Blade", "{A", "L", null, null, null, null, null, null, false, false, true),
      new Move("Swooping Blade (Cancel) ~ Wind Fury", "{zG", null, null, null, null, null, null, null, true),
      new Move("Panay Hurricane", "{BoB", "MM", null, null, null, null, null, null, false, true),
      new Move("Leaping Double Sipa", "{K", "MM", null, null, null, null, null),
      new Move("Raging Wind", "{A+B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Wind Fury ~ Wind Charmer", "{2|8", null, null, null, null, null, null, null, true),
      new Move("Wind Fury ~ Wind Sault", "{6", null, null, null, null, null, null, null, true),
      new Move("Wind Fury ~ Wind Fury", "{4", null, null, null, null, null, null, null, true)
    ]
  ]

  Tira = [
    // Reversal Edge Attacks
    [
      new Move("Codebreaker", "B+G", "M", null, null, null, null, 35, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Codebreaker", "b+g", "M", null, null, null, null, 45, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Twisted Vibrato", "rA", "H", null, null, null, null, null, null, false, true),
      new Move("Twisted Vibrato", "rAA", "HMMMMM", null, null, null, null, 36, null, false, true),
      new Move("Twisted Vibrato", "rAa", "HMMMMM", null, null, null, null, 41, null, false, true, false, false, false, false, false, true),
      new Move("Twisted Cadence", "{rAK", "HM", null, null, null, null, 34, null, false, true),
      new Move("Siren's Cadence", "S{rAKA", "HMM", null, null, null, null, 58, null, false, true, false, false, false, true, false, true),
      new Move("Relaxed Reaver", "]rB", "M", null, null, null, null, 51, "Shifts to attack throw upon hit/Absorbs opponent's health", false, true, false, false, false, false, true, true),
      new Move("Hardcore Assassination", "{rB", "M", null, null, null, null, 76, "Shifts to attack throw upon hit", false, true, false, false, false, false, true, true),
      new Move("Madness Trance", "rK", "MM", null, null, null, null, 28, "May trigger personality change", false, true)
    ],
    // Gauge Attacks
    [
      new Move("Bleak Concerto", "]A+B+K", "M", 16, -16, "KND", "KND", 70, "May Trigger personality change", false, false, false, false, false, false, true, false, false, false, true),
      new Move("Bleak Concerto: Finale", "{A+B+K", "M", 16, -16, "KND", "KND", 90, null, false, false, false, false, false, false, true, false, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", 6, null, null, null, 0, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Alkonost's Cadence", "S{AKA", "HMM", 12, 2, "KND", "KND", 50, null, false, false, false, false, false, true, false, true),
      new Move("Snare Groove", "S]6ABB", "HLM", 18, 4, "LNC", "LNC", 56, null, false, false, false, false, false, true, false, true),
      new Move("Minerva's Symphony", "S{6ABB", "HMM", 22, 4, "KND", "KND", 98, "May trigger personality change", false, false, false, false, false, true, false, true),
      new Move("Tuonela Quarrel", "S{3AA+B", "MMHHH", 14, 6, "KND", "KND", 77, "May trigger personality change", false, false, false, false, false, true, false, true),
      new Move("Two-Step Infernal Symphony", "S{BBBB", "MMMM", 14, 6, "KND", "KND", 78, "May trigger personality change", false, false, false, false, false, true, false, true),
      new Move("Symphonic Dissonance", "S{6BB", "MM", 22, 2, "KND", "KND", 108, "May trigger personality change", false, true, false, false, false, true, false, true),
      new Move("Peregrine Duet", "S{3BB", "MM", 18, -16, "LNC", "LNC", 54, null, false, false, false, false, false, true),
      new Move("Robin's Groove", "S{1BB", "LM", 22, 8, "LNC", "LNC", 39, "May trigger personality change", false, false, false, false, false, true, false, true),
      new Move("Scratch Glissando", "S]236K", "LL", 22, -10, "KND", "KND", 39, "May trigger personality change", false, false, false, false, false, true),
      new Move("Flageolette Vibrato", "S]#|^|(AAA", "MMMMMM", 18, -2, "KND", "KND", 59, null, false, false, false, false, false, true),
      new Move("Wild Beat Scherzo", "S]#|^|(BB", "MM", 22, -8, "LNC", "LNC", 30, "May trigger personality change", false, true, false, false, false, true),
      new Move("Hiisi Gigue Canon", "S{#|^|(A+B", "MMMMMM", 18, 4, "LNC", "LNC", 68, "May trigger personality change", false, false, false, false, false, true, false, true),
      new Move("Grim Reaper", "S]6A+G", "H", 18, null, "KND", "KND", 60, "Not breakable/May trigger personality change", false, false, false, false, false, true, true),
      new Move("Siren's Cadence", "S]rAKA", "HMM", null, null, "KND", "KND", 58, null, false, true, false, false, false, true, false, true)
    ],
    // Horizontal Moves
    [
      new Move("Harmonic Beat", "]A", "H", 14, -6, 2, 2, 10, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Harmonic Beat", "]AA", "HH", 14, -2, 0, 0, 20, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Harmonic Beat", "]AAA", "HHM", 14, -14, 0, 0, 38, null, false, false, false, false, false, false, false, false, false, true),
      
      new Move("False Harmony", "]a", "HMMM", 14, -4, 4, 4, 38),
      
      new Move("Harmonic Wing", "{A", "H", 12, -7, 2, 2, 12, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Harmonic Wing", "{AA", "HH", 12, -6, 6, 6, 24, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Black Cadence", "{AK", "HM", 12, -6, 4, 4, 24),

      new Move("Snare", "]6A", "H", 18, -12, -6, -6, 16),
      new Move("Snare Boulder Crush", "]6AA", "HM", 18, -14, 6, 6, 36),
      new Move("Snare Robin", "]6AB", "HL", 18, -12, 4, "KND", 36, null, false, false, true),

      new Move("Minerva's Lament", "{6A", "H", 22, -6, 2, "STN", 22),
      new Move("Minerva's Lament", "{6AB", "HM", 22, -4, "KND", "KND", 50),

      new Move("Ptarmigan Polka", "]3A", "L", 18, -18, -10, 4, 10, "GI vs. high & mid(except kicks)/May trigger personality change"),
      new Move("Ptarmigan Polka", "]3AB", "LM", 18, -22, -6, "KND", 24, "GI vs. high & mid(except kicks)/May trigger personality change"),
      new Move("Ptarmigan Polka ~ Gestopft Madness", "]3ABB+K", "LM", 18, null, null, null, 24, "GI vs. high & mid(except kicks)/May trigger personality change", true, false, false, true),
      
      new Move("Shriek Noise", "]3A", "M", 14, -14, -4, 6, 12),
      new Move("Shriek Noise", "]3AA", "MMH", 14, -12, "KND", "KND", 42),
      new Move("Shriek Quarrel", "]3AA+B", "MMHHH", 14, -12, "KND", "KND", 64, "May trigger personality change"),

      new Move("Low Pitch Flap", "2A", "S", 12, -6, 6, 6, 12, null, false, false, true),
      new Move("Low Swoop", "1A", "L", 30, -14, 4, "KND", 22),
      new Move("Menuett Dance", "]4Ao", "HHH", 18, -14, 12, 12, 19),
      new Move("Noise Break", "{4A", "H", 20, -6, "LNC", "LNC", 24),
      new Move("Low Pitch Flap", "CA", "S", 12, -6, 6, 6, 12, null, false, false, true),
      new Move("Snare Clap", "WA", "M", 18, -12, 4, 4, 16, null, false, false, true),
      new Move("Flitting Feather", "JA", "M", 21, -14, -4, -4, 20, "Damage differs slightly according to jump direction"),
      new Move("Retrograde Wing", "TA", "H", 16, -4, 6, 6, 12),
      new Move("Low Retro Flap", "T2A", "S", 16, -6, 4, 8, 12, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Two-Step Stitch", "]B", "M", 16, -8, 2, 2, 12, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Two-Step Stitch", "]BB", "MM", 16, -6, 4, 4, 26, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Two-Step Stitch", "]BBB", "MMM", 16, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true, false, false, false, false, true),
      new Move("Two-Step Stitch", "]BBb", "MMM", 16, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      
      new Move("Back Step Pizzicato", "]x4", "M", 18, -14, -4, -4, 15),
      new Move("Hi-Wind Albatross", "x8", "H", 14, -8, 0, 0, 16, null, false, true),

      new Move("Two-Step Lament", "{B", "M", 14, -8, 2, 2, 16, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Two-Step Lament", "{BB", "MM", 14, -6, 4, 4, 32, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Two-Step Lament", "{BBB", "MMM", 14, -8, 6, "KND", 60, null, false, false, false, false, false, false, false, false, false, true),
     
      new Move("Agrement Double Claw", "]6B", "M", 16, -12, 0, 4, 18),
      new Move("Agrement Double Claw", "]6BB", "MM", 16, -2, "KND", "KND", 42),
      new Move("Shredding Beak", "]6BK", "MH", 16, -12, "KND", "KND", 42),

      new Move("Basilisk's Lament", "{6B", "M", 22, -4, 6, "KND", 28, null, false, true),
      new Move("Beakbreak Toss", "]3B", "M", 18, -12, "LNC", "LNC", 22),
      new Move("Peregrine Rhythm", "{3B", "M", 18, -14, "LNC", "LNC", null),

      new Move("Lowdown Neb", "2B", "M", 14, -8, 2, 2, 18, null, false, false, true),
      new Move("Low Pitch Pointe", "]1B", "L", 16, -16, -8, -8, 16),
      new Move("Strayed Robin", "{1B", "L", 26, -14, 2, "KND", 20, null, false, false, true),

      new Move("Halcyon Major Sonata", "]4B", "M", 20, -12, 0, 0, 12, null, false, false, false, false, false, false, true),
      new Move("Halcyon Major Sonata", "]4BA", "MHL", 20, -12, 2, 2, 35, null, false, false, false, false, false, false, true),
      new Move("Halcyon Major Sonata", "]4BAB", "MHLM", 20, -12, -1, -1, 74, null, false, false, false, false, false, false, true),
      new Move("Rondo a Capriccio", "]4BABv", "MHLM", 20, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Halcyon Major Elegy", "]4BAK", "MHLL", 20, -16, "LNC", "LNC", 59),
      new Move("Halcyon Minor Sonata", "]4BB", "MM", 20, -12, -4, -4, 26),
      new Move("Halcyon Minor Sonata", "]4BBB", "MMM", 20, -14, -4, -4, 65, null, false, false, false, false, false, false, true),
      new Move("Rondo a Capriccio", "]4BBBv", "MMM", 20, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Halcyon Minor Elegy", "]4BBK", "MML", 20, -16, "KND", "KND", 50),

      new Move("Oratorio Halcyon", "{4B", "M", 20, -12, 2, 2, 14),
      new Move("Oratorio Halcyon", "{4BB", "MM", 20, -14, "KND", "KND", 24, "May trigger personality change after 2nd hit"),
      new Move("Oratorio Halcyon", "{4BBB", "MMM", 20, -18, "LNC", "LNC", 39, "May trigger personality change after 2nd hit"),
      new Move("Oratorio Halcyon", "{4BBBj", "MMM", 20, null, null, null, null, "May trigger personality change after 2nd hit"),

      new Move("Lowdown Neb", "CB", "M", 14, -8, 2, 2, 16, null, false, false, true),

      new Move("Up Bow Cantabile", "WB", "M", 17, -16, "KND", "KND", 20, null, true),
      new Move("Up Bow Cantabile ~ Updraft", "WBK", "MmMMM", 17, -52, "LNC", "LNC", 36, null, true),
      new Move("Trill Up Bow Neb", "JB", "M", 36, -16, "LNC", "LNC", 60, "Shifts to attack throw upon hit/Damage differs slightly according to jump direction", false, false, false, false, false, false, true),
      new Move("Retrograde Beak", "TB", "M", 18, -8, 4, 4, 16),
      new Move("Low Retro Neb", "T2B", "M", 18, -8, 2, 2, 18, null, false, false, true)
    ],
    // Kicks
    [
      new Move("High Note Kick", "K", "H", 12, -8, 0, 0, 12, null, false, false, false, false, false, false, false, false, false, true),

      new Move("Cadence Back Kick(Jolly)", "]6K", "H", 16, -2, "KND", "KND", 18),
      new Move("Cadence Back Kick(Gloomy)", "{6K", "H", 16, -2, "KND", "KND", 22),

      new Move("Fear Pecker(Jolly)", "]3K", "M", 16, -8, -4, -4, 20),
      new Move("Fear Pecker(Gloomy)", "{3K", "M", 16, -8, -4, -4, 24),

      new Move("Low Pitch Claw", "2K", "L", 16, -14, -4, -4, 14, null, false, false, true),
      new Move("Ring Con Sordino", "]1K", "L", 28, -16, "LNC", "LNC", 18, null, false, false, true),
      new Move("Claw Kick", "]1K", "L", 22, -14, -2, -2, 18),
      new Move("Bremen Fortissimo", "4K", "H", 12, -8, "STN", "STN", 15, "May trigger personality change"),
      new Move("Scratch Scherzo", "]236K", "L", 28, -16, "KND", "KND", 22),
      new Move("Takt Claw", "{236K", "M", 22, -8, 2, 2, 22),
      new Move("Divisi Claw Wing", "{236cA", "MH", 22, -10, 2, 2, 28),
      new Move("Low Pitch Claw", "CK", "L", 16, -14, -4, -4, 14, null, false, false, true),
      new Move("Swing Kick", "]WK", "M", 12, -14, 8, 8, 20),
      new Move("Chattering Cantabile ~ Updraft", "{WK", "mMMM", 24, -52, "LNC", "LNC", 31, null, true),
      new Move("Flickering Heelkick", "JK", "M", 20, -12, "LNC", "LNC", 16),
      new Move("Flickering Heelkick ~ Updraft", "HJK", "MMMM", 20, null, null, null, 38, null, true),
      new Move("Retrograde Kick", "TK", "H", 14, -8, 2, 2, 16),
      new Move("Low Retro Claw", "T2K", "L", 18, -14, -4, -4, 16, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Chattering Thrust", "]A+B", "M", 46, 6, 10, 10, 32, "GI vs. high & mid horizontal", false, true, false, true, false, false, false, true),
      new Move("Cry of the Blue Jay", "{A+B", "M", 36, 2, "LNC", "LNC", 36, null, false, true, false, false, false, false, false, true),
      new Move("Blazing Cadenza", "6A+B", "M", 64, null, "KND", "KND", 65, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Tenuto Sweep", "]2A+B", "L", 30, -14, "KND", "KND", 26, "GI vs. high & mid vertical(except kicks)", false, false, true, true),
      new Move("Deadly Arietta", "{2A+B", "M", 28, -2, "KND", "KND", 24),
      new Move("Sidestep Arpeggio", "]4A+B", "M", 22, -10, -2, -2, 10),
      new Move("Scolding Starling", "{4A+B", "H", 22, 2, "KND", "KND", 32),

      new Move("Gestopft Madness", "B+KKK", null, null, null, null, null, null, "GI vs. high & mid(except kicks)/May trigger personality change", true, false, false, true),
      new Move("Bremen Fortissimo", "B+KI", "H", 30, null, null, null, null, "May trigger personality change"),
      new Move("Streaks of Madness", "}A", "L", null, null, null, null, null, "Power increases with number of K", false, true),
      new Move("Elegy of Madness", "}B", "M", null, null, null, null, null, "Power increases with number of K", false, true),
      
      new Move("Einsatz Calcatrix", "2B+K", null, null, null, null, null, null, "Revenge attack/May trigger personality change when successful"),
      new Move("Einsatz Calcatrix", "2B+KI", null, null, null, null, 60, null, "Revenge attack/May trigger personality change when successful"),

      new Move("Piercing Talon Strike", "4B+K", "M", 26, -8, "LNC", "LNC", 18),
      new Move("Piercing Talon Strike", "4B+KB", "MM", 26, -2, "KND", "KND", 39),
      new Move("Piercing Talon Strike", "4B+Kb", "MM", 26, 6, "KND", "KND", 50, null, false, false, false, false, false, false, false, true),
      
      new Move("Retro Noise", "]TB+K", "M", 18, -16, "LNC", "LNC", 16, "GI vs. high & mid(except kicks)/May trigger personality change", true, false, false, true),
      new Move("Retro Noise", "]TB+KB", "MM", 18, -18, "KND", "LNC", 35, "GI vs. high & mid(except kicks)/May trigger personality change", true, false, false, true),
      new Move("Retro Noise ~ Gestopft Madness", "]TB+KBB+K", "MM", null, null, null, null, null, "GI vs. high & mid(except kicks)/May trigger personality change", true, false, false, true),
      new Move("Retrograde Fortissimo", "{TB+K", "M", 17, -6, "KND", "KND", 30, "GI vs. mid(except kicks)/May trigger personality change")
    ],
    // 8-Way Run Moves
    [
      new Move("Flagoelette Fin", "]#|^|(A", "M", 18, -20, -6, -6, 18),
      new Move("Flagoelette Fin", "]#|^|(AA", "MM", 18, -20, "KND", "KND", 39),

      new Move("Tarsus Toccata", "{#|^|(A", "M", 16, -12, 4, 4, 20, null, false, false, true),
      new Move("Tarsus Toccata", "{#|^|(AK", "MM", 16, -6, "KND", "KND", 50, null, false, false, true),

      new Move("Deriding Thrush(Jolly)", "]@|*A", "M", 22, -12, 12, 12, 20),
      new Move("Deriding Thrush(Gloomy)", "{@|*A", "M", 22, -12, 14, 14, 24),

      new Move("Canary Waltz C Minor", "]!|$|uA", "H", 18, -12, 0, 0, 14),
      new Move("Canary Waltz C Minor", "]!|$|uAA", "HL", 18, -12, -4, -4, 34),
      new Move("Canary Waltz E Major", "]!|$|uAB", "HM", 18, -2, 6, 6, 32),

      new Move("Chattering Pinion", "{!|$|uA", "M", 30, -14, "KND", "KND", 37, null, false, true),
      new Move("Wild Beat Neb", "]#|^|(B", "M", 22, -8, "LNC", "LNC", 20, null, false, true),
      new Move("Metsa Gigue Baroque", "{#|^|(B", "MMM", 18, -8, "LNC", "LNC", 40, "May trigger personality change"),
      new Move("Double Rhythm", "]@|*B", "MM", 20, -2, 10, 10, 20),
      new Move("Staccato Ravage", "{@|*B", "M", 30, 2, "KND", "KND", 32, null, false, false, false, false, false, false, false, true),

      new Move("Ibis Minuet", "]!|$|uB", "M", 20, -18, "LNC", "LNC", 20, "Shifts to follow-up attack upon hit"),
      new Move("Ibis Minuet", "]!|$|uBA", "MH", 20, -14, "KND", "KND", 35, "Shifts to follow-up attack upon hit"),
      new Move("Murderous Vibrato", "{!|$|uB", "mmm", 32, -8, 6, 6, 36, null, false, false, true),
      new Move("Murderous Vibrato", "{!|$|ub", "mmmmmm", 40, -8, 6, 6, 72, null, false, false, true),
      new Move("Parrot Scratch ~ Gestopft Madness", "]#|^|(KB+K", "MH", null, null, null, null, 26, "GI vs. high & mid(except kicks)/May trigger personality change", true, false, false, true),
      new Move("Hell's Barkarole", "{#|^|(K", "M", 20, -12, "KND", "KND", 30, null, false, false, false, false, false, false, true),
      new Move("Hell's Fermata", "{#|^|(KH", "M", 20, -12, "KND", "KND", 66, "Shifts to attack throw upon counter hit or midair hit", false, false, false, false, false, false, true),
     
      new Move("Rhythmic Hook(Jolly)", "]@|*K", "M", 18, -6, 8, 8, 16),
      new Move("Rhythmic Hook(Gloomy)", "{@|*K", "M", 18, -6, 8, 8, 20),

      new Move("Parakeet Scratch", "!|$|uK", "MM", 16, -8, 8, "KND", 22),
      new Move("Somersault Scratch", "{!|$|uK", "MM", 21, -4, 9, "KND", 30),
      new Move("Groove Step", "]#|^|(A+B", "M", 24, -12, "LNC", "LNC", 28, null, false, true),
      new Move("Hiisi Gigue Baroque", "{#|^|(A+B", "MMMMM", 18, -14, "LNC", "LNC", 50, "May trigger personality change"),

      new Move("Polonaise Spin", "]!|$|uA+B", "MM", 28, -18, -6, -6, 22, "Can move using D-Pad"),
      new Move("Polonaise Spin", "]!|$|uA+BA", "MMM", 28, -18, -6, -6, 30, "Can move using D-Pad"),
      new Move("Polonaise Spin", "]!|$|uA+BAA", "MMMM", 28, -18, -6, -6, 42, "Can move using D-Pad"),

      new Move("Chattering Tear", "]RK", "L", 20, -22, "LNC", "LNC", 26, "May trigger personality change"),
      new Move("Glissando Claw", "{RK", "L", 20, -22, "LNC", "LNC", 26)
    ],
    // Throws
    [
      new Move("Death Spindle", "A+G", "H", 18, null, null, null, 45, "Breakable/+5DMG in Gloomy", false, false, false, false, false, false, true),
      new Move("Poison Apple", "4A+G", "H", 18, null, null, null, 50, "Breakable/+5DMG in Gloomy", false, false, false, false, false, false, true),
      new Move("Sweet Lullaby", "ZA+G", "H", 18, null, null, null, 55, "+5DMG in Gloomy", false, false, false, false, false, false, true),
      new Move("Bloody Tale", "XA+G", "H", 18, null, null, null, 60, "+5DMG in Gloomy", false, false, false, false, false, false, true),
      new Move("Glass Slippers", "VA+G", "H", 18, null, null, null, 70, "Breakable only by Voldo & Astaroth/+5DMG in Gloomy", false, false, false, false, false, false, true),
      new Move("Grim Reaper", "S]6A+G", "H", 18, null, null, null, 60, "Not breakable/May trigger personality change", false, false, false, false, false, true, true)
    ],
    // ************ Stances *************
    // Updraft
    [
      new Move("Updraft", "7|8|9B+K", null, null, null, null, null, null, null, true),
      new Move("Diving Wing Flap", "[A", "M", null, -6, -2, -2, 26, "May trigger personality change"),
      new Move("Diving Talon Thrust", "[B", "M", null, -2, "KND", "KND", 40, null, false, false, false, false, false, false, false, true),
      new Move("Claw Dive", "[K", "M", null, -16, "KND", "KND", 24, "Becomes a low attack when at distance")
    ]
  ]

  Voldo = [
    // Reversal Edge Attacks
    [
      new Move("Secret Chamber", "B+G", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Secret Chamber", "b+g", "M", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Forgery Finder ~ facing away", "B+G4", "M", null, null, null, null, null, "Returns to facing away"), // facing away
      new Move("Throat Slasher", "rA", "HH", null, null, null, null, null, null, false, true),
      new Move("Throat Slasher ~ facing away", "ra", "HH", null, null, null, null, null, "Returns to facing away", false, true), // facing away
      new Move("Fading Sanity", "rB", "M", null, null, null, null, null, "Shifts to clash upon guard", false, true, false, false, false, false, false, true),
      new Move("Fading Sanity ~ Mantis Crawl", "rb", "M", null, null, null, null, null, null, true, true, false, false, false, false, false, true),
      new Move("Grinding Wheel ~ facing away", "rK", "M", null, null, null, null, null, "Returns to facing away", false, true),
      new Move("Grinding Wheel ~ Fortune Spasm", "rKo", "M", null, null, null, null, null, "Can move with 4 or 6/Press 8(hold) to change speed"),
      new Move("Forward Step ~ Mantis Crawl", "r6", null, null, null, null, null, null, null, true)
    ],
    // Gauge Attacks
    [
      new Move("Downward Spiral", "A+B+K", "MM", null, null, null, null, null, "Returns to facing away", false, false, false, false, false, false, true, false, false, false, true),
      new Move("Downward Spiral", "TA+B+K", "MM", null, null, null, null, null, "Returns to facing away", false, false, false, false, false, false, true, false, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", null, null, null, null, null, "Returns to facing away", false, false, false, false, false, false, false, true, false, false, true),
      new Move("Soul Charge", "T4A+B+G", "m", null, null, null, null, null, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Side Claw Pitfall ~ Death Roll", "SAAA", "HHH", null, null, null, null, null, null, true, false, false, false, false, true, false, true),
      new Move("Arching Centipede ~ Mantis Crawl", "S4BBB", "HMMMM", null, null, null, null, null, null, true),
      new Move("Into the Abyss ~ Death Roll", "S3A+B", "H", null, null, null, null, null, null, true, false, false, false, false, false, false, true),
      new Move("Pitfall Kick ~ Death Roll", "SJK", "H", null, null, null, null, null, null, true, false, false, false, false, false, false, true),
      new Move("Diablo Brothers", "S#|^|(BB", "MM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Macabre Skewer", "ST6BBBB", "MMMMMMM", null, null, null, null, null, null, false, false, false, false, false, true),
      new Move("Pitfall Punishment ~ Death Roll", "STJBK", "LM", null, null, null, null, null, null, true, false, false, false, false, true, false, true),
      new Move("Torched Scarecrow", "eSTA", "M", null, null, null, null, null, null, false, true, false, false, false, true, false, true),
      new Move("Pitfall Marionette ~ Death Roll", "S{K", "L", null, null, null, null, null, null, true, false, false, false, false, true, false, true),
      new Move("Crypt Keeper ~ Mantis Crawl", "S[B+K", "m", null, null, null, null, null, "GI vs. middle vertical", true, false, false, true, false, false, false, true),
      new Move("Death Roll", "S3A+B", null, null, null, null, null, null, "Returns to downed position when cancelling stance with G", true),
      new Move("Superwyrm ~ Death Roll", "S}A", "LLL", null, null, null, null, null, null, true, false, false, false, false, true, false, true),
      new Move("Superior Arachnid ~ Death Roll", "S}B", "MMM", null, null, null, null, null, null, true, false, false, false, false, true, false, true),
      new Move("Superwyrm Escape ~ Death Roll", "S}K", "L", null, null, null, null, null, null, true),
      new Move("Gravestone Cleaver", "S}A+B", "M", null, null, null, null, null, "Returns to downed position", false, false, false, false, false, false, false, false, true),
      new Move("Back Strike ~ Mantis Crawl", "S}B+K", "MMM", null, null, null, null, null, "Revenge attack", true),
      new Move("Maddening Slaps", "Sw}B+K", "H", null, null, null, null, null, "Returns to downed position", false, false, false, false, false, false, false, false, true),
      new Move("Death Roll ~ Mantis Crawl", "S}2|8", null, null, null, null, null, null, null, true)
    ],
    // Horizontal Moves
    [
      new Move("Side Claw Brace", "AA", "HH", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Side Claw Dark Shredder ~ facing away", "ABA", "HMM", null, null, null, null, null, "Returns to facing away"),
      new Move("Elegant Death Rose", "6AA", "HMMMM", null, null, null, null, null),
      new Move("Elegant Death Rose", "6Aa", "HMMMM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Blind Rotation ~ facing away", "3A", "M", null, null, null, null, null, "Returns to crouching & facing away", false, false, true),
      new Move("Silent Toe Cleaver", "2A", "S", null, null, null, null, null, null, false, false, true),
      new Move("Mire Toe Cutte ~ facing away", "1A", "L", null, null, null, null, null, "Returns to crouching and facing away", false, false, true),
      new Move("Grave Digger", "1zB", "LLL", null, null, null, null, null),
      new Move("Jolly Ripper ~ facing away", "4A", "H", null, null, null, null, null, "Returns to facing away"),
      new Move("Shadow Toe Cleaver", "CA", "S", null, null, null, null, null, null, false, false, true),
      new Move("Scorpion Claw", "WA", "M", null, null, null, null, null, null, false, true),
      new Move("Puppet Gear", "JA", "LL", null, null, null, null, null),
      new Move("Blind Scissors", "TAA", "HH", null, null, null, null, null, "Returns to facing away"),
      new Move("Faceless Fear", "T6AA", "HH", null, null, null, null, null, "Returns to facing away"),
      new Move("Gimlet from the Gloom", "T6ABB", "HMMMM", null, null, null, null, null),
      new Move("Blind Winder", "T4A", "M", null, null, null, null, null, "Returns to facing away"),
      new Move("Blind Leg Cutter", "TCA", "S", null, null, null, null, null, "Returns to crouching & facing away", false, false, true),
      new Move("Madness Spin", "TWA", "MS", null, null, null, null, null, "Returns to facing away"),
      new Move("Lunatic Wheel", "TJA", "H", null, null, null, null, null)
    ],
    // Vertical Moves
    [
      new Move("Sanity Shredder", "BBB", "MMM", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Smell of Death", "BBb", "MMM", null, null, null, null, null, "Shifts to follow-up attack upon hit", false, false, false, false, false, false, false, true),
      new Move("Merry Mantis", "6BB", "MM", null, null, null, null, null),
      new Move("Merry Mantis ~ Mantis Crawl", "6Bb", "MM", null, null, null, null, null, null, true),
      new Move("Merry Mantis ~ Caiostro Rush", "6b", "M", null, null, null, null, null, null, true),
      new Move("Guillotine Scissors", "3BB", "MM", null, null, null, null, null, "2nd hit can be held"),
      new Move("Ecstasy", "2B", "M", null, null, null, null, null),
      new Move("Ecstasy ~ facing away", "2b", "M", null, null, null, null, null, "Returns to facing away"),
      new Move("Power Slave ~ facing away", "2BB", "MM", null, null, null, null, null, "Returns to facing away", false, true),
      new Move("Rat Cheeze", "1BBB", "LLL", null, null, null, null, null),
      new Move("Blood Claw ~ facing away", "4BA", "HH", null, null, null, null, null, "Returns to facing away"),
      new Move("Blind Crescent ~ facing away", "4b", "HM", null, null, null, null, null, "Returns to facing away"),
      new Move("Satanic Elbow", "666B", "M", null, null, null, null, null, null, false, true),
      new Move("Fencer Mantis", "CB", "M", null, null, null, null, null, null, false, false, true),
      new Move("Rat Drill ~ facing away", "C3B", "M", null, null, null, null, null, "Returns to crouching and facing away", false, false, true),
      new Move("Fading Sanity", "WB", "M", null, null, null, null, null),
      new Move("Fading Sanity ~ Mantis Crawl", "Wb", "M", null, null, null, null, null, null, true),
      new Move("Frolicking Port de Bras", "JB", "M", null, null, null, null, null),
      new Move("Lunatic Asylum", "TBBB", "MMM", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Lunatic Asylum", "TBBb", "MMM", null, null, null, null, null, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Lunatic Deception", "TBBB4", "MMM", null, null, null, null, null, "Returns to facing away"),
      new Move("Death Ensnare", "T6BB", "MM", null, null, null, null, null, "Can be delayed/Returns to facing away"),
      new Move("Blind Elbow Rush", "T6b", "MMMM", null, null, null, null, null),
      new Move("Rat Straight", "T4B", "H", null, null, null, null, null, "GI vs. mid(except kicks, thrusting attack)", false, false, false, true),
      new Move("Vercci's Shadow ~ Mantis Crawl", "TCBK", "MM", null, null, null, null, null, null, true),
      new Move("Macabre Torch", "TWB", "M", null, null, null, null, null, null, false, true),
      new Move("Faceless Flap", "TJBK", "LM", null, null, null, null, null, "Returns to downed position")
    ],
    // Kick Moves 
    [
      new Move("Mute High Kick", "K", "H", null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Jolly Jumping Kick", "6K", "H", null, null, null, null, null),
      new Move("Mute Mid Kick", "3K", "M", null, null, null, null, null),
      new Move("Rat Kick", "2K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Mute Low Kick", "1K", "L", null, null, null, null, null, null, false, false, true),
      new Move("Scorpion Tail ~ facing away", "4K", "M", null, null, null, null, null, "Returns to facing away"),
      new Move("Rat Kick", "CK", "L", null, null, null, null, null, null, false, false, true),
      new Move("Haunt the Shadows", "C3K", "H", null, null, null, null, null, null, false, false, true),
      new Move("Lunatic Spin ~ facing away", "WK", "M", null, null, null, null, null, "Returns to facing away"),
      new Move("Side Trap Kick ~ down", "JK", "H", null, null, null, null, null, "Returns to downed position"),
      new Move("Blind Mute High Kick", "TK", "H", null, null, null, null, null),
      new Move("Mad Slap", "T6K", "H", null, null, null, null, null, "Returns to facing away"),
      new Move("Blind Scorpion", "T4K", "M", null, null, null, null, null, "Returns to facing away"),
      new Move("Blind Side Low", "TCK", "L", null, null, null, null, null, "Returns to crouching and facing away", false, false, true),
      new Move("Blind Drill", "TWK", "H", null, null, null, null, null, "Returns to facing away"),
      new Move("Spinning High", "TJKA", "MH", null, null, null, null, null, "Returns to downed position", false, false, false, false, false, false, false, true)
    ],
    // Dual Button Attacks
    [
      new Move("Thief Expeller", "A+B", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      new Move("Guillotine Scissors Alternate", "6A+B", "M", null, null, null, null, null),
      new Move("Guillotine Scissors Alternate", "6a+b", "MMM", null, null, null, null, null, null, false, true),
      new Move("Frenzy Dive ~ down", "3A+B", "H", null, null, null, null, null, "Returns to downed position"),
      new Move("Evil Bow", "2A+B", "L", null, null, null, null, null, null, false, false, true),
      new Move("Treasure Lift", "D2a+b", "L", null, null, null, null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Fortune Sweeper", "1A+B", "LL", null, null, null, null, null),
      new Move("Web Weaver", "4A+B", "H", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Mantis Crawl", "B+K", "M", null, null, null, null, null, null, true),
      new Move("Super Freak Lunge", "6B+K", null, null, null, null, null, null, null, true),
      new Move("Super Freak Lunge ~ Mantis Crawl", "6b+k", null, null, null, null, null, null, null, true),
      new Move("Super Freak (Inner or Outer)", "2|8B+K", null, null, null, null, null, null, null, true),
      new Move("Super Freak (Inner or Outer) ~ Mantis Crawl", "2|8b+k", null, null, null, null, null, null, null, true),
      new Move("Super Freak Retreat", "4B+K", null, null, null, null, null, null, null, true),
      new Move("Super Freak Retreat ~ Mantis Crawl", "4b+k", "M", null, null, null, null, null, null, true),
      new Move("Super Freak", "A+K", null, null, null, null, null, null, "Dodges high, mid & low", true),
      new Move("Blind Dive", "C3A+B", "H", null, null, null, null, null),
      new Move("Blind Dive", "C3a+b", "H", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Freak Roll", "TA+B", "m", null, null, null, null, null, "Returns to facing away", false, true, false, false, false, false, false, true),
      new Move("Freak Roll ~ Mantis Crawl", "Ta+b", "m", null, null, null, null, null, null, true, true, false, false, false, false, false, true),
      new Move("Reverse Evil Bow", "T2A+B", "L", null, null, null, null, null, "Returns to crouching & facing away", false, false, true),
      new Move("Reverse Evil Bow ~ Mantis Crawl", "T2a+b", "L", null, null, null, null, null, null, true),
      new Move("Web Weaver", "T4A+B", "H", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Mantis Crawl", "TB+K", "M", null, null, null, null, null, null, true),
      new Move("Super Freak Retreat", "T6B+K", null, null, null, null, null, null, "Returns to facing away", true),
      new Move("Super Freak Retreat ~ Mantis Crawl", "T6b+k", "M", null, null, null, null, null, null, true),
      new Move("Super Freak (Inner or Outer)", "T2|8B+K", null, null, null, null, null, null, "Returns to facing away", true),
      new Move("Super Freak (Inner or Outer) ~ Mantis Crawl", "T2|8b+k", null, null, null, null, null, null, null, true),
      new Move("Super Freak Lunge", "T4B+K", null, null, null, null, null, null, "Returns to facing away", true),
      new Move("Super Freak Lunge ~ Mantis Crawl", "T4b+k", null, null, null, null, null, null, null, true),
      new Move("Super Freak", "TA+K", "", null, null, null, null, null, "Dodges high, mid & low/Returns to facing away", true),
      new Move("Mantis Crawl", "dB+K", "", null, null, null, null, null, null, true)
    ],
    // 8-Way Run Moves
    [
      new Move("Scorpion Sting", "#|^|(A", "M", null, null, null, null, null, null, false, false, true),
      new Move("Scorpion Sting ~ Mantis Crawl", "#|^|(a", "M", null, null, null, null, null, null, true),
      new Move("Blind Blade", "@|*A", "M", null, null, null, null, null),
      new Move("Lunatic Doll", "!|$|uA", "M", null, null, null, null, null),
      new Move("Demon Elbow", "#|^|(B", "M", null, null, null, null, null),
      new Move("Despair", "@|*B", "MM", null, null, null, null, null),
      new Move("Katar Gore ~ facing away", "!|$|uB", "M", null, null, null, null, null, "Returns to facing away"),
      new Move("Blind Drop ~ facing away", "#|^|(K", "MM", null, null, null, null, null, "Returns to crouching and facing away", false, false, true),
      new Move("Demon Tail", "@|*K", "H", null, null, null, null, null, null, false, false, true),
      new Move("Single Flap", "!|$|uK", "H", null, null, null, null, null),
      new Move("Single Flap ~ Mantis Crawl", "!|$|uk", "H", null, null, null, null, null, null, true),
      new Move("Gate Opener", "#|^|(A+B", "MM", null, null, null, null, null),
      new Move("Gate Prier", "#|^|(A+BK", "MH", null, null, null, null, null),
      new Move("Mystery Dance", "@|*A+B", null, null, null, null, null, null, "Transition between facing forward and away", true),
      new Move("Death Rose", "!|$|uA+B", "MMMM", null, null, null, null, null),
      new Move("Death Rose", "!|$|ua+b", "MMMM", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Super Freak Lunge", "#|^|(B+K", null, null, null, null, null, null, null, true),
      new Move("Super Freak Lunge ~ Mantis Crawl", "#|^|(b+k", null, null, null, null, null, null, null, true),
      new Move("Super Freak (Inner or Outer)", "@|*BK", null, null, null, null, null, null, null, true),
      new Move("Super Freak (Inner or Outer) ~ Mantis Crawl", "@|*b+k", null, null, null, null, null, null, null, true),
      new Move("Super Freak Retreat", "!|$|uB+K", null, null, null, null, null, null, null, true),
      new Move("Super Freak Retreat ~ Mantis Crawl", "!|$|ub+k", "M", null, null, null, null, null, null, true),
      new Move("Super Freak", "eA+K", null, null, null, null, null, null, "Dodges high, mid & low", true),
      new Move("Sliding", "RK", "L", null, null, null, null, null),
      new Move("Scarecrow", "TeA", "M", null, null, null, null, null, null, false, true),
      new Move("Faceless Centipede ~ Mantis Crawl", "TeBB", "MMMM", null, null, null, null, null, null, true),
      new Move("Wyrm Breakdance ~ Mantis Crawl", "TeK", "LH", null, null, null, null, null, null, true),
      new Move("Super Freak Retreat", "T#|^|(B+K", null, null, null, null, null, null, "Returns to facing away", true),
      new Move("Super Freak Retreat ~ Mantis Crawl", "T#|^|(b+k", "M", null, null, null, null, null, null, true),
      new Move("Super Freak (Inner or Outer)", "T@|*B+K", null, null, null, null, null, null, "Returns to facing away", true),
      new Move("Super Freak (Inner or Outer) ~ Mantis Crawl", "T@|*b+k", null, null, null, null, null, null, null, true),
      new Move("Super Freak Lunge", "T!|$|uB+K", null, null, null, null, null, null, "Returns to facing away", true),
      new Move("Super Freak Lunge ~ Mantis Crawl", "T!|$|ub+k", null, null, null, null, null, null, null, true),
      new Move("Super Freak", "TeA+K", null, null, null, null, null, null, "Dodges high, mid & low/Returns to facing away", true),
      new Move("Bloody Drill", "T#|^|(A+G", "", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true)
    ],
    // Throws
    [
      new Move("Spinning Umbrella", "A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Catacomb Throw", "4A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Fool's Inquest", "ZA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Bush Whacker", "XA+G", "H", null, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Sadistic Spider", "VA+G", "H", null, null, null, null, null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Bloody Drill", "T#|^|(A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Life Sucker", "]A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Centipede Nightmare ~ Mantis Crawl", "]4A+G", "H", null, null, null, null, null, "Breakable", true, false, false, false, false, false, true),
      new Move("Life Sucker", "{A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Centipede Nightmare ~ Mantis Crawl", "{4A+G", "H", null, null, null, null, null, "Breakable", true, false, false, false, false, false, true)
    ],
    // ************ Stances *************
    // Mantis Crawl
    [
      new Move("Mantis Crawl", "B+K", null, null, null, null, null, null, "Returns to crouching on stance cancel with G", true),
      new Move("Mantis Crawl ~ Mantis Crawl", "[2|8", null, null, null, null, null, null, null, true),
      new Move("Fool's Labyrinth ~ Mantis Crawl", "[A", "M", null, null, null, null, null, null, true),
      new Move("Fanatic Fool ~ Mantis Crawl", "[A+B", null, null, null, null, null, null, null, true),
      new Move("Fool Ritual ~ Mantis Crawl", "[B+K", "m", null, null, null, null, null, "GI vs. mid vertical", false, false, false, true),
      new Move("Mantis Fire Dance ~ Mantis Crawl", "[^", "S", null, null, null, null, null, "Feet towards opponent", true),
      new Move("Fool's Gravedigger", "[B", "MM", null, null, null, null, null, "Feet towards opponent", false, true),
      new Move("Freak Roll ~ Mantis Crawl", "[K", "m", null, null, null, null, null, "Feet towards opponent", true),
      new Move("Fortune Spasm", "[Kv8", "M", null, null, null, null, null, "Feet towards opponent/Can move using 4 or 6/Press 8(hold) to change speed"),
      new Move("Spasm", "[c2", "L", null, null, null, null, null, "Feet towards opponent/Returns to downed position"),
      new Move("Scorpion Kick", "[4K", "H", null, null, null, null, null, "Feet towards opponent", false, false, true),
      new Move("Mantis Fire Dance ~ Mantis Crawl", "[T^", "L", null, null, null, null, null, "Head towards opponent", true, true),
      new Move("Fool's Spring", "[TB", "M", null, null, null, null, null, "Head towards opponent/Returns to facing away"),
      new Move("Freak Roll ~ Mantis Crawl", "[TK", "m", null, null, null, null, null, "Head towards opponent", true),
      new Move("Fortune Spasm", "[TKv8", "M", null, null, null, null, null, "Can move using 4 or 6/Press 8(hold) to change speed"),
      new Move("Spawm", "[Tx2", "L", null, null, null, null, null, "Head towards opponent/Returns to downed position"),
      new Move("Blind Drop ~ facing away", "[T4K", "M", null, null, null, null, null, "Head towards opponent/Returns to facing away")
    ],
    // Caliostro Rush
    [
      new Move("Caliostro Rush", "236", null, null, null, null, null, null, null, true, false, true, false, false, false, false, false, false, true),
      new Move("Rat Retreat", "]1", null, null, null, null, null, null, null, true, false, true, false, false, false, false, false, false, true),
      new Move("Rat Chaser", "]13", null, null, null, null, null, null, null, true, false, true, false, false, false, false, false, false, true),
      new Move("Mantis Slap", "]AA", "HM", null, null, null, null, null),
      new Move("Mad Shredder", "]BBB", "MMM", null, null, null, null, null),
      new Move("Tomb Implant ~ Mantis Crawl", "]K", "M", null, null, null, null, null, null, true),
      new Move("Snake Eater", "]A+B", "L", null, null, null, null, null, null, false, false, true),
      new Move("Writhing Fumble ~ facing away", "]B+K", null, null, null, null, null, null, "Returns to crouching & facing away", true, false, true),
      new Move("Life Sucker", "]A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Centipede Nightmare ~ Mantis Crawl", "]4A+G", "H", null, null, null, null, null, "Breakable", true, false, false, false, false, false, true)
    ],
    // Blind Calistro Rush
    [
      new Move("Blind Caliostro Rush", "T236", null, null, null, null, null, null, "Returns to crouching and facing away", true, false, true, false, false, false, false, false, false, true),
      new Move("Rat Chaser", "{1", null, null, null, null, null, null, "Returns to crouching and facing away", true, false, true, false, false, false, false, false, false, true),
      new Move("Rat Retreat", "{13", null, null, null, null, null, null, "Returns to crouching and facing away", true, false, true, false, false, false, false, false, false, true),
      new Move("Blind Double Claw", "{A", "M", null, null, null, null, null, "Returns to facing away"),
      new Move("Red Stitch", "{B", "M", null, null, null, null, null),
      new Move("Blind Drop Kick", "{K", "L", null, null, null, null, null, "Returns to downed position"),
      new Move("Writhing Blind Fumble", "{B+K", null, null, null, null, null, null, null, false, false, true),
      new Move("Life Sucker", "{A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Centipede Nightmare ~ Mantis Claw", "{4A+G", "H", null, null, null, null, null, "Breakable", true, false, false, false, false, false, true)
    ],
    // Death Roll
    [
      new Move("Death Roll", "S3A+B", null, null, null, null, null, null, "Returns to downed position when cancelling stance with G", true),
      new Move("Death Roll ~ Mantis Crawl", "S}2|8", null, null, null, null, null, null, null, true),
      new Move("Superwyrm ~ Death Roll", "S}A", "LLL", null, null, null, null, null, null, true, false, false, false, false, true, false, true),
      new Move("Superior Arachnid ~ Death Roll", "S}B", "MMM", null, null, null, null, null, null, true, false, false, false, false, true, false, true),
      new Move("Superwyrm Escape ~ Death Roll", "S}K", "L", null, null, null, null, null, null, true),
      new Move("Gravestone Cleaver", "S}A+B", "M", null, null, null, null, null, "Returns to downed position", false, false, false, false, false, false, false, false, true),
      new Move("Back Strike ~ Mantis Crawl", "S}B+K", "MMM", null, null, null, null, null, "Revenge attack", true),
      new Move("Maddening Slaps", "Sw}B+K", "H", null, null, null, null, null, "Returns to downed position", false, false, false, false, false, false, false, false, true)
    ]
  ]

  Xianghua = [
    // Reversal Edge Attacks
    [
      new Move("Jade Break", "B+G", "M", 46, -2, null, null, 30, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Jade Break", "b+g", "M", 66, null, null, null, 40, "Shifts to clash upon hit or guard", false, false, false, false, true, false, false, true),
      new Move("Place Rhythm", "rA", "H", 36, -8, -7, -7, 20, null, false, true, true),
      new Move("Place Rhythm", "rAA", "HL", 36, -4, "LNC", "LNC", 42, "TC[20~]", false, true, true),
      new Move("Jewel Song", "rAB", "HM", 32, -4, "LNC", "LNC", "TC[1-2] / to FC", null, false, true),
      new Move("Palace Rhythm ~ Facing away", "rAzG", "H", null, null, null, null, null, null, false, true, true),
      new Move("Auspicious Strike", "rB", "M", 34, 15, "KND", "KND", 36, null, false, true, false, false, false, false, false, true),
      new Move("Lin Yuen Kick", "rK", "M", 48, -6, 12, 12, 24, null, false, true),
      new Move("Lin Yuen Kick ~ Hou Lee", "rKB+K", "M", null, null, null, null, null, "To Hou Lee", true, true)
    ],
    // Gauge Attacks
    [
      new Move("Sublimating Blade", "A+B+K", "M", 16, -20, "LNC", "LNC", 15, null, false, false, false, false, false, false, true, false, false, false, true),
      new Move("Soul Charge", "4A+B+K", "m", 2, 0, 8, 8, 0, null, false, false, false, false, false, false, false, true, false, false, true), //inconsistent between 8WR and the spreadsheet
      new Move("Dazzling Song", "SA", "H", 10, -10, 0, 0, 8, null, false, false, false, false, false, true),
      new Move("Dazzling Song", "SAB", "HM", 10, -24, "STN", "STN", 28, "TC[17-38]", false, false, false, false, false, true),
      new Move("Wind Blossom Song", "SAA", "HHM", 16, -10, 0, 0, 10, null, false, false, false, false, false, true),
      new Move("Wind Blossom Song", "SAAB", "HHMM", 16, -4, 8, 8, 30, null, false, false, false, false, false, true),
      new Move("Wind Blossom Song", "SAABB", "HHMMM", 16, -12, 4, 10, 55, null, false, false, false, false, false, true),
      new Move("Qing Quake Step", "SAABK", "HHMMm", 30, 4, "STN", "STN", 36, "Becomes a low attack when at a distance", false, false, false, false, false, true, false, true),
      new Move("Red Moon Chime", "S6A", "H", 14, -4, 4, 4, 18, null, false, false, false, false, false, true),
      new Move("Red Moon Chime", "S6AK", "HLM", 14, -14, "LNC", "LNC", 38, "TC[22-52]", false, false, false, false, false, true),
      new Move("Lian Hua Pagoda Sweeps", "S6AK2K", "HLL", 14, -6, 6, 6, 58, null, false, false, false, false, false, true),
      new Move("Shining Blossom", "S3A", "L", 22, -18, -2, 2, 14, "TC[11~]", false, false, true, false, false, true),
      new Move("Shining Blossom", "S3AA", "LM", 22, -4, "STN", "STN", 32, "TC[31~]", false, false, true, false, false, true),
      new Move("Flower Dance", "SxK", "MM", 16, -12, -2, -2, 24, null, false, false, false, false, false, true),
      new Move("Flower Dance", "SxKB", "MMM", 16, -20, "LNC", "LNC", 44, null, false, false, false, false, false, true),
      new Move("Shining Swallow", "S6K", "M", 16, -12, 4, 4, 14, null, false, false, false, false, false, true),
      new Move("Shining Swallow", "S6KB", "MM", 16, -15, -1, -1, 32, null, false, false, false, false, false, true),
      new Move("Shining Swallow", "S6KBB", "MMM", 16, -13, "KND", "KND", 52, null, false, false, false, false, false, true),
      new Move("Shining Swallow ~ Silent Xia Sheng", "S6Kb", "MM", 19, -10, 6, 18, 20, "SS / GI[8-23]", true, false, false, true, false, true),
      new Move("Drunken Woan Shyong Swing", "S#|^|(K", "M", 12, -10, 2, 2, 18, null, false, false, false, false, false, true),
      new Move("Drunken Woan Shyong Swing", "S#|^|(KK", "ML", 12, -16, 2, "KND", null, null, false, false, false, false, false, true),
      new Move("Woan Shyong Feint Divide", "S#|^|(KAAB", "MMMML", 21, -18, "LNC", "LNC", 68, "TC[28~]", false, false, true, false, false, true),
      new Move("Woan Shyong Feint Kick", "S#|^|(KAAK", "MMMMM", 31, -16, 0, 0, 24, "TJ[15-30]", false, false, false, false, false, true),
      new Move("Radiant Ring", "S#|^|(A+B", "MMM", 20, -12, "KND", "KND", 40, null, false, false, false, false, false, true),
      new Move("Radiant Ring", "S#|^|(A+BB", "MMMM", 20, 8, "KND", "KND", 90, null, false, false, false, false, false, true),
      new Move("Scintillating Waterfall", "S#|^|(B+K", "MM", 18, -12, "LNC", "LNC", 40, "TC[3-10]", false, false, true, false, false, true),
      new Move("Scintillating Waterfall", "S#|^|(B+KB", "MM", 18, -12, "STN", "STN", 70, "TC[29~]", false, false, true, false, false, true),
      new Move("Scintillating Waterfall", "S#|^|(B+KxG", "M", null, null, null, null, null, null, true, false, false, false, false, true),
      new Move("Silent Xia Sheng", "Sb+k", null, null, null, null, null, null, "GI vs. high, mid(except kicks)", true, false, false, true, false, true),
      new Move("Heavenly Waterfall", "S]B", "M", 28, 12, "STN", "STN", 45, "GI[1-2]", false, false, true, false, false, true, false, true),
      new Move("Heavenly Waterfall", "S]b", "M", 28, 18, "STN", "STN", 105, "GI[1-2]", false, false, true, false, false, true, false, false, true),
      new Move("Twisting Lotus Flower", "S]A+G|4A+GB", "H", null, null, null, null, null, null, false, false, false, false, false, true, true),
      new Move("Playful Xia Sheng", "S]2", null, null, null, null, null, null, "Can be shifted to follow-up during SXS/Can be held", true, false, false, false, false, true)
    ],
    // Horizontal Moves
    [
      new Move("Beautiful Melody", "A", "H", 10, -10, 0, 0, 8, null),
      new Move("Beautiful Melody", "AA", "HH", 10, -10, 0, 0, 18, null),
      new Move("Beautiful Melody", "AAA", "HHM", 10, -8, 4, "KND", 36, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Beautiful Rhythm", "AAB", "HHM", 10, -14, 4, 4, 40, null),
      new Move("Beautiful Rhythm ~ Laughing Bea Her Hua", "AAB4", "HHM", 10, -14, 4, 4, 40, "GI vs. high, mid vertical", true, false, false, true), //impact speed inconsistent between 8WR and the spreadsheet
      new Move("Beautiful Rhythm ~ Silent Xia Sheng", "Aa", "HH", 10, null, null, null, null, null, true),
      new Move("Lian Hua Water Rhythm", "6A", "H", 14, -4, 4, 4, 18, null, false, false),
      new Move("Lian Hua Water Rhythm", "6AA", "HL", 14, -10, 4, 4, 36, null),
      new Move("Angry Shui Shian", "3A", "L", 22, -18, -2, 2, 14, null),
      new Move("Angry Shui Shian", "3AK", "LH", 22, -2, "KND", "KND", 32, null),
      new Move("Angry Shui Shian ~ Playful Xia Sheng", "3A2", "L", 22, -18, -2, 2, 14, null, true),
      new Move("Rhythm Halt", "2A", "S", 12, -6, 6, 6, 10, null, false, false, true),
      new Move("Yann Divide", "1A", "L", 28, -16, 4, 4, 22, null, false, true, true),
      new Move("Yann Divide ~ facing away", "L", "1zG", 28, -16, 4, 4, 22, null, null, false, false, true),
      new Move("Sweet Harmony", "4A", "M", 28, -10, 4, 4, 20, null),
      new Move("Sweet Harmony", "4AA", "MH", 28, -6, 4, "STN", 34, "GI vs. high, mid horizontal", false, false, false, true),
      new Move("Sweet Harmony ~ Silent Xia Sheng", "4a", "M", 28, null, null, null, null, null, true, false, false, true),
      new Move("Chai Hua Slice", "C2A", "S", 12, -6, 6, 6, 10, null, false, false, true),
      new Move("Mei Hua Twilight", "C3A", "LH", 24, -10, 0, 0, 24, null),
      new Move("Mei Hua Twilight", "C3AA", "LHH", 24, -12, 4, 4, 42, null),
      new Move("Mei Hua Twilight ~ Bea Her Hua", "C3Aa", "LHH", 19, -12, 4, 4, 18, "GI vs. high, mid horizontal", true, false, false, true),
      new Move("Mei Hua Divide", "C3AB", "LHH", 29, -8, "STN", "STN", 26, null),
      new Move("Muu Jiann Rhythm", "WA", "M", 20, -8, 4, 4, 26),
      new Move("Muu Jiann Rhythm", "WAA", "MM", 20, -8, 4, 4, null, null),
      new Move("Sparrow Spin Blade", "JA", "H", 24, -6, 6, 6, 26, null),
      new Move("Spinning Jiann Slice", "TA", "H", 12, -4, 6, 6, 12, null),
      new Move("Spinning Rhythm Halt", "T2A", "S", 16, -6, 4, 4, 14, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Emperor's Lament", "B", "M", 14, -6, 0, 0, 12, null),
      new Move("Emperor's Lament", "BB", "MM", 14, -8, 2, 2, 24, null),
      new Move("Emperor's Lament", "BBB", "MMMM", 14, -6, 4, 4, 50, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Emperor's Lament ~ Silent Xia Sheng", "BBb", "MMM", 14, null, null, null, null),
      new Move("Lapis Chime", "BBK", "MML", 20, -8, 4, 10, 16, null, false, false, true),
      new Move("Wei Guang Blade", "xA", "M", 32, -10, "KND", "KND", 24),
      new Move("Crescent Flow", "xK", "MM", 16, -12, -2, -2, 24, null),
      new Move("Rippling Chant", "6B", "M", 17, -13, -3, 7, 16, null),
      new Move("Rippling Chant", "6BA", "ML", 17, -10, 2, 2, 32, null, false, false, true),
      new Move("Still Water", "6BB", "MM", 31, -10, "LNC", "LNC", 20, null),
      new Move("Still Water ~ Laughing Bea Her Hua", "6B4", "M", 17, -13, -3, 7, 16, "GI vs. high, mid vertical", true, false, false, true),
      new Move("Still Water ~ Playful Xia Sheng", "6B2", "M", 17, -13, -3, 7, 16, null, true),
      new Move("Lian Hua Upper", "3B", "M", 17, -13, "LNC", "LNC", 24),
      new Move("Rhythm Break", "2B", "M", 16, -6, 2, 2, 18, null, false, false, true),
      new Move("Wild Spin", "1B", "L", 30, -18, -2, "STN", 16),
      new Move("Advancing Rhythm", "4B", "H", 12, -8, 4, 4, 15, null),
      new Move("Advancing Rhythm", "4BA", "HM", 12, -10, 4, 4, 35, null),
      new Move("Pointing Thrust", "4BB", "HL", 12, -12, 2, 2, 15, null),
      new Move("Rhythm Break", "CB", "M", 16, -6, 2, 2, 18, null, false, false, true),
      new Move("Mei Guei Hua", "C3B", "M", 17, -9, "LNC", "LNC", 26, null),
      new Move("Shiang Ryh Kwei", "WB", "MM", 15, -2, "STN", "STN", 24, null),
      new Move("Sparrow Flutter Blade", "JB", "M", 22, -8, 2, 2, 32, null),
      new Move("Spinning Hua Bann", "TB", "M", 18, -6, 4, 4, 18, null),
      new Move("Spinning Rhythm Break", "T2B", "M", 18, -8, 2, 2, 20, null, false, false, true)
    ],
    // Kicks
    [
      new Move("Yuen Kick", "K", "H", 12, -8, 2, 2, 14, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Heh Kick", "c6", "H", 14, -16, "KND", "KND", 24, "TC[1-6]"),
      new Move("Swallow's Blade", "6K", "M", 16, -12, 4, 4, 14, null),
      new Move("Swallow's Blade", "6KA", "MH", 16, -12, 4, 4, 32, "TJ[18-38]"),
      new Move("Swallow's Blade ~ Bea Her Hua", "6Ka", "MH", 26, -12, 4, 4, 18, "GI vs. high, mid horizontal", true, false, false, true),//data inconsistent between 8WR and the sreadsheet
      new Move("Chicken Kick", "3K", "M", 14, -8, 4, 4, 14, null),
      new Move("Woan Shyong Nibble", "2K", "L", 16, -14, -4, -4, 20, null),
      new Move("Circle Breaker", "1K", "L", 24, -16, 2, "LNC", null),
      new Move("Circle Breaker Feint Divide", "1cA", "M", 28, -10, 0, 0, 18, "TC[14-40,1~]"),
      new Move("Circle Breaker Feint Divide", "1cAA", "MMM", 28, -8, 4, 4, null), //inconsistent frame data again
      new Move("Circle Breaker Feint Divide", "1cAAB", "MMML", 28, -18, "KND", "KND", null), //inconsistent frame data again
      new Move("Circle Breaker Feint Double Feng Yun", "1cAAK", "MMMM", 28, -16, 0, 0, null),
      new Move("Shan Kick", "4K", "H", 16, -2, 4, 4, 16, null),
      new Move("Woan Shyong Nibble", "CK", "L", 16, -2, "KND", "KND", null, null, false, false, true),
      new Move("Rising Hou Ling Thorn", "C3K", "M", 15, -19, 5, "LNC", 26, null),
      new Move("Rising Hou Ling Thorn", "C3KB", "MH", 15, 10, "KND", "KND", 66, "TC[6-24]", false, true, false, false, false, false, false, true),
      new Move("Rising Shun Ling Thorn", "C3KB6", "MHH", 15, -4, "KND", "KND", 96, null),
      new Move("Rising Hou Ling Thorn ~ Playful Xia Sheng", "C3KB2", "H", 42, 10, "KND", "KND", 40, null, true),
      new Move("Rising Hou Ling Thorn ~ Playful Xia Sheng", "C3Kx2", "MH", 16, null, null, null, null, null, true),
      new Move("Advancing Tiger Thrust", "WK", "M", 12, -10, 0, 10, 16, "TC[1-4]"),
      new Move("Advancing Tiger Thrust", "WKB", "MM", 12, -14, "STN", "STN", 41, null),
      new Move("Advancing Tiger Thrust ~ Silent Xia Sheng", "Wk", "M", 12, null, null, null, null, null, true),
      new Move("Star Kick", "JK", "MM", 18, -12, 4, 4, 24, "TJ[7~]"),
      new Move("Star Kick", "JKK", "MMM", 18, 2, "STN", "STN", 42, "TJ[16-36]"),
      new Move("Star Kick ~ Playful Xia Sheng", "JKK2", "H", null, null, null, null, null, null, true), //not listed anywhere
      new Move("Spinning Yuen Kick", "TK", "H", 16, -4, 6, 6, 18, null),
      new Move("Spinning Woan Shyong Nibble", "T2K", "L", 18, -14, -4, -4, 18, "TC[13~]", false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Hou Ling Thorn", "A+B", "H", 42, 10, "KND", "KND", 40, "TC[6-24]", false, true, false, false, false, false, false, true),
      new Move("Shun Ling Thorn", "A+B6", "HHH", 42, -4, "KND", "KND", 110, null, false, true),
      new Move("Shun Ling Thorn ~ Playful Xia Sheng", "A+B2", "H", 42, 10, "KND", "KND", 40, null, true),
      new Move("Shun Ling Thorn ~ Playful Xia Sheng", "z+x2", "H", 42, 10, "KND", "KND", 40, null, true),
      new Move("Twin Mei Hua", "6A+B", "MM", 22, -10, "STN", "STN", 36, "GI vs. high, mid vertical", false, true, false, true),
      new Move("Fluttering Lan Se Ren", "2A+B", "M", 28, -12, "STN", "STN", 20, "GI vs. low", false, true, false, true),
      new Move("Muu Jiann Retreat", "4A+B", "MM", 26, -12, "STN", "STN", 38, "GI vs. high, mid horizontal", false, true, false, true),
      new Move("Hou Lee ~ Hou Lee", "B+K", null, null, null, null, null, null, null, true, false, true),
      new Move("Hou Lee ~ Silent Xia Sheng", "b+k", null, null, null, null, null, null, null, true),
      new Move("Muu Jiann", "6B+K", "MM", 22, -16, "KND", "KND", 38, "2nd hit can be held"),
      new Move("Great Wall Chime", "3B+K", "M", 20, -16, 2, 2, 20),
      new Move("Great Wall Chime", "3B+KK", "MM", 20, -13, "LNC", "LNC", 42),
      new Move("Quake Step", "2B+K", "m", 40, 4, "STN", "STN", 36, "Becomes a low attack when at a distance", false, false, false, false, false, false, false, true),
      new Move("Quake Step ~ Silent Xia Sheng", "2b+k", null, null, null, null, null, null, null, true),  //SS only
      new Move("Hwu Dye", "1B+K", "M", 24, -8, 4, 4, 24, "TC[5-13]", false),
      new Move("Muu Ling", "4B+K", "M", 60, -2, "STN", "STN", 50, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Mei Guei Hue Feint", "C3B+K", "L", 17, 8, "STN", "STN", 58, null, false, false, false, false, false, false, false, true),
      new Move("Mei Guei Hue Feint ~ Silent Xia Sheng", "C3b+k", null, null, null, null, null, null, null, true),
      new Move("Shiang Gyh Kwei Feint", "8B+K", "L", 38, -12, 4, "LNC", 28, "Returns to crouch on cancel", false, false, false, false, false, false, false, false, false, true),
      new Move("Shiang Gyh Kwei Feint ~ Silent Xia Sheng", "8b+k", "L", 38, -12, 4, "LNC", 28, null, true),
      new Move("Reverse Chicken Kick", "TB+K", "M", 17, -7, 15, 15, 20, "TC[6-16]", false),
      new Move("Circle Breaker", "T2B+K", "L", 22, -10, 10, 10, null),
      new Move("Guei", "dA+B", "L", 6, -30, -20, -20, 5, "Returns to downed position", true) //intoStance iff. you consider WD a stance
    ],
    // 8-Way Run Moves
    [
      new Move("Fragrant Dream", "#|^|(A", "H", 16, -10, 0, 0, 18, "Returns to crouch when G cancelling 3rd hit", null, false, false, false, false, false, false, false, false, true),
      new Move("Fragrant Dream", "#|^|(AB", "HM", 16, -8, 6, 6, 30, "Returns to crouch when G cancelling 3rd hit", null, false, false, false, false, false, false, false, false, true),
      new Move("Fragrant Dream", "#|^|(ABA", "HMM", 16, -10, "LNC", "LNC", 62, "Returns to crouch when G cancelling 3rd hit", null, false, false, false, false, false, false, false, false, true),
      new Move("Fragrant Dream ~ Silent Xia Sheng", "#|^|(ABa", "M", 38, -10, "LNC", "LNC", 32, null, true),  //hit-level  and impact speedis inconsistent between 8WR and the spreadsheet
      new Move("Fragrant Fantasy", "#|^|(ABB", "HML", 40, -12, 4, "LNC", 28, "Returns to crouch when G cancelling 3rd hit", null, false, false, false, false, false, false, false, false, true),
      new Move("Fragrant Fantasy ~ Silent Xia Sheng", "#|^|(ABb", "HML", 40, -12, 4, "LNC", 28, null, true),
      new Move("Storming Lian Hua", "@|*A", "M", 22, -2, 8, 8, 20, "TC[3-8]"),
      new Move("Lan Hua", "!|$|uA", "M", 24, -8, 0, "STN", 20, null),
      new Move("Lan Hua", "!|$ua", "MH", 38, 2, 18, 18, null, "impact speed not certain"),
      new Move("Playful Rhythm", "#|^|(B", "M", 20, -8, 4, "STN", 16, null),
      new Move("Playful Rhythm", "#|^|(BB", "MM", 20, -14, 4, "STN", 40, null),
      new Move("Playful Rhythm", "#|^|(Bb", "MM", 26, 6, "STN", 36, null, null, false, true, false, false, false, false, false, true),
      new Move("Playful Rhythm ~ Laughin Bea Her Hua", "#|^|(B4", "M", 20, -8, 4, "STN", 16, "GI vs. high, mid vertical", true, false, false, true),
      new Move("Playful Rhythm ~ Laughing Bea Her Hua", "#|^|(BB4", "MM", 20, -14, 4, "STN", 40, "GI vs. high, mid vertical", true, false, false, true),
      new Move("Playful Rhythm ~ Silent Xia Sheng", "#|^|(b", "M", 20, null, null, null, null, null, true), //needs damage
      new Move("Playful Slice", "@|*B", "MM", 20, -8, "STN", "STN", 28, null),
      new Move("Vengeful Lian Hua", "!|$|uB", "M", 32, -20, "LNC", "LNC", 36, null),
      new Move("Vengeful Lian Hua ~ Laughin Bea Her Hua", "!|$|uB4", "M", 32, -20, "LNC", "LNC", null, "GI vs. high, middle vertical", true, false, false, true), //needs damage
      new Move("Woan Shyong Swing", "#|^|(K", "M", 12, -10, 2, 2, 18, null, null),
      new Move("Mei Hua Kick", "@|*K", "M", 36, 2, "STN", "STN", 30, null),
      new Move("Mei Hua Kick ~ Playful Xia Sheng", "@|*K2", "M", null, null, null, null, null, null, true), //no data available on this entry
      new Move("Lian Hua Kicks", "!|$|uK", "L", 38, -10, "LNC", "LNC", 20, "TC[26~]"),
      new Move("Lian Hua Kicks", "!|$|uKK", "LMM", 38, -6, 6, 6, 40, "TC[1-16] / TJ[16~]"),
      new Move("Lian Hua Sweeps", "!|$|uK2K", "LL", 38, -16, "LNC", "LNC", 40, "TC[26~]"),
      new Move("San Jaan", "#|^|(A+B", "MMM", 20, -12, "KND", "KND", 40),
      new Move("San Jaan ~ Silent Xia Sheng", "#|^|(a+b", "MM", null, null, null, null, null, null, true), //no data available on this entry
      new Move("Lian Hua Cannon", "@|*A+B", "M", 24, -16, "LNC", "LNC", "TC[8-20]"),
      new Move("Reverse Shui Shian", "!|$|uA+B", "M", 28, -14, 2, "STN", 24, "Returns to downed when G cancelling", false, false, false, false, false, false, false, false, false, true),
      new Move("Hou Lee Hua", "#|^|(B+K", "M", 18, -22, "LNC", "LNC", 40, "TC[4-11]"),
      new Move("Bea Her Hua (close)", "@|*B+K", "l", 40, 4, "KND", "KND", null, "GI vs. high, mid horizontal", true, false, false, true),  //needs damage
      new Move("Bea Her Hua (far)", "@|*B+K", "L", 44, -14, 18, 18, null, "GI vs. high, mid horizontal", true, false, false, true), //needs damage
      new Move("Retreating Bea Her Hua", "!|$|uB+K", "M", 60, null, "KND", "KND", null, "GI vs. high, mid horizontal", true, false, false, true), //needs damage
      new Move("Sliding", "RK", "L", 22, -22, "KND", "KND", 22, "TC[26-46] / TJ[6-26]")
    ],
    // Throws
    [
      new Move("Yuen Chuei Shaur", "A+G", "H", 18, null, null, null, null, "Breakable", false, false, false, false, false, false, true), //just needs damage
      new Move("Long Ling Sheang", "4A+G", "H", 18, null, null, null, null, "Breakable", false, false, false, false, false, false, true), //needs damage
      new Move("Tien E Sheang", "ZA+G", "H", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),   //needs damage
      new Move("Yng Dyi Yann", "XA+G", "H", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),
      new Move("Yuh Luen Shaur", "VA+G", "H", 18, null, "KND", "KND", null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Shui Long Sheang", "Q2|3A+G", "M", 10, null, "KND", "KND", null, "Breakable/Returns to downed", false, false, false, false, false, false, true), // Returns to downed
      new Move("Lo Tsai Shaur ~ Reverse Chicken Kick", "Q1A+G", "M", 10, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),
      new Move("Lo Tsai Shaur ~ Reverse Chicken Kick", "Q1A+GB+K", "MM", 19, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),
      new Move("Lo Tsai Shaur ~ Reverse Chicken Kick(just)", "Q1A+GB+Kj", "MM", 19, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),
      new Move("Water Banquet", "214A+G", "HH", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),
      new Move("Wind Chime", "]A+G|4A+G", "HH", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),
      new Move("Twisting Lotus Flower", "S]A+G|4A+GB", "H", 18, 18, "STN", "STN", null, null, false, false, false, false, false, true, true)
    ],
    // ************ Stances *************
    // Hou Lee
    [
      new Move("Hou Lee", "B+K", "M", null, null, null, null, null, null, true, false, true),
      new Move("Lower Great Wall Punishment", "[B", "M", 20, -6, "LNC", "LNC", 45, "TC[1-6]"),
      new Move("Lower Great Wall", "[b", "M", 20, 8, "KND", "KND", 55, "TC[1-5]", false, false, false, false, false, false, false, true)
    ],
    // Silent Xia Sheng
    [
      new Move("Silent Xia Sheng", "b+k", null, null, null, null, null, null, null, true),
      new Move("Splitting Mist", "]A", "H", 18, -2, 8, "STN", 26),  
      new Move("Waterfall", "]B", "M", 28, -10, "KND", "KND", 35, null, false, false, true, false, false, false, false, false, false),
      new Move("Waterfall", "]b", "M", 46, 12, "KND", "KND", 45, null, false, false, true, false, false, false, false, true), //conflicting data on impact speed between 8WR and the spreadsheet
      new Move("Rising Cloud", "]K", "M", 13, -11, 7, 7, 16, "TC[1-8]", false, true),
      new Move("Great Wall", "]A+B", "M", 10, -16, "KND", "KND", 38, null, false, true),
      new Move("Dawn Blade", "]z+x6", "H", 10, -6, "KND", "KND", 38, null, false, true),
      new Move("Bea Her Hua", "]B+K", null, null, null, null, null, null, "GI vs. high, mid horizontal", true, false, false, true),
      new Move("Wind Chime", "]A+G|4A+G", "HH", 18, null, null, null, null, "Breakable", false, false, false, false, false, false, true), //needs damage
      new Move("Playful Xia Sheng", "S]2", null, null, null, null, null, null, "Can be shifted to follow-up during SXS/Can be held", true, false, false, false, false, true),
      new Move("Summer Smile", "]K+G", "H", 51, 0, 10, 10, 1),
      new Move("Summer Blessing", "]6K+G", "MM", 25, 0, 10, 10, 1.1),
      new Move("Summer Delight", "]4K+G", "H", 21, -10, -10, -10, 1)
    ],
    // Bea Her Hua
    [
      new Move("Bea Her Hua", "@|*B+K", null, null, null, null, null, null, "GI vs. high, mid horizontal", true, false, false, true),
      new Move("Ma Chiueh", "{A", "H", 18, -10, "STN", "STN", 24),
      new Move("Jade Break", "{B", "M", 16, -2, 10, 10, 25, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Feint Wheel Kick", "{K", "LM", 31, -9, "KND", "KND", 42, "TC[19~"),
      new Move("Feint Wheel Kick ~ Side Step", "{K2|8", "LML", 31, -46, "LNC", "LNC", 64, null, true),
      new Move("Hou Ling Thorn", "{A+B", "H", 42, 10, "KND", "KND", 40, null, false, true, false, false, false, false, false, true),
      new Move("Shun Ling Thorn", "{A+B6", "H", 42, -4, "KND", "KND", 100, null, false, true),
      new Move("Hou Ling Thorn ~ Playful Xia Sheng", "{A+B2", "H", 42, 10, "KND", "KND", 40, "TC[6-24, 1~]", true),
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

      new Move("Ugallu's Ingress(Lv. 1)", "rBoB", "Mm", null, null, null, null, null, "If opponent is cursed"), // only if opponent is cursed
      new Move("Ugallu's Ingress(Lv. 2)", "rBoB", "Mm", null, null, null, null, null, "If opponent is cursed"), // only if opponent is cursed
      new Move("Ugallu's Ingress(Lv. 3)", "rBoB", "Mm", null, null, null, null, null, "If opponent is cursed"), // only if opponent is cursed

      new Move("Feral Hound Uridimmu", "rK", "M", null, null, null, null, null, null, false, true, false, false, false, false, false, true)
    ],
    // Gauge Attacks
    [
      new Move("The Voice from the Abyss", "M", "M", 34, 4, "KND", "KND", null, "Curses opponent on hit or guard/GI vs. high, mid & low", false, false, false, true, false, false, false, true, false, false, true),
      new Move("Soul Charge", "4A+B+G", "m", null, 8, 8, 0, null, null, false, false, false, false, false, false, false, true, false, false, true),
      new Move("Ode to Humbaba", "S3AKB", "MHM", 16, -12, -1, -1, null, null, false, false, false, false, false, true),
      new Move("Ceremonial Sacrifice", "S1AB", "LHM", 18, -2, 4, 4, null, null, false, false, false, false, false, true),
      new Move("Void Nova", "SA+B", "mmmmmm", 36, 6, "STN", "STN", null, null, false, true, false, false, false, true, false, true),
      new Move("Temple of Eternity", "S2A+B", "M", 30, 2, "KND", "KND", null, "Curses opponent upon hit/Shifts to attack throw upon hit", false, false, false, false, false, true, true, true),
      new Move("Ishtar's Return", "@|*BBvB", "MMH", 22, -14, "LNC", "LNC", null, null, false, false, false, false, false, true),
      new Move("Fatal Gravity", "SA+G", "H", 18, null, null, null, null, "Breakable", false, false, false, false, false, true, true)
    ],
    // Horizontal Moves
    [
      new Move("Rending Blade of Shamash", "A", "H", 12, -8, 0, 0, 10, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Rending Blade of Shamash", "AA", "HH", 12, -6, 2, 2, 20, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Rending Blade of Shamash", "AAA", "HHH", 12, -8, 10, 10, 45, null, false, false, false, false, false, false, false, false, false, true),
      
      new Move("Bashum's Whisper", "z6", "M", 14, -4, 0, 6, 10),

      new Move("Damnation of Ereshkigal", "6A", "H", 18, -16, 4, "STN", 14),
      new Move("Damnation of Ereshkigal", "6AA", "HH", 18, 6, "KND", "KND", 30),
      new Move("Ereshkigal's Snare", "6AB", "HM", 18, -8, "STN", "STN", 30, null, false, true),

      new Move("Hook of Namtar", "3A", "M", 16, -20, -4, "STN", 14),
      new Move("Hook of Namtar", "3AB", "MM", 16, 16, "STN", "KND", 34),
      new Move("Hook of Namtar(hold)", "3Ab", "MM", null, 0, "KND", "KND", 54),
      new Move("Humbaba's Flame", "3AK", "MH", 16, -10, 6, 6, 26),

      new Move("Mutter of Bashm", "2A", "S", 12, -6, 4, 4, 12, null, false, false, true),
      new Move("Bite of the Kulullu", "1A", "L", 18, -14, -4, -4, 14, null, false, false, true),
      new Move("Ilabrat's Sapara", "4Ao", "HM", 20, -2, 4, 4, 30),

      new Move("Mutter of Bashm", "CA", "S", null, null, null, null, null, null, false, false, true),
      new Move("Great Scythe of Shamash", "WA", "H", 18, -8, 4, 4, 26),
      new Move("Shamash the Just", "JA", "L", 38, -10, 0, 0, 28, null, false, false, true),
      new Move("Sin's Glance", "TA", "H", 18, -8, 10, 10, 30),
      new Move("Sin's Glare", "T2A", "S", 16, -6, 4, 4, 12, null, false, false, true)
    ],
    // Vertical Moves
    [
      new Move("Mighty Hammer of Ea", "B", "M", 16, -8, 0, 0, 14, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Mighty Hammer of Ea", "BB", "MM", 16, -8, -2, -2, 28, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Mighty Hammer of Ea", "BBB", "MMM", 16, -8, "KND", "KND", 58, null, false, false, false, false, false, false, false, false, false, true),
      
      new Move("Nergal's Anguish", "xA", "H", 21, -14, 0, 0, 24),
      new Move("Adoration of Gilgamesh", "xK", "MM", 14, -14, 0, 0, null),
      new Move("Adoration of Gilgamesh(fast)", "xKF", "MM", 14, -14, 6, 6, null),

      new Move("Nergal's Talon", "6B", "M", 20, -16, -4, -4, null, null, false, true),
      new Move("Nergal's Talon", "6BB", "MS", 20, -6, 4, 4, null, null, false, true),
      new Move("Nergal's Mockery", "6BK", "MM", 20, -16, 10, null, null),

      new Move("Paean to Ishtar", "3B", "M", 20, -14, "LNC", null, null),
      new Move("Ea the Grand Ruler", "2B", "M", 16, -8, 2, null, null, null, false, false, true),

      new Move("Asushunamir's Spear", "1B", "L", 16, -20, -4, "KND", null),
      new Move("Lilitu's Ingress(Lv. 1)", "1BoB", "Lm", 16, -10, 6, null, null, "If opponent is cursed"),
      new Move("Lilitu's Ingress(Lv. 2)", "1BoB", "Lm", 16, 0, 16, null, null, "If opponent is cursed"),
      new Move("Lilitu's Ingress(Lv. 3)", "1BoB", "Lm", 16, 10, 26, null, null, "If opponent is cursed"),

      new Move("Sacred Rite of Ishtar", "4B", "M", 16, -8, 0, "KND", null),
      new Move("Sacred Rite of Ishtar(just)", "4BHBj", "MMH", 16, null, null, "LNC", null),
      new Move("Belit-Sheri's Cleaver", "46B", "M", 16, -16, "KND", "KND", null),
      new Move("Belit-Sheri's Cleaver(fast)", "46BF", "M", 16, -16, "KND", "KND", null),
      new Move("Belit-Sheri's Ingress(Lv. 1)", "46BoB", "Mm", 16, -4, "KND", null, null, "If opponent is cursed"),
      new Move("Belit-Sheri's Ingress(Lv. 2)", "46BoB", "Mm", 16, 6, "KND", null, null, "If opponent is cursed"),
      new Move("Belit-Sheri's Ingress(Lv. 3)", "46BoB", "Mm", 16, 16, "KND", null, null, "If opponent is cursed"),

      new Move("Ea the Grand Ruler", "CB", "M", null, null, null, null, null, null, false, false, true),
      
      new Move("Ode to Mamnenaum", "WB", "M", 20, -12, "KND", null, null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      new Move("Anu the Radiant", "JB", "M", 28, -8, 4, null, null),
      new Move("Nergal's Grapple", "TBB", "MS", 24, -8, "KND", null, null),
      new Move("Ea's Glare", "T2B", "M", 18, -8, 2, null, null, null, false, false, true)
    ],
    // Kicks
    [
      new Move("Will of Gilgamesh", "K", "H", 12, -10, -2, null, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Will of Gilgamesh", "KK", "HL", 12, -16, 0, null, null, null, false, false, false, false, false, false, false, false, false, true),
      
      new Move("Triumph of Gilgamesh", "k6", "H", 16, -12, "KND", null, null),
      new Move("Hound of Tiamat", "6K", "H", 12, -12, 4, "KND", null, "Curses opponent upon hit", false, true),
      new Move("Command of Tiamat", "3K", "M", 14, -8, 4, null, null, "Curses opponent upon hit"),
      new Move("Shamhat's Allure", "2K", "L", 16, -14, -2, null, null, null, false, false, true),
      new Move("Enkidu's Frenzy", "1K", "L", 26, -16, -4, "KND", null, null, false, false, true),
      new Move("Lament for Enkidu", "4K", "M", 14, -16, 0, null, null, null, false, true),

      new Move("Shamhat's Allure", "CK", "L", null, null, null, null, null, null, false, false, true),
      new Move("Devotion to Ninsun", "C3K", "H", 14, -2, 12, null, null),

      new Move("Enlil's Enmity", "WK", "M", 12, -10, 0, null, null),
      new Move("Enlil's Enmity", "WKB", "MM", 12, -14, 0, null, null),

      new Move("Enkidu the Valiant", "JK", "H", 22, -10, "KND", null, null),
      new Move("Enkidu's Glance", "TK", "M", 18, -8, "KND", "KND", null, "Returns to facing away"),
      new Move("Shamhat's Glare", "T2K", "L", 20, -20, "KND", "KND", null, null, false, false, true)
    ],
    // Simultaneous Press Moves
    [
      new Move("Anshar's Halberd", "A+B", "H", null, null, null, null, null, null, false, true, false, false, false, false, false, true),
      
      new Move("Marduk's Thunder", "6A+B", "MM", 18, -16, 4, 4, null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Marduk's Thunder", "6A+BB", "MMM", 18, -8, "KND", "KND", null, null, false, false, false, false, false, false, false, false, false, true),
      new Move("Marduk's Thunder", "6A+Bb", "MMM", 18, 4, "KND", "KND", null, null, false, false, false, false, false, false, false, true, false, true),
      
      new Move("Anu's Justice", "2A+B", "M", 30, 2, "KND", "KND", null, null, false, false, false, false, false, false, false, true),
      new Move("Tiamat's Frenzy", "4A+B", "MMM", 28, -14, 2, 2, null),

      new Move("Offering to Kishar", "8A+B", "H", 28, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Offering to Kishar", "M8A+B", "H", 28, null, "STN", "STN", null, "Shifts to attack throw upon hit", false, false, false, false, false, false, true),
      
      new Move("Tiamat's Quaking Blow", "B+K", "M", 16, 12, "KND", "KND", null, "Curses oppponent upon hit or guard/Power increases according to K timing", false, false, false, false, false, false, false, true, false, true),
      new Move("Tiamat's Quaking Blow", "B+KK", "M", null, null, null, null, null, "Curses oppponent upon hit or guard/Power increases according to K timing", false, false, false, false, false, false, false, true, false, true),
      
      new Move("Curse of Nergal", "6B+K", "M", 22, -8, 4, 4, null),
      new Move("Curse of Nergal", "6B+KA", "MH", 22, -8, 12, "STN", null),
      
      new Move("Immortal Utnapishtim", "2B+K", "LM", 16, -4, 10, null, null),
      new Move("Confession to Lahamu", "4B+K", "MM", 24, -17, "KND", "KND", null),
      new Move("Tiamat's Fury", "8B+K", "M", 18, -22, "KND", "KND", null),
      new Move("Enlil's Admonition", "WB+K", "M", 22, null, null, null, null),
      new Move("Adad's Great Shears", "TB+K", "MM", 16, 4, "KND", "KND", null, "Can be held", false, false, false, false, false, false, false, true)
    ],
    // 8-Way Run Moves
    [
      new Move("Judgment of Shamash", "#|^|(A", "MM", 20, -14, 12, 12, null, "Can be held"),
      new Move("Talon of Zu", "@|*Ao", "LL", 34, -8, 6, 6, null),
      new Move("Sickle of Sin", "!|$|uA", "M", 26, -16, 0, 0, null),
      new Move("Ishtar's Mercy", "#|^|(B", "M", 18, -8, 10, "KND", null, null, false, true),
      new Move("Prayer to Ishtar", "@|*B", "M", 22, -16, "KND", "KND", null),
      new Move("Lilitu's Needle", "!|uB", "L", 20, -20, "KND", "KND", null, null, false, false, true),

      new Move("Ea's Judgment", "$B", "M", 28, -4, "KND", "KND", null),
      new Move("Ea's Judgment", "$b", "M", null, 0, "KND", "KND", null, null, false, true),
      
      new Move("Enkidu's Valor", "#|^|(K", "H", 16, -8, 10, 10, null),
      new Move("Enkidu's Bravery", "#|^|(cB", "HM", 16, -4, 4, 4, null),

      new Move("The Ark of Utnapishtim", "@|*K", "H", 22, 0, 4, 4, null, null, false, false, true),
      new Move("The Ark of Utnapishtim", "@|*KK", "HH", 22, -2, "KND", "KND", null, null, false, false, true),

      new Move("Enkidu's Karma", "!|$|uK", "H", 24, -8, "KND", "KND", null, "GI vs. low attacks", false, true, false, true),

      new Move("Wrath of Tiamat", "#|^(A+B", "M", 22, -24, "KND", "KND", null),
      new Move("Tiamat's Ingress(Lv. 1)", "#|^|(A+BoB", "Mm", null, null, null, null, null, "If opponent is cursed"),
      new Move("Tiamat's Ingress(Lv. 2)", "#|^|(A+BoB", "Mm", null, null, null, null, null, "If opponent is cursed"),
      new Move("Tiamat's Ingress(Lv. 3)", "#|^|(A+BoB", "Mm", null, null, null, null, null, "If opponent is cursed"),

      new Move("Prayer to Belit-ili", "!|$|uA+B", "M", 20, -12, "LNC", "LNC", null, null, false, true),
      new Move("Blessing for Lahamu", "#|^|(B+K", "M", 28, -10, "LNC", "LNC", null, null, false, true),
      new Move("Tiamat's Rampage", "!|$|uB+K", "MMM", 54, null, "KND", "KND", null, null, false, false, false, false, false, false, false, false, true, true),
      new Move("Urshanabi's Crossing", "RK", "L", 20, -22, "KND", "KND", null)
    ],
    // Throws
    [
      new Move("Ereshkigal the Ruthless", "A+G", "H", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),
      new Move("Kingu the Sly Lord", "4A+G", "H", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, false, true),
      new Move("Apsu the Origin", "ZA+G", "H", 18, null, "KND", "KND", null, null, false, false, false, false, false, false, true),
      new Move("Ea of the Abyss", "XA+G", "H", 18, null, "KND", "KND", null, null, false, false, false, false, false, false, true),
      new Move("Marduk the Tempest", "VA+G", "H", 18, null, "KND", "KND", null, "Breakable only by Voldo & Astaroth", false, false, false, false, false, false, true),
      new Move("Nergal's Bloodthirst", "6A+G", "H", 18, null, null, null, null, "Breakable", false, false, false, false, false, false, true),
      new Move("Judgement of Nergal", "6A+GA|2A", "M", 18, null, "KND", "KND", null, null, false, false, false, false, false, false, true),
      new Move("Roar of Nergal", "6A+GB", "M", 18, null, null, null, null, null, false, false, false, false, false, false, true),
      new Move("Uridimmu's Howl", "6A+GK", "M", 18, null, null, null, null, "Curses opponent on hit", false, false, false, false, false, false, true),
      new Move("Fatal Gravity", "SA+G", "H", 18, null, "KND", "KND", null, "Breakable", false, false, false, false, false, true, true)
    ]
  ]
}