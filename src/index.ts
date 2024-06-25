import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
	return c.json({ message: 'Hello, Tanay!' });
});

export default app;
