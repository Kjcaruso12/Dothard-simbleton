import { AgentList } from "./agentsList.js";
import { BusinessList } from "./BusinessList.js";
import { purchasingAgents } from "./database.js";
import { manufacturingBusinesses, NYBusinesses } from "./filteredBusiness.js";

console.log(purchasingAgents())

BusinessList()
NYBusinesses()
manufacturingBusinesses()
AgentList()

