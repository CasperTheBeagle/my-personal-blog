# ASSIGNMENT_10

## API Server Development and Deployment

### 1. API Endpoint Requirements

| Requirement | HTTP Status Code (Success) | Response (Success) | HTTP Status Code (Fail) | Response (Fail) | HTTP Method | Endpoint | Query Parameter | Body |
|-------------|----------------------------|---------------------|--------------------------|-----------------|-------------|----------|-----------------|------|
| User สามารถดูข้อมูลโปรไฟล์ของ John | 200 | JSON Response | 404, 500 | Error Message | GET | /profiles | - | - |

### 2. Response Data Structure

กำหนดให้ข้อมูลโปรไฟล์ของ John มีลักษณะดังนี้:

```json
{
  "data": {
      "name": "john",
      "age": 20
  }
}
```

### Error Response Structure

**404 Not Found**
```json
{
  "error": "Profile not found",
  "message": "Unable to locate the requested profile"
}
```

**500 Internal Server Error**
```json
{
  "error": "Internal server error",
  "message": "An unexpected error occurred"
}
```

### 3. Deployment Requirements

จากนั้นให้ Deploy ตัว Server นี้ที่ Vercel ดูวิธีการ Deploy ได้ที่ [ลิงค์นี้]

### 4. GitHub Submission

เมื่อทำเสร็จแล้วให้อัปโหลดโค้ดขึ้นมาที่ Github ของตัวเอง แล้วส่งลิ้งก์มาด้านล่าง

## Implementation Guidelines

### Recommended Tech Stack
- **Node.js** with Express.js for the API server
- **Vercel** for deployment
- **GitHub** for code repository

### Project Structure Suggestion
```
api-server/
├── src/
│   ├── app.js
│   └── routes/
│       └── profiles.js
├── package.json
├── vercel.json
└── README.md
```

### Sample Code Structure

**src/app.js**
```javascript
const express = require('express');
const profilesRouter = require('./routes/profiles');

const app = express();
app.use(express.json());

app.use('/profiles', profilesRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal server error',
    message: 'An unexpected error occurred'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not found',
    message: 'The requested resource was not found'
  });
});

module.exports = app;
```

**src/routes/profiles.js**
```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  try {
    const profileData = {
      name: "john",
      age: 20
    };
    
    res.status(200).json({
      data: profileData
    });
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to retrieve profile data'
    });
  }
});

module.exports = router;
```

**api/index.js** (for Vercel)
```javascript
const app = require('../src/app');

module.exports = app;
```

**package.json**
```json
{
  "name": "profile-api-server",
  "version": "1.0.0",
  "description": "Simple profile API server",
  "main": "src/app.js",
  "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

**vercel.json**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "api/**/*.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    }
  ]
}
```

## Automated API Testing

### Test Script (`test-api.sh`)
```bash
#!/bin/bash

API_BASE_URL="http://localhost:3000"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "${YELLOW}Starting API Tests...${NC}"

# Test 1: GET /profiles - Success
echo "\n${YELLOW}Test 1: GET /profiles (Success Case)${NC}"
response=$(curl -s -w "\n%{http_code}" "$API_BASE_URL/profiles")
http_code=$(echo "$response" | tail -n1)
body=$(echo "$response" | head -n -1)

if [ "$http_code" = "200" ]; then
    echo "${GREEN}✅ PASS - Status: $http_code${NC}"
    echo "Response: $body"
else
    echo "${RED}❌ FAIL - Status: $http_code${NC}"
fi

# Test 2: GET /invalid - 404 Error
echo "\n${YELLOW}Test 2: GET /invalid (404 Case)${NC}"
response=$(curl -s -w "\n%{http_code}" "$API_BASE_URL/invalid")
http_code=$(echo "$response" | tail -n1)
body=$(echo "$response" | head -n -1)

if [ "$http_code" = "404" ]; then
    echo "${GREEN}✅ PASS - Status: $http_code${NC}"
    echo "Response: $body"
else
    echo "${RED}❌ FAIL - Status: $http_code${NC}"
fi

# Test 3: POST /profiles - 405 Error
echo "\n${YELLOW}Test 3: POST /profiles (405 Case)${NC}"
response=$(curl -s -w "\n%{http_code}" -X POST "$API_BASE_URL/profiles")
http_code=$(echo "$response" | tail -n1)
body=$(echo "$response" | head -n -1)

if [ "$http_code" = "404" ] || [ "$http_code" = "405" ]; then
    echo "${GREEN}✅ PASS - Status: $http_code${NC}"
    echo "Response: $body"
else
    echo "${RED}❌ FAIL - Status: $http_code${NC}"
fi

echo "\n${YELLOW}API Tests Complete!${NC}"
```

