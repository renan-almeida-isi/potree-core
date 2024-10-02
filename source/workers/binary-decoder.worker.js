import {handleMessage} from './binary-decoder-worker-internal.ts';
class ClassicWorker {
  onmessage = handleMessage;
  postMessage = console.log;
}
export { ClassicWorker };