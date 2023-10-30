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
- `dist`: Compiled TypeScript files are stored here.

Note: You may not see the dist folder the first time you open the run. For that you will have to run `npm build` first

## Getting Started

### Installation

1. Clone this repository.
2. Install dependencies using `npm install`.

### Development

- To build the project, run `npm run build`. This compiles TypeScript files and generates the `dist` folder.
- For local development, use `npm run dev:local`. This starts the development server using the local configuration.
- Use `npm run dev` for general development purposes.

### AWS Lambda Deployment

- Run `npm run lambda:generate` after building the project. This generates all handlers and files required for AWS Lambda deployment.
- For deploying to AWS Lambda, use `npm run lambda:deploy`. Make sure you've set up your AWS credentials using the AWS CLI.
- Note: `npm run lambda:deploy` might require elevated privileges (e.g., `sudo`) for deployment.

## Environment Variables

For running this application, make sure to set up environment variables. Use the `.env.example` file as a template and create a `.env` file with appropriate credentials and configurations.
Also for github actions, make sure to add repository secrets by going into settings of repo in github. Add a single secret file `ENV_FILE` and paste all the env values there. 
