# MEDIHELP – Medicine Management

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [Technologies Used](#technologies-used)
- [Notes](#notes)
- [License](#license)


- ## Project Overview
MEDIHELP is a web-based platform that helps users manage medicines and interact with a chatbot for medical assistance.  
It provides functionalities such as:  
- Viewing medicine lists  
- Adding new medicines  
- Searching for medicine details  
- Donating medicines
- Claming medicines
- Chatbot-based guidance for users

- This project is divided into **frontend** and **backend** for better maintainability.


### Features
- User-friendly responsive frontend
- Backend powered by MongoDB
- Chatbot interface for quick assistance
- Medicine management system with add/view/search features
- Secure handling of sensitive information using `.env`

  
### Folder Structure
MEDIHELP/

│
├─ frontend/ # HTML, CSS, JS, images

│ ├─ index.html

│ ├─ login.html

│ ├─ signup.html

│ ├─ styles.css

│ ├─ nav.js

│ └─ ... (other frontend files)
│
├─ medhelp-backend/ # Backend folder

│ ├─ server.js # Main backend server

│ ├─ package.json # Project dependencies

│ ├─ package-lock.json

│ └─ .env # Environment variables (not tracked)
│

├─ .gitignore # To ignore node_modules, .env, IDE files


└─ README.md

### Setup Instructions

### **1. Clone the repository**
git clone https://github.com/hemasri/your-repo.git
cd MEDIHELP

### **2. Setup Backend**
cd medhelp-backend
npm install       # Install dependencies

### **3. Configure Environment Variables**
Create a .env file inside medhelp-backend/ with the following variables:
PORT=3000
MONGO_URI=your_mongodb_connection_string
Important: Do not share .env publicly; it contains sensitive data.

### **4. Start Backend**
node server.js

### **5. Open Frontend**
Open the HTML files in frontend/ using a browser (or serve via Live Server).


### Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB
Tools: VSCode, Git, GitHub

### Notes
.env is required to run the backend; backend will not work without proper MongoDB URI

node_modules/ is ignored; run npm install to install packages locally

IDE folders like .vscode/ and .vs/ are ignored—they are not required for the project

Only track essential files: frontend files, server.js, package.json, package-lock.json
