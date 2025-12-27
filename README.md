### 📦 Inventory Management System

Inventory Management System is a full-stack web application designed to help
businesses efficiently track, manage, and analyze their inventory in real time.

The system provides secure authentication, product management, stock tracking,
and reporting — all through a clean, professional dashboard interface.

------------------------------------------------------------

### 🌟 FEATURES

🔐 User Authentication (Register & Login using JWT)  
📦 Add, update, and delete inventory products  
📊 Real-time stock level monitoring  
⚠️ Low stock & out-of-stock detection  
🔄 Update product quantity instantly  
🗑️ Delete products securely  
📈 Dashboard with key inventory metrics  
📋 Dedicated products management page  
📄 Reports page with inventory insights  
⬇️ Export inventory data as CSV  
🚪 Secure logout functionality  

------------------------------------------------------------

### 📊 DASHBOARD METRICS

- Total Products (SKUs)
- Low Stock Items
- Out of Stock Items
- Dead Stock (Overstocked items)
- Healthy Stock Overview

------------------------------------------------------------

### 🛠️ TECH STACK

Frontend:
- Next.js
- React
- JavaScript
- Inline CSS (custom styled components)

Backend:
- Node.js
- Express.js
- JWT Authentication
- bcryptjs (password hashing)

Database:
- MySQL (Aiven Cloud Database)

Deployment:
- Backend hosted on Render
- Database hosted on Aiven
- Environment variables managed securely

------------------------------------------------------------

### 🔐 AUTHENTICATION & SECURITY

- JWT-based authentication
- Protected backend routes
- Authorization header required for inventory actions
- Environment variables (.env) excluded from version control
- GitHub secret scanning handled securely

------------------------------------------------------------

### 📁 PROJECT STRUCTURE

inventory-system/
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── db.js
│   ├── index.js
│
├── frontend/
│   ├── pages/
│   ├── components/
│   ├── styles/
│
├── .gitignore
├── package.json
└── README.md

------------------------------------------------------------

### 🎯 PURPOSE

This project was built to:
- Simulate a real-world inventory management workflow
- Practice full-stack development with authentication
- Build a strong resume-ready project

------------------------------------------------------------

### 🧠 ASSUMPTIONS & DESIGN DECISIONS

📊 Inventory Status Logic & Assumptions

To provide clear and actionable inventory insights, this system categorizes products into **Out of Stock**, **Low Stock**, **Healthy Stock**, and **Dead Stock** based on practical assumptions.

These rules are **intentionally simple, transparent, and configurable**, making the system easy to understand and extend.

🔴 Out of Stock
Condition: 
quantity === 0
🟠 Low Stock
Condition:
quantity > 0 AND quantity < reorder_level
🟢 Healthy Stock
Condition:  
quantity ≥ reorder_level AND quantity ≤ (reorder_level × 3)

🟣 Dead Stock
Condition: 
quantity > (reorder_level × 3)

------------------------------------------------------------


### ⚙️ Design Assumptions
- `reorder_level` is defined per product based on expected demand.
- The multiplier (`× 3`) is an assumed heuristic, not a hard business rule.
- These thresholds can be easily adjusted in the frontend or backend logic.
- The goal is to provide early signals, not financial predictions.

------------------------------------------------------------

### 🌱 FUTURE ENHANCEMENTS

- Role-based access (Admin / Staff)
- Multiple warehouses support
- Product categories & tags
- Search & advanced filters
- Pagination for large inventories
- Graph-based analytics
- Email alerts for low stock
- Dockerized deployment

--------------------------------------------------------
### 🎥DEMO VIDEO

https://github.com/user-attachments/assets/f1ebbd2a-e1bd-4527-b5a4-b1ade714fced

--------------------------------------------------------

### 👩‍💻 AUTHOR

Manusri D

------------------------------------------------------------
