
node {
    checkout scm
    def customImage = docker.build("app:${env.BUILD_ID}", "-f ./server/Dockerfile .")
    customImage.push()
}

