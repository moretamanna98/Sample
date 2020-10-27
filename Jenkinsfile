pipeline{
  agent any
  stages{
    stage("checkout SCM"){
        steps{
          echo "checkout scm"
        }
    }
    stage("Install node modules"){
        steps{
          echo 'npm install'
        }
    }
    stage("Deploy"){
        steps{
          echo "Deploying to EC2.."
        }
    }
  }
}
// pipeline {​​​​
//     agent any
//     stages {​​​​
//         stage('build') {​​​​
//             steps {​​​​
//                 echo "npx --version"
//             }​​​​
//         }​​​​
//     }​​​​
// }​​​​
