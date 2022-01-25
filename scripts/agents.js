import { purchasingAgents } from "./database.js"

export const newAgentsArray = (businessArray) => {
    const newArray = []
    const agentArray = purchasingAgents()
    for (const agent of agentArray) {
        let agentObj = {}
        for (const business of businessArray) {
            if (agent.nameFirst === business.purchasingAgent.nameFirst) {
                agentObj.fullName = `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`
                agentObj.company = business.companyName
                agentObj.phoneNumber = business.phoneWork
                newArray.push(agentObj)
            }
        }
    }
    return newArray
}

export const Agents = (agentObj) => {
    return `
        <section class="agent_info">
            <h2 class="agent_name">${agentObj.fullName}</h2>
            <div class="company_agent">
                <h3>${agentObj.company}</h3>\n
                <h3>${agentObj.phoneNumber}</h3>
                <hr>
            </div>
        </section>
    `
}

export const AgentFinder = (agentObj) => {
    return `
        <section class="agent_info">
            <h2 class="agent_name">${agentObj.fullName}</h2>
            <div class="company_agent">
                <h3>${agentObj.company}</h3>\n
                <h3>${agentObj.phoneNumber}</h3>
            </div>
        </section>
    `
}


