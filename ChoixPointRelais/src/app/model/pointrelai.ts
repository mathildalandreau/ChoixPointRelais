import { Adresse } from "./adresse";
import { Horaire } from "./horaire";

export class PointRelai {
    id!: string;
    name!: string;
    adresse!: Adresse;
    latitude!: string; 
    longitude!: string
    horaires!: Horaire[];
    
  }
  