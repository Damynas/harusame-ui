# Use Node.js as base image
FROM node:alpine as builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json
COPY package.json ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the entire project into the container
COPY . .

# Build Storybook
RUN pnpm storybook-build

# Use Nginx to serve the static files
FROM nginx:alpine

# Copy the built Storybook files into Nginx's default HTML directory
COPY --from=builder /app/storybook-static /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
