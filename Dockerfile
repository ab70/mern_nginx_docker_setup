FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies for production
RUN npm install --production

# Copy the rest of the application code
COPY . ./

EXPOSE 3000

# Start the application
CMD ["npm", "start"]
