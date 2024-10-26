FROM --platform=linux/amd64 node:18.20-alpine AS base

###############################################

FROM base AS dependencies

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY .yarn ./.yarn
COPY package.json yarn.lock* .yarnrc.yml ./

RUN yarn install --immutable

################################################

FROM base

WORKDIR /app

COPY --from=dependencies /app/.yarn ./.yarn
COPY --from=dependencies /app/.pnp.cjs ./.pnp.cjs
COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

CMD ["yarn", "start"]
