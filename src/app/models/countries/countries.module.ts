import { ICountry } from "country-state-city";
import { Timezones } from "country-state-city/lib/interface";

export class CountriesModule implements ICountry {
  name: string;
  phonecode: string;
  isoCode: string;
  flag: string;
  currency: string;
  latitude: string;
  longitude: string;
  timezones?: Timezones[];


 }
