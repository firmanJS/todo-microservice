node {
  docker.withRegistry(‘https://hub.docker.com/', ‘hengkyawijaya/todo-microservices) {
  
    checkout scm
    stage(‘Build’) {
      sh ‘docker-compose build’
    
    }
  }
}