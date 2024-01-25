const fs = require('fs');
const path = require('path');
const { Products } = require('../db');

const JSONFilePath = path.join(__dirname, '../../api/db.json');  
//const getAllProductsC = async (page = 1, perPage = 10)
const getAllProductsC = async (page=1) => {
    try {
        if (page === 'all') {
            // Si se proporciona 'all', obtener todos los productos
            const allProducts = await Products.findAll();
            console.log('Productos obtenidos de la base de datos:', allProducts.length);
            return allProducts;
        }

        // Calcular el índice de inicio y fin para la paginación
        // const startIndex = (page - 1) * perPage;
        // const endIndex = startIndex + perPage;

        // Obtener la cantidad total de productos en la base de datos
        const totalProductsCount = await Products.count();

        if (totalProductsCount === 0) {
            // Si la base de datos está vacía, cargar productos desde el archivo JSON
            const jsonData = fs.readFileSync(JSONFilePath, 'utf8');
            const data = JSON.parse(jsonData);

            if (!data || data.length === 0) throw new Error('No products were found in the JSON file');
            console.log('Productos obtenidos del archivo JSON:', data.length);

            const apiProducts = data.map(({ title, manufacturer, stock, price, image, available, description, category }) => ({
                title,
                manufacturer,    
                stock,
                price,
                image,
                available,
                description,
                category,
            }));

            // Insertar productos en la base de datos
            // const insertedProducts = await Products.bulkCreate(apiProducts);
            // console.log('Productos insertados en la base de datos:', insertedProducts.length);
            // return insertedProducts.slice(startIndex, endIndex);

            const insertedProducts = await Products.bulkCreate(apiProducts);
            console.log('Productos insertados en la base de datos:', insertedProducts.length);
            return insertedProducts;
        }

        // Obtener productos paginados desde la base de datos
        // const productsDB = await Products.findAll({
        //     offset: startIndex,
        //     limit: perPage,
        // });
        const productsDB = await Products.findAll();

        // console.log('Productos obtenidos de la base de datos (paginados):', productsDB.length);
        return productsDB;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getAllProductsC
};