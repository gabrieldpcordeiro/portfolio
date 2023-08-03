// imageUtils.ts
// src/imageUtils.ts


import { ImageProps} from "../types/types";

export const getImageByName = async ({name, alt}: ImageProps): Promise<string | null> => {
    try {
        const imageSrc = await import(`../images/${name}`)
        return imageSrc.default;
    } catch (error) {
        // Handle error (e.g., image not found)
        console.error(`Image not found: ${name}`);
        return null;
    }
};

