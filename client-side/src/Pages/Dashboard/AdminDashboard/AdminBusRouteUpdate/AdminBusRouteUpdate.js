import React from 'react';
import { useParams } from 'react-router-dom';

const AdminBusRouteUpdate = () => {
	const { routeId } = useParams();
	return (
		<div>
			<p>route Update : {routeId}</p>
		</div>
	);
};

export default AdminBusRouteUpdate;
