pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // Nombre de la instalación de NodeJS en Jenkins
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/abelMejia/react-vite-CI-CD.git'
            }
        }

        stage('Instalar dependencias') {
            steps {
                sh 'npm install --force'
            }
        }

        stage('Ejecutar tests') {
            steps {
                sh 'npm test -- --watchAll=false --coverage'
            }
        }
    }

    post {
        always {
            junit '**/reports/junit/junit.xml' // Ruta del archivo JUnit generado por jest-junit
            archiveArtifacts artifacts: '**/reports/junit/junit.xml', allowEmptyArchive: true
            cleanWs()
        }
        success {
            echo "Tests completados exitosamente."
        }
        failure {
            echo "Los tests han fallado."
        }
    }
}
