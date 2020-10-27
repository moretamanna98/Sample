pipeline{
  agent any
  stages{
    stage("checkout SCM"){
        checkout scm
    }
    stage("Install node modules"){
        echo 'npm install'
    }
    stage("Deploy"){
        echo "Deploying to EC2.."
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
