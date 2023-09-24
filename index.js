const tableBody = document.querySelector('#crypto-table tbody');

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1')
    .then(response => response.json())
    .then(data => {
        data.slice(0, 5).forEach(currency => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${currency.id}</td>
                <td>${currency.symbol}</td>
                <td>${currency.name}</td>
            `;
            row.classList.add('blue-bg');
            tableBody.appendChild(row);
        });

        const usdtCurrency = data.find(currency => currency.symbol === 'usdt');
        if (usdtCurrency) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${usdtCurrency.id}</td>
                <td>${usdtCurrency.symbol}</td>
                <td>${usdtCurrency.name}</td>
            `;
            row.classList.add('green-bg');
            tableBody.appendChild(row);
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
