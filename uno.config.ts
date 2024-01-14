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

    // 悬浮标签输入框
    {
      "floating-label-wrapper": "relative z-0",
    },
    [
      /^floating-label-input-(.+)$/,
      ([, type]) => {
        const typeClasses = {
          filled: `rounded-t-lg px-2.5 pb-2.5 pt-5 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 `,
          outlined: `px-2.5 pb-2.5 pt-4 bg-transparent rounded-lg border-1 `,
          standard: `py-2.5 px-0 bg-transparent border-0 border-b-2 `,
        }[type];

        if (typeClasses) {
          const commonClasses =
            "block w-full text-sm text-gray-900 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600";
          return [commonClasses, typeClasses].join(" ");
        } else return `dark:focus:border-${type}-500 focus:border-${type}-600`;
      },
    ],
    [
      /^floating-label-label-(.+)$/,
      ([, type]) => {
        const typeClasses = {
          filled: `-translate-y-4 top-4 z-10 start-2.5 peer-placeholder-shown:translate-y-0 !peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4`,
          outlined: `-translate-y-4 top-2 z-10 bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 !peer-focus:top-2 !peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 start-1`,
          standard: `-translate-y-6 top-3 -z-10 peer-focus:start-0 peer-placeholder-shown:translate-y-0 !peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4`,
        }[type];

        if (typeClasses) {
          const commonClasses = [
            "text-sm text-gray-500 dark:text-gray-400",
            "absolute duration-300 transform scale-75 origin-[0]",
            "peer-focus:text-blue-600 peer-focus:dark:text-blue-500 !peer-focus:scale-75 rtl:peer-focus:left-auto",
            "peer-placeholder-shown:scale-100",
          ].join(" ");
          return [commonClasses, typeClasses].join(" ");
        } else
          return `peer-focus:text-${type}-600 peer-focus:dark:text-${type}-500`;
      },
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
          "bg-gray-200 rounded-full dark:bg-gray-700 dark:border-gray-600",
          "transition",
          "after:absolute after:content-[''] after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all",
          `peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-${c}-300 dark:peer-focus:ring-${c}-800`,
          `peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white peer-checked:bg-${c}-600`,
          "w-11 h-6 after:top-[2px] after:start-[2px] after:h-5 after:w-5",
        ].join(" "),
    ],
    [
      /^toggle-size-(.+)$/,
      ([, s = "md"]) =>
        ({
          sm: "w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4",
          md: "w-11 h-6 after:top-[2px] after:start-[2px] after:h-5 after:w-5",
          lg: "w-14 h-7 after:top-0.5 after:start-[4px] after:h-6 after:w-6",
        }[s]),
    ],

    // 键盘字符
    {
      kbd: "px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500",
    },
  ],
});
