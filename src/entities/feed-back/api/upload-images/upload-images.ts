const url = "https://api.cloudinary.com/v1_1/ddbqvzsqy/image/upload";
const cloudName = "ddbqvzsqy";
const uploadPreset = "feedbacks";

export const uploadImages = async (files: File[]): Promise<string[]> => {
  const actions = files.map(upload);
  return Promise.all(actions);
};

const upload = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", uploadPreset);
    data.append("cloud_name", cloudName);
    fetch(url, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => resolve(data.url))
      .catch(() => {
        throw new Error(
          "Не получилось загрузить картинки! Попробуйте еще раз."
        );
      });
  });
};
