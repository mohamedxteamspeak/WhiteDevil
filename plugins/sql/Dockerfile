FROM fusuf/whatsasena:latest

RUN git clone https://github.com/mohamedxteamspeak/WhiteDevil /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/ 
ENV TZ=Afriqa/Morocco
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/mohamedxteamspeak/White

CMD ["node", "bot.js"]
