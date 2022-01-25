import { AgentFinder, newAgentsArray } from "./agents.js";
import { Business, Company } from "./Business.js";
import { getBusinesses, purchasingAgents } from "./database.js"


const parentHTML = document.querySelector("#business_list")
const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    /*
                        When the user presses 'Enter', find the matching business.

                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example: business.companyName.includes(keyPressEvent.target.value)
                    */
                    const agentArr = purchasingAgents()
                    const newArray = newAgentsArray(getBusinesses())

                    let foundAgent = agentArr.find((agent) => {
                        return agent.nameFirst.includes(keyPressEvent.target.value)})
                    for (const agent of newArray) {
                        if (agent.fullName.includes(foundAgent.nameFirst)) {
                            foundAgent = agent
                        }
                    }    


                    /** implement .find() method here */
                    companySearchResultArticle.innerHTML = AgentFinder(foundAgent);
                    parentHTML.innerHTML = ''
                }
        });

export const BusinessList = () => {
    const businessArray = getBusinesses()
    parentHTML.innerHTML += `<h1>Active Businesses</h1>`

    businessArray.forEach(
        (companyObject) => {
            parentHTML.innerHTML += Company(companyObject)
        }
    )
}