module.exports = function(eleventyConfig) {

    // 1. Tell Eleventy to watch your CSS file for changes during development
    eleventyConfig.addWatchTarget("./css/styles.css");

    // 2. Pass-through copy rules for static assets (REQUIRED for Netlify deployment)
    eleventyConfig.addPassthroughCopy("./css");
    eleventyConfig.addPassthroughCopy("logo.png");
    eleventyConfig.addPassthroughCopy("_redirects"); // Include the redirects file
    eleventyConfig.addPassthroughCopy("images"); // If you create an images folder, copy it

    // 3. Define the Input and Output directories
    return {
        // We explicitly define which template extensions to process
        templateFormats: ["njk", "md", "html"], 
        
        dir: {
            input: ".", 
            includes: "_includes", 
            output: "_site" 
        },
        
        // Define the template engine to use for file extensions
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};