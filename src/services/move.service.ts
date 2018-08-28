import { Move, MoveStance } from "../models/move.model";

export class MoveService{
  Mitsurugi = [
    // Horizontal Moves
    [
      new Move("Twin Splinters", "A", "H", 13, -8, 2, 2, 12, ""),
      new Move("Twin Splinters", "AA", "H", 13, -6, 6, 6, 28, ""),
      new Move("Reaver", "6A", "H", 15, -2, 8, 8, 18, ""),
      new Move("Splitting Gold", "3A", "M", 15, -6, 4, "STN", 22, ""),
      new Move("Knee Slice", "2A", "SL", 13, -6, 8, 8, 12, ""), //FC
      new Move("Shin Slicer", "1A", "L", 34, -6, "KND", "KND", 38, ""),
      new Move("Shin Slicer Feint", "1M", "M", 64, 12, "SLNC", "SLNC", 42, ""),
      new Move("Dawn Breath", "4A", "M", 19, -4, 4, 4, 28, ""),
      new MoveStance("Dawn Breath ~Mist", "4A6", "H, SS", 19, -2, 6, 6, 28, "", true),
      new Move("Knee Slice", "CA", "SL", 12, -6, 8, 8, 12, ""), //FC
      new Move("Silent Slash", "WA", "M", 17, -7, 5, 5, 28, ""),
      new Move("Field Reave", "7A", "H", 27, -3, 7, 7, 22, ""),
      new Move("Field Reave", "8A", "H", 27, -3, 7, 7, 24, ""),
      new Move("Field Reave", "9A", "H", 27, -3, 7, 7, 26, ""),
      new Move("Reverse Slice", "TA", "H", 15, -6, 6, 7, 14, ""),
      new Move("Hidden Slice", "T2A", "SL", 15, -6, 8, 8, 14, ""),  
    ],
    // Vertical Moves
    [
      new Move("Forced Prayer Divide", "B", "M", 15, -8, 2, 2, 16, ""),
      new Move("Forced Prayer Divide", "BB", "M,M", 15, -6, 4, 4, 34, ""),
      new MoveStance("Forced Prayer Divide ~Mist", "BB6", "M,M", 15, -10, null, null, 34, "", true),
      new Move("Mask", "B6", "H", 15, -8, -3, "STN", 26, ""),
      new Move("Feint L", "M", "M", 19, -22, -10, "AT", 32, ""),
      new Move("Tear Step", "HM", "M", 19, null, null, "KND", 48, ""),
      new Move("Wind Hole", "6B", "M", 17, -6, 4, 4, 24, ""),
      new Move("Wind Hole Upper", "6B8", "H", 14, -2, 6, 6, 32, ""),
      new Move("Wind Hole Lower", "6B2", "L", 33, -6, "STN", "STN", 36, ""),
      new Move("Wind Hole Lower(Delay)", "6B2", "L", 18, -12, -2, -2, 20, ""),
      new Move("Heaven Cannon", "3B", "M", 18, -16, "LNC", "LNC", 32, ""),
      new Move("Rust", "2B", "M", 16, -7, 2, 2, 18, ""), //FC
      new Move("Air Tale", "1B", "M", 14, -4, 4, 4, 21, ""),
      new Move("Wind Hole Vortex", "4B", "M", 33, -12, "KND", "KND", 38, ""),
      new MoveStance("Wind Hole Vortex ~Mist", "4B6", "SS", null, null, null, null, null, "", true),
      new Move("Upper Arch", "CB", "M", 15, -8, 2, 2, 18, ""), //FC
      new Move("Time Hole", "C3B", "H", 16, -6, 4, 4, 30, ""),
      new Move("Heavenly Stitch", "C1B", "M,M", 17, -12, "LNC", "LNC", 24, ""),
      new Move("Heavenly Stitch", "C1BB", "M", 17, -8, "KND", "KND", 50, ""),
      new Move("Wind Divide", "WB", "M", 15, -8, 2, 2, 24, ""),
      new Move("Shearing Knot", "7B", "M", 23, -6, 4, 4, 24, ""),
      new Move("Shearing Knot", "8B", "M", 23, -6, 4, 4, 27, ""),
      new Move("Shearing Knot", "9B", "M", 23, -6, 4, 4, 30, ""),
      new Move("Reverse Divide", "TB", "M", 17, -5, 4, 4, 18, ""),
      new Move("Hidden Divide", "T2B", "M", 18, -8, 2, 2, 20, "")  
    ],
    // Kick Moves 
    [
      new Move("Snap Kick", "K", "H", 13, -8, 2, 2, 14, ""),
      new Move("Obedience", "P", "M,M", 20, -16, "KND", null, 64, ""),
      new Move("Wheel Kick", "6K", "H", 15, -4, 6, 6, 23, ""),
      new Move("Front Kick", "3K", "M", 15, -4, 7, 7, 23, ""),
      new Move("Stalk Shaver", "2K", "L", 17, -26, -10, "KND", 20, ""),
      new Move("Stalk Shaver", "2KB", "L,M", 17, -26, -16, "KND", 48, ""),
      new MoveStance("Stalk Shaver ~Mist", "2KB6", "L,M,SS", 17, -22, -10, "KND", 48, "", true),
      new Move("Hem Stitch", "1K", "L", 15, -14, -2, -2, 16, ""), //FC
      new Move("Bullet Cutter", "4K", "M", 20, -12, "KND", "KND", 22, ""),
      new Move("Bullet Cutter", "4KB", "M,M", 20, -8, "KND", "KND", 52, ""),
      new Move("Hem Stitch", "CK", "L", 14, -14, -2, -2, 16, ""), //FC
      new Move("Front Kick", "WK", "M", 14, -6, 6, 6, 18, ""),
      new Move("Jump Kick", "7K", "M", 20, -10, 0, 0, 22, ""),
      new Move("Jump Kick", "8K", "M", 20, -10, 0, 0, 25, ""),
      new Move("Jump Kick", "9K", "M", 20, -10, 0, 0, 28, ""),
      new Move("Reverse Kick", "TK", "H", 15, -6, 2, 2, 16, ""),
      new Move("Hidden Kick", "T2K", "L", 18, -14, -2, -2, 18, "")  
    ],
    // Simultaneous Press Moves
    [
      new Move("Autumn Requiem", "A+B", "M", 27, -8, "KND", "KND", 69, ""),
      new Move("Cold Stitch", "2A+B", "M", 23, -2, 8, 8, 28, ""),
      new Move("Wheel Slash", "7|8|9A+B", "M", null, 2, "STN", "STN", 58, ""),
      new Move("Dividing Thrust", "B+K", "M", 18, -17, -3, "KND", 30, ""),
      new Move("Dividing Thrust", "B+K4", "M", 18, null, null, "KND", 66, ""),
      new Move("Samurai Tackle", "TB+K", "M", 10, -12, "KND", "KND", 30, ""),
    ],
    // 8-Way Run Moves
    [
      new Move("Acute Gale", "^|#|(A", "H", 20, -6, 6, "STN", 32, ""),
      new Move("Dawn Air", "@|*A", "M", 23, -1, 5, "KND", 26, ""),
      new Move("True Vacuum", "!|uA", "L", 32, -16, "KND", "KND", 32, ""),
      new Move("Firey Air", "$A", "M", 28, -14, -2, null, 52, ""),
      new Move("Heavenly Dance", "^B", "M", 20, -13, "KND", "KND", 26, ""),
      new Move("Heavenly Dance", "#|(B", "M", 20, -13, "LNC", "LNC", 26, ""),
      new Move("Heavenly Dance", "^|#|(BB", "M,M", 20, -23, "LNC", "LNC", 58, ""),
      new Move("Hell Flash", "@|*B", "M", 32, -11, "STN", "STN", 32, ""),
      new Move("Blunt Flames", "!|uB", "M", 19, -10, 2, 2, 26, ""),
      new Move("Blunt Flames", "!|uBA", "M,H", 19, -9, 3, 3, 55, ""),
      new Move("Blunt Flames", "!|uBAB", "M,H,M", 19, -12, "STN", "STN", 93, ""),
      new MoveStance("Blunt Flames ~Mist", "!|uBA6", "M,H,SS", 19, -8, 4, 4, 55, "", true),
      new Move("Hell Divide", "$B", "M", 30, -8, "KND", "STN", 18, ""),
      new MoveStance("Hell Divide ~Mist", "$B6", "M,SS", 30, -5, "KND", "STN", 18, "", true),
      new Move("Rising Knee", "^K", "M", 14, -8, 6, 6, 20, ""),
      new Move("Rising Knee", "#|*K", "M", 14, -2, 6, "KND", 25, ""),
      new Move("Wheel Kick", "@|*K", "H", 14, -4, 10, "KND", 25, ""),
      new Move("Bullet Cutter", "$|!|uK", "M", 20, -12, "KND", "KND", 24, ""),
      new Move("Bullet Cutter", "$|!|uKB", "M,M", 20, -8, "KND", "KND", 54, ""),
      new Move("Phoenix Tail", "^|#|(|@|*A+B", "M", 30, -2, "KND", "KND", 52, ""),
      new Move("Sliding", "RK", "L", 21, -22, "KND", "KND", 26, "")
    ],
    // Throws
    [
      new Move("Sea of Madness", "A+G", "H", 17, null, "KND", "KND", 50, "")
    ],
    // Stances
    [
      [
        new MoveStance("Silent Step", "236", "SS", null, null, null, null, null, "", true),
        new Move("Silent Step Slash", "[A", "M", 27, -7, 5, 5, 33, ""),
        new Move("Step Stone Divide", "[B", "M", 16, -16, -2, -2, 42, ""),
        new Move("Step Stone Divide", "[b", "M", 26, -2, "KND", "KND", 62, ""),
        new Move("Silent Step Kick", "[K", "M", 27, -6, 6, 6, 18, "")    
      ],
      [
        new MoveStance("Mist", "4|6B+K", "SS", null, null, null, null, null, "", true),
        new MoveStance("Mist", "$|^B+K", "SS", null, null, null, null, null, "", true),
        new Move("Full Divide", "]A", "H", 32, -9, "KND", "KND", 28, ""),
        new Move("Wind Stitch", "]B", "H", 9, -10, 0, "STN", 10, ""),
        new Move("Wind Stitch", "]BB", "H,H", 9, -10, 0, "STN", 20, ""),
        new Move("Wind Stitch", "]BBB", "H,H,H", 9, -10, 0, "STN", 30, ""),
        new Move("Wind Grab", "]BB+K", "H,M", 9, -14, -1, "AT", 30, ""),
        new Move("Wind Grab", "]BB+K", "H,M", 9, null, null, "STN", 48, ""), // on CH
        new Move("Wind Torture", "]BB+K4", "H,M", 9, null, null, "KND", 35, ""),
        new Move("Water Parting Thrust", "]K", "L", 18, -20, -12, -12, 16, ""),
        new Move("Water Parting Thrust", "]KB", "L,H", 18, -15, -6, -6, 44, ""),
        new Move("Divide", "]A+B", "M", 18, -3, "STN", "STN", 38, ""),
        new Move("Wind Purify", "]B+K", "M", 18, -14, -1, "KND", 30, ""),
        new Move("Wind Divide", "]B+K4", "M", 18, null, null, "KND", 56, ""),
        new Move("Wind Purify", "]b+k", "M", 48, 15, "KND", "KND", 60, ""),
        new Move("Wind Divide", "]b+k4", "M", 48, 15, "KND", "KND", 70, ""),
        new Move("Lion's Clutch", "]A+G", "H", 16, null, "KND", "KND", 45, ""),
        new Move("Korefuji", "]B+G", "H", 16, null, "KND", "KND", 50, ""),
        new Move("Mist Step", "]66|44", "SS", null, null, null, null, null, ""),
        new Move("Mist ~ Jump", "]7|8|9", "SS", null, null, null, null, null, ""),
        new Move("Mist ~ Duck", "]1|2|3", "SS", null, null, null, null, null, "")    
      ]
    ]
  ]

