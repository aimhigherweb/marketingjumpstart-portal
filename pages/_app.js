import { createContext, useEffect } from 'react';
import { ApolloClient, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRouter } from 'next/router';

import { currentUser, recoverUser } from '../utils/auth/netlifyIdentity';
import recoverToken from '../utils/auth/recoverUser';
import cache from '../utils/cms/cache';

import '../styles/global.scss';

export const UserContext = createContext();

const httpLink = createHttpLink({
	uri: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`
});
const authLink = setContext((_, { headers }) => {
	const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

	return {
		headers: {
			...headers,
			authorization: `Bearer ${token}`
		}
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache
});

const queryClient = new QueryClient();

const App = ({ Component, pageProps }) => {
	const user = typeof window !== `undefined` && currentUser();
	const userData = {
		loggedIn: user && true,
		name: user?.user_metadata?.full_name,
		roles: user?.app_metadata?.roles || [],
		email: user?.email
	};

	useEffect(() => {
		if (typeof window !== `undefined`) {
			window.localStorage.setItem(`gotrue.user`, JSON.stringify(user));

			const recover = recoverToken();

			if (recover) {
				console.log(`User has been recovered, redirecting to update page`);
			}
		}
	}, [user]);

	return (
		<UserContext.Provider value={userData}>
			<QueryClientProvider client={queryClient}>
				<ApolloProvider client={client}>
					<Component {...pageProps} />
				</ApolloProvider>
			</QueryClientProvider>
		</UserContext.Provider>
	);
};

export default App;
