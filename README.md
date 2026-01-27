<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF6B6B,100:FFA07A&height=200&section=header&text=Eatcha&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=Customer%20Feedback%20Collection%20System&descSize=20&descAlignY=55" width="100%"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Client-Private%20Cafe%20Imphal-FF6B6B?style=for-the-badge" alt="Client"/>
  <img src="https://img.shields.io/badge/Type-Serverless-FFA07A?style=for-the-badge" alt="Serverless"/>
  <img src="https://img.shields.io/badge/Backend-GitHub%20Issues-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Issues"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/GitHub%20API-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub API"/>
</p>

---

## About

**Eatcha** is a lightweight, serverless customer feedback collection system built for a private cafe in Imphal. The system enables the cafe to collect customer information and feedback without requiring a traditional backend server.

---

## How It Works
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│    Customer     │───▶│   Web Form      │───▶│  GitHub Issues  │
│  Fills Form     │    │  (Frontend)     │    │   (Storage)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
│
▼
┌─────────────────────────┐
│  Cafe Owner Reviews     │
│  Issues Dashboard       │
└─────────────────────────┘
1. **Customer visits** the feedback page
2. **Fills out** their name, email, and birthdate
3. **Form submits** data to GitHub API
4. **GitHub Issue** is created with customer information
5. **Cafe owner** reviews submissions via GitHub Issues dashboard

---

## Features

| Feature | Description |
|---------|-------------|
| **Serverless Architecture** | No backend server required |
| **Zero Hosting Costs** | Uses GitHub Pages + GitHub API |
| **Simple Interface** | Clean, minimal form design |
| **Instant Notifications** | GitHub notifies on new submissions |
| **Data Organization** | All submissions organized as Issues |

---

## Tech Stack

- **Frontend:** HTML5, Vanilla JavaScript
- **Backend:** GitHub Issues API (serverless)
- **Hosting:** GitHub Pages
- **Authentication:** GitHub Personal Access Token

---

## Data Collected

| Field | Purpose |
|-------|---------|
| **Name** | Customer identification |
| **Email** | Contact and marketing |
| **Birthdate** | Birthday promotions and offers |

---

## Project Structure
eatcha/
├── index.html      # Main feedback form
├── index.min.js    # Form handler and API integration
├── github-api.js   # Custom Octokit implementation
└── README.md       # Documentation
---

## Use Case

This solution is perfect for small businesses that need:
- Simple customer data collection
- No server maintenance overhead
- Cost-effective feedback system
- Easy data management through GitHub

---

## Privacy Note

All customer data is stored securely in a private GitHub repository. The cafe owner has full control over the data and can manage, export, or delete submissions as needed.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF6B6B,100:FFA07A&height=100&section=footer" width="100%"/>
</p>

<p align="center">
  Built by <a href="https://github.com/ProxyAyush"><strong>Dr. Ayush Yadav</strong></a> for Eatcha Cafe, Imphal
</p>