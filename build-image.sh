Version=$(date '+%Y%m%d%H%M%S')
Repository="my-posts-application"

docker build . -t $Repository
docker image tag $Repository "docker-hub.doitsu.tech/$Repository:latest"
docker image tag $Repository "docker-hub.doitsu.tech/$Repository:$Version"