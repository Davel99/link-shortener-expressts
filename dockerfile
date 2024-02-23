# Use an official Node runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install


# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port defined by the PORT environment variable
ENV PORT=3000
ENV API_KEY=testKey
ENV API_SECRET=testSecret
EXPOSE $PORT

# Command to run your application
CMD ["node", "dist/src/App.js"]
