# Simple Casino Game System

## Description
This project is a beginner-friendly, real-time casino game system built with modern technologies. It allows players to create and join game tables, play games, and handle payouts, all synchronized via SignalR. Ideal for developers looking to learn real-time communication, backend services, and frontend integration.

## Tech Stack
- Backend: ASP.NET Core with SignalR
- Frontend: React
- Communication: SignalR (WebSockets)
- Data handling: JSON (.json files)
- Containerization: Docker and Docker Compose
- Authentication: JWT

## Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/bitasmbl-simple-casino-game-system-development-task.git
```
2. Make sure Docker Desktop is installed and running.
3. Navigate to the project folder:
```bash
cd bitasmbl-simple-casino-game-system-development-task
```
4. Build and start all services:
```bash
docker-compose up --build
```

## Usage
- Access the React app via `http://localhost:3000`.
- Use the app to sign in, create or join game tables, and play.
- All actions are real-time thanks to SignalR.

## Implementation Overview
- Initialize backend and frontend with Docker Compose for easy setup.
- Implement JWT-based authentication with mocked users.
- Develop Wallet and Lobby services to manage balances and game lobbies.
- Load game rules dynamically from `games.json` for flexible game configurations.
- Create game-specific services (e.g., Game1) to handle game logic and real-time updates.
- Connect frontend React components with SignalR clients for real-time interactivity.

## Notes
- This project is designed to be a starting point for learning real-time multiplayer game systems.
- Future enhancements may include persistent storage, user profiles, and multiple game types.

---

When you are done, submit the project from your profile: [https://bitasmbl.com/home/profile](https://bitasmbl.com/home/profile)