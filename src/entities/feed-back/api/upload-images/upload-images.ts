const url = "https://api.cloudinary.com/v1_1/ddbqvzsqy/image/upload";
const cloudName = "ddbqvzsqy";
const uploadPreset = "feedbacks";

export const uploadImages = async (files: File[]): Promise<string[]> => {
  let images: string[] = [];
  files.forEach(async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", uploadPreset);
    data.append("cloud_name", cloudName);
    const response = await fetch(url, {
      method: "POST",
      body: data,
    });
    const result = await response.json();
    images.push(result.url);
  });
  return images;
};