### Windows Batch Script (`test-api.bat`)
```batch
@echo off
set API_BASE_URL=http://localhost:3000

echo Starting API Tests...

:: Test 1: GET /profiles - Success
echo.
echo Test 1: GET /profiles (Success Case)
curl -s -w "%%{http_code}" "%API_BASE_URL%/profiles" > temp_response.txt
set /p http_code=<temp_response.txt

if "%http_code%"=="200" (
    echo ✅ PASS - Status: %http_code%
) else (
    echo ❌ FAIL - Status: %http_code%
)

:: Test 2: GET /invalid - 404 Error
echo.
echo Test 2: GET /invalid (404 Case)
curl -s -w "%%{http_code}" "%API_BASE_URL%/invalid" > temp_response.txt
set /p http_code=<temp_response.txt

if "%http_code%"=="404" (
    echo ✅ PASS - Status: %http_code%
) else (
    echo ❌ FAIL - Status: %http_code%
)

del temp_response.txt
echo.
echo API Tests Complete!
```

### How to Run Tests
```bash
# Make script executable (Linux/Mac)
chmod +x test-api.sh

# Run tests
./test-api.sh

# Or run Windows batch file
test-api.bat
```

## API Testing with curl

### Test Success Case
```bash
curl -X GET https://your-app.vercel.app/profiles
```

**Expected Response:**
```json
{
  "data": {
    "name": "john",
    "age": 20
  }
}
```

### Test Error Cases
```bash
# Test 404 - Invalid endpoint
curl -X GET https://your-app.vercel.app/invalid

# Test 405 - Wrong method
curl -X POST https://your-app.vercel.app/profiles
```

**Expected 404 Response:**
```json
{
  "error": "Not found",
  "message": "The requested resource was not found"
}
```

### Local Testing
```bash
# Install dependencies
npm install

# Start local server
npm run dev

# Test locally
curl -X GET http://localhost:3000/profiles
```

## GitHub Branching Strategy

### Recommended Workflow

1. **Main Branch** (`main`)
   - Production-ready code
   - Only contains deployed versions

2. **Development Branch** (`develop`)
   - Integration branch for features
   - Contains latest development changes

3. **Feature Branches** (`feature/api-profile-server`)
   - Individual assignment work
   - Created from `develop`
   - Merged back to `develop`

### Commands to Set Up
```bash
# Create and switch to develop branch
git checkout -b develop

# Create feature branch for API server
git checkout -b feature/api-profile-server

# After completing work
git add .
git commit -m "feat: implement profile API server with Express.js"

# Switch to develop and merge
git checkout develop
git merge feature/api-profile-server

# Delete feature branch
git branch -d feature/api-profile-server
```

## Testing Checklist
- [ ] API returns correct JSON structure
- [ ] HTTP status code 200 for GET request
- [ ] Error handling for 404 and 500 status codes
- [ ] Endpoint accessible at `/profiles`
- [ ] Successful deployment on Vercel
- [ ] Code uploaded to GitHub with proper branching
- [ ] Automated API testing script created and working
- [ ] Local development environment setup

---

*สร้างเมื่อ: 16 กุมภาพันธ์ 2026*
