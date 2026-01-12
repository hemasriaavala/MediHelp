🩺 **MEDIHELP – Medicine Management**  
Helping you manage medicines and get guidance quickly! 💊🤖
![image alt](https://github.com/hemasriaavala/MediHelp/blob/890e997afeb5836db86f4f9c34a9019a3e743d3e/Home.png)


📑 **Table of Contents**
- [About the Project](#about-the-project)  
- [Features](#features)  
- [Demo](#demo)  
- [Technologies Used](#technologies-used)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Screenshots](#screenshots)  
- [Future Improvements](#future-improvements)  
- [License](#license)  

## 📖 About the Project
**MEDIHELP** is a web-based platform designed to help users manage medicines efficiently and get guidance through a simple chatbot.  

Users can:  
- View and search medicine lists <br>
- Donate medicines  <br>
- Claim medicines <br>
- Interact with a chatbot for basic medical assistance  <br>


## ✨ Features
💊 **Medicine List:** View, search, and manage medicines   
📝 **Medicine Details:** Check details of any medicine  
🤝 **Donate Medicines:** Contribute medicines to users in need<br>
🎁 **Claim Medicines:** Claim medicines from available donations  
🤖 **Chatbot Assistance:** For basic information  
🔒 **Secure Backend:** Sensitive info stored in `.env`  
🗄️ **MongoDB Storage:** Data persists across sessions  


## 🎥 Demo
[demo-video](https://github.com/user-attachments/assets/e2e41d50-ee1d-448a-97ef-979fbec4c91b)

📌**Note:** The demo video is ~1 minute long. For faster viewing and better understanding, you may adjust the playback speed (e.g., 1.25x / 1.5x).

## 🛠️ Technologies Used<br>
- **Frontend:** HTML, CSS, JavaScript <br> 
- **Backend:** python with flask  <br>
- **Database:** MongoDB  <br>
- **Tools:** VSCode, Git, GitHub  <br>

## ⚙️ Installation
To run this project locally:<br>
***1. Clone the repository***<br>
git clone (https://github.com/hemasriaavala/MediHelp.git)<br>
cd MEDIHELP<br>
***2. Setup Backend***<br>
cd medhelp-backend<br>
npm install       # Install dependencies<br>
***3. Configure Environment Variables***<br>
Create a .env file inside medhelp-backend/ with the following variables:<br>
PORT=3000<br>
MONGO_URI=your_mongodb_connection_string<br>
Important: Do not share .env publicly; it contains sensitive data.<br>
***4. Start Backend***<br>
node server.js<br>
***5. Open Frontend***<br>
Open the HTML files in frontend/ using a browser (or serve via Live Server).<br>


## 🚀 Usage<br>
- Open the frontend files in your browser (or use Live Server in VSCode). 
- View full details of any medicine. 📝  
- Donate medicines to others in need. 🤝  
- Claim medicines from available donations. 🎁    
- Interact with the chatbot for guidance. 🤖

## 📝 Notes<br>
- .env is required to run the backend; backend will not work without proper MongoDB URI<br>
- node_modules/ is ignored; run npm install to install packages locally<br>
- IDE folders like .vscode/ and .vs/ are ignored—they are not required for the project<br>
- Only track essential files: frontend files, server.js, package.json, package-lock.json

## 📸 Screenshots <br>
**Main Page** <br>
![image alt](https://github.com/hemasriaavala/MediHelp/blob/890e997afeb5836db86f4f9c34a9019a3e743d3e/Home.png)

**Signup** <br>
![image alt](Signup.png)

**Login** <br>
![image alt](Login.png)

**Modules-page**<br>
![image alt](Modules-page.png)

**Donate-Medicine**<br>
![image alt](Donate-Medicine.png)

**Claim-Medicine**<br>
![image alt](Claim-Medicine.png)

**Mini chatbot**<br>
![image alt](Chatbot.png)

## 🔮 Future Improvements<br>
Enhance chatbot with AI-based guidance<br>
Add admin panel to manage medicines more efficiently

## 📝 MIT License<br>
Copyright (c) 2026 Aavala Hema Sri<br>
Permission is hereby granted, free of charge, to any person obtaining a copy<br>
...
