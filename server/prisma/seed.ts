import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

import { v4 as uuidv4 } from "uuid";


const prisma = new PrismaClient();

async function deleteAllData(orderedFileNames: string[]) {
    const modelNames = orderedFileNames.map((fileName) => {
        const modelName = path.basename(fileName, path.extname(fileName));
        return modelName.charAt(0).toUpperCase() + modelName.slice(1);
    });

    for (const modelName of modelNames) {
        const model: any = prisma[modelName as keyof typeof prisma];
        if (model) {
            await model.deleteMany({});
            console.log(`🧹 Cleared data from ${modelName}`);
        } else {
            console.error(`❌ Model ${modelName} not found in Prisma Client.`);
        }
    }
}

async function main() {
    const dataDirectory = path.join(__dirname, "seedData");

    // Ordered to prevent FK conflicts
    const orderedFileNames = [

        "inventoryMovement.json",
        "saleItem.json",
        "sale.json",
        "purchaseItem.json",
        "purchase.json",
        "variantDetail.json",
        "supplier.json",
        "product.json",
        "category.json"

    ];

    await deleteAllData(orderedFileNames);

    // Load and transform product data
    const productPath = path.join(dataDirectory, "product.json");
    const productData = JSON.parse(fs.readFileSync(productPath, "utf-8"));

    const productIdMap: Record<string, string> = {};
    const updatedProducts = productData.map((product: any) => {
        const newId = uuidv4();
        productIdMap[product.id] = newId;
        return {
            ...product,
            id: newId,
        };
    });

    // Load and transform variantDetail data
    const variantDetailPath = path.join(dataDirectory, "variantDetail.json");
    const variantData = JSON.parse(fs.readFileSync(variantDetailPath, "utf-8"));

    const updatedVariantDetails = variantData.map((variant: any) => ({
        ...variant,
        id: uuidv4(), // Replace variant detail ID too
        product_id: productIdMap[variant.product_id], // Map to updated product UUID
    }));


    /* #### Replace original file contents (optional) ##### */

    // fs.writeFileSync(productPath, JSON.stringify(updatedProducts, null, 2));
    // fs.writeFileSync(variantDetailPath, JSON.stringify(updatedVariantDetails, null, 2));



    for (const fileName of orderedFileNames.reverse()) {
        const filePath = path.join(dataDirectory, fileName);
        const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        const modelName = path.basename(fileName, path.extname(fileName));
        const model:any = prisma[modelName as keyof typeof prisma];

        if (!model) {
            console.error(`❌ No Prisma model matches the file name: ${fileName}`);
            continue;
        }

        for (const data of jsonData) {
            try {
                // Special handling for products with many-to-many categories
                if (modelName === "product") {
                    const { categoryIds, ...productData } = data;
                    await model.create({
                        data: {
                            ...productData,
                            categories: {
                                connect: categoryIds?.map((id: string) => ({ id })) || [],
                            },
                        },
                    });
                } else {
                    await model.create({ data });
                }
            } catch (error) {
                console.error(`⚠️ Failed to seed ${modelName}:`, error);
            }
        }

        console.log(`🌱 Seeded ${modelName} from ${fileName}`);
    }
}

main()
    .catch((e) => {
        console.error("🚨 Seeding failed:", e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
