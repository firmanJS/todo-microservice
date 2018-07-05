node {
    checkout scm
    def customImage = docker.build("app:${env.BUILD_ID}", "./server/")
    customImage.push()
    customImage.push('latest')
}