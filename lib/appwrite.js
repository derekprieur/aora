import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';

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
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if (!newAccount) throw Error

        const avatarUrl = avatars.getInitials(username)

        await signIn(email, password)

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl,
            }
        )

        return newUser

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function signIn(email, password) {
    try {
        const session = await account.createEmailSession(email, password)
        return session
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}