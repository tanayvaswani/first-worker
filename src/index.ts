import { Ai } from '@cloudflare/ai';
import { Hono } from 'hono';

export type Env = {
	AI: any;
};

const app = new Hono<{ Bindings: Env }>();

app.get('/', (c) => {
	const ai = new Ai(c.env.AI);

	return c.json({ message: 'Hello, Tanay!' });
});

export default app;
