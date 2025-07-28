# Triangle Classifier Web Application

## Overview

This is a simple web application that identifies triangle types based on the lengths of their three sides. The application features a Node.js/Express backend with a clean, responsive frontend that allows users to input triangle side lengths and receive classification results.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a classic client-server architecture with a clear separation between frontend and backend components:

- **Frontend**: Static HTML/CSS/JavaScript served by Express
- **Backend**: Node.js with Express.js handling API requests
- **Deployment**: Simple Node.js server configuration

## Key Components

### Backend Components

1. **Express Server** (`server.js`)
   - Main application entry point
   - Handles HTTP requests and serves static files
   - Contains triangle classification logic
   - Validates input data and triangle validity

2. **Triangle Classification Logic**
   - Validates numeric inputs
   - Checks for positive values
   - Applies triangle inequality theorem
   - Classifies triangles as: Equilateral (Sama Sisi), Isosceles (Sama Kaki), or Scalene (Sembarang)

### Frontend Components

1. **HTML Structure** (`public/index.html`)
   - Bootstrap-based responsive design
   - Form for inputting three triangle sides
   - Result display areas for success and error states
   - Indonesian language interface

2. **Styling** (`public/style.css`)
   - Custom CSS with gradient background
   - Card-based layout with hover effects
   - Responsive design considerations
   - Modern UI with smooth transitions

3. **Client-side Logic** (`public/script.js`)
   - Form validation and submission handling
   - Real-time input validation
   - API communication with backend
   - Dynamic result display management

## Data Flow

1. **User Input**: User enters three triangle side lengths in the web form
2. **Client Validation**: JavaScript validates inputs are positive numbers
3. **API Request**: Form submission sends POST request to `/classify` endpoint
4. **Server Validation**: Backend validates inputs and triangle validity
5. **Classification**: Server determines triangle type using geometric rules
6. **Response**: Server returns classification result or error message
7. **Display**: Frontend updates UI with results or error information

## External Dependencies

### Backend Dependencies
- **Express.js (^5.1.0)**: Web framework for Node.js
  - Chosen for its simplicity and widespread adoption
  - Handles routing, middleware, and static file serving

### Frontend Dependencies
- **Bootstrap 5.3.2**: CSS framework for responsive design
- **Font Awesome 6.0.0**: Icon library for UI enhancement
- **CDN Delivery**: External resources loaded via CDN for faster loading

## Deployment Strategy

The application uses a simple deployment strategy suitable for development and small-scale production:

1. **Server Configuration**
   - Runs on port 8000 (configurable)
   - Serves static files from `public/` directory
   - Single-process Node.js application

2. **File Structure**
   - Root-level server file for easy execution
   - Public directory for client-side assets
   - Package.json with start script for deployment

3. **Startup Process**
   - `npm start` runs the server
   - Server listens on specified port
   - Static files served automatically

### Pros and Cons of Current Architecture

**Pros:**
- Simple and easy to understand
- No database required - stateless application
- Fast development and deployment
- Lightweight resource usage

**Cons:**
- No data persistence
- Single-process application (no scaling)
- Limited error handling and logging
- No user management or sessions

The architecture is well-suited for its purpose as a simple triangle classification tool, prioritizing simplicity and ease of use over complex features.