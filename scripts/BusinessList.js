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
                    const newArray = newAgentsArray(getBusinesses())

                    let foundAgent = newArray.find((agent) => {
                        return agent.fullName.includes(keyPressEvent.target.value)})  

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