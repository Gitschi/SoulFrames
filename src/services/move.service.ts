import { Move } from "../models/move.model";

export class MoveService{
  Mitsurugi = [
    // Horizontal Moves
    [
      new Move("Twin Splinters", "A", "H", 13, -8, 2, 2, 12),
      new Move("Twin Splinters", "AA", "H", 13, -6, 6, 6, 28),
      new Move("Reaver", "6A", "H", 15, -2, 8, 8, 18),
      new Move("Splitting Gold", "3A", "M", 15, -6, 4, "STN", 22),
      new Move("Knee Slice", "2A", "S", 13, -6, 8, 8, 12), //FC
      new Move("Shin Slicer", "1A", "L", 34, -6, "KND", "KND", 38),
      new Move("Shin Slicer Feint", "1M", "M", 64, 12, "SLNC", "SLNC", 42),
      new Move("Dawn Breath", "4A", "M", 19, -4, 4, 4, 28),
      new Move("Dawn Breath ~Mist", "4A6", "H", 19, -2, 6, 6, 28, null, true),
      new Move("Knee Slice", "CA", "S", 12, -6, 8, 8, 12), //FC
      new Move("Silent Slash", "WA", "M", 17, -7, 5, 5, 28),
      new Move("Field Reave", "7A", "H", 27, -3, 7, 7, 22),
      new Move("Field Reave", "8A", "H", 27, -3, 7, 7, 24),
      new Move("Field Reave", "9A", "H", 27, -3, 7, 7, 26),
      new Move("Reverse Slice", "TA", "H", 15, -6, 6, 7, 14),
      new Move("Hidden Slice", "T2A", "S", 15, -6, 8, 8, 14),  
    ],
    // Vertical Moves
    [
      new Move("Forced Prayer Divide", "B", "M", 15, -8, 2, 2, 16),
      new Move("Forced Prayer Divide", "BB", "MM", 15, -6, 4, 4, 34),
      new Move("Forced Prayer Divide ~Mist", "BB6", "MM", 15, -10, null, null, 34, null, true),
      new Move("Mask", "B6", "H", 15, -8, -3, "STN", 26),
      new Move("Feint L", "M", "M", 19, -22, -10, "AT", 32),
      new Move("Tear Step", "HM", "M", 19, null, null, "KND", 48),
      new Move("Wind Hole", "6B", "M", 17, -6, 4, 4, 24),
      new Move("Wind Hole Upper", "6B8", "H", 14, -2, 6, 6, 32),
      new Move("Wind Hole Lower", "6B2", "L", 33, -6, "STN", "STN", 36),
      new Move("Wind Hole Lower(Delay)", "6B2", "L", 18, -12, -2, -2, 20),
      new Move("Heaven Cannon", "3B", "M", 18, -16, "LNC", "LNC", 32),
      new Move("Rust", "2B", "M", 16, -7, 2, 2, 18), //FC
      new Move("Air Tale", "1B", "M", 14, -4, 4, 4, 21),
      new Move("Wind Hole Vortex", "4B", "M", 33, -12, "KND", "KND", 38),
      new Move("Wind Hole Vortex ~Mist", "4B6", null, null, null, null, null, null, null, true),
      new Move("Upper Arch", "CB", "M", 15, -8, 2, 2, 18), //FC
      new Move("Time Hole", "C3B", "H", 16, -6, 4, 4, 30),
      new Move("Heavenly Stitch", "C1B", "MM", 17, -12, "LNC", "LNC", 24),
      new Move("Heavenly Stitch", "C1BB", "M", 17, -8, "KND", "KND", 50),
      new Move("Wind Divide", "WB", "M", 15, -8, 2, 2, 24),
      new Move("Shearing Knot", "7B", "M", 23, -6, 4, 4, 24),
      new Move("Shearing Knot", "8B", "M", 23, -6, 4, 4, 27),
      new Move("Shearing Knot", "9B", "M", 23, -6, 4, 4, 30),
      new Move("Reverse Divide", "TB", "M", 17, -5, 4, 4, 18),
      new Move("Hidden Divide", "T2B", "M", 18, -8, 2, 2, 20)  
    ],
    // Kick Moves 
    [
      new Move("Snap Kick", "K", "H", 13, -8, 2, 2, 14),
      new Move("Obedience", "P", "MM", 20, -16, "KND", null, 64),
      new Move("Wheel Kick", "6K", "H", 15, -4, 6, 6, 23),
      new Move("Front Kick", "3K", "M", 15, -4, 7, 7, 23),
      new Move("Stalk Shaver", "2K", "L", 17, -26, -10, "KND", 20),
      new Move("Stalk Shaver", "2KB", "LM", 17, -26, -16, "KND", 48),
      new Move("Stalk Shaver ~Mist", "2KB6", "LM", 17, -22, -10, "KND", 48, null, true),
      new Move("Hem Stitch", "1K", "L", 15, -14, -2, -2, 16), //FC
      new Move("Bullet Cutter", "4K", "M", 20, -12, "KND", "KND", 22),
      new Move("Bullet Cutter", "4KB", "MM", 20, -8, "KND", "KND", 52),
      new Move("Hem Stitch", "CK", "L", 14, -14, -2, -2, 16), //FC
      new Move("Front Kick", "WK", "M", 14, -6, 6, 6, 18),
      new Move("Jump Kick", "7K", "M", 20, -10, 0, 0, 22),
      new Move("Jump Kick", "8K", "M", 20, -10, 0, 0, 25),
      new Move("Jump Kick", "9K", "M", 20, -10, 0, 0, 28),
      new Move("Reverse Kick", "TK", "H", 15, -6, 2, 2, 16),
      new Move("Hidden Kick", "T2K", "L", 18, -14, -2, -2, 18)  
    ],
    // Simultaneous Press Moves
    [
      new Move("Autumn Requiem", "A+B", "M", 27, -8, "KND", "KND", 69),
      new Move("Cold Stitch", "2A+B", "M", 23, -2, 8, 8, 28),
      new Move("Wheel Slash", "7|8|9A+B", "M", null, 2, "STN", "STN", 58),
      new Move("Dividing Thrust", "B+K", "M", 18, -17, -3, "KND", 30),
      new Move("Dividing Thrust", "B+K4", "M", 18, null, null, "KND", 66),
      new Move("Samurai Tackle", "TB+K", "M", 10, -12, "KND", "KND", 30),
    ],
    // 8-Way Run Moves
    [
      new Move("Acute Gale", "^|#|(A", "H", 20, -6, 6, "STN", 32),
      new Move("Dawn Air", "@|*A", "M", 23, -1, 5, "KND", 26),
      new Move("True Vacuum", "!|uA", "L", 32, -16, "KND", "KND", 32),
      new Move("Firey Air", "$A", "M", 28, -14, -2, null, 52),
      new Move("Heavenly Dance", "^B", "M", 20, -13, "KND", "KND", 26),
      new Move("Heavenly Dance", "#|(B", "M", 20, -13, "LNC", "LNC", 26),
      new Move("Heavenly Dance", "^|#|(BB", "MM", 20, -23, "LNC", "LNC", 58),
      new Move("Hell Flash", "@|*B", "M", 32, -11, "STN", "STN", 32),
      new Move("Blunt Flames", "!|uB", "M", 19, -10, 2, 2, 26),
      new Move("Blunt Flames", "!|uBA", "MH", 19, -9, 3, 3, 55),
      new Move("Blunt Flames", "!|uBAB", "MHM", 19, -12, "STN", "STN", 93),
      new Move("Blunt Flames ~Mist", "!|uBA6", "MH", 19, -8, 4, 4, 55, null, true),
      new Move("Hell Divide", "$B", "M", 30, -8, "KND", "STN", 18),
      new Move("Hell Divide ~Mist", "$B6", "M", 30, -5, "KND", "STN", 18, "", true),
      new Move("Rising Knee", "^K", "M", 14, -8, 6, 6, 20),
      new Move("Rising Knee", "#|*K", "M", 14, -2, 6, "KND", 25),
      new Move("Wheel Kick", "@|*K", "H", 14, -4, 10, "KND", 25),
      new Move("Bullet Cutter", "$|!|uK", "M", 20, -12, "KND", "KND", 24),
      new Move("Bullet Cutter", "$|!|uKB", "MM", 20, -8, "KND", "KND", 54),
      new Move("Phoenix Tail", "^|#|(|@|*A+B", "M", 30, -2, "KND", "KND", 52),
      new Move("Sliding", "RK", "L", 21, -22, "KND", "KND", 26)
    ],
    // Throws
    [
      new Move("Sea of Madness", "A+G", "H", 17, null, "KND", "KND", 50)
    ],
    // ************ Stances *************
    // Silent Step
    [
      new Move("Silent Step", "236", null, null, null, null, null, null, null, true),
      new Move("Silent Step Slash", "[A", "M", 27, -7, 5, 5, 33),
      new Move("Step Stone Divide", "[B", "M", 16, -16, -2, -2, 42),
      new Move("Step Stone Divide", "[b", "M", 26, -2, "KND", "KND", 62),
      new Move("Silent Step Kick", "[K", "M", 27, -6, 6, 6, 18)    
    ],
    // Mist
    [
      new Move("Mist", "4|6B+K", null, null, null, null, null, null, null, true),
      new Move("Mist", "$|^B+K", null, null, null, null, null, null, null, true),
      new Move("Full Divide", "]A", "H", 32, -9, "KND", "KND", 28),
      new Move("Wind Stitch", "]B", "H", 9, -10, 0, "STN", 10),
      new Move("Wind Stitch", "]BB", "HH", 9, -10, 0, "STN", 20),
      new Move("Wind Stitch", "]BBB", "HHH", 9, -10, 0, "STN", 30),
      new Move("Wind Grab", "]BB+K", "HM", 9, -14, -1, "AT", 30),
      new Move("Wind Grab", "]BB+K", "HM", 9, null, null, "STN", 48), // on CH
      new Move("Wind Torture", "]BB+K4", "HM", 9, null, null, "KND", 35),
      new Move("Water Parting Thrust", "]K", "L", 18, -20, -12, -12, 16),
      new Move("Water Parting Thrust", "]KB", "LH", 18, -15, -6, -6, 44),
      new Move("Divide", "]A+B", "M", 18, -3, "STN", "STN", 38),
      new Move("Wind Purify", "]B+K", "M", 18, -14, -1, "KND", 30),
      new Move("Wind Divide", "]B+K4", "M", 18, null, null, "KND", 56),
      new Move("Wind Purify", "]b+k", "M", 48, 15, "KND", "KND", 60),
      new Move("Wind Divide", "]b+k4", "M", 48, 15, "KND", "KND", 70),
      new Move("Lion's Clutch", "]A+G", "H", 16, null, "KND", "KND", 45),
      new Move("Korefuji", "]B+G", "H", 16, null, "KND", "KND", 50),
      new Move("Mist Step", "]66|44", null, null, null, null, null, null),
      new Move("Mist ~ Jump", "]7|8|9", null, null, null, null, null, null),
      new Move("Mist ~ Duck", "]1|2|3", null, null, null, null, null, null)    
    ]
  ]

