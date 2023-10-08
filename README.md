# Unit2.Froyo

# Froyo Orders Workshop

## Overview
This workshop focuses on building a simple web application that allows users to order their favorite froyo flavors. Upon submission, users can view statistics about their order breakdown in the browser console.

## Objective
- Understand how to prompt users for input in a web environment.
- Process and manipulate user input using JavaScript.
- Display processed information in the browser's console.

## Planning Phase
Before diving into coding, it's essential to have a plan. Here's a recommended approach:

1. **Understand the Problem**: Ensure you understand the workshop's objective and user story.
2. **Break Down Tasks**: Think of the main functionalities you need (e.g., capturing user input, processing the input, displaying results).
3. **Design Flow**: Plan the user interaction. How will they input the flavors? How will the results be shown?
4. **Pseudocode**: Write down in plain English (or your native language) the steps your program should take. This helps in structuring your code later.

With a clear plan in hand, you'll find the coding phase more structured and straightforward.

## Setup with VS Code and Chrome

### Prerequisites
- Google Chrome
- VS Code
- Basic familiarity with the Command Line Interface (CLI)

### Steps
1. **Open VS Code and its Integrated Terminal**:
   - Launch VS Code.
   - Use the shortcut `Ctrl + ~` (on Windows/Linux) or `Cmd + ~` (on macOS) to open the integrated terminal.

2. **Clone the Repository**:
    In the terminal, type:
    ```
    git clone [Your Repository URL]
    ```

3. **Navigate to the Directory**:
    In the terminal, type:
    ```
    cd path/to/Unit2.Froyo
    ```

4. **Open the Project in VS Code**:
    If not already open, you can type:
    ```
    code .
    ```

5. **Serve the Application with Live Server**:
   - Assuming you have the `live-server` extension in VS Code, right-click the `index.html` file in the explorer pane and select "Open with Live Server". This will automatically launch the application in Chrome.

## How to Use
1. Open the web application in Chrome.
2. A prompt will ask you to enter your desired froyo flavors, separated by commas.
3. After inputting your flavors, click "OK".
4. Open Chrome's console (right-click on the page and select "Inspect", then navigate to the "Console" tab).
5. View the breakdown of the froyo flavors you entered.

## Criteria
To ensure the workshop's objective is met, the following criteria should be satisfied:

1. **Project Management**: The latest changes have been pushed to the submitted Github repo.
2. **Project Management**: The repo contains an HTML file and a connected JS file.
3. **Functionality**: The user is prompted for froyo flavors upon entering the website.
4. **Functionality**: The user's input string is split into an array of strings.
5. **Functionality**: A loop is used to iterate through the array of flavors.
6. **Functionality**: An object is used to keep count of how many orders there are of each flavor.
7. **Functionality**: The program correctly counts the number of each flavor in the user's input.
8. **Code Style**: The logic for counting the frequencies of elements in an array is organized into a function that returns an object.
9. **Code Style**: Names are consistent and meaningful.
10. **Functionality**: The console output changes depending on the user's input.
11. **Understanding**: Demonstrates understanding of expanded JavaScript and Intermediate Programming concepts.

## Feedback and Issues
If you encounter any issues or have feedback to improve the workshop, please open an issue in this repository.

## Contributing
Pull requests are welcome! Please ensure any changes you propose align with the workshop's objective and maintain its simplicity for new learners.

## License
This project is open source, under the [MIT License](LICENSE).
