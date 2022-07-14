//By importing BusinessList and having this function expect a parameter of businessArray, it is able to reuse the same code in BusinessList to print the specific New York businesses. 

import { BusinessList } from "./BusinessList.js";

export const NewYorkBusinesses = (businessArrayParam) => {
   const filteredNYBusinesses = businessArrayParam.filter(singleNYBusiness => singleNYBusiness.addressStateCode === "NY")
   return BusinessList(filteredNYBusinesses)
}
