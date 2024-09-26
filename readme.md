# tudu-tudu

`tudu-tudu` is a simple backend-only to-do application built using Node.js and Express. This project serves as a learning tool for understanding basic backend development concepts, including creating and managing API endpoints. It uses a basic in-memory data structure to store tasks, making it ideal for development and educational purposes.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- 📝 **CRUD Operations**: Easily create, read, update, and delete to-do items.
- 🔄 **In-Memory Data Storage**: Uses an in-memory data structure for quick, temporary storage of tasks during server runtime.
- 🛠️ **Learning Focused**: Built for learning the fundamentals of Express and RESTful API development.

## Installation

### Prerequisites

Before running the application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or above)
- [npm](https://www.npmjs.com/) (version 6.x or above)

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/yokai-crow/tudu-tudu.git
    ```

2. Navigate to the project directory:

    ```bash
    cd tudu-tudu
    ```

3. Install the dependencies:

    ```bash
    npm install express nodemon dotenv
    ```

4. Start the server:

    ```bash
    npm run dev
    ```

5. The server should now be running on default `http://localhost:3000` if environment variable is not set.

## Usage

You can interact with the `tudu-tudu` backend using API requests. Below are the available endpoints:

## API Endpoints

### Base URL: `http://localhost:3000`

- **GET /todos**
  - Retrieves all to-do items.
  - Response example:
    ```json
    [
      {
        "id": 1,
        "task": "Learn Node.js",
        "status": "not complete"
      }
    ]
    ```

- **GET /todos/:id**
  - Retrieves a specific to-do item by ID.
  - Response example:
    ```json
    {
      "id": 1,
      "task": "Learn Node.js",
      "status": "not complete"
    }
    ```

- **POST /todos**
  - Creates a new to-do item.
  - Request body example:
    ```json
    {
      "task": "Learn Express.js"
    }
    ```
  - Response example:
    ```json
    {
      "id": 2,
      "task": "Learn Express.js",
      "status": "not complete"
    }
    ```

- **PUT /todos/:id**
  - Updates an existing to-do item by ID.
  - Request body example:
    ```json
    {
      "task": "Learn advanced Node.js"
    }
    ```
  - Response example:
    ```json
    {
      "id": 1,
      "task": "Learn advanced Node.js",
      "status": "completed"
    }
    ```

- **DELETE /todos/:id**
  - Deletes a specific to-do item by ID.
  - Response example:
    ```json
    {
      "message": "Task deleted successfully"
    }
    ```

## Contributing

Contributions are welcome! If you would like to contribute to the project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to reach out:

- GitHub: [yokai-crow](https://github.com/yokai-crow)
- Email: nuranmagar8@gmail.com
