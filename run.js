import Fontmin from 'fontmin';


const fontmin = new Fontmin()
  .src("./fonts/DIN_Alternate/DIN_Alternate.ttf") // 源字体文件
  .use(Fontmin.glyph({ text: "0123456789" })) // 只保留这些字符
  .use(Fontmin.ttf2woff2()) // 转换为 WOFF2 格式
  .dest("output/"); // 输出目录

fontmin.run((err, files) => {
  if (err) {
    console.error(err);
  } else {
    console.log("字体优化完成！");
  }
});
