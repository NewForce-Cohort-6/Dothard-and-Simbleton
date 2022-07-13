import { businessList } from "./BusinessList.js";
import { getBusinesses } from "./database.js";

const businessArray = getBusinesses()
const filteredManufacturingBusinesses = businessArray.filter(singleManufacturingBusiness => singleManufacturingBusiness.companyIndustry === "Manufacturing")

export const ManufacturingBusinesses = () => {

   return businessList(filteredManufacturingBusinesses)
}
