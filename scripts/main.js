import { BusinessList } from "./BusinessList.js";
import { getBusinesses } from "./database.js";
import { NewYorkBusinesses } from "./NewYorkBusinesses.js";
import { ManufacturingBusinesses } from "./ManufacturingBusinesses.js";
import { AgentList } from "./AgentList.js";
import { Search } from "./Search.js"


const businessArray = getBusinesses()


const contentTarget = document.querySelector("#content")

const renderHTML = () => {
  contentTarget.innerHTML = `
  <input type="text" placeholder="Search here..." id="companySearch" />

  <!-- you will see an undefined until a key press event takes place in the search bar because it doesn't have anything to display -->
  <article class="foundBusinesses">
  ${Search(businessArray)}
  </article>

  <article class="businesses">
      <h2>All Businesses</h2>
      <hr>
      ${BusinessList(businessArray)}
  </article>

  <article class="businesses--manufacturing">
      <h2>Manufacturing Businesses</h2>
      <hr>
      ${ManufacturingBusinesses(businessArray)}
  </article>

  <article class="businesses--newYork">
      <h2>New York Businesses</h2>
      <hr>
      ${NewYorkBusinesses(businessArray)}
  </article>

  <article class="agents">
      <h2>Purchasing Agents</h2>
      <hr>
      ${AgentList(businessArray)}
  </article>
  `
}

renderHTML()