FROM php:7.2-apache

RUN a2enmod ssl && a2enmod rewrite
RUN mkdir -p /etc/apache2/ssl
RUN mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"

COPY /ssl/*.pem /etc/apache2/ssl/
COPY /apache/000-default.conf /etc/apache2/sites-available/000-default.conf

EXPOSE 70
EXPOSE 443