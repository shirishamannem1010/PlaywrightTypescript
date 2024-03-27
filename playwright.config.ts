import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';
import { on } from 'events';
import { json } from 'stream/consumers';


const config: PlaywrightTestConfig={
  testMatch:["tests/login.test.ts"],
  timeout:90000,
  use:{
    headless:false,
    screenshot:"on",
    video:"retain-on-failure"
    
  },
  reporter:[["dot"],["json", {
    outputFile:"jsonReports/jsonReport.json"
  }],
    ["html",{
      "open":"on-failure"
    }]]
}
export default config;
