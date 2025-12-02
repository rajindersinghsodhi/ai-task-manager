import { v4 as uuidv4 } from "uuid";

const generateUniqueId = async (modelToVerify, fieldToVerify) => {
    try {
        let exists = true;
        let uuid;
        
        while(exists){
            uuid = uuidv4();
            exists = !!(await modelToVerify.exists({ [fieldToVerify]: uuid }));
        }

        return uuid;
    } catch (error) {
        throw error;
    }
}

export { generateUniqueId };