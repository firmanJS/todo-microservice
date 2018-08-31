pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'docker-compose build'
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deploy...'
                sh 'docker-compose up'
            }
        }
    }
}