pipeline {
    agent any
    environment {
        COMPOSE_PROJECT_NAME = "${env.JOB_NAME}-${env.BUILD_ID}"
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building...' 
                // sh 'ls -l'
                // sh 'docker build -f ./database/mongo/Dockerfile . -t mongodb'
                // sh 'docker build -f ./services/users/Dockerfile . -t microservices/users-services'
                // sh 'docker build -f ./services/posts/Dockerfile . -t microservices/posts-services'
                // sh 'docker build -f ./server/Dockerfile . -t microservices/app'
                sh 'docker-compose build'
            }
            
        }

        stage('Test') {
            steps {
                echo 'Testing...' 
                
            }
            
        }

        stage('Deploy'){
            steps {
                echo 'Deploy...'
                // sh 'docker run mongodb'
                // sh 'docker run microservices/posts-services'
                // sh 'docker run microservices/users-services'
                // sh 'docker run microservices/app'
                sh 'docker-compose up -d'
            }
        }


        
    }
    
}