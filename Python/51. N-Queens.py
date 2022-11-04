# 51. N-Queens

# URL: https://leetcode.com/problems/n-queens/

# The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

# Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

# Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        cols = set()
        positive_diagonals = set()  # r + c
        negative_diagonals = set()  # r - c
        result = []

        board = [['.'] * n for _ in range(n)]

        def back_track(row):
            if row == n:
                copy = [''.join(row) for row in board]
                result.append(copy)
                return

            for col in range(n):
                # Check if the spot is invalid; if so, skip it
                if col in cols or row + col in positive_diagonals or row - col in negative_diagonals:
                    continue

                # Update the sets
                cols.add(col)
                positive_diagonals.add(row + col)
                negative_diagonals.add(row - col)
                board[row][col] = 'Q'

                # Backtrack
                back_track(row + 1)

                # Delete the set changes
                cols.remove(col)
                positive_diagonals.remove(row + col)
                negative_diagonals.remove(row - col)
                board[row][col] = '.'

        back_track(0)

        return result
