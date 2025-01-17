# Personal Finance Tracker - README

This project is a simple Personal Finance Tracker responsive application that allows users to manage their income and expenses. It supports basic operations such as adding new entries, editing or deleting existing entries, and viewing the total income, total expenses, and net balance. Data is persisted using the browser's `localStorage` so that it remains available across sessions.

---

## Features:

1. **Income and Expense Tracking**: Users can add, edit, or delete income and expense entries.
2. **Dynamic Entry List**: A list of entries that updates as data is added, edited, or removed.
3. **Filter Options**: Users can filter the list by:
   - All entries
   - Only income
   - Only expenses
4. **Financial Summary**: Displays the total income, total expenses, and net balance at the top of the page.
5. **Reset Button**: Clears the input fields to allow the user to start fresh.
6. **Local Storage Support**: Entries persist across page reloads using `localStorage`.
7. **Responsive Design**: The layout is mobile-friendly and adjusts well to both desktop and mobile devices.

---

## Technologies Used:

- **HTML**: For creating the structure of the web application.
- **TailwindCSS**: For styling and responsive layout.
- **JavaScript**: For functionality such as adding, editing, deleting entries, and handling localStorage.

---

## Instructions:

### 1. **Adding New Entries**
- Fill out the "Description" and "Amount" fields.
- Select whether the entry is "Income" or "Expense" from the dropdown.
- Click the "Add Expenses" button to add it to the list.

### 2. **Editing Entries**
- Click on the "Edit" icon on the table.
- Modify the details and click "update expenses" to update the entry.

### 3. **Deleting Entries**
- Click on the "Delete" icon on the table to remove it from the list.

### 4. **Filtering Entries**
- Use the dropdown filter to choose between "All", "Income", or "Expense".
- The list will dynamically update based on the selected filter.

### 5. **Reset Fields**
- Click the "Reset" button to clear the input fields.

---
---------------------------------------------------
|                    Header                       |
|    +-----------------------------------------+   |
|    |      Personal Finance Tracker          |   |
|    +-----------------------------------------+   |
|    |   Net Balance: $0                    |   |
|    |   Total Expenses: $0                  |   |
|    |   Total Income:$0                    |   |
---------------------------------------------------
|                  Input Section                |
|    +-----------------------------------------+   |
|    |  Description: [_____________]           |   |
|    |  Amount:      [_____________]           |   |
|    |  Category:    [Income ▼]               |   |
|    |  [ Add Expenses ] [ Reset ]                |   |
---------------------------------------------------
|                  Update Section                |
|    +-----------------------------------------+   |
|    |  Description: [_____________]           |   |
|    |  Amount:      [_____________]           |   |
|    |  Category:    [Income ▼]               |   |
|    |         [ Update Expenses ]                 |   |
---------------------------------------------------
|                  Filter Section               |
|    +-----------------------------------------+   |
|    |  [All ▼]                               |   |
---------------------------------------------------
|                  Entries List                |
|    +-----------------------------------------+   |
|    | [Income]  Description - $Amount        |   |
|    |   [Edit_icon] [Delete_icon]                      |   |
|    | [Expense] Description - $Amount       |   |
|    |   [Edit_icon] [Delete_icon]                      |   |
|    | [Income]  Description - $Amount        |   |
|    |   [Edit_icon] [Delete_icon]                      |   |
|    +-----------------------------------------+   |
---------------------------------------------------



