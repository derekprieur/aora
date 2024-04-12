import { Account, Client, ID } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.dprieur.aora',
    projectId: '66199111ce1f728a65bc',
    databaseId: '6619923177f2d917bef0',
    userCollectionId: '6619924be791b5d0a3f9',
    videoCollectionId: '6619926bb47da9e45cb8',
    storageId: '6619936a02518f66bdc4',
}

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform)
    ;


const account = new Account(client);

export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}