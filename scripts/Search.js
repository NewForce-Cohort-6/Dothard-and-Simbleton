import { BusinessList } from "./BusinessList.js";
import { AgentList } from "./AgentList.js";


// having both of these inside of the same component will causes errors to populate in the console. the code works correctly it just is running everything through both event listeners. They are utilizing the code in the individual List modules for their category and that is why Search also is expecting a parameter

export const Search = (businessArrayParam) => {

document.querySelector("#content").addEventListener("keypress", (keyPressEvent) => {
    const companySearchResultArticle = document.querySelector(".foundBusinesses")

    if (keyPressEvent.charCode === 13) {
       const foundBusiness = businessArrayParam.find(singleBusiness => singleBusiness.companyName.toLowerCase().includes(keyPressEvent.target.value.toLowerCase()))
        
       const arrayFoundBusiness = [foundBusiness]

        companySearchResultArticle.innerHTML = BusinessList(arrayFoundBusiness)    
    }
});

document.querySelector("#content").addEventListener("keypress", (keyPressEvent) => {
    const agentSearchResultArticle = document.querySelector(".foundBusinesses")

    if (keyPressEvent.charCode === 13) {
       const foundAgent = businessArrayParam.find(singleBusiness => singleBusiness.purchasingAgent.nameLast.toLowerCase().includes(keyPressEvent.target.value.toLowerCase()) || singleBusiness.purchasingAgent.nameFirst.toLowerCase().includes(keyPressEvent.target.value.toLowerCase()))
        
       const arrayFoundAgent = [foundAgent]

       agentSearchResultArticle.innerHTML = AgentList(arrayFoundAgent)    
    }
});

}