  Sophitia = [
    // Horizontal Moves
    [
      new Move("Twin Splinters", "A", "H", 13, -8, 2, 2, 12, ""),
      new Move("Twin Splinters", "AA", "H", 13, -6, 6, 6, 28, ""),
      new Move("Reaver", "6A", "H", 15, -2, 8, 8, 18, ""),
      new Move("Splitting Gold", "3A", "M", 15, -6, 4, "STN", 22, ""),
      new Move("Knee Slice", "2A", "SL", 13, -6, 8, 8, 12, ""), //FC
      new Move("Shin Slicer", "1A", "L", 34, -6, "KND", "KND", 38, ""),
      new Move("Shin Slicer Feint", "1M", "M", 64, 12, "SLNC", "SLNC", 42, ""),
      new Move("Dawn Breath", "4A", "M", 19, -4, 4, 4, 28, ""),
      new MoveStance("Dawn Breath ~Mist", "4A6", "H, SS", 19, -2, 6, 6, 28, "", true),
      new Move("Knee Slice", "CA", "SL", 12, -6, 8, 8, 12, ""), //FC
      new Move("Silent Slash", "WA", "M", 17, -7, 5, 5, 28, ""),
      new Move("Field Reave", "7A", "H", 27, -3, 7, 7, 22, ""),
      new Move("Field Reave", "8A", "H", 27, -3, 7, 7, 24, ""),
      new Move("Field Reave", "9A", "H", 27, -3, 7, 7, 26, ""),
      new Move("Reverse Slice", "TA", "H", 15, -6, 6, 7, 14, ""),
      new Move("Hidden Slice", "T2A", "SL", 15, -6, 8, 8, 14, ""),  
    ],
    // Vertical Moves
    [
      new Move("Forced Prayer Divide", "B", "M", 15, -8, 2, 2, 16, ""),
      new Move("Forced Prayer Divide", "BB", "M,M", 15, -6, 4, 4, 34, ""),
      new MoveStance("Forced Prayer Divide ~Mist", "BB6", "M,M", 15, -10, null, null, 34, "", true),
      new Move("Mask", "B6", "H", 15, -8, -3, "STN", 26, ""),
      new Move("Feint L", "M", "M", 19, -22, -10, "AT", 32, ""),
      new Move("Tear Step", "HM", "M", 19, null, null, "KND", 48, ""),
      new Move("Wind Hole", "6B", "M", 17, -6, 4, 4, 24, ""),
      new Move("Wind Hole Upper", "6B8", "H", 14, -2, 6, 6, 32, ""),
      new Move("Wind Hole Lower", "6B2", "L", 33, -6, "STN", "STN", 36, ""),
      new Move("Wind Hole Lower(Delay)", "6B2", "L", 18, -12, -2, -2, 20, ""),
      new Move("Heaven Cannon", "3B", "M", 18, -16, "LNC", "LNC", 32, ""),
      new Move("Rust", "2B", "M", 16, -7, 2, 2, 18, ""), //FC
      new Move("Air Tale", "1B", "M", 14, -4, 4, 4, 21, ""),
      new Move("Wind Hole Vortex", "4B", "M", 33, -12, "KND", "KND", 38, ""),
      new MoveStance("Wind Hole Vortex ~Mist", "4B6", "SS", null, null, null, null, null, "", true),
      new Move("Upper Arch", "CB", "M", 15, -8, 2, 2, 18, ""), //FC
      new Move("Time Hole", "C3B", "H", 16, -6, 4, 4, 30, ""),
      new Move("Heavenly Stitch", "C1B", "M,M", 17, -12, "LNC", "LNC", 24, ""),
      new Move("Heavenly Stitch", "C1BB", "M", 17, -8, "KND", "KND", 50, ""),
      new Move("Wind Divide", "WB", "M", 15, -8, 2, 2, 24, ""),
      new Move("Shearing Knot", "7B", "M", 23, -6, 4, 4, 24, ""),
      new Move("Shearing Knot", "8B", "M", 23, -6, 4, 4, 27, ""),
      new Move("Shearing Knot", "9B", "M", 23, -6, 4, 4, 30, ""),
      new Move("Reverse Divide", "TB", "M", 17, -5, 4, 4, 18, ""),
      new Move("Hidden Divide", "T2B", "M", 18, -8, 2, 2, 20, "")  
    ],
    // Kick Moves 
    [
      new Move("Snap Kick", "K", "H", 13, -8, 2, 2, 14, ""),
      new Move("Obedience", "P", "M,M", 20, -16, "KND", null, 64, ""),
      new Move("Wheel Kick", "6K", "H", 15, -4, 6, 6, 23, ""),
      new Move("Front Kick", "3K", "M", 15, -4, 7, 7, 23, ""),
      new Move("Stalk Shaver", "2K", "L", 17, -26, -10, "KND", 20, ""),
      new Move("Stalk Shaver", "2KB", "L,M", 17, -26, -16, "KND", 48, ""),
      new MoveStance("Stalk Shaver ~Mist", "2KB6", "L,M,SS", 17, -22, -10, "KND", 48, "", true),
      new Move("Hem Stitch", "1K", "L", 15, -14, -2, -2, 16, ""), //FC
      new Move("Bullet Cutter", "4K", "M", 20, -12, "KND", "KND", 22, ""),
      new Move("Bullet Cutter", "4KB", "M,M", 20, -8, "KND", "KND", 52, ""),
      new Move("Hem Stitch", "CK", "L", 14, -14, -2, -2, 16, ""), //FC
      new Move("Front Kick", "WK", "M", 14, -6, 6, 6, 18, ""),
      new Move("Jump Kick", "7K", "M", 20, -10, 0, 0, 22, ""),
      new Move("Jump Kick", "8K", "M", 20, -10, 0, 0, 25, ""),
      new Move("Jump Kick", "9K", "M", 20, -10, 0, 0, 28, ""),
      new Move("Reverse Kick", "TK", "H", 15, -6, 2, 2, 16, ""),
      new Move("Hidden Kick", "T2K", "L", 18, -14, -2, -2, 18, "")  
    ],
    // Simultaneous Press Moves
    [
      new Move("Autumn Requiem", "A+B", "M", 27, -8, "KND", "KND", 69, ""),
      new Move("Cold Stitch", "2A+B", "M", 23, -2, 8, 8, 28, ""),
      new Move("Wheel Slash", "7|8|9A+B", "M", null, 2, "STN", "STN", 58, ""),
      new Move("Dividing Thrust", "B+K", "M", 18, -17, -3, "KND", 30, ""),
      new Move("Dividing Thrust", "B+K4", "M", 18, null, null, "KND", 66, ""),
      new Move("Samurai Tackle", "TB+K", "M", 10, -12, "KND", "KND", 30, ""),
    ],
    // 8-Way Run Moves
    [
      new Move("Acute Gale", "^|#|(A", "H", 20, -6, 6, "STN", 32, ""),
      new Move("Dawn Air", "@|*A", "M", 23, -1, 5, "KND", 26, ""),
      new Move("True Vacuum", "!|uA", "L", 32, -16, "KND", "KND", 32, ""),
      new Move("Firey Air", "$A", "M", 28, -14, -2, null, 52, ""),
      new Move("Heavenly Dance", "^B", "M", 20, -13, "KND", "KND", 26, ""),
      new Move("Heavenly Dance", "#|(B", "M", 20, -13, "LNC", "LNC", 26, ""),
      new Move("Heavenly Dance", "^|#|(BB", "M,M", 20, -23, "LNC", "LNC", 58, ""),
      new Move("Hell Flash", "@|*B", "M", 32, -11, "STN", "STN", 32, ""),
      new Move("Blunt Flames", "!|uB", "M", 19, -10, 2, 2, 26, ""),
      new Move("Blunt Flames", "!|uBA", "M,H", 19, -9, 3, 3, 55, ""),
      new Move("Blunt Flames", "!|uBAB", "M,H,M", 19, -12, "STN", "STN", 93, ""),
      new MoveStance("Blunt Flames ~Mist", "!|uBA6", "M,H,SS", 19, -8, 4, 4, 55, "", true),
      new Move("Hell Divide", "$B", "M", 30, -8, "KND", "STN", 18, ""),
      new MoveStance("Hell Divide ~Mist", "$B6", "M,SS", 30, -5, "KND", "STN", 18, "", true),
      new Move("Rising Knee", "^K", "M", 14, -8, 6, 6, 20, ""),
      new Move("Rising Knee", "#|*K", "M", 14, -2, 6, "KND", 25, ""),
      new Move("Wheel Kick", "@|*K", "H", 14, -4, 10, "KND", 25, ""),
      new Move("Bullet Cutter", "$|!|uK", "M", 20, -12, "KND", "KND", 24, ""),
      new Move("Bullet Cutter", "$|!|uKB", "M,M", 20, -8, "KND", "KND", 54, ""),
      new Move("Phoenix Tail", "^|#|(|@|*A+B", "M", 30, -2, "KND", "KND", 52, ""),
      new Move("Sliding", "RK", "L", 21, -22, "KND", "KND", 26, "")
    ],
    // Throws
    [
      new Move("Sea of Madness", "A+G", "H", 17, null, "KND", "KND", 50, "")
    ],
    // Stances
    [
      [
        new MoveStance("Angel Step", "236", "SS", null, null, null, null, null, "", false),
        new Move("Silent Step Slash", "[A", "M", 27, -7, 5, 5, 33, ""),
        new Move("Step Stone Divide", "[B", "M", 16, -16, -2, -2, 42, ""),
        new Move("Step Stone Divide", "[b", "M", 26, -2, "KND", "KND", 62, ""),
        new Move("Silent Step Kick", "[K", "M", 27, -6, 6, 6, 18, "")    
      ],
      [
        new MoveStance("Mist", "4|6B+K", "SS", null, null, null, null, null, "", true),
        new MoveStance("Mist", "$|^B+K", "SS", null, null, null, null, null, "", true),
        new Move("Full Divide", "]A", "H", 32, -9, "KND", "KND", 28, ""),
        new Move("Wind Stitch", "]B", "H", 9, -10, 0, "STN", 10, ""),
        new Move("Wind Stitch", "]BB", "H,H", 9, -10, 0, "STN", 20, ""),
        new Move("Wind Stitch", "]BBB", "H,H,H", 9, -10, 0, "STN", 30, ""),
        new Move("Wind Grab", "]BB+K", "H,M", 9, -14, -1, "AT", 30, ""),
        new Move("Wind Grab", "]BB+K", "H,M", 9, null, null, "STN", 48, ""), // on CH
        new Move("Wind Torture", "]BB+K4", "H,M", 9, null, null, "KND", 35, ""),
        new Move("Water Parting Thrust", "]K", "L", 18, -20, -12, -12, 16, ""),
        new Move("Water Parting Thrust", "]KB", "L,H", 18, -15, -6, -6, 44, ""),
        new Move("Divide", "]A+B", "M", 18, -3, "STN", "STN", 38, ""),
        new Move("Wind Purify", "]B+K", "M", 18, -14, -1, "KND", 30, ""),
        new Move("Wind Divide", "]B+K4", "M", 18, null, null, "KND", 56, ""),
        new Move("Wind Purify", "]b+k", "M", 48, 15, "KND", "KND", 60, ""),
        new Move("Wind Divide", "]b+k4", "M", 48, 15, "KND", "KND", 70, ""),
        new Move("Lion's Clutch", "]A+G", "H", 16, null, "KND", "KND", 45, ""),
        new Move("Korefuji", "]B+G", "H", 16, null, "KND", "KND", 50, ""),
        new Move("Mist Step", "]66|44", "SS", null, null, null, null, null, ""),
        new Move("Mist ~ Jump", "]7|8|9", "SS", null, null, null, null, null, ""),
        new Move("Mist ~ Duck", "]1|2|3", "SS", null, null, null, null, null, "")    
      ]
    ]
  ]
}