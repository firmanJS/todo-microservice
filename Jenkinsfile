#!/usr/bin/env groovy

pipeline {

        agent {
            docker {
                image 'node'
                args '-u root'
            }
        }

 
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'docker-compose build'
            }
        }
        
    
}