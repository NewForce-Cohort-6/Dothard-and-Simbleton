export const businessList = (businessArrayParam) => {
    let businessListHTML = ""

    //loop through the businesses array with a forEach.
    businessArrayParam.forEach((singleBusinessObj) => {
        businessListHTML += `
            <section class="business">
                <h2 class="business--name">
                ${singleBusinessObj.companyName}</h2>
                <div class="business--address">
                ${singleBusinessObj.addressFullStreet}<br>
                ${singleBusinessObj.addressCity}, ${singleBusinessObj.addressStateCode} ${singleBusinessObj.addressZipCode}
                <hr style="width:50%;text-align:left;margin-left:0">`
    })
    return businessListHTML
}

