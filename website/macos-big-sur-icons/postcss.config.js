// const IN_PRODUCTION = import.meta.env.NODE_ENV === "production";

// module.exports = {
//   plugins: [
//     IN_PRODUCTION &&
//         require("autoprefixer"),
        // require("@fullhuman/postcss-purgecss")({
        //     // content: [`./public/**/*.html`, `./src/**/*.vue`],
        //     // defaultExtractor(content) {
        //     // const contentWithoutStyleBlocks = content.replace(
        //     //     /<style[^]+?<\/style>/gi,
        //     //     ""
        //     // );
        //     // return (
        //     //     contentWithoutStyleBlocks.match(
        //     //     /[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g
        //     //     ) || []
        //     // );
        //     // },
        //     // safelist: [
        //     // /-(leave|enter|appear)(|-(to|from|active))$/,
        //     // /^(?!(|.*?:)cursor-move).+-move$/,
        //     // /^router-link(|-exact)-active$/,
        //     // /data-v-.*/,
        //     // ],
        // }),
//     ],
// };


// const purgecss = require("@fullhuman/postcss-purgecss");


// const plugins = [require("autoprefixer")];

// // if (import.meta.env.NODE_ENV === "production") {
//     plugins.push(
//         purgecss({
//             content: [
//             "./components/**/*.vue",
//             "./views/**/*.vue"
//             ],
//             whitelist: ["html", "body"],
//             whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
//         })
//     )
// // }

// module.exports = { plugins };