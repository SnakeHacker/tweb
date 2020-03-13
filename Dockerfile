# run-time image
FROM alpine

COPY main/server /

ENTRYPOINT ["/server", "-c", "/conf.yaml"]