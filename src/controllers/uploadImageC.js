const cloudinary = require("cloudinary").v2;

const uploadImageC = async (file) => {
  try {
    const cloudinaryUploadResult = await cloudinary.uploader.upload(file.path, {
      folder: "uploads",
    });

    // Obtener la URL de la imagen de Cloudinary
    const imageUrl = cloudinaryUploadResult.secure_url;

    return imageUrl;
  } catch (error) {
    throw new Error("Error interno del servidor al subir la imagen");
  }
};

module.exports = { uploadImageC };
