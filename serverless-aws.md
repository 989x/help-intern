### ? Named profiles for the AWS CLI 
- ? Not sure if it works ?
- https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html
```
$ export AWS_PROFILE=user1
```

### Serverless Framework and multiple AWS profiles
- Yep, the command line option is ``` --aws-profile ```. E.g.:
- https://stackoverflow.com/questions/45569065/serverless-framework-and-multiple-aws-profiles
```
serverless deploy --aws-profile prod
```
