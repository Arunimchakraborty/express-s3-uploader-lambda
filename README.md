# Express TypeScript AWS S3 Uploader Microservice

This project serves as a microservice for uploading files to an AWS S3 bucket. It's built using Express and TypeScript.

## Folder Structure

- `src`: Contains the source code.
   - `config`: Configuration files.
   - `routes`: Express route handlers.
   - `services`: Services responsible for S3 upload and other functionalities.
   - `index.local.ts`: Local development entry point.
   - `index.ts`: Entry point for the application.
- `.env.example`: Example environment file.
- `.gitignore`: Git ignore file to exclude certain files from version control.
- `package.json`: Project dependencies and scripts.
- `tsconfig.json`: TypeScript configuration.
- `lambda.js`: Lambda handler file.
- `template.yaml`: Template yaml file for lambda build and deployment using sam.
- `samconfig.toml`: Config file generated by sam after build. Will be required for subsequent deployments. 
- `dist`: Compiled TypeScript files are stored here.
- `.aws-sam`: Sam build folder which contains files bundled together which would be uploaded to lambda

Note: You may not see the dist folder the first time you open the run. For that you will have to run `npm build` first

Same goes for the .aws-sam folder and samconfig.toml file. You will get this folder only after running `npm run lambda:build`. As for samconfig.toml, you will get this file after running `npm run lambda:deploy`. 

## Getting Started

### Installation

1. Clone this repository.
2. Install dependencies using `npm install`.

### Development

- To build the project, run `npm run build`. This compiles TypeScript files and generates the `dist` folder.
- For local development, use `npm run dev:local`. This starts the development server using the local configuration.
- Use `npm run dev` for general development purposes.

### AWS Lambda Deployment

- Run `npm run build` to build the project into the dist folder. 
- Run `npm run lambda:build` after building the project. This generates the .aws-sam folder for which would be used for deployment to lambda. 
- For deploying to AWS Lambda, use `npm run lambda:deploy`. Make sure you've set up your AWS credentials using the AWS CLI and make sure the ~/.aws/credentials file has appropriate privillages so that sam cli can access it. One way to do it would be to use `sudo chmod 777 ~/.aws/credentials ` command (use carefully). 
- Note: `npm run lambda:deploy` might require elevated privileges (e.g., `sudo`) for deployment.

## Environment Variables

For running this application, make sure to set up environment variables. Use the `.env.example` file as a template and create a `.env` file with appropriate credentials and configurations.
<!-- Also for github actions, make sure to add repository secrets by going into settings of repo in github. Add a single secret file `ENV_FILE` and paste all the env values there.  -->
