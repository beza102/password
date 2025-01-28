import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        PasswordChecker passwordUtils = new PasswordChecker(6, 12);

        while (true) {
            System.out.println("Please enter a password (or type 'exit' to quit):");
            String password = scanner.nextLine();

            if (password.equalsIgnoreCase("exit")) {
                System.out.println("Goodbye!");
                break;
            }

            boolean isValid = true;

            // Check if the password is banned
            if (passwordUtils.isBannedPassword(password)) {
                System.out.println("This password is banned.");
                isValid = false;
            }

            // Check the length of the password
            String lengthDescription = passwordUtils.describePasswordLength(password);
            if (lengthDescription.equals("short")) {
                System.out.println("The password is too short.");
                isValid = false;
            } else if (lengthDescription.equals("medium")) {
                System.out.println("The password is medium length.");
            } else {
                System.out.println("The password is long.");
            }

            // Check if the password is alphanumeric
            if (!passwordUtils.isAlphanumeric(password)) {
                System.out.println("The password must be alphanumeric.");
                isValid = false;
            }

            if (isValid) {
                System.out.println("This is a valid password.");
            }

            System.out.println(); // Blank line for readability
        }

        scanner.close();
    }
}
