// pipeline{
//   agent any
//   stages{
//     stage("checkout SCM"){
//         steps{
//           echo "checkout scm"
//         }
//     }
//     stage("Install node modules"){
//         steps{
//           echo 'npm install'
//         }
//     }
//     stage("Deploy"){
//         steps{
//           echo "Deploying to EC2.."
//         }
//     }
//   }
// }
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
pipeline{
  agent any
  stages {
      // stage("checkout SCM"){
      //   steps {
      //     checkout scm
      //   }
      // }
      stage("Install node modules"){
          steps {
              sh 'npm -v'
              // sh 'npm install'
              //sh 'node --max_old_space_size=6144 ./node_modules/@angular/cli/bin/ng build --prod'
          }
      }
      stage("Build"){
          steps {
            echo "Building.."
          }
      }
      stage("Archive") {
          steps {
              // sh 'tar -cvzf dist.tar.gz --strip-components=1 dist'
              // archive 'dist.tar.gz'
              echo "Archiving!!"
            }
     }
      stage("Deploy"){
        steps{
          echo "Deploying to EC2.."
          }
      }
  }
}