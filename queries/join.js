const db = require('../db/db');

db.all(`
    SELECT customers.name, orders.total
    FROM customers
    JOIN orders ON customers.id = orders.customer_id
`, [], (err, rows) => {
    if (err) {
        console.error('Error Running Query', err);
        return;
    }
    console.log('Customer Orders:');
    rows.forEach(row => {
        console.log(`${row.name} - $${row.total}`);
    });
});