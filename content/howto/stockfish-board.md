---
title: See the chess board while Stockfish plays
summary: "Print the board as text after every move, so you can follow the game without building a window."
courses: []
keywords: "chess stockfish board text terminal console print visual"
---
Your program plays chess with Stockfish, but all you see is moves like `e2e4` scrolling past. It's hard to tell what's actually on the board. You don't need a window for this: Stockfish can draw the board as text, right in the terminal.

```text
+---+---+---+---+---+---+---+---+
| r | n | b | q | k | b | n | r | 8
+---+---+---+---+---+---+---+---+
| p | p | p | p | p | p | p | p | 7
+---+---+---+---+---+---+---+---+
|   |   |   |   |   |   |   |   | 6
+---+---+---+---+---+---+---+---+
|   |   |   |   |   |   |   |   | 5
+---+---+---+---+---+---+---+---+
|   |   |   |   | P |   |   |   | 4
+---+---+---+---+---+---+---+---+
|   |   |   |   |   |   |   |   | 3
+---+---+---+---+---+---+---+---+
| P | P | P | P |   | P | P | P | 2
+---+---+---+---+---+---+---+---+
| R | N | B | Q | K | B | N | R | 1
+---+---+---+---+---+---+---+---+
  a   b   c   d   e   f   g   h
```

Capital letters are White, small letters are Black: K king, Q queen, R rook, B bishop, N knight, P pawn.

This is for programs that use the `stockfish` Python package (`from stockfish import Stockfish`).

## Print the board

Find the line where your program makes a move. Straight after it, print the board:

```python
stockfish.make_moves_from_current_position([move])
print(stockfish.get_board_visual())
```

Run your program and make a move: you should see the board, with your piece in its new square. Do the same after Stockfish's move, so you see the board after every turn.

Print it **after** the move is made, not before, or you'll always be looking at the board one move behind.

## Playing as Black?

The board is drawn from White's side. If you're sitting on Black's side of the real board, flip it so the screen matches what's in front of you:

```python
print(stockfish.get_board_visual(False))
```

Now row 8 is at the bottom and the letters run h to a, just as you see them from your seat.

## Make it yours

- **Want to know whose turn it is?** The position text ends with `w` or `b` for the side to move: `stockfish.get_fen_position().split()[1]` gives you that letter.
- **Want to see the last move too?** Print it just above the board: `print("Stockfish played", move)`.
- **Want a gap between boards?** `print()` on its own leaves a blank line, so each board stands apart as the game goes on.
- **Want to click moves instead of typing them?** That needs a window. Ask your teacher about a tkinter board once the rest of your program is working.

## When it goes wrong

- **`AttributeError: 'Stockfish' object has no attribute 'get_board_visual'`.** Your `stockfish` package is old. Update it with `pip install --upgrade stockfish`.
- **`AttributeError: 'Stockfish' object has no attribute 'is_move_correct'`** (after updating). Newer versions renamed it: use `is_move_legal(move)` instead.
- **`FileNotFoundError` when your program starts.** Python can't find the Stockfish engine itself. Give its location: `Stockfish(path="/usr/games/stockfish")` on a Raspberry Pi or Linux, or the path to `stockfish.exe` on Windows.
- **The board never changes.** You're printing before the move is made, or the move isn't being given to Stockfish. Check `make_moves_from_current_position` comes first.

::: teacher

**What this is.** A small fix for a student whose chess program works but shows only move text: one `print` line after each move gives them a board to follow, with no window to build. It came from a student playing Stockfish on the myCobot arm; it suits any project using the `stockfish` package.

**If they want clicking.** A light tkinter board that only draws the position (from `get_fen_position()`) and sends clicked moves back as text was made for this case on 3 Nov 2026. It isn't a how-to yet; ask in the tutorials project if a student needs it.

**Tested** with the `stockfish` package 5.2.0 and the Stockfish engine from the Ubuntu package (`/usr/games/stockfish`), 3 Nov 2026, including the flipped board and the renamed `is_move_legal`.

:::
