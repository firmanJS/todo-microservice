pipeline {
    agent any
    environment {
        COMPOSE_PROJECT_NAME = "${env.JOB_NAME}-${env.BUILD_ID}"
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building...' 
                sh 'set -x'         
                sh 'docker build -f ./database/mongo/Dockerfile . -t mongodb'
                sh 'docker build -f ./services/users/Dockerfile . -t microservices_users-services'
                sh 'docker build -f ./services/posts/Dockerfile . -t microservices_posts-services'
                sh 'docker build -f ./server/Dockerfile . -t microservices_app'
            }
            
        }

        stage('Deploy'){
            steps {
                echo 'Deploy...'
  
                sh 'docker run microservices_posts-services'
                sh 'docker run microservices_users-services'
                sh 'docker run microservices_app'
            }
        }


        
    }
    
}