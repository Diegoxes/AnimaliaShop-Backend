const {Categories}=require("../db")

const createCategoriesC=async(categoryName)=>{

        if(categoryName){
            try {
                // Verificar si la categoría ya existe en la base de datos
                const existingCategory = await Categories.findOne({
                  where: { category: categoryName },
                });
            
                if (existingCategory) {
        
                  return { error: 'Categoría repetida' };
                }
            
                const newCategory = await Categories.create({
                  category: categoryName,
                });
            
                return newCategory;
              } catch (error) {
                console.error('Error al crear o verificar la categoría:', error);
                return { error: 'Error interno del servidor' };
              }
            };
            
        }

module.exports = {
    createCategoriesC
};