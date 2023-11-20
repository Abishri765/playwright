const { test, expect } = require('@playwright/test');
const fs = require('fs').promises;
const { parseString } = require('xml2js');

const xmlFilePath = 'C://Users//user.DESKTOP-M7KQSET//Downloads//components/WORKFLOW_RULE.XML';

test('Test using XML Metadata', async ({ page }) => {
  // Read and parse the XML file
  const xmlData = await fs.readFile(xmlFilePath, 'utf-8');
  const parsedXml = await new Promise((resolve, reject) => {
    parseString(xmlData, (parseErr, result) => {
      if (parseErr) {
        reject('Failed to parse XML: ' + parseErr);
      } else {
        resolve(result);
      }
    });
  });


  const workflowRules = parsedXml.Components.WORKFLOW_RULE;

  for (const workflowRule of workflowRules) {
    const name = workflowRule.name[0];
    const description = workflowRule.Description[0];
    const moduleName = workflowRule.moduleName[0];
    const activityType = workflowRule.Activity_Type[0];
    

    console.log(`Processing WORKFLOW_RULE: ${name}`);
    console.log(`Description: ${description}`);
    console.log(`Module Name: ${moduleName}`);
    console.log(`Activity Type: ${activityType}`);

    
  }
});
