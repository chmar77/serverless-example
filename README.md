# Some Lambda tips

## Get Start

- install serverless `npm install -g serverless`

- Create new project: `serverless create -t aws-nodejs`

- Add Credentials: look at learncode-academy tutorial (also need to create IAM in amazon first)

- Testing: 
    - Locally `serverless invoke local --function bash`
    - Server `serverless invoke --function bash`

- Deploy: `serverless deploy`

## Other

- Running script: 
    - Must `chmod +x script.sh` first

- Have to run
    - Must set up: `response must be expected as API getway`

## Haskell
- RUn `./node_modules/serverless/bin/serverless invoke --function myfunc `
- RUn `./lambda-haskell/node_modules/serverless/bin/serverless invoke local --function myfunc `

- When running stack with Main module name different from Main, must add ` -main-is Hello` in ghc-options of package.yml
- lambda seem to allow 200 current connection only

- haskell (close connection after finish http request)
