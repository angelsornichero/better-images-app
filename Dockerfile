FROM node:18

# Create workdir
WORKDIR /app/

# Copy dependencies and install it

COPY package.json ./
RUN npm install

# Copy source code
COPY . .
EXPOSE 5000
CMD ["npm", "run", "dev"]
