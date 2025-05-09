"use client";

import { trpc } from "@/lib/trpc";

export default function Licenses() {
	const { data: licences, isLoading, error } = trpc.licences.getAll.useQuery();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div>
			<h1 className="text-xl mb-4">Licenses</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{licences?.map((licence) => (
					<div key={licence.id}>
						<p>Start: {licence.start_date}</p>
						<p>End: {licence.end_date}</p>
						<p>Reason: {licence.reason}</p>
					</div>
				))}
			</div>
		</div>
	);
}
