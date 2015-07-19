# Basic Scaling
This is a basic example of how to horizontally scale an application using Nginx.

### Prerequisites
- Nginx
- Node.js

### Installation
1. Clone the repository
2. Execute `npm install -d`
3. Add `scaling.example.local` to your hosts file
4. Execute `nginx -c /path/to/BasicScaling/nginx/nginx.conf`
5. Execute `node app.js 2001`, `node app.js 2002` and `node app.js 2003`
