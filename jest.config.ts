import {JestConfigWithTsJest} from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: 'ts-jest', // ts-jest/presets/js-with-ts
  testEnvironment: 'jsdom'
}

export default config;
