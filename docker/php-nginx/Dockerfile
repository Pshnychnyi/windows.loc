# Dockerfile
FROM php:8.2-fpm

# Install Nginx, Node.js, and Supervisor
RUN apt-get update && apt-get install -y \
    nginx \
    curl \
    gnupg \
    supervisor \
    && curl -sL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean

# Install PHP extensions
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Copy custom PHP configuration
COPY php.ini /usr/local/etc/php/

# Copy custom Nginx configuration
COPY ./docker/php-nginx/nginx.conf /etc/nginx/nginx.conf

# Copy Supervisor configuration
COPY ./docker/php-nginx/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Set the working directory
WORKDIR /app

# Copy application code
COPY . /app

# Expose port 80
EXPOSE 80

# Start Supervisor
CMD ["/usr/bin/supervisord"]
