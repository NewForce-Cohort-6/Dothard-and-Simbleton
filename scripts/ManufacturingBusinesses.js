//By importing BusinessList and having this function expect a parameter of businessArray, it is able to reuse the same code in BusinessList to print the specific manufacturing businesses. 

import { BusinessList } from "./BusinessList.js";

export const ManufacturingBusinesses = (businessArrayParam) => {
   const filteredManufacturingBusinesses = businessArrayParam.filter(singleManufacturingBusiness => singleManufacturingBusiness.companyIndustry === "Manufacturing")
   return BusinessList(filteredManufacturingBusinesses)
}
