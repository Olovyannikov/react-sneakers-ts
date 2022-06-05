const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "~": path.join(path.resolve(__dirname, "./src")),
            "@/components": path.join(path.resolve(__dirname, "./src/components")),
            "@/ui": path.join(path.resolve(__dirname, "./src/ui/index.tsx")),
            "@/layout": path.join(path.resolve(__dirname, "./src/layouts")),
            "@/assets/*": path.join(path.resolve(__dirname, "./src/assets/*")),
            "@/lib": path.join(path.resolve(__dirname, "./src/lib")),
            "@/hooks": path.join(path.resolve(__dirname, "./src/hooks")),
            "@/models": path.join(path.resolve(__dirname, "./src/models")),
            "@/page-components": path.join(path.resolve(__dirname, "./src/page-components/index.tsx")),
            "@/context": path.join(path.resolve(__dirname, "./src/context/index.tsx")),
            "@/store": path.join(path.resolve(__dirname, "./src/store")),
        },
    },
};