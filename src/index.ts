export default {
	async fetch(request, env, ctx): Promise<Response> {
		console.log('Hello, from local console!');
		console.log(request.cf);

		return new Response('Hello, Tanay!');
	},
} satisfies ExportedHandler<Env>;
