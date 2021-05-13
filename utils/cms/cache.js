import { InMemoryCache, Reference, makeVar } from '@apollo/client';

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			clients: {
				keyArgs: false,
				merge(existing, incoming) {
					let clients = [];

					if (existing?.clients) {
						clients = clients.concat(existing.clients);
					}
					if (incoming?.clients) {
						clients = clients.concat(incoming.clients);
					}

					return {
						...incoming,
						clients
					};
				}
			}
		}
	}
});

export default cache;
