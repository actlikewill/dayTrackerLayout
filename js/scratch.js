/*Show Details*/
function showDetails(customer, id) {
    monitor.addEventListener('click', (e) => {
        if (e.target.classList.contains('customer-name') && e.target.getAttribute('data-id') === id) {
            console.log(customer);
            let html = `
                    <div class='customer-details>
                    <h2>${customer.name}</h2>
                    <h3>${customer.street}, ${customer.city}</h3>
                    <h4>${customer.postalcode}</h4>
                    </div>
                    `;

            customer.vehicals.map(vehical => {
                var html2 = `
                        <div>
                        <p>VIN: ${vehical.vin}</p>
                        <p>Reg.nr: ${vehical.reg_nr}</p>
                        </div>
                        `;
            });
            let showDetails = document.querySelector('#showDetail');
            showDetails.innerHTML = html;
        }
    })
}

db.collection('customers').onSnapshot(snapshot => {
    snapshot.docChanges().map(change => {
        const doc = change.doc;
        showDetails(doc.data(), doc.id);
    })
})