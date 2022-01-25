import { Company } from "./Business.js";
import { getBusinesses } from "./database.js"

const parentHTML = document.querySelector("#business_list")

export const BusinessList = () => {
    const businessArray = getBusinesses()
    parentHTML.innerHTML += `<input type="text" placeholder="Enter business name..." id="companySearch" /><h1>Active Businesses</h1>`

    businessArray.forEach(
        (companyObject) => {
            parentHTML.innerHTML += Company(companyObject)
        }
    )
}