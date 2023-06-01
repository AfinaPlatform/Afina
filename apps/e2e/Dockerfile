FROM cypress/included

WORKDIR /usr/src/e2e
COPY . .
EXPOSE 3002
RUN npm install
CMD ["npm", "test-ci"]