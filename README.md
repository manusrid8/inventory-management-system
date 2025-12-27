# 📦 Inventory Management System

Inventory Management System is a full-stack web application designed to help
businesses efficiently track, manage, and analyze their inventory in real time.

The system provides secure authentication, product management, stock tracking,
and reporting — all through a clean, professional dashboard interface.

------------------------------------------------------------

🌟 FEATURES

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

📊 DASHBOARD METRICS

- Total Products (SKUs)
- Low Stock Items
- Out of Stock Items
- Dead Stock (Overstocked items)
- Healthy Stock Overview

------------------------------------------------------------

🛠️ TECH STACK

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

🔐 AUTHENTICATION & SECURITY

- JWT-based authentication
- Protected backend routes
- Authorization header required for inventory actions
- Environment variables (.env) excluded from version control
- GitHub secret scanning handled securely

------------------------------------------------------------

📁 PROJECT STRUCTURE

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

🎯 PURPOSE

This project was built to:
- Simulate a real-world inventory management workflow
- Practice full-stack development with authentication
- Learn cloud database integration (Aiven)
- Gain deployment experience using Render
- Build a strong resume-ready project

------------------------------------------------------------

🧠 ASSUMPTIONS & DESIGN DECISIONS

- Single-user login session per browser
- Inventory belongs to authenticated users only
- Name field in user table is optional (not used in dashboard logic)
- Stock movement logic based on reorder levels
- Simple UI prioritized over heavy UI libraries
- Backend-first deployment approach for reliability

------------------------------------------------------------

🌱 FUTURE ENHANCEMENTS

- Role-based access (Admin / Staff)
- Multiple warehouses support
- Product categories & tags
- Search & advanced filters
- Pagination for large inventories
- Graph-based analytics
- Email alerts for low stock
- Dockerized deployment

--------------------------------------------------------
🎥DEMO VIDEO

https://github.com/user-attachments/assets/f1ebbd2a-e1bd-4527-b5a4-b1ade714fced

--------------------------------------------------------

👩‍💻 AUTHOR
Manusri D

------------------------------------------------------------
