import { defineConfig, presetTypography, presetUno } from "unocss";
import { presetAttributify } from "unocss";

export default defineConfig({
  presets: [presetAttributify(), presetUno(), presetTypography()],
  rules: [["font-stylish", { "font-family": "Caveat" }]],
  shortcuts: [
    // 按钮
    [
      /^btn(-(.+))?$/,
      ([, , c = "blue"]) =>
        `block px-3 py-2 bg-${c}-5 hover:bg-${c}-7 text-sm text-white font-semibold rd-md shadow`,
    ],

    // 开关
    {
      "toggle-wrapper": "relative inline-flex items-center cursor-pointer",
      "toggle-input": "sr-only",
    },
    [
      /^toggle-bg(-(.+))?$/,
      ([, , c = "blue"]) =>
        [
          "w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 dark:border-gray-600",
          "transition",
          "after:absolute after:top-[2px] after:start-[2px] after:h-5 after:w-5 after:content-[''] after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all",
          `peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-${c}-300 dark:peer-focus:ring-${c}-800`,
          `peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white peer-checked:bg-${c}-600`,
        ].join(" "),
    ],
  ],
});
