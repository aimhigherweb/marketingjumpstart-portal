import { createContext, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRouter } from 'next/router';

import { currentUser, recoverUser } from '../utils/auth/netlifyIdentity';
import recoverToken from '../utils/auth/recoverUser';

import '../styles/global.scss';

export const UserContext = createContext();

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
				<Component {...pageProps} />
			</QueryClientProvider>
		</UserContext.Provider>
	);
};

export default App;
