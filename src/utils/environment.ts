/**
 * Environment setup
 *
 * Uses dotenv to parse different env files based on process.env.NODE_ENV
 * Also parses a default.env file and merges it to the <env>.env
 */

import dotenv from 'dotenv';
import * as path from 'path';

class Environment {
  constructor() {
    const defaultEnvironment = 'development';
    const environmentFileDir = (env: string): string => {
      return path.resolve(__dirname, `../../config/${env}.env`);
    };

    dotenv.config({
      path: environmentFileDir(process.env.NODE_ENV || defaultEnvironment),
    });
    dotenv.config({
      path: environmentFileDir('default'),
    });
  }

  get(key: string): any {
    return process.env[key];
  }
}

export const env = new Environment();
