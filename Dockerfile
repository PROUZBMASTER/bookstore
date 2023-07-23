FROM node:18 AS build
WORKDIR /app
# Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Create a lightweight image to serve the built application
FROM node:18-alpine

WORKDIR /app

# Copy the built React application from the previous stage
COPY --from=build /app/dist .

# Install a lightweight HTTP server
RUN npm install -g serve

# Expose the application's port
EXPOSE 3000

# Serve the application using the HTTP server
CMD ["serve", "-s", "."]
