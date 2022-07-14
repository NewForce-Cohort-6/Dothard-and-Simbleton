// I have made this code reusable by having the function expect an argument of the business array. I can now utilize this exact function in NY business, Manufacturing Business, and the Search modules

export const BusinessList = (businessArrayParam) => {
    let businessListHTML = ""

    //loop through the businesses array with a forEach.
    businessArrayParam.forEach((singleBusinessObj) => {
        businessListHTML += `
            <section class="business">
                <h3 class="business--name">
                ${singleBusinessObj.companyName}</h3>
                <div class="business--address">
                ${singleBusinessObj.addressFullStreet}<br>
                ${singleBusinessObj.addressCity}, ${singleBusinessObj.addressStateCode} ${singleBusinessObj.addressZipCode}
                <hr style="width:50%;text-align:left;margin-left:0">`
    })
    return businessListHTML
}

   

    
