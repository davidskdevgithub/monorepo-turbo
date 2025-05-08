import { Injectable } from "@nestjs/common";
import { Licence } from "./licences.schema";

@Injectable()
export class LicencesService {
	private licences: Licence[] = [];

	getAll(): Licence[] {
		return this.licences;
	}

	create(licenceData: Licence): Licence {
		this.licences.push(licenceData);
		return licenceData;
	}
}
