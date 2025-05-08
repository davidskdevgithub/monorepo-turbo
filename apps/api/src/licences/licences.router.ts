import { Input, Mutation, Query, Router } from "nestjs-trpc";
import { z } from "zod";
import { Licence, LicenceSchema } from "./licences.schema";
import { LicencesService } from "./licences.service";

@Router({
	alias: "licences",
})
export class LicencesRouter {
	constructor(private readonly licencesService: LicencesService) {}

	@Query({
		output: z.array(LicenceSchema),
	})
	getAll() {
		return this.licencesService.getAll();
	}

	@Mutation({
		input: LicenceSchema,
		output: LicenceSchema,
	})
	create(@Input() licenceData: Licence) {
		return this.licencesService.create(licenceData);
	}
}
