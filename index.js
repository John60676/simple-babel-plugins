const t = require("@babel/types");
const glob = require("glob");
const fs = require("fs");
const { parse } = require("@babel/parser");

const files = glob.sync(`examples/**/*.{ts,tsx,js,jsx,scss,vue}`);
console.log(files);

files.forEach(item => {
  const content = fs.readFileSync(item, "utf-8");
  console.log(
    parse(content, {
      sourceType: "module",
    })
  );
});
// function traverseMember(ast) {
//   const propertyName = t.isStringLiteral(ast.property)
//     ? `.${ast.property.value}`
//     : `.${ast.property.name}`;
//   if (t.isMemberExpression(ast.object)) {
//     return traverseMember(ast.object) + propertyName;
//   } else {
//     if (t.isThisExpression(ast.object)) {
//       return "this" + propertyName;
//     }
//     return ast.object.name + propertyName;
//   }
// }

// module.exports = function({ types: t }) {
//   return {
//     visitor: {
//       CallExpression(path, { opts }) {
//         if (
//           !opts.disabled &&
//           t.isMemberExpression(path.node.callee) &&
//           t.isIdentifier(path.node.callee.object, { name: "console" }) &&
//           t.isIdentifier(path.node.callee.property, { name: "log" })
//         ) {
//           const { arguments } = path.node;
//           const newArguments = [];
//           arguments.forEach(arg => {
//             if (t.isMemberExpression(arg)) {
//               const data = traverseMember(arg);
//               newArguments.push(t.StringLiteral(data + "="), arg);
//             } else if (t.isIdentifier(arg)) {
//               newArguments.push(t.StringLiteral(arg.name + "="), arg);
//             } else {
//               newArguments.push(arg);
//             }
//           });
//           path.node.arguments = newArguments;
//         }
//       },
//     },
//   };
// };
