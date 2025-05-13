pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // Nombre de la instalación de NodeJS en Jenkins
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Restaurar cache') {
            steps {
                script {
                    try {
                        unstash 'node_modules'
                    } catch(e) {
                        echo 'No se encontró cache de dependencias'
                    }
                }
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/tu-usuario/mi-app-vite-react.git'
            }
        }

        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }

             post {
                  success {
                      stash name: 'node_modules', includes: 'node_modules/**/*'
                  }
              }
        }

        stage('Ejecutar tests') {
            steps {
                sh 'npm test -- --watchAll=false --coverage'
                junit 'junit.xml'
                archiveArtifacts 'coverage/lcov-report/*'
            }
        }

        stage('Build producción') {
            steps {
                sh 'npm run build'
                archiveArtifacts artifacts: 'dist/**/*'
            }
        }

        stage('Desplegar') {
            steps {
                // Ejemplo para S3:
                // sh 'aws s3 sync dist/ s3://tu-bucket --delete'

                // O para Netlify:
                // sh 'npm install -g netlify-cli'
                // sh 'netlify deploy --prod --dir=dist'
            }
        }
    }

    post {
        always {
            junit 'junit.xml' // Si configuraste Jest para generar reportes JUnit
            cleanWs()
        }
        success {
            slackSend channel: '#tu-canal',
                     color: 'good',
                     message: "Build exitoso: ${env.JOB_NAME} #${env.BUILD_NUMBER}"
        }
        failure {
            slackSend channel: '#tu-canal',
                     color: 'danger',
                     message: "Build fallido: ${env.JOB_NAME} #${env.BUILD_NUMBER}"
        }
    }
}
