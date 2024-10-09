module.exports = {
  apps: [
    {
      name: "data-help",
      script: "npx serve ./src",
      instances: 1,
      autorestart: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss SSS",
      merge_logs: true,
      out_file: "/dev/null", // 禁用标准输出日志
      error_file: "/dev/null", // 禁用错误日志
    },
  ],
};
