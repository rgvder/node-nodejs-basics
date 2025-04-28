import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

import { formatPath } from '../utils/formatPath.js';

const filePath = formatPath('wt', 'worker.js');

const performCalculations = async () => {
  const countNthFibonacci = (workerData) => {
    return new Promise((resolve) => {
      const worker = new Worker(filePath, { workerData });

      worker.on('message', (data) => resolve({ status: 'resolved', data }));
      worker.on('error', () => resolve({ status: 'error', data: null }));
    });
  };

  const promises = cpus().map((_, index) => countNthFibonacci(index + 10));

  console.log(await Promise.all(promises));
}

await performCalculations();
