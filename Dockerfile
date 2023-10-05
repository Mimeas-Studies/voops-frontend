FROM oven/bun:latest as builder

WORKDIR build
COPY ./ ./
RUN bun install
RUN bun run build
CMD bun run dist/server/entry.mjs
