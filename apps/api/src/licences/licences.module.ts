import { Module } from "@nestjs/common";
import { LicencesRouter } from "./licences.router";
import { LicencesService } from "./licences.service";

@Module({
	providers: [LicencesService, LicencesRouter],
})
export class LicencesModule {}
