// I have made this code reusable by having the function expect an argument of the business array. I can now utilize this exact function in the Search module.

export const AgentList = (businessArrayParam) => {


const agentHTMLRepresentations = businessArrayParam.map((agent) => {
    return `
    <section class="business">
                <h3 class="agent--name">
                ${agent.purchasingAgent.nameFirst} ${agent.purchasingAgent.nameLast}</h3>
                <div class="agent--company">
                ${agent.companyName}</div>
                <div class="agent--phoneNumber">
                ${agent.phoneWork}</div>
                <hr style="width:50%;text-align:left;margin-left:0">
    `
}
)
const finalHTML = agentHTMLRepresentations.join("")
return finalHTML
}
