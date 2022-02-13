  export const aws_config = {
    region: process.env.REGION || 'us-east-2',
    accessKeyId: process.env.ACCESS_KEY_ID || 'AKIAW6M64KCN4FS52ZX6',
    secretAccessKey: process.env.SECRET_ACCESS_KEY || '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',
    sslEnabled: true,
    apiVersion: '1.0.0',
    maxRetries: 0,
  }

  export const aws_local_config = {
    region: process.env.REGION || 'us-east-2',
    endpoint: `http://localhost:${process.env.DATABASE_PORT || 8000}`
  }
