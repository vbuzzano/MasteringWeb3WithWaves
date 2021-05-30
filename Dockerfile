FROM node:14

USER root

WORKDIR /home/node/app

RUN apt update && \ 
    apt install -y mongodb-clients openssh-server htop wget curl sudo less \ 
    iputils-ping dnsutils telnet

RUN echo "node:dev!2439" | chpasswd

RUN ssh-keygen -A && \
    mkdir -p /run/sshd

RUN echo "node ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
RUN echo "alias ll='ls -lhas'" >> /home/node/.bashrc

EXPOSE 3000
EXPOSE 22

CMD ["sudo", "/usr/sbin/sshd","-D"]
