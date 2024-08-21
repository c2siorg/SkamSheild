<p align="center">
  <img src="https://github.com/user-attachments/assets/7fef9980-3560-4714-946d-156ae24610e3" alt="Skam Shield Logo" width="100" height="100" style="border-radius: 15px;">
</p>

<h1 align="center">Skam Shield</h1>

## Introduction

*Skam Shield* is a comprehensive project designed to protect users from online scams and malicious content. This project includes a suite of tools and applications: a mobile client, a web admin client, a browser extension, and a honeypot deployment system. Together, these components work to identify, report, and analyze suspicious content, providing a robust defense against online threats.

## Project Components

---

### 1. Skam Shield Mobile Client

The **Skam Shield Mobile Client** is a React Native application that offers real-time assistance and security features to end users. It includes functionalities for user authentication, malicious content detection, and interaction with Firebase services.

**Key Features**:
- **User Authentication**: Sign in and sign up with email or Google.
- **Malicious Content Detection**: Report and view suspicious content.
- **Local Firebase Emulators**: Connect to local emulators for development.

```bash
# Clone the repository
git clone https://github.com/c2siorg/SkamSheild.git

# Install dependencies
cd ss-mobile-client
npm install

# Run the app using Expo CLI
npx expo start
```

<p align="center">
  <img src="https://github.com/user-attachments/assets/e3a7b77b-ff7a-42b2-9ff8-3d83c479c4ba" alt="Mobile Client DEMO" width="300">
</p>

---

### 2. Skam Shield Web Client

The **Skam Shield Web Client** is a React.js web application designed for administrators. It provides a user interface for reviewing and managing reports of suspicious content submitted through the mobile client.

**Key Features**:
- **Admin Access**: Restricted access for admins only.
- **Review Suspicious Content**: View and manage user-submitted reports.
- **Content Status Management**: Update the status of reported content.
- **Search and Filter**: Search and filter reported content for efficient review.

```bash
# Clone the repository
git clone https://github.com/c2siorg/SkamSheild.git

# Install dependencies
cd ss-web-client
npm install

# Start the development server
npm start
```

<p align="center">
  <img src="https://github.com/user-attachments/assets/2ec53b47-6524-476b-b24e-d65b00b13275" alt="Web Client DEMO" width="600">
</p>

---

### 3. Skam Shield Scam URL Checker Browser Extension

The **Scam URL Checker** is a browser extension that helps users identify potentially dangerous URLs in Google search results. It automatically checks each link against a Firestore database and highlights links flagged as suspicious or malicious.

**Key Features**:
- **Automatic Firebase Initialization**: Initializes Firebase when the extension is enabled.
- **Periodic URL Checking**: Checks search result links every 5 seconds for potential scams.
- **Visual Alerts**: Highlights flagged URLs with a border and tooltip to warn users.

```bash
# Clone the repository
git clone https://github.com/c2siorg/SkamSheild.git

# Navigate to ss-browser-ext
cd ss-browser-ext

# Load the extension in Chrome
# Navigate to chrome://extensions/
# Enable "Developer mode"
# Click "Load unpacked" and select the extension directory
```

<p align="center">
  <img src="https://github.com/user-attachments/assets/c26ce6aa-0574-4549-b7f9-4901d45ac08c" alt="Browser Extension" width="400">
</p>

---

### 4. Skam Shield Honeypot Project

The **Skam Shield Honeypot** project deploys and manages honeypots across multiple cloud vendors, collects data on malicious activities, and analyzes the effectiveness of different honeypot applications.

**Key Features**:
- **Cloud Infrastructure Deployment**: Use Terraform to deploy cloud resources.
- **Honeypot Deployment**: Run honeypot applications in Docker containers.
- **Data Collection**: Store collected data for analysis.
- **Monitoring**: Monitor honeypot activity in real-time.

```bash
# Clone the repository
git clone https://github.com/c2siorg/SkamSheild.git

# Navigate to the Terraform directory and deploy the infrastructure
cd ss-honeypot-project
cd terraform
./deploy.sh

# Build and run the honeypot Docker container
cd honeypots/honeypot1
docker build -t honeypot1 .
docker run -d -p 8080:8080 honeypot1
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests across any of the components.

## Acknowledgments

Special thanks to the maintainers of various honeypot resources and the cybersecurity community for their valuable tools and insights.
