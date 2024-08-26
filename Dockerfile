FROM node:20.15-alpine AS builder

WORKDIR /usr/src/app


COPY . .

RUN npm i -g npm@latest

RUN npm ci --silent \
    && npm run build \
    && npx prisma generate

FROM builder AS runner

WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV PORT=3333
ENV SECRET_KEY_STRIPE=


COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/package-lock.json ./package-lock.json
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/prisma ./prisma
COPY --from=builder /usr/src/app/.npmrc ./.npmrc

RUN chown -R node:node /usr/src/app

USER node
EXPOSE 3333
CMD [ "npm","run","start" ]