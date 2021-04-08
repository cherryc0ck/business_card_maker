class ImageUploader {
  async upload(file){
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'cf1gdxg9');
    const result = await fetch(
      'https://api.cloudinary.com/v1_1/dg6gf6rtq/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;