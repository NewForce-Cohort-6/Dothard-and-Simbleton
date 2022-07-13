import { businessList } from "./BusinessList.js";
import { getBusinesses } from "./database.js";

const businessArray = getBusinesses()
const filteredNYBusinesses = businessArray.filter(singleNYBusiness => singleNYBusiness.addressStateCode === "NY")

export const NewYorkBusinesses = () => {

   return businessList(filteredNYBusinesses)
}
