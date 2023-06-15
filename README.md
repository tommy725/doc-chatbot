# chatbot-based-docs

## Served file types
  `.pdf`, `.docx`, `.txt`, '.csv'

## Run
- Clone the repo or download zip
    `git clone [https:// github.com/]`
- Pinecone setup
- Install latest nodejs
- Install packages
    `npm install`
- Set up your `.env` file
    
  ```  
  NEXTAUTH_SECRET=
  JWT_SECRET=
  NODE_ENV=development
  ```
  
  `NEXTAUTH_SECRET`
    You can generate this by running `openssl rand -base64 32` in Git Bash.
  
  `### JWT Secret`
    You can generate this by running `openssl rand -base64 32` in Git Bash.

- Run the app
    `npm run dev`
