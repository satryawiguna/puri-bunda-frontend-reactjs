import * as http from 'http';
import { Server } from 'socket.io';
import { app } from './app';
import { rootSocket } from './config/rootSocket';
import { scheduleCronJobs } from './conJobs';
import { config } from './config/config';

scheduleCronJobs();

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' }, path: 'api/v1/socket.io' });

globalThis.io = io;

rootSocket(io);

server.listen(config.port, () => {
     console.log(`Listening to port ${config.port}`);
});
