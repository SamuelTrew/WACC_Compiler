FROM charlieharutaka/cetacea
RUN npm install
RUN npm run build
RUN npm start