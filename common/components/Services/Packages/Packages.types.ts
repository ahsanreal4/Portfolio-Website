import { Feature } from "../../../../models/Feature";
import { Package } from "../../../../models/Package";

export interface IServicePackagesProps {
  services: Package[];
  features: Feature[];
}
