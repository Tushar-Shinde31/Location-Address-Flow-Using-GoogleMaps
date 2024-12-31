# Location/Address Flow Assignment

## Overview
This project implements a Location/Address flow for users to select and save their delivery location. It utilizes Google Maps API for location search and geolocation and showcases a React-based frontend with a Node.js backend. The project also offers bonus features for enhanced user experience.

![image](C:\Users\HP\Pictures\Screenshots)

## Features
### Core Features
1. **Location Permission Request**
   - Popup modal informing users when location permission is off.
   - Buttons for enabling location or searching manually.
2. **Geolocation & Pin Selection**
   - Display selected addresses on a map.
   - Adjust the map pin to fine-tune the location.
   - "Locate Me" button for automatic geolocation.
3. **Delivery Address Form**
   - Form to enter specific address details (e.g., House/Flat No., Area).
   - Save addresses under categories: Home, Office, Friends & Family.
4. **Address Management**
   - List saved addresses.
   - Select, update, or delete addresses.
   - Search for recent or new locations.

### Bonus Features
- Save frequently used locations as favorites.
- Address validation for accuracy.
- Map preview for selected addresses.

## Technologies Used
- **Frontend**: React, Context API/Redux for state management.
- **Backend**: Node.js.
- **Map Integration**: Google Maps API.
- **Optional**: Token-based authentication for user login.

## Setup Instructions
### Prerequisites
- Node.js installed on your system.
- Google Cloud account with Maps API enabled.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/location-address-flow.git
   cd location-address-flow

2. Install Dependencies:
   ```bash
   npm install
   cd client && npm install

3. Set Up ENV key:
   ```bash
   GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   BACKEND_URL=http://localhost:5000

4. Start the backend server:
   ```bash
   npm start

5. Start the Frontend
   ```bash
   npm start

Folder Structure
```bash
location-address-flow/
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── app.js
│   └── package.json
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
├── .env
├── README.md