  Sophitia = [
    // Horizontal Moves
    [
      new Move("Twin Splinters", "A", "H", 13, -8, 2, 2, 12),
      new Move("Twin Splinters", "AA", "H", 13, -6, 6, 6, 28),
      new Move("Reaver", "6A", "H", 15, -2, 8, 8, 18),
      new Move("Splitting Gold", "3A", "M", 15, -6, 4, "STN", 22),
      new Move("Knee Slice", "2A", "S", 13, -6, 8, 8, 12), //FC
      new Move("Shin Slicer", "1A", "L", 34, -6, "KND", "KND", 38),
      new Move("Shin Slicer Feint", "1M", "M", 64, 12, "SLNC", "SLNC", 42),
      new Move("Dawn Breath", "4A", "M", 19, -4, 4, 4, 28),
      new Move("Dawn Breath ~Mist", "4A6", "H", 19, -2, 6, 6, 28, null, true),
      new Move("Knee Slice", "CA", "S", 12, -6, 8, 8, 12), //FC
      new Move("Silent Slash", "WA", "M", 17, -7, 5, 5, 28),
      new Move("Field Reave", "7A", "H", 27, -3, 7, 7, 22),
      new Move("Field Reave", "8A", "H", 27, -3, 7, 7, 24),
      new Move("Field Reave", "9A", "H", 27, -3, 7, 7, 26),
      new Move("Reverse Slice", "TA", "H", 15, -6, 6, 7, 14),
      new Move("Hidden Slice", "T2A", "S", 15, -6, 8, 8, 14),  
    ],
    // Vertical Moves
    [
      new Move("Forced Prayer Divide", "B", "M", 15, -8, 2, 2, 16),
      new Move("Forced Prayer Divide", "BB", "MM", 15, -6, 4, 4, 34),
      new Move("Forced Prayer Divide ~Mist", "BB6", "MM", 15, -10, null, null, 34, null, true),
      new Move("Mask", "B6", "H", 15, -8, -3, "STN", 26),
      new Move("Feint L", "M", "M", 19, -22, -10, "AT", 32),
      new Move("Tear Step", "HM", "M", 19, null, null, "KND", 48),
      new Move("Wind Hole", "6B", "M", 17, -6, 4, 4, 24),
      new Move("Wind Hole Upper", "6B8", "H", 14, -2, 6, 6, 32),
      new Move("Wind Hole Lower", "6B2", "L", 33, -6, "STN", "STN", 36),
      new Move("Wind Hole Lower(Delay)", "6B2", "L", 18, -12, -2, -2, 20),
      new Move("Heaven Cannon", "3B", "M", 18, -16, "LNC", "LNC", 32),
      new Move("Rust", "2B", "M", 16, -7, 2, 2, 18), //FC
      new Move("Air Tale", "1B", "M", 14, -4, 4, 4, 21),
      new Move("Wind Hole Vortex", "4B", "M", 33, -12, "KND", "KND", 38),
      new Move("Wind Hole Vortex ~Mist", "4B6", null, null, null, null, null, null, null, true),
      new Move("Upper Arch", "CB", "M", 15, -8, 2, 2, 18), //FC
      new Move("Time Hole", "C3B", "H", 16, -6, 4, 4, 30),
      new Move("Heavenly Stitch", "C1B", "MM", 17, -12, "LNC", "LNC", 24),
      new Move("Heavenly Stitch", "C1BB", "M", 17, -8, "KND", "KND", 50),
      new Move("Wind Divide", "WB", "M", 15, -8, 2, 2, 24),
      new Move("Shearing Knot", "7B", "M", 23, -6, 4, 4, 24),
      new Move("Shearing Knot", "8B", "M", 23, -6, 4, 4, 27),
      new Move("Shearing Knot", "9B", "M", 23, -6, 4, 4, 30),
      new Move("Reverse Divide", "TB", "M", 17, -5, 4, 4, 18),
      new Move("Hidden Divide", "T2B", "M", 18, -8, 2, 2, 20)  
    ],
    // Kick Moves 
    [
      new Move("Snap Kick", "K", "H", 13, -8, 2, 2, 14),
      new Move("Obedience", "P", "MM", 20, -16, "KND", null, 64),
      new Move("Wheel Kick", "6K", "H", 15, -4, 6, 6, 23),
      new Move("Front Kick", "3K", "M", 15, -4, 7, 7, 23),
      new Move("Stalk Shaver", "2K", "L", 17, -26, -10, "KND", 20),
      new Move("Stalk Shaver", "2KB", "LM", 17, -26, -16, "KND", 48),
      new Move("Stalk Shaver ~Mist", "2KB6", "LM", 17, -22, -10, "KND", 48, null, true),
      new Move("Hem Stitch", "1K", "L", 15, -14, -2, -2, 16), //FC
      new Move("Bullet Cutter", "4K", "M", 20, -12, "KND", "KND", 22),
      new Move("Bullet Cutter", "4KB", "MM", 20, -8, "KND", "KND", 52),
      new Move("Hem Stitch", "CK", "L", 14, -14, -2, -2, 16), //FC
      new Move("Front Kick", "WK", "M", 14, -6, 6, 6, 18),
      new Move("Jump Kick", "7K", "M", 20, -10, 0, 0, 22),
      new Move("Jump Kick", "8K", "M", 20, -10, 0, 0, 25),
      new Move("Jump Kick", "9K", "M", 20, -10, 0, 0, 28),
      new Move("Reverse Kick", "TK", "H", 15, -6, 2, 2, 16),
      new Move("Hidden Kick", "T2K", "L", 18, -14, -2, -2, 18)  
    ],
    // Simultaneous Press Moves
    [
      new Move("Autumn Requiem", "A+B", "M", 27, -8, "KND", "KND", 69),
      new Move("Cold Stitch", "2A+B", "M", 23, -2, 8, 8, 28),
      new Move("Wheel Slash", "7|8|9A+B", "M", null, 2, "STN", "STN", 58),
      new Move("Dividing Thrust", "B+K", "M", 18, -17, -3, "KND", 30),
      new Move("Dividing Thrust", "B+K4", "M", 18, null, null, "KND", 66),
      new Move("Samurai Tackle", "TB+K", "M", 10, -12, "KND", "KND", 30),
    ],
    // 8-Way Run Moves
    [
      new Move("Acute Gale", "^|#|(A", "H", 20, -6, 6, "STN", 32),
      new Move("Dawn Air", "@|*A", "M", 23, -1, 5, "KND", 26),
      new Move("True Vacuum", "!|uA", "L", 32, -16, "KND", "KND", 32),
      new Move("Firey Air", "$A", "M", 28, -14, -2, null, 52),
      new Move("Heavenly Dance", "^B", "M", 20, -13, "KND", "KND", 26),
      new Move("Heavenly Dance", "#|(B", "M", 20, -13, "LNC", "LNC", 26),
      new Move("Heavenly Dance", "^|#|(BB", "MM", 20, -23, "LNC", "LNC", 58),
      new Move("Hell Flash", "@|*B", "M", 32, -11, "STN", "STN", 32),
      new Move("Blunt Flames", "!|uB", "M", 19, -10, 2, 2, 26),
      new Move("Blunt Flames", "!|uBA", "MH", 19, -9, 3, 3, 55),
      new Move("Blunt Flames", "!|uBAB", "MHM", 19, -12, "STN", "STN", 93),
      new Move("Blunt Flames ~Mist", "!|uBA6", "MH", 19, -8, 4, 4, 55, null, true),
      new Move("Hell Divide", "$B", "M", 30, -8, "KND", "STN", 18),
      new Move("Hell Divide ~Mist", "$B6", "M", 30, -5, "KND", "STN", 18, "", true),
      new Move("Rising Knee", "^K", "M", 14, -8, 6, 6, 20),
      new Move("Rising Knee", "#|*K", "M", 14, -2, 6, "KND", 25),
      new Move("Wheel Kick", "@|*K", "H", 14, -4, 10, "KND", 25),
      new Move("Bullet Cutter", "$|!|uK", "M", 20, -12, "KND", "KND", 24),
      new Move("Bullet Cutter", "$|!|uKB", "MM", 20, -8, "KND", "KND", 54),
      new Move("Phoenix Tail", "^|#|(|@|*A+B", "M", 30, -2, "KND", "KND", 52),
      new Move("Sliding", "RK", "L", 21, -22, "KND", "KND", 26)
    ],
    // Throws
    [
      new Move("Sea of Madness", "A+G", "H", 17, null, "KND", "KND", 50)
    ],
    // ************ Stances *************
    // Angel Step
    [
      new Move("Silent Step", "236", null, null, null, null, null, null, null, true),
      new Move("Silent Step Slash", "[A", "M", 27, -7, 5, 5, 33),
      new Move("Step Stone Divide", "[B", "M", 16, -16, -2, -2, 42),
      new Move("Step Stone Divide", "[b", "M", 26, -2, "KND", "KND", 62),
      new Move("Silent Step Kick", "[K", "M", 27, -6, 6, 6, 18)    
    ],
    // Angel Side Step
    [
      new Move("Mist", "4|6B+K", null, null, null, null, null, null, null, true),
      new Move("Mist", "$|^B+K", null, null, null, null, null, null, null, true),
      new Move("Full Divide", "]A", "H", 32, -9, "KND", "KND", 28),
      new Move("Wind Stitch", "]B", "H", 9, -10, 0, "STN", 10),
      new Move("Wind Stitch", "]BB", "HH", 9, -10, 0, "STN", 20),
      new Move("Wind Stitch", "]BBB", "HHH", 9, -10, 0, "STN", 30),
      new Move("Wind Grab", "]BB+K", "HM", 9, -14, -1, "AT", 30),
      new Move("Wind Grab", "]BB+K", "HM", 9, null, null, "STN", 48), // on CH
      new Move("Wind Torture", "]BB+K4", "HM", 9, null, null, "KND", 35),
      new Move("Water Parting Thrust", "]K", "L", 18, -20, -12, -12, 16),
      new Move("Water Parting Thrust", "]KB", "LH", 18, -15, -6, -6, 44),
      new Move("Divide", "]A+B", "M", 18, -3, "STN", "STN", 38),
      new Move("Wind Purify", "]B+K", "M", 18, -14, -1, "KND", 30),
      new Move("Wind Divide", "]B+K4", "M", 18, null, null, "KND", 56),
      new Move("Wind Purify", "]b+k", "M", 48, 15, "KND", "KND", 60),
      new Move("Wind Divide", "]b+k4", "M", 48, 15, "KND", "KND", 70),
      new Move("Lion's Clutch", "]A+G", "H", 16, null, "KND", "KND", 45),
      new Move("Korefuji", "]B+G", "H", 16, null, "KND", "KND", 50),
      new Move("Mist Step", "]66|44", null, null, null, null, null, null),
      new Move("Mist ~ Jump", "]7|8|9", null, null, null, null, null, null),
      new Move("Mist ~ Duck", "]1|2|3", null, null, null, null, null, null)    
    ]
  ]

