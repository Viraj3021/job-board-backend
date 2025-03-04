# Use an official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Step 6: Build the TypeScript project
RUN npm run build

# Expose the port that the app will run on
EXPOSE $PORT

# Set the environment variable for production (if needed)
ENV NODE_ENV=production

# Run the app
CMD ["npm", "start"]
