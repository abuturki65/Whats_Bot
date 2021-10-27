FROM fusuf/whatsasena:latest

RUN git clone https://WhatsBotAR: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@github.com/WhatsBotAR/Whats_Bot /root/Whats_Bot
WORKDIR /root/Whats_Bot/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
