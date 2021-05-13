import { createContext } from 'react';
import { useQuery } from '@apollo/client';

export const CMSDataContext = createContext();

const GraphQLFetch = ({ QUERY, options = {}, children }) => {
	const { loading, error, data } = useQuery(QUERY, options);

	if (loading) return <p>Loading...</p>;

	if (error) return <p>Looks like something went wrong</p>;

	if (!data) return <p>Looks like something went wrong, try refreshing</p>;

	return (
		<CMSDataContext.Provider value={data}>
			{children}
		</CMSDataContext.Provider>
	);
};

export default GraphQLFetch;
