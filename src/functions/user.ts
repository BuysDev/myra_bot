import { UserDocument } from "../discord/database/documents/UserDocuments.js";
import { DeepPartial } from "../discord/settings/@types/utils.js";

type PartialUserDocument = DeepPartial<UserDocument>;

export async function updateUserData(id: string, data: PartialUserDocument): Promise<void> {
}