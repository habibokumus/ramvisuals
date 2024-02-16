/** @type {import('prettier').Config} */
module.exports = {
   semi: false,
   singleQuote: true,
   tabWidth: 3,
   printWidth: 120,
   tailwindConfig: "./tailwind.config.js",
   trailingComma: "all",
   importOrder: [
     "^(react/(.*)$)|^(react$)",
     "^(next/(.*)$)|^(next$)",
     "<THIRD_PARTY_MODULES>",
     "",
     "^types$",
     "^@/components/(.*)$",
     "^@/utils/(.*)$",
     "^[./]",
   ],
   importOrderSeparation: false,
   importOrderSortSpecifiers: true,
   importOrderBuiltinModulesToTop: true,
   importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
   importOrderMergeDuplicateImports: true,
   importOrderCombineTypeAndValueImports: true,
   plugins: [
     "@ianvs/prettier-plugin-sort-imports",
     "prettier-plugin-tailwindcss",
   ],
 };
