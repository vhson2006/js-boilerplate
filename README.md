## Description

[js-boilerplate](https://github.com/vhson2006/js-boilerplate) framework Javascript/TypeScript starter repository. Include [NestJS](https://github.com/nestjs/nest) as backend, [Create React App](https://github.com/facebook/create-react-app) as frontend.

## Preapration

This project run with PostgreSQL, Redis, Gmail, AWS SNS, Cloudinary. You should fill in all of value in backend/src/config/app.config.ts to run correctly the source.

# In backend side

```bash
$ npx typeorm migration:run -t false
$ yarn install
$ npm run start:dev
```

# In frontend side

Make sure API_URL parameter in frontend/src/common/config.tsx is configured correctly with backend uri.

```bash
$ yarn install
$ npm start
```
