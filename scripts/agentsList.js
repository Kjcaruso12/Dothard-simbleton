import { Agents, newAgentsArray } from "./agents.js"
import { getBusinesses } from "./database.js"

const parentHTML = document.querySelector("#business_list")

export const AgentList = () => {
    const agentArray = newAgentsArray(getBusinesses())
    parentHTML.innerHTML += `<h1>Purchasing Agents</h1>`

    agentArray.forEach(
        (companyObject) => {
            parentHTML.innerHTML += Agents(companyObject)
        }
    )
}
