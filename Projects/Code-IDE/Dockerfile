FROM centos
RUN dnf install httpd -y
COPY src-code /var/www/html/
EXPOSE 80
CMD /bin/sh -c httpd -DFOREGROUND
