# Chess Knight Challenge ♞

An interactive web application where users can move a Knight on a chessboard. The game features real-time move validation via a **Node.js** backend, ensuring the Knight follows its unique "L-shape" movement rules.

##  Features
* **Interactive Chessboard**: A dynamic 8x8 grid built with vanilla JavaScript and CSS.
* **Move Validation API**: A secure backend endpoint that calculates valid moves.
* **Drag & Drop**: Smooth user experience using native browser drag-and-drop events.
* **Docker Ready**: Fully containerized for easy deployment and local testing.

##  Tech Stack
* **Frontend**: HTML5, CSS3, JavaScript (ES6+).
* **Backend**: Node.js, Express framework, CORS.
* **Containerization**: Docker.

##  How to Run (One-Command Setup)

The easiest way to run the project is using **Docker**:

1.  **Build the Docker image**:
    ```bash
    docker build -t chess-app .
    ```
2.  **Run the container**:
    ```bash
    docker run -p 8080:8080 chess-app
    ```
3.  **Open the app**: Visit [http://localhost:8080](http://localhost:8080) in your browser.

##  Manual Setup (Node.js)
1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the server:
    ```bash
    node server.js
    ```
3.  Open [http://localhost:8080](http://localhost:8080).

##  Project Structure
* `server.js`: Handles API requests and serves static web files.
* `app.js`: Contains the frontend logic for rendering the board and handling UI logic.
* `index.html`: The main structural file for the UI.
* `style.css`: Styles for the board squares and the knight piece.
* `Dockerfile`: Configuration for building the Docker container.

---
Developed as part of a Fullstack Coding Challenge.
