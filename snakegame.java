import java.util.Random;
import java.util.Scanner;

public class SnakesAndLadders {
    private static final int BOARD_SIZE = 100;
    private static final int[] board = new int[BOARD_SIZE + 1];
    
    static {
        // Ladders
        board[2] = 38;   // Ladder from 2 to 38
        board[7] = 14;   // Ladder from 7 to 14
        board[8] = 31;   // Ladder from 8 to 31
        board[15] = 26;  // Ladder from 15 to 26
        board[28] = 84;  // Ladder from 28 to 84
        board[21] = 42;  // Ladder from 21 to 42
        board[36] = 44;  // Ladder from 36 to 44
        board[51] = 67;  // Ladder from 51 to 67
        board[78] = 98;  // Ladder from 78 to 98
        board[71] = 91;  // Ladder from 71 to 91
        board[88] = 99;  // Ladder from 88 to 99

        // Snakes
        board[16] = 6;   // Snake from 16 to 6
        board[47] = 26;  // Snake from 47 to 26
        board[49] = 11;  // Snake from 49 to 11
        board[56] = 53;  // Snake from 56 to 53
        board[62] = 19;  // Snake from 62 to 19
        board[64] = 60;  // Snake from 64 to 60
        board[87] = 24;  // Snake from 87 to 24
        board[93] = 73;  // Snake from 93 to 73
        board[95] = 75;  // Snake from 95 to 75
        board[98] = 78;  // Snake from 98 to 78
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        int player1Position = 0;
        int player2Position = 0;
        int currentPlayer = 1;

        while (player1Position < BOARD_SIZE && player2Position < BOARD_SIZE) {
            System.out.println("Player " + currentPlayer + "'s turn. Press enter to roll the dice.");
            scanner.nextLine();
            int diceRoll = random.nextInt(6) + 1; // Roll the dice (1-6)
            System.out.println("Player " + currentPlayer + " rolled a " + diceRoll);

            if (currentPlayer == 1) {
                player1Position += diceRoll;
                if (player1Position > BOARD_SIZE) {
                    player1Position = BOARD_SIZE; // Cannot go beyond 100
                }
                player1Position = board[player1Position] != 0 ? board[player1Position] : player1Position;
                System.out.println("Player 1 moved to " + player1Position);
                currentPlayer = 2;
            } else {
                player2Position += diceRoll;
                if (player2Position > BOARD_SIZE) {
                    player2Position = BOARD_SIZE; // Cannot go beyond 100
                }
                player2Position = board[player2Position] != 0 ? board[player2Position] : player2Position;
                System.out.println("Player 2 moved to " + player2Position);
                currentPlayer = 1;
            }

            // Check for win
            if (player1Position == BOARD_SIZE) {
                System.out.println("Player 1 wins!");
                break;
            } else if (player2Position == BOARD_SIZE) {
                System.out.println("Player 2 wins!");
                break;
            }
        }

        scanner.close();
    }
}
