FROM quay.io/gurusensei/gurubhay:latest

RUN git clone https://github.com/Anzad378/ANZADI-MD /root/anzad

WORKDIR /root/prince/

RUN npm install --platform=linuxmusl

EXPOSE 5000

CMD ["npm", "start"]
