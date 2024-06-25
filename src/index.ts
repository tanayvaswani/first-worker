import { Ai } from '@cloudflare/ai';
import { Hono } from 'hono';

export type Bindings = {
	AI: Ai | any;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get('/', async (c) => {
	const ai = new Ai(c.env.AI);

	const inputs = {
		prompt: 'Tell me a joke related to AI',
	};

	const res = await ai.run('@cf/mistral/mistral-7b-instruct-v0.1', inputs);

	return c.json(res);
});

export default app;
