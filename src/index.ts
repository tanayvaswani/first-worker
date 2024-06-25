export interface Env {
	// MY_KV_NAMESPACE: KVNamespace;
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	// MY_BUCKET: R2Bucket;
	// MY_SERVICE: Fetcher;
	// MY_QUEUE: Queue;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log('Hello, from local console!');
		console.log(request.cf);

		// handle input body received in request
		// make a db request

		// return new Response('Hello, Tanay!');
		return new Response(JSON.stringify({ message: 'Hello, Tanay!' }));
	},
} satisfies ExportedHandler<Env>;
