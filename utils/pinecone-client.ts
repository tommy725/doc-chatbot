import { PineconeClient } from '@pinecone-database/pinecone';

export async function initPinecone(apiKey: string, environment: string) {
  try {
    const pinecone = new PineconeClient();

    console.log(environment);
    console.log(apiKey);

    await pinecone.init({
      environment: environment,
      apiKey: apiKey,
    });

    return pinecone;
  } catch (error) {
    console.log('error', error);
    throw new Error('Failed to initialize Pinecone Client');
  }
}
