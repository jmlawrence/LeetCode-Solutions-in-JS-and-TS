# 37. Sudoku Solver

# https://leetcode.com/problems/sudoku-solver/

# Write a program to solve a Sudoku puzzle by filling the empty cells.

# A sudoku solution must satisfy all of the following rules:

# Each of the digits 1-9 must occur exactly once in each row.
# Each of the digits 1-9 must occur exactly once in each column.
# Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
# The '.' character indicates empty cells.


# Example 1:


# Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
# Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]

class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        num_of_cells = 81

        # Check to see if this solution is valid
        def is_valid(row, col, digit):
            for i in range(9):
                if board[row][i] == digit or board[i][col] == digit:
                    return False

            start_row = (row // 3) * 3
            start_col = (col // 3) * 3

            for i in range(3):
                for j in range(3):
                    r = start_row + i
                    c = start_col + j

                    if r == row and c == col:
                        continue

                    if board[r][c] == digit:
                        return False
            return True

        def backtrack(idx):
            if idx == num_of_cells:
                return True

            row = idx // 9
            col = idx % 9

            if board[row][col] == '.':
                for i in range(len(digits)):
                    if is_valid(row, col, digits[i]):
                        # Set
                        board[row][col] = digits[i]

                        if backtrack(idx + 1):
                            return True

                        # Unset
                        board[row][col] = '.'

                return False
            else:
                return backtrack(idx + 1)

        backtrack(0)
