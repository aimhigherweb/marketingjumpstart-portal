const checkAccess = (user_roles, access_roles) => {
	const hasRole = access_roles.some((role) => user_roles?.includes(role))
	const isAdmin = user_roles?.includes(`admin`) 
	const isPublic = access_roles.includes('public') || access_roles.length == 0
	const hasNoClients = user_roles === []

	return  hasRole || isAdmin || isPublic || hasNoClients
}

export default checkAccess