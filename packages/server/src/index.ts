import { monitor } from '@colyseus/monitor';
import { 
  Constants,
  Database,
  GameRoom,
  GlobalState
} from '@game3js/common';

import { Server } from 'colyseus';
import * as cors from 'cors';
import * as express from 'express';
import { createServer } from 'http';
import * as basicAuth from "express-basic-auth";

import { join } from 'path';

const basicAuthMiddleware = basicAuth({
    // list of users and passwords
    users: {
        "admin": "admin",
    },
    // sends WWW-Authenticate header, which will prompt the user to fill
    // credentials in
    challenge: true
});

const PORT = Number(process.env.PORT || Constants.WS_PORT);

const app = express();
app.use(cors());
app.use(express.json());

// Game server
const colyseusServer = new Server({
  server: createServer(app),
  express: app,
});

async function initializeDatabase() {
  GlobalState.ServerState.dbManager = new Database.OrbitDBManager();
  await GlobalState.ServerState.dbManager.start();
/*
  console.log(await GlobalState.ServerState.dbManager.node.bootstrap.list());
  console.log(await GlobalState.ServerState.dbManager.node.id());
  console.log(await GlobalState.ServerState.dbManager.node.swarm.peers());
*/
}

initializeDatabase();

// Game Rooms
colyseusServer.define(Constants.ROOM_NAME, GameRoom.ShooterGameRoom);

// If you don't want people accessing your server stats, comment this line.
app.use("/colyseus", basicAuthMiddleware, monitor());

// Serve static resources from the "public" folder
app.use(express.static(join(__dirname, 'public')));

app.post('/profile', async (req: any, res: any) => {
  const result = await GlobalState.ServerState.dbManager.savePlayerProfile(req.body);
  res.json(result);
});

app.get('/profile', async (req: any, res: any) => {
  const result = await GlobalState.ServerState.dbManager.getPlayerProfile(req.query.walletid);
  res.json(result);
});

app.get('/leaderboard', async (req: any, res: any) => {
  const result = await GlobalState.ServerState.dbManager.getLeaderboard();
  res.json(result);
});

// TODO: only organizer must be able to put info
app.post('/tournament', async (req: any, res: any) => {
  const result = await GlobalState.ServerState.dbManager.putTournamentData(req.body);
  res.json(result);
});

app.get('/tournament', async (req: any, res: any) => {
  const result = await GlobalState.ServerState.dbManager.getTournamentData(req.query.tournamentId);
  res.json(result);
});

app.post('/gameReplay', async (req: any, res: any) => {
  const result = await GlobalState.ServerState.dbManager.serverPutGameReplay(req.body);
  res.json(result);
});

app.get('/gameSession', async (req: any, res: any) => {
  const sessionId = req.query.sessionId
  const playerAddress = req.query.playerAddress
  const result = await GlobalState.ServerState.dbManager
    .serverGetGameSession(sessionId, playerAddress);
  res.json(result);
});

// Serve the frontend client
app.get('*', (req: any, res: any) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

colyseusServer.onShutdown(() => {
  console.log(`Shutting down...`);
});

colyseusServer.listen(PORT);

console.log(`Listening on ws://localhost:${PORT}`);