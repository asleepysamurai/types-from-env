### What is it?
types-from-env is a cli utility which reads a dotenv file, and generates a ts file with the keys in the dotenv file exported as a `const EnvVarNames` and a `type EnvVarKey`.

### Installation

```bash
yarn add types-from-env --dev
```
```bash
npm install --save-dev types-from-env
```

### Usage

```bash
types-from-env <path-to-dotenv-file> <path-to-output-ts-file>
```

And that's pretty much it!

Author: Balaganesh Damodaran (asleepysamurai@gmail.com)
License: MIT
