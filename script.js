// Initial Setup
const transactionForm = document.getElementById('transaction-form');
const typeInput = document.getElementById('type');
const amountInput = document.getElementById('amount');
const descriptionInput = document.getElementById('description');
const transactionTable = document.getElementById('transaction-table');
const netBalanceDisplay = document.getElementById('net-balance');
const filterSelect = document.getElementById('filter');
const d = new Date();

// Retrieve transactions from localStorage or initialize empty array
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// Function to save transactions to localStorage
function saveTransactions() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Function to render the table based on selected filter
function renderTable(filter = 'all') {
    transactionTable.innerHTML = '';  // Clear current table content
    let filteredTransactions = transactions;

    // Apply filter
    if (filter === 'income') {
        filteredTransactions = transactions.filter(t => t.type === 'income');
    } else if (filter === 'expense') {
        filteredTransactions = transactions.filter(t => t.type === 'expense');
    }

    // Create table rows dynamically
    filteredTransactions.forEach((transaction, index) => {
        const row = document.createElement('tr');
        row.classList.add('border-b');
        row.innerHTML = `
          <td class="px-4 py-2 text-center">${transaction.type}</td>
          <td class="px-4 py-2 text-center">${transaction.amount}</td>
          <td class="px-4 py-2 text-center">${transaction.description}</td>
           <td class="px-4 py-2 text-center">${d.getDay()}/${d.getMonth()}/${d.getFullYear()}</td>
          <td class="px-4 py-2">
            <button class="text-blue-500 hover:text-blue-700 "><i class="fa-regular fa-pen-to-square edit-btn"  data-index="${index}"></i></button>
            <button class="text-red-500 hover:text-red-700" ><i class="fa-solid fa-trash delete-btn" data-index="${index}"></i></button>
          </td>
        `;
        transactionTable.appendChild(row);
    });

    // Update the net balance
    updateNetBalance();
}

// Function to update the net balance
function updateNetBalance() {
    const income = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + parseFloat(t.amount), 0);
    const expense = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + parseFloat(t.amount), 0);
    const balance = income - expense;
    const totalincome= document.getElementById('total-income');
    totalincome.textContent=income
    totalincome.style.color="green"
    const totalexpenses=document.getElementById('total-expenses')
    totalexpenses.textContent=expense
    totalexpenses.style.color="red"
    netBalanceDisplay.textContent = balance.toFixed(2);
}

// Handle form submission (Add new transaction)
transactionForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const type = typeInput.value;
    const amount = parseFloat(amountInput.value);
    const description = descriptionInput.value.trim() || 'No description';

    if (amount <= 0) {
        alert('Please enter a valid amount');
        return;
    } 

    // Add the new transaction
    transactions.push({ type, amount, description });
    saveTransactions();
  
    renderTable(filterSelect.value);
    // Clear the form
    amountInput.value = '';
    descriptionInput.value = '';
    document.getElementById('update').textContent="Add Expenses"
    document.getElementById("transaction-form").reset();
    document.getElementById('id').value = '';
});

// Handle filter change
filterSelect.addEventListener('change', function () {
    renderTable(filterSelect.value);
});

// Handle edit and delete actions
transactionTable.addEventListener('click', function (e) {
    const index = e.target.getAttribute('data-index');

    if (e.target.classList.contains('delete-btn')) {
        // Delete transaction
        transactions.splice(index, 1);
        saveTransactions();
        renderTable(filterSelect.value);
    } else if (e.target.classList.contains('edit-btn')) {
        // Edit transaction (fill form with current data)
        const transaction = transactions[index];
        amountInput.value = transaction.amount;
        descriptionInput.value = transaction.description;
        typeInput.value = transaction.type;
        document.getElementById('update').textContent="update"  
        // Remove the edited transaction (we will re-add it after form submission)
        transactions.splice(index, 1);
        saveTransactions();
        renderTable(filterSelect.value);
    }

});
//reset
// Initial table render
renderTable();