import { Company } from "./Business.js"
import { manufacturingCompanies, newYorkCompanies, purchasingAgents } from "./database.js"

const parentHTML = document.querySelector("#business_list")

export const NYBusinesses = () => {
    const NYArray = newYorkCompanies()
    parentHTML.innerHTML += "<h1>New York Businesses</h1>"

    NYArray.forEach(
        (companyObject) => {
            parentHTML.innerHTML += Company(companyObject)
        }
    )
}

export const manufacturingBusinesses = () => {
    const ManufacturingArray = manufacturingCompanies()
    parentHTML.innerHTML += "<h1>Manufacturing Businesses</h1>"

    ManufacturingArray.forEach(
        (companyObject) => {
            parentHTML.innerHTML += Company(companyObject)
        }
    )
}

export const agentsArray = () => {
    const agentArray = purchasingAgents()
    parentHTML.innerHTML += `<h1>Purchasing Agents</h1></article class="agents>`

    agentArray.forEach(
        (companyObject) => {
            parentHTML.innerHTML += Company(companyObject)
        }
    )
    parentHTML.innerHTML +=`</article>`
}

    
