import { defineConfig, presetTypography, presetUno } from "unocss";
import { presetAttributify } from "unocss";

export default defineConfig({
  presets: [presetAttributify(), presetUno(), presetTypography()],
  rules: [["font-stylish", { "font-family": "Caveat" }]],
  shortcuts: [
    [
      /^btn-(.*)$/,
      ([, c]) => `block px-3 py-2 bg-${c}-5 hover:bg-${c}-7 text-sm text-white font-semibold rd-md shadow`,
    ],
  ],
});
