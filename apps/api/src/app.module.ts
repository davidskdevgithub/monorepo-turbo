import { Module } from "@nestjs/common";
import { LicencesModule } from "./licences/licences.module";
import { TrpcModule } from "./trpc/trpc.module";

@Module({
	imports: [TrpcModule, LicencesModule],
})
export class AppModule {}
