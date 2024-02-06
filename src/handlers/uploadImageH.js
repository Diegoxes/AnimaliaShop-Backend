const { uploadImageC } = require("../controllers/uploadImageC");
const fs = require("fs").promises;
const path = require("path");

const uploadImageH = async (req, res) => {
  try {
    const file = req.files.image;

    if (!file) {
      return res
        .status(400)
        .json({ error: "El archivo de imagen no está especificado" });
    }

    const tempDir = path.join(__dirname, "../temp");
    await fs.mkdir(tempDir, { recursive: true });

    // Crea un archivo temporal
    tempFilePath = path.join(tempDir, file.name);
    await file.mv(tempFilePath);

    const imageUrl = await uploadImageC({ path: tempFilePath });

    console.log("URL de imagen generada:", imageUrl);

    return res.status(200).json({ imageUrl });
  } catch (error) {
    console.error("Error al manejar la solicitud:", error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { uploadImageH };