  Raphael = [
    // Reversal Edge and Gauge Attacks not implemented
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
      new Move("Phasing Moon", "BBK", "MMM", null, null, null, null, null),
      new Move("Grave Needle", "x2B", "LL", null, null, null, null, null),
      new Move("Single Montante", "x4", "M", null, null, null, null, null),
      new Move("Triple Botta in Tempo", "6BBB", "HHM", null, null, null, null, null),
      new Move("Triple Botta in Tempo(just)", "6BBB", "HHM", null, null, null, null, null),
      new Move("Triple Botta in Tempo ~ Aerial Shift", "6B4", "H", null, null, null, null, null, "vs. low attacks", true, false, false, true),
      new Move("Triple Botta in Tempo ~ Preparation", "6Bb", "HH", null, null, null, null, null, "Dodges high attacks", true),
      new Move("Raptor Rush", "3B", "M", null, null, null, null, null, null),
      new Move("Raptor Rush ~ Preparation", "3b", "M", null, null, null, null, null, "Dodges high attacks", true),
      new Move("Fendante", "2B", "M", null, null, null, null, null, null, false, false, true),
      new Move("Striking Snake", "1B", "L", null, null, null, null, null),
      new Move("Striking Snake ~ Preparation", "1b", "L", null, null, null, null, null, "Dodges high attacks", true),
      new Move("Wicked Thrust", "4B", "H", null, null, null, null, null),
      new Move("Wicked Thrust ~ Preparation", "4b", "H", null, null, null, null, null, "Dodges high attack", true),
      new Move("Affondo Fendante", "236B", "M", null, null, null, null, null, null, false, true),
      new Move("Affondo Fendante(fast)", "236B", "M", null, null, null, null, null, null, false, true),
      new Move("Nouveau Soleil", "214B", "H", null, null, null, null, null, null, false, true),
      new Move("Nouveau Soleil(fast)", "214B", "H", null, null, null, null, null, null, false, true),
      new Move("Deadly Dirge", "46B", "M", null, null, null, null, null, null, null, true),
      new Move("Crouching Montante", "CB", "M", null, null, null, null, null, null, false, false, true),
      new Move("Advance Slicer", "C3B", "M", null, null, null, null, null, null, false, true),
      new Move("Rising Threat", "WBB", "MH", null, null, null, null, null),
      new Move("Rising Threat ~ Aerial Shift", "WBB4", "MH", null, null, null, null, null, "vs. low attacks", true, false, false, true),
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
      new Move("Sly Riposte ~ Aerial Shift", "B4", "M", null, null, null, null, null, "After successfully form dodging", true, false, false, true),
      new Move("Spiral Envelopment", "TB+K", null, null, null, null, null, null, "Dodges high, middle attacks/Increases evasion window by holding buttons", true),
      new Move("Circular Envelopment", "T2B+K", null, null, null, null, null, null, "Dodges middle attacks/Increase evasion window by holding buttons", true)
      //new Move("Dummy", "K+G", null, null, null, null, null, null)
    ],
    // 8-Way Run Moves
    [
      new Move("Bloody Slicer", "#|^|(A", "H", null, null, null, null, null),
      new Move("Merciless Stramazone", "@|*AA", "HH", null, null, null, null, null),
      new Move("Merciless Stramazone ~ Aerial Shift", "@|*AA4", "HH", null, null, null, null, null, "vs. low attacks", true, false, false, true),
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
      new Move("Wyvern's Tail", "#|^|(A+B", "M", null, null, null, null, null), // G cancel
      new Move("Bloody Funeral", "!|$|uA+B", "M", null, null, null, null, null, null, false, false, false, false, false, false, false, false, true),
      new Move("Bloody Funeral ~ Preparation", "!|$|uz+xG", null, null, null, null, null, null, "Dodges high attacks", true),
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
      new Move("Thousand Hornets", "A+G", "H", null, null, null, null, null, "Breakable", false, false, false, false, false, true, true)
    ],
    // ************ Stances *************
    // Preparation
    [
      new Move("Preparation", "#B", null, null, null, null, null, null, "Dodges high attacks", true),
      new Move("Ebony Slash", "[AA", "MM", null, null, null, null, null),
      new Move("Ebony Combo", "[AB", "MH", null, null, null, null, null),
      new Move("Ebony Combo ~ Preparation", "[Ab", "MH", null, null, null, null, null, "Dodges high attacks", true),
      new Move("Lunging Press", "[6A", "H", null, null, null, null, null),
      new Move("Underworld Call", "[BBB", "HHM", null, null, null, null, null),
      new Move("Underworld Call(just)", "[BBB", "HHM", null, null, null, null, null),
      new Move("Underworld Call ~ Preparation", "[Bb", "HH", null, null, null, null, null, "Dodges high attacks", true),
      new Move("Rapid Head Hunter", "[BK", "H", null, null, null, null, null), // Level might be wrong!
      new Move("Twin Impalement", "[BBA", "HH", null, null, null, null, null, null, false, false, true), // Level might be wrong!
      new Move("Dread Intrigue", "[6B", "", null, null, null, null, null), // Level Might be wrong
      new Move("Lunatic Rouge", "[KKvB", "HMH", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Lunatic Rouge(just)", "[KKvB", "HMH", null, null, null, null, null, null, false, false, false, false, false, false, false, true),
      new Move("Pirouette Kick", "[6K", "M", null, null, null, null, null),
      new Move("Cantarella Needle (Retreat)", "[B+K", "M", null, null, null, null, null),
      new Move("Royal Poison: Fatal Dose", "[A+B+K", "M", null, null, null, null, null, null, false, false, false, false, false, true, true, true),
      new Move("Venomous Sting", "[B+G", "M", null, null, null, null, null, "Shifts to clash upon hit", false, false, false, false, true),
      new Move("Preparation ~ Preparation", "[6", null, null, null, null, null, null, "Dodges high attacks", true),
      new Move("Preparation ~ Aerial Shift", "[4", null, null, null, null, null, null, "vs. low attacks", true, false, false, true),
      new Move("Preparation ~ Shadow Evade", "[2", null, null, null, null, null, null, "Can be held/Dodges high attacks", true)
    ],
    // Aerial Shift
    [
      new Move("Aerial Shift", "[4", null, null, null, null, null, null, "vs. low attacks", true, false, false, true),
      new Move("Heavy Mandritti", "]AB", "MM", null, null, null, null, null),
      new Move("Bite of the Deadly Adder", "]B", "M", null, null, null, null, null),
      new Move("Dark Stinger", "]K", "L", null, null, null, null, null),
      new Move("Dark Stinger Crescendo(just)", "]KvK", "LL", null, null, null, null, null),
      new Move("Aerial shift ~ Preparation", "]6", null, null, null, null, null, null, "Dodges high attacks", true)
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
}