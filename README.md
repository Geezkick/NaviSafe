# NaviSafe - Intelligent Road Safety Platform

NaviSafe is a comprehensive web application designed to enhance road safety through real-time hazard reporting, community engagement, and intelligent traffic management. This platform connects all road users and infrastructure to create a safer transportation ecosystem.

##  Features

- **Real-time Hazard Reporting**: Users can report road hazards with location data
- **Interactive Map**: Visual representation of reported hazards with severity indicators
- **Community Feed**: Social platform for road users to share safety information
- **Pre-Trip Safety Check**: Mental readiness assessment before driving/cycling
- **Weather Integration**: Real-time weather alerts and hazardous condition warnings
- **User Authentication**: Secure login and registration system
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠 Technology Stack

### Frontend
- **React.js** - Component-based UI library
- **React Router** - Navigation and routing
- **React Map GL** - Interactive map components
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing

### APIs & Services
- **Mapbox API** - Map rendering and geolocation services
- **OpenWeatherMap API** - Weather data and alerts
- **Geolocation API** - Browser-based location services

### Development Tools
- **Nodemon** - Automatic server restart during development
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

##  Prerequisites

Before running this application, ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

##  Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd NaviSafe
2. Backend Setup
bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Set up environment variables
# Update the .env file with your actual values
cp .env.example .env
# Edit .env with your database and API keys

# Start the development server
npm run dev
3. Frontend Setup
bash
# Navigate to client directory (in a new terminal)
cd client

# Install dependencies
npm install

# Set up environment variables
# Update the .env.local file with your actual values
cp .env.local.example .env.local
# Edit .env.local with your Mapbox token

# Start the development server
npm start
4. Database Setup
Ensure MongoDB is running on your system:

bash
# If using local MongoDB
mongod

# Or use MongoDB Atlas cloud service
# Update the MONGODB_URI in your .env file
Environment Variables
Server (.env)
text
PORT=5000
MONGODB_URI=mongodb://localhost:27017/navisafe
JWT_SECRET=your_super_secret_jwt_key_here
OPENWEATHER_API_KEY=your_openweather_api_key_here
Client (.env.local)
text
REACT_APP_MAPBOX_TOKEN=your_mapbox_token_here
REACT_APP_API_BASE_URL=http://localhost:5000
Project Structure
text
NaviSafe/
├── client/                 # React frontend application
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── Auth/      # Authentication components
│   │   │   ├── Map/       # Map-related components
│   │   │   ├── HazardReport/ # Hazard reporting components
│   │   │   ├── PreTripCheck/ # Pre-trip assessment
│   │   │   └── CommunityFeed/ # Community features
│   │   ├── App.js         # Main application component
│   │   └── index.js       # Application entry point
│   ├── package.json       # Frontend dependencies
│   └── tailwind.config.js # Tailwind CSS configuration
├── server/                # Node.js backend application
│   ├── models/           # MongoDB data models
│   ├── routes/           # API route handlers
│   ├── middleware/       # Custom middleware
│   ├── server.js         # Server entry point
│   └── package.json      # Backend dependencies
└── README.md             # Project documentation
Available Scripts
Frontend (client directory)
npm start - Runs the app in development mode

npm build - Builds the app for production

npm test - Launches the test runner

npm eject - Ejects from Create React App (one-way operation)

Backend (server directory)
npm start - Runs the server in production mode

npm run dev - Runs the server with nodemon for development

API Endpoints
Authentication
POST /api/auth/register - User registration

POST /api/auth/login - User login

Hazards
GET /api/hazards - Get all reported hazards

POST /api/hazards - Report a new hazard

PATCH /api/hazards/:id/confirm - Confirm a hazard report

Weather
GET /api/weather - Get weather data (to be implemented)

UI/UX Features
Modern, responsive design with Tailwind CSS

Smooth animations and transitions

Glassmorphism effects for premium feel

Gradient color scheme with primary and secondary colors

Interactive map with custom markers

Mobile-friendly navigation

Future Enhancements
Real-time notifications using WebSockets

Integration with IoT devices and sensors

Advanced analytics and reporting dashboard

Mobile app development with React Native

Payment integration for fines and services

Machine learning for accident prediction

Integration with government traffic systems

Contributing
Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Mapbox for mapping services

OpenWeatherMap for weather data

Tailwind CSS for styling framework

React community for excellent documentation and resources

Support
For support, email brian@geez-kick.com or join our Slack channel.

Project Status
This project is currently in development. Core features are implemented with more enhancements planned.
