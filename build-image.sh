# Version=$(date '+%Y%m%d%H%M%S')
Version=$(git log --format="%h" -n 1)
Repository="my-posts-application"

docker build . -t $Repository
docker image tag $Repository "docker-hub.doitsu.tech/$Repository:latest"
docker image tag $Repository "docker-hub.doitsu.tech/$Repository:$Version"

docker image push  --all-tags "docker-hub.doitsu.tech/$Repository"
