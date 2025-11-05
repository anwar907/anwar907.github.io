// import AWS from "aws-sdk";


// const IdentityPoolId = process.env.IDENTITY_POOL_ID
// const region = process.env.REGION

// AWS.config.update({
//     region: region,
//     credentials: new AWS.CognitoIdentityCredentials({
//         IdentityId: IdentityPoolId ?? ''
//     })
// });

// const appconfig = new AWS.AppConfigData()

// let configurationToken: string | undefined

// const appId = process.env.APP_ID
// const environmentId = process.env.ENVIRONMENT_ID
// const configurationProfileId = process.env.CONFIGURATION_PROFILE_ID

// export const startSession = async (): Promise<any> => {
//     const params: AWS.AppConfigData.StartConfigurationSessionRequest = {
//         ApplicationIdentifier: appId ?? '',
//         EnvironmentIdentifier: environmentId ?? '',
//         ConfigurationProfileIdentifier: configurationProfileId ?? '',

//     }

//     const session = await appconfig.startConfigurationSession(params).promise()

//     configurationToken = session.InitialConfigurationToken

//     return configurationToken
// }

// export const getLatestAppConfig = async (): Promise<any> => {
//     if (!configurationToken) {
//         await startSession()
//     }

//     const params: AWS.AppConfigData.GetLatestConfigurationRequest = {
//         ConfigurationToken: configurationToken ?? ''
//     }

//     const configData = await appconfig.getLatestConfiguration(params).promise()

//     configurationToken = configData.NextPollConfigurationToken

//     if (configData.Configuration) {
//         return JSON.parse(configData.Configuration.toString('utf-8'))
//     } else {
//         return null
//     }
// }

import { AppConfigData, CognitoIdentityCredentials, config } from 'aws-sdk';

const IdentityPoolId = process.env.IDENTITY_POOL_ID;
const region = process.env.REGION;

config.update({
    region: region,
    credentials: new CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId || ''
    })
});

const appconfig = new AppConfigData();

let configurationToken;

const appId = process.env.APP_ID;
const environmentId = process.env.ENVIRONMENT_ID;
const configurationProfileId = process.env.CONFIGURATION_PROFILE_ID;

const startSession = async () => {
  try {
    const params = {
        ApplicationIdentifier: appId || '',
        EnvironmentIdentifier: environmentId || '',
        ConfigurationProfileIdentifier: configurationProfileId || '',
    };

    const session = await appconfig.startConfigurationSession(params).promise();

    configurationToken = session.InitialConfigurationToken;

    return configurationToken;
  } catch (error) {
    console.error('failed to init configuration session:', error);
    throw error
  }
};

const getLatestAppConfig = async () => {
    if (!configurationToken) {
        await startSession();
    }

    try {

        const params = {
            ConfigurationToken: configurationToken || ''
        };
    
        const configData = await appconfig.getLatestConfiguration(params).promise();
    
        configurationToken = configData.NextPollConfigurationToken;
    
        if (configData.Configuration) {
            return JSON.parse(configData.Configuration.toString('utf-8'));
        } else {
            return null;
        }
    } catch (error){
        console.error('Error:', error);
        throw error
    }
};

export default { startSession, getLatestAppConfig };
