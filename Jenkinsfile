pipeline {
    agent any
    environment {
        COMPOSE_PROJECT_NAME = "${env.JOB_NAME}-${env.BUILD_ID}"
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building...' 
                       
                sh 'set -x docker build -f ./database/mongo/Dockerfile . -t mongodb'
                sh 'set -x docker build -f ./services/users/Dockerfile . -t microservices/users-services'
                sh 'set -x docker build -f ./services/posts/Dockerfile . -t microservices/posts-services'
                sh 'set -x docker build -f ./server/Dockerfile . -t microservices/app'
            }
            
        }

        stage('Deploy'){
            steps {
                echo 'Deploy...'
  
                sh 'docker run microservices/posts-services'
                sh 'docker run microservices/users-services'
                sh 'docker run microservices/app'
            }
        }


        
    }
    
}