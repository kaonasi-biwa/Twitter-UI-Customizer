// const main = async () => {
//     const workerThreads = await import("node:worker_threads");
//     const WebExtRun = await (await import("./web-ext")).WebExtRun;
//     if (!workerThreads.isMainThread) {
//         const webExtRun = new WebExtRun(workerThreads.workerData);

//         workerThreads.parentPort?.on("message", async (message) => {
//             if (message === "run") {
//                 await webExtRun.run();
//             }
//         });
//     }
// };
// main();
