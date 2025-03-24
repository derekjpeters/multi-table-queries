# 🧠 Multi-Table Queries with SQLite and JavaScript

This project demonstrates how to use **multi-table queries** in a relational database using **SQLite** and **Node.js**. You'll learn how to structure databases with foreign keys and run `JOIN` queries to combine data across multiple tables.

## 🚀 What You’ll Learn

- What foreign keys are and why they matter
- How to write `JOIN` queries in SQL
- How to execute those queries using JavaScript
- How to connect to and seed a SQLite database in-memory

## 🗂 Project Structure

multi-table-queries/ 
├── db/ │ 
├── db.js # Sets up SQLite DB, runs schema and seed │ 
├── schema.sql # SQL to create tables 
│ └── seed.sql # SQL to insert sample data 
├── queries/ 
│ └── joins.js # JS file that runs a JOIN query 
├── package.json 
├── README.md


## 🛠 Installation & Setup

1. Clone this repo (instructions below)
2. Install dependencies:
   ```bash
   npm install

