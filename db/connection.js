const { Sequelize } = require("sequelize");
require("dotenv").config();

// const sequelize = new Sequelize(
//     "postgres",
//     "postgres.ntceigbsfotaxcnlnyhi",
//     "Bhayankar@2710",
//     {
//         host: "aws-0-ap-south-1.pooler.supabase.com",
//         dialect: "postgres",
//         dialectOptions: {
//             ssl: {
//                 require: false,
//                 rejectUnauthorized: false,
//             },
//         },
//     }
// );
const sequelize = new Sequelize(
    "herodashdb_p87n",
    "anthony",
    "qkGU8SDbvsEkIj3rtp22VkrXHr174R6d",
    {
        host: "dpg-con9014f7o1s73ffsse0-a.singapore-postgres.render.com",
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: false,
                rejectUnauthorized: false,
            },
        },
    }
);

module.exports = sequelize;
