export interface Env {
	// MY_KV_NAMESPACE: KVNamespace;
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	// MY_BUCKET: R2Bucket;
	// MY_SERVICE: Fetcher;
	// MY_QUEUE: Queue;
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		console.log('Hello, from local console!');
		console.log(request.cf);

		return new Response('Hello, Tanay!');
	},
} satisfies ExportedHandler<Env>;
