 import { Address } from './address.model';
 import { Phone } from './phone.model';
 import { Schedule } from './schedule.model';

 export interface TestLocation {
   id: number;
   organization_id: number;
   name: string;
   alternate_name: string;
   description: string;
   updated: string;
   featured: boolean;
   physical_address: Address[];
   phones: Phone[];
   regular_schedule: Schedule[];
 }