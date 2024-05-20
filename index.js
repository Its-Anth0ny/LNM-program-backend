const express = require("express");
const programRoutes = require("./routes/programRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
const sequelize = require("./db/connection");
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://lnm-program-frontend.vercel.app",
        ], // Update with your frontend URL
        methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
        credentials: true, // Allow cookies to be sent with requests
    })
);
app.use(express.static(path.join(__dirname, "frontend", "build")));
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

// Define your routes
app.use("/programs", programRoutes);
app.use("/api/users", userRoutes);

// Sync Sequelize models with the database
(async () => {
    try {
        await sequelize.authenticate();
        console.log(
            "Connection to the database has been established successfully."
        );

        // Sync the models with the database
        await sequelize.sync({ alter: true });
        console.log("Models have been synchronized.");

        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();
