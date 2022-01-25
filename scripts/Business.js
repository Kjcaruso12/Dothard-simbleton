export const Company = (businessObj) => {
    return `
        <section class="company_info">
            <h2 class="company_name">${businessObj.companyName}</h2>
            <div class="company_address">
                <p>${businessObj.addressFullStreet}
                <br>
                ${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</p><hr>
            </div>
        </section>
    `
}

export const Business = (businessObj) => {
    return `
        <section class="company_info">
            <h2 class="company_name">${businessObj.companyName}</h2>
            <div class="company_address">
                <p>${businessObj.addressFullStreet}
                <br>
                ${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</p>
            </div>
        </section>
    `
}


    
